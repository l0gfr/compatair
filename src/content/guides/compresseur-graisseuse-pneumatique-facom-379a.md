---
title: "Graisseuse pneumatique FACOM 379A : débit d’air, pression et cadence"
seoTitle: "FACOM 379A : quel compresseur pour la graisseuse ?"
description: "Lire les 100 L/min à 6 bar de la FACOM 379A sans les confondre avec le débit de graisse ; distinguer dosage, cadence et alimentation du poste."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["garage-automobile", "atelier-poids-lourds", "maintenance-industrielle"]
readingTime: 6
reviewStatus: internal
relatedGuides:
  - dimensionner-compresseur-garage-automobile
  - dimensionner-poste-pneumatique-poids-lourds
  - groupe-frl-filtre-regulateur-lubrificateur
sources:
  - https://www.facom.com/GLOBALBOM/XJ/379A/1/Instruction_Manual/EN/379A_1206.pdf
  - https://www.facom.com/product/379a/pneumatic-grease-gun-capacity-500-cm3-or-400-g-grease
---

La notice de la **FACOM 379A** indique **100 L/min d’air à 6 bar**. Le même dessin donne **1 cm³ de graisse par coup**. Ce sont deux grandeurs différentes : l’une prépare le besoin du réseau pneumatique, l’autre décrit le volume de graisse distribué.

Pour équiper un poste d’entretien, il faut les garder séparées. Une cadence de graissage n’est pas un débit d’air, et une pression d’alimentation n’est pas automatiquement la pression de la graisse en sortie.

## Ce que confirment la fiche et la notice

