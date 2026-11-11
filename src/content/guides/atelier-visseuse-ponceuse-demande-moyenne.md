---
title: "Visseuse et ponceuse : calculer un cycle d’atelier"
seoTitle: "Visseuse et ponceuse : calculer un cycle d’atelier"
description: "Exemple explicite avec Fiam 15C5A et RUPES RH356 : distinguer débit simultané, volume d’air par séquence et moyenne calculée sur une minute."
pubDate: 2026-09-26
updatedDate: 2026-11-11
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "stockage-primaire-secondaire-air-comprime"]
sources: ["https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a/", "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf", "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf"]
---

Un compresseur doit répondre aux demandes pendant l’action, mais aussi au volume consommé sur la durée. Pour montrer la différence, prenons un scénario pédagogique : une Fiam 15C5A utilisée 10 secondes et une RUPES RH356 utilisée 20 secondes dans une fenêtre d’une minute.

| Référence exacte | Données pneumatiques publiées | Autres repères |
| --- | --- | --- |
| [15C5A](/outils-pneumatiques/fiam-15c5a/) (112514375) | 330 L/min mesurés à 6,3 bar ; régime de consommation non précisé | Couple de serrage indicatif : 0.4 ÷ 5 Nm ; Vitesse à vide : 650 tr/min ; Masse publiée : 0.59 kg |
| [RH356](/outils-pneumatiques/rupes-rh356/) (RH356) | 340 L/min maximum ; pression de service de 6,2 bar sur une ligne distincte, sans pression de mesure de consommation précisée | Diamètre d’orbite : 6 mm ; Diamètre de plateau : 150 mm ; Masse publiée : 0,8 kg |

Sources fabricant consultées le 26 septembre 2026 : [Fiam 15C5A](https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a/), [RUPES RH356](https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=58).

## Calcul du volume de la séquence

Le calcul suppose des débits constants de 330 et 340 L/min pendant les durées choisies. Ces hypothèses servent à expliquer la moyenne d’une séquence ; la consommation réelle en charge reste à établir pour dimensionner l’installation.

| Outil | Hypothèse de durée | Volume calculé |
| --- | --- | --- |
| Fiam 15C5A, 330 L/min | 10 secondes | 330 × 10 / 60 = 55 L |
| RUPES RH356, 340 L/min maximum | 20 secondes | 340 × 20 / 60 ≈ 113,3 L |
| Total dans la minute | Scénario défini ci-dessus | Environ 168,3 L |

La moyenne du scénario est de 168,3 L/min sur cette minute. Si les deux débits supposés se chevauchent, leur somme arithmétique atteint 670 L/min. Cette somme décrit l’exemple, sans constituer une pointe réelle mesurée au poste.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Une minute hypothétique">
<svg viewBox="0 0 380 307" role="img" aria-labelledby="atelier-visseuse-ponceuse-demande-moyenne-title atelier-visseuse-ponceuse-demande-moyenne-desc" xmlns="http://www.w3.org/2000/svg"><title id="atelier-visseuse-ponceuse-demande-moyenne-title">Une minute hypothétique</title><desc id="atelier-visseuse-ponceuse-demande-moyenne-desc">Volume total calculé: 55 + 113,3 ≈ 168,3 L ; Moyenne de la minute: Environ 168,3 L/min ; Somme des débits supposés: 330 + 340 = 670 L/min</desc><rect width="380" height="307" rx="18" fill="#eef2e9"/><text x="20" y="32" font-size="19" font-weight="700" fill="#143426">Une minute hypothétique</text><text x="20" y="74" font-size="16" font-weight="700" fill="#143426">Volume total calculé</text><text x="20" y="97" font-size="15" font-weight="400" fill="#143426">55 + 113,3 ≈ 168,3 L</text><text x="20" y="136" font-size="16" font-weight="700" fill="#143426">Moyenne de la minute</text><text x="20" y="159" font-size="15" font-weight="400" fill="#143426">Environ 168,3 L/min</text><text x="20" y="198" font-size="16" font-weight="700" fill="#143426">Somme des débits supposés</text><text x="20" y="221" font-size="15" font-weight="400" fill="#143426">330 + 340 = 670 L/min</text><text x="20" y="260" font-size="12" font-weight="400" fill="#143426">Durées supposées ; aucun relevé d’atelier</text><text x="20" y="279" font-size="12" font-weight="400" fill="#143426">revendiqué.</text></svg>
</div>

## Passer de l’exemple au relevé réel

Chronométrez plusieurs séquences représentatives et identifiez les chevauchements. La [brochure Fiam, ligne 15C5A page 8 et conditions page 9](https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9) rattache ses mesures à 6,3 bar. RUPES indique une pression de service de 6,2 bar sur une ligne distincte du maximum de 340 L/min, sans préciser la pression de mesure de ce maximum. Obtenez les consommations en charge et leurs conditions avant de choisir le compresseur ; les calculs de l’exemple restent des hypothèses.

Ajoutez séparément les fuites et auxiliaires lorsqu’ils sont mesurés ou documentés. Ne les remplacez pas par une valeur présentée comme réelle sans relevé. Le [guide de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/) complète cette méthode.

Le résultat explique pourquoi une moyenne faible peut coexister avec une pointe élevée. Le choix de production, de réserve et de réseau doit tenir compte des deux, ainsi que du régime de service autorisé du compresseur.

La pression de référence est documentée dans [Fiam, brochure technique en-85, page PDF 9](https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9).
