# Répertoire des preuves : indexation en mémoire

Le profil natif du build diagnostique arrêté (`/tmp/compatair-v5-cold-build-native-sample.txt`, empreinte dans `controls.json`) montre 767 échantillons dans une pile `module evaluation → ArrayMap → ArrayFilter`. Il ne permet pas d'attribuer avec certitude cette pile à un callback JavaScript. La lecture du code confirme séparément un parcours de tous les événements pour chaque produit lors de l'import de `evidence-history-directory.ts`.

La version précédente est archivée dans [evidence-history-directory.before.ts.txt](./evidence-history-directory.before.ts.txt). La correction regroupe les références aux événements une fois par identifiant produit. Chaque entrée conserve un tableau indépendant, trié avec le comparateur existant. Le tri du répertoire, les données et les erreurs restent inchangés. Une table des URL est construite après ce tri, en conservant la première occurrence comme l'ancien `findIndex`.

La préparation des groupes passe ainsi d'un filtrage produit × tous les événements à un parcours des événements, puis aux mêmes tris par produit. Les recherches d'URL n'effectuent plus de parcours complet du répertoire. Ce constat décrit l'algorithme ; aucun gain de temps ou de mémoire à 100 000 références n'est revendiqué avant le nouveau replay.

Les suites existantes `public-directories.test.ts` et `evidence-history.test.ts` ont été exécutées sous Node 24.19.0 : **7 tests réussis, 0 échec**. Le test ajouté compare exactement le répertoire complet à l'ancienne construction filtre/tri, toutes les URL et l'immuabilité des événements source. Les preuves, tickets, intentions, cohortes MCP, valeurs techniques et noyau de calcul n'ont pas été modifiés par cette correction.

Résultats inspectables : [controls.json](./controls.json). Le profilage du nouveau replay reste géré séparément par le protocole de publication.
