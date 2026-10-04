---
title: "Whisperblast Lechler : la largeur du jet n’est pas une largeur de séchage garantie"
seoTitle: "Whisperblast : largeur de jet et résultat de séchage"
description: "Lechler mesure le jet à un seuil de vitesse d’air. Les dimensions X, Y et Z du Whisperblast 6WB.800 ne garantissent pas un séchage uniforme de cette surface."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["couteau-air-comprime-ou-soufflante", "soufflette-garage-securite-bruit-consommation", "lechler-debit-normal-zero-degres-fad"]
sources: ["https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf"]
---

**Les dimensions d’un jet d’air au catalogue ne sont pas une largeur de séchage garantie.** Lechler décrit sa mesure de jet avec un seuil de vitesse d’air de 2,5 m/s. Une pièce placée dans cette enveloppe ne reçoit pas automatiquement le résultat de nettoyage, de refroidissement ou de séchage recherché.

Le [chapitre de mesure, PDF page 163](https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf#page=163), explique la méthode d’observation du jet. La [fiche Whisperblast 6WB.800.56 / 6WB.800.S2, PDF page 173](https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf#page=173), présente ensuite les dimensions X, Y et Z suivant la pression. Ces cotes décrivent le jet mesuré, avec les axes de son schéma.

## Lire la variation avec la pression

| Pression publiée | Longueur Z | Dimension X | Dimension Y |
| --- | --- | --- | --- |
| 1 bar | 600 mm | 140 mm | 130 mm |
| 3 bar | 900 mm | 240 mm | 185 mm |
| 5 bar | 900 mm | 260 mm | 220 mm |

Entre 3 et 5 bar, la longueur Z du tableau reste à 900 mm, tandis que X et Y changent. Une hausse de pression n’entraîne donc pas, dans ces données, un allongement proportionnel de toutes les dimensions. Il ne faut pas fabriquer une règle linéaire à partir de ces trois points.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 392" role="img" aria-labelledby="lechler-whisperblast-largeur-jet-sechage-title lechler-whisperblast-largeur-jet-sechage-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="lechler-whisperblast-largeur-jet-sechage-title">Le jet change selon la pression</title><desc id="lechler-whisperblast-largeur-jet-sechage-desc">Longueur Z publiée pour le 6WB.800 : elle reste à 900 mm entre 3 et 5 bar. Le jet est mesuré avec un seuil de 2,5 m/s ; aucun séchage garanti n’est représenté.</desc>
<rect width="520" height="392" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Le jet change selon la pression</text><text x="26" y="84" fill="#b4cec0" font-size="19" text-anchor="start">1 bar : Z</text><rect x="26" y="96" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="96" width="226.67" height="27" rx="12" fill="#d3eb56"/><text x="487" y="118" fill="white" font-size="22" font-weight="700" text-anchor="end">600</text><text x="26" y="173" fill="#b4cec0" font-size="19" text-anchor="start">3 bar : Z</text><rect x="26" y="185" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="185" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="207" fill="white" font-size="22" font-weight="700" text-anchor="end">900</text><text x="26" y="262" fill="#b4cec0" font-size="19" text-anchor="start">5 bar : Z</text><rect x="26" y="274" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="274" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="296" fill="white" font-size="22" font-weight="700" text-anchor="end">900</text><text x="26" y="350" fill="#d3eb56" font-size="19" text-anchor="start">Longueur Z en mm</text><text x="26" y="376" fill="#b4cec0" font-size="18" text-anchor="start">X et Y changent aussi : voir le tableau</text>
</svg>
<figcaption>Longueur Z publiée pour le 6WB.800 : elle reste à 900 mm entre 3 et 5 bar. Le jet est mesuré avec un seuil de 2,5 m/s ; aucun séchage garanti n’est représenté.</figcaption>
</figure>

## Décrire le résultat recherché sur la pièce

Pour consulter le fournisseur, précisez la surface, l’orientation, la distance, la vitesse de passage et l’état de la pièce à traiter. Fixez ensuite le critère utile avec le responsable du procédé : déplacement de particules, état d’humidité ou température selon l’application. Ce protocole est une proposition de réception CompatAir, pas un essai réalisé sur cette buse.

Le [guide couteau d’air ou soufflante](/guides/couteau-air-comprime-ou-soufflante/) aide à choisir une architecture de poste. Une grande enveloppe de jet ne démontre pas que l’air comprimé est la solution appropriée à une longue phase continue.

## Une rampe ajoute des demandes d’air

Si plusieurs buses fonctionnent ensemble, leurs consommations doivent être prises aux conditions de chaque référence, puis rapprochées de leur régime commun. L’enveloppe d’un jet ne donne pas la consommation d’une rampe. Joignez les courbes du catalogue, les raccordements et les conditions de mesure au bilan de la rampe.

Le [guide des volumes normaux Lechler](/guides/lechler-debit-normal-zero-degres-fad/) conserve la base de référence du débit. La pression à la buse et le volume normal consommé ne doivent pas être remplacés par un volume comprimé en conduite sans conversion qualifiée.

## Réceptionner sans prendre le graphique pour une garantie

Faites vérifier le résultat sur la pièce et la cadence convenues, avec les conditions d’air enregistrées. Conservez également l’implantation et la référence de buse. Si le résultat varie sur la largeur, le seul contour du jet ne permet pas de choisir une correction : disposition, vitesse du procédé et conditions d’air peuvent demander un examen distinct.

Le [guide du soufflage et du bruit](/guides/soufflette-garage-securite-bruit-consommation/) complète le choix du poste. Le catalogue décrit une buse et ses mesures ; il ne qualifie ni le bruit global de l’atelier ni un résultat de séchage industriel par simple lecture de X et Y.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
