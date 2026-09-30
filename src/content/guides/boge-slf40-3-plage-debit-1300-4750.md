---
title: "BOGE SLF 40-3 : lire la plage de 1 300 à 4 750 L/min"
description: "La version SLF 40-3 à maximum 10 bar indique 1,30 à 4,75 m³/min. Ces extrémités ne donnent ni le débit moyen du réseau ni sa consommation électrique."
pubDate: 2026-09-30
category: Comprendre
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
featured: false
reviewStatus: internal
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources:
  - https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf
---

Le BOGE SLF 40-3 possède une plage de livraison effective publiée. Sur la version à pression maximale de 10 bar, la fiche indique **1,30 à 4,75 m³/min**, soit 1 300 à 4 750 L/min. Ces valeurs sont deux extrémités ; elles ne sont pas deux consommations d’atelier.

## Conserver la ligne de pression propre à la version

Le [tableau S-3 et SLF-3 officiel](https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf#page=1) présente également une version à maximum 8 bar avec une plage de 1,30 à 5,31 m³/min et une version à maximum 7,5 bar avec 1,32 à 5,48 m³/min. Prendre le maximum de cette dernière pour décrire la version 10 bar mélangerait des configurations.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 224" role="img" aria-labelledby="boge-slf40-3-plage-debit-1300-4750-title boge-slf40-3-plage-debit-1300-4750-desc" style="font-family:system-ui,sans-serif"><title id="boge-slf40-3-plage-debit-1300-4750-title">Plage de la version max. 10 bar</title><desc id="boge-slf40-3-plage-debit-1300-4750-desc">La pression maximale de la version n’est pas transformée en pression de mesure du FAD.</desc><rect width="440" height="224" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">Plage de la version max. 10 bar</text><text x="22" y="70" fill="#eef2e9" font-size="14">Minimum de livraison indiqué</text><text x="418" y="70" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">1300</text><rect x="22" y="80" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="80" width="108.38" height="10" rx="5" fill="#d3eb56"/><text x="22" y="132" fill="#eef2e9" font-size="14">Maximum de livraison indiqué</text><text x="418" y="132" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">4750</text><rect x="22" y="142" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="142" width="396.00" height="10" rx="5" fill="#d3eb56"/><text x="22" y="206" fill="#eef2e9" font-size="13">L/min, pression de mesure à confirmer</text></svg>
<figcaption>La pression maximale de la version n’est pas transformée en pression de mesure du FAD.</figcaption>
</figure>

La fiche donne au SLF 40-3 une puissance moteur nominale de 30 kW et des dimensions de 1 830 × 990 × 1 450 mm. Ces données ne décrivent pas l’électricité absorbée à chaque point de modulation.

## La moyenne arithmétique n’est pas un fonctionnement

Le calcul (1 300 + 4 750) ÷ 2 donne 3 025 L/min. Il est arithmétiquement correct, mais ce résultat n’est pas une livraison moyenne mesurée, ni le débit que la machine fournirait toute la journée. Il faudrait connaître le profil de charge, la commande et les conditions d’exploitation pour caractériser cette journée.

Le minimum de modulation ne fixe pas non plus la demande minimale du réseau. Un besoin sous ce minimum ouvre une question sur le fonctionnement de la station ; il ne permet pas d’inventer une séquence d’arrêt ou un niveau de pertes.

## Une condition de mesure encore à obtenir

Le tableau cité nomme la pression maximale de la version, sans établir séparément ici la pression de mesure de la livraison effective. CompatAir n’en fait donc pas un point FAD à 10 bar. Demandez au constructeur les conditions et la courbe adaptées à votre consigne avant d’utiliser cette plage pour un verdict de compatibilité.

Comparez les profils [SLF 40-3 version 10 bar](/compresseurs/boge-slf-40-3-10-bar-insonorisation-standard/) et [version 8 bar](/compresseurs/boge-slf-40-3-8-bar-insonorisation-standard/). Le [dossier F-DRIVE 75 et faible demande](/guides/almig-f-drive-75-minimum-modulation-petit-besoin/) explique la question du minimum avec un autre tableau dont la pression de référence est explicite.
