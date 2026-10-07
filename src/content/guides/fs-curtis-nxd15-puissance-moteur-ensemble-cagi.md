---
title: "FS-Curtis NXD15 : pourquoi « 15 kW » ne décrit pas la consommation du compresseur"
seoTitle: "FS-Curtis NXD15 : puissance moteur et puissance totale"
description: "La fiche NXD15-100 publie 18,40 kW pour l’ensemble. Comparez les points CAGI et le temps à vide avant de calculer la consommation électrique."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-kva-kw-kwh-devis-electrique", "lire-fiche-cagi-compresseur-iso-1217", "mesurer-temps-charge-vide-compresseur"]
sources: ["https://us.fscurtis.com/wp-content/uploads/2026/01/nxd15kw-100psi.pdf", "https://us.fscurtis.com/wp-content/uploads/2026/01/nxd15kw-125psi.pdf"]
---

Un devis décrit un NXD15 et votre tableau d’énergie lui attribue automatiquement 15 kW pendant toute la journée. Ce calcul ne reprend pas les grandeurs de la fiche technique. Pour ce compresseur, il faut lire la puissance de l’ensemble à son point de fonctionnement, puis distinguer les heures en charge des heures à vide.

La [fiche FS-Curtis NXD15-100, datée du 31 décembre 2025](https://us.fscurtis.com/wp-content/uploads/2026/01/nxd15kw-100psi.pdf#page=1) indique un moteur nominal de **20 hp**, une puissance totale absorbée de **18,40 kW** à **100 psig**, et **8 kW à débit nul**. Le débit associé au point en charge est **95,9 ACFM**. Ces quatre valeurs répondent à des questions différentes : motorisation, besoin électrique en charge, besoin à vide et production d’air au point documenté.

## Quelle valeur entrer dans un calcul d’énergie ?

Utilisez la puissance absorbée de l’ensemble lorsque votre objectif est d’évaluer des kWh. La puissance nominale du moteur sert à identifier l’équipement ; elle ne décrit pas toutes les phases d’exploitation. Pour un raccordement électrique, la puissance en charge reste insuffisante à elle seule : protections, alimentation et conditions de démarrage se vérifient dans le dossier de la version livrée. Le [guide kW, kVA et kWh](/guides/compresseur-kva-kw-kwh-devis-electrique/) conserve cette séparation.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux puissances à ne pas confondre" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fs-curtis-nxd15-puissance-moteur-ensemble-cagi-title fs-curtis-nxd15-puissance-moteur-ensemble-cagi-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="fs-curtis-nxd15-puissance-moteur-ensemble-cagi-title">Deux puissances à ne pas confondre</title><desc id="fs-curtis-nxd15-puissance-moteur-ensemble-cagi-desc">Valeurs FS-Curtis du 31 décembre 2025. La puissance de l’ensemble et celle du moteur désignent deux grandeurs différentes.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Deux puissances à ne pas confondre</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Moteur nominal</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">20 hp dans la fiche NXD15-100</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Caractéristique du moteur</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Ensemble en fonctionnement</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">18,40 kW au point 100 psig</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">8 kW publiés à débit nul</text></svg>
</div>

*Valeurs FS-Curtis du 31 décembre 2025. La puissance de l’ensemble et celle du moteur désignent deux grandeurs différentes.*

Le point **125 psig** possède sa [propre fiche NXD15-125](https://us.fscurtis.com/wp-content/uploads/2026/01/nxd15kw-125psi.pdf#page=1). Ne reportez pas la consommation mesurée à 100 psig sur cette autre configuration. Si le vendeur cite un débit d’une fiche et une puissance d’une autre, demandez un couple pression-débit-puissance provenant du même document.

## Exemple de calcul, avec des heures annoncées comme hypothèses

Prenons un scénario pédagogique de **quatre heures au point en charge publié** et **deux heures à débit nul au point publié**. Le calcul est 4 × 18,40 + 2 × 8 = **89,6 kWh**. Ce résultat utilise les valeurs documentaires et un emploi du temps fictif. Il ne représente aucune mesure réalisée sur un atelier.

Multiplier 15 par six heures donnerait 90 kWh, presque le même total par hasard. Cette proximité numérique masquerait une mauvaise méthode : avec d’autres durées, le résultat changerait. Elle empêcherait surtout d’identifier les heures à vide sur lesquelles agir.

Dans le bilan, conservez deux lignes : heures au point en charge et heures à débit nul. Les horaires d’ouverture seuls ne répartissent pas ces durées. Le [relevé charge et vide](/guides/mesurer-temps-charge-vide-compresseur/) explique comment conserver ces phases.

## Ce que la fiche permet de comparer

Elle permet une comparaison au point publié, avec les tolérances et le référentiel indiqués. Elle ne démontre pas un rendement identique à toutes les pressions ou dans tout local. Son pied de page précise que CAGI n’a pas indépendamment vérifié les données rapportées ; la présence du formulaire ne suffit donc pas à attribuer une vérification individuelle à l’exemplaire proposé.

Pour comparer deux offres, aligner d’abord pression, frontière de l’ensemble mesuré et régime. Puis examiner la [lecture détaillée d’une fiche CAGI](/guides/lire-fiche-cagi-compresseur-iso-1217/). Tant qu’un de ces éléments manque, garder la consommation annuelle en attente plutôt que combler la ligne par la puissance inscrite dans le nom du modèle.

La ligne à compléter dans le budget est donc la répartition des durées. Une fois cette répartition mesurée et la fiche du point livré confirmée, le calcul d’énergie utilise les deux puissances du groupe. Le raccordement électrique reste une étude distincte.

Pour conserver les caractéristiques de la configuration documentée dans le calculateur, consultez la [fiche FS-Curtis NXD15](/compresseurs/fs-curtis-nxd15/). Son point de débit publié et les données de puissance de ce guide répondent à deux questions différentes.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
