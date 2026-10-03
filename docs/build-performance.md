# Build incrémental et calcul à la demande

Le build courant ne produit plus l’export exhaustif compresseurs × outils.
`/data/verdicts.json` publie un manifeste **2.0.0** : version du catalogue,
version du moteur, périmètre calculable, endpoint HTTP et adresse de l’archive.
Il n’expose ni tableau `pairs`, ni distribution globale supposée. Le nombre de
couples calculables n’est pas un nombre de verdicts pré-calculés.

## Décisions et versions

L’API et MCP utilisent l’index SQLite et le même moteur déterministe. Un couple
est évalué lorsqu’il est demandé. Une donnée insuffisante conserve le résultat
`insufficient_data`. La version de décision lie le catalogue entier, la version
du moteur et le mode de calcul. Le cache du service reste borné à 2 Mio ; le
cache SQLite est borné à 8 Mio, mmap désactivé. Le redémarrage d’une release
élimine les anciens résultats en mémoire. Aucune donnée d’un ancien catalogue
n’est réétiquetée avec une nouvelle version.

Le benchmark agent recalcule un panel explicite de 100 couples réels, sélectionné
dans le précédent benchmark public. Il ne parcourt plus toute la matrice pour
choisir ses cas. Un retrait de produit exige une révision explicite du panel.
Ce panel teste la fidélité des réponses, pas la distribution du catalogue.

L’export d’exécution en masse est distinct du schéma borné accepté par le navigateur : la projection de build peut dépasser 4 000 outils, tandis que les requêtes interactives restent limitées à 50 références.

Les rapports privés ne calculent que les outils ayant au moins cinq observations
agrégées. En l’absence de demande mesurable, leur couverture reste indisponible.
Le flux d’impact 2.0.0 compte les couples fixes potentiellement concernés par un
changement ; `current_verdict_distribution` reste `null`, avec le statut
`not_materialized`. Aucun changement de verdict n’est déduit d’une correction
sans comparaison exacte avant/après.

## Cache des pages

Le mode incrémental d’Astro 7.2 vérifie le code des gabarits et les clés des routes.
Les produits bruts, titres et historiques sont lus comme des entrées de données
lors du build, hors du graphe global des modules. Les schémas de validation restent
appliqués ; le développement conserve les imports habituels et le rechargement.

Les clés couvrent la fiche complète, sources incluses, les titres propres au
produit, son lien vers l’historique, la version du catalogue opposé utilisé pour
les résultats, les alternatives effectivement affichées, les liens de lecture,
la navigation éditoriale, l’indexabilité, le groupe canonique, le jour UTC et Node.
Le code des offres, du moteur et des autres dépendances reste suivi par Astro.
Une modification d’une source invalide donc les pages dont les preuves ou les
résultats peuvent changer, même si aucune valeur numérique n’a changé.

Les calculs des fiches disposent aussi d’un cache distinct de 64 Mio. Il lie
chaque résultat aux fiches complètes des deux produits et à une empreinte du code
du domaine, du moteur, du lockfile et de Node/V8/ICU. Les sources et la confiance
font donc partie de l’invalidation. Les résultats identiques partagent une valeur
dans une ligne compressée ; les empreintes des outils sont stockées une seule
fois. Seules les lignes complètes sont persistées. Un build partiel conserve les
lignes valides des pages restaurées. Une corruption, un lien symbolique, un
changement du moteur ou un cache indisponible entraîne le calcul exact, jamais
un résultat estimé. Le premier build à froid calcule les résultats nécessaires
aux compteurs des fiches ; les suivants réutilisent les cellules inchangées.
La ligne `[page-calculations]` et le benchmark rapportent ces calculs séparément
des 100 cas du panel agent. Ce cache n’est pas publié.

Les nouvelles lignes utilisent gzip niveau 6, avec le même format vérifié et le
même plafond de 64 Mio. Les lignes historiques au niveau 1 restent lisibles.
Le 3 octobre 2026, un échantillon de 80 lignes du catalogue de 3 019 compresseurs
mesurait 1 612 552 octets au niveau 1 contre 1 323 342 au niveau 6. La compression
et la vérification des octets décompressés prenaient respectivement 54 et 109 ms
sur le poste local. Cette mesure de stockage ne démontre pas une réduction du
temps total de build. Le changement de code invalide une fois le cache du moteur.
La recompression hors cache des 3 019 lignes conservait aussi les octets
décompressés : 63 832 871 octets au total avant, 52 375 253 après, pour 4,77 s
de compression et de vérification. Aucun fichier de cache n'a été remplacé par
cette mesure ; la taille du prochain catalogue doit être contrôlée séparément.

Les tableaux des groupes de variantes montrent au maximum douze références,
dont la principale et celle consultée, avec le total du groupe et un accès au
scanner. Leur rendu et leur clé ne recopient plus toute la liste sur chaque page.

Ajouter un outil peut modifier les compteurs de toutes les fiches compresseurs.
Ajouter un compresseur peut modifier les sélections de tous les outils. Ces pages
doivent être régénérées : le cache ne doit pas conserver des résultats périmés.
Les hubs sans clé sont toujours reconstruits. Le compteur global du header est
actualisé depuis le petit manifeste, pour ne pas imposer une modification de
chaque HTML au seul changement du nombre de références.

