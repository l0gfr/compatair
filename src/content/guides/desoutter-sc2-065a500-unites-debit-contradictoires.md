---
title: "Desoutter SC2-065A500 : vérifier les unités de débit"
description: "La fiche individuelle conserve 7 L/s et 14 cfm, qui ne sont pas équivalents. Pourquoi le débit reste exclu du verdict avant confirmation fabricant."
pubDate: 2026-09-30
category: Comprendre
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 2
featured: false
reviewStatus: internal
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources:
  - https://www.desouttertools.com/en-us/products/2051472654
  - https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf
  - https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8
relatedCalculatorTool: visseuse-desoutter-sc2-065a500-s4q-2051472654
---

La référence Desoutter **2051472654**, SC2-065A500-S4Q, présente une contradiction d’unités dans les données de sa fiche individuelle archivées par CompatAir le 30 septembre 2026. Le champ de consommation à vide indique 7 L/s et son équivalent impérial 14 cfm. Ces nombres ne décrivent pas le même débit après conversion.

## Un écart quantifiable

La [fiche officielle individuelle](https://www.desouttertools.com/en-us/products/2051472654) identifie l’outil ; le [catalogue Desoutter de juillet 2026, page PDF 150](https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=150) confirme la désignation et le numéro de pièce. La récupération conserve les valeurs brutes et l’empreinte du document, même lorsque les champs ne sont pas tous visibles dans le résumé de page.

Le [tableau de conversion NIST](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) donne environ 0,4719474 L/s pour un pied cube par minute. Il conduit aux calculs suivants :

| Valeur déclarée | Conversion calculée |
| --- | --- |
| 7 L/s | 420 L/min |
| 14 cfm | Environ 396,4 L/min |

L’écart calculé est environ 23,6 L/min. Il dépasse une simple différence au dernier chiffre de la conversion affichée. Ce dossier n’attribue pas l’erreur à l’un des deux champs : une confirmation du constructeur est nécessaire.


<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 286" role="img" aria-labelledby="desoutter-sc2-065a500-unites-debit-contradictoires-title desoutter-sc2-065a500-unites-debit-contradictoires-desc" style="font-family:system-ui,sans-serif"><title id="desoutter-sc2-065a500-unites-debit-contradictoires-title">Ne pas arbitrer une unité au hasard</title><desc id="desoutter-sc2-065a500-unites-debit-contradictoires-desc">Repères tirés des documents cités dans ce dossier. Les conditions absentes restent à confirmer.</desc><rect width="440" height="286" rx="16" fill="#10281e"/><text x="22" y="30" fill="#eef2e9" font-size="15" font-weight="700">Ne pas arbitrer une unité au hasard</text><text x="22" y="60" fill="#d3eb56" font-size="12" font-weight="700">DONNÉE EN L/S</text><text x="22" y="84" fill="#eef2e9" font-size="14">7 L/s = 420 L/min</text><text x="22" y="134" fill="#d3eb56" font-size="12" font-weight="700">DONNÉE EN CFM</text><text x="22" y="158" fill="#eef2e9" font-size="14">14 cfm ≈ 396,4 L/min</text><text x="22" y="208" fill="#d3eb56" font-size="12" font-weight="700">DÉCISION</text><text x="22" y="232" fill="#eef2e9" font-size="14">Consommation exclue jusqu’à confirmation</text></svg>
<figcaption>Repères tirés des documents cités dans ce dossier. Les conditions absentes restent à confirmer.</figcaption>
</figure>


## Refuser une correction vraisemblable

Choisir automatiquement le chiffre le plus élevé pourrait paraître conservateur, mais reviendrait à valider une donnée contradictoire. CompatAir garde les deux nombres dans les caractéristiques et **exclut cette consommation du calcul de compatibilité**. La fiche reste exploitable pour identifier l’outil, avec un verdict données insuffisantes.

L’incertitude sur le débit ne remet pas automatiquement en cause les dimensions ou le numéro de pièce. La fiche individuelle annonce notamment 245 mm de longueur et 0,69 kg. Ces champs sont conservés avec leur source, sans que leur présence valide celui de consommation.

## La demande à adresser au support

Transmettez le numéro 2051472654, les deux valeurs, le régime à vide et la copie datée de la fiche. Demandez la valeur confirmée dans une unité unique, sa pression et ses conditions de mesure. Une réponse permettrait de corriger le profil avec une nouvelle preuve versionnée.

Ouvrez [le profil SC2-065A500-S4Q](/outils-pneumatiques/visseuse-desoutter-sc2-065a500-s4q-2051472654/) et le [cas Sumake ST-SD110](/guides/sumake-st-sd110-400-l-min-regime/), où l’obstacle est un régime de mesure absent plutôt qu’une contradiction d’unités.
