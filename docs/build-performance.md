# Calculs incrémentaux et capacité

Le build Astro réutilise un cache local dans `.astro/compatibility-cache-v1`.
Il concerne le snapshot des compatibilités fixes, pas le rendu de toutes les
pages ni les calculs interactifs du navigateur. Les tests du moteur restent
exécutés sans ce cache.

## Invalidation

Chaque compresseur et chaque outil est identifié par une empreinte de sa fiche
complète, sources et confiance incluses. Une ligne compressée contient les
résultats d'un outil pour les compresseurs du manifeste précédent. Les identités
sont reconstruites dans l'ordre public habituel : outil, puis compresseur.

Avec un cache valide et un moteur inchangé :

| Modification | Calculs du snapshot à refaire |
| --- | --- |
| CSS, header, guide sans changement du catalogue | Aucun |
| Un outil fixe ajouté ou modifié | Un par compresseur |
| Un compresseur ajouté ou modifié | Un par outil fixe |
| Retrait ou réorganisation de fiches | Aucun pour les fiches conservées |
| Source ou confiance d'une fiche modifiée | Tous les couples de cette fiche |
| Code du domaine, dépendances ou runtime modifiés | Tous |

L'empreinte du moteur couvre les fichiers de production de `src/domain`, le
lockfile, la configuration du cache et les versions Node, V8 et ICU. Elle ne
repose donc pas uniquement sur une augmentation manuelle de `CALCULATION_VERSION`.
Une nouvelle date ou version de catalogue renouvelle les métadonnées et le hash
public sans forcer le recalcul des couples dont les fiches sont identiques.

Les lignes sont vérifiées par SHA-256, taille maximale et schéma strict avant
réutilisation. Un cache absent, incompatible, endommagé ou indisponible provoque
une reconstruction, jamais un résultat approximatif. Les fichiers sont écrits
atomiquement et les lignes obsolètes sont supprimées. Ce cache est jetable et
ne fait pas partie des preuves documentaires ou des données publiées.

## Budget et CI

Le cache sur disque est plafonné à 64 Mio. S'il dépasse ce budget, le build
continue avec les calculs exacts, sans conserver de cache partiel. La CI de
production restaure et sauvegarde uniquement ce répertoire, depuis `main`.
Les PR peuvent le restaurer mais ne le sauvegardent jamais. Les tests du moteur
restent à froid. Les données, tests, signatures,
liens internes et Lighthouse restent contrôlés avant publication.

Le nettoyage GitHub conserve seulement le dernier cache de calcul de `main`,
ainsi que le dernier cache CodeQL par famille, indépendamment des archives de
production et de retour arrière. Il ne stocke
ni `dist` ni l'export public monolithique dans le cache Actions.

La ligne `[verdict-cache]` du build donne les nombres de couples réutilisés et
calculés, les lignes invalides, les octets conservés et le temps du snapshot.
Pour une comparaison reproductible, déplacer temporairement le répertoire de
cache, lancer `pnpm build`, puis relancer sans modification. Comparer les logs
et le SHA-256 de `dist/data/verdicts.json` ; les deux exports doivent être identiques.

## Dates du sitemap

Le build lit en une fois les changements Git depuis le dernier merge. Pour cette
portion linéaire de l'historique, la première modification d'un fichier permet
de répondre aux requêtes `lastmod` sans relancer Git pour chaque URL. Le choix
suit l'ordre de parcours des commits, même si leurs dates ne sont pas monotones.
Les sources plus anciennes conservent la requête Git exacte, avec mémorisation
par groupe de fichiers. Aucun horodatage de build ne remplace une date éditoriale.

## Mémoire du serveur

Le serveur actif utilise l’index SQLite décrit ci-dessous. Le lecteur compact de
la matrice historique reste disponible pour les exports et la migration ; il ne
fait plus partie du démarrage normal du service.

## Limites restantes

