---
title: "KAESER BSD 75 SFC : un petit besoin peut rester sous le débit minimal"
seoTitle: "KAESER BSD 75 SFC : comparer le débit minimal au besoin"
description: "Le BSD 75 SFC publie 1 540 à 7 440 L/min à 7,5 bar. Vérifier le bas de sa plage de variation avant de choisir une machine pour une faible demande."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["compresseur-vitesse-variable-vsd-rentabilite-atelier", "compresseur-piston-ou-vis-profil-charge", "utiliser-plusieurs-outils-pneumatiques"]
sources:
  - https://id.kaeser.com/download.ashx?id=tcm:148-5924
  - https://id.kaeser.com/download.ashx?id=tcm%3A148-5945
---

Un compresseur à vitesse variable possède une plage de production documentée. Sur le KAESER BSD 75 SFC, cette plage commence à **1 540 L/min à 7,5 bar** dans la brochure retenue. Une demande régulière de 1 000 L/min se situe sous ce minimum publié. Le maximum de 7 440 L/min laisse une grande réserve de capacité, mais il ne décrit pas à lui seul le fonctionnement de la machine pendant les heures calmes.

## Lire les deux extrémités de chaque ligne

La [brochure BSD, page PDF 10](https://id.kaeser.com/download.ashx?id=tcm:148-5924#page=10), distingue les versions standard, T, SFC et T SFC. Pour le BSD 75 SFC sans sécheur intégré, elle donne les valeurs suivantes :

| Pression de travail | Plage FAD publiée | Limite de pression de la configuration |
| --- | ---: | ---: |
| 7,5 bar | 1 540 à 7 440 L/min | 10 bar |
| 10 bar | 1 510 à 6 510 L/min | 10 bar |
| 13 bar | 1 160 à 5 540 L/min | 15 bar |

Les deux premières lignes appartiennent à la configuration de pression maximale de 10 bar. La ligne à 13 bar décrit une configuration différente, limitée à 15 bar. Les trois lignes ne constituent donc pas une courbe d’essai interchangeable sur n’importe quel exemplaire portant le nom BSD 75 SFC.

À pression donnée, l’intervalle décrit la variation de production associée au réglage de vitesse. Le minimum n’est ni une consommation électrique ni le débit d’air d’un outil. Le maximum indique la capacité de production annoncée dans les conditions de la brochure. La référence ISO 1217 et les conditions de pression absolue et de température figurent au pied du tableau.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 235" role="img" aria-labelledby="bsd-min-title bsd-min-desc">
<title id="bsd-min-title">Besoin hypothétique sous le minimum du BSD 75 SFC</title>
<desc id="bsd-min-desc">À 7,5 bar, un scénario de 1 000 litres par minute se situe sous la plage publiée de 1 540 à 7 440 litres par minute.</desc>
<rect width="440" height="235" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" fill="#eef2e9" font-size="15">
<text x="24" y="36">Point de référence : 7,5 bar</text>
<text x="24" y="76">Scénario de besoin</text><text x="416" y="76" text-anchor="end">1 000 L/min</text>
<text x="24" y="135">Minimum publié</text><text x="416" y="135" text-anchor="end">1 540 L/min</text>
<text x="24" y="208">Écart calculé : 540 L/min</text>
</g><rect x="24" y="88" width="200" height="18" rx="5" fill="#c7d0c6"/><rect x="24" y="147" width="308" height="18" rx="5" fill="#d3eb56"/>
</svg>
<figcaption>Le besoin de 1 000 L/min est une hypothèse pédagogique, à remplacer par une mesure de l’installation.</figcaption>
</figure>

## Une machine capable de fournir beaucoup d’air peut être mal adaptée aux heures creuses

Dans ce scénario, le minimum de production publié dépasse le besoin de 540 L/min. Le tableau suffit à constater que la demande sort du domaine de variation annoncé à ce point de pression. Il ne donne pas les durées de marche, les séquences d’arrêt ni la puissance absorbée pendant la régulation de votre installation.

Ces comportements dépendent aussi du pilotage, du volume de stockage, de la pression du réseau et des autres machines éventuellement présentes. Aucun pourcentage d’économie, nombre de démarrages ou temps de retour sur investissement ne peut être déduit de ce seul écart. Le [guide sur le choix du VSD en atelier](/guides/compresseur-vitesse-variable-vsd-rentabilite-atelier/) précise les données nécessaires à une comparaison économique.

Une demande moyenne de 1 000 L/min mérite d’ailleurs une seconde lecture. Elle peut résulter d’un poste stable à ce débit ou de pointes beaucoup plus fortes alternant avec des arrêts. Les deux profils ont la même moyenne arithmétique et sollicitent différemment la régulation. Le relevé doit conserver la demande dans le temps, sa pression et les périodes de simultanéité. La [méthode de relevé des postes](/guides/utiliser-plusieurs-outils-pneumatiques/) évite de confondre parc installé et production simultanée.

## Le service continu ne supprime pas le minimum de variation

La [documentation SFC, page PDF 8](https://id.kaeser.com/download.ashx?id=tcm%3A148-5945#page=8), déclare un cycle de service de 100 % pour les compresseurs à vitesse variable des séries SM SFC à HSD SFC. Cette déclaration concerne leur aptitude au fonctionnement continu dans les conditions prévues par le fabricant. Elle ne signifie pas que chaque modèle peut produire en permanence n’importe quel faible débit sous sa plage publiée.

Le même tableau BSD annonce pour la version SFC un moteur de 37 kW, une masse de 1 020 kg et des dimensions de 1 665 × 1 030 × 1 700 mm. La version T SFC ajoute un sécheur et change la masse ainsi que la largeur de l’ensemble. L’offre doit reprendre la configuration réellement envisagée.

Pour la [version BSD 75 SFC limitée à 10 bar](/compresseurs/kaeser-bsd-75-sfc-10-bar/), le dossier d’achat doit donc comporter les pointes de demande **et** les longues périodes de faible charge. Demandez au fournisseur le fonctionnement prévu sous le minimum publié, avec votre stockage et votre scénario. Une étude de régulation peut alors justifier la taille et l’organisation de la production, sans faire du maximum FAD un critère unique.
