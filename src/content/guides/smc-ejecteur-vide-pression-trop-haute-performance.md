---
title: "Éjecteur sous vide : pourquoi monter la pression d’air peut dégrader la prise"
seoTitle: "Éjecteur sous vide : pression d’air excessive"
description: "SMC : pression nominale de l’éjecteur, courbe vide-débit et pièces fuyardes. Diagnostiquer une prise sans augmenter arbitrairement le réseau."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "ejecteur-schmalz-scpsi-economiseur-air-cycles", "vacuometre-vacuostat-bar-absolu-pourcentage-vide"]
sources: ["https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf"]
---

Une prise sous vide insuffisante ne justifie pas automatiquement une hausse de la pression d’air. SMC demande d’utiliser l’éjecteur à sa pression d’alimentation standard et précise qu’une pression excessive peut diminuer ses performances. La pression admissible du réseau et le point de fonctionnement utile de l’éjecteur sont deux informations différentes. [Supply Pressure of Vacuum Ejector, page imprimée888](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=33).

Le cas concerne une pièce qui se tient mal, un temps de prise devenu long ou un réglage augmenté pour compenser un défaut. Le premier document à obtenir est la courbe de la référence complète de l’éjecteur.

## Retrouver la pression prévue par le modèle

Le guide SMC ne fixe pas une pression unique pour tous les éjecteurs. Il renvoie au point standard du modèle et aux caractéristiques de débit et de vide. Relever référence, buse, régulateur, conduite d’air et ligne de vide permet de retrouver la bonne courbe. [Selection and Handling Precautions](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=33).

Nous proposons de conserver sur la fiche de poste la consigne constructeur, le réglage appliqué et la pression observée à l’éjecteur pendant le cycle. Toute recherche de défaut doit rester dans la plage admise par la documentation du modèle et les consignes du poste.

<div class="article-infographic article-infographic--compact" role="group" aria-label="La pression standard reste le point de départ" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="smc-ejecteur-vide-pression-trop-haute-performance-title smc-ejecteur-vide-pression-trop-haute-performance-desc" xmlns="http://www.w3.org/2000/svg"><title id="smc-ejecteur-vide-pression-trop-haute-performance-title">La pression standard reste le point de départ</title><desc id="smc-ejecteur-vide-pression-trop-haute-performance-desc">Schéma qualitatif : aucune courbe universelle ni valeur de pression inventée.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">La pression standard reste le</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">point de départ</text><text x="28" y="128" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Courbe du modèle exact</text><path d="M70 173v235h360" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M91 340Q180 285 260 263" fill="none" stroke="#d3eb56" stroke-width="4"/><path d="M260 263Q337 288 402 328" fill="none" stroke="#f5a798" stroke-width="4"/><path d="M260 179v233" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="5 6"/><text x="130" y="455" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Point standard à retrouver</text><text x="28" y="502" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Illustration qualitative sans axe chiffré</text></svg>
</div>
*Schéma qualitatif : aucune courbe universelle ni valeur de pression inventée.*

## Une pièce fuyarde change le point de fonctionnement

SMC distingue une caractéristique de **vide élevé, type S**, et une caractéristique de **débit élevé, type L**. Le document montre que le type offrant le meilleur vide dépend du volume de fuite. Le maximum de vide, observé à débit faible, ne suffit donc pas à choisir l’éjecteur d’une pièce qui laisse entrer de l’air. [High Vacuum Type et High Flow Type](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=33).

| Situation à décrire | Donnée utile au fournisseur |
|---|---|
| Surface poreuse ou irrégulière | Débit de fuite ou observation de la prise |
| Vide trop lent à atteindre | Volume de la ligne, tuyaux et durée observée |
| Pression d’air modifiée | Réglage réel et valeur standard du modèle |
| Plusieurs éjecteurs en service | Conditions d’échappement et simultanéité |

Ces éléments préparent une sélection. Ils ne permettent pas de choisir un type S ou L sans la courbe applicable et la vérification du poste.

## Examiner l’échappement autant que l’arrivée

Pour plusieurs éjecteurs reliés à un collecteur, SMC décrit des précautions d’échappement et demande que la contre-pression des conduites ne perturbe pas leur fonctionnement. Un échappement commun fait donc partie du circuit à relever lorsqu’un incident apparaît seulement avec plusieurs prises simultanées. [Manifold Use](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=33).

Notre dossier de diagnostic peut inclure la référence des silencieux, la conduite d’évacuation, les éjecteurs actifs et l’historique d’entretien. Il sert à demander une revue de l’installation, plutôt qu’à changer plusieurs réglages sans conserver l’état initial.

## Une décision à partir de la courbe et du cycle

La [prise d’une pièce poreuse](/guides/ventouse-piece-poreuse-debit-vide/) et les [cycles d’économie d’air](/guides/ejecteur-schmalz-scpsi-economiseur-air-cycles/) abordent d’autres éléments du système. Ici, l’action utile est de retrouver la pression standard de l’éjecteur, puis de confronter son fonctionnement au vide et au débit réellement nécessaires.

Une pression excessive peut dégrader le fonctionnement décrit par SMC. À l’inverse, une pression inférieure au besoin n’est pas justifiée par cette observation. La référence, la courbe et les relevés du cycle permettent de décider s’il faut corriger l’alimentation, la ligne de vide, l’échappement ou la sélection de l’éjecteur.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [SMC, Vacuum Equipment, sélection de l’éjecteur](https://www.smcworld.com/catalog/BEST-Guide-en/pdf/4-p0858-0898-sinku_en.pdf#page=33)
