---
title: "TurboLap : pourquoi une autre pierre peut changer l’amplitude ressentie à la pointe"
seoTitle: "TurboLap : course, longueur et masse de la pointe"
description: "Une course nominale ne décrit pas toute pointe montée. Identifier la configuration de référence et les changements d’accessoire avant de diagnostiquer."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["uht-turbolap-tll-tls-trajectoire-angle-moule", "flexible-court-outil-pneumatique-vibrations", "vibrations-outils-emission-exposition-a8"]
sources: ["https://www.uht.co.jp/pdf/turbolap.pdf", "https://www.uht.co.jp/ja/support/pdf/tl_manu.pdf"]
---

Vous remplacez une pierre par une pointe plus longue et le comportement change. Le raccourci consiste à soupçonner immédiatement la pression. Sur un TurboLap, la configuration de pointe mérite d’abord un relevé précis : sa longueur et sa masse font partie de la question.

La [documentation UHT TurboLap, page 2](https://www.uht.co.jp/pdf/turbolap.pdf#page=2) indique que l’amplitude à la pointe dépend de la longueur et du poids de l’accessoire. Sa table de courses comporte des accessoires de référence. Elle ne fournit pas une formule permettant de recalculer la course pour n’importe quelle pointe. **Il serait donc injustifié de promettre une amplitude exacte avec votre accessoire à partir du seul suffixe du modèle.**

## Séparer la course de catalogue et le montage observé

Consignez la référence complète du corps, celle de la pointe et le dépassement après serrage. « Pierre céramique » est trop vague pour reproduire une configuration. Gardez aussi la référence du porte-accessoire. La [notice UHT, page 2](https://www.uht.co.jp/ja/support/pdf/tl_manu.pdf#page=2) demande des accessoires de dimensions appropriées et le respect de leurs instructions ; elle exclut les modifications de l’outil et de ses accessoires.

À ce stade, deux dossiers différents apparaissent. Si l’accessoire est celui prévu par le constructeur et que son montage respecte la notice, on peut demander pourquoi le comportement a changé. Si l’accessoire est d’une autre longueur, d’une autre masse ou d’origine inconnue, la première demande porte sur son admissibilité. Un relevé de pression ne transforme pas cet accessoire en configuration approuvée.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Comparer les configurations" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="uht-pointe-course-title uht-pointe-course-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="uht-pointe-course-title">Comparer les configurations</title><desc id="uht-pointe-course-desc">La comparaison porte sur deux montages complets. Elle ne fournit aucun coefficient de correction pour une pointe différente.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Comparer les configurations</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Configuration documentée</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Corps et pointe identifiés</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Montage conforme à la notice</text><text x="45" y="228" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Course liée à cette référence</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Configuration modifiée</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Longueur ou masse différente</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Amplitude exacte non déduite</text><text x="45" y="438" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Validation fournisseur requise</text></svg>
</div>

*La comparaison porte sur deux montages complets. Elle ne fournit aucun coefficient de correction pour une pointe différente.*

## Comparer deux pointes à configuration conservée

Préparez une fiche courte avec les deux références de pointe, les deux dépassements, la pression relevée dans les mêmes conditions et le symptôme précis. Distinguez un changement de mouvement visible, un bruit inhabituel, une perte d’efficacité et une gêne ressentie par l’opérateur. Indiquez lequel de ces symptômes est réellement observé.

Une comparaison de fonctionnement doit rester dans les conditions prévues par la notice et dans la procédure d’atelier. Conservez la même alimentation et la même famille de travail pour éviter de confondre le changement de pointe avec un autre changement. En cas de bruit, de chaleur ou de vibration anormale, la notice prévoit l’arrêt et la vérification ; chercher une pression qui masque le symptôme n’est pas une validation.

Le catalogue cite aussi le **TLS-03** comme cas où l’amplitude peut être importante à faible régime. Cette mention permet d’éviter d’appeler automatiquement ce comportement une panne. Elle ne valide pas un accessoire différent et ne donne pas une mesure d’exposition vibratoire de l’opérateur.

## Ce que la pression peut et ne peut pas expliquer

Une variation de pression ou de débit disponible peut accompagner un changement de fonctionnement. Ce constat demande un relevé en usage, avec le même point de mesure, plutôt qu’une lecture du régulateur à l’arrêt. Mais même une pression identique ne donne pas la course réelle de deux pointes différentes : le constructeur ne publie pas de relation universelle entre ces paramètres dans les documents consultés.

La conclusion pratique est de conserver un **montage de référence identifié**, puis de faire approuver les changements d’accessoire. Cela permet de comparer des résultats qui ont un sens et d’éviter d’acheter un autre compresseur sur la seule base d’une sensation différente.

Pour choisir la géométrie de mouvement, utilisez le guide [TLL ou TLS dans un angle de moule](/guides/uht-turbolap-tll-tls-trajectoire-angle-moule/). Pour traiter une exposition de l’opérateur, les [valeurs d’émission et l’exposition aux vibrations](/guides/vibrations-outils-emission-exposition-a8/) doivent rester distinctes : l’amplitude de la pointe n’est pas une mesure d’exposition quotidienne.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
