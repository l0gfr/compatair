---
title: "Lupamat LKV 22 DHK : le débit publié ne donne pas le minimum de régulation"
seoTitle: "Lupamat LKV 22 DHK : minimum de débit non publié"
description: "Les 3 710, 3 100 et 2 600 L/min du LKV 22 DHK PLUS sont des points liés à la pression. Ils ne définissent pas son minimum de régulation à vitesse variable."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-vitesse-variable-vsd-rentabilite-atelier", "compresseur-piston-ou-vis-profil-charge", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://lupamat.com/pdf/Lupamat-EN.pdf"]
---

**Le catalogue Lupamat donne plusieurs FAD pour le LKV 22 DHK PLUS, mais il ne définit pas son débit minimal de régulation dans la table consultée.** Les trois nombres correspondent à trois pressions de travail ; ils ne décrivent pas une plage de vitesse allant de 2 600 à 3 710 L/min à pression constante.

Le [tableau, PDF page 11](https://lupamat.com/pdf/Lupamat-EN.pdf#page=11), publie **3,71 m³/min à 7 bar**, **3,10 à 10 bar** et **2,60 à 13 bar**. Leur conversion donne 3 710, 3 100 et 2 600 L/min. La série DHK est décrite avec variateur, et la table annonce un FAD selon ISO 1217:2009, annexe E. Ces informations ne fournissent pas, à elles seules, toute la courbe de régulation.

## Trois pressions ne sont pas trois charges

Une plage de débit régulé doit nommer au moins sa pression et ses bornes dans les conditions applicables. La colonne à 13 bar du catalogue ne peut pas être transformée en minimum du modèle à 7 bar. Cette erreur produirait une sélection fausse pour un atelier à faible consommation une partie de la journée.

Le [guide VSD et débit minimal](/guides/compresseur-vitesse-variable-vsd-rentabilite-atelier/) explique pourquoi le profil de charge doit être rapproché de la plage réellement admise. Un variateur n’implique pas que la machine puisse descendre à zéro en produisant efficacement une quantité quelconque d’air.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 387" role="img" aria-labelledby="lupamat-dhk22-debit-minimum-variateur-title lupamat-dhk22-debit-minimum-variateur-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="lupamat-dhk22-debit-minimum-variateur-title">Une ligne par pression de travail</title><desc id="lupamat-dhk22-debit-minimum-variateur-desc">Points publiés du LKV 22 DHK PLUS. Ils ne constituent pas les bornes d’une plage de régulation à pression constante.</desc>
<rect width="520" height="387" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Une ligne par pression de travail</text><rect x="24" y="66" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="95" fill="#d3eb56" font-size="21" text-anchor="start">7 bar : 3 710 L/min</text><text x="42" y="122" fill="white" font-size="19" text-anchor="start">FAD publié pour cette pression</text><rect x="24" y="157" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="186" fill="#d3eb56" font-size="21" text-anchor="start">10 bar : 3 100 L/min</text><text x="42" y="213" fill="white" font-size="19" text-anchor="start">Un autre point de pression</text><rect x="24" y="248" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="277" fill="#d3eb56" font-size="21" text-anchor="start">13 bar : 2 600 L/min</text><text x="42" y="304" fill="white" font-size="19" text-anchor="start">Le minimum VSD reste à documenter</text><text x="26" y="363" fill="#b4cec0" font-size="18" text-anchor="start">Ne pas fabriquer une plage 2 600–3 710</text>
</svg>
<figcaption>Points publiés du LKV 22 DHK PLUS. Ils ne constituent pas les bornes d’une plage de régulation à pression constante.</figcaption>
</figure>

## Préparer une consultation pour un atelier variable

Décrivez la pression utile, les consommations observées et les durées de chaque phase. Séparez les périodes avec plusieurs postes actifs et celles où un seul consommateur reste en marche. Le [guide des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à organiser ce relevé.

Demandez ensuite à Lupamat ou au fournisseur la plage de FAD du LKV 22 DHK PLUS à la pression choisie, le comportement sous son minimum, les conditions de commande et les données de puissance correspondantes. Une réponse qui recopie les trois points 7/10/13 bar ne résout pas encore la demande de régulation à une pression donnée.

Conservez les conditions de mesure et la configuration exacte : la table distingue PLUS et PREMIUM avec d’autres valeurs. Le nom « LKV 22 DHK » sans le suffixe laisse déjà une ambiguïté avant le sujet du minimum.

## Évaluer un investissement sans économie automatique

Le catalogue présente les avantages attendus du variateur, mais un gain d’énergie pour votre atelier demande son profil réel et une comparaison dans les mêmes conditions. CompatAir ne transpose pas un exemple commercial en pourcentage universel d’économie.

Une consultation peut comparer un variateur et une autre architecture documentée, en conservant stockage, traitement d’air et comportement de commande. Le [guide piston ou vis selon la charge](/guides/compresseur-piston-ou-vis-profil-charge/) pose cette question de régime avant le seul nombre de références.

## Le statut de la donnée reste utile

Le FAD des points publiés est exploitable à leurs pressions ; le minimum de régulation reste à obtenir. Ces deux états peuvent coexister sur la même fiche. Il n’est pas nécessaire d’écarter tous les chiffres parce qu’une donnée manque, ni de fabriquer cette donnée pour rendre le verdict conclusif.

La base doit donc conserver la source, les points de FAD et l’absence de minimum qualifié. La prochaine amélioration utile est une réponse primaire sur la plage à pression constante, suivie d’une comparaison avec le profil d’air du poste.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