Le cache HTML est jetable, borné à 384 Mio et sauvegardé uniquement par `main`.
La CI des PR restaure ces caches en lecture seule. Ses tests et son build
s’exécutent dans deux jobs indépendants, limités à 15 et 35 minutes. Le contrôle
`validate` dépend de leur réussite à tous deux. Les snapshots, l’historique,
les liens et Lighthouse restent vérifiés après le build, y compris à froid.
Cette séparation ne produit aucune archive intermédiaire du site.
Un cache absent ou trop grand produit un build complet. Les budgets de données suivent le nombre de références : les seuils de 260 Kio (export d’exécution gzip) et 140 Kio (recherche gzip) sont les bases à 5 006 références. Le plafond HTML est de 300 Mio plus 64 Kio par référence supplémentaire ; l’artefact courant est ramené de 2 700 à 600 Mio, plus 256 Kio par référence supplémentaire. Les plafonds JavaScript restent fixes. Les contrôles de données,
de valeur propre, de sources, de sécurité, de liens et Lighthouse restent actifs.

## Archive historique et migration

Le schéma 1.1.0 et ses 19 fichiers associés restent consultables sous :

`/data/archives/a97717c0a93a5d2e13295ad6c4f08eb68534770a/`

Le manifeste courant lie `verdicts.json`, `catalog.json` et `signatures.json`
dans ce répertoire. Les statistiques publiques issues de cet audit sont étiquetées
historiques et datées ; elles ne décrivent pas les futures extensions du catalogue.
Les signatures conservent leurs chemins originaux `/data/...` : pour vérifier
l’archive, utiliser son répertoire comme racine des données avec le vérificateur.

Avant l’activation, `preserve-verdict-archive.mjs` vérifie les signatures Ed25519,
les empreintes complètes, les tailles et l’identité du manifeste épinglé. Il
crée des liens physiques depuis la release précédente, sans symlink ni copie
réseau. Les fichiers survivent au nettoyage de cette release. À chaque déploiement,
les fichiers historiques sont revérifiés, mais ni recalculés ni réarchivés dans
l’artefact de CI. Une source absente, modifiée ou non conforme bloque l’activation.
Le déploiement conserve sa session SSH unique et son rollback atomique.

Ce transfert initial exige la release historique ou une release contenant déjà
son archive validée. Une installation neuve doit restaurer ces fichiers signés
avant d’activer un manifeste qui les annonce. Ne jamais modifier ces fichiers en
place : ils sont immuables et partagés par liens physiques.

Pour les anciens consommateurs, migrer explicitement vers le manifeste 2.0.0 et
l’API, ou utiliser l’archive avec son catalogue d’origine. L’URL courante change
bien de schéma majeur ; elle ne prétend pas maintenir un tableau `pairs` en v2.

## Export exhaustif explicite

```sh
pnpm data:export-verdicts /tmp/compatibilites-hors-ligne.json dist/data/catalog.json
```

Cette commande vérifie la version du catalogue, calcule toute la matrice fixe et
écrit en flux le format 1.1.0, avec la même empreinte que l’export historique.
Elle exige un chemin distinct, refuse d’écraser un fichier et garde l’export hors
de `dist` et `public`. Elle reste proportionnelle au nombre de couples et n’est
appelée ni par le build, ni par le déploiement. L’export n’est pas signé
automatiquement : une signature de publication nécessite la clé de l’opérateur.
Le lecteur historique reste limité à dix millions de lignes.

## Mesures reproductibles

Mesure locale du 27 septembre 2026, Node 24.19.0 sur macOS arm64, de 5 006 à
6 006 références. Les 1 000 outils ajoutés sont des fixtures synthétiques confinées
à la copie temporaire. [Rapport chiffré](build-growth-measurements.json).

| Génération Astro | Durée observée | Pages restaurées | Calculs de fiches nouveaux / réutilisés |
| --- | ---: | ---: | ---: |
| Catalogue initial, caches vides | 141,39 s | 0 | 4 616 353 / 0 |
| Catalogue initial, caches chauds | 67,03 s | 9 049 | 0 / 0 |
| Ajout des 1 000 outils | 146,45 s | 7 830 | 1 219 000 / 4 616 353 |
| Catalogue étendu, caches chauds | 73,35 s | 11 049 | 0 / 0 |
| Catalogue étendu, caches vides | 129,52 s | 0 | 5 835 353 / 0 |

Les **11 201 fichiers HTML** des quatre familles vérifiées sont identiques octet
pour octet entre génération incrémentale et reconstruction à froid. Le manifeste
reste à **1 353 octets**. Le cache des calculs reste inférieur à 15 Mo.

Il s’agit d’un passage local, avec d’autres contrôles locaux pendant certaines
phases : ces durées ne prouvent pas que chaque build incrémental est plus rapide
qu’un build complet. Elles prouvent la réutilisation des résultats et des pages,
et l’égalité du rendu. La préparation d’indexation a pris 8,39 s puis 7,65 s,
séparément ; les tests, SQLite, signatures et transfert en production ne sont
pas inclus dans les durées Astro.

```sh
node scripts/benchmark-build-growth.mjs
pnpm benchmark:mcp-startup
pnpm benchmark:catalog-scale
```

Le premier script copie les sources dans un répertoire temporaire, crée uniquement
là 1 000 références synthétiques d’outils, puis mesure le build de base à froid et
à chaud, l’ajout incrémental et le catalogue étendu à froid et à chaud. Il compare
les empreintes de toutes les fiches, pages d’usage et guides entre le résultat
incrémental et le résultat complet. Il n’ajoute aucune référence réelle, ne publie
rien et conserve ses logs et son rapport dans le répertoire affiché.

Le benchmark de capacité SQLite à 100 000 références reste un test synthétique
de l’index et du service, distinct du test de génération HTML. Aucun des deux
ne constitue une garantie de durée sur un runner CI ni un test de trafic concurrent.

Les dates `lastmod` du sitemap restent fondées sur l’historique Git et les dates
éditoriales. Aucun horodatage de build ne remplace une date de source.

Documentation : https://docs.astro.build/en/reference/experimental-flags/incremental-build/
