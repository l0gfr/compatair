---
title: "Clé à chocs et roues : couple de desserrage, approche et serrage final"
seoTitle: "Clé à chocs : quel couple pour serrer une roue ?"
description: "625 Nm annoncés ne sont pas un réglage de roue. Distinguez couple inverse, plage de travail et serrage final, avec les notices CP7732C et CP7748TL."
pubDate: 2026-09-25
updatedDate: 2026-09-26
category: "Utiliser"
audiences: [particulier, professionnel]
metiers: [garage-automobile, atelier-poids-lourds]
readingTime: 6
relatedCalculatorTool: chicago-pneumatic-cp7732c
relatedGuides: [compresseur-pour-cle-a-chocs-pneumatique, cle-a-chocs-manque-couple-diagnostic, huile-cle-a-chocs-pneumatique-lubrification]
sources:
  - https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940176240.pdf
  - https://tools.cp.com/pt-pt/expert-corner/blog/the-nuts-and-bolts-of-pneumatic-torque-limited-impact-wrenches-how-to-prevent-overtightening
---

**Le couple maximal affiché pour une clé à chocs n’est pas le couple de serrage à appliquer à une roue.** La valeur requise provient de la documentation du véhicule et du montage concernés. Chicago Pneumatic précise, y compris pour une clé à chocs à couple limité, que le serrage final doit être effectué avec une clé dynamométrique étalonnée selon les instructions du constructeur du véhicule.

Cette distinction change la manière de comparer les outils. Il faut d’abord déterminer leur rôle dans l’opération, puis examiner séparément leur alimentation en air. Une clé bien alimentée ne devient pas, pour cette seule raison, un dispositif de serrage final contrôlé.

## Les trois nombres que l’on rencontre dans une fiche

| Libellé | Ce qu’il décrit | Ce qu’il ne faut pas en déduire |
| --- | --- | --- |
| Couple maximal en marche arrière | Performance déclarée pour desserrer | Une consigne de serrage de roue |
| Plage de travail en marche avant | Domaine annoncé pour l’outil | Une précision garantie pour chaque position |
| Couple prescrit pour l’assemblage | Exigence du véhicule et du montage | Une valeur commune à toutes les roues |

La [fiche CP7732C](https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321) publie **625 Nm en marche arrière** et une plage de travail en marche avant de **70 à 387 Nm**. Elle indique aussi que cette référence n’est pas à couple limité. Ces nombres documentent l’outil ; ils ne définissent pas le réglage final d’une fixation donnée.

La [fiche CompatAir de la CP7732C](/outils-pneumatiques/cle-a-chocs-chicago-pneumatic-cp7732c/) relie les données à leurs sources. Aucun couple véhicule n’y est fabriqué à partir de la puissance de la clé.

<div class="article-infographic" tabindex="0" role="group" aria-label="Trois rôles à distinguer lors du travail sur une roue">
<svg viewBox="0 0 760 290" role="img" aria-labelledby="couple-title couple-desc" xmlns="http://www.w3.org/2000/svg">
<title id="couple-title">Desserrer, approcher, serrer selon prescription</title><desc id="couple-desc">Le couple inverse décrit l’outil au desserrage. L’approche utilise l’outil prévu par la procédure. Le serrage final suit la prescription du véhicule avec un outil de serrage contrôlé.</desc>
<rect width="760" height="290" rx="20" fill="#eef2e9"/><text x="32" y="42" font-size="22" font-weight="700" fill="#143426">Le chiffre maximal n’est pas la consigne de roue</text>
<g fill="#143426"><rect x="32" y="80" width="218" height="142" rx="12"/><rect x="271" y="80" width="218" height="142" rx="12"/></g><rect x="510" y="80" width="218" height="142" rx="12" fill="#d3eb56"/>
<g text-anchor="middle" font-size="19"><text x="141" y="119" fill="white">Desserrage</text><text x="380" y="119" fill="white">Approche</text><text x="619" y="119" fill="#143426">Serrage final</text></g>
<g text-anchor="middle" font-size="15"><text x="141" y="165" fill="white">Couple inverse</text><text x="141" y="190" fill="white">déclaré par l’outil</text><text x="380" y="165" fill="white">Outil et méthode</text><text x="380" y="190" fill="white">prévus pour l’opération</text><text x="619" y="165" fill="#143426">Prescription véhicule</text><text x="619" y="190" fill="#143426">clé dynamométrique</text></g>
<text x="32" y="258" font-size="14" fill="#35473d">Schéma des rôles, sans procédure de montage ni couple universel.</text>
</svg>
</div>

