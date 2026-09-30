---
title: "ALMiG LENTO 31 : air ou eau, la pression change aussi"
description: "Les tableaux LENTO 31 distinguent refroidissement par air et par eau : plage de pression, débit à 7 bar et dimensions diffèrent. Vérifiez la configuration."
pubDate: 2026-09-30
category: Choisir
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
featured: false
reviewStatus: internal
relatedGuides: ["comparatif-compresseurs-debit-restitue", "classe-0-compresseur-certificat-huile-portee", "almig-g-drive-t-48-refroidissement-air-eau-debit", "almig-simplexx-132-air-eau-encombrement-debit"]
sources:
  - https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf
---

Une option de refroidissement peut changer davantage que le raccordement de la machine. Dans les tableaux LENTO 31 consultés, **la version refroidie par air et la version refroidie par eau n’ont pas la même plage de pression publiée**. La désignation « LENTO 31 » demande donc une précision supplémentaire.

## Deux lignes distinctes du catalogue

Les [tableaux LENTO refroidis par eau, page PDF 24](https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=24) et [refroidis par air, page PDF 25](https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=25) donnent ces caractéristiques à 50 Hz :

| Configuration LENTO 31 | Plage de pression | Plage de débit publiée à 7 bar | Dimensions L × l × h |
| --- | --- | --- | --- |
| Refroidissement par eau | 5 à 12 bar | 2 040 à 5 080 L/min | 2 300 × 1 400 × 1 560 mm |
| Refroidissement par air | 5 à 10 bar | 1 980 à 5 000 L/min | 2 300 × 1 400 × 2 265 mm |

Les débits originaux sont en m³/min, avec une référence de 7 bar dans la note du tableau. La plage de pression ne transforme pas les 5 080 L/min en débit garanti à 12 bar.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 226" role="img" aria-labelledby="almig-lento-31-air-eau-pression-10-12-bar-title almig-lento-31-air-eau-pression-10-12-bar-desc" style="font-family:system-ui,sans-serif"><title id="almig-lento-31-air-eau-pression-10-12-bar-title">Maxima publiés à 7 bar</title><desc id="almig-lento-31-air-eau-pression-10-12-bar-desc">Mesure de capacité publiée à 7 bar, 50 Hz. Plages de pression distinctes : eau 5–12 bar ; air 5–10 bar.</desc><rect width="440" height="226" rx="16" fill="#10281e"/><text x="24" y="32" fill="#d3eb56" font-size="15" font-weight="700">Maxima publiés à 7 bar</text><text x="24" y="66" fill="#eef2e9" font-size="14">LENTO 31, refroidi par eau</text><text x="416" y="66" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">5080</text><rect x="24" y="78" width="392" height="12" rx="6" fill="#315341"/><rect x="24" y="78" width="362.96" height="12" rx="6" fill="#d3eb56"/><text x="24" y="131" fill="#eef2e9" font-size="14">LENTO 31, refroidi par air</text><text x="416" y="131" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">5000</text><rect x="24" y="143" width="392" height="12" rx="6" fill="#315341"/><rect x="24" y="143" width="357.25" height="12" rx="6" fill="#d3eb56"/><text x="24" y="206" fill="#eef2e9" font-size="14">Unité : L/min</text></svg>
<figcaption>Mesure de capacité publiée à 7 bar, 50 Hz. Plages de pression distinctes : eau 5–12 bar ; air 5–10 bar.</figcaption>
</figure>

## Identifier la configuration avant le besoin maximal

Si le procédé demande une pression supérieure à 10 bar, la ligne refroidie par air ne documente pas cette plage. Le tableau refroidi par eau l’inclut, mais son débit à cette pression supérieure reste à demander : le point publié à 7 bar ne permet pas de l’extrapoler.

Cette distinction évite une comparaison où l’on prendrait la pression maximale d’une variante et le débit ou la hauteur de l’autre. Elle reste nécessaire pour une machine d’occasion dont l’annonce indique uniquement la puissance nominale de 30 kW.

## Le refroidissement fait partie du projet d’installation

La documentation de cette famille présente une compression sans huile avec injection d’eau. Elle ne dimensionne pas, pour votre local, le circuit de refroidissement ou la ventilation. Demandez les conditions correspondantes à la configuration choisie et au site réel.

Les dimensions ci-dessus sont celles des unités publiées. Les espaces d’accès, les raccordements et les dégagements de maintenance sont à relever dans la notice d’installation. Il serait incorrect d’annoncer que la seule hauteur du tableau représente la hauteur libre nécessaire.

Pour préparer la comparaison, le [guide de lecture des débits restitués](/guides/comparatif-compresseurs-debit-restitue/) aide à aligner les conditions. Le [guide de portée d’un certificat relatif à l’huile](/guides/classe-0-compresseur-certificat-huile-portee/) rappelle que l’exigence de qualité d’air du procédé doit être documentée séparément.

Un devis précis doit donc nommer le refroidissement, la plage de pression, le point de débit demandé et les conditions d’installation. La proximité des deux maxima à 7 bar ne rend pas les configurations interchangeables.
