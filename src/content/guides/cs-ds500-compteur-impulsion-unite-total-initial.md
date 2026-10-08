---
title: "CS DS500 : un total d’air erroné après changement de compteur"
seoTitle: "CS DS500 : impulsions, unité et total initial"
description: "Un changement de voie peut fausser le total sans perdre d’impulsions. Vérifier 1Pulse, Unit Pulse et la valeur initiale du compteur DS500."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "cs-va520-impulsions-50hz-compteur-debit"
  - "convertir-cfm-l-min-nl-min-air-comprime"
  - "debitmetre-air-comprime-diametre-conditions-reference"
sources:
  - "https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_DS500_V2_EN.pdf"
---

Les impulsions arrivent, mais le total ne correspond pas au relevé attendu. Dans le menu Pulse Counter du DS500, **valeur d’une impulsion, unité et valeur du compteur** sont des informations distinctes. La [notice DS500, section 13.3.7.1, page 46](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_DS500_V2_EN.pdf#page=46) précise que le compteur peut être réglé à une valeur choisie.

Un total différent après remplacement ou configuration ne prouve donc pas une perte électrique d’impulsions. Il peut traduire un facteur, une unité ou une origine de comptage différente.

## Ne comparer que les accroissements sur une période commune

La méthode proposée par CompatAir garde un relevé au début et à la fin de la même période pour chaque compteur. L’accroissement s’obtient par différence. Cette comparaison évite de prendre un ancien total conservé sur un appareil pour une consommation apparue pendant l’essai.

En **scénario hypothétique**,1 000 impulsions valant chacune 1 L représentent 1000 L, soit 1 m³. Un récepteur auquel 1 m³ a été attribué par impulsion produirait 1000 m³. Le facteur d’erreur vient du contrat de comptage, sans disparition d’une seule impulsion.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" role="img" aria-labelledby="cs-ds500-compteur-impulsion-unite-total-initial-title cs-ds500-compteur-impulsion-unite-total-initial-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="cs-ds500-compteur-impulsion-unite-total-initial-title">Le facteur appartient à l’impulsion</title><desc id="cs-ds500-compteur-impulsion-unite-total-initial-desc">Scénario hypothétique : 1 000 impulsions×1 L=1 000 L=1 m³. La période et le total initial sont à conserver séparément.</desc><rect width="520" height="360" rx="22" fill="#10281e"/><text x="26" y="43" font-size="21" fill="#d3eb56" font-weight="700">Compter ne définit pas encore le volume</text><text x="35" y="112" font-size="29" fill="#eef2e9">1 000 impulsions</text><text x="35" y="172" font-size="27" fill="#eef2e9">× 1 L / impulsion</text><path d="M35 201H481" stroke="#8abfa3" stroke-width="2"/><text x="35" y="254" font-size="29" fill="#d3eb56" font-weight="700">= 1 000 L = 1 m³</text><text x="35" y="316" font-size="21" fill="#eef2e9">Puis comparer les accroissements</text></svg>
<figcaption>Scénario hypothétique : 1 000 impulsions×1 L=1 000 L=1 m³. La période et le total initial sont à conserver séparément.</figcaption>
</figure>


## Lire le facteur avec son unité

La notice renvoie à la valeur marquée sur le capteur pour le champ **1Pulse=** et distingue **Unit Pulse** de l’unité du compteur. Gardez une photographie du marquage et un export ou relevé des paramètres. Un nombre seul, sans unité, ne permet pas de vérifier l’association.

| Ligne à conserver | Utilité |
| --- | --- |
| Valeur physique d’une impulsion | Facteur du comptage |
| Unité de l’impulsion | Litres, mètres cubes ou autre grandeur |
| Unité du compteur | Interprétation du total affiché |
| Total initial et date | Origine de la période comparée |

Si les accroissements concordent mais les totaux absolus diffèrent, documentez l’origine historique. Ne réinitialisez pas un compteur de production uniquement pour aligner deux écrans : cela effacerait une information de suivi. Toute correction doit préserver le relevé précédent et sa date.

Si le compteur vient d’être mis à jour, consultez le [parcours de sauvegarde et réception DS500](/guides/cs-ds500-mise-a-jour-sauvegarde-canaux/) pour conserver la configuration des voies.

## Vérifier ensuite la capacité de comptage

Le [guide VA520 à 50 Hz](/guides/cs-va520-impulsions-50hz-compteur-debit/) traite le plafond de sortie et la fréquence admise par l’acquisition. Ce contrôle vient en complément : un facteur correct ne garantit pas que toutes les impulsions sont reçues.

Les [conversions CFM/L/min/Nl/min](/guides/convertir-cfm-l-min-nl-min-air-comprime/) et les [conditions de référence du débitmètre](/guides/debitmetre-air-comprime-diametre-conditions-reference/) rappellent qu’un total de volume doit encore porter sa référence d’air. Ici, la résolution est un compteur dont facteur, unité et origine sont explicitement cohérents, sans promettre la justesse métrologique de tout le réseau.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
