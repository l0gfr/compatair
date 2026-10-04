---
title: "Lechler série 136 : séparer air de commande et air d’atomisation"
seoTitle: "Lechler série 136 : air de commande et atomisation"
description: "La vanne pneumatique de série 136 possède une arrivée de commande séparée. Son seuil de 2,1 bar n’est pas la pression d’atomisation ni un débit consommé."
pubDate: "2026-10-04"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["lechler-buse-pneumatique-melange-viscosite", "choisir-distributeur-pneumatique-debit-nominal", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf"]
---

**Pour une buse Lechler série 136 munie de la vanne pneumatique décrite au catalogue, l’air de commande entre par un raccord séparé.** Il ouvre ou ferme la vanne ; il ne remplace pas l’air qui atomise le liquide. Confondre ces fonctions peut produire un devis dont une partie du circuit reste sans alimentation documentée.

Le [catalogue, PDF pages 51 et 52](https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf#page=52), présente plusieurs accessoires : réglage manuel, aiguille de nettoyage et vanne commandée pneumatiquement. Pour cette dernière, il annonce une pression d’ouverture de **2,1 bar** et un maximum de **180 cycles par minute**. Ces valeurs décrivent l’accessoire, pas une cadence de pulvérisation garantie pour tout liquide.

## Dessiner trois entrées quand la configuration le demande

Le schéma de consultation proposé par CompatAir identifie l’air d’atomisation, le liquide et l’air de commande. Le choix de chaque alimentation doit être rapproché du corps de buse, de la tête et de la vanne exacts. L’existence d’un raccord d’air sur la machine ne démontre pas que les trois circuits sont convenablement décrits.

Le [guide de mélange interne ou externe](/guides/lechler-buse-pneumatique-melange-viscosite/) traite la rencontre entre gaz et liquide. Le pilotage de la vanne ajoute une question séparée, avec sa conduite et le dispositif de commande prévu.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 387" role="img" aria-labelledby="lechler-serie136-air-commande-atomisation-title lechler-serie136-air-commande-atomisation-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="lechler-serie136-air-commande-atomisation-title">Trois alimentations à nommer</title><desc id="lechler-serie136-air-commande-atomisation-desc">Schéma de consultation pour la configuration avec vanne pneumatique. Le seuil de commande de 2,1 bar ne donne aucune consommation par cycle.</desc>
<rect width="520" height="387" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Trois alimentations à nommer</text><rect x="24" y="66" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="95" fill="#d3eb56" font-size="21" text-anchor="start">Air d’atomisation</text><text x="42" y="122" fill="white" font-size="19" text-anchor="start">Pression et débit de la buse retenue</text><rect x="24" y="157" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="186" fill="#d3eb56" font-size="21" text-anchor="start">Liquide</text><text x="42" y="213" fill="white" font-size="19" text-anchor="start">Débit, viscosité et alimentation</text><rect x="24" y="248" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="277" fill="#d3eb56" font-size="21" text-anchor="start">Air de commande séparé</text><text x="42" y="304" fill="white" font-size="19" text-anchor="start">Vanne : ouverture publiée à 2,1 bar</text><text x="26" y="363" fill="#b4cec0" font-size="18" text-anchor="start">180 cycles/min : limite publiée de la vanne</text>
</svg>
<figcaption>Schéma de consultation pour la configuration avec vanne pneumatique. Le seuil de commande de 2,1 bar ne donne aucune consommation par cycle.</figcaption>
</figure>

## Ce qui manque encore pour le bilan d’air

Le seuil d’ouverture de 2,1 bar n’est pas une consommation en litres par cycle. Le nombre maximal de cycles n’est pas non plus le débit du compresseur. La page citée ne fournit pas ici le volume d’air de commande à consommer pour chaque cycle dans votre montage.

Il faut donc le demander, avec les conditions de pression et les besoins du distributeur éventuel. Un champ absent doit rester absent dans le bilan ; le traiter comme zéro supprimerait une consommation non qualifiée. La durée des phases et les simultanéités viennent ensuite du cycle réel du poste.

Le [guide du débit nominal des distributeurs](/guides/choisir-distributeur-pneumatique-debit-nominal/) explique pourquoi une capacité de passage et une consommation ne sont pas la même donnée. Le [bilan des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) rassemble les consommateurs dont les besoins sont effectivement documentés.

## Une référence d’aiguille doit suivre la buse

Le catalogue associe les accessoires à des désignations de buses 136.xx1 à 136.xx6 et à des diamètres d’aiguille distincts. Un accessoire d’une même famille ne doit donc pas être commandé seulement parce que son filetage semble convenir. Faites confirmer l’association complète corps, tête et vanne.

À la réception, rapprochez les lignes installées du schéma et des références commandées. Définissez avec le fournisseur ce qui est vérifié pour l’ouverture, la fermeture et le résultat de pulvérisation. Un écoulement visible ne démontre pas que la vanne atteint sa fonction correctement sur tout le cycle.

Ce guide ne fournit ni un plan de pilotage ni une procédure de modification de la machine. Il rend explicites les données nécessaires : pression d’ouverture de l’accessoire, régime admis, consommation de commande encore à documenter et besoin d’atomisation de la buse choisie.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