## « Torque limited » ne dispense pas du serrage final

La [notice CP7748TL et CP7748TL-2, numéro 8940176240, page 6](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940176240.pdf) réserve la clé à couple limité à l’approche initiale des fixations de roues. Elle demande un serrage final manuel avec une clé dynamométrique étalonnée, suivant le constructeur du véhicule.

Il faut donc lire « couple limité » comme une caractéristique de la phase prévue par cette notice, et non comme une attestation automatique du couple final. La famille d’outil et le nom commercial ne remplacent pas la référence exacte et la documentation applicable à l’exemplaire.

Le [dossier technique CP sur les clés à couple limité](https://tools.cp.com/pt-pt/expert-corner/blog/the-nuts-and-bolts-of-pneumatic-torque-limited-impact-wrenches-how-to-prevent-overtightening) rappelle aussi cette séparation. Pour comparer une clé classique et une version TL, demandez quelle fonction chacune doit remplir dans votre procédure d’atelier, au lieu de comparer seulement leurs couples maximaux.

## Peut-on régler le couple en diminuant la pression d’air ?

Un réglage de pression n’est pas une mesure du couple réellement appliqué à la fixation. En l’absence de caractérisation du système complet, convertir une position de régulateur en un nombre de Nm reviendrait à inventer une relation.

Conservez donc deux relevés distincts : la pression dynamique et le besoin d’air servent à vérifier l’alimentation ; la prescription du véhicule et l’outil de serrage servent à préparer le contrôle de l’assemblage. Si un fournisseur annonce une correspondance pression/couple pour un équipement précis, demandez ses conditions, sa plage et son protocole avant de l’utiliser.

Une clé qui manque de force appelle le [diagnostic de pression et de couple](/guides/cle-a-chocs-manque-couple-diagnostic/). Relever la pression au-delà de la limite constructeur n’est pas un moyen de rendre le serrage plus fiable.

## Les informations à réunir pour un poste roues

Préparez le dossier avant l’intervention : identification du véhicule, type de roue et de fixation, prescription de serrage applicable, état et compatibilité des accessoires, outil d’approche retenu, clé dynamométrique adaptée et statut de son contrôle. La documentation du montage doit aussi préciser les conditions d’application du couple ; ne leur substituez pas une habitude d’atelier.

Cette liste est une trame documentaire CompatAir. Elle ne constitue pas une procédure de levage, de démontage ou de remontage de roue. Si la référence de fixation ou la prescription est inconnue, le dossier reste incomplet ; un chiffre trouvé pour un autre véhicule ne le complète pas.

Pour un atelier à plusieurs postes, reliez ce dossier au [dimensionnement du garage automobile](/guides/dimensionner-compresseur-garage-automobile/) ou de l’[atelier poids lourds](/guides/dimensionner-poste-pneumatique-poids-lourds/). Le scénario de simultanéité concerne l’air disponible, pas la valeur de serrage des roues.

## Ce que CompatAir peut vérifier, et ce qui reste au poste

La page [quel compresseur pour une CP7732C ?](/quel-compresseur-pour/cle-a-chocs-chicago-pneumatic-cp7732c/) rapproche son besoin documenté des débits restitués du catalogue. Le résultat traite l’alimentation pneumatique avec les limites exposées. Il ne certifie pas l’assemblage final.

Dans la fiche d’intervention, notez donc séparément l’identification de l’outil, la source du couple prescrit et le contrôle réellement effectué. Écrire « clé à chocs compatible » à la place de ces éléments ferait disparaître une partie essentielle de l’information.

## Faut-il acheter la clé affichant le plus de Nm ?

Le chiffre maximal peut participer au choix pour une opération de desserrage, avec les conditions de mesure et la référence précise. Il ne classe pas à lui seul les outils pour un poste roues. La procédure, l’accès, les accessoires admis, la maîtrise du serrage et la capacité d’alimentation font partie de la décision.

Les sources ont été consultées le 25 septembre 2026. Les performances citées sont déclarées par Chicago Pneumatic ; aucun test de serrage ni classement terrain n’est revendiqué.

Le dossier [clé à impulsions, coupure et alimentation](/guides/cle-a-impulsions-ou-cle-a-chocs-air-comprime/) prolonge cette distinction pour les outils d’assemblage : une fonction d’arrêt ne démontre pas à elle seule la mesure du couple final.
