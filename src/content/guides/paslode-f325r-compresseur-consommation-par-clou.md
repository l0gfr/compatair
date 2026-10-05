---
title: "Paslode F325R : calculer le besoin à partir de la consommation par clou"
seoTitle: "Paslode F325R : air par clou et besoin du compresseur"
description: "Le graphique F325R publie 0,090 SCF par fixation à 100 PSIG. Appliquez la cadence réelle et distinguez ce point de l’exemple générique de la notice."
pubDate: "2026-10-05"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["menuiserie-agencement", "btp-chantier"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-portatif-clouage-chantier", "makita-an924-compresseur-cadence-40-clous-minute", "installer-reseau-air-comprime-atelier"]
sources: ["https://www.paslode.com/getmedia/e09ddbab-37bc-45f5-9fb8-de342dad6f70/513057-7-COMPACT-FRAMER-F325R-Manual.pdf"]
---

**La notice du Paslode F325R, référence 513000, marque une consommation de 0,090 SCF par fixation à 100 PSIG.** Cette donnée permet de préparer un calcul lié à la cadence. Elle ne doit pas être remplacée par le chiffre d’un exemple générique figurant plus tôt dans la notice.

La [fiche CompatAir du F325R 513000](/outils-pneumatiques/agrafeuse-cloueuse-paslode-f325r-513000/) conserve ce profil par fixation. Le calcul présenté ici reste un scénario illustratif. Il ne constitue pas un essai du cloueur, une validation du chantier ni une capacité mesurée du compresseur.

## Utiliser le schéma qui nomme le F325R

La [page PDF 10](https://www.paslode.com/getmedia/e09ddbab-37bc-45f5-9fb8-de342dad6f70/513057-7-COMPACT-FRAMER-F325R-Manual.pdf#page=10) porte **F325R, 513000** et un graphique « SCF/FASTENER ». Le point marqué **0,090 SCF** correspond à **100 PSIG** sur l’axe de pression. L’unité décrit un volume par fixation ; elle ne décrit pas directement un débit par minute.

La [page PDF 8](https://www.paslode.com/getmedia/e09ddbab-37bc-45f5-9fb8-de342dad6f70/513057-7-COMPACT-FRAMER-F325R-Manual.pdf#page=8) présente une méthode de calcul et un exemple utilisant **0,051**. Elle demande de se reporter au schéma propre à l’outil. Attribuer automatiquement 0,051 au F325R ignorerait ce renvoi et son point identifié.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="paslode-f325r-compresseur-consommation-par-clou-title paslode-f325r-compresseur-consommation-par-clou-desc" xmlns="http://www.w3.org/2000/svg">
<title id="paslode-f325r-compresseur-consommation-par-clou-title">Paslode F325R : calculer le besoin à partir de la consommation par clou</title><desc id="paslode-f325r-compresseur-consommation-par-clou-desc">Repères du document constructeur ; voir les conditions et limites dans le texte.</desc><rect width="520" height="350" rx="20" fill="#10281e"/><rect x="24" y="24" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="58" fill="#d3eb56" font-size="22" font-weight="700">F325R, référence 513000</text><text x="44" y="98" fill="white" font-size="21">0,090 SCF par fixation à 100 PSIG</text><text x="44" y="136" fill="#8abfa3" font-size="18">Point marqué dans le schéma propre au modèle</text><rect x="24" y="180" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="214" fill="#d3eb56" font-size="22" font-weight="700">Exemple : 1 outil, 30 clous/min</text><text x="44" y="254" fill="white" font-size="21">3,24 SCFM avec le facteur 1,2</text><text x="44" y="292" fill="#8abfa3" font-size="18">Calcul illustratif selon la méthode Paslode</text></svg>
<figcaption>Conditions du document consulté ; les repères de diagnostic sont proposés par CompatAir.</figcaption>
</figure>


## Construire un scénario avec les unités

La méthode Paslode multiplie le nombre d’outils, la cadence de chacun, un facteur **1,2** et le volume par fixation au point de pression retenu. Le facteur est celui de cette méthode documentaire ; il ne doit pas être présenté comme une réserve validée pour tout réseau.

Pour **un F325R**, une cadence hypothétique de **30 clous par minute** et le point publié à **100 PSIG**, le calcul est :

**1 × 30 fixations/min × 1,2 × 0,090 SCF/fixation = 3,24 SCFM.**

Les fixations s’annulent dans les unités : le volume par fixation devient un volume par minute. La fréquence de 30 n’est pas une observation de chantier ; elle sert uniquement à montrer le calcul.

| Entrée du calcul | Statut dans cet exemple |
| --- | --- |
| 0,090 SCF par fixation à 100 PSIG | Point constructeur marqué dans le graphique |
| 1 outil | Hypothèse de scénario |
| 30 fixations/minute | Hypothèse de cadence |
| Facteur 1,2 | Méthode publiée dans la notice |
| 3,24 SCFM | Résultat arithmétique, sans réception physique |

## Ne pas déplacer la pression du point

Le volume par fixation est associé à sa pression. Le conserver à une autre pression sans donnée correspondante ferait perdre la condition qui rend le calcul traçable. Pour un autre scénario, recherchez le point applicable et faites confirmer une lecture de graphique incertaine.

La notice indique un fonctionnement de **90 à 120 psi** dans cette partie. Le débit restitué du compresseur doit être documenté au niveau utile, avec une régulation conforme au cloueur. Un débit aspiré ne remplace pas cette production utile.

## Décrire la simultanéité avant de multiplier

Le nombre d’outils est celui qui travaille dans le scénario, avec sa cadence, et non le nombre de cloueurs stockés dans l’atelier. Un poste à deux machines demande de noter leurs séquences simultanées. Les autres consommateurs ne disparaissent pas du bilan parce que la formule concerne des cloueurs.

Le [guide de dimensionnement pour cloueur](/guides/compresseur-portatif-clouage-chantier/) complète ce scénario. Le [cas AN924](/guides/makita-an924-compresseur-cadence-40-clous-minute/) montre une autre manière pour un fabricant de publier un besoin : un exemple directement lié à la fréquence.

## Passer du calcul à la réception

Dans l’exemple à 30 clous/minute, le volume publié donne 2,70 SCFM avant le facteur 1,2, puis 3,24 SCFM avec la méthode Paslode. Gardez ces deux étapes lisibles : la cadence est une hypothèse, la multiplication est un calcul et le volume de 0,090 SCF appartient au point 100 PSIG du F325R.

La réception vérifie ensuite la pression pendant la séquence retenue et le résultat d’enfoncement, avec les autres consommateurs présents. En cas de chute, le [guide du réseau d’atelier](/guides/installer-reseau-air-comprime-atelier/) étend le diagnostic à la distribution. Remplacer le point F325R par les 0,051 de l’exemple générique ferait échouer le calcul avant même cet essai.

## Sources et contrôle

Documents consultés le **5 octobre 2026**. Les propositions de relevé et de réception sont celles de CompatAir. Rédaction avec assistance d’IA et contrôle interne, sans essai physique ni validation professionnelle externe.
