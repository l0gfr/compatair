---
title: "Piab piCOBOT L : pourquoi l’économiseur reste coupé jusqu’à la fin du cycle"
seoTitle: "piCOBOT L : aspiration continue après ACM"
description: "L’ACM peut suspendre l’économie d’air pendant le cycle sur piCOBOT L. Lire les réglages réellement actifs et chercher la reprise de vide répétée."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "ejecteur-schmalz-scpsi-economiseur-air-cycles"
  - "piab-pisave-esl-pompe-clapet-non-retour"
  - "ventouse-piece-poreuse-debit-vide"
sources:
  - "https://www.piab.com/globalassets/productimages/0247816_rev03_picobot_l_general-en.pdf"
---

Le piCOBOT L atteint le vide puis recommence à consommer en continu sur une pièce difficile. Ce comportement peut relever de sa surveillance **ACM** : la [notice piCOBOT L, page 27](https://www.piab.com/globalassets/productimages/0247816_rev03_picobot_l_general-en.pdf#page=27) décrit la suspension de l’économie d’air pour le reste du cycle lorsque les reprises de la vanne sont trop rapprochées.

La décision utile est de reconstituer les reprises et le mode actif. Désactiver la surveillance pour retrouver une consommation intermittente n’établit pas que la prise est fiable. L’ACM protège la durée de vie des vannes ; le maintien de la pièce reste un autre critère.

## Lire les paramètres de l’appareil, sans recopier un défaut contradictoire

Le document présente des valeurs différentes entre le tableau des préréglages, page 22, et la description ACM, page 27. Pour le délai, il affiche **5 secondes** dans le premier et **3 secondes** dans la seconde ; les nombres de reprises par défaut divergent également. Relevez les valeurs actives sur votre appareil pour interpréter son cycle.

Photographiez le menu de votre unité et gardez sa référence, sa version et les paramètres ACM réellement lus. Faites confirmer la définition du compteur et de la fenêtre par Piab si leur interprétation est nécessaire à une modification. Cette incohérence documentaire ne permet pas de conclure que votre machine est mal réglée.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="piab-picobot-l-acm-aspiration-continue-cycle-title piab-picobot-l-acm-aspiration-continue-cycle-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="piab-picobot-l-acm-aspiration-continue-cycle-title">ACM agit sur le cycle en cours</title><desc id="piab-picobot-l-acm-aspiration-continue-cycle-desc">Chronologie qualitative de la notice. Les valeurs par défaut ACM divergent dans le document ; aucun seuil arbitré n’est représenté.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">ACM agit sur le cycle en cours</text><circle cx="46" cy="86" r="18" fill="#d3eb56"/><text x="46" y="93" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">1</text><text x="80" y="83" font-size="22" fill="#eef2e9" font-weight="700">Reprises de la vanne</text><text x="80" y="111" font-size="19" fill="#8abfa3">Compter avec les réglages lus</text><path d="M46 108V147" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="168" r="18" fill="#d3eb56"/><text x="46" y="175" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">2</text><text x="80" y="165" font-size="22" fill="#eef2e9" font-weight="700">Surveillance ACM déclenchée</text><text x="80" y="193" font-size="19" fill="#8abfa3">Économie suspendue</text><path d="M46 190V229" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="250" r="18" fill="#d3eb56"/><text x="46" y="257" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">3</text><text x="80" y="247" font-size="22" fill="#eef2e9" font-weight="700">Fin du cycle</text><text x="80" y="275" font-size="19" fill="#8abfa3">Analyser prise et fuites avant réglage</text></svg>
<figcaption>Chronologie qualitative de la notice. Les valeurs par défaut ACM divergent dans le document ; aucun seuil arbitré n’est représenté.</figcaption>
</figure>


## Situer la reprise par rapport au seuil de présence

Pour l’économie manuelle, la notice impose **S2>S1** et **S2−hystérésis>S1**. Ces relations servent à lire l’ordre des seuils ; elles ne donnent pas la valeur de vide nécessaire à votre pièce. Le mode ALD, page 26, détermine son niveau à partir du vide atteignable à chaque cycle.

Relevez le mode manuel ou ALD, l’état de présence de pièce, la chronologie des reprises et l’état ACM. Conservez ces événements sur la même période. Une moyenne de consommation seule ne distingue pas une suspension de régulation d’une variation de matière ou d’un défaut de liaison.

Le [guide IBO et BOC](/guides/piab-picobot-l-ibo-boc-liberation-piece/) traite ensuite la fin de prise et la libération. Son retour de soufflage ne remplace pas le suivi des reprises de vide.

## Chercher ce qui oblige à recharger

Le [dossier des pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) permet d’examiner l’interface pièce-ventouse. Comparez, dans une procédure autorisée, la prise habituelle et celle qui déclenche le comportement. Gardez ventouse, pièce et trajet de vide identifiés ; évitez plusieurs changements de réglage dans le même essai.

| Événement dans le cycle | Interprétation à vérifier |
| --- | --- |
| Recharges rapprochées puis ACM | Suspension de l’économie décrite par la notice |
| Niveau de présence non atteint | Prise à examiner avant toute optimisation énergétique |
| Comportement lié à une matière | Interface et mode de régulation à confronter |
| Menu incompatible avec le tableau lu | Version et définition à confirmer chez Piab |

Le [guide Schmalz de l’économiseur](/guides/ejecteur-schmalz-scpsi-economiseur-air-cycles/) traite une autre logique de régulation ; ses seuils ne sont pas ceux du piCOBOT L. De même, le [piSAVE ESL](/guides/piab-pisave-esl-pompe-clapet-non-retour/) est un autre dispositif. L’action recherchée ici est une prise validée et une explication du cycle réel, puis seulement une reprise de l’analyse de consommation.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
