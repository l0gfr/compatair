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
- `DEPLOY_USER` : `bluetouff` ou un compte dédié sans sudo ;
- `DEPLOY_PATH` : `/var/www/html/compatair` ;
- `DEPLOY_SSH_KEY` : clé privée Ed25519 dédiée à GitHub Actions ;
- `DEPLOY_KNOWN_HOSTS` : ligne vérifiée du serveur, jamais récupérée à la volée par la CI.

La clé publique correspondante doit être ajoutée au `~/.ssh/authorized_keys` du compte de déploiement. Utiliser une clé propre à CompatAir, révocable sans affecter les accès humains.

Une fois le serveur, le DNS et le certificat vérifiés, créer la variable de dépôt `DEPLOY_ENABLED` avec la valeur `true`. Tant que cette variable est absente, le workflow de production reste volontairement inactif, même sur `main`.

## Rollback

Lister les releases sur le serveur puis réactiver un SHA connu :

```bash
ls -1 /var/www/html/compatair/releases
bash /home/bluetouff/compatair-deploy/rollback-remote.sh /var/www/html/compatair <sha>
```

Le rollback ne reconstruit rien et ne modifie pas les anciennes releases.
