---
title: "Atlas Copco RVM07B : lire les litres par seconde avant de choisir l’air"
seoTitle: "Atlas RVM07B : 3,8 L/s, pas 3,8 cfm"
description: "Le RVM07B publie 3,8 L/s et 8,1 cfm. Conservez les unités, le burin inclus dans la masse et les conditions du catalogue pour préparer le poste."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "raccord-air-comprime-bsp-npt-1-4"]
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf
---

Le tableau Atlas Copco RVM07B contient deux colonnes de consommation : litres par seconde et cfm. La valeur 3,8 apparaît aussi dans la colonne de masse en livres. Une lecture rapide peut donc créer une demande d’air incorrecte. Identifier les colonnes permet de construire une fiche de poste exploitable sans ajouter une estimation de débit.

## Une ligne, trois grandeurs à séparer

Le [RVM07B](/outils-pneumatiques/burineur-atlas-copco-rvm07b-8425010525/), numéro de commande **8425 0105 25**, figure dans la section des outils de décapage percussifs. Sa ligne indique **100 Hz**, une masse **avec burin standard de 1,7 kg / 3,8 lb**, et une consommation de **3,8 L/s / 8,1 cfm**. Le tuyau recommandé est de **6,3 mm / 1/4 pouce**. [Catalogue Atlas Copco, page PDF 232](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=232).

Le débit retenu de 3,8 L/s correspond exactement à **228 L/min**, calcul 3,8 × 60. La valeur voisine de 8,1 cfm provient de la colonne alternative du fabricant, avec son arrondi. Lire 3,8 comme des cfm produirait environ 107,6 L/min, soit une autre grandeur. Cette dernière conversion illustre une erreur de lecture ; elle n’est pas attribuée à l’outil.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 259" role="img" aria-labelledby="rvm-unites-title rvm-unites-desc">
<title id="rvm-unites-title">Trois cellules distinctes du tableau RVM07B</title><desc id="rvm-unites-desc">La répétition de 3,8 dans deux colonnes ne rend pas les unités interchangeables.</desc><rect width="440" height="259" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="16"><text x="24" y="32" fill="#d3eb56">Masse avec burin standard</text><text x="24" y="56" fill="#eef2e9">1,7 kg / 3,8 lb</text><text x="24" y="89" fill="#d3eb56">Consommation publiée</text><text x="24" y="113" fill="#eef2e9">3,8 L/s / 8,1 cfm</text><text x="24" y="146" fill="#d3eb56">Conversion retenue</text><text x="24" y="170" fill="#eef2e9">3,8 × 60 = 228 L/min</text></g></svg>
<figcaption>La répétition de 3,8 dans deux colonnes ne rend pas les unités interchangeables.</figcaption>
</figure>
## Associer le débit aux conventions du catalogue

La note introductive du catalogue définit les consommations déclarées comme maximales, avec un point de pression de **6,3 bar**, sauf indication particulière. La fiche conserve cette convention et la ligne du modèle comme deux éléments de provenance. [Conventions, page PDF 4](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=4), [RVM07B](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=232).

Un compresseur candidat doit posséder un débit restitué documenté, dans des conditions de pression compatibles avec la comparaison. Les 228 L/min constituent une demande technique utilisable ; ils ne donnent pas le débit aspiré à rechercher sur une publicité. Le [guide FAD](/guides/debit-restitue-fad-vs-debit-aspire/) explique cette distinction.

## Délimiter la destination de l’outil

Atlas cite le travail de soudure, le dressage léger du béton et l’enlèvement de peinture ou de rouille dans la description de cette référence. Le texte mentionne aussi un dispositif de soufflage pour maintenir la zone de travail propre. Ces destinations sont des déclarations fabricant, sans essai CompatAir de vitesse d’enlèvement. [Description RVM07B](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=232).

Pour préparer une opération, identifier le matériau, le burin prescrit, l’état de surface attendu et les conditions de travail. Les 100 Hz décrivent une fréquence de frappe ; ils ne fournissent pas une énergie par coup. La source donne cette énergie pour d’autres modèles sur la même page, mais aucune valeur voisine ne doit être transférée au RVM07B.

## Vérifier le périmètre de masse et de raccordement

Les 1,7 kg incluent le burin standard selon l’en-tête. Une comparaison avec une masse de corps seul provenant d’un autre outil aurait un périmètre différent. Conserver cet intitulé lors du choix d’un support ou d’un essai au poste.

L’entrée est donnée en **1/4 NPT**, alors que le tuyau recommandé est décrit par son diamètre intérieur. Ces deux mentions ne désignent pas la même dimension. Le [guide BSP et NPT](/guides/raccord-air-comprime-bsp-npt-1-4/) aide à identifier le filetage ; il ne dispense pas de vérifier le raccord prescrit pour l’outil livré.

Le dossier contient ainsi un débit convertible, une pression issue des conventions identifiées et une masse dont le périmètre est explicite. Il reste à contrôler l’installation réelle selon la notice et les conditions du procédé. Une fiche correctement lue permet de dimensionner l’air ; elle ne garantit pas le résultat de décapage ou l’exposition de l’opérateur.
