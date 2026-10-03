---
title: "piSAVE ESL : vérifier la compatibilité de la pompe avant un ajout au circuit"
seoTitle: "piSAVE ESL : pompe et clapet anti-retour"
description: "Avant d’ajouter un piSAVE ESL, vérifier la pompe sans clapet anti-retour, la boucle de signal et le vide libre prévu par la notice Piab."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "vacuometre-vacuostat-bar-absolu-pourcentage-vide", "schmalz-svk-ventouses-non-occupees-vide"]
sources: ["https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf"]
---

Ajouter un module d’économie d’air sur une pompe à vide ne consiste pas toujours à insérer une vanne dans son alimentation. **Le piSAVE ESL Standalone régule la pression d’air en fonction du vide mesuré et sa notice exclut les pompes équipées d’un clapet anti-retour.** Ce point doit être établi avant la commande du module.

## Une régulation de l’alimentation

La [notice 0255863 Rev00, pages imprimées 18–19](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf#page=5) décrit un réglage du niveau de vide souhaité. Le module adapte ensuite l’alimentation de la pompe aux caractéristiques du matériau. Le dispositif travaille ainsi sur l’air moteur en utilisant une information provenant du circuit de vide.

Ce fonctionnement diffère d’un système qui coupe simplement l’air après avoir emprisonné le vide derrière un clapet. La [page imprimée 13, feuille PDF 4](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf#page=4) est explicite : le piSAVE ESL ne peut être utilisé qu’avec des pompes **sans clapet anti-retour**. Une désignation commerciale « pompe à vide » ou « venturi » ne permet pas de savoir si ce composant est présent.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 350" role="img" aria-labelledby="piab-pisave-esl-pompe-clapet-non-retour-title piab-pisave-esl-pompe-clapet-non-retour-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="piab-pisave-esl-pompe-clapet-non-retour-title">ESL : deux branches de mesure</title><desc id="piab-pisave-esl-pompe-clapet-non-retour-desc">Le piSAVE ESL règle l’air d’alimentation à partir du vide. La notice le réserve aux pompes dépourvues de clapet anti-retour.</desc><rect width="520" height="350" rx="22" fill="#10281e"/><text x="26" y="43" fill="#d3eb56" font-size="23" font-weight="700">piSAVE ESL · boucle pneumatique</text><path d="M30 138H139M278 138H410V224H305" fill="none" stroke="#8abfa3" stroke-width="8"/><rect x="139" y="96" width="138" height="84" rx="15" fill="#d3eb56"/><text x="164" y="146" fill="#10281e" font-size="25" font-weight="700">ESL</text><circle cx="411" cy="138" r="37" fill="#26775b"/><text x="384" y="146" fill="#eef2e9" font-size="17">Pompe</text><path d="M304 224H208V180" fill="none" stroke="#d3eb56" stroke-width="4" stroke-dasharray="8 6"/><text x="34" y="82" fill="#eef2e9" font-size="20">Air moteur</text><text x="35" y="266" fill="#eef2e9" font-size="22">Signal vide → réglage alimentation</text><text x="35" y="311" fill="#eef2e9" font-size="22">Pompe sans clapet anti-retour</text></svg>
<figcaption>Le piSAVE ESL règle l’air d’alimentation à partir du vide. La notice le réserve aux pompes dépourvues de clapet anti-retour.</figcaption>
</figure>

## Reconstituer le circuit avant de choisir le module

L’identification porte sur le modèle exact de la pompe et ses composants intégrés, pas seulement sur le flexible visible. Rechercher dans son schéma le clapet anti-retour et les fonctions d’isolement permet de comparer l’assemblage à la restriction de Piab. En l’absence de schéma ou d’une réponse fabricant, la compatibilité reste à établir.

| Information disponible | Conséquence pour le choix |
| --- | --- |
| Pompe sans clapet anti-retour confirmée | Examiner les autres conditions d’installation ESL |
| Clapet anti-retour intégré confirmé | Le montage ne répond pas à la restriction publiée |
| Seule une photo extérieure est disponible | Identifier les fonctions internes avant de commander |
| Circuit comportant des valves additionnelles | Faire vérifier le schéma complet et les prises de signal |

Les [ventouses sur matière poreuse](/guides/ventouse-piece-poreuse-debit-vide/) expliquent pourquoi l’étanchéité de la pièce change la demande d’aspiration. Cette variation est précisément différente du seul niveau de vide affiché. Le [guide du vacuostat](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) complète la lecture du signal de pression.

## Le montage compatible doit encore fournir un signal exploitable

La [page imprimée 14](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf#page=4) impose aussi des conditions de vide libre, de tuyauterie et de longueurs de prise de signal. Elle donne une dépression libre optimale d’au plus **10 kPa**, avec un maximum de **20 kPa**, exprimée en « −kPa » dans le document. Ici « vide libre » décrit le système ouvert, par exemple les ventouses dans l’air ; ce n’est pas le vide de prise demandé pour tenir une pièce.

Le [guide des ventouses non occupées](/guides/schmalz-svk-ventouses-non-occupees-vide/) traite les pertes d’aspiration liées aux ouvertures du préhenseur. Pour l’ESL, la décision initiale demeure la topologie de la pompe ; régler davantage le module ne rend pas une pompe à clapet conforme à sa notice. La validation du maintien et des mouvements appartient ensuite à l’intégration de la machine et à ses conditions de charge.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Piab piSAVE ESL Standalone, notice 0255863 Rev00, décembre 2025](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf)
