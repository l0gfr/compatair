---
title: "DRM 50 : 365 m³/h et 102 L/s sont-ils cohérents ?"
seoTitle: "DRM 50 : 365 m³/h et 102 L/s sont-ils cohérents ?"
description: "Les deux colonnes du DRM 50 donnent un écart après conversion. Contrôlez la précision affichée, la pression de référence et la version avant de conclure."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: "internal"
featured: false
relatedGuides: ["ceccato-csm30-arrondi-l-s-m3-h", "contradiction-debit-cfm-m3-min-catalogues", "ceccato-drm40-csm40-comparer-pressions"]
sources: ["https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drm/drm-40-60-hp/CECCATO-DRM-40-60-FR.pdf"]
---

La ligne du Ceccato DRM 50 à 8 bar de référence affiche **365 m³/h et 102 L/s**. Converties en L/min, ces valeurs donnent environ 6 083,33 et 6 120. L'écart est visible, mais compatible avec un arrondi à l'entier dans chaque colonne. Le traiter comme une contradiction certaine irait au-delà du document.

## Relever d'abord la version et la pression

Le [tableau des DRM à vitesse fixe](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drm/drm-40-60-hp/CECCATO-DRM-40-60-FR.pdf#page=5) rattache cette ligne à la version de pression maximale **8,5 bar**. La puissance moteur est 37 kW. Les colonnes 365 m³/h et 102 L/s se rapportent au même point, dont la pression de service de référence est 8 bar.

La fiche [Ceccato DRM 50](/compresseurs/ceccato-drm-50-fm-sans-secheur-8-5-bar/) utilise la colonne m³/h et sa conversion arrondie à trois décimales : 6 083,333 L/min. Elle garde 8 bar pour le FAD et 8,5 bar comme maximum, deux informations qui ne sont pas interchangeables.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 216" role="img" aria-labelledby="ceccato-drm50-365-m3-h-102-l-s-t ceccato-drm50-365-m3-h-102-l-s-d"><title id="ceccato-drm50-365-m3-h-102-l-s-t">DRM 50 : deux affichages arrondis</title><desc id="ceccato-drm50-365-m3-h-102-l-s-d">Écart calculé : environ 36,67 L/min, soit 0,60 % de la conversion depuis les m³/h.</desc><rect width="480" height="216" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">DRM 50 : deux affichages arrondis</text><text x="24" y="68" fill="#eef2e9" font-size="14">365 m³/h convertis</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">6083.33</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="429.41" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">102 L/s convertis</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">6120</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="197" fill="#eef2e9" font-size="13">L/min, conversions des colonnes imprimées</text></svg><figcaption>Écart calculé : environ 36,67 L/min, soit 0,60 % de la conversion depuis les m³/h.</figcaption></figure>

## Vérifier si les intervalles d'arrondi se recoupent

Sous l'hypothèse d'un arrondi au plus proche, 365 m³/h représente de 364,5 à 365,5 m³/h, soit environ 6 075 à 6 091,67 L/min. Une valeur affichée de 102 L/s représente de 101,5 à 102,5 L/s, soit de 6 090 à 6 150 L/min.

Les deux plages se recoupent de **6 090 à environ 6 091,67 L/min**. Un même nombre d'origine pourrait donc produire les deux affichages. Cette démonstration établit une possibilité numérique, sans prouver la méthode d'arrondi utilisée par Ceccato ni reconstituer une mesure brute absente.

La largeur de ces intervalles vient de la précision d'impression. Elle ne constitue pas une tolérance contractuelle de la machine. Si un projet exige une marge de quelques dizaines de L/min seulement, demandez un rapport ou une valeur garantie dans l'unité utile, avec ses conditions de référence.

## Ne pas déplacer ce débit vers une autre ligne

La version 10 bar maximum du DRM 50 est documentée à 9,5 bar de référence avec 342 m³/h. La version 7,5 bar maximum est mesurée à 7 bar avec 396 m³/h. Prendre 396 m³/h pour annoncer le débit à 10 bar serait une erreur de condition, beaucoup plus importante que l'arrondi examiné ici.

Un distributeur peut choisir une colonne différente de celle reprise par CompatAir. Avant de signaler une fiche, comparez le modèle, la version fixe ou IVR, la pression et l'unité. Le tableau contient aussi des plages de modulation pour les IVR : elles ne doivent pas être recopiées sur un DRM fixe.

Pour ce point du DRM 50, les colonnes sont compatibles avec la précision publiée. Gardez la valeur et l'unité originales dans les pièces du devis. Le [cas CSM 30](/guides/ceccato-csm30-arrondi-l-s-m3-h/) montre une autre ampleur d'arrondi ; le [guide des contradictions d'unités](/guides/contradiction-debit-cfm-m3-min-catalogues/) explique quand demander une clarification formelle.
