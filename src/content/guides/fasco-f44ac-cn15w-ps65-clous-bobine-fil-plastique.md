---
title: "F44AC CN15W-PS65 : une bobine de 15° ne suffit pas à garantir la compatibilité"
seoTitle: "FASCO F44AC : clous fil ou plastique à 15°"
description: "Le F44AC CN15W-PS65 accepte des plages différentes en fil et plastique. Vérifier longueur, pas, format CN-AG et platine avant de choisir une bobine."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["btp-chantier", "menuiserie-agencement"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["cloueur-clous-mal-enfonces-pression-profondeur", "cloueur-pneumatique-declenchement-sequentiel-contact", "max-cn890f3-volume-cycle-cadence-clouage"]
sources: ["https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F44AC%20CN15W-PS65_EN_2304_screen.pdf"]
---

Une bobine annoncée à 15° peut rester incompatible avec le F44AC CN15W-PS65. La fiche BECK/FASCO sépare liaison par fil et bande plastique, avec des longueurs et pas différents. **Le seul angle ne suffit pas pour choisir la fixation.**

## Le tableau distingue deux familles de clous

La [fiche F44AC, page 2, édition avril 2023](https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F44AC%20CN15W-PS65_EN_2304_screen.pdf#page=2) donne des clous liés par fil de **25 à 65 mm**, et des clous sur bande plastique de **32 à 65 mm**. Les deux familles ont un diamètre de **2,10 à 2,50 mm** et une tête de **5 à 6 mm** dans cette fiche.

Le pas est **7–8 mm pour le fil** et **7,50 mm pour le plastique**. Le type plastique est décrit comme **15° Plastic Sheet Coil Nails, CN-AG**. Une bobine de 28 mm à 15° ne se qualifie donc pas dans la colonne plastique de ce tableau, même si elle ressemble à une bobine plus longue.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 333" role="img" aria-labelledby="fasco-f44ac-cn15w-ps65-clous-bobine-fil-plastique-title fasco-f44ac-cn15w-ps65-clous-bobine-fil-plastique-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="fasco-f44ac-cn15w-ps65-clous-bobine-fil-plastique-title">F44AC : deux plages de longueur à distinguer</title><desc id="fasco-f44ac-cn15w-ps65-clous-bobine-fil-plastique-desc">Les clous liés par fil vont de 25 à 65 mm ; les clous sur bande plastique vont de 32 à 65 mm dans la fiche F44AC CN15W-PS65.</desc><rect width="520" height="333" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="23" font-weight="700">15° commun · longueurs différentes</text><text x="30" y="104" fill="#eef2e9" font-size="23">Fil métallique</text><path d="M60 141H460" stroke="#8abfa3" stroke-width="3"/><path d="M213.846 141H460" stroke="#d3eb56" stroke-width="14"/><text x="205" y="178" fill="#eef2e9" font-size="21">25</text><text x="435" y="178" fill="#eef2e9" font-size="19">65 mm</text><text x="30" y="226" fill="#eef2e9" font-size="23">Bande plastique</text><path d="M60 259H460" stroke="#8abfa3" stroke-width="3"/><path d="M256.923 259H460" stroke="#d3eb56" stroke-width="14"/><text x="251" y="297" fill="#eef2e9" font-size="21">32</text><text x="435" y="297" fill="#eef2e9" font-size="19">65 mm</text></svg>
<figcaption>Les clous liés par fil vont de 25 à 65 mm ; les clous sur bande plastique vont de 32 à 65 mm dans la fiche F44AC CN15W-PS65.</figcaption>
</figure>

## La capacité du magasin ne remplace pas le format

BECK annonce **250–400 clous** pour le magasin avec liaison par fil et **200** pour la bande plastique. Ce nombre ne définit ni diamètre, ni longueur, ni pas. Commander uniquement sur la capacité annoncée laisse ces conditions non vérifiées.

| Caractéristique de bobine | Vérification dans la fiche |
| --- | --- |
| Mode de liaison | Fil ou bande plastique CN-AG |
| Longueur | Plage de la colonne correspondante |
| Diamètre et tête | 2,10–2,50 mm et 5–6 mm |
| Pas | 7–8 mm ou 7,50 mm selon liaison |

Le [guide des clous mal enfoncés](/guides/cloueur-clous-mal-enfonces-pression-profondeur/) commence également par le couple outil-fixation. Monter une bobine hors format ne se corrige pas en augmentant la pression.

## Le chargement dépend aussi de la longueur

La fiche demande d’ajuster la platine du magasin à la longueur du clou, puis de placer le premier clou dans le canal du nez avec le haut des clous aligné sur le bord supérieur du canal de chargement. La connexion d’air vient ensuite dans la séquence publiée. La notice d’utilisation complète reste nécessaire pour les protections et le contrôle de déclenchement.

La fiche indique un fonctionnement en tir simple ou contact. Le [guide du déclenchement des cloueurs](/guides/cloueur-pneumatique-declenchement-sequentiel-contact/) permet de lire la différence, sans attribuer le même dispositif de sélection à un autre modèle.

Enfin, les **1,20 L ou 0,042 SCF par tir** sont publiés sous **90 psi, soit 6,2 bar**. Cette donnée sert au bilan d’air, traité dans le [guide de cadence d’un cloueur](/guides/max-cn890f3-volume-cycle-cadence-clouage/), mais ne donne aucune compatibilité mécanique de bobine. La décision d’achat doit conserver simultanément référence outil et tableau de fixation, puis vérifier le chargement prévu.

La [fiche FASCO F44AC CN15W-PS65, référence 11553.01](/outils-pneumatiques/agrafeuse-cloueuse-fasco-f44ac-cn15w-ps65-11553-01/) conserve ce volume par action. La cadence de pose reste nécessaire pour calculer la demande moyenne ; cette fiche ne remplace pas le tableau de compatibilité des fixations.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [BECK/FASCO F44AC CN15W-PS65, fiche avril 2023](https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F44AC%20CN15W-PS65_EN_2304_screen.pdf)
