---
title: "Blocage de tige DSNU-KP : maintenir une position ne valide pas une fonction de sécurité"
seoTitle: "DSNU-KP : blocage de tige et maintien de charge"
description: "Vérin DSNU-KP avec unité de serrage : distinguer force de maintien, arrêt du mouvement, pression résiduelle et fonction de sécurité de la machine."
pubDate: 2026-09-30
category: Installer
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["remise-service-machine-pneumatique-arret-prolonge", "couper-air-comprime-machine-arret-week-end", "force-verin-pneumatique-diametre-pression"]
sources:
  - https://www.festo.com/media/catalog/204326_documentation.pdf
---

**Une unité de blocage sur la tige ne suffit pas à déclarer qu’une charge est sécurisée pour une intervention.** Le dossier doit expliquer la fonction attendue : maintien d’une position, immobilisation lors d’un événement ou protection des personnes. Ces exigences ne sont pas interchangeables.

## Lire l’avertissement DSNU-KP

La [documentation Festo DSNU, partie DSNU-KP avec unité de serrage](https://www.festo.com/media/catalog/204326_documentation.pdf), édition 2026/08, publie des forces de maintien et précise que des mesures supplémentaires sont nécessaires pour les applications liées à la sécurité. Elle indique que le produit seul, sans ces mesures, ne convient pas comme composant de commande orienté sécurité.

Il faut donc identifier l’unité et sa fonction dans l’architecture entière. Une colonne de force de maintien ne documente pas un arrêt dynamique à n’importe quelle vitesse, ni une autorisation d’entrer dans la zone machine.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="blocage-tige-verin-dsnu-kp-maintien-securite-title blocage-tige-verin-dsnu-kp-maintien-securite-desc" style="font-family:system-ui,sans-serif"><title id="blocage-tige-verin-dsnu-kp-maintien-securite-title">Trois questions à séparer</title><desc id="blocage-tige-verin-dsnu-kp-maintien-securite-desc">L’avertissement Festo porte sur le produit seul. La validation appartient à l’architecture et à sa fonction.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Trois questions à séparer</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Maintien</text><text x="32" y="97" font-size="16" fill="#eef2e9">Quel effort à quelle position ?</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Arrêt du mouvement</text><text x="32" y="167" font-size="16" fill="#eef2e9">Quelle énergie et quel événement ?</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Sécurité des personnes</text><text x="32" y="237" font-size="16" fill="#eef2e9">Quels moyens et quelle validation ?</text></svg>
<figcaption>L’avertissement Festo porte sur le produit seul. La validation appartient à l’architecture et à sa fonction.</figcaption>
</figure>

## Rédiger la fonction en une phrase observable

« La pièce doit rester en place pendant le contrôle » est encore incomplet. Précisez la masse, l’orientation, l’effort externe possible, la position initiale et l’événement qui déclenche le maintien. Ajoutez les situations prévues de perte d’air et de perte électrique.

Faites répondre le concepteur sur la fonction, les moyens et les contrôles nécessaires. Ne transposez pas le fonctionnement d’une unité à une autre parce que les deux portent le mot « blocage ». La force du [vérin moteur](/guides/force-verin-pneumatique-diametre-pression/) et celle de maintien restent deux données séparées.

## Cartographier les pressions et les états

Notre proposition de fiche distingue l’état de la tige, celui de l’unité de serrage et les pressions des volumes concernés. Elle permet de préparer la discussion technique, sans donner une procédure de consignation universelle.

| Événement prévu | Réponse à documenter |
| --- | --- |
| Arrêt normal du cycle | Position et état du serrage |
| Perte d’alimentation | Comportement établi par l’architecture |
| Intervention sur le circuit | Énergies et charges prises en compte |
| Remise sous pression | Conditions de déblocage et de reprise |

Une pression nulle au départ général ne suffit pas à décrire tous les volumes d’un circuit. Le [guide de coupure d’air](/guides/couper-air-comprime-machine-arret-week-end/) organise le scénario d’arrêt ; les contrôles propres à la machine restent à définir.

## Faire du redémarrage une partie du dossier

Le moment où le serrage se libère doit être identifié dans la logique de reprise. Conservez le schéma, les réglages approuvés et les observations de réception. Une position maintenue pendant l’arrêt ne prouve pas le comportement lors du rétablissement de l’alimentation.

La [remise en service après un arrêt prolongé](/guides/remise-service-machine-pneumatique-arret-prolonge/) aide à préparer cette séquence avec les responsables de la machine. Ce guide est une lecture de périmètre documentaire, sans certification de sécurité ni essai de chute de charge.
