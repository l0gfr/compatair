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

Le secret `CRUX_API_KEY` est facultatif. Lorsqu’il contient une clé Google Cloud limitée à la Chrome UX Report API, le workflow joint au rapport Lighthouse les LCP, INP et CLS terrain disponibles pour l’origine mobile. Sans clé ou sans cohorte CrUX suffisante, l’artefact indique explicitement `not_configured` ou `insufficient_data` et ne remplace jamais ces mesures par les valeurs de laboratoire.

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
test -f /var/www/html/compatair/current/_server/ucp-core.mjs
test -f /var/www/html/compatair/current/data/catalog.json
test -f /var/www/html/compatair/current/data/verdicts.json
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

Ce script installe aussi le répertoire privé `/var/lib/compatair`, créé par systemd avec le mode `0700`. Le service y conserve les agrégats de demande, de funnel, d’acquisition et d’usage MCP. La clé HMAC de télémétrie est créée au premier démarrage dans `.mcp-telemetry-secret` avec le mode `0600` et reste hors des releases. Après une mise à jour de l’unité systemd, rejouer la même commande une fois puis vérifier :

```bash
sudo systemctl show compatair-mcp.service -p StateDirectory -p Environment
sudo test -d /var/lib/compatair
```

Contrôler le service local, le proxy HTTPS puis la négociation MCP :

```bash
curl --fail http://127.0.0.1:8787/health
curl --fail https://compatair.fr/mcp-health
curl --fail https://compatair.fr/data/mcp-usage.json
curl --fail 'https://compatair.fr/api/v1/compatibility?compressorId=einhell-tc-ac-240-50-10-of&toolId=einhell-tc-pe-150'
curl --fail 'https://compatair.fr/api/v1/search?q=debit&locale=fr&limit=1'
curl --fail https://compatair.fr/.well-known/ucp
curl --fail \
  -H 'Content-Type: application/json' \
  -H 'UCP-Agent: profile="https://compatair.fr/examples/ucp/platform-profile.json"' \
  --data '{"ucp":{"version":"2026-04-08"},"intent":"will_it_work","configuration":{"compressor":{"id":"kaeser-eurocomp-epc-840-100"},"tools":[{"id":"einhell-tc-pe-150"}],"mode":"successive"}}' \
  https://compatair.fr/api/ucp/v1/compatibility/evaluate
curl --fail \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://compatair.fr' \
  --data '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"smoke","version":"1"}}}' \
  https://compatair.fr/mcp
```

Après ces contrôles, créer la variable GitHub `MCP_ENABLED` avec la valeur `true`. Les déploiements et le monitoring vérifieront alors le MCP automatiquement.

L’ajout de l’API ou une modification de ses en-têtes inter-origines nécessite de préparer le vhost avant le premier déploiement qui les vérifie :

```bash
sudo bash /home/bluetouff/compatair-bootstrap/deploy/server/install-mcp.sh --prepare-release
```

Ce mode installe et approuve la configuration versionnée, exécute `apache2ctl configtest`, recharge Apache et vérifie la santé de la release encore active. Le smoke du nouveau contrat MCP est volontairement différé au workflow qui active ensuite la release correspondante. Un paquet statique seul ne peut pas modifier `/etc/apache2`.

La découverte UCP autorise une sortie HTTPS publique afin de lire le profil de la plateforme appelante. L’unité systemd refuse les plages privées, locales, link-local, multicast et réservées ; le serveur vérifie en plus toutes les réponses DNS, épingle l’adresse publique retenue, refuse les redirections et borne taille et durée. Ne remplacer ces règles ni par un egress sans filtre ni par une liste de domaines codée en dur.

La migration des anciennes URL `/compatibilite/` relève aussi de ce vhost. Avant le premier déploiement qui contient le gestionnaire de migration, installer la nouvelle configuration avec `install-mcp.sh`. L’ancien service répondra temporairement `404` sur ce proxy, puis l’activation atomique du nouveau service rendra les redirections `301` et retraits `410` disponibles. Le workflow vérifie ensuite une ancienne URL réelle et une référence inconnue ; il ne déclare pas la production valide si le vhost n’a pas été préparé.

Les URL `/go/<offer-id>` sont également réservées au service Node. Aucune page Astro de redirection marchande ne doit être générée ni apparaître dans le sitemap. Le service refuse une offre inconnue, une destination hors liste blanche ou une collecte vieille de plus de 48 heures. Une requête `HEAD` permet au workflow de vérifier une offre active sans incrémenter le compteur agrégé de clics. Le flux et le site statique doivent être reconstruits avant cette échéance afin que l’offre ne reste pas affichée après son expiration côté serveur.

## Récupération des invariants

### Stockage GitHub Actions

