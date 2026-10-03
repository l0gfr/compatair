---
title: "Pro Xp Auto AA : pourquoi la commande CYL ouvre l’air avant l’aiguille de fluide"
seoTitle: "Pro Xp Auto AA : séquence CYL, air puis fluide"
description: "La commande pneumatique CYL possède une séquence interne air/fluide. Distinguez ordre de l’automate, pression de commande et réponse observée."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["carrosserie-peinture", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["capteur-pnp-npn-entree-automate-verin", "mesurer-pression-dynamique-pistolet-peinture"]
sources: ["https://www.graco.com/content/dam/graco/tech_documents/manuals/333/333011/333011EN-L.pdf"]
---

**L’ordre électrique de pulvériser n’est pas l’ouverture instantanée de l’aiguille.** Le Pro Xp Auto AA reçoit une commande pneumatique sur CYL. La notice décrit l’ouverture des vannes d’air puis, peu après, de l’aiguille de fluide, afin d’assurer l’avance et le retard d’air.

Ce principe figure dans la [notice 333011L, page 7](https://www.graco.com/content/dam/graco/tech_documents/manuals/333/333011/333011EN-L.pdf#page=7). Il permet de lire une séquence de poste automatique sans attribuer immédiatement un retard observé à l’automate ou à un compresseur insuffisant.

## Distinguer ordre, arrivée de commande et résultat

Le dossier de cycle doit nommer l’ordre émis, l’état de la commande pneumatique et le début de pulvérisation observé. Ces événements peuvent être suivis dans une même chronologie, avec les moyens de contrôle autorisés de l’installation.

La notice donne une pression minimale de **4,2 bar sur CYL** pour la fonction décrite. Cette donnée est une exigence de commande du modèle, pas une consigne de peinture ou de turbine. Une pression au collecteur principal ne démontre pas sa présence au raccord pendant le cycle.

<div class="article-infographic article-infographic--compact" role="group" aria-label="L’ordre et la séquence interne" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="graco-pro-xp-auto-cyl-sequence-air-fluide-title graco-pro-xp-auto-cyl-sequence-air-fluide-desc" xmlns="http://www.w3.org/2000/svg"><title id="graco-pro-xp-auto-cyl-sequence-air-fluide-title">L’ordre et la séquence interne</title><desc id="graco-pro-xp-auto-cyl-sequence-air-fluide-desc">La commande CYL ouvre l’air avant le fluide ; les temps du poste doivent être observés, pas déduits du seul ordre automate.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">L’ordre et la séquence interne</text><text x="26" y="134" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Commande CYL</text><path d="M60 167v280M60 199h390" fill="none" stroke="#9ebdad" stroke-width="3"/><text x="80" y="249" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Air</text><path d="M150 284h80v-30h220" fill="none" stroke="#d3eb56" stroke-width="4"/><text x="80" y="344" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">Fluide</text><path d="M150 379h160v-30h140" fill="none" stroke="#ffffff" stroke-width="4"/><text x="28" y="469" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Air ouvert avant le fluide</text><text x="28" y="510" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Ordre schématique, aucun délai inventé.</text></svg>
</div>
*La commande CYL ouvre l’air avant le fluide ; les temps du poste doivent être observés, pas déduits du seul ordre automate.*

## Le schéma de commande compte dans le diagnostic

Relevez la référence de l’électrovanne de commande, le trajet CYL et la version du manifold. La notice contient les prescriptions de ce circuit et de son échappement. Le responsable de l’intégration doit les rapprocher du matériel en place avant de modifier un délai.

Un symptôme de goutte au départ peut demander un dépannage spécifique, mais le seul principe air/fluide ne prouve pas sa cause. Le compte rendu doit garder observation et interprétation séparées.

## Préparer un journal sans délai inventé

| Événement | Trace à recueillir |
| --- | --- |
| Ordre de pulvérisation | Horodatage et programme concerné |
| Commande CYL | État et pression au point prévu |
| Réponse visible | Début et fin observés du jet |
| Modification | Paramètre ou organe changé |
| Réception | Critère de cycle retenu |

Les données doivent partager une référence temporelle pour être comparables. Une capture d’écran de commande et une vidéo non synchronisée ne fournissent pas automatiquement un temps de réponse fiable.

## Examiner le poste entier avant de toucher les temporisations

Le [guide des entrées automate PNP/NPN](/guides/capteur-pnp-npn-entree-automate-verin/) rappelle la différence entre ordre et information de position sur une autre chaîne de commande. Ici, identifiez aussi l’origine exacte de chaque trace de supervision.

Le [contrôle de pression pendant action](/guides/mesurer-pression-dynamique-pistolet-peinture/) complète le dossier CYL. Ni une pression statique ni le minimum publié ne calculent le délai de votre circuit.

Pour accepter une modification, décrivez le cycle prévu et le résultat observé après intervention. La documentation confirme une séquence interne ; l’intégration et la réception doivent encore établir son comportement dans le poste, sans lui attribuer un délai universel.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Graco 333011L, Operating the Spray Function, p.7](https://www.graco.com/content/dam/graco/tech_documents/manuals/333/333011/333011EN-L.pdf#page=7)
