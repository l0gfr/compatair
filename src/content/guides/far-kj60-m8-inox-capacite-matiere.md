---
title: "FAR KJ60 : pourquoi M8 ne couvre pas les écrous en inox"
seoTitle: "FAR KJ60 : M8 inox, tête, mandrin et course"
description: "Le FAR KJ60 exclut les écrous M8 en inox. Vérifiez la matière, le couple tête-mandrin et la course avant de mettre en cause l’alimentation d’air."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-riveteuse-pneumatique", "diagnostiquer-chute-pression-air-comprime", "fiche-intervention-air-comprime"]
sources: ["https://www.far.bo.it/en/download/use-and-maintenance-manual/category/3-riveting-tools-for-blind-rivet-nuts.html?download=35%3Akj60", "https://www.far.bo.it/en/products/riveting-tools-for-blind-rivet-nuts/hydropneumatic-tools/kj60.html"]
---

**Un écrou à sertir M8 en inox sort du domaine annoncé pour le FAR KJ60.** Changer le mandrin ou augmenter la pression ne supprime pas cette exclusion. Avant de préparer un assemblage, le filetage et la matière doivent être lus ensemble.

La [fiche FAR du KJ60](https://www.far.bo.it/en/products/riveting-tools-for-blind-rivet-nuts/hydropneumatic-tools/kj60.html) annonce M3 à M8 et exclut explicitement l’inox M8. La [notice 750313, révision 24, page 12](https://www.far.bo.it/en/download/use-and-maintenance-manual/category/3-riveting-tools-for-blind-rivet-nuts.html?download=35%3Akj60#page=12) reprend cette restriction. Elle concerne un outil pour écrous à sertir filetés. Une référence de riveteuse pour rivets aveugles ne constitue donc pas une alternative automatique.

## Le premier tri se fait sur la fixation

Relevez la référence de l’écrou, son filetage, sa matière et l’épaisseur de l’assemblage. La mention « M8 » seule ne permet pas de préparer le poste. Un achat comportant une tête M8 peut donner l’impression que tout écrou de ce filetage est admissible ; l’exclusion inox reste applicable.

Pour le M8 inox, la décision est déjà possible sans essai : sélectionner un autre outil dont le fabricant documente cet usage. Pour un insert situé dans le domaine nominal du KJ60, il reste à vérifier la fixation complète et les conditions de pose. La plage de l’outil n’est pas une qualification de chaque combinaison d’écrou et d’épaisseur.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="far-kj60-m8-inox-capacite-matiere-svg-title far-kj60-m8-inox-capacite-matiere-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="far-kj60-m8-inox-capacite-matiere-svg-title">Une même dimension, deux décisions</title><desc id="far-kj60-m8-inox-capacite-matiere-svg-desc">Le KJ60 accepte la plage M3 à M8 annoncée, avec une exclusion explicite : M8 en inox. Schéma de sélection, sans effort de sertissage calculé.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="30" y="42" fill="white" font-size="21">M8 : conserver la matière dans la référence</text><path d="M260 80v45m0 0H125v35m135-35h135v35" stroke="#9ebdad" stroke-width="3" fill="none"/><rect x="35" y="165" width="205" height="90" rx="12" fill="#203f31"/><rect x="280" y="165" width="205" height="90" rx="12" fill="#203f31"/><text x="58" y="199" fill="white" font-size="19">Autres matières</text><text x="58" y="229" fill="#d3eb56" font-size="19">Vérifier l’insert</text><text x="304" y="199" fill="white" font-size="19">Inox M8</text><text x="304" y="229" fill="#f5a798" font-size="19">Exclu par FAR</text><text x="30" y="302" fill="white" font-size="20">Tête + mandrin + insert : même filetage</text></g>
</svg>
<figcaption>Le KJ60 accepte la plage M3 à M8 annoncée, avec une exclusion explicite : M8 en inox. Schéma de sélection, sans effort de sertissage calculé.</figcaption>
</figure>

## Une tête de bonne taille ne suffit pas

La [page 13 de la notice](https://www.far.bo.it/en/download/use-and-maintenance-manual/category/3-riveting-tools-for-blind-rivet-nuts.html?download=35%3Akj60#page=13) demande un couple tête/mandrin adapté à l’insert. Elle relie le réglage de course à la taille et à l’épaisseur à serrer, et avertit qu’une mauvaise course peut produire un serrage défectueux ou casser le mandrin.

Cette séquence donne deux contrôles séparés : la compatibilité des pièces montées, puis le réglage pour l’assemblage. Si l’équipe change d’écrou ou d’épaisseur, recopier le précédent réglage sans examen ne répond pas à la seconde question. Préparez une fiche de réglage propre à la fixation, avec un échantillon identifié et les critères de pose fournis pour cet assemblage.

| Situation rencontrée | Décision à prendre |
| --- | --- |
| M8 inox demandé | Écarter le KJ60 dans le domaine publié |
| Écrou nominalement admissible, tête ou mandrin non identifiés | Retrouver les références des deux pièces avant réglage |
| Même écrou, nouvelle épaisseur d’assemblage | Reprendre le réglage de course prévu par la notice |
| Insert mal serré après changement de série | Examiner course et montage avant d’attribuer le défaut au compresseur |

## Contrôler l’air sans élargir la capacité

La page 12 publie une pression de travail de **6 bar**, un tuyau d’alimentation de **8 mm de diamètre intérieur au minimum**, ainsi que **9 Nl par cycle**. Ces grandeurs servent à examiner l’alimentation. Elles ne rendent pas admissible une fixation exclue.

Un manomètre lu avant le cycle ne décrit pas toute l’alimentation pendant la pose. Pour documenter un défaut intermittent, utilisez le [protocole de recherche d’une chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) et conservez la configuration du flexible et des raccords. La [distinction entre volume par action et débit](/guides/max-cn890f3-volume-cycle-cadence-clouage/) évite également de lire les 9 Nl comme un débit permanent.

Si la pression au poste est correcte mais que la pose reste défectueuse, la fixation et le réglage gardent leur propre examen. La fiche d’incident doit contenir une photographie de l’insert posé, la référence des pièces et la course utilisée, plutôt qu’une demande générale de « plus de puissance ».

## Préparer un changement d’outil documenté

Demandez au fournisseur de la fixation un outil et une procédure correspondant au M8 inox exact. La comparaison doit conserver la matière, la plage d’épaisseur et la configuration de tête/mandrin. Une force maximale isolée ne démontre pas cette compatibilité.

Le [guide de sélection d’une riveteuse pneumatique](/guides/compresseur-pour-riveteuse-pneumatique/) aide à distinguer les familles et leurs besoins d’air. Pour archiver le réglage et les contrôles effectués, la [fiche d’intervention](/guides/fiche-intervention-air-comprime/) fournit un support réutilisable au prochain changement de série.

La [fiche du FAR KJ60](/outils-pneumatiques/riveteuse-far-kj60/) conserve les caractéristiques documentées et les limites du calcul de consommation. Utilisez la référence exacte pour préparer la demande au fournisseur.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
