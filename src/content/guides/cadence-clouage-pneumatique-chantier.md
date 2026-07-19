---
title: "Cadence de clouage pneumatique sur chantier : calculer sans confondre moyenne et pointe"
seoTitle: "Cadence de clouage pneumatique : calcul"
description: "Calcul sourcé du débit moyen d’une cloueuse par tir, avec scénarios de cadence, contrôle de la pointe et protocole de chantier reproductible."
pubDate: 2026-07-19
category: "Utiliser"
audiences: [professionnel]
metiers: [btp-chantier, menuiserie-agencement]
readingTime: 14
featured: true
relatedCalculatorTool: einhell-tc-pn-50
sources:
  - https://www.einhell.fr/p/4137790-tc-pn-50/
  - https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf
  - https://shop.scheppach.com/Zubehoer-Set-Druckluftnagler-scheppach/7906100715
  - https://www.inrs.fr/publications/bdd/techniques-reduction-bruit/FicheBruitAG.html?refINRS=BRUIT_FicheBruit_61
---

Une cloueuse consomme de l’air à chaque tir. Pour transformer une valeur en litres par tir en besoin moyen, il faut donc déclarer une cadence. Ce calcul est exact sur le plan arithmétique, mais il ne décrit pas à lui seul la pointe instantanée, la récupération de la cuve ou la qualité d’enfoncement.

## Réponse directe

