---
title: "Mesurer les vapeurs d’huile suffit-il à contrôler l’huile totale de l’air ?"
description: "Un capteur de vapeurs d’huile ne couvre pas automatiquement les aérosols et liquides. Définir les phases, le point de prélèvement et l’action sur alarme."
pubDate: 2026-09-29
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["filtre-charbon-actif-air-comprime-vapeurs-huile", "classe-0-compresseur-certificat-huile-portee", "tester-contamination-air-avant-peinture"]
sources:
  - https://www.beko-technologies.com/en-en/products/measurement-technology/measurement-technology-products/metpoint-ocv-compact/
  - https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/oil-free-air/documents/ZR%20ZT_160-900_%28VSD%29_Certificate_Class%200_TUV_EN_Antwerp_Ed01.pdf
  - https://www.iso.org/fr/standard/46418.html
---

**Une mesure de vapeurs d’huile ne doit pas être publiée comme une mesure d’huile totale sans justification.** Le capteur, les phases observées et le point de prélèvement déterminent ce qu’un résultat permet de conclure. Cette distinction compte lorsqu’une alarme pilote la maintenance d’un traitement ou une décision sur un produit.

## Décrire ce que le capteur observe

[BEKO présente le METPOINT OCV compact](https://www.beko-technologies.com/en-en/products/measurement-technology/measurement-technology-products/metpoint-ocv-compact/) comme un appareil de surveillance des vapeurs d’huile. Il décrit une comparaison du flux à mesurer avec un air de référence purifié. Le fabricant cite notamment la surveillance des filtres à charbon actif et des convertisseurs catalytiques.

Cette fonction ne suffit pas à déclarer, sans autre document, que l’appareil mesure aussi toute l’huile liquide et les aérosols présents. La notice et le protocole doivent confirmer les substances et les phases couvertes, ainsi que les conditions de prélèvement.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 280" role="img" aria-labelledby="mesure-vapeurs-huile-huile-totale-air-comprime-title mesure-vapeurs-huile-huile-totale-air-comprime-desc" style="font-family:system-ui,sans-serif">
<title id="mesure-vapeurs-huile-huile-totale-air-comprime-title">Vapeurs et autres phases d’huile</title><desc id="mesure-vapeurs-huile-huile-totale-air-comprime-desc">Un instrument de vapeurs ne couvre pas automatiquement les aérosols et liquides. Ce schéma représente le périmètre de mesure, sans donner de concentration ou de seuil.</desc>
<rect width="440" height="280" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Une mesure, un périmètre</text><text x="24" y="82" fill="#eef2e9" font-size="18" text-anchor="start" font-weight="400">Vapeurs / hydrocarbures gazeux</text><rect x="24" y="101" width="392" height="34" rx="8" fill="#19704f"/><text x="24" y="164" fill="#eef2e9" font-size="18" text-anchor="start" font-weight="400">Aérosols et liquide</text><rect x="24" y="182" width="392" height="34" rx="8" fill="#765039"/><text x="24" y="249" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">Huile totale : ne pas ignorer une phase</text>
</svg>
<figcaption>Un instrument de vapeurs ne couvre pas automatiquement les aérosols et liquides. Ce schéma représente le périmètre de mesure, sans donner de concentration ou de seuil.</figcaption>
</figure>

Dans le [certificat TÜV de type publié par Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/oil-free-air/documents/ZR%20ZT_160-900_%28VSD%29_Certificate_Class%200_TUV_EN_Antwerp_Ed01.pdf), le contrôle de l’huile totale associe des méthodes pour aérosols et liquides, et une autre pour les vapeurs et solvants organiques. Ce document illustre précisément la nécessité d’identifier les phases ; il n’est pas une prescription d’instrumentation pour tout atelier.

## Formuler l’exigence avant l’achat du capteur

Écrivez d’abord le besoin du procédé : contaminant, phases à contrôler, point où le critère s’applique et conditions de fonctionnement. La [présentation ISO 8573-1](https://www.iso.org/fr/standard/46418.html) permet de situer l’huile parmi les familles de contaminants ; elle ne transforme pas chaque capteur en instrument de toutes les classes.

| Élément du cahier des charges | Question à résoudre |
| --- | --- |
| Mesurande | Vapeurs d’huile ou périmètre plus large ? |
| Point | Avant traitement, après traitement ou au procédé ? |
| Conditions | Pression, température et prélèvement admis ? |
| Résultat | Unité, référence, limites et statut de mesure ? |

Une fiche indiquant une excellente résolution ne répond pas à une erreur de périmètre. La plage et la sensibilité doivent être adaptées à l’exigence, mais aussi interprétées avec les conditions de mesure et l’entretien prévu.

## Préparer la réaction à une anomalie

Un système de surveillance utile précise qui reçoit l’alarme, ce qui est vérifié et quelle décision concerne le procédé. Une dérive peut nécessiter de contrôler le traitement et l’instrument, sans attribuer automatiquement toute variation à une seule cartouche.

Le [guide du charbon actif](/guides/filtre-charbon-actif-air-comprime-vapeurs-huile/) explique sa fonction. Le résultat d’un capteur placé après cet étage ne décrit pas nécessairement une autre branche ni un accessoire ajouté plus loin.

Un signal absent ou un capteur hors conditions ne devient pas une teneur nulle. Le compte rendu doit distinguer une mesure valide, une alarme, un défaut de l’instrument et une donnée indisponible. Le [dossier du certificat classe 0](/guides/classe-0-compresseur-certificat-huile-portee/) donne des questions de périmètre similaires.

## Garder les autres contrôles à leur place

Un [test pratique de contamination avant peinture](/guides/tester-contamination-air-avant-peinture/) répond à son propre objectif. Il ne remplace pas une quantification de toutes les phases d’huile. De même, un suivi des vapeurs ne documente pas automatiquement l’eau, les particules ou la qualité microbiologique.

Ce guide ne propose ni seuil d’alarme universel ni teneur présumée pour un atelier. Il aide à choisir un contrôle qui répond au critère réellement écrit, puis à conserver les limites du résultat dans le rapport.

Le terme [huile totale](/glossaire/#huile-totale) désigne ce périmètre de phases ; il doit accompagner la méthode et le point de prélèvement dans le rapport.
