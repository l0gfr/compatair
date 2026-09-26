---
title: "Utiliser plusieurs outils pneumatiques : quels débits additionner ?"
description: "Additionnez uniquement les consommations réellement simultanées et comparez leur somme au débit restitué à une pression commune."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Utiliser"
audiences: [professionnel]
metiers: [garage-automobile, atelier-poids-lourds, carrosserie-peinture, menuiserie-agencement, btp-chantier, maintenance-industrielle]
readingTime: 6
featured: false
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
  - https://www.einhell.fr/p/4133330-tc-pe-150/
  - https://www.einhell.fr/p/4138540-tc-pp-220/
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
---

Le dimensionnement de plusieurs outils dépend d’abord d’une question factuelle : fonctionnent-ils réellement en même temps ? Deux consommations simultanées doivent être additionnées. Deux usages successifs ne justifient pas automatiquement la même somme.

<svg viewBox="0 0 760 300" role="img" aria-labelledby="multi-title multi-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="multi-title">Addition de deux consommations simultanées</title><desc id="multi-desc">Une ponceuse demande 100 litres par minute et une meuleuse 128. Ensemble elles demandent 228 litres par minute à 6,3 bar. Le seuil CompatAir vaut 285 litres par minute.</desc>
  <rect width="760" height="300" rx="18" fill="#eef2e9"/><text x="40" y="45" fill="#102018" font-size="22" font-weight="700">Usage réellement simultané à 6,3 bar</text>
  <rect x="40" y="82" width="230" height="58" rx="9" fill="#2f7659"/><text x="66" y="117" fill="white" font-size="18" font-weight="700">Ponceuse 100</text>
  <text x="292" y="119" fill="#102018" font-size="28" font-weight="700">+</text><rect x="330" y="82" width="260" height="58" rx="9" fill="#2f7659"/><text x="354" y="117" fill="white" font-size="18" font-weight="700">Meuleuse 128</text>
  <text x="40" y="194" fill="#102018" font-size="23" font-weight="700">Besoin nominal : 228 L/min</text><text x="40" y="232" fill="#68776e" font-size="17">Seuil interne CompatAir : 228 × 1,25 = 285 L/min</text>
  <text x="40" y="270" fill="#68776e" font-size="15">Aucun facteur de simultanéité n’est inventé.</text>
</svg>

Un [amplificateur d’air EXAIR](/guides/amplificateur-air-exair-consommation-debit/) illustre un autre piège de cumul : le débit du jet total inclut de l’air ambiant et ne doit pas être additionné comme une consommation d’air comprimé.

## Cas vérifiable : ponceuse et meuleuse

La [ponceuse Einhell TC-PE 150](https://www.einhell.fr/p/4133330-tc-pe-150/) est donnée pour 100 L/min à 6,3 bar. La [meuleuse droite TC-PP 220](https://www.einhell.fr/p/4138540-tc-pp-220/) demande 128 L/min à la même pression.

Si les deux outils fonctionnent ensemble, le besoin nominal vaut `100 + 128 = 228 L/min à 6,3 bar`. Avec la [marge indicative CompatAir](/glossaire/#marge-compatair) de 25 %, le seuil vaut `228 × 1,25 = 285 L/min`.

## Pourquoi le TE-AC 430 ne suffit pas dans ce cas

L’[Einhell TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/) publie 210 L/min à 4 bar et 200 L/min à 7 bar. L’interpolation à 6,3 bar donne environ 202 L/min.

Ce débit couvre chaque outil pris séparément. Il reste cependant inférieur aux 228 L/min demandés lorsqu’ils fonctionnent simultanément. Une fiche peut donc être compatible avec deux outils individuellement sans l’être pour leur usage conjoint.

## Usages successifs

Si un seul opérateur arrête complètement la ponceuse avant d’utiliser la meuleuse, le besoin instantané maximal est 128 L/min, pas 228 L/min. Il faut néanmoins décrire honnêtement le fonctionnement réel. Une gâchette relâchée, une fuite permanente ou un second opérateur peuvent changer la simultanéité.

CompatAir n’applique pas de coefficient statistique universel. Le [manuel Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf) traite les facteurs d’utilisation et de simultanéité comme des données liées à l’installation. Sans mesure ou scénario précis, leur valeur reste inconnue.

## Pressions différentes

Avec une pompe de transfert, le point hydraulique détermine aussi le besoin d’alimentation. La [lecture de la courbe ARO 66605](/guides/pompe-membrane-aro-66605-debit-air/) permet de préparer ce poste sans additionner litres de liquide et litres d’air.

Lorsque deux outils n’utilisent pas la même pression, additionner directement deux valeurs sans définir l’architecture du réseau peut masquer un problème. Le compresseur, le détendeur, les branches et les pertes doivent être considérés. Le calculateur actuel traite un outil à la fois et ne prétend pas modéliser ce réseau.

Pour prolonger cette vérification, vous pouvez [calculer les litres d’air par cycle de vérin](/guides/consommation-verin-pneumatique-double-effet/).

Le [cas des vibreurs pneumatiques de trémie](/guides/vibreur-pneumatique-tremie-debit-compresseur/) illustre la différence entre appel instantané, durée d’activation et consommation moyenne.

Le [guide simple effet, double effet et retour par ressort](/guides/verin-simple-double-effet-ressort-retour/) prépare la lecture du cycle avant d’établir le besoin pneumatique.

## Sources

- [Atlas Copco, Compressed Air Manual, 9e édition](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
- [Einhell, TC-PE 150](https://www.einhell.fr/p/4133330-tc-pe-150/)
- [Einhell, TC-PP 220](https://www.einhell.fr/p/4138540-tc-pp-220/)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)
