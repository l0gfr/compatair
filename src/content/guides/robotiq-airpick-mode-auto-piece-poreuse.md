---
title: "AirPick : le mode automatique distingue trois comportements de porosité"
seoTitle: "AirPick : génération continue sur matière poreuse"
description: "Le très poreux peut faire tourner AirPick en continu sans défaut automatique. Lire gFLT 0x3 en avancé et distinguer usure, porosité et maximum 100 %."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "vacuometre-vacuostat-bar-absolu-pourcentage-vide", "schmalz-svk-ventouses-non-occupees-vide"]
sources: ["https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf"]
---

L’AirPick consomme de l’air en continu sur une matière et se coupe par intermittence sur une autre. Le manuel prévoit une réaction particulière lorsqu’un matériau très poreux ou une ventouse usée provoque des reprises rapides. **L’absence de défaut en mode automatique ne garantit donc pas que le comportement est identique à celui d’une pièce étanche.**

## Le mode automatique apprend pendant la prise

Le [manuel AirPick e-Series, page 47](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf#page=47) décrit une recherche du vide maximal pendant au plus **deux secondes**. Si le vide dépasse **20 %** et semble constant, le préhenseur détermine ses niveaux minimal et maximal. Le fabricant précise que ce comportement dépend de la surface, des ventouses et de la révision du firmware.

Une répétabilité stricte peut justifier l’examen du mode avancé, que Robotiq destine à un comportement de production constant à partir des réglages définis. Cela exige une qualification des niveaux et délais pour la tâche ; les seuils d’apprentissage ne donnent pas une charge admissible.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 324" role="img" aria-labelledby="robotiq-airpick-mode-auto-piece-poreuse-title robotiq-airpick-mode-auto-piece-poreuse-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="robotiq-airpick-mode-auto-piece-poreuse-title">AirPick : très poreux selon le mode</title><desc id="robotiq-airpick-mode-auto-piece-poreuse-desc">Le mode automatique poursuit la génération sans défaut pour le très poreux détecté. En avancé, le défaut gFLT 0x3 apparaît et les réglages restent appliqués.</desc><rect width="520" height="324" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">Même matière · états différents</text><path d="M46 154H472" stroke="#8abfa3" stroke-width="4"/><text x="36" y="100" fill="#eef2e9" font-size="24">Automatique</text><text x="36" y="138" fill="#eef2e9" font-size="21">Génération continue</text><text x="36" y="196" fill="#eef2e9" font-size="24">Avancé</text><text x="36" y="235" fill="#d3eb56" font-size="25">gFLT = 0x3</text><text x="36" y="275" fill="#eef2e9" font-size="21">Réglages conservés</text></svg>
<figcaption>Le mode automatique poursuit la génération sans défaut pour le très poreux détecté. En avancé, le défaut gFLT 0x3 apparaît et les réglages restent appliqués.</figcaption>
</figure>

## Très poreux et ventouse usée produisent une réaction similaire

La [page 50](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf#page=50) décrit une détection de matière très poreuse ou de ventouse usée. Les démarrages et arrêts rapides peuvent user prématurément la mécanique interne. En automatique, **aucun défaut n’est posé**, mais le générateur tourne en continu jusqu’à la commande de relâchement. En avancé, **gFLT = 0x3** est posé et le préhenseur continue avec les réglages demandés.

Cette indication ne distingue pas seule porosité et usure. Comparer la même matière avec une ventouse conforme, puis une matière étanche dans les conditions autorisées, peut orienter leur séparation. C’est une proposition documentaire de diagnostic, sans résultat d’essai annoncé. Le [guide des pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) explique le besoin de débit traversant.

## Lire les états sans les transformer en force mesurée

La [page 48](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf#page=48) décrit, en avancé avec maximum inférieur à 100 %, une alternance de **gOBJ 0b01 et 0b10** entre seuil minimal et maximal. Si le maximum est fixé à 100 %, la génération reste continue et le drapeau de maximum n’est jamais atteint : Robotiq dit ce niveau impossible à atteindre.

| Observation | Interprétation documentaire |
| --- | --- |
| Continu en automatique, sans défaut | Très poreux ou usure possible selon la logique publiée |
| gFLT 0x3 en avancé | État détecté ; fonctionnement maintenu selon réglages |
| Maximum demandé 100 % | Mode continu distinct, drapeau maximal non atteint |
| Niveau de vide stable | Mesure locale, sans force de maintien directement établie |

Le [guide de vacuostat](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) précise les conventions de vide. Celui des [ventouses non occupées](/guides/schmalz-svk-ventouses-non-occupees-vide/) traite une fuite géométriquement différente. Après identification de la cause, la consommation et les états doivent être comparés sur un cycle défini ; ils ne permettent pas de calculer une économie permanente à partir du seul mode choisi.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Robotiq AirPick e-Series, notice du 12 septembre 2019](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf)
