---
title: "DMT143 : pourquoi le point de rosée reste figé pendant une purge"
seoTitle: "Vaisala DMT143 : point de rosée figé pendant la purge"
description: "Le DMT143 conserve sa dernière valeur pendant la purge et l’autocalibration. Distinguez ce plateau d’une nouvelle mesure avant d’interpréter une alerte."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["point-rosee-atmospherique-sous-pression-mesure", "point-rosee-secheur-filtre-air-comprime", "fiche-intervention-air-comprime"]
sources: ["https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-361C9BF8-FA5D-4A54-BA92-A9E5E7322A80/GUID-55D856C2-FAC1-4327-858F-A8730610A61D?contentId=~coodB6jf3~xtp9MTh9eIQ", "https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-361C9BF8-FA5D-4A54-BA92-A9E5E7322A80/GUID-487220D2-77D1-4DFB-B776-D7451274BDEA?contentId=gbWBhr7HG_IgHBbI9aw0~A"]
---

**Une courbe de point de rosée plate pendant le traitement interne d’un Vaisala DMT143 peut afficher la dernière valeur valide.** Elle ne constitue pas, sur cette période, une nouvelle observation démontrant que l’air du réseau est resté parfaitement stable.

Le manuel **M211435EN-L** décrit deux opérations distinctes. Pendant la [purge du capteur](https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-361C9BF8-FA5D-4A54-BA92-A9E5E7322A80/GUID-55D856C2-FAC1-4327-858F-A8730610A61D?contentId=~coodB6jf3~xtp9MTh9eIQ), le DMT143 restitue la valeur de point de rosée précédant l’opération. Pendant l’[autocalibration](https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-361C9BF8-FA5D-4A54-BA92-A9E5E7322A80/GUID-487220D2-77D1-4DFB-B776-D7451274BDEA?contentId=gbWBhr7HG_IgHBbI9aw0~A), les valeurs de tous les paramètres de sortie disponibles sont retenues à leur dernière valeur valide. Ces comportements doivent être pris en compte dans une analyse de tendance.

## Reconstituer la chronologie du plateau

La purge est annoncée une fois par jour ou à la mise sous tension ; le chauffage dure plusieurs minutes. L’autocalibration est annoncée à intervalles d’une heure et au démarrage, avec des cas où elle se produit plus souvent. Le chauffage associé à cette dernière dure moins d’une minute. Ces indications expliquent pourquoi les deux événements ne produisent pas nécessairement le même plateau.

Elles ne donnent pas une horloge exacte pour chaque appareil. L’autocalibration est conditionnée par l’environnement de mesure et peut être différée lorsque ses critères ne sont pas réunis. Il serait donc incorrect d’identifier une purge ou une autocalibration uniquement parce que le plateau tombe à une heure attendue.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="vaisala-dmt143-point-rosee-fige-purge-autocalibration-svg-title vaisala-dmt143-point-rosee-fige-purge-autocalibration-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="vaisala-dmt143-point-rosee-fige-purge-autocalibration-svg-title">Une valeur retenue pendant le traitement du capteur</title><desc id="vaisala-dmt143-point-rosee-fige-purge-autocalibration-svg-desc">Schéma temporel de principe : la sortie garde une valeur précédente pendant le traitement interne. Les durées ne sont pas à l’échelle et aucune évolution réelle du réseau n’est représentée.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="44" fill="white" font-size="23">Sortie affichée et état du capteur</text><path d="M45 244V90m0 154h430" stroke="#9ebdad" stroke-width="2"/><path d="M50 207l55-30 50 15 40-24h160l45-23 65 12" stroke="#d3eb56" stroke-width="4" fill="none"/><rect x="193" y="79" width="164" height="165" fill="#9ebdad" opacity=".14"/><text x="202" y="112" fill="white" font-size="17">Purge / auto-</text><text x="202" y="139" fill="white" font-size="17">calibration</text><text x="206" y="193" fill="#d3eb56" font-size="16">Valeur retenue</text><text x="55" y="282" fill="white" font-size="18">Avant</text><text x="367" y="282" fill="white" font-size="18">Après</text><text x="28" y="329" fill="white" font-size="18">Une sortie stable peut être momentanément figée.</text></g>
</svg>
<figcaption>Schéma temporel de principe : la sortie garde une valeur précédente pendant le traitement interne. Les durées ne sont pas à l’échelle et aucune évolution réelle du réseau n’est représentée.</figcaption>
</figure>

## Conserver la valeur avec sa qualité d’observation

Pour un historique de maintenance, gardez le nombre affiché mais distinguez la période de mesure de la période où la sortie est retenue, si l’état de l’appareil est disponible dans votre supervision. Le choix d’archivage doit être décrit : laisser une valeur retenue apparaître comme une observation nouvelle peut changer la lecture d’un incident.

Cette distinction importe surtout lorsqu’une action est décidée sur quelques points de la courbe. Une valeur basse répétée pendant une opération interne ne suffit pas à écarter une dérive survenue pendant cet intervalle. À l’inverse, la dernière valeur haute conservée peut faire durer visuellement un incident alors que le réseau a déjà changé. Ces deux cas sont des conséquences logiques d’une valeur retenue, pas des essais réalisés sur un DMT143.

| Donnée du relevé | Rôle dans l’analyse |
| --- | --- |
| Horodatage et point de rosée affiché | Reconstituer le signal conservé |
| Redémarrage ou coupure d’alimentation | Chercher une opération de démarrage possible |
| État interne fourni par l’intégration | Identifier la nature de la période, quand cette donnée existe |
| Pression et emplacement de mesure | Comparer les observations hors traitement interne |
| Action du sécheur ou du réseau | Éviter d’attribuer un plateau au mauvais événement |

## Ne pas confondre ce cas avec un changement de pression

Une mesure sous pression et une mesure atmosphérique posent un autre problème. Le [guide des deux points de rosée](/guides/point-rosee-atmospherique-sous-pression-mesure/) examine leurs conditions de prélèvement. Ici, même lorsque ces conditions sont identiques, la sortie peut être conservée pendant le traitement interne.

Si la dérive se poursuit après la reprise de mesure, l’analyse doit alors revenir au poste, au sécheur et aux conditions de prélèvement. Le [guide point de rosée, sécheur et filtre](/guides/point-rosee-secheur-filtre-air-comprime/) aide à définir le problème d’humidité sans réduire toute variation à une panne du capteur.

## Préparer un contrôle utile à la prochaine occurrence

Avant de modifier un seuil d’alerte, exportez un intervalle comprenant l’avant, le plateau et la reprise de mesure. Joignez les événements d’alimentation et les informations d’état réellement disponibles. La [fiche d’intervention](/guides/fiche-intervention-air-comprime/) permet de conserver cette chronologie avec la configuration du capteur.

La décision est alors plus précise : corriger l’interprétation d’une valeur retenue, compléter la collecte d’état ou examiner une dérive qui existe aussi en mesure active. Le traitement interne du DMT143 n’établit aucune garantie sur l’humidité du réseau pendant une période sans nouvelle valeur.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
