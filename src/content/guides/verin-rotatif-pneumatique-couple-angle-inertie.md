---
title: "Vérin rotatif pneumatique : choisir avec le couple, l’angle et l’inertie"
seoTitle: "Vérin rotatif : couple, angle et inertie à vérifier"
description: "Un couple annoncé ne suffit pas à choisir un vérin oscillant. Lisez angle, inertie et charges avec le cas Festo DRVS-32-90-P, puis préparez le cycle réel."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["moteur-pneumatique-couple-demarrage-debit", "choisir-distributeur-pneumatique-debit-nominal", "regler-vitesse-verin-pneumatique-echappement"]
sources: ["https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/FR_FR/1845719.pdf", "https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders/rotary-actuators-id_pim217"]
---

**Le choix d’un vérin rotatif ne se réduit pas au couple disponible.** L’angle, le mouvement de la charge et les efforts appliqués à l’axe doivent être examinés ensemble. Un mécanisme capable de déplacer une charge lentement n’est pas automatiquement validé pour le cycle accéléré d’une machine.

Le dossier ci-dessous concerne un actionneur oscillant avec une course angulaire délimitée. Pour un entraînement tournant en continu, consultez aussi le [guide des moteurs pneumatiques](/guides/moteur-pneumatique-couple-demarrage-debit/) et identifiez la famille réellement nécessaire.

## Lire une référence complète

[Festo](https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders/rotary-actuators-id_pim217) distingue notamment les actionneurs rotatifs à palette et les mécanismes à pignon-crémaillère. La [fiche du DRVS-32-90-P, article 1845719](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/FR_FR/1845719.pdf) décrit un vérin à palette, à double effet, avec une oscillation de **0 à 90°**. Elle indique **10 N·m de couple théorique à 6 bar** et un **moment d’inertie de masse admissible de 0,02 kg·m²**. Les charges axiales et radiales figurent dans des rubriques séparées.

Ces indications ne sont pas interchangeables. L’inertie n’est pas une masse transportable exprimée en kilogrammes, et le couple théorique n’est pas une garantie de cycle pour tout montage.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="verin-rotatif-pneumatique-couple-angle-inertie-title verin-rotatif-pneumatique-couple-angle-inertie-desc" xmlns="http://www.w3.org/2000/svg">
<title id="verin-rotatif-pneumatique-couple-angle-inertie-title">La distance change l’inertie</title><desc id="verin-rotatif-pneumatique-couple-angle-inertie-desc">Modèle pédagogique d’une masse ponctuelle de 1 kg. Doubler le rayon multiplie son inertie par quatre ; aucun montage réel n’est validé.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="32" y="44" fill="white" font-size="23">Même masse · deux rayons</text>
<circle cx="72" cy="134" r="8" fill="white"/><path d="M72 134h140" stroke="#8abfa3" stroke-width="5"/><circle cx="212" cy="134" r="22" fill="#d3eb56"/>
<text x="112" y="102" fill="white" font-size="22">0,10 m</text><text x="267" y="141" fill="white" font-size="22">J = 0,01 kg·m²</text>
<circle cx="72" cy="247" r="8" fill="white"/><path d="M72 247h280" stroke="#8abfa3" stroke-width="5"/><circle cx="352" cy="247" r="22" fill="#d3eb56"/>
<text x="166" y="217" fill="white" font-size="22">0,20 m</text><text x="237" y="301" fill="white" font-size="22">J = 0,04 kg·m²</text>
<text x="32" y="362" fill="#d3eb56" font-size="24">J = m × r² · exemple hypothétique</text>
</svg>
<figcaption>La distance change l’inertie. Modèle pédagogique d’une masse ponctuelle de 1 kg. Doubler le rayon multiplie son inertie par quatre ; aucun montage réel n’est validé.</figcaption>
</figure>

## Pourquoi la position de la masse compte

Pour comprendre la différence, considérons un **modèle mathématique simplifié**, sans l’utiliser pour sélectionner un produit : une masse ponctuelle de 1 kg située à 0,10 m de l’axe. Son inertie autour de cet axe vaut **J = m × r² = 0,01 kg·m²**. À 0,20 m, la même masse donne **0,04 kg·m²**.

Doubler la distance multiplie ici l’inertie par quatre. Ce calcul élémentaire ne représente ni la géométrie d’une pièce réelle ni l’ensemble de son outillage. Il montre seulement pourquoi demander « combien de kilos peut-il tourner ? » laisse une information décisive de côté.

Dans un projet réel, faites déterminer l’inertie totale avec les pièces, les doigts ou supports et leur position. Ne comparez pas directement cet exemple pédagogique à la limite d’un vérin pour déclarer un montage conforme.

## Décrire le mouvement demandé

Notre fiche de sélection commence par une description du cycle, avant toute référence produit. Elle conserve la position de départ et d’arrivée, le temps de mouvement, les temps d’attente et les conditions de charge.

| Donnée du cycle | Question pour le dimensionnement |
| --- | --- |
| Angle utile | Quelle course est réellement nécessaire ? |
| Charge et géométrie | Quelle inertie tourne autour de l’axe ? |
| Orientation de l’axe | Quels couples résistants doivent être examinés ? |
| Temps de mouvement | Quel profil de vitesse est attendu ? |
| Arrêt et maintien | Quelles conditions aux positions finales ? |
| Efforts sur l’arbre | Quelles charges et quels moments sont appliqués ? |

Ce tableau est une méthode de préparation, pas un outil de calcul certifié. L’intégrateur doit vérifier le cycle avec les données complètes du fabricant et les accessoires retenus.

## Le circuit pneumatique fait partie de l’essai

Conservez la pression disponible pendant le mouvement et les références du distributeur, des raccords et des réglages de débit. Le [guide du débit nominal des distributeurs](/guides/choisir-distributeur-pneumatique-debit-nominal/) explique pourquoi leur taille de raccord ne suffit pas à les comparer.

Nous proposons de documenter séparément un problème de pression d’alimentation et un problème de comportement mécanique. Modifier plusieurs paramètres à la fois rend le diagnostic difficile à reproduire. Tout réglage doit rester dans la procédure autorisée de la machine.

## Ce que doit conclure la réception

Le résultat attendu n’est pas seulement « la pièce tourne ». La réception doit établir que le cycle convenu est obtenu dans les conditions retenues, avec les critères d’arrêt, de position et de fonctionnement prévus au projet.

Conservez les limites acceptées et la configuration exacte. Un changement de support ou de distance de la pièce à l’axe doit être traité comme une évolution du dossier de charge, même si la masse totale reste identique.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Festo, fiche DRVS-32-90-P, article 1845719](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/FR_FR/1845719.pdf)
- [Festo, principes et familles d’actionneurs rotatifs](https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders/rotary-actuators-id_pim217)
