---
title: "Capteur de vérin Reed ou électronique : remplacer sans perdre le signal
  de position"
seoTitle: "Capteur vérin Reed ou électronique : remplacer"
description: "Le vérin bouge mais le cycle attend sa position : vérifier le
  capteur magnétique, la rainure, le type de sortie et le signal reçu par
  l’automate."
pubDate: 2026-09-30
category: Utiliser
audiences: [ "professionnel" ]
metiers: [ "maintenance-industrielle" ]
readingTime: 3
reviewStatus: internal
relatedGuides:
  [
    "remise-service-machine-pneumatique-arret-prolonge",
    "verin-simple-double-effet-ressort-retour",
    "fiche-intervention-air-comprime"
  ]
sources:
  - https://www.festo.com/gb/en/e/blog/perspectives/cylinder-sensors-reed-or-solid-state-id_1402189
  - https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf
updatedDate: 2026-10-03
---

Le vérin arrive à sa position, mais la machine attend encore. **Avant d’augmenter la pression ou de remplacer le vérin, séparez le mouvement observé et le signal de position reçu.** Un capteur, sa fixation et son interface peuvent être en cause dans cette deuxième chaîne.

## L’aimant du piston, cible du capteur

Le [dossier Festo Reed et électronique](https://www.festo.com/gb/en/e/blog/perspectives/cylinder-sensors-reed-or-solid-state-id_1402189) explique la détection de l’aimant du piston. Un contact Reed utilise des lamelles mobiles ; un capteur électronique traite le champ magnétique avec des éléments semi-conducteurs. L’électronique évite le contact mécanique interne, mais la compatibilité avec l’installation doit toujours être vérifiée.

Ce signal décrit la détection au point de montage. Il ne mesure pas directement l’effort exercé sur la pièce, la pression de la chambre ou la qualité d’un serrage. Gardez ces critères hors du simple voyant de fin de course.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="capteur-verin-reed-electronique-signal-position-title capteur-verin-reed-electronique-signal-position-desc" style="font-family:system-ui,sans-serif"><title id="capteur-verin-reed-electronique-signal-position-title">Suivre le signal</title><desc id="capteur-verin-reed-electronique-signal-position-desc">Chaîne de diagnostic proposée : position, détection et réception par la commande sont relevées séparément.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Suivre le signal</text><circle cx="40" cy="76" r="15" fill="#d3eb56"/><text x="35" y="82" font-size="17" fill="#10281e" font-weight="700">1</text><text x="68" y="72" font-size="18" fill="#d3eb56" font-weight="700">Piston et aimant</text><text x="68" y="98" font-size="16" fill="#eef2e9">La position mécanique est-elle atteinte ?</text><circle cx="40" cy="146" r="15" fill="#d3eb56"/><text x="35" y="152" font-size="17" fill="#10281e" font-weight="700">2</text><text x="68" y="142" font-size="18" fill="#d3eb56" font-weight="700">Capteur monté</text><text x="68" y="168" font-size="16" fill="#eef2e9">Le signal local change-t-il ?</text><circle cx="40" cy="216" r="15" fill="#d3eb56"/><text x="35" y="222" font-size="17" fill="#10281e" font-weight="700">3</text><text x="68" y="212" font-size="18" fill="#d3eb56" font-weight="700">Entrée de commande</text><text x="68" y="238" font-size="16" fill="#eef2e9">Le signal reçu correspond-il ?</text></svg>
<figcaption>Chaîne de diagnostic proposée : position, détection et réception par la commande sont relevées séparément.</figcaption>
</figure>

## Préparer trois observations distinctes

Demandez au mainteneur de noter la position mécanique, l’état du voyant s’il existe et l’état de l’entrée automate, dans le scénario autorisé. Une différence entre ces observations aide à situer la recherche. Elle ne confirme pas à distance une panne du capteur.

| Observations disponibles | Suite de la recherche |
| --- | --- |
| Position atteinte, voyant absent | Référence, montage et détection à vérifier |
| Voyant présent, entrée absente | Interface, liaison et entrée à examiner |
| Entrée présente, cycle bloqué | Conditions de séquence à relire |
| Position non atteinte | Revenir au mouvement et au circuit d’air |

Le [guide simple ou double effet](/guides/verin-simple-double-effet-ressort-retour/) aide à identifier le fonctionnement mécanique. Ne changez pas plusieurs chaînes à la fois : la réception doit pouvoir relier la correction au défaut observé.

## La rainure ne suffit pas pour commander

Préparez le code complet du capteur et du vérin, le type de rainure, la fixation, la tension, la fonction de contact ou de sortie et le connecteur. Faites confirmer la correspondance électrique avec l’entrée de commande. Un même connecteur extérieur ne garantit pas les mêmes broches ou la même sortie.

Festo décrit des cas où le contact Reed garde un intérêt, notamment un contact libre de potentiel. Il ne faut donc pas remplacer systématiquement tout Reed par une électronique sans vérifier la fonction requise. Les valeurs de courant et de température de chaque référence restent à lire dans sa fiche, sans généraliser les valeurs d’une famille.

Le support mécanique peut limiter le choix du capteur. Sur GP200, Zimmer réserve l’inductif aux variantes équipées de blocs de serrage et avertit qu’un champ externe peut déplacer le seuil magnétique. Le [guide de détection GP200](/guides/zimmer-gp200-capteur-magnetique-inductif/) distingue ces deux mécanismes et ne transpose aucun entrefer d’un capteur à l’autre. [Zimmer GP200, notice d’installation et d’utilisation DDOC00232 V8](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf#page=9).

## Conserver le réglage de position validé

Documentez la position et la fixation retenues après intervention, puis le contrôle effectué. La [fiche d’intervention](/guides/fiche-intervention-air-comprime/) peut conserver la référence ancienne, la nouvelle et le résultat sur l’entrée automate.

Lors d’une [remise en service](/guides/remise-service-machine-pneumatique-arret-prolonge/), faites vérifier les retours de position prévus par la procédure. Un déplacement du capteur qui fait avancer le cycle ne démontre pas que la position mécanique attendue est devenue correcte.
