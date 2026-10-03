---
title: "Haas TRP : distinguer retour lent, précharge et alarmes 130 ou 131"
seoTitle: "Haas TRP : retour lent et alarmes 130 ou 131"
description: "TG0146 distingue choc de précharge et retour lent du TRP. Identifiez la configuration, le rappel et l’échappement avant de modifier l’alimentation."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-machine-cnc-haas-pression-debit", "silencieux-pneumatique-colmate-contre-pression", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.haascnc.com/service/troubleshooting-and-how-to/troubleshooting/tool-release-piston--trp----troubleshooting-guide.alarm%3Dngc_9959-0000.html"]
---

**Sur une machine Haas, un TRP qui rentre lentement et un TRP qui frappe bruyamment le tirant de broche ne renvoient pas au même groupe de causes.** Le guide fabricant TG0146 sépare ces symptômes. Augmenter la pression réseau sans les distinguer peut déplacer le réglage sans expliquer l’incident.

Le [tableau de symptômes TG0146, révisé le 15 octobre 2025](https://www.haascnc.com/service/troubleshooting-and-how-to/troubleshooting/tool-release-piston--trp----troubleshooting-guide.alarm%3Dngc_9959-0000.html) associe un choc bruyant à un régulateur de précharge mal réglé. Pour un retour lent avec alarmes **130 TOOL UNCLAMPED** ou **131 TOOL NOT CLAMPED**, il cite notamment ressort de retour cassé, valve Humphrey usée, silencieux colmaté et défauts du piston ou de son joint.

## Observer le sens du défaut

Conservez l’ordre des événements : arrivée au contact, libération, retour et signal d’alarme. Le code seul ne décrit pas tout le mouvement. Le tableau comprend aussi d’autres causes propres aux cartes et configurations ; une alarme 131 ne permet pas de conclure que le compresseur est trop petit.

La section Humphrey explique qu’une valve d’échappement rapide usée peut laisser entrer de l’air dans le piston et ralentir son retour. Cette cause est différente d’un manque d’air général. Un silencieux colmaté est une autre piste d’évacuation décrite dans le même tableau.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 380" role="img" aria-labelledby="haas-trp-retour-lent-precharge-alarme-130-131-svg-title haas-trp-retour-lent-precharge-alarme-130-131-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="haas-trp-retour-lent-precharge-alarme-130-131-svg-title">Deux symptômes conduisent à deux groupes de causes</title><desc id="haas-trp-retour-lent-precharge-alarme-130-131-svg-desc">TG0146 associe le choc de TRP à la précharge et le retour lent à des causes de rappel ou d’échappement. Le tableau n’établit pas une cause certaine sur une machine sans examen.</desc>
<rect width="520" height="380" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="23">TRP Haas : décrire le mouvement</text><rect x="35" y="86" width="449" height="87" rx="10" fill="#203f31"/><text x="55" y="121" fill="white" font-size="19">Choc bruyant au contact du tirant</text><text x="55" y="155" fill="#d3eb56" font-size="20">→ examiner la précharge prévue</text><rect x="35" y="202" width="449" height="98" rx="10" fill="#203f31"/><text x="55" y="237" fill="white" font-size="20">Retour lent / alarmes 130 ou 131</text><text x="55" y="271" fill="#d3eb56" font-size="20">→ rappel, valve et échappement</text><text x="28" y="350" fill="white" font-size="19">Ne pas remplacer le diagnostic par plus d’air.</text></g>
</svg>
<figcaption>TG0146 associe le choc de TRP à la précharge et le retour lent à des causes de rappel ou d’échappement. Le tableau n’établit pas une cause certaine sur une machine sans examen.</figcaption>
</figure>

## Retrouver la configuration avant de chercher un régulateur

Dans sa section « Precharge Regulator », Haas distingue régulateur réglable et régulateur fixe : le second doit être remplacé si sa pression est incorrecte, plutôt que traité comme un organe réglable. La note indique également que les machines à broche inline 40T VF, VM et UMC construites après **février 2017** n’ont pas ce régulateur de précharge.

Cette date et cette architecture empêchent une procédure générique de réglage de précharge sur toute Haas. Relevez modèle, construction et type de broche, puis utilisez la procédure correspondant à la machine. Aucun seuil de pression de précharge n’est inventé ici à partir d’une autre série.

## L’examen du ressort relève de l’assemblage prévu

La section « Return Spring » prévoit le remplacement de l’ensemble de base si le ressort est cassé. Plus loin, Haas précise que cette base n’est pas réparable en raison de la forte pression du ressort. Ce guide ne transforme donc pas cette piste en consigne de démontage du mécanisme.

| Symptôme observé | Demande d’examen ciblée |
| --- | --- |
| Choc bruyant de TRP | Précharge de la configuration qui en possède une |
| Retour lent | Ressort, valve d’échappement, silencieux, piston et joint selon TG0146 |
| Libération insuffisante | Tableau correspondant, fuite et réglages propres à la machine |
| Alarme intermittente sans mouvement lent décrit | Configuration de commande et autres lignes du tableau |

Le [guide d’alimentation d’une CNC Haas](/guides/compresseur-machine-cnc-haas-pression-debit/) traite le réseau et les auxiliaires. Le [guide de silencieux colmaté](/guides/silencieux-pneumatique-colmate-contre-pression/) explique le mécanisme de restriction, sans remplacer la procédure TRP. Pour une baisse d’alimentation effectivement suspectée, le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) fournit un relevé exploitable.

La prochaine action est de transmettre au service compétent la configuration et la chronologie précise, puis de faire exécuter le contrôle TG0146 adapté. Le symptôme permet de choisir une piste ; il ne constitue pas une autorisation de modifier des paramètres de machine à distance.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
