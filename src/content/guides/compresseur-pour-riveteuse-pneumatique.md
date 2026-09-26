---
title: "Riveteuse pneumatique CP9882, CP9886 et CP9888 : quel compresseur ?"
seoTitle: "Riveteuse pneumatique : quel compresseur et quel débit ?"
description: "CP9882, CP9886 et CP9888 : débit en charge, rivets aveugles ou écrous à sertir, pression et méthode pour dimensionner un poste de rivetage."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 5
featured: false
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-marteau-a-river-pneumatique", "utiliser-plusieurs-outils-pneumatiques", "diametre-longueur-flexible-air-comprime"]
relatedCalculatorTool: "chicago-pneumatic-cp9882"
sources:
  - https://tools.cp.com/en/products/compression-tools/cp9882-sku8941098820
  - https://tools.cp.com/en/products/compression-tools/cp9886-sku8941098860
  - https://tools.cp.com/en/products/compression-tools/cp9888-sku8941098880
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169829.pdf
---

**Pour une CP9882, la fiche constructeur annonce 114 L/min en charge ; pour une CP9886, 240 L/min ; pour une CP9888, 168 L/min.** Ces débits ne sont pas des volumes d’air par rivet. Ils ne permettent donc pas, seuls, de calculer une cadence de production. Le procédé doit aussi être identifié : la CP9888 pose des écrous à sertir, tandis que les deux autres tirent des rivets aveugles. [CP9882](https://tools.cp.com/en/products/compression-tools/cp9882-sku8941098820) ; [CP9886](https://tools.cp.com/en/products/compression-tools/cp9886-sku8941098860) ; [CP9888](https://tools.cp.com/en/products/compression-tools/cp9888-sku8941098880).

## Choisir d’abord le bon type de riveteuse

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Riveteuses et besoins publiés">

| Référence | Application décrite par le fabricant | Consommation en charge |
| --- | --- | --- |
| CP9882 | Rivets aveugles jusqu’à 4,8 mm, aluminium, cuivre et matériaux tendres | 1,9 L/s = 114 L/min |
| CP9886 | Rivets aveugles en acier jusqu’à 5 mm | 4 L/s = 240 L/min |
| CP9888 | Écrous à sertir, gamme M3 à M12 | 2,8 L/s = 168 L/min |

</div>

Les conversions utilisent `L/min = L/s × 60`. Les capacités restent attachées au matériau et au type de fixation indiqués dans les fiches officielles ci-dessus. « Jusqu’à 4,8 mm » ne vaut pas autorisation pour tous les rivets inox de ce diamètre. De même, M12 désigne ici un filetage d’écrou à sertir ; ce n’est pas un diamètre de rivet aveugle comparable à 5 mm.

Le [marteau à river](/guides/compresseur-pour-marteau-a-river-pneumatique/) constitue encore un autre procédé. N’utilisez pas ses coups par minute pour estimer la cadence d’une riveteuse à traction.

<div class="article-infographic" tabindex="0" role="group" aria-label="Trois vérifications avant le débit">
<svg viewBox="0 0 680 404" role="img" aria-labelledby="riveteuse-title riveteuse-desc" xmlns="http://www.w3.org/2000/svg">
<title id="riveteuse-title">Trois vérifications avant le débit</title><desc id="riveteuse-desc">Fixation : Rivet aveugle ou écrou à sertir ? Capacité : Matière, diamètre et plage de serrage documentés. Air : Consommation en charge et pression au poste. Un débit suffisant ne valide pas l’assemblage.</desc>
<rect width="680" height="404" rx="20" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">Trois vérifications avant le débit</text>
<rect x="24" y="70" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="98" fill="#d3eb56" font-size="22" font-weight="700">Fixation</text><text x="40" y="126" fill="white" font-size="20">Rivet aveugle ou écrou à sertir ?</text>
<rect x="24" y="158" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="186" fill="#d3eb56" font-size="22" font-weight="700">Capacité</text><text x="40" y="214" fill="white" font-size="20">Matière, diamètre et plage de serrage documentés.</text>
<rect x="24" y="246" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="274" fill="#d3eb56" font-size="22" font-weight="700">Air</text><text x="40" y="302" fill="white" font-size="20">Consommation en charge et pression au poste.</text>
<text x="28" y="379" fill="white" font-size="19">Un débit suffisant ne valide pas l’assemblage.</text>
</svg>
</div>

## Pourquoi 114 L/min ne signifie pas 114 litres par rivet

Un débit décrit un volume par unité de temps. Un volume par cycle exige soit une donnée constructeur explicitement exprimée par cycle, soit une mesure sur une séquence définie. Les trois fiches citées donnent un débit en charge ; nous n’en déduisons aucun nombre de rivets par minute.

Pour préparer le poste, nous proposons de séparer deux questions : l’alimentation tient-elle pendant l’action, et récupère-t-elle entre les séries ? La première nécessite la pression et le débit au poste ; la seconde dépend aussi de la durée réelle des séquences, du compresseur et des autres consommateurs. Cette distinction évite de sélectionner une machine sur une moyenne obtenue en supposant une cadence inconnue.

**Exemple de calcul, sans mesure d’atelier :** une CP9882 et une CP9886 utilisées simultanément représentent `114 + 240 = 354 L/min` en additionnant leurs consommations publiées. Ce total ne comprend ni les autres postes ni une réserve d’exploitation. Si elles alternent, le calcul du débit moyen demande le déroulement réel du cycle. Le guide [plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à expliciter ce scénario.

## Un compresseur 50 L suffit-il ?

La mention 50 L donne le volume de cuve, pas son débit de production. Une réponse sérieuse demande le [FAD restitué](/guides/debit-restitue-fad-vs-debit-aspire/) à la pression nécessaire et le régime admissible du compresseur. En leur absence, le verdict reste **données insuffisantes**.

Pour une utilisation soutenue de la CP9886, les 240 L/min publiés constituent un besoin d’air à confronter à cette production documentée. Une cuve plus grande ne permet pas de conclure que le même compresseur soutiendra une série plus longue sans récupération. Nous ne recommandons donc aucune capacité de cuve universelle pour « une riveteuse ».

## Pression et raccordement : garder la référence complète

Les fiches actuelles annoncent une pression dynamique maximale de 6,3 bar et un flexible minimal de 10 mm pour une longueur de 5 m. La [notice CP9882/CP9883](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169829.pdf) indique 90 psi, arrondis à 6,2 bar. Conservez la notice de l’exemplaire et faites confirmer le réglage applicable ; ne transformez pas cet écart d’arrondi en autorisation de surpression.

Le diamètre de flexible ne décrit pas à lui seul le passage des raccords. Vérifiez le montage complet avec le [guide des flexibles](/guides/diametre-longueur-flexible-air-comprime/). Pour la réception, consignez la pression pendant l’action, les accessoires installés et les autres outils en service. Une lecture au repos sur la cuve ne documente pas cette situation.

## Ce que le devis doit permettre de vérifier

Nous conseillons de joindre au devis la référence de fixation, sa matière, sa plage de serrage, les épaisseurs assemblées et la cadence attendue. Demandez ensuite la confirmation écrite du nez ou mandrin approprié, du réglage de course et de la procédure de contrôle de l’assemblage. Cette préparation est distincte du choix du compresseur.

Un essai de réception doit porter sur les pièces et fixations prévues, avec des critères définis par votre dossier d’assemblage. Aucun des trois débits ne permet de déduire la résistance finale d’une fixation. Le résultat technique ne se réduit pas au fait que l’outil termine son mouvement.

Pour commencer la comparaison d’air, consultez la [fiche CP9882](/outils-pneumatiques/riveteuse-chicago-pneumatic-cp9882/) et les [compresseurs confrontés à la CP9882](/quel-compresseur-pour/riveteuse-chicago-pneumatic-cp9882/). Pour les écrous à sertir, partez de la [CP9888](/outils-pneumatiques/riveteuse-chicago-pneumatic-cp9888/) plutôt que de transposer le verdict d’un modèle pour rivets aveugles.

## Sources et périmètre

Sources consultées le **26 septembre 2026**. Analyse documentaire interne : CompatAir n’a pas réalisé d’essai physique de ces équipements. Les scénarios et calculs pédagogiques sont distingués des caractéristiques publiées.

- [Chicago Pneumatic, CP9882, référence 8941098820](https://tools.cp.com/en/products/compression-tools/cp9882-sku8941098820)
- [Chicago Pneumatic, CP9886, référence 8941098860](https://tools.cp.com/en/products/compression-tools/cp9886-sku8941098860)
- [Chicago Pneumatic, CP9888, référence 8941098880](https://tools.cp.com/en/products/compression-tools/cp9888-sku8941098880)
- [Chicago Pneumatic, notice CP9882/CP9883, 8940169829](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169829.pdf)