La notice de la [TC-PN 50 Einhell](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf) publie environ **0,66 L par tir**. La fiche du [kit Scheppach 7906100715](https://shop.scheppach.com/Zubehoer-Set-Druckluftnagler-scheppach/7906100715) publie **1,5 L par tir**.

Le débit moyen se calcule ainsi :

`volume par tir × nombre de tirs par minute = litres par minute en moyenne`

| Cadence déclarée | TC-PN 50, 0,66 L/tir | Scheppach, 1,5 L/tir |
| ---: | ---: | ---: |
| 20 tirs/min | 13,2 L/min | 30 L/min |
| 30 tirs/min | 19,8 L/min | 45 L/min |
| 60 tirs/min | 39,6 L/min | 90 L/min |

Ces résultats ne sont pas des cadences garanties. Ils expriment la moyenne arithmétique construite à partir des valeurs publiées et de cadences hypothétiques clairement nommées.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 365" role="img" aria-labelledby="nailing-rate-title nailing-rate-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="nailing-rate-title">Débit moyen de deux cloueuses selon la cadence</title><desc id="nailing-rate-desc">À vingt, trente et soixante tirs par minute, les valeurs par tir des deux références produisent des demandes moyennes différentes. La pointe instantanée reste à mesurer.</desc>
  <rect width="760" height="365" rx="22" fill="#eef2e9"/><text x="38" y="45" fill="#143426" font-size="22" font-weight="700">Un volume par tir exige une cadence déclarée</text>
  <text x="38" y="91" fill="#56685e" font-size="13">Tirs/min</text><text x="190" y="91" fill="#19704f" font-size="13" font-weight="700">TC-PN 50</text><text x="470" y="91" fill="#b45f2f" font-size="13" font-weight="700">SCHEPPACH</text>
  <text x="55" y="137" fill="#143426" font-size="15" font-weight="700">20</text><rect x="190" y="117" width="66" height="28" rx="7" fill="#19704f"/><text x="267" y="137" fill="#143426" font-size="14">13,2 L/min</text><rect x="470" y="117" width="150" height="28" rx="7" fill="#d4834b"/><text x="630" y="137" fill="#143426" font-size="14">30</text>
  <text x="55" y="203" fill="#143426" font-size="15" font-weight="700">30</text><rect x="190" y="183" width="99" height="28" rx="7" fill="#19704f"/><text x="300" y="203" fill="#143426" font-size="14">19,8</text><rect x="470" y="183" width="225" height="28" rx="7" fill="#d4834b"/><text x="704" y="203" fill="#143426" font-size="14">45</text>
  <text x="55" y="269" fill="#143426" font-size="15" font-weight="700">60</text><rect x="190" y="249" width="198" height="28" rx="7" fill="#19704f"/><text x="398" y="269" fill="#143426" font-size="14">39,6</text><rect x="470" y="249" width="250" height="28" rx="7" fill="#d4834b"/><text x="685" y="269" fill="white" font-size="14" font-weight="700">90</text>
  <text x="38" y="329" fill="#56685e" font-size="13">Échelle propre à chaque série. Résultats moyens calculés, pointe instantanée non publiée ici.</text>
</svg>
</div>

## Pourquoi la moyenne ne suffit pas

Un tir prélève un volume en une fraction de seconde. Le compresseur et la cuve restituent ensuite cette énergie au fil de la séquence. Deux opérateurs peuvent produire la même moyenne sur une minute avec des profils différents : tirs régulièrement espacés ou rafale courte suivie d’une pause.

La première configuration sollicite le débit de manière plus régulière. La seconde dépend davantage du stockage et du passage instantané des raccords. Le nombre moyen de tirs ne permet donc pas de déduire la chute maximale de pression.

CompatAir conserve cette frontière. Le calculateur produit un besoin moyen pour les outils documentés par action et demande une cadence à l’utilisateur. Il ne présente pas cette moyenne comme une pointe mesurée.

## Construire trois scénarios de chantier

Un seul essai risque de masquer les limites. Préparez trois scénarios :

1. **pose courante**, avec une cadence relevée sur une minute représentative ;
2. **rafale courte**, avec la séquence la plus dense réellement pratiquée ;
3. **fin de série**, lorsque la cuve et le compresseur ont déjà travaillé plusieurs minutes.

Pour chaque scénario, consignez le nombre de tirs, la pression au raccord pendant la série, le comportement du compresseur, la qualité d’enfoncement et le temps de récupération. Utilisez le matériau, le consommable et le réglage prévus pour le chantier.

[Ouvrir le scénario de 20 tirs/min](/calculateur/#scenario=btp-clouage-mobile) permet de commencer avec une hypothèse visible de 25 mètres de flexible. Pour une TC-PN 50 en atelier, le [scénario de 30 tirs/min](/calculateur/#scenario=menuiserie-clouage-tc-pn-50) utilise 10 mètres. Modifiez toujours ces valeurs pour refléter l’installation réelle.

## Deux références, deux domaines de décision

La [page produit de la TC-PN 50](https://www.einhell.fr/p/4137790-tc-pn-50/) publie un flexible intérieur minimal de 9 mm et 8,3 bar de pression maximale. Sa notice précise que l’appareil n’a pas été conçu pour une utilisation commerciale, artisanale ou industrielle. Une compatibilité pneumatique calculée ne transforme donc pas cette référence en recommandation professionnelle.

Le kit Scheppach publie 4,7 à 7,5 bar, un maximum de 8,3 bar et un flexible recommandé de 10 mm. Ces éléments permettent de construire un protocole pneumatique pour cette référence. Ils ne remplacent pas l’évaluation de son domaine d’usage, de la garantie ou du service attendu.

La catégorie « cloueuse » ne suffit jamais. Conservez MPN, notice et date de consultation pour chaque outil candidat.

## Intégrer le flexible et les raccords

Le volume moyen reste faible dans certains scénarios, mais la pointe peut être sensible à un raccord réduit, un enrouleur ou un flexible long. Mesurez la pression pendant une rafale, au plus près du raccord de l’outil. Une lecture à vide ne révèle pas ce comportement.

Si le problème apparaît uniquement loin de la production, comparez les mesures par tronçon. La méthode du [flexible de chantier de 25 ou 50 mètres](/guides/flexible-air-comprime-chantier-25-50-metres/) détaille cette réception sans inventer une perte générique.

## Conserver la qualité d’assemblage comme critère séparé

La pression et le débit ne prouvent pas l’enfoncement correct du consommable. Le matériau, l’épaisseur, la longueur du clou ou de l’agrafe et le réglage de l’outil changent le résultat. La notice et les essais sur pièce témoin restent prioritaires.

Un protocole utile comporte donc deux colonnes : résultat pneumatique et résultat d’assemblage. Un poste peut maintenir sa pression tout en donnant un résultat impropre, ou l’inverse si un réglage masque temporairement une alimentation instable.

## Bruit et organisation

La fiche INRS [Réduire le bruit dans un atelier de fabrication de palettes en bois](https://www.inrs.fr/publications/bdd/techniques-reduction-bruit/FicheBruitAG.html?refINRS=BRUIT_FicheBruit_61) documente une action collective sur le bruit de clouage dans un contexte industriel précis. Elle rappelle que la décision ne se limite pas à l’équipement individuel et qu’un aménagement du procédé peut être nécessaire.

N’extrapolez pas la performance acoustique d’une solution à un autre atelier sans étude. Conservez toutefois le bruit, la cadence et la coactivité dans le même dossier de préparation, car une hausse de production peut modifier l’exposition sans changer le débit par tir.

## Fiche de suivi par série

Pour chaque campagne, enregistrez : référence, consommation publiée par tir, cadence moyenne, cadence de rafale, pression avant et pendant la séquence, longueur et diamètre intérieur du flexible, nombre de raccords, matériau, consommable, qualité observée et temps de récupération.

Cette fiche permet de comparer deux configurations sans transformer une valeur par tir en promesse commerciale. Elle rend également le calcul rejouable lorsqu’un outil, un flexible ou une cadence change.
