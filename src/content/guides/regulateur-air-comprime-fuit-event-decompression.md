---
title: "Régulateur d’air comprimé qui fuit par l’évent : décompression ou défaut ?"
seoTitle: "Régulateur qui fuit par l’évent : que vérifier ?"
description: "Un régulateur peut évacuer de l’air selon sa conception, mais un souffle continu mérite un diagnostic. Identifiez version, moment et pression avant intervention."
pubDate: "2026-09-26"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile", "menuiserie-agencement"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["groupe-frl-filtre-regulateur-lubrificateur", "detecter-mesurer-fuites-air-comprime", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.smcworld.com/upfiles/manual/en-jp/files/AR-OMT0015.pdf"]
---

**Un souffle au niveau d’un régulateur ne suffit pas à identifier une panne.** Certaines versions disposent d’une fonction de décompression ; d’autres n’en disposent pas. Un échappement transitoire lors d’un changement et une fuite persistante en régime stable doivent être décrits séparément.

La première étape est documentaire : relever la référence complète et localiser précisément la sortie d’air. Ne bouchez pas un orifice pour faire disparaître le bruit et ne démontez pas l’appareil sous pression.

## Le cas des régulateurs SMC AR avec retour d’air

La [notice SMC AR20K-B à AR60K-B](https://www.smcworld.com/upfiles/manual/en-jp/files/AR-OMT0015.pdf) distingue des versions avec décompression et des versions sans décompression. Elle traite séparément le mécanisme de retour d’air. Son tableau de dépannage cite, selon le symptôme, une membrane endommagée, un corps étranger au siège de décharge ou une contre-pression aval supérieure à la consigne parmi les causes à examiner.

Cette liste contient des possibilités, pas le diagnostic de votre appareil. La fonction de retour d’air et la décompression vers l’évent ne doivent pas être supposées identiques parce qu’elles apparaissent dans la même famille de produits.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="regulateur-air-comprime-fuit-event-decompression-title regulateur-air-comprime-fuit-event-decompression-desc" xmlns="http://www.w3.org/2000/svg">
<title id="regulateur-air-comprime-fuit-event-decompression-title">Qualifier le souffle avant le diagnostic</title><desc id="regulateur-air-comprime-fuit-event-decompression-desc">Grille d’observation, sans intervention sur un circuit sous pression.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<circle cx="52" cy="68" r="22" fill="#d3eb56"/><text x="52" y="76" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">1</text><text x="90" y="58" fill="#d3eb56" font-size="23" font-weight="700">Identifier la version</text><text x="90" y="94" fill="white" font-size="20">Avec ou sans décompression</text>
<path d="M52 94v37m-6-7 6 7 6-7" fill="none" stroke="#8abfa3" stroke-width="3"/>
<circle cx="52" cy="184" r="22" fill="#d3eb56"/><text x="52" y="192" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">2</text><text x="90" y="174" fill="#d3eb56" font-size="23" font-weight="700">Décrire le moment</text><text x="90" y="210" fill="white" font-size="20">Réglage, arrêt ou régime stable</text>
<path d="M52 210v37m-6-7 6 7 6-7" fill="none" stroke="#8abfa3" stroke-width="3"/>
<circle cx="52" cy="300" r="22" fill="#d3eb56"/><text x="52" y="308" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">3</text><text x="90" y="290" fill="#d3eb56" font-size="23" font-weight="700">Relever les conditions</text><text x="90" y="326" fill="white" font-size="20">Pressions et comportement aval</text>
</svg>
<figcaption>Qualifier le souffle avant le diagnostic. Grille d’observation, sans intervention sur un circuit sous pression.</figcaption>
</figure>

## Localiser avant de remplacer

Nous proposons un relevé qui distingue le raccord, la jonction du corps et l’orifice identifié dans la notice. Une formulation telle que « le détendeur fuit » mélange des emplacements qui peuvent conduire à des vérifications différentes.

Conservez une photo de la référence et un repérage sur le schéma du circuit. La recherche de fuite doit utiliser une méthode autorisée par le site et compatible avec le composant. Notre [guide de détection des fuites](/guides/detecter-mesurer-fuites-air-comprime/) aide à structurer le relevé sans transformer une impression sonore en débit inventé.

## Décrire quand le souffle apparaît

| Observation à consigner | Ce qu’elle permet de discuter |
| --- | --- |
| Pendant une baisse de consigne | Fonctionnement prévu de la version |
| Après un mouvement d’actionneur | État du circuit aval au même instant |
| À l’arrêt des consommateurs | Persistance réelle du phénomène |
| Avec pression aval qui évolue | Relation temporelle entre pression et fuite |
| À un raccord ou une jonction | Localisation distincte d’un évent fonctionnel |

Ce tableau ne classe pas automatiquement chaque cas comme normal ou défectueux. Il fournit au mainteneur les éléments nécessaires pour appliquer la notice exacte et examiner le circuit complet.

## Une pression aval peut venir du procédé

Le tableau SMC mentionne le cas d’une contre-pression supérieure au réglage. Notre conséquence pratique est de ne pas conclure immédiatement que remplacer le régulateur réglera tout le problème. Faites examiner la chronologie et l’origine des pressions avec le schéma de la machine.

Si le phénomène est lié à une phase précise, conservez cette information avec les relevés autorisés. Une mesure prise seulement pendant l’arrêt peut manquer l’événement recherché. Aucun branchement d’essai improvisé ou modification de logique n’est proposé ici.

## Préparer une intervention traçable

La fiche de maintenance doit préciser la référence, le symptôme, les conditions d’apparition et la décision retenue après diagnostic. L’intervention suit la consignation et la dépressurisation prévues pour l’installation, y compris les volumes susceptibles de rester alimentés ou piégés.

Une pièce de remplacement doit correspondre à la version attendue. Le même diamètre de raccord ne prouve pas une équivalence de fonction, de plage ou de débit. Le [guide des groupes FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) aide à distinguer les fonctions regroupées dans un ensemble de préparation d’air.

## Vérifier le résultat au même point de fonctionnement

Après remise en service autorisée, comparez le comportement dans le scénario qui faisait apparaître le souffle. Notez ce qui a été corrigé et les mesures réellement obtenues. Une disparition du bruit ne constitue pas une mesure universelle de fuite nulle.

Si la pression d’utilisation reste instable, poursuivez avec le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) plutôt que d’augmenter la consigne sans cause identifiée.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [SMC, notice AR20K-B à AR60K-B, variantes et dépannage](https://www.smcworld.com/upfiles/manual/en-jp/files/AR-OMT0015.pdf)
