---
title: "Sableuse à arrêts fréquents : cuve maintenue en pression ou dépressurisée ?"
seoTitle: "Sableuse : maintien de pression et arrêts fréquents"
description: "Quantum pressure-hold et Classic TLR ne décrivent pas le même arrêt. Séparez pression de cuve, projection et état prévu avant de comparer les reprises."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-sablage-pneumatique", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://www.clemcoindustries.com/s/25836m.pdf", "https://www.clemcoindustries.com/s/22501m.pdf"]
---

**Arrêter la projection et dépressuriser la cuve sont deux événements à identifier.** Le système Quantum décrit par Clemco maintient la cuve en pression lors d’un arrêt de projection. Les Classic Series à commande TLR suivent une architecture de relâchement de pression décrite dans leur propre notice.

Les [instructions Quantum 25836](https://www.clemcoindustries.com/s/25836m.pdf) et la [notice Classic TLR 22501](https://www.clemcoindustries.com/s/22501m.pdf) permettent de comparer les états du matériel. Le seul volume de cuve ne dit pas comment une machine s’arrête ni comment elle reprend.

## Lire le cycle demandé par le travail

Décrivez les interruptions du poste : déplacement de pièce, contrôle, changement de position ou fin de tâche. Demandez au fournisseur l’état attendu de la cuve et des vannes à chacune de ces étapes. L’architecture retenue doit répondre au procédé et à sa procédure d’arrêt, pas à une impression de vitesse de reprise.

Joignez à la consultation une séquence horodatée : projection, interruption, reprise et arrêt pour intervention. Une pause de travail n’est pas une consignation autorisant l’ouverture de la machine.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux états à décrire à l’arrêt" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="sableuse-pression-maintien-depressurisation-arrets-title sableuse-pression-maintien-depressurisation-arrets-desc" xmlns="http://www.w3.org/2000/svg"><title id="sableuse-pression-maintien-depressurisation-arrets-title">Deux états à décrire à l’arrêt</title><desc id="sableuse-pression-maintien-depressurisation-arrets-desc">L’arrêt de projection et l’état de pression de la cuve se lisent séparément dans les architectures Quantum pressure-hold et Classic TLR.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Deux états à décrire à l’arrêt</text><text x="26" y="129" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Arrêt de projection</text><path d="M45 170v245M45 280h420" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M45 209h420" fill="none" stroke="#d3eb56" stroke-width="4"/><text x="66" y="247" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Quantum : pression maintenue</text><path d="M45 314H200L302 392H465" fill="none" stroke="#ffffff" stroke-width="4"/><text x="59" y="460" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Classic TLR : dépressurisation</text><text x="28" y="514" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">États schématiques, aucun temps chiffré</text></svg>
</div>
*L’arrêt de projection et l’état de pression de la cuve se lisent séparément dans les architectures Quantum pressure-hold et Classic TLR.*

## Une pression conservée ne signifie pas que la machine est prête à ouvrir

Le maintien de pression fait partie du fonctionnement décrit. Il impose de distinguer clairement l’arrêt de projection de la procédure de dépressurisation et d’intervention. Faites identifier cette procédure dans les notices de l’ensemble installé.

Ce guide ne modifie aucun contrôle de poignée ni aucun dispositif homme mort. Les systèmes et leurs accessoires doivent rester compatibles avec la version de machine retenue.

## Les économies d’air doivent être calculées sur un bilan réel

Comparer les deux architectures peut conduire à étudier les volumes remis sous pression entre interruptions. Pour chiffrer, il faut connaître volumes concernés, pressions, cycles et autres consommateurs, ainsi que la convention des données. Les notices ne permettent pas d’annoncer un pourcentage universel pour tous les ateliers.

Le [guide de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à consigner les auxiliaires actifs pendant les pauses. Ne présentez pas tout air observé durant un arrêt comme une fuite : certaines fonctions peuvent être prévues par le système.

## Préparer une comparaison de deux offres

| Question | Réponse attendue |
| --- | --- |
| Pendant une pause | État de cuve et de projection |
| À la reprise | Séquence et conditions de fonctionnement |
| Pour une intervention | Procédure d’arrêt et relâchement |
| Pour le compresseur | Demande qualifiée et phases actives |
| Pour la réception | Configuration et critères retenus |

Cette grille est une proposition CompatAir pour la consultation. Les réglages et les critères applicables restent ceux du dossier validé de la machine.

Le [guide général du sablage](/guides/compresseur-pour-sablage-pneumatique/) complète la lecture de la demande de projection. Pour accepter une offre, conservez le nom de l’architecture, la référence du système de commande et les états attendus. Le résultat utile est une comparaison explicite des cycles ; aucune cadence ou économie mesurée n’est inventée.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Clemco Quantum Pneumatic 25836, principe pressure-hold](https://www.clemcoindustries.com/s/25836m.pdf)
- [Clemco Classic Series 22501, principe TLR](https://www.clemcoindustries.com/s/22501m.pdf)
