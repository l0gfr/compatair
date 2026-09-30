---
title: "Prebena MODUL 11-Z40 : cadence et air à 6 bar"
description: "0,95 L par agrafe à 6 bar : calculez deux scénarios de cadence pour les MODUL 11-Z40-H et V, sans confondre débit moyen et pointe instantanée."
pubDate: 2026-09-30
category: Installer
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
featured: false
reviewStatus: internal
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources:
  - https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf
relatedCalculatorTool: agrafeuse-cloueuse-prebena-modul-11-z40-h
---

Pour les modules industriels MODUL 11-Z40-H et MODUL 11-Z40-V, le catalogue Prebena donne une quantité approximative avec sa pression : **0,95 litre par agrafe à 6 bar**. Une cadence explicite permet donc de calculer une demande moyenne, contrairement à un chiffre par fixation dont la pression manque.

## La variante change le chargement

Les pages [MODUL 11-Z40-H](https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=74) et [MODUL 11-Z40-V](https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=75) indiquent le chargement latéral pour H et par le dessus pour V. Les masses sont respectivement 9,0 et 8,5 kg. Le catalogue annonce jusqu’à huit agrafes par seconde.

La capacité du H est donnée à 1 368 agrafes. Pour V, le document précise qu’elle dépend de la longueur et cite **2 088 agrafes pour Z16**. Cette dernière capacité ne doit pas être attribuée à toutes les agrafes ou à la variante H.

## Deux scénarios de moyenne, calculés

À partir des 0,95 L à 6 bar, supposons les cadences suivantes :

| Cadence choisie | Calcul | Demande moyenne |
| --- | --- | --- |
| 120 fixations/min | 0,95 × 120 | 114 L/min |
| 480 fixations/min | 0,95 × 480 | 456 L/min |

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 224" role="img" aria-labelledby="prebena-modul-11-z40-h-v-cadence-air-title prebena-modul-11-z40-h-v-cadence-air-desc" style="font-family:system-ui,sans-serif"><title id="prebena-modul-11-z40-h-v-cadence-air-title">Moyennes de scénarios à 6 bar</title><desc id="prebena-modul-11-z40-h-v-cadence-air-desc">Les valeurs sont des moyennes de scénarios ; elles ne décrivent pas les pointes instantanées.</desc><rect width="440" height="224" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">Moyennes de scénarios à 6 bar</text><text x="22" y="70" fill="#eef2e9" font-size="14">120 fixations par minute</text><text x="418" y="70" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">114</text><rect x="22" y="80" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="80" width="99.00" height="10" rx="5" fill="#d3eb56"/><text x="22" y="132" fill="#eef2e9" font-size="14">480 fixations par minute</text><text x="418" y="132" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">456</text><rect x="22" y="142" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="142" width="396.00" height="10" rx="5" fill="#d3eb56"/><text x="22" y="206" fill="#eef2e9" font-size="13">L/min, calculs avec 0,95 L/fixation</text></svg>
<figcaption>Les valeurs sont des moyennes de scénarios ; elles ne décrivent pas les pointes instantanées.</figcaption>
</figure>

480 par minute équivaut à huit par seconde. Le rapprochement avec la cadence maximale de catalogue est arithmétique ; il ne prouve pas que votre machine assemblée peut maintenir cette cadence sur tous les matériaux et réglages.

## La moyenne ne décrit pas la pointe d’une fixation

Les nombres calculés répartissent une quantité approximative sur une minute. Ils ne donnent pas le débit instantané pendant le déclenchement. La réception doit vérifier l’alimentation du module à la cadence prévue, le stockage, les restrictions et le maintien de pression au poste.

Dans le second scénario, une réserve **choisie de 25 %** porterait la cible moyenne à 570 L/min. Cette hypothèse doit être affichée dans le dimensionnement ; elle n’est pas une marge prescrite par les pages citées. Le nombre de modules réellement simultanés doit également être précisé.

Les profils [MODUL 11-Z40-H](/outils-pneumatiques/agrafeuse-cloueuse-prebena-modul-11-z40-h/) et [MODUL 11-Z40-V](/outils-pneumatiques/agrafeuse-cloueuse-prebena-modul-11-z40-v/) attendent une cadence saisie. Le [dossier 5C-Q75/Z75](/guides/prebena-5c-q75-z75-air-par-fixation/) explique pourquoi les autres quantités par fixation de la gamme ne deviennent pas automatiquement des profils calculables.
