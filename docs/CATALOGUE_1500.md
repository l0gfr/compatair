# Extension du catalogue à 1 500 références

Lot du 26 septembre 2026 : 500 outils Dynabrade supplémentaires. Le catalogue passe à 239 compresseurs et 1 261 outils. Les 1 000 références précédentes sont conservées.

## Source et sélection

Source primaire : [catalogue industriel Dynabrade D25.01](https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf), disponible dans la bibliothèque du fabricant. Les faits sélectionnés sont versionnés dans `src/data/imports/dynabrade-reviewed-2026-09-26.json` : empreinte SHA-256 du PDF, édition, date de consultation, page, tableau, ligne, cellules et notes techniques communes. Les cellules fusionnées sont résolues selon leurs coordonnées physiques dans le PDF. Dix pages représentatives et les tableaux complexes ont également été contrôlés visuellement ; les unités critiques sont contrôlées pour chaque référence.

Le lot contient 188 meuleuses, 98 ponceuses rotatives, 96 ponceuses orbitales, 41 perceuses, 27 tronçonneuses, 22 ponceuses à bande, 20 ponceuses vibrantes, 7 polisseuses et une scie. Chaque MPN est individuel et chaque profil conserve une différence technique documentée. Les coffrets, plages de références non individualisées et duplications de caractéristiques ne gonflent pas le total.

Les 106 fiches Fuji supplémentaires étudiées n’apportaient pas de profil technique distinct de ceux déjà intégrés : elles n’ont pas été ajoutées.

## Débit, pression et limites

- Le débit maximal publié reste identifié comme tel. Les Dynorbital Supreme et Spirit conservent l’intitulé plus général « débit publié » de leur note commune. Aucun de ces débits n’est présenté comme une mesure en charge réalisée par CompatAir.
- Les valeurs SCFM et L/min sont contrôlées ensemble. Une contradiction de débit écarte la référence ; le calcul conserve la valeur L/min publiée et n’invente pas une moyenne d’utilisation.
- La pression retenue est celle du tableau individuel ou de sa note commune : 90 PSIG, affichés comme 6,2 bar par le fabricant. Aucune pression n’est déduite d’un autre produit.
- Les dimensions ou masses incohérentes sont retirées des caractéristiques exploitées et signalées sur la fiche. Cela concerne 21 références du lot. Leurs débit et pression restent documentés et contrôlés.
- Le diamètre intérieur du flexible, lorsqu’il est documenté, n’emporte aucune longueur maximale inventée.
- L’édition du catalogue ne prouve ni le stock actuel, ni une disponibilité française, ni la conformité de l’équipement livré. Aucun prix ou marchand fictif n’est ajouté.

## Publication et reproductibilité

`createDynabradeToolDraft` reconstruit les 500 objets depuis les lignes sources. Les tests vérifient leur égalité avec le catalogue, l’identité des MPN, l’absence de profils dupliqués, les unités contradictoires, les valeurs manquantes, l’altération d’une cellule et le rattachement à la pression. `node scripts/render-dynabrade-catalog-cards.mjs` régénère les cartes techniques ; leur libellé distingue débit maximal et débit publié.

Les ajouts alimentent les fiches outil, les pages « quel compresseur pour », les répertoires, les pages de marque, la recherche, les guides liés par catégorie et les exports API/MCP. Le périmètre comprend 301 379 combinaisons explorables, dont 298 750 verdicts fixes et 2 629 combinaisons paramétriques. Il n’existe pas une page HTML par couple.

Les observations MPN et les preuves sont ajoutées à leurs historiques. Les photographies mensuelles déjà publiées restent inchangées.

## Taille et mémoire

Le build mesure environ 306 Mio, dont 85 Mio de HTML. Les plafonds d’artefact passent à 336 et 96 Mio pour les 3 140 pages produites. Le catalogue du calculateur mesure 73 Kio gzip et reste limité à 80 Kio ; l’index de recherche conserve son plafond de 64 Kio. Les budgets JavaScript, LCP et accessibilité ne sont pas relevés. Les suggestions du calculateur sont embarquées en JSON compact puis créées par les API DOM avant le préremplissage. L’audit vérifie pour chaque outil la conservation des identifiants et du modèle de demande, y compris cadence et gonflage. Le contrôle mobile ciblé mesure environ 2,41 s de LCP, sous le plafond de 2,5 s.

Le MCP conserve sa limite de 256 Mio. Son chargement compact dérive l’identifiant d’un couple depuis les identifiants compresseur et outil déjà partagés, au lieu de mémoriser une troisième chaîne pour chacun des 298 750 couples. Les identifiants personnalisés restent intacts. Le benchmark reconstruit et compare l’intégralité du JSON publié octet pour octet, puis vérifie les réponses HTTP. Le moteur de calcul et les données de verdict ne changent pas.
