---
title: "DA400 : alimenter des codeurs linéaires et angulaires avec les bons raccords"
seoTitle: "DA400 : débit des codeurs et raccord à restriction"
description: "Un codeur linéaire demande 7 L/min et un angulaire 2 L/min dans la fiche DA400. Construire le total avec les raccords et leur point de pression."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "tube-pneumatique-6mm-un-quart-diametre-exterieur", "diametre-longueur-flexible-air-comprime"]
sources: ["https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf"]
---

Dix codeurs raccordés ne représentent pas automatiquement dix besoins identiques. La fiche DA400 distingue l’air de barrage d’un codeur linéaire et celui d’un codeur angulaire. **Le bilan se construit avec le type de chaque codeur et le raccord à restriction prévu.**

## Un total qui part des appareils réellement raccordés

La [fiche HEIDENHAIN, page 2](https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf#page=2) indique **7 L/min par codeur linéaire** et **2 L/min par codeur angulaire**. Elle annonce jusqu’à **dix codeurs** raccordables. Les raccords avec étranglement sont prévus pour fournir ces volumes à environ **1 bar** à leur entrée.

Dans un scénario propre de **six codeurs linéaires et quatre angulaires**, le total arithmétique est **6 × 7 + 4 × 2 = 50 L/min**. Ce total n’intègre aucune fuite et n’est pas une mesure de l’installation. Le [guide des régimes d’utilisation](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à distinguer une somme documentaire d’une demande observée.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 347" role="img" aria-labelledby="heidenhain-da400-codeurs-debit-raccords-title heidenhain-da400-codeurs-debit-raccords-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="heidenhain-da400-codeurs-debit-raccords-title">DA400 : besoins différents des codeurs</title><desc id="heidenhain-da400-codeurs-debit-raccords-desc">HEIDENHAIN publie 7 L/min par codeur linéaire et 2 L/min par codeur angulaire. Le scénario de six linéaires et quatre angulaires totalise 50 L/min.</desc><rect width="520" height="347" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="25" font-weight="700">Scénario : 10 codeurs</text><text x="33" y="105" fill="#eef2e9" font-size="23">6 linéaires × 7 = 42 L/min</text><path d="M35 132H425" stroke="#d3eb56" stroke-width="16"/><text x="33" y="206" fill="#eef2e9" font-size="23">4 angulaires × 2 = 8 L/min</text><path d="M35 233H109.286" stroke="#8abfa3" stroke-width="16"/><text x="33" y="306" fill="#eef2e9" font-size="26">Total calculé : 50 L/min</text></svg>
<figcaption>HEIDENHAIN publie 7 L/min par codeur linéaire et 2 L/min par codeur angulaire. Le scénario de six linéaires et quatre angulaires totalise 50 L/min.</figcaption>
</figure>

## Les raccords ne sont pas interchangeables par leur seule dimension

La [page 3, Accessories](https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf#page=3) identifie des raccords pour tube **6 × 1 mm** : **226270-02** pour un codeur linéaire, montage en extrémité avec joint ; **275239-01** pour un codeur linéaire, sur bloc de montage ; **207835-04** pour un codeur angulaire, avec étranglement et joint.

Les débits indiqués sur cette planche sont respectivement **7 ± 0,5 L/min** et **2 ± 0,2 L/min**, sous **1 ± 0,2 bar**. Remplacer un raccord angulaire par un raccord linéaire au motif que le tube se monte ne conserve donc pas la même fonction de dosage. La [différence entre diamètre extérieur et passage intérieur](/guides/tube-pneumatique-6mm-un-quart-diametre-exterieur/) précise ce qu’identifie réellement le marquage du tube.

## La pression du DA400 dépend aussi de la distribution

La sortie du DA400 est réglable de **0,5 à 3 bar**. HEIDENHAIN précise que le réglage dépend du nombre de codeurs et de l’architecture de distribution. La pression locale du raccord ne se déduit donc pas uniquement du manomètre de sortie, sans examiner le trajet.

| Élément du bilan | Preuve à obtenir |
| --- | --- |
| Type de chaque codeur | Notice de l’appareil et besoin d’air de barrage |
| Référence du raccord | Étranglement prévu, montage et débit publié |
| Distribution | Série ou parallèle réellement utilisée, longueurs et raccordements |
| Pression au raccord | Conditions correspondant au point de débit annoncé |

Le [guide de diamètre et longueur des flexibles](/guides/diametre-longueur-flexible-air-comprime/) explique pourquoi une restriction locale reste possible. La valeur maximale **360 L/min** donnée pour le DA400 n’est ni le besoin de dix codeurs, ni une mesure FAD d’un compresseur.

Pour ajouter un codeur, refaire d’abord la liste des types et raccords. Le total calculé donne une demande documentaire ; la pression au point pertinent et la qualité d’air doivent encore satisfaire les notices. Aucune marge universelle ou autonomie de cuve n’est déduite ici de la seule capacité du DA400.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [HEIDENHAIN DA400, information produit, février 2025](https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf)
