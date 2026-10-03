---
title: "SMC RB en parallèle : pourquoi l’énergie ne se divise pas simplement par deux"
seoTitle: "SMC RB parallèles : répartition et énergie par appareil"
description: "La sélection parallèle RB corrige la division d’énergie entre appareils. Vérifiez aussi course complète, alignement, masse, vitesse et cadence."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["verin-tape-fin-course-amortissement-ppv-pps", "festo-ysr8-8-c-energie-cadence-temperature", "force-verin-pneumatique-diametre-pression"]
sources: ["https://ca01.smcworld.com/catalog/en/actuator/RB-E/7-5-3-p1295-1317-RB_en/data/7-5-3-p1295-1317-RB_en.pdf"]
---

**Pour deux amortisseurs SMC RB en parallèle, diviser l’énergie totale par deux ne reprend pas la méthode de sélection publiée.** Les différences dimensionnelles du montage et des appareils peuvent empêcher une répartition égale entre les amortisseurs.

La [page imprimée 1303 du catalogue RB](https://ca01.smcworld.com/catalog/en/actuator/RB-E/7-5-3-p1295-1317-RB_en/data/7-5-3-p1295-1317-RB_en.pdf#page=9), rubrique « Parallel usage », donne **E = Ea / N / 0,6**. Ea représente l’énergie totale, N le nombre d’amortisseurs, E l’énergie à considérer par amortisseur pour cette sélection. Le facteur 0,6 appartient à cette méthode fabricant ; ce n’est pas un rendement à attribuer au convoyeur.

## Un exemple montre l’écart avec la moitié théorique

Dans un scénario fictif de **12 J avec deux amortisseurs**, la division égale donnerait 6 J chacun. La formule publiée conduit à **10 J par amortisseur** : 12 / 2 / 0,6 = 10. Ce calcul élimine une présélection fondée uniquement sur 6 J ; il ne certifie pas un montage de deux RB capables de 10 J.

Il faut encore examiner masse correspondante, vitesse de collision, fréquence et course. L’énergie totale ne se déduit pas de la seule masse : les mouvements et les forces qui continuent de pousser pendant le freinage doivent être décrits dans l’étude.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-rb-amortisseurs-paralleles-repartition-energie-svg-title smc-rb-amortisseurs-paralleles-repartition-energie-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-rb-amortisseurs-paralleles-repartition-energie-svg-title">Deux amortisseurs ne partagent pas forcément à moitié</title><desc id="smc-rb-amortisseurs-paralleles-repartition-energie-svg-desc">La sélection parallèle RB utilise E = Ea / N / 0,6. Exemple fictif : 12 J et deux amortisseurs conduisent à 10 J par amortisseur à considérer, sans validation d’application.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="23">RB : la division simple ne suffit pas</text><rect x="72" y="84" width="375" height="40" rx="8" fill="#9ebdad"/><path d="M166 125v50m181-50v50" stroke="#d3eb56" stroke-width="9"/><rect x="133" y="175" width="66" height="77" rx="8" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><rect x="314" y="175" width="66" height="77" rx="8" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><text x="107" y="285" fill="white" font-size="21">E : 10 J</text><text x="294" y="285" fill="white" font-size="21">E : 10 J</text><text x="28" y="330" fill="white" font-size="20">12 / 2 / 0,6 = 10 J : valeur de sélection</text></g>
</svg>
<figcaption>La sélection parallèle RB utilise E = Ea / N / 0,6. Exemple fictif : 12 J et deux amortisseurs conduisent à 10 J par amortisseur à considérer, sans validation d’application.</figcaption>
</figure>

## La course réellement utilisée reste déterminante

La même page précise que l’énergie maximale des RB et RBL ne peut être obtenue sans utilisation de la course complète. Un amortisseur portant une énergie nominale convenable peut donc être mal utilisé si une butée interrompt trop tôt sa course.

Le [guide des amortissements de vérin](/guides/verin-tape-fin-course-amortissement-ppv-pps/) concerne le freinage interne d’un autre organe. Il ne remplace pas la vérification de la course de ces amortisseurs extérieurs. Le [cas Festo YSR énergie par heure](/guides/festo-ysr8-8-c-energie-cadence-temperature/) montre une autre limite distincte, celle de l’accumulation d’énergie avec la cadence.

## Vérifier ce que le montage impose à chaque tige

La [page imprimée 1304](https://ca01.smcworld.com/catalog/en/actuator/RB-E/7-5-3-p1295-1317-RB_en/data/7-5-3-p1295-1317-RB_en.pdf#page=10) demande un impact perpendiculaire à l’axe et traite les écarts de montage. Le châssis et les points de contact doivent être examinés, au lieu de supposer que deux vis de réglage réglées au même nombre de tours garantissent une répartition égale.

Préparez un plan indiquant les deux positions, la course disponible et la surface de contact. La méthode parallèle ne dispense pas de vérifier l’alignement, la rigidité et les charges sur chaque appareil. Elle ne permet pas non plus de retirer un amortisseur et de conserver automatiquement la cadence initiale.

| Critère | Ce qui doit être établi |
| --- | --- |
| Énergie totale | Bilan du mouvement et des efforts qui agissent au freinage |
| Nombre d’amortisseurs | Configuration effectivement montée |
| Énergie par appareil | Formule parallèle du fabricant, puis limites du modèle |
| Course | Course complète réellement disponible selon montage |
| Cadence et vitesse | Domaine de chaque référence, pas seulement énergie |

Le [guide force du vérin](/guides/force-verin-pneumatique-diametre-pression/) aide à identifier une poussée additionnelle. Transmettez le cycle complet au constructeur pour une sélection lorsque le bilan, le contact ou la répartition ne sont pas établis. L’addition de deux capacités nominales ne constitue pas, à elle seule, une réception mécanique.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
