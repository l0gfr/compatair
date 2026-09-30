---
title: "Muscle pneumatique Festo DMSP : pourquoi la force diminue avec la contraction"
seoTitle: "Festo DMSP : force et contraction du muscle"
description: "Le DMSP tire et se contracte ; sa force varie avec la course. Préparer un point de travail, un retour et une alimentation sans appliquer la formule du vérin."
pubDate: 2026-09-30
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["force-verin-pneumatique-diametre-pression", "consommation-verin-pneumatique-double-effet", "vibreur-pneumatique-tremie-debit-compresseur"]
sources:
  - https://www.festo.com/media/catalog/202851_documentation.pdf
---

**La force maximale annoncée pour un muscle pneumatique n’est pas disponible sur toute sa course.** Si un montage tire correctement au départ puis ne termine plus le mouvement, la sélection doit examiner le point de contraction demandé, et non seulement le chiffre de force figurant en tête de gamme.

## Le DMSP se raccourcit sous pression

Le [catalogue Festo DMSP, édition 2026/01](https://www.festo.com/media/catalog/202851_documentation.pdf) décrit un actionneur de traction à membrane. La mise sous pression provoque une expansion radiale et une contraction longitudinale. La force de traction utile est maximale au début, puis diminue avec la contraction.

Le document présente des domaines de force et de contraction par taille. Une valeur de gamme ne constitue donc pas une force garantie pour chaque référence, pression et longueur. Le nom « muscle » ne désigne pas un vérin à section constante sur lequel recopier directement un calcul de poussée.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="muscle-pneumatique-dmsp-force-contraction-title muscle-pneumatique-dmsp-force-contraction-desc" style="font-family:system-ui,sans-serif"><title id="muscle-pneumatique-dmsp-force-contraction-title">Deux positions à comparer</title><desc id="muscle-pneumatique-dmsp-force-contraction-desc">Principe qualitatif documenté par Festo. Aucune courbe chiffrée n’est reconstruite.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Deux positions à comparer</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Début de contraction</text><text x="32" y="97" font-size="16" fill="#eef2e9">Force utile plus élevée</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Fin de contraction</text><text x="32" y="167" font-size="16" fill="#eef2e9">Force disponible à vérifier</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Effort demandé</text><text x="32" y="237" font-size="16" fill="#eef2e9">Comparer aux deux points critiques</text></svg>
<figcaption>Principe qualitatif documenté par Festo. Aucune courbe chiffrée n’est reconstruite.</figcaption>
</figure>

## Décrire la tâche à deux positions

Préparez l’effort demandé au début et à la fin du mouvement, la course utile, la longueur disponible, la géométrie de la charge et le mode de retour. Demandez au fournisseur de situer ces points dans le domaine du DMSP choisi. Si l’effort augmente en fin de déplacement alors que la force disponible diminue, cette confrontation doit apparaître dans la sélection.

Cette méthode de consultation est proposée par CompatAir. Elle n’attribue aucune trajectoire réelle à votre montage. Le [calcul de force d’un vérin](/guides/force-verin-pneumatique-diametre-pression/) concerne une autre architecture et reste un repère pour comprendre la différence.

| Donnée de l’application | Réponse à documenter |
| --- | --- |
| Longueur nominale et contraction | Course utile dans le domaine autorisé |
| Efforts sur le déplacement | Force disponible aux positions critiques |
| Retour et précontrainte | Conditions prévues par le montage |
| Géométrie et efforts latéraux | Guidage et alignement nécessaires |
| Cadence | Alimentation et service au cycle demandé |

## Calculer l’air avec la bonne documentation

Le [volume par cycle d’un vérin double effet](/guides/consommation-verin-pneumatique-double-effet/) repose sur les dimensions de ses chambres. Il ne fournit pas, par substitution, la consommation d’un muscle dont la géométrie évolue. Faites confirmer la consommation pour la taille, la contraction, la pression et la cadence prévues.

Gardez le retour mécanique dans le dossier : un actionneur de traction à simple effet ne définit pas à lui seul les positions de repos du système. Le concepteur doit documenter le comportement à l’arrêt et lors de la remise en pression.

## Sélectionner un cycle, puis observer le montage

Pour un usage répétitif ou vibratoire, ajoutez la fréquence, l’amplitude et la charge. Notre [guide du vibreur de trémie](/guides/vibreur-pneumatique-tremie-debit-compresseur/) illustre une autre application où l’air doit être relié au service demandé, sans prêter ses valeurs au DMSP.

Demandez une note de sélection accompagnée des points de fonctionnement, puis une réception suivant le cycle approuvé. Ce guide n’interpole aucune courbe constructeur et ne remplace pas une confirmation de force en fin de contraction par la force maximale commerciale.
