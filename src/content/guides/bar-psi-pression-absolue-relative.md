---
title: "Bar, psi, pression absolue et pression relative : convertir sans fausser le calcul"
description: "Comprendre les références de pression, convertir bar, kPa et psi, puis éviter les erreurs de comparaison entre manomètres, débits et documents constructeurs."
pubDate: 2026-07-13
category: "Comprendre"
audiences: [particulier, professionnel]
metiers: []
readingTime: 10
featured: false
sources:
  - https://physics.nist.gov/cuu/pdf/sp811.pdf
  - https://www.cagi.org/resource-library
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
---

Une conversion correcte ne consiste pas seulement à multiplier un nombre. Il faut d’abord savoir si la pression est absolue ou relative, si elle décrit une limite maximale ou un point de travail et à quel endroit elle est mesurée.

Le [NIST](https://physics.nist.gov/cuu/pdf/sp811.pdf) donne les facteurs de conversion vers le pascal. Le [CAGI](https://www.cagi.org/resource-library) distingue la pression absolue, mesurée depuis le vide, et la pression indiquée par la plupart des manomètres, mesurée par rapport à l’atmosphère.

<svg viewBox="0 0 760 350" role="img" aria-labelledby="units-title units-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="units-title">Pression absolue et pression relative</title><desc id="units-desc">La pression absolue part du vide tandis que la pression relative part de la pression atmosphérique locale.</desc>
  <rect width="760" height="350" rx="22" fill="#10281e"/><text x="38" y="48" fill="#d3eb56" font-size="15" font-weight="700">LA RÉFÉRENCE CHANGE LE NOMBRE</text>
  <line x1="125" y1="275" x2="680" y2="275" stroke="#8fa39a" stroke-width="3"/><line x1="270" y1="275" x2="270" y2="96" stroke="#47a47c" stroke-width="8"/><line x1="270" y1="96" x2="615" y2="96" stroke="#d3eb56" stroke-width="8"/>
  <text x="75" y="282" fill="white" font-size="14">Vide</text><text x="235" y="307" fill="#b9cac1" font-size="14">Atmosphère</text><text x="595" y="307" fill="#b9cac1" font-size="14">Système</text>
  <text x="330" y="77" fill="#d3eb56" font-size="17" font-weight="700">Pression relative</text><text x="345" y="180" fill="white" font-size="17" font-weight="700">Pression absolue</text><path d="M125 195h490" stroke="white" stroke-width="3" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="white"/></marker></defs>
  <text x="38" y="330" fill="#b9cac1" font-size="14">Le repère atmosphérique varie avec le lieu et l’altitude. Toujours nommer la référence.</text>
</svg>

## Le pascal est l’unité SI

Le pascal, symbole Pa, est l’unité SI de pression. Il correspond à un newton par mètre carré. Dans les applications d’air comprimé, les valeurs sont plus lisibles en kilopascals ou mégapascals.

Le bar n’est pas une unité SI, mais il est accepté avec le SI et courant dans les fiches européennes. La relation exacte indiquée par le NIST est :

> 1 bar = 100 kPa = 0,1 MPa = 100 000 Pa.

Cette égalité convertit l’unité. Elle ne change pas la référence absolue ou relative de la mesure.

## Convertir le psi

Le psi exprime une livre-force par pouce carré. Le facteur NIST donne :

> 1 psi = 6,894 757 kPa.

On en déduit qu’un bar vaut environ 14,5038 psi. L’arrondi utile dépend de la précision de la source. Afficher six décimales à partir d’un manomètre gradué grossièrement donnerait une précision artificielle.

Une fiche américaine peut employer psig pour une pression relative et psia pour une pression absolue. Supprimer la dernière lettre lors de la copie fait disparaître une information essentielle.

## Pression relative

La pression relative compare la pression du système à la pression atmosphérique locale. Un manomètre ouvert à l’air indique normalement zéro, même si l’air exerce une pression atmosphérique réelle.

Les pressions de travail des outils pneumatiques sont généralement présentées sous cette forme dans les fiches commerciales, mais il faut vérifier le document. CompatAir conserve la valeur et l’unité publiées et ne transforme pas une référence non identifiée en certitude.

## Pression absolue

La pression absolue utilise le vide comme origine. Elle est nécessaire dans de nombreuses relations thermodynamiques et calculs de gaz compressibles.

La relation conceptuelle est :

> Pression absolue = pression relative + pression atmosphérique locale.

La pression atmosphérique locale dépend notamment de l’altitude et des conditions météorologiques. Ajouter systématiquement une valeur ronde sans préciser l’hypothèse peut être insuffisant pour un calcul précis.

Le [glossaire](/glossaire/#pression-absolue) conserve séparément les définitions absolue et relative.

## Pression maximale et pression de travail

La pression maximale d’un compresseur est une limite de fonctionnement annoncée. La pression de travail est celle requise au point où l’outil consomme l’air.

Un compresseur capable d’atteindre 10 bar peut délivrer un débit insuffisant à 6,3 bar. Le nombre maximal ne remplace donc pas la [courbe de débit restitué](/guides/debit-restitue-fad-vs-debit-aspire/).

Il faut aussi tenir compte de la [chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) entre la cuve et le point d’utilisation.

## Ne pas convertir un débit sans ses conditions

Passer de L/min à CFM convertit une unité de volume par temps. Mais un débit d’air compressible dépend aussi des conditions auxquelles le volume est exprimé.

Le CAGI distingue notamment le débit réel dans les conditions d’entrée et les débits ramenés à des conditions de référence. Deux valeurs portant la même unité peuvent donc rester non comparables si température, pression et humidité de référence diffèrent.

CompatAir compare en priorité des débits restitués documentés et conserve les conditions disponibles. Une conversion d’unité ne répare pas une condition de référence manquante.

## Checklist avant tout calcul

Avant de convertir ou comparer, relevez :

1. la grandeur mesurée ;
2. l’unité ;
3. la référence absolue ou relative ;
4. le point de mesure ;
5. la température et les conditions de référence pour un débit ;
6. la précision de la source ;
7. le nombre de chiffres réellement justifié.

Cette discipline évite de produire un résultat numérique exact en apparence à partir d’entrées incompatibles.

## Sources

- [NIST, Guide for the Use of the International System of Units, facteurs de conversion](https://physics.nist.gov/cuu/pdf/sp811.pdf)
- [Compressed Air and Gas Institute, glossaire des pressions et débits](https://www.cagi.org/resource-library)
- [Atlas Copco, Compressed Air Manual, 9e édition, pression de travail et débit](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
