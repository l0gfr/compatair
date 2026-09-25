# Extension du catalogue à 750 références

Lot du 25 septembre 2026 : 250 outils Chicago Pneumatic supplémentaires, soit 239 compresseurs et 511 outils. Chaque ajout possède un MPN distinct, une consommation en charge publiée, une pression documentée et des caractéristiques propres. Aucun kit n’est compté comme outil supplémentaire.

## Source et méthode

Source primaire : [catalogue General Industry Chicago Pneumatic](https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf), édition imprimée `v6.08.2026`, consultée le 25 septembre 2026. Empreinte SHA-256 : `3aa74571ca6f59e4341bfae4081921dbce238fa63763b80ec222b81b46783b0b`.

Le fichier `src/data/imports/chicago-pneumatic-industrial-2026-08-reviewed-2026-09-25.json` conserve les lignes brutes, les colonnes et unités, les notes de tableau, les pages et les exclusions. Les 57 tableaux utilisés ont été relus visuellement. Les consommations en charge sont converties de L/s en L/min par multiplication par 60, puis confrontées aux CFM imprimés. Les poids et dimensions incohérents entre systèmes d’unités ne sont pas importés.

Les consommations à vide restent séparées et leur dépassement éventuel du débit en charge est signalé. La note constructeur documente 6,3 bar et un flexible intérieur de 10 mm ; aucune longueur de flexible n’est déduite. Les fiches précisent les limites du catalogue international et ne prétendent pas confirmer le stock français.

Répartition : 147 meuleuses, 39 ponceuses orbitales, 22 clés à chocs, 15 ponceuses rotatives, 12 ponceuses vibrantes, 9 perceuses et 6 ponceuses à bande. Les versions rectangulaires CP5303-R conservent une précision sur leur mouvement orbital.

La fabrique hors ligne `scripts/lib/cp-pdf-catalog-import.mjs` refuse les identités, unités, conditions de mesure et données critiques ambiguës. Ses tests vérifient les 250 fiches, la distinction vitesse/cadence de frappe, les exclusions et les consommations à vide. Les visuels techniques sont reproductibles avec `node scripts/render-cp-pdf-catalog-cards.mjs`. Leur suffixe `-catalogue-2026` préserve les photographies des variantes déjà référencées.

## Navigation et volumes

Les répertoires par usage sont paginés par 48 outils, avec de vrais liens HTML entre pages. L’audit de l’artefact vérifie que chaque référence reste accessible sur sa page et que la pagination se poursuit. La recherche et le tri affichés dans un répertoire portent explicitement sur sa page courante.

Le catalogue expose 122 129 combinaisons : 119 500 verdicts pour 500 outils à débit fixe et 2 629 combinaisons pour 11 outils paramétriques. Le moteur de compatibilité est inchangé.

Le build de ce lot produit 1 525 pages, un artefact d’environ 150 Mo dont 47 Mo de HTML, un catalogue calculateur de 42 Ko gzip et un index de recherche de 39 Ko gzip. Le budget total est porté de 96 à 160 Mo pour les fiches et les 119 500 verdicts complets ; le budget du catalogue calculateur passe de 32 à 48 Ko gzip. Les plafonds JavaScript, HTML, index de recherche et destinations par page sont conservés. Lighthouse reste obligatoire avant déploiement.
