---
title: "Vérin qui tape en fin de course : amortissement PPV, PPS ou problème de réglage ?"
seoTitle: "Vérin qui tape : amortissement PPV ou PPS"
description: "Un vérin cogne en bout de course : identifier son amortissement, la charge et la vitesse avant de modifier le débit ou la pression d’alimentation."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["regler-vitesse-verin-pneumatique-echappement", "force-verin-pneumatique-diametre-pression", "vibrations-outils-emission-exposition-a8"]
sources:
  - https://www.festo.com/ie/en/e/blog/in-practice/cylinder-cushioning-the-three-most-common-methods-id_1518844
---

**Le réglage de vitesse et l’amortissement de fin de course ne remplissent pas la même fonction.** Un vérin peut parcourir sa course à la vitesse souhaitée, puis frapper fortement en arrivant à la butée. Chercher uniquement une vis de débit fait alors manquer le contrôle de l’énergie à arrêter.

## Identifier P, PPV ou PPS sur la référence

Festo distingue dans son [guide d’amortissement des vérins](https://www.festo.com/ie/en/e/blog/in-practice/cylinder-cushioning-the-three-most-common-methods-id_1518844) l’amortissement élastique P, le pneumatique réglable PPV et le pneumatique autoréglable PPS. Le PPV retient un volume d’air en fin de course et son échappement se règle ; le PPS adapte cet échappement sans vis de réglage. Les versions autoréglables gardent un domaine de charge et de vitesse, elles ne sont pas universelles.

Relevez le code complet sur le vérin installé. Un corps de même diamètre peut cacher une autre variante. L’absence de vis sur une version [PPS](/glossaire/#amortissement-ppv-pps) ne prouve pas qu’une pièce de réglage a disparu.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="verin-tape-fin-course-amortissement-ppv-pps-title verin-tape-fin-course-amortissement-ppv-pps-desc" style="font-family:system-ui,sans-serif"><title id="verin-tape-fin-course-amortissement-ppv-pps-title">Arrêter le mouvement</title><desc id="verin-tape-fin-course-amortissement-ppv-pps-desc">Principe qualitatif d’après Festo. Le domaine charge-vitesse appartient à la référence exacte.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Arrêter le mouvement</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">P : élément élastique</text><text x="32" y="97" font-size="16" fill="#eef2e9">Domaine d’énergie limité</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">PPV : air, réglage manuel</text><text x="32" y="167" font-size="16" fill="#eef2e9">Réglage selon charge et mouvement</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">PPS : air, autoréglable</text><text x="32" y="237" font-size="16" fill="#eef2e9">Vérifier tout de même le domaine</text></svg>
<figcaption>Principe qualitatif d’après Festo. Le domaine charge-vitesse appartient à la référence exacte.</figcaption>
</figure>

## Relever le changement qui précède le choc

Le problème est-il apparu avec une masse plus lourde, un déplacement plus rapide, une course modifiée ou après une intervention ? Notez ces événements avant de toucher aux réglages. Demandez la vitesse à l’arrivée dans la zone d’amortissement ; la vitesse moyenne calculée sur toute la course ne décrit pas nécessairement cet instant.

Le [guide du réglage à l’échappement](/guides/regler-vitesse-verin-pneumatique-echappement/) concerne la maîtrise du mouvement. Le [dossier sur la force](/guides/force-verin-pneumatique-diametre-pression/) concerne l’effort. Une force suffisante ne confirme pas la capacité à arrêter la masse en fin de déplacement.

## Faire vérifier le point charge-vitesse

Transmettez au concepteur la masse mobile complète, l’orientation, la course, la vitesse demandée et le cycle. Ajoutez les accessoires qui bougent avec le vérin. Faites comparer ces données au domaine d’amortissement de la référence, puis définir les contrôles de reprise.

| Observation | Question à résoudre |
| --- | --- |
| Choc à une seule extrémité | Même charge et même vitesse dans les deux sens ? |
| Défaut après hausse de cadence | Nouveau point de fonctionnement admissible ? |
| Défaut après échange du vérin | Variante et accessoires identiques ? |
| Réglage modifié sans trace | Position initiale et procédure constructeur disponibles ? |

Ce tableau organise l’enquête ; il ne permet pas de conclure à un joint ou à une vis défectueuse. Une machine qui frappe doit être mise dans son état d’intervention sûr avant examen, selon sa procédure.

## Ne pas convertir le bruit en mesure d’énergie

Le son d’un choc et une valeur de vibrations ne donnent pas directement l’énergie absorbée. Si une modification est validée, consignez le cycle et les observations avant/après dans les mêmes conditions. Le [dossier vibrations](/guides/vibrations-outils-emission-exposition-a8/) explique une autre confusion fréquente entre valeur déclarée et observation d’usage.

Pour clôturer le diagnostic, demandez une justification du domaine d’amortissement et une réception du cycle complet, y compris le redémarrage et les charges extrêmes prévues. « Le choc s’entend moins » ne documente pas, à lui seul, cette conformité au point de travail.
