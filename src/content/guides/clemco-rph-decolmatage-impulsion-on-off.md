---
title: "Décolmatage Clemco RPH : allonger l’impulsion consomme plus d’air sans mieux nettoyer"
seoTitle: "Clemco RPH : durée ON et intervalle de décolmatage"
description: "Le RPH distingue durée d’impulsion et intervalle. La notice interdit d’allonger ON pour améliorer le nettoyage ; documentez pression différentielle et réglages."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-cabine-sablage-succion-pression", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://www.clemcoindustries.com/s/21449m.pdf"]
---

**Le dépoussiéreur RPH ne nettoie pas mieux ses cartouches parce que l’impulsion dure plus longtemps.** Clemco indique explicitement que l’allongement du temps ON consomme davantage d’air sans augmenter l’efficacité du nettoyage. C’est une limite documentée de ce réglage, pas une estimation d’économie.

La [notice RPH 21449, révision D](https://www.clemcoindustries.com/s/21449m.pdf#page=9) sépare durée ON et intervalle OFF. Le réglage d’usine décrit est **0,15 seconde ON et 40 secondes OFF**. Ces valeurs appartiennent aux modèles et à la révision de la notice ; ne les recopiez pas sur un autre séquenceur.

## L’intervalle et la durée n’agissent pas sur la même chose

Le temps OFF espace les impulsions successives. Le temps ON détermine l’ouverture d’une impulsion. La section 4.2 interdit de modifier ON pour améliorer le nettoyage et relie l’examen d’OFF à la pression différentielle des cartouches.

Relevez ensemble la date, la configuration du collecteur, le différentiel observé et les réglages présents. Notez également si le problème survient constamment ou pendant une phase particulière. Un écran de temporisation isolé ne raconte pas le fonctionnement du dépoussiéreur.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux temporisations distinctes" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="clemco-rph-decolmatage-impulsion-on-off-title clemco-rph-decolmatage-impulsion-on-off-desc" xmlns="http://www.w3.org/2000/svg"><title id="clemco-rph-decolmatage-impulsion-on-off-title">Deux temporisations distinctes</title><desc id="clemco-rph-decolmatage-impulsion-on-off-desc">Réglage d’usine du RPH Rev.D : 0,15 seconde ON et 40 secondes OFF. Le constructeur interdit d’allonger ON pour améliorer le nettoyage.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Deux temporisations distinctes</text><text x="27" y="128" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Réglage d’usine RPH Rev. D</text><path d="M40 310H477" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M45 310V210H130V310H410" fill="none" stroke="#d3eb56" stroke-width="5"/><text x="47" y="168" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">ON 0,15 s</text><text x="210" y="266" fill="#ffffff" font-size="22" text-anchor="start" font-weight="400">OFF 40 s</text><path d="M235 303l12 15 12-15 12 15" fill="none" stroke="#9ebdad" stroke-width="3"/><text x="28" y="406" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">Durées dessinées sans proportion</text><text x="28" y="453" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Allonger ON n’est pas une correction de</text><text x="28" y="478" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">nettoyage autorisée.</text></svg>
</div>
*Réglage d’usine du RPH Rev.D : 0,15 seconde ON et 40 secondes OFF. Le constructeur interdit d’allonger ON pour améliorer le nettoyage.*

## Lire le différentiel sans le confondre avec l’air comprimé

Le différentiel décrit l’écart de pression entre les côtés du filtre. La pression d’alimentation des pulses appartient à un autre circuit. Gardez leurs unités et leurs points de mesure séparés dans le dossier : la cuve du compresseur ne mesure pas la perte de charge des cartouches.

La notice décrit sa propre méthode d’ajustement et ses limites. Faites appliquer la version correspondant à l’équipement par le personnel qualifié. Ce guide n’est pas une invitation à multiplier les pulses ou augmenter une pression sans diagnostic.

## Organiser un changement de réglage traçable

| Relevé | Ce qu’il décrit |
| --- | --- |
| Modèle et révision | Portée de la méthode constructeur |
| Différentiel avant modification | État observé du filtre |
| ON et OFF présents | Configuration réellement utilisée |
| Pression du circuit pulse | Alimentation de la fonction |
| Résultat après intervention | Évolution à comparer |

Consignez une seule modification identifiée avec son motif, selon les instructions du système. Cette proposition de traçabilité n’impose aucun seuil nouveau. Si le résultat reste insuffisant, le diagnostic de cartouche et d’installation doit suivre la notice, plutôt que prolonger une impulsion interdite.

## Le bilan du compresseur exige encore une quantité d’air

La durée et la fréquence ne donnent pas directement un volume par pulse. Sans consommation qualifiée de l’ensemble, nous ne calculons ni litres par heure ni coût annuel. Le [bilan de cabine](/guides/compresseur-cabine-sablage-succion-pression/) doit identifier cette fonction et éviter de l’ajouter deux fois si elle est déjà comprise.

Un [audit horodaté du réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) peut ensuite étudier la demande réelle du poste. La conclusion documentaire est déjà utile avant ce chiffrage : distinguer les deux temporisations et respecter la restriction ON empêche un mauvais réglage d’être pris pour un besoin de compresseur plus grand.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Clemco RPH 21449 Rev.D, sections 1.5 et 4.2](https://www.clemcoindustries.com/s/21449m.pdf#page=9)
