---
title: "Burineur pneumatique sur chantier : débit, flexible et durée de travail"
seoTitle: "Burineur pneumatique de chantier : méthode"
description: "Méthode sourcée pour alimenter un burineur pneumatique sur chantier, vérifier le débit en charge, le flexible, la durée et les limites d’usage."
pubDate: 2026-07-19
category: "Choisir"
audiences: [professionnel]
metiers: [btp-chantier]
readingTime: 15
featured: true
relatedCalculatorTool: chicago-pneumatic-cp7110
sources:
  - https://tools.cp.com/en/products/percussivetools/cp7110-sku8941071101
  - https://www.einhell.fr/p/4139040-tc-pc-45
  - https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ajnagqqlfl4l5dvdmthveb042c/4139040_21022_001_SPK2.pdf
  - https://www.inrs.fr/media.html?refINRS=ED+6342
---

Un burineur pneumatique ne se choisit pas sur la seule pression maximale du compresseur. La réponse utile réunit quatre preuves : la consommation en charge de la référence, le débit restitué disponible à cette pression, le passage du flexible réellement déployé et la durée de travail prévue. Le bruit, les vibrations et le domaine d’usage de la notice restent des décisions séparées.

## Réponse directe

Pour le [Chicago Pneumatic CP7110](https://tools.cp.com/en/products/percussivetools/cp7110-sku8941071101), la fiche fabricant publie **6,9 L/s en charge**, **6,3 bar de pression dynamique maximale** et un flexible d’au moins **10 mm de diamètre intérieur sur 5 m**. La conversion exacte donne `6,9 × 60 = 414 L/min`.

Le compresseur doit donc publier un débit restitué exploitable près de 6,3 bar. Un débit aspiré supérieur à 414 L/min ne démontre pas cette capacité. Une cuve importante peut retarder une chute de pression, mais elle ne produit pas le débit continu manquant.

| Décision | Preuve minimale |
| --- | --- |
| L’outil est documenté | MPN, débit en charge, pression et flexible |
| La production est comparable | FAD à une pression proche de 6,3 bar |
| La séquence est tenable | durée de frappe et récupération observées |
| Le poste est alimenté | pression mesurée au raccord pendant l’effort |
| Le service est adapté | domaine d’usage et limites de la notice |

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 360" role="img" aria-labelledby="chisel-flow-title chisel-flow-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="chisel-flow-title">Deux burineurs, deux demandes publiées</title><desc id="chisel-flow-desc">Le TC-PC 45 est publié à 113 litres par minute et le CP7110 à 414 litres par minute, tous deux à 6,3 bar. La comparaison illustre la nécessité de conserver la référence exacte.</desc>
  <rect width="760" height="360" rx="22" fill="#10281e"/>
  <text x="40" y="47" fill="#d3eb56" font-size="15" font-weight="700">LA CATÉGORIE NE FOURNIT PAS LE DÉBIT</text>
  <text x="40" y="88" fill="white" font-size="25" font-weight="700">Même pression publiée, demandes différentes</text>
  <text x="40" y="143" fill="#bed0c6" font-size="15">Einhell TC-PC 45</text><rect x="220" y="119" width="155" height="37" rx="8" fill="#6f8f7e"/><text x="391" y="145" fill="white" font-size="18" font-weight="700">113 L/min</text>
  <text x="40" y="213" fill="#bed0c6" font-size="15">Chicago Pneumatic CP7110</text><rect x="220" y="189" width="455" height="37" rx="8" fill="#d3eb56"/><text x="526" y="215" fill="#10281e" font-size="18" font-weight="700">414 L/min</text>
  <line x1="220" y1="266" x2="675" y2="266" stroke="#789586" stroke-width="2"/><text x="220" y="291" fill="#bed0c6" font-size="13">0</text><text x="659" y="291" fill="#bed0c6" font-size="13">414</text>
  <text x="40" y="330" fill="#bed0c6" font-size="13">Valeurs fabricant à 6,3 bar. Elles ne prouvent ni la même intensité de service, ni la même exposition.</text>
</svg>
</div>

## La référence vient avant la catégorie

Le mot « burineur » décrit une fonction, pas une consommation. Le [TC-PC 45 d’Einhell](https://www.einhell.fr/p/4139040-tc-pc-45) est publié à **113 L/min sous 6,3 bar**, avec un flexible intérieur minimal de **9 mm**. Le CP7110 demande 414 L/min à la même pression, avec 10 mm sur 5 m.

Le rapport entre ces deux débits vaut environ `414 ÷ 113 = 3,66`. Ce calcul ne classe pas les outils et ne compare pas leur productivité. Il démontre seulement qu’une moyenne de catégorie détruirait l’information nécessaire au dimensionnement.

La [notice du TC-PC 45](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ajnagqqlfl4l5dvdmthveb042c/4139040_21022_001_SPK2.pdf) ajoute une limite décisive : le fabricant n’a pas conçu cet appareil pour une exploitation professionnelle, artisanale ou industrielle. Même si un compresseur pouvait fournir 113 L/min à 6,3 bar, cette compatibilité pneumatique ne constituerait donc pas une recommandation pour un chantier professionnel.

## Comparer le débit disponible au bon endroit

La consommation du CP7110 est publiée en charge. Côté compresseur, il faut rechercher un [débit restitué ou FAD](/guides/debit-restitue-fad-vs-debit-aspire/) à une pression proche de 6,3 bar. Trois cas se présentent :

1. le fabricant publie directement un point FAD à 6 ou 7 bar, la comparaison est possible avec le contexte exact ;
2. deux points encadrent 6,3 bar, CompatAir peut appliquer une interpolation explicitement signalée ;
3. seul le débit aspiré ou un débit sans pression est disponible, le verdict reste `insufficient_data`.

La [marge CompatAir](/glossaire/#marge-compatair) ne répare pas une donnée manquante. Elle s’applique après la construction d’un besoin nominal documenté. Le [calculateur](/calculateur/#outil=chicago-pneumatic-cp7110) permet de tester la référence, mais la durée réelle et l’état du réseau doivent ensuite être contrôlés sur site.

## Décrire la séquence au lieu d’inventer un facteur d’usage

Une valeur en charge décrit la phase où l’outil consomme. Elle ne dit pas combien de minutes l’opérateur maintient la gâchette, ni combien de temps la production récupère entre deux phases.

Pour une tâche représentative, consignez :

- le matériau et l’accessoire utilisés ;
- la durée cumulée de frappe sur une séquence ;
- la durée des pauses entre deux phases ;
- les autres consommateurs actifs au même moment ;
- la pression avant et pendant l’effort ;
- le moment où le compresseur redémarre et celui où il récupère.

Un cycle bref peut utiliser le stockage disponible. Une séquence soutenue dépend rapidement du débit restitué et du cycle de service du compresseur. Il faut conserver ces deux scénarios au lieu de réduire arbitrairement les 414 L/min par un taux générique.

## Le flexible fait partie du poste

La recommandation de 10 mm sur 5 m du CP7110 décrit une configuration précise. Elle ne valide pas automatiquement 20 m de flexible, un enrouleur, plusieurs coupleurs ou une réduction juste avant l’outil.

Avant l’essai, dessinez le passage complet : sortie de production, traitement, raccords, rallonges, diamètre intérieur de chaque tronçon et outil. La [méthode de dimensionnement des flexibles](/guides/diametre-longueur-flexible-air-comprime/) explique pourquoi la longueur et les restrictions doivent rester visibles.

Mesurez ensuite la pression pendant que le burineur travaille. Une lecture stable à vide ne localise aucune perte. Deux mesures comparables, l’une en amont du flexible et l’autre au raccord, permettent de distinguer une production insuffisante d’une chute créée par la distribution.

## Bruit et vibrations ne se déduisent pas du débit

La fiche CP7110 publie une vibration de **6 m/s²** et une puissance acoustique de **109 dB(A)**. La notice TC-PC 45 publie une vibration de **18,2 m/s² avec une incertitude de 1,5 m/s²**, un niveau de pression acoustique de **99 dB(A)** et une puissance acoustique de **110 dB(A)**.

Ces valeurs sont propres aux références et aux méthodes déclarées. Elles ne deviennent pas automatiquement l’exposition quotidienne d’un opérateur. La durée, le matériau, l’accessoire, l’entretien et le mode de travail comptent aussi.

Le guide [INRS ED 6342 sur les vibrations mains-bras](https://www.inrs.fr/media.html?refINRS=ED+6342) demande de partir d’une analyse du risque, de faciliter le choix et l’utilisation de machines moins vibrantes, puis d’optimiser les mesures techniques ou organisationnelles. Le calcul de compatibilité pneumatique et l’évaluation de l’exposition restent donc deux dossiers reliés, mais distincts.

## Plan de contrôle avant chantier

### 1. Identifier

Photographiez la plaque et conservez MPN, notice, date de consultation et accessoire monté. Une référence voisine ne remplace pas la source du modèle utilisé.

### 2. Calculer

Comparez la consommation en charge au FAD disponible à la pression utile. Ajoutez uniquement les consommateurs réellement simultanés et gardez les hypothèses visibles.

### 3. Déployer

Mesurez la longueur réellement nécessaire. Vérifiez le diamètre intérieur, les coupleurs, l’état du flexible, son cheminement et les prescriptions de lubrification.

### 4. Essayer

Reproduisez une séquence courte mais représentative. Relevez pression dynamique, temps de fonctionnement, récupération et tout écart entre le résultat attendu et le résultat observé.

### 5. Séparer les verdicts

Publiez au moins quatre conclusions : capacité pneumatique, adéquation du domaine d’usage, tenue de la séquence et prévention. Un résultat positif sur la première ne doit jamais masquer une réserve sur les trois autres.

## Ce que le dossier d’achat doit conserver

| Champ | Exemple de preuve |
| --- | --- |
| Outil | CP7110, MPN 8941071101 |
| Besoin | 6,9 L/s en charge, soit 414 L/min, à 6,3 bar |
| Passage publié | flexible intérieur 10 mm sur 5 m |
| Compresseur | FAD sourcé à une pression comparable |
| Scénario | matériau, accessoire, durée et coactivité |
| Contrôle | pression au raccord pendant la frappe |
| Prévention | notice, évaluation du risque et mesures retenues |

Ce dossier permet de recalculer la décision si l’outil, le flexible, la production ou le mode opératoire change. Il évite surtout qu’un chiffre correct soit utilisé hors de son contexte.
