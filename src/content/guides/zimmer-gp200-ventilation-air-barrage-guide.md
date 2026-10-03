---
title: "GP200 : préserver la ventilation des mors et limiter l’air de barrage"
seoTitle: "Zimmer GP200 : ventilation et air de barrage"
description: "Ne pas boucher la ventilation des mors GP200 en ambiance sale. Identifier le trajet vers une zone propre et la limite de 0,5 bar de l’air de barrage."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["festo-vfof-ba-verin-air-emprisonne", "qualite-air-comprime-iso-8573-1", "groupe-frl-filtre-regulateur-lubrificateur"]
sources: ["https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf"]
---

De la poussière entre dans un GP200 et l’idée serait de boucher la mise à l’air des mors. Zimmer demande l’inverse : **la ventilation doit rester ouverte ; une ambiance sale peut nécessiter un tuyau vers une zone propre.** Le raccord d’air de barrage obéit à une limite de pression distincte.

## La ventilation peut aspirer l’air ambiant

La [notice GP200 DDOC00232, page 8, section 10.2](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf#page=8) explique que la ventilation des mors aspire de l’air ambiant, par lequel les saletés peuvent entrer. Elle interdit de fermer cette ventilation et prévoit, en milieu sale, un tuyau conduisant à une zone propre.

Cette exigence ne se confond pas avec la fermeture des raccords d’alimentation inutilisés, également demandée sur la même page. Identifier la fonction du port évite donc de traiter une ventilation nécessaire comme une fuite à obturer. Le [guide des fonctions pneumatiques et pressions restantes](/guides/festo-vfof-ba-verin-air-emprisonne/) illustre cette différence entre ports, sans fournir le montage du GP200.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="zimmer-gp200-ventilation-air-barrage-guide-title zimmer-gp200-ventilation-air-barrage-guide-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="zimmer-gp200-ventilation-air-barrage-guide-title">GP200 : deux voies à conserver distinctes</title><desc id="zimmer-gp200-ventilation-air-barrage-guide-desc">La ventilation des mors doit rester ouverte ; en ambiance sale, la notice prévoit un tuyau vers une zone propre. L’air de barrage est limité à 0,5 bar.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="23" font-weight="700">Ventiler sans introduire la poussière</text><rect x="177" y="119" width="166" height="115" rx="15" fill="#26775b"/><path d="M45 164H177M343 164H468" stroke="#8abfa3" stroke-width="8"/><text x="187" y="161" fill="#eef2e9" font-size="25">Mors</text><text x="184" y="204" fill="#eef2e9" font-size="23">GP200</text><text x="28" y="111" fill="#eef2e9" font-size="19">Zone propre</text><text x="370" y="111" fill="#eef2e9" font-size="19">Ventilation</text><text x="37" y="278" fill="#eef2e9" font-size="23">Ne pas obturer la ventilation</text><text x="37" y="320" fill="#eef2e9" font-size="23">Air de barrage : ≤ 0,5 bar</text></svg>
<figcaption>La ventilation des mors doit rester ouverte ; en ambiance sale, la notice prévoit un tuyau vers une zone propre. L’air de barrage est limité à 0,5 bar.</figcaption>
</figure>

## Le raccord de barrage n’admet pas la pression de service ordinaire

Zimmer limite l’air de barrage à **0,5 bar maximum**. Une pression plus élevée réduit trop rapidement la lubrification du guidage. Il ne s’agit pas d’un réglage de force des mors : augmenter ce barrage n’améliore pas automatiquement la protection.

La même section prescrit un air conforme à **ISO 8573-1 [7:4:4]** pour l’alimentation. Le [guide des classes d’air](/guides/qualite-air-comprime-iso-8573-1/) permet de lire les trois composantes ; la limite de 0,5 bar concerne le raccord de barrage, pas une extrapolation des classes de qualité.

| Point identifié | Condition de la notice |
| --- | --- |
| Raccord d’énergie inutilisé | Obturation résistante à la pression |
| Ventilation des mors | Reste ouverte |
| Ventilation en environnement sale | Tuyau vers une zone propre |
| Raccord d’air de barrage | Au plus 0,5 bar |

## Nettoyer sans déplacer le problème à l’intérieur

La [page 10, maintenance](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf#page=10) interdit de purger le produit par soufflage d’air comprimé et d’utiliser des nettoyants liquides ou contenant des solvants. Elle demande un examen visuel régulier, même lorsque le fonctionnement est présenté comme sans maintenance dans ses conditions prévues. Un démontage de maintenance est réservé au service client.

Une trace de saleté exige donc de vérifier le chemin d’entrée et la méthode de nettoyage, sans souffler dans le préhenseur pour tenter de la chasser. Le [guide FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) situe le traitement de l’alimentation ; il ne corrige pas une aspiration d’air ambiant sale par les mors.

La reprise doit conserver les voies nécessaires, la qualité d’air et la limite du barrage. La notice ne publie ici ni diamètre universel du tuyau de ventilation ni gain de durée de vie chiffré après cette modification.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Zimmer GP200, notice d’installation et d’utilisation DDOC00232 V8](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf)
