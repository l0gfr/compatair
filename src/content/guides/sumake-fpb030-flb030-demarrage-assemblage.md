---
title: "Sumake FPB030 ou FLB030 : choisir le démarrage sur un poste d’assemblage"
seoTitle: "Sumake FPB030 ou FLB030 : pression axiale ou levier ?"
description: "Deux visseuses Sumake de 0,5 à 3 Nm partagent leurs données principales. Comment choisir leur commande, valider le réglage et préparer l’alimentation du poste."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["jonnesway-jab2011-jab2022-assemblage-deux-nm", "atlas-lud22-hr5-couple-reglage-pression", "sumake-st-sd110-400-l-min-regime"]
sources:
  - https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf
---

Sur une ligne d’assemblage, deux visseuses peuvent offrir la même plage de couple tout en imposant des gestes différents. La **Sumake FPB030** démarre par poussée ; la **FLB030** utilise un levier. Pour un poste visant un couple compris entre **0,5 et 3 Nm**, le choix porte donc d’abord sur la manière d’engager l’embout et de déclencher le moteur.

Le [catalogue Sumake STSC22, page PDF 4](https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=4), permet de comparer ces versions sans leur attribuer un avantage de puissance imaginaire. Cette lecture concerne les références de cette édition ; la notice et la configuration livrée doivent accompagner le devis.

## Même enveloppe, deux gestes à essayer

| Donnée publiée | FPB030 | FLB030 |
| --- | --- | --- |
| Déclenchement | Poussée | Levier |
| Plage de couple | 0,5 à 3 Nm | 0,5 à 3 Nm |
| Vitesse à vide | 1 000 tr/min | 1 000 tr/min |
| Masse | 580 g | 580 g |
| Longueur hors tout | 240 mm | 240 mm |

Ces valeurs viennent du tableau fabricant. Elles donnent un point de départ pour l’essai du poste. La même longueur et la même masse ne décrivent ni la position du poignet, ni l’accès à la vis, ni la manière dont la pièce est tenue.

Pour examiner la version à poussée, placez l’outil dans la position réelle d’assemblage. L’embout peut-il entrer dans l’empreinte avant l’effort axial de déclenchement ? Le support maintient-il la pièce pendant ce geste ? Une présentation confortable sur un établi horizontal peut devenir différente dans un logement étroit ou avec une vis orientée autrement.

Avec la version à levier, observez la prise de main à l’endroit où la vis est engagée. L’opérateur conserve-t-il son appui et son contrôle de l’embout pendant qu’il actionne la commande ? L’essai doit couvrir les positions du produit réellement assemblé. Un verdict d’ergonomie exige cette observation ; le tableau ne fournit aucun classement entre les deux commandes.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 270" role="img" aria-labelledby="fpb-title fpb-desc">
<title id="fpb-title">Comparer le geste avant la cadence</title><desc id="fpb-desc">Pour la FPB030, l’engagement de l’embout précède une poussée. Pour la FLB030, il précède l’action sur le levier. Les deux chemins rejoignent le contrôle de l’assemblage.</desc>
<rect width="440" height="270" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="15" fill="#eef2e9"><text x="24" y="34">Engager l’embout sur la vis réelle</text><text x="24" y="94">FPB030 : poussée axiale</text><text x="24" y="144">FLB030 : action sur le levier</text><text x="24" y="214">Contrôler le résultat de l’assemblage</text><text x="24" y="248">Même plage publiée : 0,5 à 3 Nm</text></g>
<path d="M24 53H408M24 173H408" stroke="#d3eb56" stroke-width="5"/>
</svg>
<figcaption>Lecture du geste de commande. L’essai du poste détermine le choix ; aucun gain de cadence n’est supposé.</figcaption>
</figure>

## La fenêtre de réglage demande une vérification du résultat

La page présente une fenêtre mécanique de lecture du réglage et recommande un contrôle régulier avec un testeur de couple. La valeur affichée sert à préparer le réglage. La validation de votre assemblage demande ensuite un contrôle adapté à la vis, au matériau, à l’appui et à la tolérance retenue pour le produit.

Préparez des pièces représentatives et consignez la référence de l’outil, l’embout monté, le réglage lu et les conditions du poste. Définissez le résultat attendu avant l’essai. Si deux commandes donnent des résultats similaires sur le montage étudié, vous pouvez départager leur accès et leur prise en main sans transformer cet essai local en une propriété universelle de la gamme.

Une modification du support, de la vis ou de l’embout mérite une nouvelle vérification. La plage de 0,5 à 3 Nm conserve son intérêt documentaire, mais elle ne décrit pas à elle seule la répétabilité obtenue sur toutes les pièces. Le [dossier JAB2011 et JAB2022 pour un assemblage à 2 Nm](/guides/jonnesway-jab2011-jab2022-assemblage-deux-nm/) permet de comparer une autre famille de réglages avec la même exigence de validation.

## Le besoin d’air reste une question distincte

Le tableau publie **10 cfm** et **0,28 m³/min** pour chacune des deux visseuses. Il ne précise pas sur cette page le régime de consommation ni la pression de mesure permettant de confirmer une fourniture en charge. CompatAir conserve donc ces chiffres hors du calcul de compatibilité. Leur présence ne suffit pas à valider un petit compresseur.

Pour compléter le dossier, demandez au fournisseur la consommation maximale, sa pression de référence et les exigences d’alimentation de la notice. Décrivez aussi le cycle prévu : temps de rotation, nombre d’assemblages et autres outils utilisés simultanément. Le [guide sur les 400 L/min de la ST-SD110](/guides/sumake-st-sd110-400-l-min-regime/) explique pourquoi un débit isolé exige ces conditions.

Les fiches [FPB030](/outils-pneumatiques/visseuse-sumake-fpb030/) et [FLB030](/outils-pneumatiques/visseuse-sumake-flb030/) permettent de conserver l’identité des versions retenues. Une commande exploitable précise le mode de démarrage, le réglage à valider, l’embout et les données d’air encore nécessaires. Le choix devient alors contrôlable à la réception du poste.
