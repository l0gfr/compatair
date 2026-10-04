---
title: "VA520 : choisir la valeur d’impulsion pour respecter la limite de 50 Hz"
seoTitle: "VA520 : compter le débit sans dépasser 50 Hz"
description: "Choisir le volume par impulsion du VA520 avec son plafond de 50 Hz. Calculer la fréquence et vérifier le compteur sans confondre résolution et débit."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["audit-reseau-air-comprime-protocole-mesures", "debitmetre-air-comprime-diametre-conditions-reference", "convertir-cfm-l-min-nl-min-air-comprime"]
sources: ["https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA520_EN.pdf"]
---

Le total affiché sur le VA520 et celui du compteur externe divergent lorsque la demande augmente. Le problème peut venir du volume attribué à chaque impulsion ou de la capacité d’acquisition. **La résolution choisie doit rester compatible avec le débit maximal à compter.** Une impulsion très fine n’améliore pas automatiquement la mesure exploitable.

## Le plafond de sortie est documenté

La [notice VA520 V2.02, pages 26–27](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA520_EN.pdf#page=26) donne un maximum de **50 impulsions par seconde**, émises avec un **retard d’une seconde**. Le tableau associe **0,1 L/impulsion à 300 L/min**, puis **1 L/impulsion à 3 000 L/min**.

Le calcul est explicite : pour un débit Q exprimé en L/min et un volume V en L/impulsion, la fréquence vaut **Q ÷ (60 × V)**. Avec un scénario hypothétique de **600 L/min** et **0,1 L/impulsion**, cela donne **100 Hz**, au-dessus du plafond publié. Avec **1 L/impulsion**, le même scénario donne **10 Hz**. Ce calcul n’est pas un débit observé sur une installation.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 330" role="img" aria-labelledby="cs-va520-impulsions-50hz-compteur-debit-title cs-va520-impulsions-50hz-compteur-debit-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="cs-va520-impulsions-50hz-compteur-debit-title">VA520 : le volume par impulsion impose une limite</title><desc id="cs-va520-impulsions-50hz-compteur-debit-desc">Au plafond publié de 50 impulsions par seconde, 0,1 L/impulsion représente 300 L/min et 1 L/impulsion 3 000 L/min.</desc><rect width="520" height="330" rx="22" fill="#10281e"/><text x="25" y="42" fill="#d3eb56" font-size="23" font-weight="700">Même fréquence · volumes différents</text><text x="30" y="100" fill="#eef2e9" font-size="24">0,1 L / impulsion</text><path d="M32 126H61" stroke="#d3eb56" stroke-width="16"/><text x="137" y="134" fill="#eef2e9" font-size="25">300 L/min</text><text x="30" y="202" fill="#eef2e9" font-size="24">1 L / impulsion</text><path d="M32 228H322" stroke="#8abfa3" stroke-width="16"/><text x="331" y="235" fill="#eef2e9" font-size="25">3 000</text><text x="30" y="294" fill="#eef2e9" font-size="23">Plafond : 50 Hz · retard : 1 s</text></svg>
<figcaption>Au plafond publié de 50 impulsions par seconde, 0,1 L/impulsion représente 300 L/min et 1 L/impulsion 3 000 L/min.</figcaption>
</figure>

## Vérifier les deux côtés du comptage

La notice précise qu’une valeur d’impulsion incapable de représenter la borne supérieure de la plage est refusée avec un message d’erreur. Cette protection du capteur ne prouve pas que l’entrée du compteur externe accepte toutes les impulsions possibles.

| Côté capteur | Côté acquisition |
| --- | --- |
| Unité et volume par impulsion | Même unité et même facteur de comptage |
| Borne supérieure de mesure | Fréquence admise par l’entrée réellement utilisée |
| Polarité configurée | Front détecté et état attendu |
| Retard de sortie d’une seconde | Fenêtre temporelle de comparaison des totaux |

Les capacités de l’automate doivent être vérifiées dans sa propre documentation. Le VA520 ne définit pas la fréquence admissible d’une entrée d’un autre fabricant. Le [protocole d’audit d’un réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à garder des périodes et frontières de mesure comparables.

## Un total correct nécessite également le bon volume de référence

La [mise en place d’un débitmètre](/guides/debitmetre-air-comprime-diametre-conditions-reference/) traite le diamètre intérieur, l’implantation et les conditions de référence. Un comptage électrique exact peut rester mal interprété si son volume est comparé à une autre référence d’air. Le [guide CFM, L/min et Nl/min](/guides/convertir-cfm-l-min-nl-min-air-comprime/) précise ce point.

La notice publie aussi **0,1 m³/impulsion pour 300 000 L/min** et **1 m³/impulsion pour 3 000 000 L/min** au même plafond de sortie. Ce sont des limites de représentation de l’interface dans le tableau, pas la preuve qu’un VA520 quelconque mesure ces débits dans n’importe quel diamètre.

Pour diagnostiquer un écart, comparer d’abord une période suffisamment longue pour intégrer le retard publié, puis vérifier le facteur de chaque impulsion et la capacité d’entrée. Une différence liée aux transitions ne s’analyse pas comme un écart permanent de conversion.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [CS Instruments VA520, notice V2.02, avril 2026](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA520_EN.pdf)
