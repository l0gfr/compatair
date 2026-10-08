---
title: "Piab piCOBOT L : attendre le bon retour après un soufflage IBO"
seoTitle: "piCOBOT L : soufflage IBO et retour BOC"
description: "La durée IBO s’adapte au circuit de vide. Comprendre le retour BOC, les premiers cycles et la priorité du soufflage externe avant de régler la dépose."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "ventouse-depose-piece-soufflage-duree-debit"
  - "piab-pisave-esl-tubes-signal-retard-regulation"
  - "ventouse-mark-free-traces-deformation-transfert-contamination"
sources:
  - "https://www.piab.com/globalassets/productimages/0247816_rev03_picobot_l_general-en.pdf"
---

La dépose varie après un changement de ventouse ou de trajet de vide. Sur un piCOBOT L équipé de **IBO**, la durée du soufflage est adaptative : elle n’est pas forcément égale à la temporisation de l’automate. La [notice Piab, page 28](https://www.piab.com/globalassets/productimages/0247816_rev03_picobot_l_general-en.pdf#page=28) précise que les premiers cycles d’apprentissage peuvent contenir une bouffée supplémentaire.

Avant d’augmenter une durée, identifiez la fonction active. Une temporisation fixe, une libération adaptative et une commande extérieure maintenue n’ont pas le même rôle dans la séquence.

## ATBO et IBO partent à l’arrêt de la génération de vide

La page 28 distingue **ATBO**, dont la durée est fixée par un compteur, de **IBO**, qui adapte la durée au volume et au comportement du circuit. Piab définit aussi une sensibilité IBO correspondant aux systèmes petits, moyens, grands et grands avec fortes pertes de pression.

Ces catégories servent à lire la configuration. Elles ne donnent pas une sensibilité universelle pour une taille de ventouse. Une modification de tuyauterie ou de volume reste à confronter au cycle réel, avec les critères de libération de la machine.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="piab-picobot-l-ibo-boc-liberation-piece-title piab-picobot-l-ibo-boc-liberation-piece-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="piab-picobot-l-ibo-boc-liberation-piece-title">La commande et son retour</title><desc id="piab-picobot-l-ibo-boc-liberation-piece-desc">Deux fonctions automatiques de la notice Piab. Une commande de soufflage externe active prend priorité sur elles.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">La commande et son retour</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">ATBO</text><text x="41" y="151" font-size="21" fill="#eef2e9">Durée fixée</text><text x="41" y="193" font-size="21" fill="#eef2e9">Vide OFF déclenche</text><text x="41" y="235" font-size="21" fill="#eef2e9">BOC : séquence finie</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">IBO</text><text x="285" y="151" font-size="21" fill="#eef2e9">Durée adaptée</text><text x="285" y="193" font-size="21" fill="#eef2e9">Apprentissage initial</text><text x="285" y="235" font-size="21" fill="#eef2e9">BOC : séquence finie</text></svg>
<figcaption>Deux fonctions automatiques de la notice Piab. Une commande de soufflage externe active prend priorité sur elles.</figcaption>
</figure>


## BOC est un retour de la séquence automatique

La [page 29 de la notice](https://www.piab.com/globalassets/productimages/0247816_rev03_picobot_l_general-en.pdf#page=29) associe **BOC, Blow-Off Complete**, à la fin du soufflage automatique ATBO ou IBO. Ce signal permet au programme de suivre la fin de cette fonction au lieu de supposer une durée fixe.

La proposition de réception CompatAir consiste à consigner la commande de vide, l’état BOC et l’événement mécanique de libération sur la même chronologie. Le retour de la fonction ne qualifie pas à lui seul une trajectoire sans collision ou la sécurité du déplacement suivant. Ces critères appartiennent à l’intégration de la machine.

Si le problème apparaît pendant le maintien, le [diagnostic ACM](/guides/piab-picobot-l-acm-aspiration-continue-cycle/) suit une autre partie du cycle : les reprises de génération et la suspension de l’économie.

## Une commande extérieure peut prendre la priorité

Piab décrit le soufflage externe comme prioritaire sur le vide et sur ATBO/IBO lorsqu’il est actif. Si le relevé indique une commande extérieure maintenue, chercher uniquement dans la durée IBO laisse de côté la commande qui gouverne réellement le soufflage.

| Point à relever | Pourquoi il change le diagnostic |
| --- | --- |
| Type de soufflage actif | Fixe, adaptatif ou externe |
| Modification récente du circuit | Contexte de l’apprentissage IBO |
| Commande externe présente | Priorité sur les fonctions automatiques |
| Retour BOC | Fin de la séquence automatique configurée |
| Libération mécanique observée | Critère de réception distinct |

Le [guide général de dépose](/guides/ventouse-depose-piece-soufflage-duree-debit/) traite la chronologie d’un autre éjecteur. Ici, le point nouveau est le retour de fin d’une fonction adaptative. La [ligne de signal piSAVE](/guides/piab-pisave-esl-tubes-signal-retard-regulation/) et le [dossier des traces de ventouse](/guides/ventouse-mark-free-traces-deformation-transfert-contamination/) aident à examiner respectivement le circuit et la pièce, sans recopier leurs réglages.

Après une modification approuvée, conservez des cycles de démarrage et des cycles stabilisés séparément. Cela permet d’expliquer une bouffée initiale prévue par la notice et une anomalie persistante qui nécessite une autre recherche.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
