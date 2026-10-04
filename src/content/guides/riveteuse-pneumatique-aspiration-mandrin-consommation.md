---
title: "Riveteuse pneumatique : l’aspiration des mandrins est-elle incluse dans le débit ?"
description: "Consommation par rivet, aspiration et cadence : lire le cas GESIPA TAURUS sans additionner deux fois l’air ni inventer une consommation auxiliaire."
pubDate: 2026-09-29
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "btp-chantier"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["compresseur-pour-riveteuse-pneumatique", "cadence-clouage-pneumatique-chantier", "utiliser-plusieurs-outils-pneumatiques"]
sources:
  - https://www.gesipa.com/products/pneumatic-riveting-tools/1457878-taurus-3-with-ph-2000-spent-mandrel-container/
---

Sur une riveteuse avec évacuation pneumatique des mandrins, la valeur de consommation doit être lue avec le fonctionnement de l’aspiration. **N’ajoutez pas un débit auxiliaire supposé, et ne présumez pas non plus qu’il est toujours inclus.** Le fabricant doit préciser le périmètre de la donnée et la condition d’utilisation.

## Le cas TAURUS ne décrit pas toutes les riveteuses

La [fiche GESIPA TAURUS 3 avec collecteur PH 2000](https://www.gesipa.com/products/pneumatic-riveting-tools/1457878-taurus-3-with-ph-2000-spent-mandrel-container/), référence 1457878, explique que l’air est utilisé pour poser le rivet puis réutilisé pour évacuer le mandrin. Elle décrit une aspiration commutable. Il serait donc incorrect de représenter automatiquement cette conception comme deux consommations indépendantes à additionner.

La même page affiche une consommation de **4,80 litres**, sans expliciter dans l’intitulé consulté la base de temps ou de cycle nécessaire à une conversion en L/min. Nous ne transformons pas cette indication seule en débit continu, ni en résultat mesuré sur notre poste.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 280" role="img" aria-labelledby="riveteuse-pneumatique-aspiration-mandrin-consommation-title riveteuse-pneumatique-aspiration-mandrin-consommation-desc" style="font-family:system-ui,sans-serif">
<title id="riveteuse-pneumatique-aspiration-mandrin-consommation-title">Périmètre de la consommation d’une riveteuse</title><desc id="riveteuse-pneumatique-aspiration-mandrin-consommation-desc">GESIPA décrit une réutilisation de l’air pour l’évacuation des mandrins sur cette TAURUS. La frise illustre des fonctions, sans quantifier leur durée ou leur débit.</desc>
<rect width="440" height="280" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Rivetage et évacuation</text><path d="M40 120L400 120" stroke="#9fb3a8" stroke-width="3" fill="none"/><rect x="48" y="80" width="100" height="45" rx="8" fill="#19704f"/><text x="98" y="108" fill="#eef2e9" font-size="19" text-anchor="middle" font-weight="400">Pose</text><rect x="168" y="80" width="190" height="45" rx="8" fill="#19704f"/><text x="263" y="108" fill="#eef2e9" font-size="16" text-anchor="middle" font-weight="400">Évacuation du mandrin</text><text x="24" y="178" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">TAURUS : air réutilisé, selon GESIPA</text><text x="24" y="219" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Ne pas ajouter un débit inventé</text><text x="24" y="251" fill="#eef2e9" font-size="16" text-anchor="start" font-weight="400">Vérifier ce que couvre la valeur publiée</text>
</svg>
<figcaption>GESIPA décrit une réutilisation de l’air pour l’évacuation des mandrins sur cette TAURUS. La frise illustre des fonctions, sans quantifier leur durée ou leur débit.</figcaption>
</figure>

Le [guide du compresseur pour riveteuse](/guides/compresseur-pour-riveteuse-pneumatique/) pose le bilan de cadence. Ce dossier ajoute une question préalable : quelle partie du cycle la valeur constructeur couvre-t-elle ?

## Demander le dénominateur avant de calculer

Pour convertir une quantité en débit moyen, il faut savoir si elle correspond à un rivet, à un cycle complet ou à une autre condition. Il faut aussi identifier la pression et les conditions de référence du volume. Une notation « L » sans cette explication ne fournit pas un débit exploitable.

Prenons un exemple **hypothétique**, sans rapport chiffré avec la TAURUS : si une notice indique 2 L d’air de référence par cycle complet, une cadence de 12 cycles par minute représente 24 L/min moyens. Le calcul est 2 × 12. Il ne définit pas le débit instantané requis pendant la course, ni un éventuel besoin d’aspiration non compris dans ces 2 L.

La distinction entre quantité par opération et débit apparaît aussi dans le [dossier des litres par coup](/guides/cadence-clouage-pneumatique-chantier/). Les unités doivent être conservées jusqu’à ce que la base du calcul soit claire.

## Faire préciser la configuration achetée

| Question au fournisseur | Pourquoi elle compte |
| --- | --- |
| Quelle référence et quel collecteur ? | Évite de mélanger les variantes |
| La consommation couvre-t-elle l’évacuation ? | Évite un bilan incomplet ou une double addition |
| Que change l’aspiration commutée ? | Définit le mode réellement utilisé |
| Quelle pression et quelle cadence ? | Permet un scénario de travail identifiable |

La possibilité de commuter une aspiration ne signifie pas que l’opérateur doit la couper pour gagner artificiellement du débit. L’évacuation et la collecte des mandrins participent au fonctionnement prévu. Les réglages et la procédure restent ceux de la notice du modèle.

## Vérifier le poste avec sa cadence

Lors de la réception, notez le nombre d’opérations dans une séquence représentative, les pauses, les autres consommateurs et la pression en fonctionnement. Vérifiez aussi que l’évacuation se déroule correctement. Un rivet posé isolément ne décrit pas la tenue de l’alimentation sur une série.

Si les données ne précisent pas le périmètre de consommation, la décision reste limitée. CompatAir ne comble pas cette lacune par une aspiration standard estimée. Aucune consommation auxiliaire, cadence maximale ou autonomie de cuve n’est attribuée à la TAURUS 3 dans ce guide.

Si le rivet reste mal tiré, distinguez aussi les points d’entretien. La [notice CP9883/CP9884](/guides/cp9883-rivet-mal-tire-mors-hydraulique/) sépare les mors, la lubrification d’air et le circuit hydraulique, sans convertir cette distinction en diagnostic à distance.
