---
title: "BEKOMAT 20 FM : le voyant de filtre reste allumé après remplacement"
seoTitle: "BEKOMAT 20 FM : voyant filtre après remplacement"
description: "Le 20 FM possède un compteur Lifetime à réinitialiser après remplacement. Identifiez le bon champ de voyants et conservez l’opération avant le reset."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["filtre-air-comprime-perte-pression-remplacement", "purgeur-condensats-temporise-detection-niveau", "maintenance-preventive-reseau-air-comprime"]
sources: ["https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm20_fm_ba_01-4318_en_01_00.pdf"]
---

Le filtre a été remplacé, mais **Change Element** reste allumé sur le BEKOMAT 20 FM. Cette observation n’impose pas de conclure immédiatement que le filtre neuf est déjà colmaté. L’appareil possède une fonction de suivi de durée qui doit être réinitialisée après remplacement.

La [notice BEKOMAT 20/20 FM, page 43](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm20_fm_ba_01-4318_en_01_00.pdf#page=43) distingue le champ **Drain**, consacré au fonctionnement du purgeur, et la fonction **Filter** avec voyants **Lifetime** et **Change Element**. Le [§9.2.2.1 page 44](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm20_fm_ba_01-4318_en_01_00.pdf#page=44) demande une réinitialisation de la gestion du filtre après son remplacement. La procédure inclut une confirmation et prévoit une annulation ; entrer dans le mode de reset ne suffit pas à dire que le compteur a été remis à son état initial.

## Identifier ce qui reste réellement allumé

Photographiez le panneau entier et relevez le nom du voyant. Un message d’alarme du purgeur n’a pas la même signification que l’indication de remplacement du filtre. La lecture « voyant rouge sur BEKOMAT » est trop imprécise pour demander une pièce ou préparer une intervention.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Drain et Filter : deux informations" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bekomat20-fm-voyant-filter-lifetime-remplacement-title bekomat20-fm-voyant-filter-lifetime-remplacement-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="bekomat20-fm-voyant-filter-lifetime-remplacement-title">Drain et Filter : deux informations</title><desc id="bekomat20-fm-voyant-filter-lifetime-remplacement-desc">Sur le 20 FM, le champ Drain et les voyants Lifetime ne décrivent pas la même fonction. Un reset du compteur ne constitue pas une mesure de perte de charge.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Drain et Filter : deux informations</text><rect x="28" y="100" width="464" height="155" rx="12" fill="#244b36"/><text x="48" y="140" fill="#d3eb56" font-size="25" text-anchor="start" font-weight="700">DRAIN</text><text x="48" y="185" fill="#ffffff" font-size="22" text-anchor="start" font-weight="400">Alimentation, vanne, alarme</text><rect x="28" y="290" width="464" height="155" rx="12" fill="#244b36"/><text x="48" y="330" fill="#d3eb56" font-size="25" text-anchor="start" font-weight="700">FILTER</text><text x="48" y="375" fill="#ffffff" font-size="22" text-anchor="start" font-weight="400">Lifetime / Change Element</text><text x="48" y="415" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Réinitialisation après remplacement</text></svg>
</div>

*Sur le 20 FM, le champ Drain et les voyants Lifetime ne décrivent pas la même fonction. Un reset du compteur ne constitue pas une mesure de perte de charge.*

Vérifiez aussi que le modèle est bien le **20 FM**. Le BEKOMAT 20 et le 20 FM sont documentés ensemble, mais n’ont pas le même ensemble de fonctions. Un schéma de touches trouvé pour un autre purgeur ne constitue pas une procédure de ce modèle.

## Relier le reset à une opération réelle

Avant la réinitialisation, retrouver l’élément qui a été remplacé, sa référence et la date de l’opération. Si seul le filtre a été sorti puis remis en place, ne consignez pas un remplacement neuf. Le suivi perdrait son sens si le compteur était réinitialisé à chaque alerte sans intervention correspondante.

Le reset s’effectue suivant la séquence complète de la page 44, par l’équipe autorisée. Ce guide ne réduit pas cette séquence à un appui unique et ne prescrit pas une périodicité de remplacement pour tout élément filtrant. La durée et l’entretien du filtre installé suivent son dossier et les conditions du réseau.

## Le compteur ne remplace pas le diagnostic du filtre

Pour une chute de pression, revenir au [guide de perte de charge du filtre](/guides/filtre-air-comprime-perte-pression-remplacement/). Une différence de pression mesurée sous débit et une indication de durée sont deux éléments du dossier. Nous ne transformons pas l’un en l’autre et n’attribuons aucun seuil de colmatage non publié au BEKOMAT.

| Situation | Action à préparer |
| --- | --- |
| Élément remplacé, compteur non confirmé | Suivre et vérifier la procédure de réinitialisation |
| Remplacement non établi | Retrouver l’intervention avant de modifier l’historique |
| Alarme dans le champ Drain | Utiliser le diagnostic du purgeur concerné |
| Chute de pression pendant l’usage | Mesurer les conditions du filtre et examiner son dossier |

## Vérifier le panneau et conserver l’intervention

Après la procédure, relevez le résultat du compteur et le fonctionnement du purgeur. Le fait que le champ Filter affiche une durée disponible ne confirme pas automatiquement la vidange des condensats. Le [guide des purgeurs](/guides/purgeur-condensats-temporise-detection-niveau/) distingue leurs modes de fonctionnement.

Inscrivez dans le [suivi de maintenance](/guides/maintenance-preventive-reseau-air-comprime/) la référence de l’élément, le remplacement effectué et la remise à l’état initial du compteur. En cas de persistance de l’indication, transmettez la séquence réellement suivie au service technique, au lieu de refaire des resets sans limite.

Le diagnostic devient alors conclusif sur le point traité : vérifier la gestion de durée après un remplacement établi. Un voyant de durée ne démontre pas, à lui seul, l’état physique du filtre neuf. Un reset non rattaché à une intervention ne corrige aucun problème de traitement d’air.


## Lire les quatre voyants Lifetime

La page 43 donne les plages de l’indicateur :

| Voyants Lifetime verts allumés | Durée de service disponible indiquée |
| --- | ---: |
| 4 | 100 à 76 % |
| 3 | 75 à 51 % |
| 2 | 50 à 26 % |
| 1 | 25 à 1 % |

Ce sont les plages affichées par la fonction de suivi. Elles ne sont pas une mesure de perte de charge du filtre. Le voyant rouge **Change Element** appartient à ce suivi ; son retour à l’état initial doit correspondre au remplacement effectivement réalisé, selon la procédure page 44.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
