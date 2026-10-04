---
title: "JUN-AIR 6-25 : 32 ou 37 L/min selon la fréquence de la version"
seoTitle: "JUN-AIR 6-25 : 32 ou 37 L/min, 50 ou 60 Hz"
description: "La fiche 6-25 distingue 230 V 50 Hz et 230 V 60 Hz : FAD de 32 et 37 L/min à 8 bar. Identifiez la colonne de la version avant de comparer ou d’importer."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-50hz-60hz-versions", "debit-restitue-fad-vs-debit-aspire", "compresseur-service-s1-s3-25-pour-cent"]
sources: ["https://gastmfg.com/wp-content/uploads/2025/07/6-25_1413010_TDS.pdf"]
---

Pour le [JUN-AIR 6-25](/compresseurs/jun-air-6-25/), un débit de 37 L/min vu dans une annonce ne s’applique pas automatiquement à la version française. **La fiche distingue 32 L/min de FAD à 8 bar pour 230 V / 50 Hz et 37 L/min pour 230 V / 60 Hz.** Le nom « 6-25 » et la tension de 230 V ne suffisent pas à choisir la bonne colonne.

La [fiche fabricant actuellement exposée par Gast, PDF page 1](https://gastmfg.com/wp-content/uploads/2025/07/6-25_1413010_TDS.pdf#page=1), présente plusieurs couples de tension et de fréquence. Nous conservons ici les deux colonnes 230 V, sans les appliquer aux versions 100, 120 ou 200 V ni aux autres références JUN-AIR.

## Relire la colonne entière

| Donnée de la fiche | 230 V / 50 Hz | 230 V / 60 Hz |
| --- | --- | --- |
| Débit déplacé à l’aspiration | 50 L/min | 60 L/min |
| FAD à 8 bar | 32 L/min | 37 L/min |
| Cuve | 25 L | 25 L |
| Facteur de marche | 50 % | 50 % |

Les 50 et 60 L/min sont la ligne « Displacement », distincte de « FAD @ 8 bar ». Prendre le plus grand chiffre de chaque colonne supprimerait cette distinction. Le [guide débit aspiré et restitué](/guides/debit-restitue-fad-vs-debit-aspire/) précise pourquoi elle change un verdict de compatibilité.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 303" role="img" aria-labelledby="junair-625-50-60-hz-debit-title junair-625-50-60-hz-debit-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="junair-625-50-60-hz-debit-title">Une même tension, deux fréquences</title><desc id="junair-625-50-60-hz-debit-desc">FAD à 8 bar dans les colonnes 230 V de la fiche JUN-AIR 6-25. Il ne s’agit pas d’un gain obtenu en branchant une version sur une autre fréquence.</desc>
<rect width="520" height="303" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Une même tension, deux fréquences</text><text x="26" y="84" fill="#b4cec0" font-size="19" text-anchor="start">230 V / 50 Hz</text><rect x="26" y="96" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="96" width="294.05" height="27" rx="12" fill="#d3eb56"/><text x="487" y="118" fill="white" font-size="22" font-weight="700" text-anchor="end">32</text><text x="26" y="173" fill="#b4cec0" font-size="19" text-anchor="start">230 V / 60 Hz</text><rect x="26" y="185" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="185" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="207" fill="white" font-size="22" font-weight="700" text-anchor="end">37</text><text x="26" y="261" fill="#d3eb56" font-size="19" text-anchor="start">FAD en L/min à 8 bar</text><text x="26" y="287" fill="#b4cec0" font-size="18" text-anchor="start">Dans les deux colonnes : service 50 %</text>
</svg>
<figcaption>FAD à 8 bar dans les colonnes 230 V de la fiche JUN-AIR 6-25. Il ne s’agit pas d’un gain obtenu en branchant une version sur une autre fréquence.</figcaption>
</figure>

## Importer une version demande plus qu’une prise adaptée

Avant l’achat, demandez la plaque du modèle proposé et le document de sa version. Un vendeur qui écrit seulement « 230 V » laisse la fréquence ouverte. Une adaptation de fiche électrique ne confirme ni les conditions d’utilisation du moteur ni les performances correspondant à une autre fréquence.

Le [guide des compresseurs 50 et 60 Hz](/guides/compresseur-50hz-60hz-versions/) traite cette identification. Pour un modèle importé ou d’occasion, faites confirmer la compatibilité électrique par le fournisseur et les personnes compétentes, sans essai sur une alimentation choisie par rapprochement du seul voltage.

Une fiche publiée sur le site actuel ne prouve pas qu’une machine ancienne possède exactement la même configuration. La plaque et la documentation applicable à son numéro de série restent importantes. CompatAir reprend cette fiche sans avoir contrôlé un appareil physique.

## Les 50 % demeurent une seconde contrainte

Même après identification de la bonne fréquence, la fiche annonce un facteur de marche de 50 %. Le débit de 32 L/min à 8 bar ne devient pas une alimentation continue garantie pour un outil consommant légèrement moins. Il faut encore la durée de cycle applicable et le régime réel du consommateur.

Le [guide des facteurs de marche](/guides/compresseur-service-s1-s3-25-pour-cent/) aide à construire cette demande. Conservez aussi les exigences de qualité d’air du procédé ; le 6-25 est décrit comme lubrifié dans le titre de la fiche, ce qui ne qualifie pas à lui seul l’air pour chaque application.

Le choix conclusif porte sur la version exacte, un FAD à la pression utile et un service admis pour le cycle. Si l’un de ces champs manque, l’annonce peut rester intéressante à examiner, mais le verdict technique doit conserver la donnée insuffisante.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