Après une activation vérifiée, un job séparé nettoie uniquement les anciennes archives `compatair-production-*`, les rapports Lighthouse complets devenus inutiles et les caches CodeQL redondants. Il exige que le SHA public soit celui du workflow et protège la production ainsi que le dernier autre déploiement réussi. Les exécutions en cours, les artefacts inconnus, les preuves de sources, les résultats de sécurité et les invariants signés ne sont jamais ciblés. Seul ce job, exécuté depuis `main` après validation, reçoit `actions: write`; il ne reçoit aucun secret de déploiement. Il conserve les deux bases CodeQL les plus récentes par famille de cache sur `main`.

Les archives de release expirent après 7 jours dans GitHub. Les releases installées sur le serveur et la procédure de rollback restent indépendantes de cette copie temporaire. Les invariants signés restent conservés 90 jours. Lighthouse produit un résumé compact conservé 7 jours; les rapports complets sont joints uniquement en cas d'échec et expirent après 3 jours. Une prévisualisation complète du site est facultative via `CI` / `workflow_dispatch` / `upload_preview` et expire après 2 jours. Les snapshots manuels expirent après 3 jours et les rapports de licences après 7 jours. Les archives gzip ne sont pas recompressées par Actions.

Le nettoyage ne lance ni build ni analyse IA et ne crée aucun artefact supplémentaire. Un dépassement de 512 Mio pour les artefacts ou les caches produit un avertissement, sans supprimer les preuves protégées. La limite native des caches retournée par GitHub pour ce dépôt est de 10 Go; elle ne constitue pas le budget cible. Le nettoyage après déploiement évite d'attendre son éviction automatique. Aucun workflow ne publie de package npm ou de conteneur, et `package.json` conserve `private: true`.

