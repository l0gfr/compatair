---
title: "Compresseur : rapprocher un code ERP et un nom commercial différent"
seoTitle: "Compresseur : code ERP et nom commercial divergent"
description: "Un même code FIAC apparaît sous AIRBLOK 73 BD et AX 703BD. Conserver les sources, les dates et les écarts au lieu de fusionner les valeurs."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["fiac-airblok-bd-dr-transmission", "contradiction-debit-cfm-m3-min-catalogues", "acheter-outil-industriel-reference-documentation", "gentilin-c660-100-cuve-90-litres"]
sources: ["https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf", "https://shop.fiac.it/en-IT/products/4152026070/ax-703bd-8-40050-ce"]
---

Une recherche par nom peut manquer une fiche utile quand le fabricant utilise un nom de gamme dans le catalogue et un code différent dans sa boutique. Le code commande devient alors le point de rapprochement le plus précis, mais il ne justifie pas d’effacer les différences entre les documents.

Le cas FIAC **4152026070** est instructif. Le [catalogue S226-R1-062026, page 34](https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34), associe ce code à **AIRBLOK 73 BD**. La [fiche individuelle FIAC consultée le 26 septembre 2026](https://shop.fiac.it/en-IT/products/4152026070/ax-703bd-8-40050-ce) utilise **AX 703BD 8 400/50 CE**, dans la gamme commerciale Airblok.

## Ce qui concorde, ce qui diffère

| Champ | Catalogue PDF | Fiche individuelle |
| --- | --- | --- |
| Code | 4152026070 | 4152026070 |
| Pression | 8 bar | 8 bar |
| FAD | 880 L/min | 880 L/min |
| Masse | 241 kg | 241 kg |
| Puissance moteur | 5,5 kW | 5,6 kW |

Le code, le débit, la pression et la masse concordent dans les sources examinées. La puissance publiée diffère de 0,1 kW. Le dossier ne permet pas d’établir si cet écart vient d’un arrondi, d’une révision ou d’une autre convention. Lui attribuer une cause certaine serait ajouter une information absente.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Rapprocher sans écraser les documents">
<svg viewBox="0 0 380 413" role="img" aria-labelledby="identity-title identity-desc" xmlns="http://www.w3.org/2000/svg"><title id="identity-title">Rapprocher sans écraser les documents</title><desc id="identity-desc">Identifiant commun: Code commande 4152026070 ; Conditions concordantes: 8 bar ; FAD 880 L/min ; masse 241 kg ; Écart conservé: 5,5 kW dans le PDF ; 5,6 kW sur la fiche consultée</desc><rect width="380" height="413" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">Rapprocher sans écraser les</text><text x="20" y="60" font-size="20" font-weight="700" fill="#143426">documents</text><circle cx="32" cy="107" r="14" fill="#19704f"/><text x="32" y="112" text-anchor="middle" font-size="14" fill="white">1</text><text x="58" y="112" font-size="17" font-weight="700" fill="#143426">Identifiant commun</text><text x="58" y="135" font-size="15" font-weight="400" fill="#35473d">Code commande 4152026070</text><circle cx="32" cy="178" r="14" fill="#19704f"/><text x="32" y="183" text-anchor="middle" font-size="14" fill="white">2</text><text x="58" y="183" font-size="17" font-weight="700" fill="#143426">Conditions concordantes</text><text x="58" y="206" font-size="15" font-weight="400" fill="#35473d">8 bar ; FAD 880 L/min ; masse 241</text><text x="58" y="227" font-size="15" font-weight="400" fill="#35473d">kg</text><circle cx="32" cy="270" r="14" fill="#19704f"/><text x="32" y="275" text-anchor="middle" font-size="14" fill="white">3</text><text x="58" y="275" font-size="17" font-weight="700" fill="#143426">Écart conservé</text><text x="58" y="298" font-size="15" font-weight="400" fill="#35473d">5,5 kW dans le PDF ; 5,6 kW sur la</text><text x="58" y="319" font-size="15" font-weight="400" fill="#35473d">fiche consultée</text><text x="20" y="367" font-size="13" font-weight="400" fill="#35473d">Schéma de lecture ; aucune mesure physique</text><text x="20" y="386" font-size="13" font-weight="400" fill="#35473d">CompatAir.</text></svg>
</div>

## La méthode pour une demande de devis

Relevez d’abord le code fabricant sur l’offre. Joignez les deux documents s’ils utilisent des noms différents, puis demandez au vendeur de confirmer la version livrée et sa documentation applicable. La plaque signalétique et la notice de l’appareil réceptionné seront ensuite les références à conserver dans le dossier de maintenance.

Ne composez pas une fiche idéale en prenant le meilleur chiffre de chaque document. Une tension d’une version, un débit d’une autre et une masse d’une troisième produiraient une machine qui n’est plus identifiée par aucune source unique.

Pour cette référence, la fiche CompatAir reprend les valeurs de la fiche individuelle consultée et signale la divergence avec le catalogue. Le nom de gamme est utile à la recherche ; le code et les conditions sont nécessaires pour contrôler la donnée.

## Quand la concordance ne suffit plus

Si le code change, si la fréquence diffère ou si le tableau ne précise pas la version, le rapprochement doit rester une hypothèse à vérifier. Une silhouette identique et une puissance proche ne permettent pas de déclarer deux compresseurs équivalents.

Le [guide des contradictions d’unités entre catalogues](/guides/contradiction-debit-cfm-m3-min-catalogues/) montre une situation plus bloquante : quand l’unité elle-même devient incertaine, il faut suspendre la conversion, même si la référence commerciale semble familière.