La [fiche actuelle FACOM](https://www.facom.com/product/379a/pneumatic-grease-gun-capacity-500-cm3-or-400-g-grease) annonce une alimentation de 2 à 8 bar, avec **6 bar recommandés**, ainsi qu’un volume de 1 cm³ par coup. Elle décrit le remplissage par cartouche ou graisse en vrac et une capacité de 500 cm³ ou 400 g.

La [notice NU-379A/1206, page 2](https://www.facom.com/GLOBALBOM/XJ/379A/1/Instruction_Manual/EN/379A_1206.pdf), porte une date de 2006. Elle ajoute le repère de 100 L/min à 6 bar et une cadence illustrée de 70 coups de 1 cm³ par minute. Nous citons son âge et son périmètre : elle ne constitue pas une mesure effectuée en 2026 ni une preuve de la cadence soutenable par tout opérateur.

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="FACOM 379A : ne pas intervertir les grandeurs">

| Valeur documentée | Ce qu’elle décrit | Ce qu’elle ne décrit pas |
| --- | --- | --- |
| 100 L/min à 6 bar | Consommation d’air indiquée dans la notice | Débit de graisse |
| 1 cm³ par coup | Volume de graisse par action | Volume d’air par action |
| 70 × 1 cm³/min | Cadence représentée dans la notice | Besoin de chaque organe à graisser |
| 6 bar recommandés | Pression de l’alimentation pneumatique | Pression maximale de la graisse en sortie |

</div>


## Deux calculs utiles, avec des limites différentes

**Calcul de dosage théorique :** si une procédure d’entretien demandeait 8 cm³, la valeur nominale de 1 cm³ par coup conduirait à huit coups. Les 8 cm³ sont une hypothèse : le besoin réel vient du fabricant de l’organe entretenu. Il faut également vérifier que le volume est effectivement délivré ; compter des actions ne démontre pas à lui seul le graissage réussi.

**Calcul de cadence :** `70 × 1 cm³ = 70 cm³`, soit **0,07 litre de graisse par minute**. Il serait incorrect d’additionner ce nombre aux 100 L/min d’air ou de remplacer l’un par l’autre dans le calcul du compresseur.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Deux circuits, deux volumes">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="grease-title grease-desc" xmlns="http://www.w3.org/2000/svg">
<title id="grease-title">Deux circuits, deux volumes</title><desc id="grease-desc">Air : 100 L/min à 6 bar selon la notice. Graisse : 1 cm³ par coup, soit 70 cm³/min à 70 coups/min. Les deux fluides ne partagent pas le même bilan.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Deux circuits, deux volumes</text>
<rect x="28" y="85" width="310" height="150" rx="12" fill="#203f31"/><text x="48" y="123" fill="#d3eb56" font-size="24">Circuit d’air</text><text x="48" y="173" fill="white" font-size="28">100 L/min</text><text x="48" y="210" fill="white" font-size="20">à 6 bar, notice FACOM</text><rect x="382" y="85" width="310" height="150" rx="12" fill="#203f31"/><text x="402" y="123" fill="#d3eb56" font-size="24">Circuit de graisse</text><text x="402" y="173" fill="white" font-size="28">1 cm³ par coup</text><text x="402" y="210" fill="white" font-size="20">70 coups/min → 0,07 L/min</text><text x="28" y="295" fill="white" font-size="17">Cadence documentaire ; dose réelle à définir pour l’organe.</text>
</svg>
</div>


Nous ne déduisons pas un volume d’air par coup en divisant 100 par 70. La notice présente ces repères graphiques sans détailler un protocole permettant de garantir cette relation à toutes les cadences. Si le calcul d’un poste automatique dépend de cette grandeur, il faut une donnée constructeur applicable ou une mesure du cycle.

## Quel compresseur retenir pour le poste ?

Le repère de 100 L/min à 6 bar permet de préparer la consultation, à compléter par les conditions de référence du débit et le cycle envisagé. Demandez le débit **restitué** du compresseur à la pression de service, le régime de fonctionnement autorisé et la pression effectivement tenue à l’entrée de la graisseuse.

Un poste utilisé quelques instants entre des interventions ne représente pas la même demande quotidienne qu’une opération répétitive. Mais une moyenne faible ne garantit pas que l’alimentation soutient la phase active. Pour un garage, replacez la graisseuse dans le [bilan des consommateurs simultanés](/guides/dimensionner-compresseur-garage-automobile/), notamment si une autre baie utilise une clé à chocs.

## Les autres nombres du dessin ne sont pas des réglages de la graisseuse

La page 2 représente aussi des accessoires de préparation d’air, avec leurs propres inscriptions. Nous retenons pour la 379A la plage de sa fiche et le point recommandé de 6 bar ; les limites imprimées près d’un composant de la ligne ne doivent pas devenir un réglage conseillé pour l’outil.

De même, la capacité en grammes d’une cartouche et le volume en cm³ ne justifient pas une conversion universelle entre masse et volume de n’importe quelle graisse. Si la procédure d’entretien est exprimée en masse, utilisez la donnée appropriée au lubrifiant ou une méthode de dosage validée pour lui.

## Valider l’intervention et l’alimentation séparément

Notre proposition de réception conserve deux traces. La première décrit le poste : référence 379A, alimentation, pression en service et comportement pendant la séquence. La seconde décrit l’entretien réalisé selon la procédure de l’équipement : lubrifiant, quantité demandée, points traités et contrôle prévu.

En cas d’absence de graisse au point attendu, ne concluez pas automatiquement à un manque de pression et n’augmentez pas l’air pour forcer le passage. Le diagnostic du circuit de graisse suit la notice et la procédure de maintenance. Une alimentation pneumatique compatible ne valide ni la quantité injectée ni l’état du point de graissage.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [FACOM, notice 379A NU-379A/1206, page 2](https://www.facom.com/GLOBALBOM/XJ/379A/1/Instruction_Manual/EN/379A_1206.pdf)
- [FACOM, fiche actuelle de la graisseuse pneumatique 379A](https://www.facom.com/product/379a/pneumatic-grease-gun-capacity-500-cm3-or-400-g-grease)
