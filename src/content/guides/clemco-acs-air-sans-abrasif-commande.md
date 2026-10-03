---
title: "Clemco ACS : pourquoi l’air peut sortir alors que l’abrasif est coupé"
seoTitle: "Clemco ACS : air présent et abrasif coupé"
description: "La commande ACS sépare l’arrêt d’abrasif du flux d’air. Documentez état de commande, machine et vanne avant d’appeler « panne » un mode prévu."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["sableuse-perd-puissance-abrasif-humide-diagnostic", "compresseur-pour-sablage-pneumatique"]
sources: ["https://www.clemcoindustries.com/s/10574m.pdf", "https://www.clemcoindustries.com/s/25836m.pdf"]
---

**Sur un système doté d’ACS, un flux d’air sans abrasif peut correspondre à une commande prévue.** La fonction de coupure d’abrasif doit être identifiée avant de conclure à un défaut d’alimentation ou à un manque de débit du compresseur.

La [notice RLX, section ACS](https://www.clemcoindustries.com/s/10574m.pdf) décrit cette option de commande. Les [instructions Quantum, section 7.5](https://www.clemcoindustries.com/s/25836m.pdf#page=10) distinguent aussi le symptôme « air présent, sans abrasif » et demandent notamment de vérifier l’état ACS dans le diagnostic. Ce principe appartient aux systèmes décrits.

## Séparer trois états dans le relevé

Notez la demande de projection, la commande de coupure d’abrasif et le résultat observé. Une seule colonne « sableuse ON » ne conserve pas cette différence. Le procédé peut recevoir de l’air alors que l’organe de dosage d’abrasif ne laisse pas passer le média.

Nous proposons une fiche d’incident horodatée avec modèle de machine, système de commande et vanne de dosage. Elle permet à l’équipe technique de comparer ordre et observation avant toute action sur les réglages.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Commande et sortie observée" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="clemco-acs-air-sans-abrasif-commande-title clemco-acs-air-sans-abrasif-commande-desc" xmlns="http://www.w3.org/2000/svg"><title id="clemco-acs-air-sans-abrasif-commande-title">Commande et sortie observée</title><desc id="clemco-acs-air-sans-abrasif-commande-desc">L’option ACS peut couper l’abrasif séparément ; demande de projection, état ACS et résultat doivent rester distincts.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Commande et sortie observée</text><rect x="28" y="125" width="204" height="85" rx="8" fill="#244b36"/><text x="40" y="152" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Air de</text><text x="40" y="177" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">projection</text><rect x="28" y="335" width="204" height="85" rx="8" fill="#244b36"/><text x="40" y="362" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Abrasif</text><path d="M233 164L425 270" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M417.0 270.0L425 270L420.7 263.2" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M233 375L425 285" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M420.3 291.5L425 285L417.0 284.5" fill="none" stroke="#9ebdad" stroke-width="3"/><circle cx="280" cy="347" r="14" fill="#244b36" stroke="#f5a798" stroke-width="2"/><path d="M270 337l20 20" fill="none" stroke="#f5a798" stroke-width="3"/><text x="274" y="406" fill="#f5a798" font-size="20" text-anchor="start" font-weight="400">Commande ACS</text><rect x="358" y="241" width="132" height="98" rx="8" fill="#244b36"/><text x="370" y="268" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Buse</text><text x="28" y="494" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">L’abrasif peut être coupé séparément.</text></svg>
</div>
*L’option ACS peut couper l’abrasif séparément ; demande de projection, état ACS et résultat doivent rester distincts.*

## La présence d’air ne confirme pas le trajet du média

Le diagnostic constructeur examine ensuite des points propres au circuit d’abrasif et à sa commande. Une réserve vide, une position de réglage ou un problème de ligne ne sont pas la même cause. Ne remplacez pas ce diagnostic par une augmentation de pression faite au hasard.

Le [guide d’abrasif humide et perte d’efficacité](/guides/sableuse-perd-puissance-abrasif-humide-diagnostic/) traite un autre groupe d’observations. Ici, commencez par savoir si l’abrasif est effectivement demandé par la commande. La qualité du média ne répond pas à cette question de logique.

## Une revue sans contourner la poignée

| Trace | Question posée |
| --- | --- |
| État de poignée et commande | La projection est-elle demandée ? |
| État ACS | L’abrasif est-il demandé ? |
| Air observé | Quelle sortie et quelle phase ? |
| Média observé | Présent, absent ou irrégulier ? |
| Référence de vanne | Quelle notice de diagnostic appliquer ? |

Ce tableau organise le dossier ; il ne donne aucun moyen de maintenir une commande active ni de contourner un dispositif homme mort. Les interventions et contrôles suivent les notices de l’ensemble installé et la procédure du site.

## Le bilan d’air doit conserver cette phase

Une phase sans abrasif peut encore demander de l’air. Si votre étude de compresseur additionne les phases de projection, décrivez celles réellement présentes et leur durée observée. Nous ne calculons pas leur consommation à partir de la seule position ACS.

Le [guide général du sablage](/guides/compresseur-pour-sablage-pneumatique/) aide à construire le bilan du poste après cette identification. Conservez ensuite dans la fiche de réception le comportement attendu pour chaque état de commande.

La conclusion documentaire est précise : absence d’abrasif et absence d’air ne sont pas synonymes sur une architecture ACS. Elle ne suffit pas à attribuer la cause d’une panne ni à certifier le bon fonctionnement d’un système de commande donné.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Clemco RLX10574, fonction ACS §1.6](https://www.clemcoindustries.com/s/10574m.pdf)
- [Clemco Quantum25836, diagnostic air sans abrasif §7.5](https://www.clemcoindustries.com/s/25836m.pdf#page=10)
