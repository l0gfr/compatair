---
title: "Force d’un vérin pneumatique : pression, diamètre et effort réellement disponible"
seoTitle: "Force d’un vérin pneumatique : calcul et limites"
description: "Comprenez la force en poussée et en traction, l’effet de la tige et les limites du calcul théorique avant de choisir le diamètre d’un vérin."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["consommation-verin-pneumatique-double-effet", "regler-vitesse-verin-pneumatique-echappement", "pression-travail-6-3-bar-outils-pneumatiques"]
sources: ["https://www.festo.com/net/supportportal/files/10203/actuators", "https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf"]
---

**La force calculée par pression × surface est un point de départ.** Elle ne garantit pas qu’un vérin déplacera une charge à la vitesse souhaitée, dans les deux sens et pendant toute sa course. La tige, les frottements, les pressions des chambres et la mécanique de l’installation doivent rester visibles dans le raisonnement.

Ce guide répond à une question de dimensionnement. Il ne constitue pas une validation d’un dispositif de levage, de bridage de sécurité ou de maintien d’une personne.

## Poussée et traction n’utilisent pas la même surface

Dans un double effet à tige unique, la surface côté fond correspond au disque du piston. Côté tige, la tige retranche une partie de cette surface. Le [document de calcul Festo](https://www.festo.com/net/supportportal/files/10203/actuators) distingue ainsi l’effort de sortie et l’effort de rentrée. Les autres constructions doivent être traitées selon leur géométrie propre.

Pour un calcul théorique avec l’autre chambre à la pression atmosphérique, on peut écrire, diamètres en millimètres et pression relative en bar :

`F poussée = p × 0,1 × π × D² / 4`

`F traction = p × 0,1 × π × (D² − d²) / 4`

Le résultat est en newtons. Le facteur 0,1 assure la conversion entre bar et N/mm². La différence des surfaces explique pourquoi un même vérin ne fournit pas nécessairement le même effort dans les deux directions.

## Exemple théorique, sans promesse de capacité

**Exemple CompatAir hypothétique :** piston de 40 mm, tige de 16 mm, pression de 6 bar, sans frottement ni contre-pression. La poussée calculée vaut environ **754 N**, et la traction environ **633 N**. Les nombres proviennent de la géométrie précédente ; ils ne sont attribués à aucun produit du catalogue.

Si la chambre opposée reste sous pression, son action doit être retranchée. Pour une sortie, le bilan simplifié devient `p fond × surface piston − p tige × surface annulaire`, avec des unités cohérentes. Ce point relie le dimensionnement mécanique au [réglage de l’échappement](/guides/regler-vitesse-verin-pneumatique-echappement/).

<div class="article-infographic article-infographic--compact" role="group" aria-label="Force théorique à 6 bar">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="force-verin-pneumatique-diametre-pression-title force-verin-pneumatique-diametre-pression-desc" xmlns="http://www.w3.org/2000/svg">
<title id="force-verin-pneumatique-diametre-pression-title">Force théorique à 6 bar</title><desc id="force-verin-pneumatique-diametre-pression-desc">Exemple hypothétique : piston 40 mm, tige 16 mm, sans frottement ni contre-pression. Poussée 754 N, traction 633 N.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="43" fill="#d3eb56" font-size="24" font-weight="700">Exemple théorique à 6 bar</text>
<text x="28" y="84" fill="white" font-size="22" font-weight="400">Poussée</text>
<text x="355" y="84" fill="#d3eb56" font-size="22" font-weight="700">754 N</text>
<rect x="28" y="99" width="464.0" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="174" fill="white" font-size="22" font-weight="400">Traction</text>
<text x="355" y="174" fill="#d3eb56" font-size="22" font-weight="700">633 N</text>
<rect x="28" y="189" width="389.54" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="366" fill="white" font-size="19" font-weight="400">Aucune charge admissible garantie</text>
<text x="28" y="305" fill="white" font-size="22" font-weight="400">Piston 40 mm · tige 16 mm</text>

</svg>
</div>

*Calcul CompatAir hypothétique. Surfaces différentes en poussée et en traction ; frottement et contre-pression exclus.*

## Ne pas transformer une hypothèse de frottement en garantie

Les [conditions générales Festo](https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf) présentent une méthode intégrant un terme de frottement. Cela ne justifie pas d’appliquer une réduction forfaitaire à n’importe quel vérin. Pour un choix réel, demandez la force utile ou la méthode de sélection du fabricant dans les conditions prévues.

Notre proposition de dossier sépare trois informations : l’effort extérieur à vaincre, l’effort théorique calculé et la marge retenue par le concepteur. N’écrivez pas simplement « marge de sécurité incluse » sans préciser la situation couverte. Une réserve destinée aux frottements n’est pas, par elle-même, la validation d’une fonction de sécurité.

## Une charge qui se déplace demande plus qu’un calcul statique

Décrivez la masse, l’orientation du mouvement, l’accélération attendue, les frottements du guidage et les efforts du procédé. Si un mécanisme transforme le mouvement, fournissez sa géométrie sur toute la course : l’effort transmis n’est pas nécessairement constant.

Le [support Festo sur le flambage](https://www.festo.com/net/supportportal/files/10203/actuators) rappelle également que la charge admissible d’une tige longue dépend notamment de sa longueur et de son diamètre. Une force pneumatique suffisante ne prouve donc pas que la tige, ses fixations ou son guidage conviennent. Faites vérifier ces points dans le dossier mécanique, sans déduire une charge admissible d’un seul tableau de pression.

## Que faire quand le vérin manque de force ?

Avant de demander une pression supérieure, notez si le défaut apparaît toujours au même endroit, uniquement sous charge ou pendant les mouvements simultanés. Ce relevé proposé sert à préparer le diagnostic ; il ne désigne pas une pièce défectueuse.

Faites rapprocher les pressions au vérin, la charge et les caractéristiques de la machine. Si le diamètre doit changer, recalculer la [consommation par cycle](/guides/consommation-verin-pneumatique-double-effet/) évite d’améliorer l’effort tout en rendant l’alimentation insuffisante. Toute intervention ou mesure ajoutée au circuit doit suivre la procédure de mise en sécurité de la machine.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Festo, Engineering Support, force et flambage, pages PDF 22 à 24](https://www.festo.com/net/supportportal/files/10203/actuators)
- [Festo, General operating conditions, pages 15 à 16](https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf)
