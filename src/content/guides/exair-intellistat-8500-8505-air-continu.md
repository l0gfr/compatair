---
title: "EXAIR Intellistat 8500 ou 8505 : le passage à une buse fixe change le bilan d’air"
seoTitle: "Intellistat 8500 / 8505 : débit et régime d’air"
description: "Les Intellistat 8500 et 8505 affichent les mêmes débits aux points du catalogue. Une buse fixe et un pistolet à gâchette ne donnent pas le même bilan de cycle."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["ioniseur-air-comprime-debit-neutralisation-electrostatique", "utiliser-plusieurs-outils-pneumatiques", "exair-static-retour-convoyeur-ioniseur"]
sources: ["https://www.exair.com/media/productcms/pdf/StaticEliminators1_1_1.pdf"]
---

**Passer d’un EXAIR Intellistat 8500 à gâchette à une buse fixe 8505 peut changer la consommation sur le cycle, même lorsque les débits publiés sont identiques.** Il faut décrire combien de temps chaque appareil reçoit l’air, selon le fonctionnement autorisé, avant d’établir le bilan du poste.

Le [catalogue, PDF pages 29 et 31](https://www.exair.com/media/productcms/pdf/StaticEliminators1_1_1.pdf#page=29), publie pour les deux références **76,46 SLPM à 2,1 bar** et **164,21 SLPM à 5,5 bar**. Nous conservons l’unité SLPM affichée. Le tableau ne doit pas être transformé en volume d’air comprimé mesuré dans le tube ni comparé à un FAD sans rapprochement des conditions de référence.

## La commande fait partie du choix

Le 8500 active l’air et les ions par sa gâchette. Le 8505 décrit une mise en marche par son alimentation et l’arrivée d’air, sur une implantation fixe. Le document précise notamment un raccordement de tube de 6 mm et l’alimentation 902067 de 24 VDC pour ces appareils. Leur montage suit la documentation complète, sans câblage improvisé.

Demandez à l’intégrateur le régime réellement autorisé et la façon dont il est commandé au poste. Une buse fixe ne doit pas recevoir une séquence d’arrêt inventée pour réduire la consommation sans confirmer son effet sur le fonctionnement prévu.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 303" role="img" aria-labelledby="exair-intellistat-8500-8505-air-continu-title exair-intellistat-8500-8505-air-continu-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="exair-intellistat-8500-8505-air-continu-title">Même débit, durées différentes</title><desc id="exair-intellistat-8500-8505-air-continu-desc">Scénario CompatAir à 2,1 bar, avec le débit publié de 76,46 SLPM. Les durées sont hypothétiques et ne garantissent aucun résultat de neutralisation.</desc>
<rect width="520" height="303" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Même débit, durées différentes</text><text x="26" y="84" fill="#b4cec0" font-size="19" text-anchor="start">Air pendant 1 min sur un cycle de 5</text><rect x="26" y="96" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="96" width="68.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="118" fill="white" font-size="22" font-weight="700" text-anchor="end">76,46</text><text x="26" y="173" fill="#b4cec0" font-size="19" text-anchor="start">Air pendant les 5 min du cycle</text><rect x="26" y="185" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="185" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="207" fill="white" font-size="22" font-weight="700" text-anchor="end">382,30</text><text x="26" y="261" fill="#d3eb56" font-size="19" text-anchor="start">Litres standard dans le scénario</text><text x="26" y="287" fill="#b4cec0" font-size="18" text-anchor="start">Aucun cycle d’utilisation validé représenté</text>
</svg>
<figcaption>Scénario CompatAir à 2,1 bar, avec le débit publié de 76,46 SLPM. Les durées sont hypothétiques et ne garantissent aucun résultat de neutralisation.</figcaption>
</figure>

## Un exemple de cycle rend la différence visible

Considérons une hypothèse de cinq minutes à la pression publiée de 2,1 bar. Un 8500 alimenté pendant une seule minute utilise **76,46 litres standard** pour cette phase. Une buse alimentée pendant les cinq minutes utilise **382,30 litres standard**. Le calcul est 76,46 × durée en minutes, sans fuites ni autres appareils.

Ce scénario ne décrit ni une cadence validée ni un résultat de neutralisation. Il montre seulement pourquoi l’addition des références ne suffit pas au bilan. Le [guide des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) reprend la durée et les autres consommateurs, avec un débit de compresseur documenté.

## Les distances des essais ne sont pas interchangeables

Dans ces tableaux, la force est donnée à **305 mm** de la cible, tandis que le temps de décharge est établi à **1 pouce**. Ces mesures répondent à deux questions distinctes. Une force à 305 mm ne démontre pas un temps de neutralisation à la même distance.

La réception doit donc nommer la distance utile du procédé et le résultat attendu. Le [guide des ioniseurs à air comprimé](/guides/ioniseur-air-comprime-debit-neutralisation-electrostatique/) prépare ce contrôle. Les déclarations de classification ou de conformité du fabricant ne constituent pas une qualification globale de votre salle ou de votre procédé.

Avant de choisir une buse fixe, dessinez enfin les contacts de la pièce après traitement. Le [guide de retour de charge](/guides/exair-static-retour-convoyeur-ioniseur/) examine cette étape. Le choix du 8500 ou du 8505 doit réunir accessibilité, commande, budget d’air et résultat au point utile ; CompatAir n’attribue aucun avantage universel à l’un des deux.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
