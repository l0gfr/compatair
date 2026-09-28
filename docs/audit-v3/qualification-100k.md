# Qualification de publication et restauration à 100 000

Le protocole et ses budgets sont dans `config/qualification-100k.json`, déclarés avant les essais et identifiés par SHA-256 dans le résultat. Le plafond d'archive de production reste 184 549 376 octets, le service reste sous le plafond de 256 MiB. Les autres budgets sont des critères d'acceptation d'ingénierie, pas des SLA constatés. Aucun changement de stack, de TLS ou de filtrage réseau n'est inclus.

## Corpus et séparation des mesures

```sh
node scripts/audit-v3/qualification-100k.mjs --plan dist/data/catalog.json /tmp/qualification-plan.json
node scripts/audit-v3/qualification-100k.mjs --storage-service dist/data/catalog.json /tmp/qualification-service.json
node scripts/audit-v3/qualification-100k.mjs --prepare-source dist/data/catalog.json /tmp/qualification-source.json
```

Le corpus conserve chaque référence originale, puis reproduit cycliquement tous les profils avec des identifiants de laboratoire. La proportion outils/compresseurs vient du catalogue source. Le rapport conserve la distribution conjointe du type, de la qualité, du modèle de consommation, de la courbe FAD, du cycle et de la pression. Les rares profils et les absences ne disparaissent pas. Les références synthétiques ne sont jamais des références documentées supplémentaires.

`--storage-service` mesure la construction SQLite puis lance le service dans un processus séparé, avec les limites mémoire existantes. Il ne reconstruit aucune matrice de verdicts. Les phases de cache froid et chaud exposent chacune effectif, p95, p99, statuts HTTP et erreurs. Les requêtes sont exclusivement loopback. Le limiteur reste à 120/minute ; une sonde distincte vérifie les 429 après les 100 requêtes normales. Les 50 observations par phase donnent un p99 grossier. Le cache disque du système n'est pas contrôlé et la mémoire mesure aussi le client local. Aucun résultat ne vaut qualification de trafic de production.

## Essai de publication à exécuter dans le répertoire isolé

`--prepare-source` retourne un chemin temporaire dans son JSON, avec `BENCHMARK_ONLY`, sans `.git` ni workflows de déploiement. Il conserve les sources existantes et les enrichit uniquement dans cette copie. Ne jamais envoyer cette copie sur le serveur public. Le marqueur est une identification de laboratoire, pas une autorisation de publication.

Sur une machine de qualification Debian, enregistrer avant essai : SHA source, hashes du catalogue/configuration/lockfile, Node/pnpm, CPU, RAM et espace libre (`df -B1`). Prévoir l'espace pour les sources, deux builds, l'archive non compressée et sa restauration. Appliquer les budgets à chaque essai, sans les augmenter après un échec.

Dans la copie isolée, avec un environnement de build sans secrets ni variables Git héritées, mesurer séparément avec `/usr/bin/time -v` et `timeout 1500s` :

1. `node scripts/prepare-indexation.mjs --offline`, `node node_modules/astro/bin/astro.mjs build --force`, puis `node scripts/build-catalog-database.mjs` pour le build froid complet. Conserver les journaux, codes de sortie, durée totale, maximum RSS de chaque processus, nombre de fichiers et octets. Aucun appel de source externe n'est nécessaire à cet essai.
2. Rejouer le build sans `--force` pour le chaud. Conserver séparément les compteurs de calcul/réutilisation et le coût de génération HTML. Ne pas assimiler cache moteur et durée de publication.
3. Construire l'archive avec les paramètres de production : `tar -C dist -cf /tmp/qualification.tar .` puis `xz -T2 -6 -k /tmp/qualification.tar`. Mesurer temps, mémoire, taille et SHA-256 ; le plafond de production doit passer. Le fichier non compressé est temporaire et sa taille doit rester visible dans le bilan d'espace.
4. Restaurer dans un **nouveau** répertoire temporaire : `tar -xf /tmp/qualification.tar.xz -C "$qualification_restore"`. Mesurer avec `timeout 300s` et `/usr/bin/time -v`. Comparer le manifeste trié des SHA-256 de tous les fichiers à celui de `dist`, puis ouvrir la base restaurée en lecture seule et rejouer les tests de service. Un checksum d'archive seul ne prouve pas la restauration.
5. Ne déclarer le build qualifié que si toutes les phases et leurs budgets passent. Conserver l'échec et sa phase, puis profiler cette phase avant toute proposition de changement de stack.

Les commandes ci-dessus décrivent l'essai complet ; le rapport JSON laisse chaque étape non exécutée à `not-executed`. Le résultat service à 100 000 ne remplit jamais les cases build, archive ou restauration.

## Restauration de service et retour arrière

Le drill serveur existant couvre déjà MCP invalide, Apache invalide, interruption après bascule et échec du smoke. La procédure détaillée et les chemins sont dans `docs/DEPLOYMENT.md`, section « Drill de panne isolé ». Le script `deploy/server/install-staging-drill.sh` doit rester limité au staging distinct, jamais à la racine de production. Mesurer le retour au SHA initial, la santé MCP, les erreurs et la durée ; budget proposé 120 secondes. La réussite de tests locaux ne remplace pas ce drill Apache/systemd.

Pour un retour arrière réel, utiliser le script existant avec un SHA conservé :

```sh
bash /home/bluetouff/compatair-deploy/rollback-remote.sh /var/www/html/compatair <sha-conserve>
```

Le script rebascule vers une release immuable, redémarre le service et en vérifie la santé. Le protocole demande ensuite les smokes publics du SHA exact, les canoniques et le contrat API. Il n'efface ni les releases précédentes ni les cohortes historiques MCP. Aucune étape de validation humaine des références n'est ajoutée. La restauration système réelle et la publication restent des étapes distinctes, explicitement non exécutées dans ce contre-audit local.
