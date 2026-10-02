---
title: "Deux Yokota YLT140 : le FM11RS à 10 bar dépasse-t-il le besoin ?"
seoTitle: "Deux Yokota YLT140 : FM11RS ou FM15RS ?"
description: "Deux YLT140 demandent 1 420 L/min en charge. Confrontez ce scénario aux 1 390 et 2 200 L/min publiés des BroomWade, avec les bonnes pressions."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "diagnostiquer-chute-pression-air-comprime"]
sources:
  - https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf
  - https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf
---

Deux postes équipés d’une Yokota YLT140 peuvent travailler en même temps. Le besoin dépend alors de cette simultanéité, sans se résumer au nombre de prises d’air. Les données fabricant permettent d’établir un seuil simple et de voir pourquoi une différence de seulement 30 L/min mérite d’être relevée sur un devis.

## Le scénario commence par deux outils en charge

La [YLT140](/outils-pneumatiques/cle-a-impulsions-yokota-ylt140/) publie **710 L/min en charge à 0,6 MPa**, soit **6 bar**. Pour deux outils au même point de consommation, la somme vaut **1 420 L/min**. C’est un scénario CompatAir de fonctionnement simultané, pas une mesure d’un atelier ni la consommation moyenne de toutes les séquences de serrage. [Catalogue Yokota, page PDF 29](https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=29).

Le calcul est volontairement explicite : 710 + 710. Il n’ajoute ni coefficient caché ni autre poste. Les fuites, le traitement d’air et les consommateurs auxiliaires doivent être ajoutés s’ils existent dans l’installation étudiée. Le [guide des outils simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à établir ce périmètre.

## Comparer les deux références BroomWade exactes

Le [FM11RS CC1184162 à 10 bar](/compresseurs/broomwade-fm11rs-cc1184162-10-bar/) publie **1,39 m³/min**, soit **1 390 L/min**, à sa pression maximale de 10 bar et à pleine charge. Le [FM15RS CC1184274 à 10 bar](/compresseurs/broomwade-fm15rs-cc1184274-10-bar/) publie **2,20 m³/min**, soit **2 200 L/min**, dans la colonne correspondante. [Catalogue BroomWade, pages PDF 19 et 23](https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=19), [FM15RS](https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=23).

En conservant ces débits publiés à 10 bar comme bornes documentées de production, le premier est inférieur de **30 L/min** à la demande retenue ; le second dépasse la somme de **780 L/min**. Ce calcul ne crée pas un point FAD à 6 bar. Il ne prouve pas que le FM11RS manquerait d’air si une autre configuration ou un autre point de fonctionnement était documenté.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 259" role="img" aria-labelledby="ylt-deux-postes-title ylt-deux-postes-desc">
<title id="ylt-deux-postes-title">Comparaison arithmétique du scénario</title><desc id="ylt-deux-postes-desc">Les pressions de mesure restent distinctes. Aucun débit à 6 bar n’est déduit de ceux à 10 bar.</desc><rect width="440" height="259" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="16"><text x="24" y="32" fill="#d3eb56">Deux YLT140 à 6 bar</text><text x="24" y="56" fill="#eef2e9">1 420 L/min en charge</text><text x="24" y="89" fill="#d3eb56">FM11RS : débit publié à 10 bar</text><text x="24" y="113" fill="#eef2e9">1 390 L/min ; écart −30 L/min</text><text x="24" y="146" fill="#d3eb56">FM15RS : débit publié à 10 bar</text><text x="24" y="170" fill="#eef2e9">2 200 L/min ; écart +780 L/min</text></g></svg>
<figcaption>Les pressions de mesure restent distinctes. Aucun débit à 6 bar n’est déduit de ceux à 10 bar.</figcaption>
</figure>
## Traiter correctement la réserve de dimensionnement

Si le cahier des charges choisit une réserve de **20 %**, la cible du scénario devient **1 704 L/min**, calcul 1 420 × 1,20. Cette réserve est une hypothèse de projet, sans valeur universelle attribuée au fabricant. Le FM15RS laisse alors 496 L/min au-delà de la cible, au point de débit publié. Le FM11RS n’atteint pas cette cible documentaire.

La comparaison change si un seul poste travaille, si d’autres consommateurs s’ajoutent ou si les séquences se chevauchent différemment. Relever ces phases avant de choisir une machine. Une capacité de cuve ne modifie pas le débit restitué déclaré du compresseur, même si une réserve d’air peut participer au fonctionnement d’un poste intermittent.

## Livrer 6 bar au bon endroit

Le débit du compresseur est ici déclaré à 10 bar. La clé reste associée à son point de consommation de 6 bar et à la plage d’emploi de sa notice. Le raccordement et la régulation doivent respecter ces prescriptions ; cette comparaison ne recommande pas d’envoyer 10 bar dans l’outil.

Pour accepter un devis, joindre les références complètes, les colonnes de FAD, le relevé de simultanéité et les exigences de pression au poste. Le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) complète les essais de réception. Sur les seules bornes retenues, le FM15RS dispose de capacité pour le scénario décrit ; le FM11RS exige une autre donnée de fonctionnement avant de pouvoir être accepté pour ces deux postes en charge.
