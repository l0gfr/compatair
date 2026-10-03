---
title: "SMC AMS : pourquoi la pression de veille ne descend pas quand le poste s’arrête"
seoTitle: "SMC AMS : pression de veille qui ne descend pas"
description: "Le régulateur de veille AMS est non relief. Lisez mode, consommation et signaux avant de déclarer le système défaillant ou de modifier les seuils."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["regulateur-air-pression-monte-arret-creep", "fiche-intervention-air-comprime"]
sources: ["https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf"]
---

**Sur l’AMS, le passage en veille et la baisse effective de pression sont deux observations distinctes.** La notice précise que la construction du régulateur est non relief : une consommation aval est nécessaire pour que la pression descende vers la consigne de veille. Un poste fermé peut donc conserver sa pression sans que cette seule observation démontre une panne.

La [notice PFxx-OMA1007-B](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=41) distingue fonctionnement, veille et isolation. Avant d’analyser une trace, identifiez la variante installée et les signaux de la machine. Les versions normalement ouvertes et normalement fermées n’interprètent pas tous les signaux dans le même sens.

## Lire le mode avant de comparer les manomètres

Dans le principe décrit page imprimée40, seuil de débit, délai et entrée de veille conditionnent le passage en veille. L’isolation intervient avec sa propre logique et un organe de relâchement de pression. Observer un seul manomètre ne permet pas de reconstruire cette séquence.

Synchronisez sur une horloge commune le mode affiché, l’état des entrées, la pression aval et le débit. Faites extraire ces informations par l’équipe responsable du contrôle de la machine. Une commande de sécurité ne doit pas être modifiée pour créer artificiellement la séquence souhaitée.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Une veille en trois observations" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="smc-ams-veille-pression-ne-descend-pas-title smc-ams-veille-pression-ne-descend-pas-desc" xmlns="http://www.w3.org/2000/svg"><title id="smc-ams-veille-pression-ne-descend-pas-title">Une veille en trois observations</title><desc id="smc-ams-veille-pression-ne-descend-pas-desc">La notice AMS distingue conditions de passage, mode veille et pression aval ; la construction non relief exige une consommation pour abaisser la pression.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Une veille en trois observations</text><rect x="30" y="125" width="215" height="95" rx="8" fill="#244b36"/><text x="42" y="152" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Production</text><text x="42" y="183" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Pression aval</text><rect x="285" y="125" width="205" height="95" rx="8" fill="#244b36"/><text x="297" y="152" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Veille</text><text x="297" y="183" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Consigne réduite</text><path d="M245 170L285 170" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M278.0 173.8L285 170L278.0 166.2" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="105" y="285" width="220" height="64" rx="8" fill="#244b36"/><text x="122" y="319" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Volume aval non</text><text x="122" y="344" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">relief</text><path d="M385 222L325 285" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M327.1 277.3L325 285L332.6 282.6" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M215 350v45h130" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="50" y="449" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">La baisse demande une consommation en</text><text x="50" y="476" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">aval.</text><text x="30" y="523" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Veille ≠ isolement ou décompression.</text></svg>
</div>
*La notice AMS distingue conditions de passage, mode veille et pression aval ; la construction non relief exige une consommation pour abaisser la pression.*

## Deux chronologies qui orientent la recherche

Un journal peut montrer que le mode reste en fonctionnement malgré un arrêt apparent du poste. Dans ce cas, commencez par documenter les conditions de passage et les signaux observés. Une autre trace peut montrer le mode veille actif mais une pression presque constante, avec très peu de consommation aval. Cette observation est cohérente avec le principe non relief décrit ; elle ne démontre pas que toute l’installation est correctement réglée.

Écrivez les deux situations différemment dans la fiche d’incident. « Veille non atteinte » et « pression non abaissée après veille » orientent vers des vérifications différentes. Elles ne doivent pas être résumées par « l’AMS fuit ».

## Relever les données sans masquer le problème

| Point à noter | Utilité |
| --- | --- |
| Modèle et version NC/NO | Donner un sens aux entrées |
| Mode horodaté | Situer la transition |
| Consigne et pression aval | Distinguer objectif et observation |
| Débit et seuil configuré | Décrire la condition de veille |
| Délai et entrée | Relire la logique documentée |

Le [guide du régulateur et de la remontée de pression](/guides/regulateur-air-pression-monte-arret-creep/) traite un autre symptôme. Une pression conservée lors d’une phase non relief ne permet pas de conclure à un creep. Pour une dérive, notez le sens, la durée et les conditions de débit, au lieu d’utiliser une étiquette de panne par analogie.

## Accepter le fonctionnement selon la machine

La notice AMS n’établit pas le niveau de pression que votre procédé peut supporter en veille, ni la fonction de sécurité de l’ensemble. Le responsable de l’installation doit préciser l’état attendu pour chaque phase et la méthode de réception.

Conservez le relevé, la configuration et l’interprétation validée dans la [fiche d’intervention](/guides/fiche-intervention-air-comprime/). Aucun gain énergétique en pourcentage ne découle d’un voyant de veille. Il faut un bilan mesuré pour chiffrer une économie et un diagnostic séparé pour qualifier les pertes.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [SMC PFxx-OMA1007-B, principe de fonctionnement, page imprimée40 et page PDF41](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=41)
