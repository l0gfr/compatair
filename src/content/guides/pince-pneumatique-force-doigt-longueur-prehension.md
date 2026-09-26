---
title: "Pince pneumatique : force par doigt, longueur des mors et maintien de la pièce"
seoTitle: "Pince pneumatique : force par doigt et longueur des mors"
description: "Force totale ou par doigt ? Lisez les courbes d’une pince pneumatique avec le bras de levier et le sens de préhension avant d’en déduire une capacité de maintien."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "ventouse-piece-poreuse-debit-vide", "choisir-distributeur-pneumatique-debit-nominal"]
sources: ["https://www.festo.com/media/catalog/203154_documentation.pdf"]
---

**Une force annoncée pour une pince pneumatique n’est pas directement une masse de pièce admissible.** Il faut d’abord savoir si elle représente un mors ou l’ensemble, où elle est mesurée et dans quel sens la pince travaille. La géométrie des doigts montés doit ensuite faire partie du dossier de sélection.

Ce guide s’appuie sur la documentation d’une famille de pinces. Il ne donne pas de charge suspendue autorisée et ne remplace pas l’étude de maintien d’une machine.

## Force totale et force par mors

La [documentation Festo HGPT](https://www.festo.com/media/catalog/203154_documentation.pdf) distingue la force totale de préhension et la force par mors. Elle sépare l’ouverture et la fermeture, puis fournit des courbes dépendant de la pression et du bras de levier. Les efforts et moments admissibles sur un mors font l’objet d’autres données. Les variantes de maintien par ressort doivent également être identifiées dans la référence.

Pour comparer deux offres, recopiez l’intitulé complet de la grandeur. Deux nombres identiques peuvent représenter des périmètres différents : une somme sur plusieurs mors et une force applicable à un seul mors ne constituent pas la même information.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="pince-pneumatique-force-doigt-longueur-prehension-title pince-pneumatique-force-doigt-longueur-prehension-desc" xmlns="http://www.w3.org/2000/svg">
<title id="pince-pneumatique-force-doigt-longueur-prehension-title">Repérer le bras de levier du doigt</title><desc id="pince-pneumatique-force-doigt-longueur-prehension-desc">Schéma de lecture sans échelle ni capacité de maintien. L’origine exacte de x doit être reprise du dessin de la référence choisie.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="32" y="44" fill="white" font-size="23">Du mors au contact sur la pièce</text>
<rect x="40" y="145" width="130" height="94" rx="10" fill="#203f31" stroke="#8abfa3" stroke-width="2"/>
<text x="60" y="196" fill="white" font-size="22">Mors</text>
<path d="M170 184H400v30" fill="none" stroke="#d3eb56" stroke-width="16"/>
<rect x="345" y="232" width="115" height="75" rx="8" fill="#203f31" stroke="#8abfa3" stroke-width="2"/>
<text x="374" y="279" fill="white" font-size="20">Pièce</text>
<path d="M170 95v56M400 95v56M170 112h230m-220-7-10 7 10 7m210-14 10 7-10 7" fill="none" stroke="#8abfa3" stroke-width="2"/>
<text x="235" y="92" fill="#d3eb56" font-size="22">Distance x</text>
<path d="M400 204v32m-7-10 7 10 7-10" stroke="white" stroke-width="3" fill="none"/>
<text x="32" y="350" fill="white" font-size="21">Lire la courbe : pression + x + sens</text><text x="32" y="378" fill="#8abfa3" font-size="19">Force par mors ≠ masse admissible</text>
</svg>
<figcaption>Repérer le bras de levier du doigt. Schéma de lecture sans échelle ni capacité de maintien. L’origine exacte de x doit être reprise du dessin de la référence choisie.</figcaption>
</figure>

## Le doigt ajouté déplace le point de travail

Le point de contact avec la pièce peut être éloigné du mors de base. La comparaison doit utiliser le bras de levier défini dans le dessin du fabricant, avec la même origine. Une longueur hors tout du doigt ne doit pas être substituée sans vérification à la cote utilisée par la courbe.

Notre méthode de préparation consiste à joindre un croquis coté : pince, doigt, point de contact et pièce. Le fournisseur peut alors indiquer la courbe applicable et les charges à vérifier. Ce croquis est plus utile qu’une photographie seule pour retrouver la géométrie qui a servi à la sélection.

## Choisir le bon sens de préhension

Un serrage extérieur par fermeture et une prise intérieure par ouverture ne se lisent pas dans la même rubrique. Relevez le sens utilisé, la course utile et la position de la pièce. Le modèle exact, la taille et les options doivent être figés avant de retenir une courbe.

| Ligne du dossier | Vérification attendue |
| --- | --- |
| Force publiée | Totale ou par mors, ouverture ou fermeture |
| Pression | Condition associée à la valeur ou à la courbe |
| Bras de levier | Cote prise depuis l’origine constructeur |
| Doigts rapportés | Géométrie, masse et fixation documentées |
| Pièce et trajectoire | Contacts et sollicitations décrits |
| Perte d’alimentation | Comportement étudié pour la configuration exacte |

Cette grille ne fixe aucun coefficient de sécurité universel. Les hypothèses et critères d’acceptation doivent être établis dans le dimensionnement de l’application.

## Pourquoi ne pas diviser simplement des newtons par la pesanteur ?

La force de serrage annoncée agit dans le sens défini par le mécanisme. La capacité à retenir la pièce dépend du mode de contact et des sollicitations du projet. Sans leur description, convertir un nombre de newtons en kilogrammes ne résout pas le problème de maintien.

Nous ne supposons donc pas de coefficient de frottement à partir d’un simple nom de matériau. Demandez au concepteur quelles données ont été utilisées et comment elles seront vérifiées avec l’état réel des surfaces. Si le maintien d’une charge présente un risque, sa protection doit être étudiée au niveau de la machine.

## Réceptionner avec les pièces prévues

Le protocole proposé conserve la référence des pièces, leurs états représentatifs, les doigts montés et le cycle convenu. Les critères de maintien, de position et de fonctionnement doivent être écrits avant l’essai. Une réussite sur une pièce choisie ne prouve pas la totalité du domaine prévu.

Une variante à ressort ne dispense pas de documenter le comportement attendu lors d’une perte d’air. Faites préciser ce que la référence garantit et ce que le circuit et la mécanique doivent encore assurer.

Pour une alternative par le vide, le [guide des ventouses sur pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) présente une autre logique de sélection. Dans les deux cas, la preuve utile porte sur une configuration et un cycle, pas sur un chiffre commercial isolé.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Festo, documentation HGPT, forces par mors et courbes selon le bras de levier](https://www.festo.com/media/catalog/203154_documentation.pdf)