Le cache évite les recalculs ; il n'élimine pas le coût cartésien de l'export JSON
historique. Cet export est encore sérialisé, signé, contrôlé et distribué en
entier. Le lecteur reste limité à dix millions de lignes. Il faut migrer ce
contrat vers des partitions versionnées et un accès ciblé avant de viser des
dizaines de millions de couples. Augmenter simplement les limites mémoire ne
résout pas ce problème.

Le manifeste de signature `2.0.0` calcule désormais les empreintes de fichiers en flux et authentifie le chemin, la taille et le SHA-256 par Ed25519. Le blocage de lecture au-delà de 2 Gio est couvert par une fixture réelle de cette taille, sous 256 Mio de mémoire. La génération et la distribution de l’export intégral demeurent distinctes de cette correction.

Le mode incrémental expérimental d’Astro 7.2 est activé sur les fiches, usages et guides. Les clés couvrent les données, la navigation éditoriale, le groupe canonique, l’indexabilité et le jour UTC (offres datées). Astro ajoute l’empreinte des modules dépendants. Une modification du catalogue importé globalement peut encore invalider toute une famille : le rendu strictement limité à un produit n’est pas revendiqué. Le cache HTML est jetable, borné à 384 Mio, réservé aux builds main, et seule sa dernière copie est conservée dans Actions.

## Service indexé, moteur 1.4.0

Le serveur ouvre la base SQLite de la release et calcule les couples demandés avec le noyau commun. Ni les tableaux de produits ni la matrice publique ne sont chargés au démarrage. Le cache de résultats est borné à 2 Mio, le cache SQLite à 8 Mio, mmap désactivé. `pnpm benchmark:mcp-startup` contrôle l’API HTTP réelle sous un tas de 128 Mio et un RSS maximal de 256 Mio.

`pnpm benchmark:catalog-scale` mesure 10 000, 25 000, 50 000 et 100 000 références **synthétiques** dans des processus isolés. Les résultats sont dans `docs/catalog-scale-measurements.json`. Ce test porte sur l’index et le service ; il ne valide ni 100 000 pages HTML, ni une charge concurrente de production, ni un retour arrière à cette échelle. L’export JSON historique demeure sur le chemin de build. Sa migration contractuelle reste nécessaire pour supprimer ce dernier coût quadratique.

Documentation Astro utilisée : https://v7-2.previews.docs.astro.build/en/reference/experimental-flags/incremental-build/

## Budgets du client mesurés le 27 septembre 2026

Les contrôles de version du moteur et du catalogue, la provenance par champ et le calcul partagé portent le graphe JavaScript du calculateur à environ 60 Kio gzip, et ceux du Passeport, du diagnostic et du suivi à 58–59 Kio. Les plafonds de ces seuls parcours passent respectivement à 61 et 59 Kio ; la maintenance passe de 50 à 51 Kio au chargement initial. Le plafond de 57 Kio des autres parcours est conservé. Ces ajustements accompagnent le retrait du téléchargement obligatoire du catalogue complet et des suggestions globales, pas une hausse générale des budgets. Lighthouse reste bloquant.

Le plafond de l’artefact reste à 2 700 Mio. La formulation répétée de la borne conservatrice est raccourcie en conservant le FAD et les deux pressions ; les valeurs, sources et verdicts sont inchangés. Le format historique demeure coûteux et ne valide pas une capacité de 100 000 pages.

## Vérification locale du cache HTML

Le 27 septembre 2026, sous Node 24.19.0 sur macOS arm64, le build après modification du moteur a pris 1 min 59 s. Le build suivant, sans changement de moteur ni de catalogue, a pris 51,21 s : 9 049 pages restaurées, 4 600 506 résultats fixes réutilisés et aucun résultat recalculé. Le SHA-256 de l’export intégral des verdicts, de la fiche Atlas Copco AB25E100 et du guide complet de dimensionnement est resté identique. Ce sont des mesures locales de deux exécutions, pas une garantie de durée en CI ou à une autre échelle.
