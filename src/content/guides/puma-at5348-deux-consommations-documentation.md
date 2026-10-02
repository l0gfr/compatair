---
title: "PUMA AT-5348 : pourquoi les fiches donnent-elles 368 et 566 L/min ?"
seoTitle: "PUMA AT-5348 : comprendre les deux débits publiés"
description: "Le catalogue PNC-1902 et le tableau PUMA actuel décrivent des régimes différents. Identifier la version avant de dimensionner l’alimentation d’une AT-5348."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel", "particulier"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "groupe-frl-filtre-regulateur-lubrificateur"]
sources:
  - https://www.pumaair.com/views/proimages/pd-en/PDF/PNC-1902.pdf
  - https://www.pumaair.com/product-1-2--Impact-Wrench---Kit-1-2ImpactWrenchKit.html
---

**La référence AT-5348 ne suffit pas à rendre deux chiffres de consommation interchangeables.** Le catalogue PUMA PNC-1902 distingue une consommation moyenne et une consommation en charge. Le tableau actuellement publié sur le site PUMA emploie l’intitulé « Continuous Air Consumption » et affiche une autre valeur. Une autre caractéristique change également : la vitesse à vide. L’alimentation doit être validée pour l’exemplaire concerné.

Cette différence compte lorsque vous cherchez un compresseur pour une [PUMA AT-5348](/outils-pneumatiques/cle-a-chocs-puma-at-5348/). Retenir le plus petit chiffre peut fermer artificiellement le calcul. Retenir le plus grand ne démontre pas davantage que les deux documents décrivent exactement la même version.

## Deux tableaux fabricant, deux présentations

La [page PDF 19 du catalogue PNC-1902](https://www.pumaair.com/views/proimages/pd-en/PDF/PNC-1902.pdf#page=19) donne, pour l’AT-5348, les indications suivantes : 7 000 tr/min à vide, 90 psi de pression de fonctionnement, 5 CFM de consommation moyenne et 20 CFM en charge. Le débit moyen et le débit en charge appartiennent donc à deux colonnes distinctes.

Le [tableau PUMA de la famille 1/2 pouce](https://www.pumaair.com/product-1-2--Impact-Wrench---Kit-1-2ImpactWrenchKit.html) affiche 7 500 tr/min et une consommation continue de 13 SCFM, également présentée comme 368 L/min. Le tableau donne un couple maximal de 600 ft·lb et 814 N·m. Ces valeurs sont déclarées par le fabricant ; CompatAir n’a pas mesuré la clé sur banc.

| Document | Intitulé de consommation | Valeur publiée | Vitesse à vide |
| --- | --- | --- | --- |
| PNC-1902 | Moyenne | 5 CFM | 7 000 tr/min |
| PNC-1902 | En charge | 20 CFM | 7 000 tr/min |
| Tableau PUMA actuel | Continue | 13 SCFM / 368 L/min | 7 500 tr/min |

La colonne continue n’explique pas, à elle seule, le protocole de charge. Le changement de vitesse invite aussi à vérifier la notice et la version. Aucun des deux documents consultés ne fournit une table de correspondance permettant d’attribuer automatiquement chaque présentation à un numéro de série.

## D’où viennent les 566 L/min ?

La conversion volumique des 20 CFM donne `20 × 28,316846592 = 566,337 L/min`, soit environ 566 L/min. C’est le résultat de conversion de la valeur en charge du catalogue, et non une nouvelle mesure de l’AT-5348.

Les conditions de référence des volumes CFM et SCFM doivent également rester identifiées. Une conversion d’unité n’efface ni le régime, ni la pression, ni les conditions de normalisation. Le [guide du débit restitué](/guides/debit-restitue-fad-vs-debit-aspire/) explique pourquoi le chiffre d’un compresseur doit être associé à sa propre condition de pression.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 245" role="img" aria-labelledby="at5348-title at5348-desc">
<title id="at5348-title">Lire les consommations AT-5348 avec leur document</title>
<desc id="at5348-desc">Le catalogue sépare moyenne et charge. Le tableau actuel publie une consommation continue. Ces lignes ne constituent pas une courbe de mesure commune.</desc>
<rect width="440" height="245" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="14" fill="#eef2e9">
<text x="22" y="31">PNC-1902</text><text x="240" y="31">Tableau actuel</text>
<text x="22" y="76">Moyenne : 5 CFM</text><text x="22" y="112">Charge : 20 CFM</text>
<text x="240" y="76">Continue : 13 SCFM</text><text x="240" y="112">368 L/min publiés</text>
<text x="22" y="160">7 000 tr/min</text><text x="240" y="160">7 500 tr/min</text>
<text x="22" y="216">Version et protocole à vérifier pour l’exemplaire livré</text>
</g><path d="M220 49V177" stroke="#c7d0c6" stroke-width="2"/>
</svg>
<figcaption>Comparaison documentaire, sans rapprochement supposé entre les protocoles de mesure.</figcaption>
</figure>

## Un achat d’occasion demande une identification plus précise

Relevez le modèle complet, les marquages disponibles, le numéro de série et la notice fournie avec la machine. Photographier seulement la mention AT-5348 sur une annonce ne résout pas la différence documentaire. Transmettez ces éléments au fournisseur ou au fabricant et demandez quel tableau s’applique.

La question utile est précise : quelle consommation en charge, à quelle pression à l’entrée de l’outil, pour cette version ? Demandez aussi si « continue » correspond à un essai à puissance maximale, à un autre régime ou à une convention de catalogue. Une réponse portant uniquement sur le couple maximal ne documente pas l’air consommé.

Si le vendeur reprend une fiche ancienne, conservez-la comme document de l’offre. Elle ne doit pas remplacer silencieusement la documentation correspondant à la machine livrée. Cette traçabilité devient utile lors d’un échange, d’une réparation ou d’un changement d’alimentation.

## Le compresseur doit rester un choix conditionnel

Supposons, pour illustrer la décision, qu’un compresseur fournisse 400 L/min restitués à la pression nécessaire. Il dépasse arithmétiquement les 368 L/min du tableau actuel, mais reste sous les quelque 566 L/min issus de la ligne en charge du catalogue. Cette hypothèse montre pourquoi la conclusion dépend du document applicable ; elle ne valide aucun compresseur réel.

CompatAir conserve l’intitulé continu dans la fiche actuelle et ne le transforme pas en maximum en charge. Le verdict reste **données insuffisantes** tant que le point requis n’est pas établi. Après cette clarification, comparez le débit restitué du compresseur, son facteur de marche documenté et l’alimentation du poste. Le [FRL et les raccordements](/guides/groupe-frl-filtre-regulateur-lubrificateur/) font partie de ce contrôle, sans pouvoir résoudre une consommation fabricant encore ambiguë.
