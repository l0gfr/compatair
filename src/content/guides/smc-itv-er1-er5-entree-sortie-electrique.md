---
title: "SMC ITV : distinguer Er.1 et Er.5 avant de chercher un manque d’air"
seoTitle: "SMC ITV Er.1/Er.5 : entrée ou sortie électrique"
description: "Er.1 concerne le signal d’entrée et Er.5 une surintensité de sortie sur les ITV standard. Orienter le diagnostic sans modifier la pression du réseau."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "smc-itv-coupure-air-alimentation-electrique"
  - "groupe-frl-filtre-regulateur-lubrificateur"
  - "distributeur-5-3-centre-ferme-verin-derive"
sources:
  - "https://www.smcworld.com/assets/manual/en-jp/files/ITV-E.pdf"
---

Une alarme sur un régulateur ITV ne désigne pas forcément une pression d’alimentation trop faible. La [notice des ITV1000/2000/3000, page 12](https://www.smcworld.com/assets/manual/en-jp/files/ITV-E.pdf#page=12) distingue **Er.1**, signal d’entrée hors plage, et **Er.5**, surintensité sur la sortie. Ces deux codes orientent vers des côtés différents du circuit électrique.

Relever le code exact avant de couper l’alimentation permet de conserver cette distinction. Augmenter la pression amont ne corrige pas une commande électrique hors plage ni une charge de sortie incompatible.

## Lire la référence complète, puis le type de signal

La page 5 présente plusieurs entrées : courant, tension ou présélection. La page 6 distingue également sortie analogique et sortie de commutation. Un automate dont l’étiquette indique simplement « analogique » ne permet pas de confirmer le type attendu par votre variante.

Transmettez au technicien la référence complète, le code affiché et le schéma de la liaison réelle. Pour Er.1, la notice demande de ramener le signal dans sa plage puis de redémarrer l’alimentation. Cette opération s’effectue dans une procédure de mise en sécurité du poste, par une personne compétente.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="smc-itv-er1-er5-entree-sortie-electrique-title smc-itv-er1-er5-entree-sortie-electrique-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="smc-itv-er1-er5-entree-sortie-electrique-title">Même afficheur · circuits différents</title><desc id="smc-itv-er1-er5-entree-sortie-electrique-desc">La notice distingue signal d’entrée hors plage et surintensité de sortie ; augmenter la pression amont ne résout pas ces codes.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Même afficheur · circuits différents</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Er.1</text><text x="41" y="151" font-size="21" fill="#eef2e9">Signal d’entrée</text><text x="41" y="193" font-size="21" fill="#eef2e9">Plage de commande</text><text x="41" y="235" font-size="21" fill="#eef2e9">Variante à identifier</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Er.5</text><text x="285" y="151" font-size="21" fill="#eef2e9">Circuit de sortie</text><text x="285" y="193" font-size="21" fill="#eef2e9">Charge raccordée</text><text x="285" y="235" font-size="21" fill="#eef2e9">Surintensité à traiter</text></svg>
<figcaption>La notice distingue signal d’entrée hors plage et surintensité de sortie ; augmenter la pression amont ne résout pas ces codes.</figcaption>
</figure>


## Er.5 demande de vérifier la charge de sortie

Pour les sorties de commutation décrites page 6, SMC indique le déclenchement de la protection à **30 mA DC ou davantage**. Cette donnée ne constitue pas une capacité à utiliser en permanence à la limite ; le type de sortie et sa charge doivent correspondre aux spécifications de la variante.

La recherche porte alors sur la liaison de retour et l’équipement raccordé, plutôt que sur le signal de consigne. Conservez le branchement spécifié pour la variante identifiée. La notice demande aussi d’éviter tout contact des fils d’une sortie non utilisée avec les autres conducteurs.

| Code relevé | Direction de la vérification |
| --- | --- |
| Er.1 | Plage du signal d’entrée de la variante |
| Er.5 | Charge et circuit de sortie |
| Er.2 ou Er.3 | SMC pour un défaut mémoire |
| Er.4 | SMC pour la procédure liée à l’électrovanne |

## Garder la panne électrique séparée du résultat pneumatique

Une pression sans consigne se recherche aussi dans la [borne minimale F_1](/guides/smc-itv-pression-minimale-sans-consigne-f1/). Ce comportement prévu doit rester séparé d’une alarme électrique.

Après correction autorisée, contrôlez le retour d’état et la pression effective dans la procédure du poste. L’absence d’alarme ne garantit pas à elle seule l’état de tous les volumes aval. Le [guide des coupures sur ITV](/guides/smc-itv-coupure-air-alimentation-electrique/) traite cette autre question.

Le [choix d’un régulateur](/guides/groupe-frl-filtre-regulateur-lubrificateur/) et le [dossier des volumes retenus dans un distributeur](/guides/distributeur-5-3-centre-ferme-verin-derive/) aident à examiner le circuit pneumatique après le diagnostic électrique. Les types spéciaux nécessitent leurs spécifications propres : la notice précise que son application à ces variantes est partielle.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
