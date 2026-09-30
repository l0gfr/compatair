---
title: "PNP ou NPN : pourquoi le capteur de vérin s’allume sans être vu par l’automate"
seoTitle: "Capteur PNP ou NPN : vérifier l’entrée automate"
description: "Voyant allumé, entrée automate absente : distinguer PNP/NPN, NO/NC et brochage lors du remplacement d’un capteur sur une machine pneumatique."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["capteur-verin-reed-electronique-signal-position", "remise-service-machine-pneumatique-arret-prolonge", "fiche-intervention-air-comprime"]
sources:
  - https://www.ifm.com/gb/en/gb/landing-page-uk/proximity-sensors-explained-types-applications-and-benefits
  - https://www.festo.com/gb/en/e/blog/perspectives/cylinder-sensors-reed-or-solid-state-id_1402189
---

**PNP/NPN décrit la sortie électrique ; NO/NC décrit sa logique.** Lire seulement « capteur 24 V » ou la forme du connecteur peut conduire à acheter une référence qui détecte bien le piston mais ne correspond pas à l’entrée de l’automate.

## Deux informations à ne pas fusionner

Dans son [explication des capteurs de proximité](https://www.ifm.com/gb/en/gb/landing-page-uk/proximity-sensors-explained-types-applications-and-benefits), ifm distingue PNP, sortie fournissant un potentiel positif lorsqu’elle commute, et NPN, sortie ramenée vers la masse. Le choix doit correspondre à la configuration de l’entrée de commande.

La logique normalement ouverte ou normalement fermée répond à une autre question : dans quel état la sortie commute-t-elle en présence de la cible ? Relevez les deux caractéristiques dans la fiche exacte. Un capteur NPN n’est pas une variante « normalement fermée » d’un PNP.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="capteur-pnp-npn-entree-automate-verin-title capteur-pnp-npn-entree-automate-verin-desc" style="font-family:system-ui,sans-serif"><title id="capteur-pnp-npn-entree-automate-verin-title">Sortie et logique</title><desc id="capteur-pnp-npn-entree-automate-verin-desc">Aide de lecture : les couples PNP/NPN et NO/NC décrivent deux dimensions différentes.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Sortie et logique</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">PNP / NPN</text><text x="32" y="97" font-size="16" fill="#eef2e9">Comment la sortie électrique commute</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">NO / NC</text><text x="32" y="167" font-size="16" fill="#eef2e9">Dans quel état logique elle commute</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Brochage / entrée</text><text x="32" y="237" font-size="16" fill="#eef2e9">Comment le signal rejoint la commande</text></svg>
<figcaption>Aide de lecture : les couples PNP/NPN et NO/NC décrivent deux dimensions différentes.</figcaption>
</figure>

## Faire parler le symptôme

Si le voyant change au passage du piston alors que l’entrée automate ne change pas, notez cette différence. Elle situe une chaîne à examiner, sans exclure un câble, un brochage, une alimentation ou une entrée défectueuse. Le [guide Reed et électronique](/guides/capteur-verin-reed-electronique-signal-position/) traite la détection magnétique en amont.

Préparez les références du capteur ancien et du remplaçant, celle du module d’entrée et le schéma électrique de la machine. Faites comparer les fiches par le mainteneur habilité pour cette intervention. La couleur d’un câble ou une habitude géographique ne remplace pas le brochage fabricant.

| À comparer | Question à résoudre |
| --- | --- |
| PNP ou NPN | L’entrée attend-elle ce type de sortie ? |
| NO ou NC | La logique correspond-elle au programme ? |
| Tension et courant | Le domaine de fonctionnement convient-il ? |
| Connecteur et broches | La liaison est-elle celle du schéma ? |
| Fonction du capteur | Détection et usage compatibles avec le vérin ? |

## Éviter le dépannage qui change le sens du signal

Inverser la logique dans le programme pour « retrouver le cycle » modifie une autre partie du système. Avant toute modification, le responsable de la machine doit examiner les conditions de marche, d’arrêt et de défaut qui utilisent l’entrée. Le remplacement d’un composant doit conserver une traçabilité claire.

Les diagnostics électriques se font dans les conditions de sécurité de la machine par les personnes compétentes. Ce guide ne fournit pas de schéma improvisé pour relier une sortie incompatible à une entrée.

## Réceptionner aussi l’absence de détection

Le contrôle ne doit pas s’arrêter au voyant allumé. Faites vérifier les états avec la cible dans et hors de la zone attendue, puis leur correspondance dans la séquence prévue. Enregistrez ces observations avec les deux références dans la [fiche d’intervention](/guides/fiche-intervention-air-comprime/).

La [remise en service](/guides/remise-service-machine-pneumatique-arret-prolonge/) doit tenir compte des vérifications définies par le concepteur. Un automate qui reçoit enfin un signal ne valide pas automatiquement le positionnement du capteur ni toutes les conditions de sécurité du cycle.
