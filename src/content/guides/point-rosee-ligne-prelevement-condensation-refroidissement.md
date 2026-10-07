---
title: "Mesurer le point de rosée d’un air chaud : attention à la condensation dans le prélèvement"
seoTitle: "Point de rosée : condensation dans le prélèvement"
description: "Si l’échantillon refroidit sous son point de rosée, la ligne peut condenser l’eau avant la sonde. Vérifiez le trajet thermique avant de juger la qualité d’air."
pubDate: "2026-10-07"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["aftercooler-refroidisseur-secheur-air-comprime", "point-rosee-atmospherique-sous-pression-mesure", "tester-contamination-air-avant-peinture"]
sources: ["https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf"]
---

Déporter une sonde d’humidité permet parfois de respecter sa limite de température. Mais un prélèvement qui refroidit le gaz peut aussi changer l’échantillon. La température du flexible et de la cellule doit donc accompagner le résultat.

La [note Vaisala, section Condensing water](https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf) demande que le point de rosée du gaz reste inférieur à la température à laquelle l’échantillon refroidit dans la ligne. Lorsque la rosée est supérieure à l’ambiante, elle indique une mesure directe ou une ligne chauffée adaptée. Cette condition protège la représentativité du prélèvement ; elle ne constitue pas une consigne de chauffage universelle à mettre en œuvre sans vérifier le matériel.

## Rechercher le point le plus froid du trajet

Le thermomètre placé près du compresseur ne décrit pas une ligne passant dans une zone fraîche. Le relevé thermique doit suivre le trajet entier : origine, passages exposés, cellule, détentes et rejet. Indiquez la pression et les températures observées aux endroits pertinents, avec la phase de fonctionnement.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Le prélèvement peut changer l’échantillon" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="point-rosee-ligne-prelevement-condensation-refroidissement-title point-rosee-ligne-prelevement-condensation-refroidissement-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="point-rosee-ligne-prelevement-condensation-refroidissement-title">Le prélèvement peut changer l’échantillon</title><desc id="point-rosee-ligne-prelevement-condensation-refroidissement-desc">Schéma du risque décrit par Vaisala. La température du trajet doit être examinée avant d’interpréter le résultat de la cellule.</desc><rect width="520" height="480" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Le prélèvement peut changer l’échantillon</text><rect x="28" y="88" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="120" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Gaz du procédé</text><text x="45" y="154" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Point de rosée et pression connus</text><path d="M260 184v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="208" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="240" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Ligne plus froide que la rosée</text><text x="45" y="274" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Risque de condensation dans la ligne</text><path d="M260 304v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="328" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="360" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Résultat en sortie de ligne</text><text x="45" y="394" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Ne décrit plus le même échantillon</text></svg>
</div>

*Schéma du risque décrit par Vaisala. La température du trajet doit être examinée avant d’interpréter le résultat de la cellule.*

Le [guide aftercooler et sécheur](/guides/aftercooler-refroidisseur-secheur-air-comprime/) explique l’intérêt de retirer l’eau à l’endroit prévu dans la chaîne de traitement. Ici, le retrait éventuel se produit dans un circuit de mesure. Il ne peut pas être interprété comme une performance du traitement situé en amont.

## Un résultat « plus sec » peut être non représentatif

Notre conclusion de lecture est que la mesure après condensation éventuelle ne décrit plus simplement le gaz prélevé à son origine. Une valeur basse ne doit donc pas être retenue comme résultat favorable sans examen du prélèvement. Nous ne calculons aucune correction forfaitaire permettant de retrouver la rosée initiale à partir d’une telle lecture.

Une trace d’eau dans le trajet est une observation utile. Son absence visible ne suffit pas à éliminer le risque : il faut aussi connaître les conditions thermiques et la rosée visée. Le circuit peut être fermé, et toute inspection interne suit la procédure appropriée de l’installation.

## La bonne solution dépend des limites de l’instrument

| Situation à faire examiner | Information requise |
| --- | --- |
| Température du procédé trop élevée pour la sonde | Limite de la sonde et option de prélèvement prévue |
| Ligne traversant une zone froide | Température minimale réelle du trajet |
| Détente avant la cellule | Pression et grandeur de rosée rapportée |
| Ligne chauffée envisagée | Montage validé et domaine des composants |
| Comparaison à une exigence de qualité | Condition de mesure demandée par cette exigence |

Demandez au fournisseur un montage conservant un échantillon représentatif tout en respectant la sonde. Une ligne chauffée demande ses propres composants et contrôles ; une mesure directe doit rester dans le domaine d’emploi de l’instrument. Le bon choix ne résulte pas uniquement de l’endroit où l’écran serait le plus facile à lire.

## Reprendre la mesure après modification documentée

Conservez le plan du montage initial et celui du montage retenu. Reprenez les observations à un état de production décrit, avec la pression dans la cellule et la stabilisation prévue par le protocole. La [rosée atmosphérique et la rosée sous pression](/guides/point-rosee-atmospherique-sous-pression-mesure/) doivent rester distinguées si le nouveau montage comprend une détente.

Pour un poste de finition, le [contrôle de contamination avant peinture](/guides/tester-contamination-air-avant-peinture/) remet cette mesure dans un contrôle plus large. Le point de rosée concerne l’eau ; il ne confirme pas les autres polluants.

Si le trajet descend sous la rosée du gaz, suspendez l’interprétation de la valeur comme état du réseau d’origine. Le montage doit maintenir un échantillon représentatif avant la comparaison à l’exigence du poste.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
