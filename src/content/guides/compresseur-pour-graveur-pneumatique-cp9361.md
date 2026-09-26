---
title: "Graveur pneumatique CP9361 : quel compresseur pour 6 L/min ?"
seoTitle: "CP9361 : quel compresseur pour ce graveur pneumatique ?"
description: "Graveur Chicago Pneumatic CP9361 : 6 L/min en charge, incohérence des valeurs moyennes, flexible, pointe et vérifications avant achat."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
featured: false
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-perceuse-pneumatique", "burineur-pneumatique-chantier-debit-vibrations", "pression-travail-6-3-bar-outils-pneumatiques"]
relatedCalculatorTool: "chicago-pneumatic-cp9361"
sources:
  - https://tools.cp.com/en/products/percussivetools/cp9361-skuT012644
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/P145929.pdf
  - https://www.inrs.fr/risques/vibration-membres-superieurs/evaluation-risque
  - https://www.inrs.fr/risques/vibration-membres-superieurs/prevention
---

**Le CP9361 est annoncé à 0,1 L/s, soit 6 L/min en charge, avec une pression dynamique maximale de 6,3 bar.** Son faible besoin d’air ne dispense pas de vérifier la régulation, le flexible et la pointe. Et la consommation moyenne ne doit pas remplacer cette donnée : la notice comporte une incohérence d’unités sur ce point. [Fiche officielle CP9361](https://tools.cp.com/en/products/percussivetools/cp9361-skuT012644).

## Les caractéristiques utiles au choix

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Données du graveur CP9361">

| Critère | Valeur publiée | Usage dans la décision |
| --- | --- | --- |
| Consommation en charge | 0,1 L/s, soit 6 L/min | Comparer avec le débit restitué disponible |
| Pression dynamique maximale | 6,3 bar | Respecter la limite de l’outil |
| Cadence de frappe | 13 500 coups/min | Décrire le mécanisme, sans prédire la vitesse de gravure |
| Flexible minimal pour 5 m | 5 mm | Vérifier la liaison, pas seulement le filetage |
| Emmanchement | Hexagonal, 3 mm / 1/8 pouce dans la fiche | Identifier la pointe par sa référence |

</div>

Ces données proviennent de la fiche constructeur. Les dimensions métriques et impériales sont reproduites comme des désignations publiées : elles ne démontrent pas l’interchangeabilité de n’importe quelle pointe proche en diamètre. Une pointe ronde de perceuse n’est pas validée par la seule mention 1/8 pouce.

## Pourquoi nous ne retenons pas 0,75 L/min pour dimensionner

La [notice P145929, page 2](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/P145929.pdf) présente simultanément une consommation réelle de 6 L/min et des consommations moyennes de 0,75 L/min et 0,28 cfm. **Les deux dernières valeurs ne concordent pas entre elles.** Avec le facteur géométrique `1 ft³ = 28,316846592 L`, 0,28 cfm représente environ 7,93 L/min, pas 0,75 L/min. La [page de conversion](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique aussi pourquoi les conditions de référence doivent être conservées.

Nous ne corrigeons pas arbitrairement la notice et n’attribuons pas un cycle de travail fictif à ces chiffres. Les 6 L/min concordent entre la ligne de consommation réelle du PDF et les 0,1 L/s en charge de la fiche actuelle. C’est la donnée documentaire retenue ici, sans prétendre qu’il s’agit d’une mesure réalisée par CompatAir.

<div class="article-infographic" tabindex="0" role="group" aria-label="CP9361 : quelle donnée retenir ?">
<svg viewBox="0 0 680 404" role="img" aria-labelledby="graveur-title graveur-desc" xmlns="http://www.w3.org/2000/svg">
<title id="graveur-title">CP9361 : quelle donnée retenir ?</title><desc id="graveur-desc">Fiche actuelle : 0,1 L/s en charge × 60 = 6 L/min. Notice, consommation réelle : 6 L/min : concordance avec la fiche. Notice, valeurs moyennes : 0,28 cfm et 0,75 L/min : incohérence à clarifier. Ne pas inventer un cycle pour réconcilier les chiffres.</desc>
<rect width="680" height="404" rx="20" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">CP9361 : quelle donnée retenir ?</text>
<rect x="24" y="70" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="98" fill="#d3eb56" font-size="22" font-weight="700">Fiche actuelle</text><text x="40" y="126" fill="white" font-size="20">0,1 L/s en charge × 60 = 6 L/min.</text>
<rect x="24" y="158" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="186" fill="#d3eb56" font-size="22" font-weight="700">Notice, consommation réelle</text><text x="40" y="214" fill="white" font-size="20">6 L/min : concordance avec la fiche.</text>
<rect x="24" y="246" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="274" fill="#d3eb56" font-size="22" font-weight="700">Notice, valeurs moyennes</text><text x="40" y="302" fill="white" font-size="20">0,28 cfm et 0,75 L/min : incohérence à clarifier.</text>
<text x="28" y="379" fill="white" font-size="19">Ne pas inventer un cycle pour réconcilier les chiffres.</text>
</svg>
</div>

## Un petit compresseur convient-il à la gravure ?

La consommation publiée est faible, mais « petit compresseur » ne constitue pas une caractéristique vérifiable. Relevez le débit restitué à la pression utile, les réglages du détendeur et les conditions de service du modèle envisagé. Si seul un débit aspiré est annoncé, la preuve de compatibilité manque toujours. Le [guide FAD](/guides/debit-restitue-fad-vs-debit-aspire/) détaille cette différence.

Notre méthode de réception consiste à observer une séquence représentative de gravure, avec le montage final, et à relever la pression pendant le fonctionnement. Enregistrez aussi les démarrages du compresseur et les interruptions imposées. L’objectif est de vérifier le poste réellement utilisé ; il ne s’agit pas d’inventer une durée d’autonomie à partir du seul volume de cuve.

**Exemple pédagogique :** trois CP9361 simultanés représentent `3 × 6 = 18 L/min` de consommations publiées cumulées, avant les autres usages et les pertes. Ce calcul ne valide ni un réseau particulier ni une durée de travail acceptable pour les opérateurs.

## Faible consommation ne signifie pas faible exposition

L’INRS explique que l’exposition aux vibrations main-bras dépend du niveau vibratoire dans les conditions d’utilisation et de la durée réelle des tâches. Un débit d’air, un poids ou une cadence de frappe ne permettent pas d’en déduire l’exposition journalière. [INRS, évaluer le risque](https://www.inrs.fr/risques/vibration-membres-superieurs/evaluation-risque).

Pour un poste de marquage répété, nous proposons de documenter le temps effectif de gravure, la manière de tenir la pièce, l’état de la pointe et les changements de tâche. Le choix d’un outil adapté, son entretien et l’organisation du travail font partie des pistes de prévention décrites par l’[INRS](https://www.inrs.fr/risques/vibration-membres-superieurs/prevention). Ce guide ne calcule pas de durée d’exposition autorisée pour le CP9361.

## Préparer un essai de marquage qui répond au besoin

Avant d’acheter, formulez le résultat attendu : matière à marquer, lisibilité demandée, emplacement autorisé et exigences éventuelles de traçabilité. Faites confirmer la pointe compatible avec la référence T012644 et le support. Nous ne promettons aucune profondeur ou cadence de production en l’absence de données portant sur votre application.

Pour une pièce soumise à une procédure qualité, faites valider le mode de marquage par cette procédure. Une gravure lisible visuellement ne prouve pas qu’elle est acceptable sur toute pièce mécanique. Le choix de l’air intervient après cette validation du procédé.

Consultez la [fiche CP9361](/outils-pneumatiques/graveur-chicago-pneumatic-cp9361/) et sa [page de compatibilité compresseur](/quel-compresseur-pour/graveur-chicago-pneumatic-cp9361/). Si le besoin consiste à percer plutôt qu’à marquer, le [guide des perceuses pneumatiques](/guides/compresseur-pour-perceuse-pneumatique/) traite un autre mécanisme et d’autres besoins d’air.

## Sources et périmètre

Sources consultées le **26 septembre 2026**. Analyse documentaire interne : CompatAir n’a pas réalisé d’essai physique de ces équipements. Les scénarios et calculs pédagogiques sont distingués des caractéristiques publiées.

- [Chicago Pneumatic, CP9361, référence T012644](https://tools.cp.com/en/products/percussivetools/cp9361-skuT012644)
- [Chicago Pneumatic, notice CP9361, P145929, page PDF 2](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/P145929.pdf)
- [INRS, évaluation du risque de vibrations main-bras](https://www.inrs.fr/risques/vibration-membres-superieurs/evaluation-risque)
- [INRS, prévention des vibrations main-bras](https://www.inrs.fr/risques/vibration-membres-superieurs/prevention)
