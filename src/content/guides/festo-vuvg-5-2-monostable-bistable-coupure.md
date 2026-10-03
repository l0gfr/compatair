---
title: "VUVG 5/2 : remplacer une monostable par une bistable change le comportement d’arrêt"
seoTitle: "VUVG 5/2 : monostable ou bistable à la coupure"
description: "Le catalogue Festo distingue rappel et positions stables. Comparez M52 et B52 avant de remplacer une 5/2, même si raccords et tension semblent identiques."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["bobine-electrovanne-24v-ac-dc-remplacement", "distributeur-5-3-centre-ferme-verin-derive"]
sources: ["https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2023/EN/VTUG-W1_en.pdf"]
---

**Deux électrovannes 5/2 peuvent avoir les mêmes raccords et des comportements de repos différents.** Le nombre de voies décrit le circuit commuté. Il ne précise pas si le tiroir revient par ressort ou possède deux positions stables.

Dans les [tableaux Festo VUVG](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2023/EN/VTUG-W1_en.pdf), M52 et B52 portent des indications distinctes de stabilité et de rappel. Cette lecture est nécessaire avant d’accepter une substitution. Une tension de bobine compatible ne clôt pas la comparaison.

## Le rappel est une caractéristique fonctionnelle

Le catalogue décrit des variantes M52 monostables et des B52 bistables à double solénoïde. Les lignes de rappel pneumatique ou mécanique diffèrent selon la version. Relevez le code complet et le symbole de la référence réellement montée, plutôt qu’une catégorie de vendeur « électrovanne 5/2 ».

L’absence de rappel dans une bistable modifie l’analyse de la coupure électrique. Elle ne garantit toutefois ni la position d’un vérin sous charge ni le maintien lorsque l’alimentation pneumatique change. Il faut examiner l’ensemble des énergies et des commandes de la machine.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Une substitution à trois événements" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="festo-vuvg-5-2-monostable-bistable-coupure-title festo-vuvg-5-2-monostable-bistable-coupure-desc" xmlns="http://www.w3.org/2000/svg"><title id="festo-vuvg-5-2-monostable-bistable-coupure-title">Une substitution à trois événements</title><desc id="festo-vuvg-5-2-monostable-bistable-coupure-desc">Stabilité du tiroir, perte d’air et remise en route doivent être examinées séparément pour une substitution M52/B52.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Une substitution à trois</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">événements</text><text x="28" y="130" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">M52 : monostable</text><rect x="48" y="161" width="280" height="58" rx="8" fill="#244b36"/><path d="M74 190h222" fill="none" stroke="#ffffff" stroke-width="3"/><text x="347" y="182" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Rappel</text><path d="M347 200L327 200" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M334.0 196.2L327 200L334.0 203.8" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M316 245L74 245" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M81.0 241.2L74 245L81.0 248.8" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="52" y="283" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Rappel selon version</text><text x="28" y="350" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">B52 : bistable</text><rect x="48" y="383" width="280" height="58" rx="8" fill="#244b36"/><path d="M74 412h222" fill="none" stroke="#ffffff" stroke-width="3"/><circle cx="66" cy="412" r="7" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><circle cx="310" cy="412" r="7" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><text x="49" y="484" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Deux positions stables à examiner</text></svg>
</div>
*Stabilité du tiroir, perte d’air et remise en route doivent être examinées séparément pour une substitution M52/B52.*

## Trois événements à séparer dans la consultation

Demandez le comportement prévu à la perte de commande électrique, à la perte d’air et au rétablissement de ces deux alimentations. Une phrase comme « revient en position normale » reste ambiguë si elle ne précise pas l’événement et la référence.

Nous proposons de noter aussi les commandes reçues au redémarrage et l’état attendu de l’actionneur. Ces éléments appartiennent au programme et au montage ; le catalogue de l’électrovanne ne les connaît pas. Ils doivent être validés par le responsable de la machine avant un remplacement fonctionnel.

## Une comparaison qui dépasse la bobine

| Ligne de comparaison | Pièce en place | Pièce proposée |
| --- | --- | --- |
| Référence complète et symbole | À relever | À documenter |
| Stabilité et rappel | À lire dans la notice | À comparer |
| Pilotage interne ou externe | À identifier | À vérifier |
| Tension et connectique | À relever | À vérifier |
| Réaction de l’installation au retour | À documenter | À valider |

Cette grille prépare une revue de substitution ; les conditions de contrôle restent celles du dossier de la machine. Le [guide AC/DC des bobines](/guides/bobine-electrovanne-24v-ac-dc-remplacement/) complète la ligne électrique sans remplacer les autres.

## Pourquoi la position stable n’est pas une tenue de charge

La stabilité décrit le distributeur. La charge dépend aussi de l’actionneur et du circuit qui l’entoure. Le [guide du centre fermé](/guides/distributeur-5-3-centre-ferme-verin-derive/) traite cette séparation pour une autre fonction de vanne. Gardez cette frontière dans le compte rendu : observation de position et capacité de maintien ne sont pas des synonymes.

Pour un achat, exigez une référence et un comportement de système définis. Si les fonctions diffèrent, le remplacement demande une revue du schéma et de la commande. Notre analyse ne déclare aucun remplacement sûr à partir d’un filetage, d’un débit nominal ou d’un voyant allumé.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Festo VUVG/VTUG-W1, tableaux M52 et B52](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2023/EN/VTUG-W1_en.pdf)
