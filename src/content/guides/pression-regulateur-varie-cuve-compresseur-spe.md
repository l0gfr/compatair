---
title: "Pression du régulateur qui varie avec la cuve : comprendre l’effet d’alimentation"
seoTitle: "Régulateur : variation avec la pression de cuve"
description: "Une pression aval monte quand l’amont baisse : expliquer l’effet d’alimentation SPE et préparer une comparaison de régulateurs avec leurs conditions."
pubDate: 2026-09-30
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile", "carrosserie-peinture"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["regulateur-air-pression-monte-arret-creep", "pressostat-compresseur-pression-enclenchement-differentiel", "mesurer-pression-dynamique-pistolet-peinture"]
sources:
  - https://www.swagelok.com/en/blog/managing-supply-pressure-effect-in-regulator
---

**La pression de sortie d’un régulateur peut dépendre de sa pression d’entrée, même si personne ne touche à la molette.** Si une variation revient au rythme de la cuve du compresseur, il faut examiner cette dépendance avant de multiplier les réglages au poste.

## L’effet de pression d’alimentation

Swagelok décrit le [Supply Pressure Effect, SPE](https://www.swagelok.com/en/blog/managing-supply-pressure-effect-in-regulator) comme une relation entre pression d’entrée et de sortie liée à la conception du régulateur. Sur les conceptions expliquées, une baisse de l’entrée peut augmenter la sortie. Un obturateur équilibré ou une réduction à deux étages peuvent réduire cet effet.

La définition du [SPE](/glossaire/#supply-pressure-effect) ne donne aucun coefficient universel à votre régulateur. Demandez la caractéristique de la référence, ses conditions et le domaine d’entrée prévu. Un second régulateur choisi sans ces informations n’est pas une correction automatiquement validée.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="pression-regulateur-varie-cuve-compresseur-spe-title pression-regulateur-varie-cuve-compresseur-spe-desc" style="font-family:system-ui,sans-serif"><title id="pression-regulateur-varie-cuve-compresseur-spe-title">Une molette fixe, une entrée variable</title><desc id="pression-regulateur-varie-cuve-compresseur-spe-desc">Principe qualitatif SPE décrit par Swagelok pour les conceptions concernées ; aucune amplitude universelle.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Une molette fixe, une entrée variable</text><circle cx="40" cy="76" r="15" fill="#d3eb56"/><text x="35" y="82" font-size="17" fill="#10281e" font-weight="700">1</text><text x="68" y="72" font-size="18" fill="#d3eb56" font-weight="700">Pression d’entrée diminue</text><text x="68" y="98" font-size="16" fill="#eef2e9">Le régulateur reçoit une autre alimentation</text><circle cx="40" cy="146" r="15" fill="#d3eb56"/><text x="35" y="152" font-size="17" fill="#10281e" font-weight="700">2</text><text x="68" y="142" font-size="18" fill="#d3eb56" font-weight="700">Sortie pouvant augmenter</text><text x="68" y="168" font-size="16" fill="#eef2e9">Effet dépendant de sa conception</text><circle cx="40" cy="216" r="15" fill="#d3eb56"/><text x="35" y="222" font-size="17" fill="#10281e" font-weight="700">3</text><text x="68" y="212" font-size="18" fill="#d3eb56" font-weight="700">Deux relevés synchronisés</text><text x="68" y="238" font-size="16" fill="#eef2e9">Comparer au cycle du compresseur</text></svg>
<figcaption>Principe qualitatif SPE décrit par Swagelok pour les conceptions concernées ; aucune amplitude universelle.</figcaption>
</figure>

## Relier les deux relevés au cycle de cuve

Le [guide du pressostat](/guides/pressostat-compresseur-pression-enclenchement-differentiel/) explique les pressions de reprise et d’arrêt. Conservez ces événements dans le relevé du poste, avec les pressions immédiatement en amont et en aval du régulateur et l’état du consommateur.

Notre proposition de diagnostic consiste à comparer plusieurs cycles représentatifs, sans déplacer les points de mesure. Une répétition corrélée mérite une analyse de dépendance ; elle ne démontre pas à elle seule que toute la variation vient du SPE.

## Trois courbes à demander au fournisseur

Demandez la dépendance à la pression amont, la caractéristique en débit et le comportement à l’arrêt du débit. Ces informations répondent à des conditions différentes. Une vanne plus grosse peut traiter une restriction de passage sans que le fournisseur ait pour autant documenté sa dépendance à l’alimentation.

Le [dossier creep](/guides/regulateur-air-pression-monte-arret-creep/) concerne le passage au siège fermé. Gardez ce défaut séparé dans le relevé si une montée aval continue existe aussi à amont stable.

Pour une comparaison de deux références, faites conserver la même plage d’entrée, la consigne, le débit demandé, le fluide et les conditions de mesure. Un chiffre de stabilité publié sous une autre alimentation ne suffit pas à classer les produits.

## Application à un poste de peinture

Le [contrôle de pression dynamique d’un pistolet](/guides/mesurer-pression-dynamique-pistolet-peinture/) mesure au point d’usage pendant le passage d’air. Si le poste est sensible, faites définir par le fournisseur du procédé la plage acceptable, puis confrontez-la à la plage de variation observée.

La variation n’est pas transformée ici en cause certaine de défaut de finition. Ce lien demande un examen du produit, du pistolet et du procédé. L’objectif du relevé est de donner au technicien les conditions exactes dans lesquelles l’alimentation change.

## Décider avec une réponse écrite

Une proposition de remplacement ou de montage à deux étages doit préciser le domaine obtenu et les contrôles de réception. Conservez la comparaison avec l’état initial et la pression de cuve correspondante.

Un résultat exploitable indique la variation mesurée dans le scénario défini. Il n’attribue pas au réseau une stabilité absolue sur toutes les pressions et tous les consommateurs.