Pour inspecter la sélection sans suppression, utiliser `GITHUB_REPOSITORY=l0gfr/compatair GITHUB_SHA=<sha-public> node scripts/prune-actions-storage.mjs` avec une authentification GitHub CLI. Ajouter `--apply` uniquement pour appliquer cette même politique. Références : [artefacts Actions](https://docs.github.com/en/rest/actions/artifacts), [caches Actions](https://docs.github.com/en/rest/actions/cache), [compression et rétention](https://github.com/actions/upload-artifact#inputs).

Chaque déploiement compare l’historique candidat avec le snapshot du commit Git précédent avant de consulter la production. Cette référence indépendante reste disponible lorsqu’un incident rend le site public inaccessible. Après signature, le workflow conserve aussi pendant 90 jours un artefact GitHub Actions dédié avec l’historique, son manifeste Ed25519, les clés publiques, le widget versionné et son empreinte épinglée.

Un push normal continue d’échouer si les invariants live ne peuvent pas être téléchargés. Pour restaurer le service pendant une panne, lancer manuellement `Deploy production` avec l’option `recovery_mode`. Ce mode est refusé sur un push automatique, reste visible dans le journal GitHub Actions et conserve les contrôles Git, SRI, tests, signatures et audits. Après restauration, relancer un déploiement normal afin de confirmer les comparaisons avec la surface live.

## Snapshot mensuel de l’Observatoire

Le fichier `src/data/document-quality-observatory-history.snapshot.json` est append-only. Lors de la première publication d’un mois, ajouter une entrée `monthly` avec la période, la date de capture et les six mesures explicites. Le build refuse une édition du catalogue dont le mois ne possède pas de snapshot, les workflows refusent la modification ou la suppression d’une période déjà publiée, et l’historique est inclus dans le snapshot JSON signé de l’Observatoire.

Une seule période reste une ligne de base avec une tendance `insufficient_data`. Les objectifs chiffrés qui ne reposent pas encore sur assez d’observations restent `pending_baseline` ou `pending_trend`; ils ne doivent pas être remplis rétroactivement pour embellir la série.

## Priorités issues de la demande

Le fichier agrégé reste privé sur le serveur. Pour produire un rapport local sans publier les petits volumes :

```bash
scp bluetouff@serveur:/var/lib/compatair/demand-aggregates.json /chemin/prive/
pnpm build
pnpm data:rank-demand -- /chemin/prive/demand-aggregates.json
```

Le rapport `demand-priorities.json` exclut toute dimension comptant moins de cinq contributions. Il rapproche ensuite la demande agrégée du snapshot public `data/verdicts.json` et matérialise une file d’action bornée aux vingt couples insuffisants les plus demandés. Il fait aussi remonter les outils recherchés qui disposent du plus grand volume pondéré de couples encore insuffisants. Une seconde liste classe les compresseurs selon la somme de demande visible bloquée lorsque le besoin FAD de l’outil est déjà connu : elle sert à prioriser la recherche de courbes FAD et de pressions manquantes sans attribuer au compresseur une donnée absente côté outil.

La couverture pondérée vaut `somme(demande outil × couples concluants) / somme(demande outil × couples éligibles)`. L’objectif opérationnel est fixé à 80 %. Le rapport publie aussi la couverture non pondérée, la part des sélections d’outils effectivement visible après suppression et le nombre d’outils visibles sans verdict exploitable. En l’absence d’agrégats privés suffisants, le statut reste `insufficient_data` : le build public ne remplace jamais la demande observée par une pondération uniforme.

`compatair-weekly-insights.timer` génère automatiquement chaque lundi un rapport privé consolidé dans `/var/lib/compatair/reports/latest.json`, plus une archive datée. Il croise la couverture pondérée, les vingt déficits prioritaires, le funnel, les canaux organic/agent/referral/widget/API/MCP/UCP et les conversions explicites. Le service n’a aucun accès réseau, écrit avec un `UMask=0077` et conserve uniquement des compteurs fermés. Un rapport vide reste explicitement `insufficient_data` au lieu de simuler une demande.

Pour mesurer la complétion du calculateur sans exporter de navigation brute :

```bash
scp bluetouff@serveur:/var/lib/compatair/product-funnel-aggregates.json /chemin/prive/
pnpm data:report-funnel -- /chemin/prive/product-funnel-aggregates.json
```

Le rapport `product-funnel-report.json` refuse de publier un taux lorsque les compteurs sont incohérents, par exemple si des pertes réseau conduisent à plus de complétions reçues que de démarrages.

Pour préparer une candidature d’affiliation sans déclarer une disponibilité marchande non vérifiée, produire la shortlist privée à partir du catalogue construit et d’un export GSC daté :

```bash
pnpm data:report-affiliate-readiness -- --catalog dist/data/catalog.json --offers dist/data/offers.json --gsc-pages /chemin/prive/gsc_pages.csv --gsc-dates /chemin/prive/gsc_dates.csv --gsc-start YYYY-MM-DD --gsc-end YYYY-MM-DD --acquisition /chemin/prive/acquisition-aggregates.json --funnel /chemin/prive/product-funnel-aggregates.json --output /chemin/prive/affiliate-readiness.json
```

Les options `--acquisition`, `--funnel` et `--indexation` sont facultatives : leur absence produit un statut `partial` et une anomalie d’accès explicite, jamais une valeur de remplacement. Les totaux GSC utilisent la dimension date ; la dimension page sert au classement et tout écart entre les deux agrégations est signalé. Le classement retient uniquement les compresseurs actifs appariables par EAN, GTIN, MPN ou SKU distributeur exact. Il privilégie ensuite les signaux GSC observés puis la qualité d’appariement et de preuve ; une référence sans offre datée reste `not_verified`.

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

### Drill de panne isolé

Le drill ne doit jamais être exécuté sur `/var/www/html/compatair`. Il utilise une racine, un port, une unité systemd, un état et un vhost locaux distincts. L'installateur vérifie le SHA actif, refuse d'écraser un staging divergent, installe les frontières fixes puis exécute immédiatement le drill :

```bash
sudo bash deploy/server/install-staging-drill.sh
```

Le drill exécute ensuite réellement un MCP invalide, une configuration Apache rejetée, une interruption `TERM` juste après le changement de lien et un échec du smoke post-activation. Après chaque défaut, il exige le retour au SHA initial et une santé MCP valide. Chaque preuve JSON `1.1.0` est conservée avec le mode `0600` sous `/var/lib/compatair-staging/failure-drills/` :

Chaque réexécution de l'installateur compare le staging à la release active avant de lancer l'exercice. Cette commande est une opération serveur explicite. Les tests locaux vérifient le contrat et la syntaxe, mais ne sont pas présentés comme la preuve du drill systemd/Apache réel. Une évolution majeure du serveur MCP est refusée par le déploiement si le dernier drill réussi date de plus de 90 jours.

### Garde transactionnel de production

Avant la bascule, le déploiement compare le vhost de la release à la copie approuvée par root sous `/etc/compatair/approved/compatair.fr.conf`. Le compte `compatair-deploy` ne peut appeler qu’une commande root sans argument, `/usr/local/sbin/compatair-converge-mcp-config`, qui réapplique cette copie, exécute `apache2ctl configtest` puis recharge Apache avec restauration automatique en cas d’échec. Un changement de vhost exige donc une nouvelle exécution manuelle de `install-mcp.sh` par root.

Après la bascule du lien et le redémarrage MCP, les smokes HTTPS et SEO s’exécutent alors que `activation_pending=true`. Tout échec quitte le script, déclenche le trap de rollback et restaure le SHA précédent. Le job GitHub répète ensuite les smokes depuis un second réseau ; cette seconde vérification ne remplace pas le garde transactionnel distant.

## Rollback manuel

Lister les releases sur le serveur puis réactiver un SHA connu :

```bash
ls -1 /var/www/html/compatair/releases
bash /home/bluetouff/compatair-deploy/rollback-remote.sh /var/www/html/compatair <sha>
```

Le rollback ne reconstruit rien et ne modifie pas les anciennes releases.
