---
title: "piSAVE ESL : des tubes de signal longs retardent la régulation du vide"
seoTitle: "piSAVE ESL : longueur des tubes et retard de réponse"
description: "Le tube de mesure et l’alimentation d’un piSAVE ESL ont des limites distinctes. Lire les lignes à 6 bar et localiser la cause du retard."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["diametre-longueur-flexible-air-comprime", "convertir-cfm-l-min-nl-min-air-comprime", "ventouse-piece-poreuse-debit-vide"]
sources: ["https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf"]
---

Le piSAVE ESL atteint le vide demandé avec retard après un déplacement de la pompe ou du régulateur. La pression d’alimentation peut être correcte et le tube de mesure pourtant trop long. **Piab traite séparément le trajet d’air vers la pompe et celui qui transmet le signal de vide.** Les deux longueurs ne se remplacent pas dans le diagnostic.

## Identifier les quatre trajets sur le montage

La [notice 0255863, page PDF 4, pages imprimées 13–16](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf#page=4) nomme A le tuyau d’arrivée au régulateur, B le tuyau ESL–pompe, D le flexible de vide et C1 ou C2 le tube de mesure. C1 prend le signal selon une première option de montage ; C2 permet une autre implantation. Le diamètre extérieur d’un tube ne donne pas sa section de passage : le [guide des diamètres de flexibles](/guides/diametre-longueur-flexible-air-comprime/) précise cette différence.

La longueur maximale recommandée de **C1 est celle de B**. Celle de **C2 est la somme B + D**. Piab indique que des tubes et tuyaux plus longs augmentent le temps nécessaire pour atteindre le niveau de vide réglé. La notice ne publie pas une formule donnant ce retard en millisecondes.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="piab-pisave-esl-tubes-signal-retard-regulation-title piab-pisave-esl-tubes-signal-retard-regulation-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="piab-pisave-esl-tubes-signal-retard-regulation-title">ESL : séparer alimentation et tube de mesure</title><desc id="piab-pisave-esl-tubes-signal-retard-regulation-desc">Pour 300–600 Nl/min à 6 bar, la notice recommande au plus 2 m entre ESL et pompe. Le tube de mesure C1 reste limité à la longueur de B.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="25" y="42" fill="#d3eb56" font-size="23" font-weight="700">Longueurs qui changent la réponse</text><path d="M45 136H469" stroke="#8abfa3" stroke-width="9"/><rect x="58" y="93" width="101" height="81" rx="12" fill="#d3eb56"/><text x="85" y="144" fill="#10281e" font-size="22" font-weight="700">ESL</text><rect x="363" y="93" width="101" height="81" rx="12" fill="#26775b"/><text x="378" y="144" fill="#eef2e9" font-size="21">Pompe</text><path d="M164 203H354M164 195v16M354 195v16" stroke="#eef2e9" stroke-width="2"/><text x="184" y="234" fill="#eef2e9" font-size="21">B : jusqu’à 2 m</text><text x="28" y="285" fill="#eef2e9" font-size="23">C1 ≤ B · C2 ≤ B + D</text><text x="28" y="320" fill="#eef2e9" font-size="19">3 m : non recommandé dans cette ligne</text></svg>
<figcaption>Pour 300–600 Nl/min à 6 bar, la notice recommande au plus 2 m entre ESL et pompe. Le tube de mesure C1 reste limité à la longueur de B.</figcaption>
</figure>

## Choisir une ligne du tableau avec le bon point de consommation

Le tableau porte sur la consommation de la pompe à **0,6 MPa, soit 6 bar**. Pour une pompe située dans la ligne **300–600 Nl/min**, il prescrit un tuyau A de diamètre extérieur/intérieur **12/9 mm**. Pour B, la recommandation est **10/7 mm jusqu’à 1 m**, puis **12/9 mm jusqu’à 2 m**. Un trajet B jusqu’à 3 m est marqué non recommandé. Dans la ligne **600–720 Nl/min**, B doit être **12/9 mm jusqu’à 1 m** ; les trajets jusqu’à 2 et 3 m sont non recommandés.

Ces nombres concernent les lignes du tableau, à leur point de pression. Ils ne permettent pas de classer une pompe dont la consommation n’est connue qu’à une autre pression. Le [guide des unités normalisées](/guides/convertir-cfm-l-min-nl-min-air-comprime/) rappelle aussi qu’un Nl/min ne doit pas être assimilé à un volume quelconque dans un flexible.

## Une vérification qui distingue restriction et délai

Commencer par le chemin B : mesurer sa longueur et son diamètre intérieur, puis vérifier la ligne documentaire de la pompe. Examiner ensuite C1 ou C2 avec le schéma réellement suivi. Une longueur de signal conforme ne corrige pas un tuyau B sous-dimensionné ; raccourcir B ne prouve pas que le signal suit le point de vide prévu.

Pour D, Piab demande un trajet court et un diamètre suffisant. Le contrôle de vide libre se fait pompe en marche, circuit ouvert à l’atmosphère, par exemple ventouses dans l’air. La notice indique une dépression optimale d’au plus **10 kPa**, avec **20 kPa au maximum**, dans sa notation « −kPa ». Ce contrôle porte sur la restriction du circuit ouvert, pas sur la force de maintien d’une pièce. Les [besoins d’une surface poreuse](/guides/ventouse-piece-poreuse-debit-vide/) restent une autre question.

Une amélioration de la réponse se vérifie ensuite sur le même montage et la même consigne. Sans mesure du temps avant et après, la conformité des tuyaux établit seulement que le montage suit les recommandations publiées.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Piab piSAVE ESL Standalone, notice 0255863 Rev00, décembre 2025](https://www.piab.com/globalassets/productimages/0255863_rev00_esl_standalone-en.pdf)
