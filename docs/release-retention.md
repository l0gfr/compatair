# Rétention des releases serveur

Le déploiement conserve cinq releases gérées : la production actuelle, son
prédécesseur de rollback et les trois autres répertoires les plus récents. La
date des répertoires sert uniquement à compléter ce lot, jamais à deviner le
rollback. Les noms non constitués de 40 caractères hexadécimaux minuscules,
notamment `bootstrap` et `.incoming-*`, restent intacts.
Les anciens répertoires appartenant à un autre propriétaire et les répertoires
incomplets sans `index.html` sont conservés en plus, avec leurs archives, et
signalés par `retainedLegacy` et `retainedIncomplete`. Ils nécessitent une
intervention séparée ; le script ne modifie jamais leurs droits ou propriétaire.

`scripts/prune-releases.mjs` nécessite Node 24 et `flock` (util-linux).
Déploiement, rollback manuel et purge partagent le verrou exclusif non bloquant
`<deploy_root>/.release-retention.lock`, ouvert sans suivre les liens symboliques.
Le descripteur 3 hérité reste détenu pendant toute l'activation et ses traps.
Le fichier de verrou ne doit pas être supprimé ou remplacé.

Après les contrôles de santé et les smokes publics, le déploiement enregistre
atomiquement `RELEASE_RETENTION.json`, contenant les SHA `current` et `previous`.
La purge exige un `current`, un `DEPLOYED_SHA` et un marqueur de rollback
cohérents. Si l'enregistrement ou la purge échoue après le commit, la version
saine reste active et une erreur est signalée pour intervention. Un marqueur
ancien lié à une autre version courante interdit toute purge ultérieure.

## Premier nettoyage d'un serveur existant

Les anciennes versions du workflow ne prennent pas ce verrou. Suspendre leurs
activations et vérifier qu'aucun déploiement, rollback ou transfert n'est actif
avant le premier nettoyage. Un simple `flock` ne protège pas contre ces anciens
scripts. Maintenir cette suspension pendant toute la purge ponctuelle, puis
réactiver la publication lorsque le nettoyage et ses contrôles sont terminés.
Toute purge automatique exige au préalable l'intégration de la chaîne qui
partage ce verrou. Ne pas installer un timer de purge face à l'ancien workflow.

Depuis une copie vérifiée du script, exécuter les commandes avec l'identité
propriétaire du déploiement, `compatair-deploy`, pour éviter de créer un verrou
root inaccessible aux déploiements suivants. Vérifier les SHA courant et
précédent dans les preuves de déploiement, puis les employer explicitement :

```sh
node scripts/prune-releases.mjs prune /var/www/html/compatair --previous PREVIOUS_SHA
node scripts/prune-releases.mjs record /var/www/html/compatair PREVIOUS_SHA CURRENT_SHA
node scripts/prune-releases.mjs prune /var/www/html/compatair
node scripts/prune-releases.mjs prune /var/www/html/compatair --apply
```

La commande `prune` est une simulation par défaut. `--keep N` exige au moins
deux releases. `--artifacts /chemin/absolu/compatair-deploy` inclut seulement les
archives et checksums aux noms exacts des SHA effectivement supprimés :
`compatair-SHA.tar.xz`, `compatair-SHA.tar.gz`, `compatair-admin-SHA.tar.gz` et
leurs `.sha256`. Le déploiement fournit ce répertoire depuis son archive d'entrée.
Les archives orphelines dont la release avait déjà disparu restent intactes.
Si leur suppression échoue après celle d'une release, elles nécessitent aussi
un contrôle séparé, car elles deviennent orphelines.

Les fichiers historiques de verdicts partagés par liens physiques sont
préservés dans chaque release conservée : la purge retire uniquement les noms
appartenant aux versions supprimées. Tout lien symbolique ou fichier spécial
dans un arbre candidat bloque la purge avant sa première suppression.
Les droits effectifs d'écriture et de traversée sont vérifiés sur tous les
répertoires candidats, leur parent et le dossier d'archives avant la première
suppression. Une erreur ultérieure ou une interruption peut laisser un arbre
partiel : une nouvelle simulation réévalue les versions encore présentes,
préserve les répertoires incomplets et exige toujours un `index.html` valide
pour la production et le rollback. Les archives devenues orphelines restent
intactes. Aucun précontrôle ne rend une suppression récursive atomique.

Pour un inventaire sans créer de verrou ni écrire, importer
`planRetention(root, { previous, keep: 5 }, false)`. Ce préplan ne réserve pas
l'état du serveur ; la commande effective revalide l'inventaire sous verrou.

## Validation

```sh
node --test scripts/prune-releases.node-test.mjs
bash -n scripts/deploy-remote.sh scripts/rollback-remote.sh
```

Les tests de permission s'exécutent sous une identité non root, comme les jobs
CI. Ils couvrent les protections active/rollback, les courses, les liens
symboliques et physiques, les marqueurs incohérents, les erreurs de suppression
et le verrou réellement partagé entre processus.
