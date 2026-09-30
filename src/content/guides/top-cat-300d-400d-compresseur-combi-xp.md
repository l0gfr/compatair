---
title: "Perceuses Top Cat 300D et 400D : quel COMBI XP ?"
description: "Comparez les consommations maximales de 708 et 990 L/min avec les points ALMiG à 8 bar. Une borne suffisante peut conclure ; une borne faible laisse le débit ouvert."
pubDate: 2026-09-30
category: Choisir
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
featured: false
reviewStatus: internal
relatedGuides: ["top-cat-520v-54v-consommation-maximale", "top-cat-400eh-meuleuse-extension-7-36-pouces"]
sources:
  - https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf
  - https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf
relatedCalculatorTool: perceuse-top-cat-300d3mk-8250-d3-8
---

Les perceuses Top Cat 300D et 400D ne demandent pas le même débit maximal. Pour préparer leur alimentation avec un COMBI XP, il faut conserver ces consommations et la pression des points publiés par ALMiG. **La comparaison peut fournir une borne suffisante, mais elle ne doit pas inventer le débit du compresseur à une pression absente du tableau.**

## Deux consommations maximales documentées

La [page des perceuses droites Top Cat, page PDF 70](https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf#page=70) publie 11,8 L/s maximaux pour la série 300D et 16,5 L/s maximaux pour la série 400D. Les conversions donnent 708 et 990 L/min. Le catalogue limite la pression d’utilisation à 6,2 bar dans ses consignes de sécurité, page PDF 7.

Les configurations [Top Cat 300D3mK;8250;D3/8](/outils-pneumatiques/perceuse-top-cat-300d3mk-8250-d3-8/) et [Top Cat 400D3mK;5500;D1/2](/outils-pneumatiques/perceuse-top-cat-400d3mk-5500-d1-2/) restent des outils distincts. Leur code conserve notamment la configuration de vitesse et de sortie du tableau.

## Un scénario de dimensionnement déclaré

Avec **un seul outil en fonctionnement continu et une marge choisie de 25 %**, les cibles de calcul sont :

| Famille | Maximum publié | Cible calculée |
| --- | --- | --- |
| 300D | 708 L/min | 885 L/min |
| 400D | 990 L/min | 1 237,5 L/min |

Cette marge est une hypothèse de CompatAir, pas une prescription du catalogue Top Cat.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 226" role="img" aria-labelledby="top-cat-300d-400d-compresseur-combi-xp-title top-cat-300d-400d-compresseur-combi-xp-desc" style="font-family:system-ui,sans-serif"><title id="top-cat-300d-400d-compresseur-combi-xp-title">Demande conservatrice calculée</title><desc id="top-cat-300d-400d-compresseur-combi-xp-desc">Un outil continu, consommation maximale publiée, marge choisie. Les capacités COMBI XP comparées dans le texte sont documentées à 8 bar.</desc><rect width="440" height="226" rx="16" fill="#10281e"/><text x="24" y="32" fill="#d3eb56" font-size="15" font-weight="700">Demande conservatrice calculée</text><text x="24" y="66" fill="#eef2e9" font-size="14">300D • marge choisie 25 %</text><text x="416" y="66" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">885</text><rect x="24" y="78" width="392" height="12" rx="6" fill="#315341"/><rect x="24" y="78" width="259.57" height="12" rx="6" fill="#d3eb56"/><text x="24" y="131" fill="#eef2e9" font-size="14">400D • marge choisie 25 %</text><text x="416" y="131" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">1237,5</text><rect x="24" y="143" width="392" height="12" rx="6" fill="#315341"/><rect x="24" y="143" width="362.96" height="12" rx="6" fill="#d3eb56"/><text x="24" y="206" fill="#eef2e9" font-size="14">Unité : L/min</text></svg>
<figcaption>Un outil continu, consommation maximale publiée, marge choisie. Les capacités COMBI XP comparées dans le texte sont documentées à 8 bar.</figcaption>
</figure>

## Lire les points ALMiG sans extrapoler

Le [tableau COMBI XP, page PDF 8](https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=8) donne, à 8 bar, 1 160 L/min maximaux pour le COMBI XP 8 et 1 670 L/min pour le COMBI XP 11. Ces points sont à une pression supérieure au besoin de l’outil. Ils peuvent servir de bornes conservatrices dans la sélection.

Le point du modèle 8 dépasse la cible calculée de la 300D. Celui du modèle 11 dépasse la cible de la 400D. Ces comparaisons étayent une alimentation dans le scénario déclaré, avec un service et des conditions d’installation compatibles, après vérification de la pression effectivement disponible au poste.

Le point de 1 160 L/min du modèle 8 reste sous la cible de 1 237,5 L/min de la 400D. Cela **ne démontre pas un échec à 6,2 bar** : il manque le débit à cette pression pour un verdict négatif. La borne conservatrice ne doit pas être transformée en plafond de capacité.

Retrouvez [ALMiG COMBI XP 8 270D](/compresseurs/almig-combi-xp-8-270d/) et [ALMiG COMBI XP 11 270D](/compresseurs/almig-combi-xp-11-270d/). Décrivez ensuite les raccordements, les pertes et la simultanéité. Deux outils, une consommation auxiliaire ou un autre point de pression demandent un nouveau calcul ; ils ne sont pas couverts par cet exemple à un outil.
