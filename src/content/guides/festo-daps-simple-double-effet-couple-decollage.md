---
title: "Festo DAPS : choisir simple ou double effet avec le couple réel de la vanne"
seoTitle: "Festo DAPS : simple effet, couple et vanne"
description: "Le couple nominal ne suffit pas pour automatiser une vanne. Rassembler le besoin de décollage, la pression au poste et la configuration de ressort."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["verin-rotatif-pneumatique-couple-angle-inertie", "verin-simple-double-effet-ressort-retour", "festo-daps-mw-volant-position-perte-air"]
sources: ["https://www.festo.com/media/catalog/202737_documentation.pdf"]
---

Deux actionneurs qui occupent le même volume ne rendent pas le même service. Pour les **DAPS**, Festo indique qu’à taille de boîtier identique, la version simple effet délivre la moitié du couple de la version double effet. La présence du ressort fait donc partie du choix, avec le besoin de la vanne et l’alimentation disponible.

Le [catalogue Festo DAPS, édition 2026/07, page 2](https://www.festo.com/media/catalog/202737_documentation.pdf#page=2) décrit un mécanisme Scotch yoke adapté aux couples de décollage des vannes de procédé. Ce mécanisme ne permet pas de réduire la sélection à une comparaison de deux nombres de couple nominal.

## Le couple de décollage appartient à la vanne

Le besoin de la vanne doit être documenté dans les conditions de procédé retenues : ouverture, fermeture et décollage, avec le fluide, la pression, la température et la configuration des sièges. Une vanne du même diamètre peut appartenir à une autre configuration ; son diamètre seul ne donne pas le couple nécessaire.

Transmettez ces exigences à Festo ou à l’intégrateur en demandant le modèle complet et la courbe de couple pertinente. Le guide sur les [actionneurs rotatifs](/guides/verin-rotatif-pneumatique-couple-angle-inertie/) explique pourquoi angle, charge et mouvement comptent. Ici, la sélection porte spécifiquement sur une vanne de procédé et son effort sur la course.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Les trois dossiers de sélection" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="daps-selection-title daps-selection-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="daps-selection-title">Les trois dossiers de sélection</title><desc id="daps-selection-desc">La sélection relie le besoin de la vanne, la configuration DAPS et l’alimentation. Le schéma ne propose aucun facteur de sécurité ni courbe de couple inventée.</desc><rect width="520" height="480" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Les trois dossiers de sélection</text><rect x="28" y="88" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="120" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Vanne et procédé</text><text x="45" y="154" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Couples requis selon la position</text><path d="M260 184v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="208" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="240" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Actionneur exact</text><text x="45" y="274" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Mode, courbe et ressort identifiés</text><path d="M260 304v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="328" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="360" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Alimentation au poste</text><text x="45" y="394" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Pression minimale réellement disponible</text></svg>
</div>

*La sélection relie le besoin de la vanne, la configuration DAPS et l’alimentation. Le schéma ne propose aucun facteur de sécurité ni courbe de couple inventée.*

## Le ressort se lit dans la référence complète

Le code de type du [catalogue, page 4](https://www.festo.com/media/catalog/202737_documentation.pdf#page=4) distingue le mode simple effet et plusieurs forces de ressort. La [table simple effet, page 6](https://www.festo.com/media/catalog/202737_documentation.pdf#page=6) précise que la pression minimale peut varier avec le nombre de ressorts. Une plage générique de la famille ne valide donc pas automatiquement chaque configuration.

Le code de ressort correspond aux pressions de connexion suivantes dans la page 4 :

| Code de ressort | Pression de connexion publiée |
| --- | ---: |
| 1 | 2,8 bar |
| 2 | 3,5 bar |
| 3 | 4,2 bar |
| 4 | 5,6 bar |

La table simple effet donne une pression nominale de **5,6 bar** et précise que le minimum varie avec les ressorts. Ces repères servent à identifier la configuration ; ils ne remplacent pas sa courbe de couple ni la pression disponible pendant la manœuvre.

Sur le devis, exigez la référence entière et les conditions de couple qui lui correspondent. Demandez aussi quel comportement est prévu quand l’air disparaît, en tenant compte de la vanne et de son montage. « Simple effet » décrit une architecture ; la position recherchée dans votre procédé doit être définie par l’ensemble livré.

Le guide [simple et double effet](/guides/verin-simple-double-effet-ressort-retour/) traite la différence de principe. Pour une commande manuelle complémentaire, le guide [DAPS MW](/guides/festo-daps-mw-volant-position-perte-air/) pose la question distincte de la position obtenue et confirmée.

## Faire vérifier la pression pendant le mouvement

La pression au compresseur ne suffit pas à décrire celle de l’actionneur lors de sa manœuvre. Préparez avec l’intégrateur les points et conditions de relevé autorisés. La sélection doit utiliser une alimentation minimale justifiée au poste, avec les autres consommateurs et les composants du circuit concernés.

Si cette alimentation ne permet pas le couple requis dans la configuration choisie, la réponse peut être une correction du réseau, un autre actionneur ou une autre architecture. Elle doit venir du dossier de sélection complet. Augmenter la pression jusqu’à ce que la vanne bouge n’établit ni la marge disponible ni la conformité de l’ensemble.

Le choix retenu doit être un **DAPS validé pour cette vanne et ces conditions**, avec une référence de ressort, une courbe applicable et une pression minimale au poste. Tant que ces éléments manquent, un verdict définitif de compatibilité compresseur-actionneur serait trop affirmatif.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
