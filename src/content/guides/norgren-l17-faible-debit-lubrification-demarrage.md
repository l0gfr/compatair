---
title: "Norgren L17 : pourquoi un faible débit peut empêcher la lubrification"
seoTitle: "Norgren L17 : seuil de débit et lubrification"
description: "Le L17 a un seuil de mise en action à vérifier avant le dosage. Distinguer débit instantané, gouttes Oil-Fog et tableau Micro-Fog."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["groupe-frl-filtre-regulateur-lubrificateur", "huile-cle-a-chocs-pneumatique-lubrification", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://cdn.norgren.com/pdf/L17IM.pdf"]
---

Une huile visible dans la cuve du L17 ne garantit pas que le lubrificateur travaille au débit de l’outil. **Le premier contrôle concerne le seuil de mise en action, avant le nombre de gouttes.** C’est un point utile lorsqu’un outil n’utilise l’air que par brèves impulsions ou lorsque plusieurs sorties ont été fermées après un changement de poste.

## Le seuil publié porte sur un débit sous une pression donnée

La [notice L17, rubrique Technical Data](https://cdn.norgren.com/pdf/L17IM.pdf#page=1) donne un débit minimal de mise en action de **3,8 dm³/s à une pression d’entrée de 6,3 bar**. La conversion arithmétique donne **3,8 × 60 = 228 L/min**. Ce nombre exprime la donnée de la notice ; il ne transforme ni la consommation moyenne d’un outil ni un volume par coup en débit instantané connu.

Un relevé inférieur au seuil dans les conditions correspondantes ne permet donc pas de compter sur la mise en action décrite. Si la fiche de l’outil ne publie qu’un débit moyen, il manque encore le débit réellement traversant le L17 pendant sa phase active. Additionner une moyenne sur une minute à un seuil de fonctionnement local donnerait une comparaison mal définie. Le [guide des régimes de consommation](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à séparer ces usages.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 350" role="img" aria-labelledby="norgren-l17-faible-debit-lubrification-demarrage-title norgren-l17-faible-debit-lubrification-demarrage-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="norgren-l17-faible-debit-lubrification-demarrage-title">L17 : vérifier le débit avant le dosage</title><desc id="norgren-l17-faible-debit-lubrification-demarrage-desc">Seuil de mise en action publié à 6,3 bar : 3,8 dm³/s, soit 228 L/min par conversion. Le seuil n’est pas une mesure du débit de votre outil.</desc><rect width="520" height="350" rx="22" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">L17 · seuil à 6,3 bar</text><path d="M50 154H474" stroke="#8abfa3" stroke-width="4"/><path d="M50 142v24M225 129v48M474 142v24" stroke="#eef2e9" stroke-width="3"/><circle cx="225" cy="154" r="10" fill="#d3eb56"/><text x="170" y="110" fill="#d3eb56" font-size="24" font-weight="700">3,8 dm³/s</text><text x="166" y="204" fill="#d3eb56" font-size="24">228 L/min</text><text x="42" y="247" fill="#eef2e9" font-size="23">Débit de mise en action ≠ dosage</text><text x="42" y="292" fill="#eef2e9" font-size="20">Régler les gouttes sous flux constant</text></svg>
<figcaption>Seuil de mise en action publié à 6,3 bar : 3,8 dm³/s, soit 228 L/min par conversion. Le seuil n’est pas une mesure du débit de votre outil.</figcaption>
</figure>

## Oil-Fog et Micro-Fog ont des consignes de dosage différentes

La rubrique [Adjustment](https://cdn.norgren.com/pdf/L17IM.pdf#page=1) demande un débit d’air constant pendant le réglage. Pour l’Oil-Fog, Norgren propose une goutte par minute pour chaque **5 dm³/s** de débit moyen ; son exemple à **19 dm³/s** conduit à **quatre gouttes par minute**. Le Micro-Fog utilise un tableau dépendant du diamètre des ports. La même position du réglage ou le même nombre de gouttes ne constitue donc pas une correspondance entre ces deux technologies.

| Observation | Vérification utile |
| --- | --- |
| Huile présente, aucune goutte observée | Débit local et conditions de mise en action |
| Gouttes visibles pendant un essai permanent | Type exact Oil-Fog ou Micro-Fog, puis dosage correspondant |
| Réglage fait pendant une succession de coups | Reprendre les conditions de flux constant demandées pour le réglage |
| Outil devenu moins sollicité | Réexaminer le régime d’air plutôt que conserver l’ancien dosage par habitude |

Le [guide FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) précise la place du lubrificateur. La [lubrification d’une clé à chocs](/guides/huile-cle-a-chocs-pneumatique-lubrification/) reste à vérifier dans la notice de la clé : certains composants ou procédés ne doivent pas recevoir d’huile.

## Vérifier l’huile reçue après le réglage

Norgren demande de surveiller l’appareil lubrifié pendant quelques jours après le réglage initial et d’ajuster si l’apport apparaît trop fort ou trop faible. La décision dépend ainsi de deux observations différentes : le comportement du L17 pendant un débit connu et l’huile effectivement délivrée à l’appareil. Ouvrir davantage le réglage sans avoir établi la mise en action ne résout pas le premier point.

La notice considérée est **IM-341.400, édition 5/01**. Son seuil concerne le L17 et la pression annoncée. Il ne doit pas être étendu à tous les lubrificateurs ou à une pression d’entrée différente.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Norgren L17, installation et entretien IM-341.400](https://cdn.norgren.com/pdf/L17IM.pdf)
