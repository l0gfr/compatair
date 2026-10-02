---
title: "BroomWade FM02 et FM03 DPP : quel débit après le traitement d’air ?"
seoTitle: "BroomWade FM02 et FM03 DPP : vérifier le débit net"
description: "Le catalogue DPP donne deux plages de débit et une mesure à la sortie du compresseur. Identifier le point de livraison avant de dimensionner un poste."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["secheur-adsorption-air-purge-debit-net", "qualite-air-comprime-iso-8573-1", "point-rosee-secheur-filtre-air-comprime"]
sources:
  - https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf
---

Pour dimensionner un poste derrière une station BroomWade DPP, le débit livré après traitement doit être confirmé. Le catalogue d’avril 2026 présente une plage de **160 à 270 L/min** pour la station, puis publie **210 et 350 L/min** dans son tableau technique. La note de ce tableau situe le FAD à la sortie du compresseur. Ces données ne permettent pas d’attribuer automatiquement le débit amont à l’air disponible au poste.

## Deux indications dans le même catalogue

La [présentation DPP, page PDF 8](https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=8), décrit une station avec séchage par adsorption et annonce un point de rosée sous pression de −40 °C. Son encadré indique une pression nominale de 10 bar, une puissance de 2,2 à 3 kW et un débit de 0,16 à 0,27 m³/min. La conversion en litres par minute consiste à multiplier les valeurs par 1 000.

La [page PDF 11 du même document](https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=11) donne des références exactes :

| Station | Référence fabricant | Moteur | FAD du tableau | Pression maximale |
| --- | --- | ---: | ---: | ---: |
| FM02 DPP | RSCCP020650 | 2,2 kW | 0,21 m³/min | 10 bar |
| FM03 DPP | RSCCP020651 | 3 kW | 0,35 m³/min | 10 bar |

Les deux stations ont une cuve de 270 L, une masse annoncée de 327 kg et des dimensions de 1 539 × 771 × 1 433 mm. Le tableau spécifie une alimentation 400 V, trois phases, 50 Hz. Les options de tension figurent séparément : elles ne modifient pas d’office la référence décrite dans l’offre.

## Le point de mesure change le dimensionnement

Le pied du tableau définit le FAD comme le débit à la sortie du compresseur, mesuré à la pression nominale selon ISO 1217, annexes C et E. La station intègre ensuite un traitement d’air. Il faut donc distinguer la production du compresseur et le débit effectivement livré à l’utilisateur.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" role="img" aria-labelledby="dpp-flow-title dpp-flow-desc">
<title id="dpp-flow-title">Localiser le débit garanti d’une station DPP</title>
<desc id="dpp-flow-desc">Le FAD amont du tableau traverse le traitement d’air. Le débit net au poste doit être confirmé séparément.</desc>
<rect width="440" height="230" rx="14" fill="#073d2b"/>
<g fill="#eef2e9" font-family="system-ui,sans-serif" font-size="16">
<text x="24" y="36">Sortie du compresseur</text><text x="24" y="64">FAD du tableau : 210 ou 350 L/min</text>
<text x="24" y="119">Traitement d’air de la station DPP</text>
<text x="24" y="174">Point de livraison au poste</text><text x="24" y="205">Débit net garanti à demander</text>
</g><path d="M390 75v65m-8-10 8 10 8-10" fill="none" stroke="#d3eb56" stroke-width="3"/>
</svg>
<figcaption>Le document ne donne pas les informations nécessaires pour expliquer quantitativement l’écart entre ses deux présentations.</figcaption>
</figure>

L’adsorption peut mobiliser de l’air pour la régénération selon la technologie employée, comme l’explique le [guide sur le débit de purge](/guides/secheur-adsorption-air-purge-debit-net/). Ce mécanisme constitue une explication possible à examiner avec le fabricant. Le catalogue DPP ne fournit toutefois pas ici un bilan qui permettrait d’affirmer une fraction de purge précise. Une différence de version ou une erreur de présentation doivent également pouvoir être examinées.

Calculer soi-même un taux à partir des extrêmes de deux plages donnerait une précision trompeuse : les pages ne relient pas explicitement chaque valeur de la présentation à chaque référence, avec un même protocole de mesure.

## La cuve et la qualité d’air répondent à d’autres critères

Les 270 L indiquent une capacité de stockage. Ce volume ne démontre pas qu’un besoin continu de 300 L/min sera couvert. Un poste peut utiliser une réserve pendant une phase courte ; le maintien du débit sur la durée dépend de la production nette et de la demande réelle.

La présentation annonce aussi une qualité d’air ISO 2.2.0 et décrit un lubrifiant de qualité alimentaire. La construction du compresseur reste annoncée comme lubrifiée. La [lecture des classes d’air comprimé](/guides/qualite-air-comprime-iso-8573-1/) aide à séparer la technologie de compression, le traitement et la qualité revendiquée au point de mesure. L’usage prévu doit disposer de ses propres critères et des documents correspondants. La seule appellation commerciale de la station ne remplace pas ces éléments.

## Une offre exploitable pour le responsable d’atelier

Demandez le débit net garanti **après l’ensemble du traitement livré**, à la pression et dans les conditions de température de votre installation. L’offre doit identifier la référence DPP, l’alimentation, les consommations éventuelles de régénération et le point où la qualité d’air est garantie.

Joignez la référence de l’outil, son débit documenté dans le régime retenu et sa cadence lorsqu’il travaille par coups. Conservez les pages 8 et 11 dans la demande pour obtenir une réponse portant explicitement sur leur divergence.

Les fiches [FM02 DPP](/compresseurs/broomwade-fm02-dpp-rsccp020650-10-bar/) et [FM03 DPP](/compresseurs/broomwade-fm03-dpp-rsccp020651-10-bar/) conservent les références et les valeurs imprimées. CompatAir laisse leur débit utilisable indéterminé tant que la localisation et le bilan de mesure restent incomplets. Cela évite de transformer une valeur amont en promesse de production à l’outil.
