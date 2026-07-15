---
title: "Comparer la puissance spécifique de compresseurs avec les fiches CAGI"
seoTitle: "Puissance spécifique compresseur : comparer"
description: "Méthode d’achat pour comparer capacité, pression, puissance à plein débit et puissance à débit nul sur des fiches CAGI de même périmètre."
pubDate: 2026-07-15
category: "Choisir"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 15
featured: true
sources:
  - https://www.cagi.org/performance-verification
  - https://www.cagi.org/assets/documents/pdfs/RotaryCompressorUniformTestMethodNotApplicable.pdf?updated=1731084220
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
---

Deux compresseurs de même puissance moteur peuvent livrer des débits différents, à des pressions différentes et avec des auxiliaires différents. La puissance spécifique rapproche la puissance totale du package et sa capacité au même point de fonctionnement. Elle ne dispense pas d’étudier le comportement à charge partielle.

## Partir d’une fiche au format comparable

Le [programme de vérification CAGI](https://www.cagi.org/performance-verification) est un programme d’essais par tierce partie pour les compresseurs rotatifs et les sécheurs frigorifiques participants. La page du programme annonce une couverture des compresseurs rotatifs de 5 à 200 hp et des sécheurs de 50 à 1 000 scfm.

Le statut de participant et les données vérifiées doivent être contrôlés pour le modèle considéré. Le logo d’un fabricant ou une fiche hors programme ne suffit pas à déclarer toutes ses références vérifiées.

## Les champs à lire ensemble

Le [formulaire CAGI d’exemple pour un compresseur rotatif à vitesse fixe](https://www.cagi.org/assets/documents/pdfs/RotaryCompressorUniformTestMethodNotApplicable.pdf?updated=1731084220) rassemble notamment :

- capacité nominale à la pression de pleine charge ;
- pression de fonctionnement à pleine charge ;
- puissance totale du package à capacité nominale ;
- puissance spécifique du package ;
- puissance totale du package à débit nul ;
- tension, phases et fréquence de la configuration.

La note de la fiche précise que la puissance à d’autres points dépend de la stratégie de commande. Une valeur de pleine charge ne décrit donc pas le rendement sur tout le profil d’usine.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 365" role="img" aria-labelledby="specific-power-title specific-power-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="specific-power-title">Relations entre capacité, puissance et pression</title><desc id="specific-power-desc">La puissance spécifique divise la puissance totale du package par la capacité au même point de pression. La puissance à débit nul est contrôlée séparément.</desc>
  <rect width="760" height="365" rx="22" fill="#10281e"/><text x="38" y="44" fill="#d3eb56" font-size="15" font-weight="700">MÊME POINT DE FONCTIONNEMENT</text><rect x="38" y="82" width="260" height="108" rx="16" fill="#eef2e9"/><text x="58" y="116" fill="#19704f" font-size="13" font-weight="700">PUISSANCE PACKAGE</text><text x="58" y="153" fill="#143426" font-size="24" font-weight="700">kW à pleine charge</text><text x="322" y="145" fill="#e39a5e" font-size="34" font-weight="700">÷</text><rect x="365" y="82" width="357" height="108" rx="16" fill="#eef2e9"/><text x="385" y="116" fill="#19704f" font-size="13" font-weight="700">CAPACITÉ MESURÉE</text><text x="385" y="153" fill="#143426" font-size="24" font-weight="700">débit à cette pression</text><rect x="153" y="235" width="454" height="78" rx="15" fill="#d3eb56"/><text x="380" y="268" text-anchor="middle" fill="#143426" font-size="14" font-weight="700">PUISSANCE SPÉCIFIQUE DU PACKAGE</text><text x="380" y="294" text-anchor="middle" fill="#56685e" font-size="13">Comparer unité, pression et périmètre identiques</text><text x="38" y="343" fill="#b9cac1" font-size="13">La puissance à débit nul reste une ligne distincte du dossier.</text>
</svg>
</div>

## Refaire le calcul pour contrôler les unités

La puissance spécifique s’obtient en divisant la puissance totale par le débit au même point. Avant de comparer, harmonisez les unités sans modifier les conditions de référence. Une fiche en kW/100 cfm et une autre en kW/(m³/min) peuvent être converties, mais la pression et le périmètre du package doivent rester visibles.

Le formulaire d’exemple CAGI affiche 175 acfm, 36,12 kW et 20,64 kW/100 cfm à 125 psig. Le calcul `36,12 ÷ 175 × 100` retrouve 20,64. Ces chiffres illustrent le formulaire ABC fictif ; ils ne décrivent aucun modèle vendu.

## Ne pas comparer des pressions différentes

Une capacité à 7 bar et une autre à 10 bar ne répondent pas au même point de service. Si le procédé n’exige pas la pression supérieure, comparez des variantes ou des fiches au point pertinent. À l’inverse, réduire une fiche à une valeur de puissance spécifique sans vérifier la pression peut favoriser une machine incapable de couvrir l’usage.

Le [guide DOE](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) rappelle l’intérêt d’une approche système : production, traitement, distribution, stockage et usages interagissent. Le meilleur point de pleine charge ne garantit pas la meilleure exploitation si la machine travaille surtout à charge partielle.

## Ajouter le profil réel de demande

Classez les heures par plages de débit et de pression. Pour chaque candidat, demandez les performances dans les zones réellement rencontrées, la stratégie de commande et la puissance à débit nul. Un compresseur fixe très performant à pleine charge peut être mal employé s’il passe une grande partie du temps déchargé.

Le dossier [mesurer les temps charge et à vide](/guides/mesurer-temps-charge-vide-compresseur/) fournit la ligne de base. Pour plusieurs machines, le [séquencement des compresseurs](/guides/sequencer-plusieurs-compresseurs/) complète la comparaison.

## Tableau de décision

Une grille d’achat professionnelle devrait aligner, pour chaque modèle : fiche et statut de vérification, capacité, pression, puissance totale, puissance spécifique, puissance à débit nul, plage de régulation, traitement inclus, tension et hypothèses de disponibilité.

Les coûts d’énergie se calculent ensuite avec les heures et tarifs du site. CompatAir ne fabrique pas une durée annuelle ou un prix de l’électricité par défaut.

## Sources

- [CAGI, Performance Verification Program](https://www.cagi.org/performance-verification)
- [CAGI, formulaire de données pour compresseur rotatif à vitesse fixe](https://www.cagi.org/assets/documents/pdfs/RotaryCompressorUniformTestMethodNotApplicable.pdf?updated=1731084220)
- [U.S. Department of Energy, Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
