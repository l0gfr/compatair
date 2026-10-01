---
title: "GTG25 F120-13 : 1 920 L/min en charge, 540 à vide"
description: "La meuleuse Atlas GTG25 F120-13 sépare deux régimes de consommation. Dimensionner sur le débit à puissance maximale et conserver la référence exacte."
pubDate: "2026-10-01"
category: "Choisir"
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: "internal"
featured: false
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources: ["https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf", "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf"]
seoTitle: "GTG25 F120-13 : 1 920 L/min en charge, 540 à vide"
---

Pour la **GTG25 F120-13, article 8423 2525 01**, les 540 L/min à vide ne représentent pas le besoin publié à puissance maximale. Atlas Copco donne **1 920 L/min** à ce régime. Utiliser le premier chiffre pour dimensionner sous-estimerait ce point de consommation d’un facteur supérieur à trois.

## Deux colonnes que le catalogue sépare explicitement

Le [tableau de la turbine GTG25](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=219) publie 32 L/s à puissance maximale et 9 L/s à vide. Les conversions donnent respectivement 1 920 et 540 L/min. La [convention générale de mesure du catalogue Atlas](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=3) place les données, sauf indication contraire, à 6,3 bar. Les deux valeurs ont donc des régimes différents, pas des unités différentes.

Le modèle F120-13 est donné pour un disque de 125 mm et 12 000 tr/min maximum à vide. Les variantes F120-M14 et F120-5/8 ont d’autres numéros de commande et d’autres indications de broche. Le suffixe -13 ne doit pas être remplacé par M14 au seul motif que le diamètre de disque coïncide.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 234" role="img" aria-labelledby="atlas-gtg25-f120-13-debit-charge-vide-title atlas-gtg25-f120-13-debit-charge-vide-desc" style="font-family:system-ui,sans-serif"><title id="atlas-gtg25-f120-13-debit-charge-vide-title">GTG25 : conserver le régime</title><desc id="atlas-gtg25-f120-13-debit-charge-vide-desc">Source Atlas, page PDF 219. Calcul de conversion : L/s × 60. Les deux régimes ne sont pas interchangeables.</desc><rect width="440" height="234" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">GTG25 : conserver le régime</text><text x="22" y="75" fill="#eef2e9" font-size="14">À vide : 9 L/s</text><text x="418" y="75" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">540</text><rect x="22" y="87" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="87" width="111.38" height="9" rx="4" fill="#d3eb56"/><text x="22" y="137" fill="#eef2e9" font-size="14">Puissance maximale : 32 L/s</text><text x="418" y="137" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">1920</text><rect x="22" y="149" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="149" width="396.00" height="9" rx="4" fill="#d3eb56"/><text x="22" y="216" fill="#eef2e9" font-size="13">Consommation en L/min à 6,3 bar</text></svg><figcaption>Source Atlas, page PDF 219. Calcul de conversion : L/s × 60. Les deux régimes ne sont pas interchangeables.</figcaption></figure>

## Un cas où un petit volume de cuve n’apporte pas le débit continu

Un projet de 50 L ne se valide pas par le volume seul. Il faut comparer le FAD documenté à la consommation en charge. Avec une réserve choisie de 25 %, le seuil devient **1 920 × 1,25 = 2 400 L/min**. Cette réserve est un choix de dimensionnement CompatAir, pas une prescription d’Atlas Copco.

Le [Ceccato CSA 7.5 version 8 bar](/compresseurs/ceccato-csa-7-5-pack-au-sol-8-bar/) publie 51 m³/h, soit 850 L/min à 7,5 bar, dans le [tableau CSA](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf#page=6). Ce point à pression supérieure est inférieur aux 1 920 L/min requis par la GTG25 à puissance maximale. Il ne justifie donc pas son alimentation continue à ce régime. Aucune autonomie intermittente n’est chiffrée sans les conditions de cuve, de régulation et d’usage.

## Réunir capacité et conditions de liaison

Le tableau GTG25 donne un tuyau recommandé de 16 mm pour cette référence. La notice et le montage livré doivent préciser la liaison et les accessoires autorisés. La capacité du compresseur ne certifie pas à elle seule la sécurité d’un disque ou la pression effectivement disponible en fonctionnement.

La [fiche GTG25 F120-13](/outils-pneumatiques/meuleuse-atlas-copco-gtg25-f120-13-8423252501/) conserve le maximum publié. Le [guide Bosch du cliquet à consommation à vide](/guides/bosch-0607450794-cliquet-debit-a-vide/) montre le cas inverse : lorsque seul le chiffre à vide existe, CompatAir ne crée pas de chiffre en charge.
