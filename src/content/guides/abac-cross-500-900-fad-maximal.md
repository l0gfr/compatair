---
title: "ABAC CROSS 500 et 900 : que signifie le FAD maximal ?"
seoTitle: "ABAC CROSS 500 et 900 : que signifie le FAD maximal ?"
description: "Les fiches ABAC CROSS publient un FAD maximal sans point de pression associé dans le tableau consulté. Ce qui manque pour valider un outil."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "lire-fiche-cagi-compresseur-iso-1217"]
sources: ["https://shop.abacaircompressors.com/en-FR/products/1839025634/cross-500-10-40050-mebb", "https://shop.abacaircompressors.com/en-FR/products/1839025641/cross-900-10-40050-200-mebb"]
---

ABAC affiche « FAD Capacity Max » à 516 L/min pour le CROSS 500 et à 848 L/min pour le CROSS 900 dans les tableaux consultés. Une pression maximale de machine figure aussi dans la fiche. Ces deux informations ne constituent pas automatiquement un point de débit à cette pression.

| Référence exacte | Données pneumatiques publiées | Autres repères |
| --- | --- | --- |
| [CROSS 500 10 400/50 MEBB](/compresseurs/abac-cross-500-10-400-50-mebb/) (1839025634) | Pression de mesure du débit non documentée | Cuve 0 L ; pression max. 10 bar |
| [CROSS 900 10 400/50 MEBB](/compresseurs/abac-cross-900-10-400-50-mebb/) (1839025640) | Pression de mesure du débit non documentée | Cuve 0 L ; pression max. 10 bar |

Sources fabricant consultées le 26 septembre 2026 : [ABAC CROSS 500 10 400/50 MEBB](https://shop.abacaircompressors.com/en-FR/products/1839025634/cross-500-10-40050-mebb), [ABAC CROSS 900 10 400/50 MEBB](https://shop.abacaircompressors.com/en-FR/products/1839025641/cross-900-10-40050-200-mebb).

## La question que le tableau ne résout pas

Pour alimenter un outil, il faut connaître le débit disponible à sa pression de travail. La mention « maximal » décrit une valeur de débit, mais le tableau retenu ne lui associe pas explicitement une pression de mesure. Utiliser la pression maximale de la machine comme si elle était celle du test ajouterait une hypothèse non documentée.

Dans CompatAir, ces valeurs restent visibles parmi les caractéristiques publiées, mais ne deviennent pas une courbe de FAD exploitable par le moteur. Le résultat indéterminé signale une preuve manquante ; il ne signifie pas que le compresseur est mauvais ou nécessairement incapable d’alimenter l’outil.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Une donnée à compléter">
<svg viewBox="0 0 380 329" role="img" aria-labelledby="abac-cross-500-900-fad-maximal-title abac-cross-500-900-fad-maximal-desc" xmlns="http://www.w3.org/2000/svg"><title id="abac-cross-500-900-fad-maximal-title">Une donnée à compléter</title><desc id="abac-cross-500-900-fad-maximal-desc">CROSS 500: FAD maximal publié : 516 L/min ; CROSS 900: FAD maximal publié : 848 L/min ; Information nécessaire: Pression et conditions associées à chaque débit</desc><rect width="380" height="329" rx="18" fill="#eef2e9"/><text x="20" y="32" font-size="19" font-weight="700" fill="#143426">Une donnée à compléter</text><text x="20" y="74" font-size="16" font-weight="700" fill="#143426">CROSS 500</text><text x="20" y="97" font-size="15" font-weight="400" fill="#143426">FAD maximal publié : 516 L/min</text><text x="20" y="136" font-size="16" font-weight="700" fill="#143426">CROSS 900</text><text x="20" y="159" font-size="15" font-weight="400" fill="#143426">FAD maximal publié : 848 L/min</text><text x="20" y="198" font-size="16" font-weight="700" fill="#143426">Information nécessaire</text><text x="20" y="221" font-size="15" font-weight="400" fill="#143426">Pression et conditions associées à</text><text x="20" y="243" font-size="15" font-weight="400" fill="#143426">chaque débit</text><text x="20" y="282" font-size="12" font-weight="400" fill="#143426">Ne pas substituer la pression maximale au point</text><text x="20" y="301" font-size="12" font-weight="400" fill="#143426">de mesure.</text></svg>
</div>

## Obtenir la bonne réponse technique

Transmettez au fabricant la référence complète et demandez le débit restitué garanti à la pression de votre application, avec les conditions de mesure et la configuration concernée. Une courbe ou une fiche de performances datée permet ensuite de compléter le dossier.

Le [guide FAD et débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) explique une autre confusion fréquente, mais ce cas est différent : la donnée est bien nommée FAD, c’est son association avec la pression qui reste insuffisante.

En attendant cette preuve, comparer 848 et 516 L/min peut décrire deux maxima annoncés. Cela ne suffit pas pour promettre une marge à 6,3 ou 8 bar, ni pour établir un classement d’aptitude au sablage.
