---
title: "Vérin guidé Festo DFM : une charge déportée se choisit aussi avec son moment"
seoTitle: "Festo DFM : charge déportée et moment sur le guide"
description: "Un DFM pousse assez fort mais porte une charge déportée : calcul du moment, variantes GF/KF et lecture des limites statiques et dynamiques."
pubDate: 2026-09-30
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["force-verin-pneumatique-diametre-pression", "pince-pneumatique-force-doigt-longueur-prehension", "verin-rotatif-pneumatique-couple-angle-inertie"]
sources:
  - https://www.festo.com/media/catalog/204171_documentation.pdf
---

Le calcul de poussée paraît correct, mais la pièce est montée au bout d’une équerre. **Le vérin guidé doit alors satisfaire un effort axial et des charges sur son guidage.** Sur un Festo DFM, retenir seulement le diamètre du piston et la pression laisse une partie essentielle de la sélection sans réponse.

## La documentation distingue les guidages

Le [catalogue DFM/DFM-B, édition 2026/05](https://www.festo.com/media/catalog/204171_documentation.pdf) distingue GF, guidage lisse, et KF, guidage à billes. Il présente des forces transversales et des moments admissibles, avec des conditions de course et, pour le KF, des données statiques et dynamiques. Les forces et moments indiqués sont référencés au centre du guide.

Cette origine compte : une distance prise depuis le bord du boîtier peut décrire un autre bras de levier. Envoyez un plan coté, avec les axes de la documentation, au fournisseur plutôt qu’une photographie sans dimensions.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="verin-guide-festo-dfm-charge-deportee-moment-title verin-guide-festo-dfm-charge-deportee-moment-desc" style="font-family:system-ui,sans-serif"><title id="verin-guide-festo-dfm-charge-deportee-moment-title">Le déport change le moment</title><desc id="verin-guide-festo-dfm-charge-deportee-moment-desc">Exemple hypothétique : force perpendiculaire de 100 N. Aucun seuil admissible DFM n’est déduit.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Le déport change le moment</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Déport de 0,05 m</text><text x="32" y="97" font-size="16" fill="#eef2e9">100 × 0,05 = 5 N·m</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Déport de 0,20 m</text><text x="32" y="167" font-size="16" fill="#eef2e9">100 × 0,20 = 20 N·m</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Même effort de 100 N</text><text x="32" y="237" font-size="16" fill="#eef2e9">Moment multiplié par quatre</text></svg>
<figcaption>Exemple hypothétique : force perpendiculaire de 100 N. Aucun seuil admissible DFM n’est déduit.</figcaption>
</figure>

## Un exemple de calcul, sans modèle validé

Supposons une force transversale de **100 N** dont la ligne d’action est à **0,20 m** du centre de référence. Le moment de cet exemple est **100 × 0,20 = 20 N·m**. Avec la même force à 0,05 m, il serait de 5 N·m.

Ces valeurs sont un calcul illustratif CompatAir, pas des capacités attribuées à un DFM particulier. Elles montrent pourquoi raccourcir le déport modifie le dossier, même si la masse et la pression restent les mêmes. Le [guide de préhension](/guides/pince-pneumatique-force-doigt-longueur-prehension/) examine une question voisine pour la longueur des doigts.

## Décrire les charges ensemble

Préparez les efforts dans chaque direction, les moments, la course et la position de la charge sur le déplacement. Ajoutez la masse de l’outillage et les accélérations prévues. Demandez au fournisseur une vérification de la combinaison de charges, avec la méthode applicable à la variante.

| Information | Pourquoi elle doit rester dans le dossier |
| --- | --- |
| GF ou KF et référence complète | Identifier le guidage réellement proposé |
| Plan et centre de référence | Calculer les bons bras de levier |
| Charges statiques et cycle | Distinguer maintien et mouvement |
| Course et vitesse | Relier les limites à la configuration |
| Amortissement | Vérifier l’arrêt en fin de course |

Une comparaison de poussée, telle que celle du [guide force de vérin](/guides/force-verin-pneumatique-diametre-pression/), répond à une autre question. Elle n’autorise pas à remplacer les limites du guidage par une pression plus élevée.

## Préparer un remplacement qui conserve la géométrie

Si le DFM remplace une référence existante, conservez le plan de montage et la masse réelle de l’ensemble. Faites justifier toute différence de guidage, de course ou d’amortissement. La mention « équivalent en force » est incomplète pour une charge déportée.

Après montage, la réception doit suivre le cycle prévu par le concepteur. L’[inertie d’un actionneur rotatif](/guides/verin-rotatif-pneumatique-couple-angle-inertie/) fournit un autre exemple de cette séparation entre capacité nominale et mouvement complet. Ici, aucun DFM n’est déclaré compatible sans cette vérification géométrique.
