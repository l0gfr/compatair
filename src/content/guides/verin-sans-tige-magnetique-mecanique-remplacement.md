---
title: "Vérin sans tige magnétique ou mécanique : que vérifier avant un remplacement ?"
seoTitle: "Vérin sans tige : couplage magnétique ou mécanique"
description: "Un vérin sans tige se remplace avec son couplage, son guidage et ses limites de charge. Lecture des séries SMC CY et MY pour préparer l’équivalence."
pubDate: 2026-09-30
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["verin-guide-festo-dfm-charge-deportee-moment", "force-verin-pneumatique-diametre-pression", "capteur-verin-reed-electronique-signal-position"]
sources:
  - https://www.smcworld.com/support/faq/en/s.do?ca_id=701&id=1657&lang=en
---

Deux vérins sans tige offrent la même course et occupent un espace comparable. **Leur couplage peut pourtant être différent.** Pour remplacer un actionneur, identifiez comment le piston entraîne le chariot avant de comparer la poussée ou le diamètre des raccords.

## La distinction SMC entre CY et MY

La [FAQ officielle SMC sur les vérins sans tige](https://www.smcworld.com/support/faq/en/s.do?ca_id=701&id=1657&lang=en) distingue le couplage mécanique des séries MY et le couplage magnétique des séries CY. Dans le second cas, les aimants du piston interne entraînent le chariot externe. SMC souligne que la pression de fonctionnement doit tenir compte de ce couplage magnétique.

Cette architecture impose une autre question que la force théorique du piston : l'entraînement du chariot est-il admissible pour l’effort et le mouvement envisagés ? La réponse vient de la documentation du modèle exact, avec son guidage et ses accessoires.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="verin-sans-tige-magnetique-mecanique-remplacement-title verin-sans-tige-magnetique-mecanique-remplacement-desc" style="font-family:system-ui,sans-serif"><title id="verin-sans-tige-magnetique-mecanique-remplacement-title">Identifier la transmission</title><desc id="verin-sans-tige-magnetique-mecanique-remplacement-desc">Distinction de principe d’après SMC. Les limites restent propres à la série et au montage.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Identifier la transmission</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Couplage mécanique</text><text x="32" y="97" font-size="16" fill="#eef2e9">Liaison mécanique piston-chariot</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Couplage magnétique</text><text x="32" y="167" font-size="16" fill="#eef2e9">Entraînement par les aimants</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Équivalence de remplacement</text><text x="32" y="237" font-size="16" fill="#eef2e9">Charge, guide, vitesse et détection</text></svg>
<figcaption>Distinction de principe d’après SMC. Les limites restent propres à la série et au montage.</figcaption>
</figure>

## Préparer une demande d’équivalence complète

Envoyez la course, la vitesse prévue, la masse déplacée, les efforts du procédé, l’orientation et les distances de déport. Joignez le plan de montage et l’état du guidage extérieur éventuel. La [lecture des moments sur un vérin guidé](/guides/verin-guide-festo-dfm-charge-deportee-moment/) montre pourquoi une masse seule ne décrit pas la sollicitation.

| Critère | Confirmation à obtenir |
| --- | --- |
| Couplage interne/externe | Magnétique ou mécanique, référence exacte |
| Effort d’entraînement | Limite applicable et cas défavorable |
| Guidage | Charges, moments et montage autorisés |
| Course et vitesse | Domaine admis pour le cycle |
| Arrêt aux extrémités | Amortissement et énergie admissible |
| Détection | Capteurs et positions attendues |

Notre grille ne classe pas une technologie comme supérieure dans tous les cas. Elle évite de déclarer équivalents deux appareils dont les limites sont décrites différemment.

## Un piston détecté n’est pas toute la chaîne de mouvement

Demandez où sont placés les capteurs et quel organe ils détectent. Cette question est particulièrement utile lorsqu’un retour de position intervient dans la séquence : le dossier doit indiquer la relation entre le signal et la position attendue du chariot.

Le [guide des capteurs magnétiques](/guides/capteur-verin-reed-electronique-signal-position/) explique le signal de l’aimant du piston. Il ne doit pas être présenté comme une mesure universelle de la position ou de la charge de tous les éléments entraînés.

## Conserver les conditions de pression dans le remplacement

La [force théorique d’un vérin](/guides/force-verin-pneumatique-diametre-pression/) est une première lecture. Sur une solution magnétique, augmenter l’alimentation pour obtenir davantage de poussée ne constitue pas une validation du couplage. Faites confirmer les limites et le réglage prévu avec la référence proposée.

La réception doit porter sur le cycle complet, les extrémités et les retours de position attendus, dans les conditions approuvées par le concepteur. Conservez la comparaison signée par le fournisseur dans le dossier de maintenance. Aucune charge admissible ni vitesse universelle n’est attribuée ici à l’ensemble des vérins sans tige.
