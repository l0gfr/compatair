---
title: "Préhenseur FMP : la soufflante a besoin d’un chemin de ventilation prévu"
seoTitle: "Schmalz FMP : soufflante et ventilation du circuit"
description: "Le schéma FMP prévoit une fonction de ventilation pour éviter la surchauffe de la soufflante. Vérifiez générateur, vanne et phases de fonctionnement."
pubDate: "2026-10-03"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["ejecteur-vide-schmalz-sbpl-consommation", "ventouse-depose-piece-soufflage-duree-debit"]
sources: ["https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101017/BAL_30.30.01.01017_en-EN.pdf"]
---

**Fermer le chemin de vide ne décrit pas l’état thermique de sa soufflante.** Le schéma Schmalz FMP montre une fonction de ventilation destinée à éviter une surchauffe du générateur. L’ensemble de vannes doit donc être examiné avec les phases de fonctionnement de la soufflante.

Cette fonction apparaît dans la [figure 2.2-2 de la notice FMP](https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101017/BAL_30.30.01.01017_en-EN.pdf#page=7). Le document représente une architecture, pas un calcul de débit de refroidissement applicable à toutes les soufflantes.

## Identifier le générateur avant d’étudier la commande

Relevez le modèle de soufflante et sa notice, la version de préhenseur et les vannes présentes. Une soufflante externe et un éjecteur pneumatique ne partagent pas automatiquement les mêmes états ou contraintes. Le [guide du SBPL](/guides/ejecteur-vide-schmalz-sbpl-consommation/) traite une autre génération de vide.

Joignez un schéma de l’installation qui distingue branche de prise et chemin de ventilation. L’équipe qui étudie la commande doit pouvoir lire les états à vide, en prise, pendant la dépose et en attente.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Prise et ventilation de soufflante" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="schmalz-fmp-soufflante-ventilation-vide-ferme-title schmalz-fmp-soufflante-ventilation-vide-ferme-desc" xmlns="http://www.w3.org/2000/svg"><title id="schmalz-fmp-soufflante-ventilation-vide-ferme-title">Prise et ventilation de soufflante</title><desc id="schmalz-fmp-soufflante-ventilation-vide-ferme-desc">Le schéma FMP distingue la branche de prise et une ventilation destinée à éviter la surchauffe ; ses conditions relèvent aussi du générateur.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Prise et ventilation de soufflante</text><circle cx="270" cy="218" r="51" fill="#244b36" stroke="#d3eb56" stroke-width="2"/><text x="199" y="139" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Soufflante</text><path d="M225 240L111 356M313 240L415 356" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="27" y="364" width="218" height="94" rx="8" fill="#244b36"/><text x="39" y="391" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Prise</text><text x="39" y="422" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Branche de vide</text><rect x="289" y="364" width="204" height="94" rx="8" fill="#244b36"/><text x="301" y="391" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Ventilation</text><text x="301" y="422" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Contre la</text><text x="301" y="446" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">surchauffe</text><text x="29" y="521" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Deux branches dans le schéma fabricant</text></svg>
</div>
*Le schéma FMP distingue la branche de prise et une ventilation destinée à éviter la surchauffe ; ses conditions relèvent aussi du générateur.*

## Le temps d’attente appartient au cycle

Un procédé peut passer une part importante de son cycle sans tenir de pièce. Dans le dossier, indiquez si la soufflante fonctionne pendant cette phase et quel chemin reste prévu par son constructeur. Le simple mot « attente » ne renseigne pas sur l’état des vannes.

Aucun débit minimal ni durée admissible de fermeture n’est publié ici. Ces limites doivent venir de la notice du générateur exact. Les déduire d’un dessin FMP ajouterait un dimensionnement que le document ne fournit pas.

## Une matrice d’états à faire valider

| Phase | Ligne à renseigner |
| --- | --- |
| Prise | Chemin vers le préhenseur et commande |
| Maintien | État du générateur et conditions |
| Dépose | Séquence de relâchement |
| Attente | Chemin de ventilation prévu |
| Arrêt | État prescrit par les notices |

Cette matrice prépare la revue par l’intégrateur. Elle ne fournit pas un programme automate prêt à installer et ne modifie pas une protection thermique. La réception doit suivre les procédures du système avec les critères du générateur.

## Le soufflage de dépose a une autre fonction

Le [guide de soufflage des ventouses](/guides/ventouse-depose-piece-soufflage-duree-debit/) décrit la libération de pièce. Il ne suffit pas à assurer la ventilation d’une soufflante à un autre moment du cycle. Gardez ces branches et leurs commandes séparées dans le plan.

Lorsqu’un incident survient, conservez la chronologie des états, les indications accessibles du générateur et les modifications de configuration récentes. Le schéma de la notice oriente une question précise ; il ne démontre pas la cause thermique d’une panne particulière.

Une consultation aboutie doit donc inclure le générateur, le circuit et le cycle complet. La référence de préhenseur ne permet pas, à elle seule, de conclure qu’une soufflante peut rester isolée pendant toute une attente.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Schmalz FMP(-S)30.30.01.01017, figure 2.2-2, p.7](https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101017/BAL_30.30.01.01017_en-EN.pdf#page=7)
