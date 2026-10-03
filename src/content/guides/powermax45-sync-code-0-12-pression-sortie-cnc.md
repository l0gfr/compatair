---
title: "Powermax45 SYNC, code 0-12-n : distinguer pression de sortie et alimentation du plasma"
seoTitle: "Powermax45 SYNC : codes 0-12-n et pression de gaz"
description: "Powermax45 SYNC : codes 0-12-1, 0-12-2 et 0-12-3 sur CNC, pression en débit et contrôles externes documentés avant intervention spécialisée."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-decoupeur-plasma-powermax45-sync", "powermax65-sync-decoupe-gougeage-debit-air", "fiche-intervention-air-comprime"]
sources: ["https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html", "https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/pqe1746821861700.html"]
---

Le code **0-12-n** du Powermax45 SYNC concerne la pression de gaz **en sortie du système**. Hypertherm précise que ces codes apparaissent uniquement sur une CNC par l’interface série RS-485, et non sur l’afficheur à deux chiffres de l’alimentation plasma. Une capture de l’écran CNC et une lecture de la façade ne donnent donc pas nécessairement la même information. [Diagnostic Hypertherm des codes 0-12-n](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html).

La première action utile consiste à relever le code complet, l’endroit où il apparaît, la torche, la cartouche et le procédé sélectionné. Cette identification évite de traiter un défaut CNC comme une simple absence d’air à l’entrée.

## Lire le dernier chiffre avant de régler

| Code | Signification publiée | Direction du contrôle externe |
|---|---|---|
| 0-12-1 | Pression de sortie trop basse | Examiner et ajuster la pression d’entrée |
| 0-12-2 | Pression de sortie trop haute | Examiner et réduire la pression d’entrée |
| 0-12-3 | Pression de sortie instable | Rechercher une alimentation stable |

Hypertherm indique ces significations et les ajustements correspondants dans sa procédure. Le tableau ne remplace pas les conditions de test de la notice, et aucun de ces codes ne démontre à lui seul une panne du compresseur. [Tableau Fault codes et Corrective action](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html).

<div class="article-infographic article-infographic--compact" role="group" aria-label="0-12-n : partir du code complet" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="powermax45-sync-code-0-12-pression-sortie-cnc-title powermax45-sync-code-0-12-pression-sortie-cnc-desc" xmlns="http://www.w3.org/2000/svg"><title id="powermax45-sync-code-0-12-pression-sortie-cnc-title">0-12-n : partir du code complet</title><desc id="powermax45-sync-code-0-12-pression-sortie-cnc-desc">Diagnostic documenté du Powermax45 SYNC ; les pressions sont relevées pendant l’écoulement.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">0-12-n : partir du code complet</text><rect x="31" y="123" width="461" height="80" rx="8" fill="#244b36"/><text x="43" y="150" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">CNC / RS-485</text><text x="43" y="181" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Code 0-12-n en sortie</text><circle cx="72" cy="263" r="18" fill="#244b36" stroke="#d3eb56" stroke-width="2"/><text x="109" y="271" fill="#d3eb56" font-size="23" text-anchor="start" font-weight="400">1 : trop bas</text><circle cx="72" cy="349" r="18" fill="#244b36" stroke="#f5a798" stroke-width="2"/><text x="109" y="357" fill="#f5a798" font-size="23" text-anchor="start" font-weight="400">2 : trop haut</text><circle cx="72" cy="435" r="18" fill="#244b36" stroke="#9ebdad" stroke-width="2"/><text x="109" y="443" fill="#9ebdad" font-size="23" text-anchor="start" font-weight="400">3 : instable</text><text x="28" y="514" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Contrôler ensuite l’entrée en débit.</text></svg>
</div>
*Diagnostic documenté du Powermax45 SYNC ; les pressions sont relevées pendant l’écoulement.*

## Vérifier l’entrée pendant que le gaz circule

Pour ce diagnostic, le fabricant demande de maintenir **7,6 à 8,3 bar à l’entrée pendant l’écoulement** et de ne jamais dépasser **9,3 bar**. La lecture pertinente est donc celle obtenue en débit dans le cadre du test prévu, plutôt qu’une pression du réseau relevée à l’arrêt. [Conditions de pression de la procédure](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html).

Nous proposons de noter la pression d’entrée, la pression de sortie demandée, la sortie mesurée par le système et l’état des autres consommateurs pendant le test. Conserver les unités et le procédé permet au réparateur de distinguer une chute de réseau d’une difficulté de régulation propre au plasma.

Si un filtre ou un flexible a été remplacé, joindre sa référence et son emplacement au relevé. Le guide [Powermax45 SYNC et compresseur](/guides/compresseur-decoupeur-plasma-powermax45-sync/) traite le besoin d’alimentation ; ce diagnostic concerne un défaut identifié sur une machine déjà installée.

## Suivre les contrôles externes documentés

La procédure 0-12-n demande de vérifier l’absence de pincement, d’obstruction ou de dommage des lignes et d’effectuer le test de gaz. Le diagnostic de basse pression décrit aussi le contrôle des raccords, du filtre arrière et d’un flexible d’alimentation d’au moins **9,5 mm de diamètre intérieur**. Ce sont des critères de ce système, pas une règle pour tous les découpeurs. [Contrôles des lignes et gas test](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html) ; [Gas supply checks](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/pqe1746821861700.html).

Le second document précise un test de **3 à 5 minutes** et demande de poursuivre le diagnostic si la pression réelle diffère de la consigne de plus de **0,2 bar**. Ces conditions doivent rester liées à la procédure de basse pression, sans devenir un seuil universel de qualité de coupe. [Gas supply checks et more external checks](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/pqe1746821861700.html).

## Transmettre un incident qui reste ouvert

Si le défaut persiste, Hypertherm demande l’examen de l’électrovanne par un technicien qualifié et oriente vers le distributeur ou un centre agréé. La page ne justifie pas un démontage interne par l’utilisateur. [Fin de la procédure](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html).

Un dossier de maintenance exploitable comprend le code exact, les conditions du test, les pressions en débit, l’état des lignes et les références des accessoires. Il permet de choisir l’étape suivante. Une pression de cuve élevée, prise seule, ne répond pas à un défaut de pression de sortie du Powermax45 SYNC.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Hypertherm, diagnostic des codes 0-12-n](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/fgq1748989058887.html)
- [Hypertherm, diagnostic de basse pression de gaz](https://xnet.hypertherm.com/docs/en/Powermax45_SYNC_OM/pqe1746821861700.html)
