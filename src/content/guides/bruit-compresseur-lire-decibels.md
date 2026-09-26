---
title: "Bruit d’un compresseur : comment comparer les décibels sans se tromper"
seoTitle: "Bruit d’un compresseur : comparer les dB | CompatAir"
description: "Comparez le bruit de deux compresseurs sans confondre LpA et LwA : indicateur, distance, protocole et limites des mentions « Silent »."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Comprendre"
audiences: [particulier, professionnel]
metiers: [maintenance-industrielle]
readingTime: 6
featured: false
sources:
  - https://www.inrs.fr/risques/bruit/ce-qu-il-faut-retenir.html
  - https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014
  - https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
---

Comparer deux compresseurs à partir d’un nombre suivi de « dB » peut produire une fausse hiérarchie. Il faut d’abord vérifier ce qui a été mesuré : niveau de pression acoustique au poste d’utilisation, niveau de puissance acoustique de la machine, distance, environnement et méthode.

<svg viewBox="0 0 760 300" role="img" aria-labelledby="noise-title noise-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="noise-title">Conditions d’une comparaison acoustique valable</title><desc id="noise-desc">Deux valeurs en décibels ne sont comparables que si elles utilisent le même indicateur, la même distance et des conditions de mesure compatibles.</desc>
  <rect width="760" height="300" rx="18" fill="#eef2e9"/><text x="40" y="48" fill="#102018" font-size="22" font-weight="700">Avant de classer deux valeurs en dB</text>
  <rect x="40" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="83" y="126" fill="white" font-size="19" font-weight="700">Même indicateur</text>
  <rect x="280" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="326" y="126" fill="white" font-size="19" font-weight="700">Même distance</text>
  <rect x="520" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="548" y="126" fill="white" font-size="19" font-weight="700">Même protocole</text>
  <text x="40" y="213" fill="#102018" font-size="21" font-weight="700">dB(A), LpA et LwA ne sont pas des libellés interchangeables.</text>
  <text x="40" y="254" fill="#68776e" font-size="16">Sans ces précisions, CompatAir affiche la valeur mais ne construit pas de classement.</text>
</svg>

## Pression acoustique et puissance acoustique

L’[INRS](https://www.inrs.fr/risques/bruit/ce-qu-il-faut-retenir.html) rappelle que le décibel repose sur une échelle logarithmique. Une différence numérique ne se lit donc pas comme une simple différence linéaire.

La pression acoustique dépend du point où elle est mesurée et de l’environnement. La puissance acoustique caractérise l’émission de la source selon une méthode définie. La [directive européenne 2000/14/CE](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014) encadre notamment les émissions sonores de matériels destinés à être utilisés à l’extérieur et leur marquage en puissance acoustique garantie.

Une valeur LpA ne doit donc pas être classée directement face à une valeur LwA. Même lorsque deux nombres sont exprimés en dB(A), la distance et les conditions doivent rester compatibles.

## Pourquoi CompatAir reste prudent

La fiche du [Metabo Basic 220-24 OF Silent](https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html) publie plusieurs informations acoustiques. Celle de l’[Einhell TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/) emploie sa propre présentation.

CompatAir conserve les nombres sourcés dans les fiches, mais ajoute « indicateur à vérifier dans la source ». Tant que les champs acoustiques n’ont pas été normalisés avec le même indicateur et le même protocole, le site ne déclare pas qu’un modèle est précisément plus silencieux qu’un autre.

## Le nom commercial n’est pas une mesure

Les mots « Silent », « Silent Plus » ou toute autre appellation commerciale ne remplacent pas une valeur acoustique. Ils peuvent identifier une gamme, mais ne suffisent pas pour comparer deux machines.

Le bruit perçu dépend aussi de l’installation : local réverbérant, sol, vibrations transmises, distance et durée de fonctionnement. Une fiche produit ne décrit pas nécessairement l’exposition réelle d’un utilisateur dans son atelier.

## Checklist de comparaison

- relever le symbole exact : LpA, LwA ou autre ;
- vérifier la pondération, par exemple dB(A) ;
- rechercher la distance lorsque la pression acoustique est donnée ;
- comparer des valeurs issues de méthodes compatibles ;
- ne pas déduire une exposition professionnelle du seul chiffre produit ;
- consulter la notice et les exigences de protection applicables.

Pour passer de la lecture acoustique au choix d’un modèle, consultez le dossier [choisir un compresseur silencieux pour l’atelier](/guides/choisir-compresseur-silencieux-atelier/).

Sur une machine pneumatique, la recherche de bruit peut aussi conduire à [examiner un silencieux colmaté et la contre-pression d’échappement](/guides/silencieux-pneumatique-colmate-contre-pression/), avec les contrôles prévus par la notice.

## Sources

- [INRS, risque bruit](https://www.inrs.fr/risques/bruit/ce-qu-il-faut-retenir.html)
- [EUR-Lex, directive 2000/14/CE](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014)
- [Metabo, Basic 220-24 OF Silent](https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)
