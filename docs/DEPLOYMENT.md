# Déploiement de CompatAir

La production est déployée uniquement par `.github/workflows/deploy-production.yml` après un push sur `main`. Une branche ou une pull request ne peut pas accéder aux secrets de déploiement.

## Topologie retenue

- racine Apache générale : `/var/www/html` ;
- racine dédiée CompatAir : `/var/www/html/compatair` ;
- `DocumentRoot` du vhost : `/var/www/html/compatair/current` ;
- releases immuables : `/var/www/html/compatair/releases/<git-sha>` ;
- activation atomique par changement du lien `current`.

La cible `/var/www/html` seule est volontairement refusée par le script : elle pourrait contenir d’autres sites.

## Préparation unique du serveur

À exécuter sur Debian avec un compte administrateur :

```bash
sudo install -d -o bluetouff -g www-data -m 2755 /var/www/html/compatair
sudo install -d -o bluetouff -g www-data -m 2755 /var/www/html/compatair/releases
sudo a2enmod headers rewrite ssl
```

Installer ensuite le vhost à partir de `deploy/apache/compatair.fr.conf.example`, vérifier la configuration, puis demander le certificat avec Certbot. Ne pas copier aveuglément le bloc TLS avant que Certbot ait installé les chemins de certificat adaptés au serveur.

## Secrets GitHub requis

Créer les secrets suivants dans le dépôt :

- `DEPLOY_HOST` : nom DNS ou adresse IP SSH du serveur ;
- `DEPLOY_PORT` : port SSH ;
- `DEPLOY_KNOCK_PORTS` : séquence de ports séparés par des espaces ;
- `DEPLOY_USER` : `bluetouff` ou un compte dédié sans sudo ;
- `DEPLOY_PATH` : `/var/www/html/compatair` ;
- `DEPLOY_SSH_KEY` : clé privée Ed25519 dédiée à GitHub Actions ;
- `DEPLOY_KNOWN_HOSTS` : ligne vérifiée du serveur, jamais récupérée à la volée par la CI.

La clé publique correspondante doit être ajoutée au `~/.ssh/authorized_keys` du compte de déploiement. Utiliser une clé propre à CompatAir, révocable sans affecter les accès humains.

Une fois le serveur, le DNS et le certificat vérifiés, créer la variable de dépôt `DEPLOY_ENABLED` avec la valeur `true`. Tant que cette variable est absente, le workflow de production reste volontairement inactif, même sur `main`.

## TLS et vhost

Le bootstrap installe d’abord le vhost HTTP et un contenu d’attente. Demander ensuite le certificat avec le compte Certbot déjà configuré sur le serveur :

```bash
sudo certbot certonly --webroot -w /var/www/html -d compatair.fr -d www.compatair.fr
sudo bash /home/bluetouff/compatair-bootstrap/deploy/server/activate-tls.sh
```

Le second script installe le vhost HTTPS durci, valide la configuration Apache et recharge le service. Il échoue sans modifier le vhost actif si les fichiers Let’s Encrypt n’existent pas.

## Activation du MCP

Le site statique doit d’abord avoir été déployé par GitHub Actions avec le dossier `_server`. Sur le serveur, vérifier :

```bash
test -f /var/www/html/compatair/current/_server/mcp-server.mjs
test -f /var/www/html/compatair/current/data/catalog.json
```

Le dossier d’amorçage n’est pas un clone Git et ne doit pas être mis à jour avec `git pull`. Il est renouvelé par le paquet de déploiement.

Installer le runtime Node.js 24 dédié à CompatAir. Le script utilise l’archive officielle nodejs.org avec une version et un SHA-256 épinglés. Il ne remplace pas le Node.js fourni par Debian :

```bash
sudo bash /home/bluetouff/compatair-deploy/deploy/server/install-node-runtime.sh
```

Activer ensuite le service :

```bash
sudo bash /home/bluetouff/compatair-deploy/deploy/server/install-mcp.sh
```

Contrôler le service local, le proxy HTTPS puis la négociation MCP :

```bash
curl --fail http://127.0.0.1:8787/health
curl --fail https://compatair.fr/mcp-health
curl --fail \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://compatair.fr' \
  --data '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1"}}}' \
  https://compatair.fr/mcp
```

Après ces trois contrôles, créer la variable GitHub `MCP_ENABLED` avec la valeur `true`. Les déploiements et le monitoring vérifieront alors le MCP automatiquement.

## Rollback

Lister les releases sur le serveur puis réactiver un SHA connu :

```bash
ls -1 /var/www/html/compatair/releases
bash /home/bluetouff/compatair-deploy/rollback-remote.sh /var/www/html/compatair <sha>
```

Le rollback ne reconstruit rien et ne modifie pas les anciennes releases.
