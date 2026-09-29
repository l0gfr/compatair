---
title: "Manomètre d’air comprimé : précision en pleine échelle et choix du cadran"
description: "Une précision exprimée sur l’étendue n’est pas un pourcentage de la pression lue. Calculer un exemple et choisir le cadran sans oublier température et usage."
pubDate: 2026-09-30
category: Choisir
audiences: ["professionnel"]
metiers: ["garage-automobile", "carrosserie-peinture", "maintenance-industrielle"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["mesurer-pression-dynamique-pistolet-peinture", "bar-psi-pression-absolue-relative", "diagnostiquer-chute-pression-air-comprime"]
sources:
  - https://www.wika.com/media/Data-sheets/Pressure/Pressure-gauges/ds_21x.54_en_us.pdf
---

**Une erreur annoncée en pourcentage de l’étendue n’est pas un pourcentage de la valeur affichée.** Deux manomètres ayant la même précision nominale mais des échelles différentes peuvent donc présenter des erreurs absolues différentes à une même pression. Ce point compte lorsqu’on examine de petites variations au poste.

## Lire la définition dans la fiche de l’instrument

La [fiche WIKA 21X.54, édition de juin 2015](https://www.wika.com/media/Data-sheets/Pressure/Pressure-gauges/ds_21x.54_en_us.pdf), décrit notamment une précision de ±1 % de l’étendue pour ses modèles de diamètre nominal 4 pouces. Elle distingue cette version de celle de 2,5 pouces, dont la spécification est différente. Une caractéristique de cette fiche ne doit pas être attribuée à tous les manomètres WIKA ou à tous les cadrans remplis de liquide.

La fiche est historique. Pour un instrument proposé aujourd’hui, vérifiez sa référence et sa documentation applicable avant de reprendre cette précision dans un rapport.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 242" role="img" aria-labelledby="manometre-air-comprime-precision-pleine-echelle-title manometre-air-comprime-precision-pleine-echelle-desc" style="font-family:system-ui,sans-serif">
<title id="manometre-air-comprime-precision-pleine-echelle-title">Erreur absolue et étendue du cadran</title><desc id="manometre-air-comprime-precision-pleine-echelle-desc">Exemples fictifs à ±1 % de l’étendue : 0–10 bar donne ±0,10 bar ; 0–16 bar donne ±0,16 bar. Il ne s’agit pas de l’incertitude totale d’une mesure.</desc>
<rect width="440" height="242" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="16" text-anchor="start" font-weight="700">Exemple : erreur de ±1 % de l’étendue</text><text x="24" y="68" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">Échelle 0–10 bar : ±0,10 bar</text><text x="416" y="68" fill="#eef2e9" font-size="17" text-anchor="end" font-weight="700">0,1</text><rect x="24" y="80" width="392" height="14" rx="8" fill="#315341"/><rect x="24" y="80" width="217.78" height="14" rx="8" fill="#d3eb56"/><text x="24" y="134" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">Échelle 0–16 bar : ±0,16 bar</text><text x="416" y="134" fill="#eef2e9" font-size="17" text-anchor="end" font-weight="700">0,16</text><rect x="24" y="146" width="392" height="14" rx="8" fill="#315341"/><rect x="24" y="146" width="348.44" height="14" rx="8" fill="#d3eb56"/><text x="24" y="200" fill="#eef2e9" font-size="15" text-anchor="start" font-weight="400">Calcul illustratif, pas incertitude totale.</text>
</svg>
<figcaption>Exemples fictifs à ±1 % de l’étendue : 0–10 bar donne ±0,10 bar ; 0–16 bar donne ±0,16 bar. Il ne s’agit pas de l’incertitude totale d’une mesure.</figcaption>
</figure>

## Calculer un exemple dans son périmètre

Pour deux instruments **hypothétiques** spécifiés à ±1 % de l’étendue, l’erreur correspondant à cette seule spécification serait :

| Échelle hypothétique | Étendue | ±1 % de l’étendue |
| --- | --- | --- |
| 0 à 10 bar | 10 bar | ±0,10 bar |
| 0 à 16 bar | 16 bar | ±0,16 bar |

Ces calculs ne sont pas des résultats d’étalonnage. Ils ne donnent pas l’incertitude totale d’un montage de mesure, qui dépend aussi des autres conditions et de la lecture. Ils montrent seulement pourquoi « 1 % » exige de lire la base du pourcentage.

Pour une échelle comprenant des valeurs négatives, calculez l’étendue comme la différence entre les deux extrémités. Le [guide des pressions absolues et relatives](/guides/bar-psi-pression-absolue-relative/) évite une autre confusion : le type de pression mesuré doit également être identifié.

## Ne pas choisir seulement le cadran le plus serré

L’instrument doit accepter la pression maximale possible, les fluctuations et les conditions de son installation. WIKA distingue dans cette fiche les limites de travail selon les tailles et le caractère stable ou fluctuant de la pression. Il précise aussi un effet de température sur l’erreur.

Choisir une échelle plus petite pour faciliter la lecture ne justifie pas de dépasser la plage autorisée. Demandez les limites, la compatibilité avec le fluide, la température et le raccordement prévus. La présence de liquide dans le boîtier ne constitue pas une preuve de précision supérieure dans toutes les conditions.

## Comparer des mesures de poste cohérentes

Le [contrôle de pression dynamique du pistolet](/guides/mesurer-pression-dynamique-pistolet-peinture/) doit conserver les conditions de débit et le point de mesure. Comparer deux valeurs prises à des endroits ou des instants différents peut masquer une variation du réseau.

Pour examiner une faible chute de pression, utilisez des instruments et une méthode adaptés à l’écart recherché. Le [diagnostic des pertes](/guides/diagnostiquer-chute-pression-air-comprime/) permet d’organiser ce relevé. Une différence proche des limites de la méthode ne doit pas être publiée comme une perte exactement mesurée.

Conservez la référence, l’échelle, la spécification, la date des contrôles et les conditions du relevé. Aucun étalonnage d’instrument réel n’a été effectué pour ce guide ; aucun écart admissible universel n’est proposé pour tous les procédés.
