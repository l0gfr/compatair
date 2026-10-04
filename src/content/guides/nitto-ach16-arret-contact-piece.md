---
title: "Nitto ACH-16 : pourquoi le burineur s’arrête hors de la pièce"
seoTitle: "Nitto ACH-16 : arrêt lorsque le burin quitte la pièce"
description: "Nitto décrit un arrêt automatique de l’ACH-16 sans contact du burin avec la pièce. Identifiez ce fonctionnement avant de chercher une panne d’alimentation."
pubDate: "2026-10-04"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "btp-chantier"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["burineur-pneumatique-chantier-debit-vibrations", "diagnostiquer-chute-pression-air-comprime", "nitto-ach16-ch24-emmanchement-burin"]
sources: ["https://www.nitto-kohki.eu/de/produkte-de/werkzeuge/druckluftwerkzeuge/item/ach-16.html?category_id=161", "https://www.nitto-kohki.eu/images/stories/products/tools/manuals/manual_ach_16_ch_24.pdf"]
---

**Le Nitto ACH-16 s’arrête automatiquement lorsque son burin n’est plus en contact avec la pièce, selon la fiche du fabricant.** Un arrêt hors appui ne suffit donc pas à diagnostiquer un manque de pression. Il faut d’abord identifier ce comportement prévu, puis examiner séparément un éventuel défaut sous charge.

La [fiche ACH-16 de Nitto Kohki Europe](https://www.nitto-kohki.eu/de/produkte-de/werkzeuge/druckluftwerkzeuge/item/ach-16.html?category_id=161) décrit expressément cette coupure à vide. Elle ne fournit pas une règle de diagnostic pour tous les burineurs de la marque. La référence sur l’appareil et la notice correspondante restent nécessaires, surtout lorsque plusieurs modèles partagent un atelier.

## Lire les unités avant de régler le poste

Le [tableau de la notice ACH-16 / CH-24, PDF page 1](https://www.nitto-kohki.eu/images/stories/products/tools/manuals/manual_ach_16_ch_24.pdf#page=1) publie pour l’ACH-16 une pression maximale de **0,6 MPa**, soit **6 bar**. Ce facteur de conversion est exact : 1 MPa vaut 10 bar. Oublier la décimale et lire 6 MPa conduirait à 60 bar, hors du maximum du document.

La consommation publiée est **0,15 m³/min à vide**, soit **150 L/min**. La conversion d’unité ne change pas son régime de mesure. Elle ne donne pas une consommation garantie pendant chaque opération de burinage et ne suffit pas à certifier une alimentation continue.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 387" role="img" aria-labelledby="nitto-ach16-arret-contact-piece-title nitto-ach16-arret-contact-piece-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="nitto-ach16-arret-contact-piece-title">Identifier la phase de l’arrêt</title><desc id="nitto-ach16-arret-contact-piece-desc">La fiche ACH-16 décrit l’arrêt sans contact avec la pièce. Les conversions ci-dessous proviennent du tableau de la notice, avec leurs régimes conservés.</desc>
<rect width="520" height="387" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Identifier la phase de l’arrêt</text><rect x="24" y="66" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="95" fill="#d3eb56" font-size="21" text-anchor="start">Hors contact de la pièce</text><text x="42" y="122" fill="white" font-size="19" text-anchor="start">Arrêt automatique décrit par Nitto</text><rect x="24" y="157" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="186" fill="#d3eb56" font-size="21" text-anchor="start">Maximum : 0,6 MPa</text><text x="42" y="213" fill="white" font-size="19" text-anchor="start">Conversion exacte : 6 bar</text><rect x="24" y="248" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="277" fill="#d3eb56" font-size="21" text-anchor="start">À vide : 0,15 m³/min</text><text x="42" y="304" fill="white" font-size="19" text-anchor="start">Conversion exacte : 150 L/min</text><text x="26" y="363" fill="#b4cec0" font-size="18" text-anchor="start">Une valeur à vide ne devient pas en charge</text>
</svg>
<figcaption>La fiche ACH-16 décrit l’arrêt sans contact avec la pièce. Les conversions ci-dessous proviennent du tableau de la notice, avec leurs régimes conservés.</figcaption>
</figure>

Le [guide du burineur pneumatique](/guides/burineur-pneumatique-chantier-debit-vibrations/) traite le choix du poste et des conditions de travail. La valeur à vide de cet outil doit conserver son étiquette lorsqu’elle entre dans un bilan ; CompatAir ne lui applique pas un coefficient de charge inventé.

## Distinguer arrêt prévu et défaut en utilisation

Pour un contrôle suivant la procédure du fabricant, décrivez le moment où l’arrêt apparaît : hors de la pièce, au contact ou pendant le travail. Ne faites pas fonctionner l’appareil dans une configuration contraire à la notice pour observer ce mécanisme. La différence entre les phases est une information à transmettre au service technique, pas une autorisation de forcer une commande.

Si le défaut survient pendant le travail, examinez l’alimentation prescrite. La notice demande notamment une liaison de **9,5 mm de diamètre intérieur**, un filtre et une lubrification à l’huile ISO VG 10. Ces exigences appartiennent au chemin d’air de l’outil. La présence d’un compresseur affichant 150 L/min aspirés ne les confirme pas.

Le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) propose de rapprocher les points de mesure pendant le même fonctionnement. Conservez les références du flexible, des raccords et du traitement d’air, avec les observations à la pression admise.

## Ne pas contourner le mécanisme

Un appareil dont le comportement reste anormal doit être examiné avec sa notice. N’essayez pas de maintenir artificiellement le fonctionnement hors appui en modifiant le burin ou une commande. Une hausse de pression au-delà du maximum n’est pas un moyen de corriger une coupure inexpliquée.

Pour la partie mécanique, vérifiez également que l’accessoire correspond à l’ACH-16. Le [guide des emmanchements ACH-16 et CH-24](/guides/nitto-ach16-ch24-emmanchement-burin/) distingue deux géométries publiées ; un burin d’une famille voisine ne se qualifie pas par ressemblance.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
