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
sudo bash /home/bluetouff/compatair-bootstrap/deploy/server/install-node-runtime.sh
```

Activer ensuite le service :

```bash
sudo bash /home/bluetouff/compatair-bootstrap/deploy/server/install-mcp.sh
```

Ce script installe aussi le répertoire privé `/var/lib/compatair`, créé par systemd avec le mode `0700`. Le service y conserve uniquement `demand-aggregates.json`, composé de compteurs agrégés. Après une mise à jour de l’unité systemd, rejouer la même commande une fois puis vérifier :

```bash
sudo systemctl show compatair-mcp.service -p StateDirectory -p Environment
sudo test -d /var/lib/compatair
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

## Priorités issues de la demande

Le fichier agrégé reste privé sur le serveur. Pour produire un rapport local sans publier les petits volumes :

```bash
scp bluetouff@serveur:/var/lib/compatair/demand-aggregates.json /chemin/prive/
pnpm build
pnpm data:rank-demand -- /chemin/prive/demand-aggregates.json
```

Le rapport `demand-priorities.json` exclut toute dimension comptant moins de cinq contributions. Il rapproche ensuite la demande agrégée du snapshot public `data/verdicts.json` afin de faire remonter les outils recherchés qui disposent du moins de compresseurs concluants.

## Statistiques privées sans cookie

Le rapport GoAccess est généré à partir du journal Apache de CompatAir, sans JavaScript de suivi côté visiteur. Les adresses IP sont anonymisées au niveau 2, les paramètres d’URL sont supprimés et seules les données des 90 derniers jours sont affichées.

Après un déploiement contenant les scripts d’administration courants, exécuter :

```bash
sudo bash /home/bluetouff/compatair-bootstrap/deploy/server/install-stats.sh
```

Le script demande un identifiant et un mot de passe d’au moins 16 caractères sans les afficher. Le rapport protégé est disponible sur `https://compatair.fr/stats/` et actualisé toutes les 15 minutes par `compatair-stats.timer`.

Contrôler l’automatisation avec :

```bash
sudo systemctl status compatair-stats.timer --no-pager
sudo systemctl status compatair-stats.service --no-pager
```

## Rollback

Lister les releases sur le serveur puis réactiver un SHA connu :

```bash
ls -1 /var/www/html/compatair/releases
bash /home/bluetouff/compatair-deploy/rollback-remote.sh /var/www/html/compatair <sha>
```

Le rollback ne reconstruit rien et ne modifie pas les anciennes releases.
