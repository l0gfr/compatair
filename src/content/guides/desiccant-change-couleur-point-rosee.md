---
title: "Dessiccant qui change de couleur : ce que le voyant dit du point de rosée"
description: "Un voyant de dessiccant guide la maintenance mais ne donne pas un point de rosée mesuré. Cas Parker FDD, consommable exact et limites du contrôle visuel."
pubDate: 2026-09-29
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["point-rosee-atmospherique-sous-pression-mesure", "secheur-adsorption-air-purge-debit-net", "huile-sortie-compresseur-air-comprime-diagnostic"]
sources:
  - https://www.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/Finite_Compressed_Air_Gas_Desiccant_Dryers_1300_850_USA.pdf
  - https://ph.parker.com/us/en/compressed-air-gas-up-to-300-psig-fdd-desiccant-dryer-series
---

**La couleur d’un dessiccant est un indicateur de maintenance défini par son fabricant ; elle ne constitue pas une mesure chiffrée du point de rosée.** Avant de conclure que l’air est suffisamment sec, identifiez le consommable, les conditions de service et le critère attendu au poste.

## Lire le voyant dans le périmètre du produit

La [documentation Parker Finite FDD, édition 2019](https://www.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/Finite_Compressed_Air_Gas_Desiccant_Dryers_1300_850_USA.pdf), décrit un indicateur visuel de dessiccant. Pour le gel de silice indicateur présenté, le changement du bleu au rose signale un besoin de remplacement ou de régénération suivant les consignes applicables. Elle distingue aussi une option de tamis moléculaire non indicateur.

La [page de gamme FDD](https://ph.parker.com/us/en/compressed-air-gas-up-to-300-psig-fdd-desiccant-dryer-series) décrit des modèles destinés à des usages intermittents. La propriété du voyant et les capacités diffèrent selon le système et le consommable ; elles ne se transposent pas à tout sécheur à adsorption.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 302" role="img" aria-labelledby="desiccant-change-couleur-point-rosee-title desiccant-change-couleur-point-rosee-desc" style="font-family:system-ui,sans-serif">
<title id="desiccant-change-couleur-point-rosee-title">Voyant de dessiccant et mesure de point de rosée</title><desc id="desiccant-change-couleur-point-rosee-desc">Le bleu vers le rose correspond au gel indicateur décrit par Parker, sans être un code universel. Une couleur ne fournit pas une valeur mesurée de point de rosée.</desc>
<rect width="440" height="302" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Un voyant et une mesure</text><circle cx="115" cy="118" r="40" fill="#356886"/><circle cx="325" cy="118" r="40" fill="#95516d"/><path d="M161 118L278 118" stroke="#9fb3a8" stroke-width="3" fill="none"/><text x="115" y="185" fill="#eef2e9" font-size="18" text-anchor="middle" font-weight="400">État initial</text><text x="325" y="185" fill="#eef2e9" font-size="18" text-anchor="middle" font-weight="400">Changement</text><text x="220" y="239" fill="#eef2e9" font-size="18" text-anchor="middle" font-weight="400">Critère de maintenance du produit</text><text x="220" y="272" fill="#d3eb56" font-size="18" text-anchor="middle" font-weight="400">Pas une valeur en °C</text>
</svg>
<figcaption>Le bleu vers le rose correspond au gel indicateur décrit par Parker, sans être un code universel. Une couleur ne fournit pas une valeur mesurée de point de rosée.</figcaption>
</figure>

## Ne pas convertir une couleur en température

Un changement visuel peut servir au suivi prévu par le constructeur. Il ne donne pas une valeur de point de rosée en degrés Celsius, avec pression de mesure et incertitude. Si le procédé exige un résultat quantifié, il faut le contrôle adapté à cette exigence.

Le [guide du point de rosée sous pression et atmosphérique](/guides/point-rosee-atmospherique-sous-pression-mesure/) explique pourquoi le point de prélèvement et la pression comptent. Une photographie de billes ne fournit pas ces informations.

La même réserve vaut pour un consommable sans indicateur : l’absence de changement de couleur attendu n’est pas une preuve de séchage. Il faut utiliser la méthode de maintenance prévue pour cette référence.

## Examiner la durée de service et l’air en amont

Parker indique que la durée du dessiccant dépend notamment du débit et de l’humidité, et demande un traitement amont approprié pour les liquides et l’huile. Son document précise que de l’huile sur le dessiccant compromet l’adsorption d’humidité.

Une perte de performance ne doit donc pas être attribuée systématiquement à un consommable trop ancien. Relevez les changements de débit, les conditions d’entrée, la maintenance des étages amont et les observations du voyant. Le [diagnostic d’huile en sortie](/guides/huile-sortie-compresseur-air-comprime-diagnostic/) aide à préparer un contrôle sans déduire la cause du seul aspect du liquide.

| Information à conserver | Utilité |
| --- | --- |
| Référence du sécheur et du consommable | Interpréter le voyant correctement |
| Date de changement | Établir l’historique, sans durée universelle |
| Débit et conditions d’entrée | Repérer une exploitation différente |
| Contrôle de sortie | Vérifier le critère réellement demandé |

## Remplacer ou régénérer selon la documentation exacte

Les procédures de changement, de mise en sécurité et de traitement du consommable restent celles du produit. Ce guide ne propose pas une température de four ni une méthode domestique de régénération. Un procédé admis pour une matière ne devient pas valable pour tout dessiccant ou toute contamination.

Le [dossier des sécheurs à adsorption avec purge](/guides/secheur-adsorption-air-purge-debit-net/) traite un autre type de bilan, lié à la consommation d’air de régénération. Un petit sécheur à charge remplaçable ne doit pas recevoir automatiquement les mêmes hypothèses.

Aucun intervalle de remplacement ni point de rosée réel n’est estimé ici. Le voyant apporte une information dans son périmètre ; la qualité attendue au poste exige un critère et un contrôle qui lui correspondent.
