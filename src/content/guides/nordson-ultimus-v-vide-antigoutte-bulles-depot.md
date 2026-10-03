---
title: "Ultimus V : un vide antigoutte excessif peut reprendre le dépôt et créer des bulles"
seoTitle: "Ultimus V : vide excessif, dépôt repris et bulles"
description: "La notice Ultimus V relie vide excessif, dépôt aspiré et bulles à un dosage irrégulier. Vérifiez la stabilité après le tir avant de compenser la dose."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["nordson-ultimus-v-auto-increment-count-time-sequence", "nordson-ultimus-v-optimeter-vidage-seringue", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74"]
---

**Sur un Nordson EFD Ultimus V, davantage de vide antigoutte n’améliore pas toujours la régularité.** Si le dépôt est repris dans la pointe ou que des bulles apparaissent dans la seringue, la notice décrit un réglage excessif pouvant rendre le dosage irrégulier.

La [page 18 du manuel Ultimus V](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74#page=18) explique que le vide s’oppose à la pression due à la hauteur de fluide dans la seringue. Elle demande de stabiliser le dépôt sans l’aspirer dans la pointe et sans former de bulles. La cible est donc un comportement observable entre les tirs, pas un maximum de vide.

## Décrire la dérive du dépôt après la commande

Un dépôt qui continue à grossir et un dépôt qui diminue après le tir correspondent à deux observations différentes. Conservez l’état de la pointe, la référence de seringue, le fluide et le comportement juste après la fin de commande.

La procédure du manuel utilise une surface d’essai et un contrôle du dépôt. Elle ajuste le vide par pas prévus, puis redonne la pression de production une fois le réglage établi. Ce guide ne reprend pas un nombre universel de vide à appliquer à tous les fluides : le comportement dépend du montage décrit et du matériau dosé.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="nordson-ultimus-v-vide-antigoutte-bulles-depot-svg-title nordson-ultimus-v-vide-antigoutte-bulles-depot-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="nordson-ultimus-v-vide-antigoutte-bulles-depot-svg-title">Le vide doit retenir le fluide sans reprendre le dépôt</title><desc id="nordson-ultimus-v-vide-antigoutte-bulles-depot-svg-desc">La notice Ultimus V décrit un réglage qui stabilise le dépôt. Un vide excessif peut le ramener dans la pointe ou former des bulles dans la seringue ; schéma qualitatif sans valeur de réglage.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="21">Ultimus V : observer le dépôt après le tir</text><rect x="210" y="86" width="85" height="104" rx="8" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><path d="M227 190h52l-19 54h-13z" fill="#9ebdad"/><ellipse cx="253" cy="268" rx="41" ry="13" fill="#d3eb56"/><path d="M253 254v-44m-8 12 8-12 8 12" stroke="#f5a798" stroke-width="3" fill="none"/><text x="31" y="147" fill="white" font-size="19">Trop de vide :</text><text x="31" y="179" fill="white" font-size="19">dépôt repris</text><text x="324" y="147" fill="white" font-size="19">Ou bulles</text><text x="324" y="179" fill="white" font-size="17">dans la seringue</text><text x="28" y="323" fill="white" font-size="21">Le résultat attendu : un dépôt stable.</text></g>
</svg>
<figcaption>La notice Ultimus V décrit un réglage qui stabilise le dépôt. Un vide excessif peut le ramener dans la pointe ou former des bulles dans la seringue ; schéma qualitatif sans valeur de réglage.</figcaption>
</figure>

## Ne pas compenser une reprise du dépôt par une dose plus grande

Dans un scénario de diagnostic, augmenter le temps de tir pour retrouver un diamètre final pourrait masquer que le dépôt est ensuite repris. La correction doit d’abord porter sur le phénomène observé ; une dose finale semblable ne prouve pas que les conditions entre les tirs sont identiques.

Ce raisonnement est une proposition de contrôle, pas un essai de dosage. Il demande de comparer le dépôt au bon moment, en gardant le même fluide et le même montage. La mesure retenue doit correspondre au procédé : masse, volume ou géométrie de dépôt selon ses critères qualifiés.

| Observation | Question à traiter |
| --- | --- |
| Le dépôt continue à augmenter après le tir | Contrôle antigoutte prévu dans la notice |
| Le dépôt revient dans la pointe | Vide excessif décrit par le fabricant |
| Bulles dans la seringue | Même avertissement, à examiner avec les autres conditions du fluide |
| Dispersion malgré dépôt stable | Chercher d’autres changements de dosage, sans attribuer toute dérive au vide |

## Revoir séparément recette et niveau de seringue

Le [guide Ultimus V modes de passage](/guides/nordson-ultimus-v-auto-increment-count-time-sequence/) traite les changements programmés de temps, pression et vide. Si la recette change pendant la série, l’état de la cellule doit être relevé avec le dépôt. Une modification volontaire du vide ne doit pas être interprétée comme un réglage resté constant.

Le [cas Optimeter et vidage de seringue](/guides/nordson-ultimus-v-optimeter-vidage-seringue/) traite une autre variation, celle du système au cours du vidage. L’antigoutte ne doit pas être présenté comme une correction générale de cette évolution.

Pour examiner l’alimentation pneumatique, le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) aide à relier les relevés au cycle. La prochaine action est d’exécuter le contrôle de stabilisation de dépôt prévu par le manuel sur une surface d’essai autorisée, puis de vérifier le résultat avec les paramètres de production. L’absence de goutte visible ne certifie pas à elle seule la répétabilité de la quantité déposée.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
