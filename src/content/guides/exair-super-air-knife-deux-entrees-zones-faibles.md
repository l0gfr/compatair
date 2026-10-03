---
title: "Super Air Knife : diagnostiquer les zones faibles sur une lame longue"
seoTitle: "Super Air Knife : entrées d’air et zones faibles"
description: "Une lame longue sous-alimentée ne se corrige pas automatiquement par une cale. Vérifiez entrées, pression au corps, propreté et consignes EXAIR."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["diagnostiquer-chute-pression-air-comprime", "couteau-air-comprime-ou-soufflante", "amplificateur-air-exair-consommation-debit"]
sources: ["https://www.exair.com/media/productcms/pdf/Super_Air_Knife.pdf", "https://www.exair.com/knowledgebase/faq/index/?catid=438"]
---

**Une zone faible sur une Super Air Knife longue demande d’abord d’examiner l’alimentation et la propreté de la fente.** Ajouter une cale plus épaisse peut augmenter la demande d’air sans corriger une liaison qui sous-alimente le corps.

La [notice EXAIR LIT 2103, page 1](https://www.exair.com/media/productcms/pdf/Super_Air_Knife.pdf#page=1) préconise les deux extrémités pour les longueurs de **24 à 42 pouces** ; au-delà de **42 pouces**, elle demande extrémités **et centre**. Elle précise aussi qu’un jeu de fente plus grand appelle de préférence une alimentation aux deux bouts pour conserver l’uniformité recherchée.

## Deux textes ne donnent pas le même seuil d’entrée double

La [FAQ fabricant sur une force inégale](https://www.exair.com/knowledgebase/faq/index/?catid=438) indique deux entrées opposées dès **18 pouces**. Une autre réponse de cette même FAQ, consacrée au montage, situe l’alimentation des deux bouts à **24 pouces**. La notice donne, elle, la recommandation 24–42 pouces puis le centre au-delà.

La notice contient aussi une discordance interne : sur la même page, « Compressed Air Supply » commence l’entrée dessous supplémentaire à **48 pouces**, et non immédiatement au-delà de 42. Elle donne la progression suivante.

| Longueur, en pouces | Entrées dans « Compressed Air Supply » |
| --- | --- |
| 24 à 47 | Deux extrémités opposées |
| 48 à 59 | Deux extrémités et une dessous près du milieu |
| 60 à 83 | Deux extrémités et deux dessous, réparties régulièrement |
| 84 et plus | Deux extrémités et trois dessous, réparties régulièrement |

Pour **43 à 47 pouces**, les deux sections ne demandent donc pas le même nombre d’entrées. La règle « centre obligatoire au-delà de 42 » ne doit pas être appliquée ici comme une consigne universelle sans cette réserve. Faites confirmer à EXAIR la référence, le jeu et le raccordement dans les plages divergentes, y compris 18–24 pouces dans les réponses de la FAQ.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="exair-super-air-knife-deux-entrees-zones-faibles-svg-title exair-super-air-knife-deux-entrees-zones-faibles-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="exair-super-air-knife-deux-entrees-zones-faibles-svg-title">Recenser les entrées de la référence exacte</title><desc id="exair-super-air-knife-deux-entrees-zones-faibles-svg-desc">Exemple de la section Compressed Air Supply pour 48 à 59 pouces : deux entrées aux extrémités et une dessous près du milieu. Inventaire fonctionnel, sans coupe technique ni uniformité mesurée.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="22">Super Air Knife : le cas 48–59 pouces</text><rect x="45" y="136" width="430" height="70" rx="8" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><path d="M12 171h33m430 0h33m-247 81v-46" stroke="#d3eb56" stroke-width="6" fill="none"/><text x="30" y="111" fill="white" font-size="18">Extrémité</text><text x="384" y="111" fill="white" font-size="18">Extrémité</text><text x="174" y="278" fill="white" font-size="21">Entrée dessous</text><text x="28" y="326" fill="white" font-size="20">Les textes divergent pour 43–47 pouces.</text><text x="28" y="359" fill="white" font-size="19">Faire confirmer le modèle et le raccordement.</text></g>
</svg>
<figcaption>Exemple de la section Compressed Air Supply pour 48 à 59 pouces : deux entrées aux extrémités et une dessous près du milieu. Inventaire fonctionnel, sans coupe technique ni uniformité mesurée.</figcaption>
</figure>

## Observer la pression à l’entrée de la lame

La [page 2 de LIT 2103](https://www.exair.com/media/productcms/pdf/Super_Air_Knife.pdf#page=2) demande, en cas de perte de débit ou de force, de contrôler la pression dans une entrée disponible. Elle nomme les conduites trop petites, raccords restrictifs et filtres colmatés parmi les causes possibles de chute importante.

Le point de mesure doit être distingué de celui du régulateur de l’atelier. Conservez les entrées alimentées, les diamètres intérieurs et la longueur des liaisons. Le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) complète ce contrôle sur le poste en fonctionnement.

## Une fente obstruée est un autre défaut

La FAQ cite la contamination, la sous-alimentation et le serrage excessif parmi les causes de débit inégal. L’examen des surfaces et du jeu doit suivre la notice de démontage du matériau concerné ; n’appliquez pas automatiquement la procédure d’une lame métallique à une version polymère.

Le jeu standard publié est **0,05 mm**. Ouvrir davantage la fente modifie force, débit et demande d’air. La notice demande de vérifier alors le dimensionnement des conduites, valves, filtre et régulateur. Une cale ne constitue donc pas une correction indépendante du réseau.

| Constat | Contrôle qui conserve le mécanisme |
| --- | --- |
| Zone faible sur lame longue | Répartition et nombre d’entrées alimentées |
| Pression qui baisse au corps | Liaisons, raccords et éléments filtrants |
| Pression présente mais débit inégal | Contamination, jeu et assemblage selon notice |
| Modification récente de cale | Nouvelle demande d’air et configuration de montage |

Le [comparatif couteau d’air ou soufflante](/guides/couteau-air-comprime-ou-soufflante/) traite le choix de technologie sur une tâche mesurée. Le [guide EXAIR débit consommé et débit soufflé](/guides/amplificateur-air-exair-consommation-debit/) évite de confondre les volumes. Pour le défaut présent, commencez par faire confirmer le raccordement de la lame exacte, puis comparez la pression et le résultat du soufflage avant et après la correction.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
