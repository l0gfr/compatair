---
title: "SMC VBA : un faible écart de pression peut empêcher le redémarrage"
seoTitle: "SMC VBA : redémarrage et faible écart de pression"
description: "La notice VBA relie un faible écart à un blocage de commutation. Identifiez le modèle, la séquence et les frontières documentaires ambiguës."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["smc-vba-budget-air-moteur-volume-sortie", "diagnostiquer-chute-pression-air-comprime", "distributeur-5-3-centre-ferme-verin-derive"]
sources: ["https://www.smcworld.com/catalog/en/frl/VBA-E/6-6-p1007-1038-vba_en/data/6-6-p1007-1038-vba_en.pdf"]
---

**Un surpresseur SMC VBA qui ne repart pas peut être utilisé avec un écart de pression trop faible.** La cause documentée concerne la pression interne du mécanisme et sa valve de commutation ; augmenter uniquement le volume de stockage ne démontre pas que cette condition est corrigée.

Le [catalogue VBA, précautions de sélection](https://www.smcworld.com/catalog/en/frl/VBA-E/6-6-p1007-1038-vba_en/data/6-6-p1007-1038-vba_en.pdf#page=12) nomme les VBA10A, 20A, 22A, 40A, 42A et 43A au rapport 2. Il demande une sortie au moins **0,1 MPa** au-dessus de l’entrée, puis indique qu’un écart de **0,1 MPa ou moins** peut laisser la valve en position intermédiaire et provoquer un défaut de redémarrage.

## Garder visible l’ambiguïté de la frontière

Les deux formulations incluent la même égalité dans des sens différents. Le texte ne permet donc pas de certifier ici que l’écart exactement égal à 0,1 MPa est un réglage admissible sans réserve. Faites clarifier cette frontière par SMC pour la référence et la révision utilisées.

Un exemple fictif hors de cette frontière rend la lecture plus simple : entrée 0,60 MPa et sortie 0,65 MPa donnent **0,05 MPa d’écart**. Ce scénario se situe dans la zone de risque décrite. Il ne décrit aucun essai ni seuil de déclenchement mesuré sur un VBA.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-vba-redemarrage-ecart-pression-svg-title smc-vba-redemarrage-ecart-pression-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-vba-redemarrage-ecart-pression-svg-title">Un écart trop faible peut perturber la commutation</title><desc id="smc-vba-redemarrage-ecart-pression-svg-desc">Le catalogue VBA relie un faible écart de pression à une pression interne insuffisante et à un arrêt intermédiaire de la valve. La valeur exacte de frontière comporte une ambiguïté de rédaction à faire clarifier.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="24">VBA : vérifier l’écart réel</text><rect x="35" y="92" width="194" height="95" rx="10" fill="#203f31"/><rect x="290" y="92" width="194" height="95" rx="10" fill="#203f31"/><text x="54" y="128" fill="white" font-size="21">Entrée P1</text><text x="54" y="164" fill="white" font-size="19">Sous charge</text><text x="309" y="128" fill="white" font-size="21">Sortie P2</text><text x="309" y="164" fill="white" font-size="19">Pendant le cycle</text><path d="M229 138h61m-13-8 13 8-13 8" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="65" y="244" fill="white" font-size="21">Exemple : 0,65 − 0,60 = 0,05 MPa</text><text x="28" y="301" fill="white" font-size="20">Écart dans la zone de risque décrite.</text><text x="28" y="335" fill="white" font-size="20">La limite exacte reste à clarifier.</text></g>
</svg>
<figcaption>Le catalogue VBA relie un faible écart de pression à une pression interne insuffisante et à un arrêt intermédiaire de la valve. La valeur exacte de frontière comporte une ambiguïté de rédaction à faire clarifier.</figcaption>
</figure>

## Ne pas transposer le cas au VBA11A sans son rapport

La même page donne une autre condition pour le VBA11A au rapport nominal 4 : un rapport de pression de 2 ou plus est demandé, tandis que 2 ou moins est annoncé comme pouvant provoquer le même défaut de commutation. La frontière exactement égale à 2 comporte donc, elle aussi, une ambiguïté rédactionnelle.

Cette référence doit être identifiée avant examen. Le nom général « VBA » ne permet pas d’utiliser la condition d’écart des modèles au rapport 2 à la place de celle du VBA11A. Pressions et rapport doivent provenir du fonctionnement réellement observé, avec les unités conservées.

## Relever la séquence d’alimentation et d’évacuation

Le chapitre de conception de cette page traite aussi le redémarrage après évacuation des pressions. Il décrit une valve qui peut s’arrêter à mi-course quand le fonctionnement passe par la zone instable des courbes. Le circuit recommandé et la méthode de reprise doivent être examinés dans le catalogue complet, avec le responsable du montage.

Ne transformez pas ce passage en recette universelle de coupure et remise sous pression. Le circuit peut conserver une pression aval : le même chapitre explique que le clapet interne empêche sa décharge par une simple valve placée en entrée. La procédure d’intervention doit tenir compte de ce volume retenu.

| Information manquante | Action utile |
| --- | --- |
| Référence VBA exacte | Retrouver le critère d’écart ou de rapport applicable |
| Pressions relevées seulement à l’arrêt | Reprendre le relevé sur la séquence qui échoue |
| Valeur exactement à la frontière ambiguë | Demander clarification documentaire à SMC |
| Défaut après modification de purge | Vérifier circuit de reprise et pression résiduelle |

Le [budget d’air du VBA](/guides/smc-vba-budget-air-moteur-volume-sortie/) traite l’entraînement pneumatique et la pointe de consommation. Le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) aide à observer l’amont. Le [guide distributeur et dérive du vérin](/guides/distributeur-5-3-centre-ferme-verin-derive/) rappelle enfin qu’un arrêt de commande ne permet pas de déduire l’état de tous les volumes du circuit.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
