---
title: "SMC AMS affiche zéro : comment interpréter les petites fuites sous le seuil F14"
seoTitle: "SMC AMS : zéro affiché, petites fuites et seuil F14"
description: "Le zero cut-off F14 peut masquer un petit débit. Examinez modèle, pleine échelle et cumul avant d’annoncer qu’un poste ne consomme plus d’air."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["debitmetre-air-comprime-diametre-conditions-reference", "detecter-mesurer-fuites-air-comprime"]
sources: ["https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf"]
---

**Un zéro affiché ne constitue pas une mesure de fuite nulle.** Sur le SMC AMS, la fonction F14 force l’affichage à zéro près de l’origine. Pour contrôler des pertes après une intervention, il faut connaître ce seuil et la taille du capteur avant d’interpréter la dernière décimale.

La [fonction F14, page imprimée94](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=95) définit un réglage de zero cut-off en pourcentage de pleine échelle. Le même pourcentage ne correspond donc pas au même débit sur toutes les tailles AMS. Une capture d’écran sans référence de capteur ne décrit pas suffisamment la mesure.

## Un exemple tiré du tableau constructeur

À un seuil de **1 % de pleine échelle**, le tableau indique un affichage nul sous **5 L/min** pour AMS20 et sous **10 L/min** pour AMS30. Ces lignes appartiennent à cette notice et à ce réglage. Elles ne représentent pas deux fuites mesurées dans un atelier. [Tableau, page imprimée95 et page PDF96](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=96).

Pour comparer un avant et un après, conservez la référence et F14 avec les relevés. Remplacer un capteur ou changer son paramètre entre les deux campagnes peut modifier l’apparence des données. L’interprétation doit garder ces changements visibles.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Le seuil dépend de la taille AMS" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="smc-ams-zero-debit-petites-fuites-f14-title smc-ams-zero-debit-petites-fuites-f14-desc" xmlns="http://www.w3.org/2000/svg"><title id="smc-ams-zero-debit-petites-fuites-f14-title">Le seuil dépend de la taille AMS</title><desc id="smc-ams-zero-debit-petites-fuites-f14-desc">Exemples du tableau constructeur à F14 égal à 1 % de pleine échelle ; ces valeurs ne sont pas des fuites mesurées.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Le seuil dépend de la taille AMS</text><text x="28" y="128" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">F14 = 1 % de pleine échelle</text><text x="28" y="169" fill="#ffffff" font-size="22" text-anchor="start" font-weight="400">AMS20</text><path d="M48 200h400" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="48" y="183" width="196" height="34" rx="0" fill="#244b36"/><path d="M244 173v54" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="48" y="260" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">0</text><text x="244" y="260" fill="#d3eb56" font-size="20" text-anchor="middle" font-weight="400">5 L/min</text><text x="28" y="279" fill="#ffffff" font-size="22" text-anchor="start" font-weight="400">AMS30</text><path d="M48 310h400" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="48" y="293" width="394" height="34" rx="0" fill="#244b36"/><path d="M442 283v54" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="48" y="370" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">0</text><text x="442" y="370" fill="#d3eb56" font-size="20" text-anchor="middle" font-weight="400">10 L/min</text><text x="28" y="426" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Zone avant le seuil : zéro affiché</text><text x="28" y="466" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Le cumul coupe sous 1 % même si F14 est</text><text x="28" y="491" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">réglé à zéro.</text></svg>
</div>
*Exemples du tableau constructeur à F14 égal à 1 % de pleine échelle ; ces valeurs ne sont pas des fuites mesurées.*

## L’affichage instantané et le cumul ont leurs limites propres

La note du constructeur précise que le cumul coupe les valeurs sous **1 % de pleine échelle**, même lorsque le zero cut-off est réglé à zéro. Désactiver le masquage de l’affichage ne suffit donc pas à faire du compteur intégré une référence pour toutes les petites pertes. [Note du tableau de cumul, page PDF96](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=96).

Avant de convertir un cumul en coût, définissez la plage effectivement comptée, la durée et le point de mesure. Le [guide de plage et précision du débitmètre](/guides/debitmetre-air-comprime-diametre-conditions-reference/) aide à distinguer une donnée affichable d’un résultat pertinent pour votre objectif.

## Préparer un contrôle après réparation

Nous proposons de consigner la pression du poste, son état, les consommateurs restés actifs, la référence AMS et la configuration F14. Cette description permet de comparer deux relevés effectués dans des conditions documentées. Elle ne remplace pas la qualification de la méthode lorsque l’objectif se situe près de la limite basse.

| Résultat observé | Formulation raisonnable |
| --- | --- |
| Zéro avec seuil connu | Débit sous la limite d’affichage configurée |
| Cumul stable | Pas d’incrément enregistré dans ces conditions |
| Débit détecté | Consommation observée au point de mesure |

Aucune de ces lignes ne localise la fuite. Un débit peut aussi correspondre à une consommation prévue, selon l’état de la machine. Le [guide de recherche des fuites](/guides/detecter-mesurer-fuites-air-comprime/) organise cette enquête à partir des observations du réseau.

## Rédiger le résultat pour qu’il reste vérifiable

Dans un compte rendu, remplacez « aucune fuite » par une phrase indiquant point de mesure, durée, pression et limite pertinente. Lorsque la question porte sur des pertes inférieures à cette limite, indiquez que le relevé AMS ne permet pas de trancher et choisissez une méthode adaptée avec le responsable de la campagne.

Le bénéfice de cette lecture est concret : elle empêche une amélioration d’affichage d’être présentée comme une disparition physique des pertes. Aucun volume économisé n’est calculé dans ce guide à partir d’un zéro forcé.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [SMC PFxx-OMA1007-B, tableau et note de cumul, page imprimée95 et page PDF96](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=96)
