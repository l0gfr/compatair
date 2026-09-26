---
title: "Choisir un distributeur pneumatique : lire le débit nominal avant de remplacer une vanne"
seoTitle: "Distributeur pneumatique : quel débit nominal choisir ?"
description: "Filetage identique, débit différent : lisez les conditions de pression, le sens de passage et le débit nominal avant de choisir un distributeur pneumatique."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["consommation-verin-pneumatique-double-effet", "regler-vitesse-verin-pneumatique-echappement", "raccord-air-comprime-bsp-npt-1-4"]
sources: ["https://www.festo.com/media/catalog/236149_documentation.pdf", "https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air10.pdf"]
---

**Deux distributeurs qui se vissent au même endroit ne sont pas nécessairement équivalents.** Il faut rapprocher leur fonction, leur commande, leur débit dans des conditions comparables et l’ensemble du montage. Un chiffre en L/min isolé de sa pression aval peut donner une impression trompeuse de capacité.

Le besoin n’est pas seulement de « laisser passer l’air ». Dans une machine, il s’agit de réaliser une séquence avec une pression et un temps de mouvement acceptables, y compris lorsque les autres actionneurs travaillent.

## Le débit nominal décrit un point d’essai

La [fiche Festo HE](https://www.festo.com/media/catalog/236149_documentation.pdf) donne un exemple explicite : son débit nominal normalisé selon DIN 1343 est mesuré avec **p1 = 6 bar, p2 = 5 bar et une différence de 1 bar**. Il s’agit ici d’une vanne manuelle d’isolement, citée pour montrer comment lire une condition de débit, pas d’un modèle d’électrovanne recommandé.

Ce débit n’est donc pas celui que la même pièce laisserait passer avec n’importe quelle pression amont ou aval. Il ne représente pas non plus une consommation d’air permanente. Conservez la note de bas de tableau avec la valeur quand vous préparez votre comparaison.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Lire un débit avec ses conditions">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="choisir-distributeur-pneumatique-debit-nominal-title choisir-distributeur-pneumatique-debit-nominal-desc" xmlns="http://www.w3.org/2000/svg">
<title id="choisir-distributeur-pneumatique-debit-nominal-title">Lire un débit avec ses conditions</title><desc id="choisir-distributeur-pneumatique-debit-nominal-desc">La valeur de débit n’a de sens qu’avec les pressions amont et aval et le trajet réellement concerné.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="59" fill="#d3eb56" font-size="24" font-weight="700">Pression amont</text><text x="44" y="93" fill="white" font-size="21">Condition d’alimentation du test</text>
<path d="M260 121v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="140" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="175" fill="#d3eb56" font-size="24" font-weight="700">Pression aval</text><text x="44" y="209" fill="white" font-size="21">Condition de sortie du test</text>
<path d="M260 237v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="256" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="291" fill="#d3eb56" font-size="24" font-weight="700">Passage concerné</text><text x="44" y="325" fill="white" font-size="21">Vanne, embase et sens de circulation</text>
</svg>
</div>

*Lire un débit avec ses conditions : schéma de lecture CompatAir, expliqué dans le texte.*

## Comparer quatre éléments sur la même ligne

Nous proposons cette grille pour un remplacement :

| Élément à rapprocher | Question à adresser au fournisseur |
| --- | --- |
| Fonction pneumatique | Les connexions ont-elles les mêmes états utiles ? |
| Conditions de débit | Pressions, référence de volume et sens sont-ils identiques ? |
| Configuration | Le chiffre concerne-t-il la pièce montée avec son embase ? |
| Commande et environnement | Tension, pilotage, fluide et température conviennent-ils ? |

Les filetages demandent leur propre vérification. Le [guide BSP et NPT](/guides/raccord-air-comprime-bsp-npt-1-4/) explique pourquoi une désignation en pouces ne suffit pas. Même une compatibilité mécanique confirmée ne répond pas aux trois autres lignes de la grille.

## La consommation moyenne du vérin ne donne pas le débit de pointe

Le [calcul par cycle](/guides/consommation-verin-pneumatique-double-effet/) aide à établir le bilan d’air. Pour le distributeur, il faut aussi le temps disponible pour remplir ou vider les chambres. Communiquez donc les durées souhaitées de sortie et de rentrée, les dimensions du vérin et la longueur des liaisons.

Le [Department of Energy](https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air10.pdf) recommande de demander les besoins exacts des usages et de surveiller la pression à leur entrée, en tenant compte des restrictions des flexibles et raccords. Nous en tirons une règle de consultation : demandez la validation de la chaîne installée, avec ses accessoires, plutôt qu’une simple comparaison de valeurs maximales.

## Une baisse de cadence après remplacement

Voici une démarche de diagnostic proposée, sans attribution automatique de panne. Conservez les références de l’ancienne vanne, de la nouvelle et de leurs embases. Notez si la baisse concerne un seul mouvement, tous les mouvements ou seulement la simultanéité. Ajoutez les pressions disponibles, sans confondre mesure au collecteur et mesure à l’actionneur.

Faites ensuite vérifier les passages, le pilotage et l’échappement dans le cadre de la procédure de maintenance. Augmenter immédiatement la pression réseau pourrait masquer le défaut tout en modifiant les conditions de fonctionnement d’autres postes. Le [réglage de vitesse](/guides/regler-vitesse-verin-pneumatique-echappement/) doit rester documenté après toute substitution.

## Ce qu’un devis de remplacement doit confirmer

Demandez une référence complète, la fonction correspondante, la plage d’utilisation et les données de débit avec leurs conditions. Si le fournisseur utilise des coefficients de débit, exigez sa méthode de sélection pour le gaz et les pressions de votre application ; ne transformez pas un coefficient de liquide en L/min d’air par une règle improvisée.

La réception proposée consiste à reproduire le cycle représentatif, puis la simultanéité prévue, en conservant la configuration définitive. Une pièce qui commute sur établi n’a pas encore démontré qu’elle maintient la cadence de votre machine. Toute modification d’une fonction liée à la sécurité doit être validée dans le dossier de conception approprié.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Festo, vanne manuelle HE, fiche d’octobre 2024, page 4](https://www.festo.com/media/catalog/236149_documentation.pdf)
- [U.S. Department of Energy, Engineer End Uses for Maximum Efficiency, fiche 10](https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air10.pdf)
