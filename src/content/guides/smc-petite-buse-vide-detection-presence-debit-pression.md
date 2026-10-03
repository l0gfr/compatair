---
title: "Petite buse de prise sous vide : pourquoi un générateur trop puissant peut masquer la pièce"
seoTitle: "Prise sous vide : petite buse et détection de pièce"
description: "SMC : petite buse d’aspiration, faible différence de pression et choix du capteur. Préparer la détection de présence sans agrandir l’éjecteur au hasard."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["vacuometre-vacuostat-bar-absolu-pourcentage-vide", "ejecteur-vide-schmalz-sbpl-consommation", "capteur-pnp-npn-entree-automate-verin"]
sources: ["https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf"]
---

Sur une petite buse d’aspiration, le capteur peut voir une différence de pression trop faible entre une prise réussie et une buse libre. SMC explique que cette différence dépend de la capacité de l’éjecteur ou de la pompe, et qu’une capacité trop importante peut compromettre la détection. Le problème devient donc celui du signal de présence, en plus de la force de prise. [Vacuum Pressure Switch, page imprimée889](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=34).

Le cas est utile pour des petites pièces prises par une buse plutôt que par une grande ventouse. Augmenter la capacité du générateur sans examiner le signal ne résout pas nécessairement un défaut de reconnaissance.

## Deux états à mesurer séparément

Pour comparer les deux états, relevez la pression avec la buse libre, puis avec la pièce correctement prise, dans une configuration et un cycle définis. Conserver l’emplacement du capteur, la référence de la buse, le tuyau et le générateur. La différence observée aide à formuler la question au fournisseur ; elle ne vaut pas validation d’un seuil de sécurité.

| État observé | Information à conserver |
|---|---|
| Buse libre | Pression et stabilité du signal |
| Pièce correctement prise | Pression et stabilité du signal |
| Début du mouvement | Signal de confirmation reçu |
| Changement de pièce ou de buse | Références et réglages associés |

SMC cite une buse d’environ **1 mm** comme illustration de ce problème. Ce diamètre n’est pas une prescription pour toutes les petites pièces. [Illustration Approx.ø1 adsorption nozzle](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=34).

<div class="article-infographic article-infographic--compact" role="group" aria-label="Une prise doit produire un signal distinct" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="smc-petite-buse-vide-detection-presence-debit-pression-title smc-petite-buse-vide-detection-presence-debit-pression-desc" xmlns="http://www.w3.org/2000/svg"><title id="smc-petite-buse-vide-detection-presence-debit-pression-title">Une prise doit produire un signal distinct</title><desc id="smc-petite-buse-vide-detection-presence-debit-pression-desc">Schéma qualitatif de la distinction buse libre / pièce prise ; aucun seuil universel.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Une prise doit produire un signal</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">distinct</text><text x="28" y="129" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Comparer deux états</text><path d="M123 185h30v116h-30z" fill="none" stroke="#d3eb56" stroke-width="3"/><circle cx="138" cy="236" r="7" fill="#244b36" stroke="#9ebdad" stroke-width="2"/><text x="138" y="396" fill="#ffffff" font-size="22" text-anchor="middle" font-weight="400">Buse libre</text><path d="M375 185h30v116h-30z" fill="none" stroke="#d3eb56" stroke-width="3"/><circle cx="390" cy="236" r="7" fill="#244b36" stroke="#9ebdad" stroke-width="2"/><rect x="328" y="303" width="124" height="31" rx="0" fill="#9ebdad"/><text x="390" y="396" fill="#ffffff" font-size="22" text-anchor="middle" font-weight="400">Pièce prise</text><text x="28" y="469" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Écart de pression et stabilité du</text><text x="28" y="495" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">signal</text><text x="28" y="532" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Un gros générateur peut masquer cet écart.</text></svg>
</div>
*Schéma qualitatif de la distinction buse libre / pièce prise ; aucun seuil universel.*

## Le choix du capteur suit la séparation des états

Le document mentionne un détecteur **ZSP1** apte à une faible hystérésis ou une détection de débit, et présente la famille **PFMV**. Il insiste aussi sur la stabilité du vide lorsque l’hystérésis est faible. Ces références sont des pistes documentaires ; leur modèle exact et leur raccordement restent à sélectionner avec les caractéristiques du poste. [Suction verification switch et Flow sensor](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=34).

Avant de remplacer un capteur, demander sa plage, sa précision, son hystérésis et son comportement dans le cycle réel. Le guide sur les [signaux PNP/NPN](/guides/capteur-pnp-npn-entree-automate-verin/) prépare la question du raccordement électrique. Il ne résout pas une différence pneumatique trop faible entre les deux états.

## Confirmer la prise avant de déplacer

SMC recommande de vérifier le signal de prise avant de lever la ventouse. Le document explique qu’un mouvement déclenché seulement par une temporisation peut laisser une pièce sur place lorsque le temps de prise varie. Cette recommandation concerne la séquence de transfert, avec les exigences du procédé et les mesures de prévention nécessaires. [Timing Chart, Suction Verification](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=34).

Une revue d’automatisme peut associer chaque phase à son information attendue : aspiration commandée, prise confirmée, déplacement autorisé, dépose puis retour. Le seuil ne doit pas être diminué uniquement pour faire disparaître un défaut de production ; il doit rester justifié par les conditions de prise et de mouvement.

## Une conclusion limitée à la détection

Le diagnostic vise à savoir si le signal distingue effectivement une buse libre d’une pièce prise. Il ne calcule pas la force admissible du préhenseur et ne valide pas la chute d’une charge. Les exigences de maintien, d’accélération et de prévention doivent être examinées séparément.

La décision documentaire est claire : pour une petite buse, il faut sélectionner ensemble générateur, circuit et détection. Une hausse de capacité d’aspiration peut réduire la lisibilité du signal. Les relevés des deux états donnent une base concrète au fournisseur pour proposer un capteur et un générateur adaptés.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [SMC, Vacuum Equipment, sélection du système](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=34)
