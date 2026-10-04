---
title: "Hertz HGS 7,5 ou HGS 11 : combien de débit reste à 13 bar ?"
seoTitle: "Hertz HGS 7,5 / HGS 11 : débit à 13 bar"
description: "À 13 bar, Hertz publie 640 L/min pour le HGS 7,5 et 1 110 pour le HGS 11. Choisissez le point de pression pertinent avant de comparer les puissances."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["ceccato-drb-20-7-bar-pression-reference", "utiliser-plusieurs-outils-pneumatiques", "hertz-hgs75-socle-cuve-secheur-dimensions"]
sources: ["https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf"]
---

**Pour comparer un [Hertz HGS 7,5](/compresseurs/hertz-hgs-7-5/) et un [HGS 11](/compresseurs/hertz-hgs-11/) à 13 bar, il faut utiliser respectivement 640 et 1 110 L/min de FAD.** Les débits plus élevés publiés à 7,5 bar ne décrivent pas cette même condition. La puissance moteur ne remplace pas le point de pression.

Le [tableau HGS/HSC, PDF page 26](https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=26), associe quatre pressions à chaque modèle. Il définit le FAD suivant ISO 1217:2009, annexe C, et précise notamment une référence de 1 bar absolu, 20 °C à l’entrée et 0 % d’humidité relative, avec les autres conditions inscrites en note.

## Quatre points publiés pour chaque modèle

| Pression de la table | HGS 7,5 | HGS 11 |
| --- | --- | --- |
| 7,5 bar | 1 070 L/min | 1 650 L/min |
| 8,5 bar | 1 000 L/min | 1 510 L/min |
| 10 bar | 870 L/min | 1 350 L/min |
| 13 bar | 640 L/min | 1 110 L/min |

Les L/min ci-dessus sont une conversion exacte des m³/min du tableau, par multiplication par 1 000. Les valeurs appartiennent aux modèles et conditions décrits ; elles ne forment pas une courbe interpolée garantie entre les points.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 392" role="img" aria-labelledby="hertz-hgs75-11-debit-13bar-title hertz-hgs75-11-debit-13bar-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="hertz-hgs75-11-debit-13bar-title">FAD publié à 13 bar</title><desc id="hertz-hgs75-11-debit-13bar-desc">Conversion des deux points à 13 bar du catalogue Hertz. Le besoin de 950 L/min est un scénario CompatAir, sans réception ni marge de réseau validée.</desc>
<rect width="520" height="392" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">FAD publié à 13 bar</text><text x="26" y="84" fill="#b4cec0" font-size="19" text-anchor="start">HGS 7,5 : 13 bar</text><rect x="26" y="96" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="96" width="196.04" height="27" rx="12" fill="#d3eb56"/><text x="487" y="118" fill="white" font-size="22" font-weight="700" text-anchor="end">640</text><text x="26" y="173" fill="#b4cec0" font-size="19" text-anchor="start">HGS 11 : 13 bar</text><rect x="26" y="185" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="185" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="207" fill="white" font-size="22" font-weight="700" text-anchor="end">1 110</text><text x="26" y="262" fill="#b4cec0" font-size="19" text-anchor="start">Besoin hypothétique : 13 bar</text><rect x="26" y="274" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="274" width="290.99" height="27" rx="12" fill="#d3eb56"/><text x="487" y="296" fill="white" font-size="22" font-weight="700" text-anchor="end">950</text><text x="26" y="350" fill="#d3eb56" font-size="19" text-anchor="start">FAD en L/min aux conditions du catalogue</text><text x="26" y="376" fill="#b4cec0" font-size="18" text-anchor="start">Marge arithmétique du HGS 11 : 160 L/min</text>
</svg>
<figcaption>Conversion des deux points à 13 bar du catalogue Hertz. Le besoin de 950 L/min est un scénario CompatAir, sans réception ni marge de réseau validée.</figcaption>
</figure>

## Un besoin de 950 L/min à 13 bar

Dans ce scénario de sélection, le HGS 7,5 est inférieur au besoin publié de l’installation : 640 < 950. Le HGS 11 dépasse ce besoin de **160 L/min**, puisque 1 110 − 950 = 160. Cette soustraction ne constitue pas une marge validée pour l’ensemble du réseau.

Il faut encore examiner pertes, traitement d’air, simultanéités et conditions d’exploitation. Le [guide des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) prépare cette étape. Un résultat favorable sur le seul FAD n’est pas une réception du poste à 13 bar.

Le scénario sert à montrer une décision que le point à 7,5 bar aurait faussée. Il ne décrit aucune machine testée par CompatAir et ne garantit aucun procédé particulier. Le [cas de pression de référence Ceccato](/guides/ceccato-drb-20-7-bar-pression-reference/) traite le même besoin de conserver la pression avec le débit, sur une autre famille.

## La configuration doit suivre la ligne choisie

La table distingue aussi les dimensions et masses sur socle de l’ensemble sur cuve et sécheur. La commande doit nommer le modèle, la pression et le montage retenus. Le [guide d’implantation du HGS 7,5](/guides/hertz-hgs75-socle-cuve-secheur-dimensions/) détaille les dimensions de ces montages.

Le catalogue décrit la famille HGS/HSC pour un fonctionnement continu dans son périmètre. Cette déclaration ne supprime pas les conditions d’installation et de maintenance du modèle livré. Demandez la documentation de la version et les limites opérationnelles avec le devis.

Une comparaison professionnelle commence donc par une ligne lisible : modèle, pression et FAD documenté. Elle se termine par la qualification du système au point utile. Comparer simplement « 7,5 kW contre 11 kW » ou « 13 bar maximum » ferait perdre les informations qui rendent ce choix contrôlable.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
