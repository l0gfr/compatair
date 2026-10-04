---
title: "GP200 : un capteur inductif exige la bonne variante et ses blocs de serrage"
seoTitle: "GP200 : montage inductif et seuil magnétique"
description: "Les capteurs inductifs GP200 exigent des blocs sur certaines variantes. Distinguer support mécanique, champ ambiant et réglage propre au capteur."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["capteur-pnp-npn-entree-automate-verin", "capteur-verin-reed-electronique-signal-position", "pince-pneumatique-force-doigt-longueur-prehension"]
sources: ["https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf"]
---

Un capteur qui s’installe près des mors ne devient pas compatible avec toutes les variantes GP200. Zimmer décrit un montage spécifique pour l’inductif et une sensibilité particulière pour le magnétique. **Avant de déplacer un point de commutation, identifier le principe du capteur et les pièces présentes sur le préhenseur.**

## L’inductif nécessite les blocs prévus

La [notice GP200, page 9, section 10.4.2](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf#page=9) demande que le produit soit équipé de blocs de serrage pour utiliser des capteurs inductifs. Elle précise que seules certaines variantes les possèdent. Le schéma identifie came de commutation, bloc et capteur.

Un raccordement électrique adapté ne compense pas l’absence de ce support mécanique. Le [guide PNP/NPN](/guides/capteur-pnp-npn-entree-automate-verin/) traite la compatibilité de sortie et d’entrée ; cette question intervient après la vérification du montage autorisé.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 334" role="img" aria-labelledby="zimmer-gp200-capteur-magnetique-inductif-title zimmer-gp200-capteur-magnetique-inductif-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="zimmer-gp200-capteur-magnetique-inductif-title">GP200 : le capteur inductif exige son montage</title><desc id="zimmer-gp200-capteur-magnetique-inductif-desc">Le GP200 doit avoir des blocs de serrage pour utiliser les capteurs inductifs. Un champ magnétique externe peut déplacer le point de commutation d’un capteur magnétique.</desc><rect width="520" height="334" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">Deux principes de détection</text><circle cx="121" cy="155" r="42" fill="none" stroke="#8abfa3" stroke-width="6"/><path d="M76 104Q121 66 166 104M61 93Q121 36 181 93" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="40" y="226" fill="#eef2e9" font-size="22">Magnétique</text><rect x="315" y="109" width="111" height="78" rx="10" fill="#26775b"/><rect x="344" y="127" width="95" height="29" rx="5" fill="#d3eb56"/><text x="307" y="226" fill="#eef2e9" font-size="22">Inductif + bloc</text><text x="28" y="294" fill="#eef2e9" font-size="23">La variante détermine le montage</text></svg>
<figcaption>Le GP200 doit avoir des blocs de serrage pour utiliser les capteurs inductifs. Un champ magnétique externe peut déplacer le point de commutation d’un capteur magnétique.</figcaption>
</figure>

## Le champ ambiant peut déplacer un seuil magnétique

La section **10.4.1**, sur la même page, avertit qu’un champ magnétique externe supplémentaire peut déplacer le point de commutation. Un signal qui apparaît à une autre position ne prouve donc pas automatiquement une modification de course ou une usure du mors.

Le [guide des capteurs de vérin](/guides/capteur-verin-reed-electronique-signal-position/) distingue leurs principes. Sur un GP200 magnétique, comparer l’état avant et après un changement d’environnement magnétique est une recherche différente d’un réglage de distance sur capteur inductif.

| Symptôme | Première identification |
| --- | --- |
| Capteur inductif impossible à monter | Variante et présence des blocs de serrage |
| Point magnétique déplacé après installation voisine | Champ magnétique externe possible |
| Sortie électrique incohérente | Capteur exact, câblage et entrée de commande |
| Position de mors différente | Course et mécanique, indépendamment du type de signal |

## Une distance à prendre dans la notice du capteur

Zimmer demande de positionner l’inductif à une distance de commutation appropriée de la came et de suivre la notice du capteur. Aucun entrefer chiffré universel n’est donné sur cette page. Ajouter une valeur provenant d’un autre capteur rendrait le réglage mal défini.

La section de course distingue également le réglage mécanique : tourner la vis dans le sens horaire diminue la course, le sens inverse l’augmente, puis le contre-écrou est resserré. Cela ne transforme pas le capteur en mesure de force. Le [guide de préhension par doigts](/guides/pince-pneumatique-force-doigt-longueur-prehension/) conserve cette séparation entre position et tenue de pièce.

La décision de remplacement doit ainsi préciser variante GP200, support, référence capteur et notice de réglage. La page 10 exige de confirmer la compatibilité de tout accessoire avec la variante sélectionnée. Un détecteur donnant un signal ne suffit pas à valider la prise de la pièce ou la sécurité de la machine.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Zimmer GP200, notice d’installation et d’utilisation DDOC00232 V8](https://www.zimmer-group.com/fileadmin/pim/SOM/DOK/MON/SOM_DOK_MON_DDOC00232-GP200__SALL__APD__V8.pdf)
