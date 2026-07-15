---
title: "Air comprimé en carrosserie et peinture : débit, pression et qualité séparés"
seoTitle: "Air comprimé carrosserie et peinture | CompatAir"
description: "Dimensionner un poste de peinture à partir du pistolet exact, de sa pression dynamique et de la qualité d’air requise, sans valeur HVLP générique."
pubDate: 2026-07-15
category: "Choisir"
audiences: [professionnel]
metiers: [carrosserie-peinture]
readingTime: 8
featured: true
sources:
  - https://www.sata.com/en-us/satajet-5000-b-hvlp-nozzle-1.3-rps-multi-purpose-cup-0.3-l-0.6-l-0.9-l-each-1x-swivel-joint/210765
  - https://www.sata.com/en-gb/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-0.8-0.3-l-rps-suitable-for-water-and-solvent-based-paint-systems/204180
  - https://www.iso.org/fr/standard/46418.html
  - https://www.atlascopco.com/en-ca/compressors/wiki/compressed-air-articles/choosing-a-dryer
---

HVLP décrit une technologie de buse, pas le débit complet d’un poste. Celui-ci se lit sur la référence du pistolet, avec sa [pression dynamique à l’entrée](/glossaire/#pression-dynamique). La qualité d’air relève d’une seconde question, fixée par le procédé au point d’utilisation.

<svg viewBox="0 0 760 320" role="img" aria-labelledby="paint-shop-title paint-shop-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="paint-shop-title">Trois contrôles séparés pour un poste de peinture</title><desc id="paint-shop-desc">Le débit du pistolet, la pression dynamique au raccord et la qualité de l’air sont vérifiés séparément avant le verdict.</desc>
  <rect width="760" height="320" rx="20" fill="#eef2e9"/><text x="38" y="47" fill="#143426" font-size="22" font-weight="700">Un seul poste, trois preuves différentes</text>
  <circle cx="155" cy="158" r="82" fill="#19704f"/><text x="155" y="149" text-anchor="middle" fill="white" font-size="19" font-weight="700">Débit</text><text x="155" y="177" text-anchor="middle" fill="#d8e6de" font-size="13">référence exacte</text><circle cx="380" cy="158" r="82" fill="#28533f"/><text x="380" y="149" text-anchor="middle" fill="white" font-size="19" font-weight="700">Pression</text><text x="380" y="177" text-anchor="middle" fill="#d8e6de" font-size="13">outil en charge</text><circle cx="605" cy="158" r="82" fill="#d3eb56"/><text x="605" y="149" text-anchor="middle" fill="#143426" font-size="19" font-weight="700">Qualité d’air</text><text x="605" y="177" text-anchor="middle" fill="#56685e" font-size="13">exigence du procédé</text>
  <text x="38" y="281" fill="#56685e" font-size="14">Aucun de ces contrôles ne peut être déduit silencieusement des deux autres.</text>
</svg>

## HVLP est un sigle, pas un débit

SATA publie **430 L/min** et une pression d’entrée dynamique recommandée de **2 bar** pour le [SATAjet 5000 B HVLP](https://www.sata.com/en-us/satajet-5000-b-hvlp-nozzle-1.3-rps-multi-purpose-cup-0.3-l-0.6-l-0.9-l-each-1x-swivel-joint/210765). La fiche du [SATAminijet 4400 B HVLP](https://www.sata.com/en-gb/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-0.8-0.3-l-rps-suitable-for-water-and-solvent-based-paint-systems/204180) indique **120 L/min**, également à **2 bar**.

Les 310 L/min d’écart appartiennent à cette comparaison et à elle seule. Ils montrent pourquoi le modèle et sa source doivent accompagner chaque point de fonctionnement. Étendre cet écart à tous les pistolets HVLP serait abusif.

## La pression utile se lit pendant la pulvérisation

SATA parle de pression dynamique à l’entrée du pistolet. La lecture à vide répond donc mal à la question : que reste-t-il lorsque le pistolet débite ? Longueur et diamètre du flexible, raccords et traitement d’air peuvent creuser l’écart.

Un [profil de pression du réseau](/guides/diagnostiquer-chute-pression-air-comprime/) suit le parcours : départ du compresseur, sortie du traitement, extrémité de la conduite, puis raccord du pistolet en fonctionnement. Une baisse localisée au dernier point oriente vers la distribution ; relever la consigne en amont ne localise rien.

## ISO 8573-1 classe l’air, le procédé fixe l’exigence

La page officielle de l’[ISO 8573-1:2010](https://www.iso.org/fr/standard/46418.html) répartit la pureté entre particules, eau et huile. La [définition du glossaire](/glossaire/#iso-8573-1) reprend exactement ce périmètre. Aucune classe universelle « carrosserie » n’en découle.

La valeur recherchée doit être attribuable au procédé, au produit appliqué, à l’équipement ou à un cahier des charges. Tant qu’elle manque, la chaîne de traitement peut être décrite, mais aucune conformité à une classe précise ne peut être annoncée. Le guide [qualité de l’air et ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) développe ce point.

## Un séparateur et un sécheur ne répondent pas au même problème

Atlas Copco distingue, dans son guide de [sélection d’un sécheur](https://www.atlascopco.com/en-ca/compressors/wiki/compressed-air-articles/choosing-a-dryer), la séparation de l’eau condensée et la réduction de la vapeur d’eau. Un séparateur, un filtre et un sécheur ne décrivent donc pas la même fonction.

Le choix se joue alors sur trois éléments : l’endroit où la qualité est exigée, le débit traversant le traitement et les conditions de fonctionnement. La mention « sans huile » du compresseur ne mesure pas l’air final au bout du réseau.

## La fiche de poste qui rend le choix vérifiable

Avant de choisir une machine ou de modifier le réseau, réunissez :

- la fiche du pistolet exact avec débit et pression ;
- le ou les usages réellement simultanés ;
- la mesure de pression en pulvérisation ;
- les composants de traitement et leurs états ;
- l’exigence de qualité attribuée au procédé ;
- les points FAD du compresseur à une pression comparable.

Une case vide laisse le verdict incomplet. Elle appelle la bonne fiche ou une mesure, jamais la valeur voisine d’un autre pistolet.

## Sources

- [SATA, SATAjet 5000 B HVLP](https://www.sata.com/en-us/satajet-5000-b-hvlp-nozzle-1.3-rps-multi-purpose-cup-0.3-l-0.6-l-0.9-l-each-1x-swivel-joint/210765)
- [SATA, SATAminijet 4400 B HVLP](https://www.sata.com/en-gb/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-0.8-0.3-l-rps-suitable-for-water-and-solvent-based-paint-systems/204180)
- [ISO, ISO 8573-1:2010](https://www.iso.org/fr/standard/46418.html)
- [Atlas Copco, choisir un sécheur d’air comprimé](https://www.atlascopco.com/en-ca/compressors/wiki/compressed-air-articles/choosing-a-dryer)
