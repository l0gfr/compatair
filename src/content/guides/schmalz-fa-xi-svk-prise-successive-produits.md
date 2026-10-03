---
title: "Schmalz FA-Xi avec SVK : pourquoi une prise ne peut pas être complétée en cours de trajet"
seoTitle: "Schmalz FA-Xi SVK : prise successive interdite"
description: "FA-Xi avec technologie SVK : la notice exclut l’ajout ultérieur de produits. Vérifier le scénario de prise avant de programmer une collecte successive."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["schmalz-svk-ventouses-non-occupees-vide", "schmalz-fa-xi-svk-inclinaison-soixante-degres", "ventouse-piece-poreuse-debit-vide"]
sources: ["https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf"]
---

La technologie **SVK** du préhenseur Schmalz **FA-Xi** impose une limite précise : la notice indique qu’il n’est pas possible d’ajouter de l’aspiration ou de prendre d’autres produits ultérieurement. Une application qui souhaite saisir une pièce, se déplacer, puis compléter la charge avec une deuxième pièce doit donc être revue avant la programmation. [SVK Check Valve Technology, section 3.13.1](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31).

Cette limite ne se déduit pas du nombre de ventouses visibles. Elle est liée à la technologie de préhension choisie et à son fonctionnement documentaire.

## Identifier SVK ou SW sur la configuration

La notice distingue **SVK**, à clapets, et **SW**, à restrictions de débit. Elle indique qu’une conversion entre ces technologies peut être étudiée avec le service Schmalz. Cette possibilité ne donne pas une autorisation de transformer le préhenseur sans instruction ni de déclarer la technologie SW adaptée à une collecte successive particulière. [Options, section 3.13.1](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31).

Notre dossier de conception commence par la référence complète, la technologie réellement montée, la surface de contact et le scénario de collecte. Une photographie de la semelle ne remplace pas cette identification. Le guide sur les [clapets SVK et les prises non occupées](/guides/schmalz-svk-ventouses-non-occupees-vide/) décrit la gestion des contacts libres ; ce sujet concerne l’ordre des prises.

<div class="article-infographic article-infographic--compact" role="group" aria-label="SVK : définir la charge à la prise initiale" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="schmalz-fa-xi-svk-prise-successive-produits-title schmalz-fa-xi-svk-prise-successive-produits-desc" xmlns="http://www.w3.org/2000/svg"><title id="schmalz-fa-xi-svk-prise-successive-produits-title">SVK : définir la charge à la prise initiale</title><desc id="schmalz-fa-xi-svk-prise-successive-produits-desc">Limite de la notice FA-Xi 02/2026 ; aucune validation automatique d’une autre technologie.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">SVK : définir la charge à la prise</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">initiale</text><rect x="28" y="130" width="201" height="94" rx="8" fill="#244b36"/><text x="40" y="157" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Prise initiale</text><text x="40" y="188" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Produits déjà</text><text x="40" y="212" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">présents</text><rect x="292" y="130" width="200" height="94" rx="8" fill="#244b36"/><text x="304" y="157" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Transport</text><text x="304" y="188" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Prise constituée</text><path d="M229 176L292 176" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M285.0 179.8L292 176L285.0 172.2" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="74" y="315" width="135" height="41" rx="8" fill="#9ebdad"/><rect x="316" y="315" width="135" height="41" rx="8" fill="#9ebdad"/><path d="M140 356v77m-28-28 56 0" fill="none" stroke="#f5a798" stroke-width="3"/><circle cx="140" cy="408" r="29" fill="none" stroke="#f5a798" stroke-width="2"/><text x="261" y="413" fill="#f5a798" font-size="22" text-anchor="start" font-weight="400">Ajout ultérieur</text><text x="261" y="440" fill="#f5a798" font-size="22" text-anchor="start" font-weight="400">exclu</text><text x="28" y="506" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">FA-Xi avec technologie SVK</text></svg>
</div>
*Limite de la notice FA-Xi 02/2026 ; aucune validation automatique d’une autre technologie.*

## Écrire la séquence avant le programme

Nous proposons de décrire les étapes de l’application dans une fiche : état initial, produits présents sous le préhenseur, aspiration, confirmation, transport et dépose. Si une étape ajoute un produit après la prise initiale, elle doit être signalée au fournisseur comme une exigence du procédé.

| Étape souhaitée | Question documentaire |
|---|---|
| Prendre tous les produits présents | La configuration et la surface conviennent-elles ? |
| Transporter une prise déjà constituée | Quelles conditions de maintien et de mouvement s’appliquent ? |
| Ajouter un produit ultérieurement | Limite explicitement exclue pour SVK dans cette notice |
| Modifier la technologie | Revue Schmalz de la configuration et de son usage |

La fiche de séquence rend la contrainte visible avant d’écrire des temporisations ou d’augmenter la pression d’alimentation.

## Un indicateur de prise ne lève pas cette limite

La même notice décrit des fonctions de reconnaissance de pièce, dont des informations de vide et, selon la configuration, un contact de bande. Ces informations servent au contrôle de la prise selon les conditions prévues. Elles ne modifient pas l’exclusion documentaire d’une collecte successive avec SVK. [Belt Switch, section 3.13.2](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31).

Pour un automatisme, conserver donc séparément le signal de reconnaissance et l’admissibilité du scénario. Un signal actif après la première prise ne valide pas l’ajout d’une deuxième pièce ; il indique seulement l’état interprété par la fonction configurée.

## Adapter le besoin sans garantir une autre solution

Un procédé de collecte successive doit être présenté au fabricant avec les pièces, leur position, la trajectoire et les états attendus. Il peut conduire à un autre scénario de prise ou à une autre configuration, mais ce choix demande une étude propre à l’application. La page 31 ne suffit pas à valider un préhenseur de remplacement.

Le guide sur l’[inclinaison du FA-Xi SVK](/guides/schmalz-fa-xi-svk-inclinaison-soixante-degres/) traite une limite mécanique différente. Ici, le verdict documentaire porte sur la séquence : une prise SVK ne doit pas être complétée par des produits supplémentaires en cours de trajet. Enregistrer cette contrainte tôt évite de chercher une correction par le compresseur à un scénario exclu par la notice.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Schmalz, notice FA-Xi 30.30.01.04933, version 02 de février2026](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31)
