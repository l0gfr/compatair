---
title: "Bruit d’un compresseur : comment comparer les décibels sans se tromper"
seoTitle: "Bruit d’un compresseur : dB(A), LpA et LwA"
description: "Comment comparer les décibels de deux compresseurs ? Distinguez LpA et LwA, vérifiez la distance de mesure et les limites d’une mention « silencieux »."
pubDate: 2026-07-13
updatedDate: 2026-10-23
category: "Comprendre"
audiences: [particulier, professionnel]
metiers: [maintenance-industrielle]
readingTime: 6
featured: false
sources:
  - https://www.inrs.fr/risques/bruit/ce-qu-il-faut-retenir.html
  - https://www.inrs.fr/risques/bruit/exposition-risque
  - https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014
  - https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
---

**Pour comparer le bruit de deux compresseurs, relevez d’abord le même indicateur : LpA pour la pression acoustique, LwA pour la puissance acoustique.** Deux valeurs en dB(A) ne décrivent pas nécessairement la même mesure. Pour le LpA, vérifiez aussi la distance et l’environnement ; dans les deux cas, les conditions d’essai doivent être compatibles. Le nom « Silent » ne remplace aucune de ces informations.

<svg viewBox="0 0 760 300" role="img" aria-labelledby="noise-title noise-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="noise-title">Conditions d’une comparaison acoustique valable</title><desc id="noise-desc">Deux valeurs en décibels doivent utiliser le même indicateur et des conditions de mesure compatibles. Pour la pression acoustique LpA, la distance doit aussi être vérifiée.</desc>
  <rect width="760" height="300" rx="18" fill="#eef2e9"/><text x="40" y="48" fill="#102018" font-size="22" font-weight="700">Avant de classer deux valeurs en dB</text>
  <rect x="40" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="83" y="126" fill="white" font-size="19" font-weight="700">Même indicateur</text>
  <rect x="280" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="380" y="126" text-anchor="middle" fill="white" font-size="19" font-weight="700">Distance si LpA</text>
  <rect x="520" y="82" width="200" height="74" rx="10" fill="#2f7659"/><text x="548" y="126" fill="white" font-size="19" font-weight="700">Même protocole</text>
  <text x="40" y="213" fill="#102018" font-size="21" font-weight="700">dB(A), LpA et LwA ne sont pas des libellés interchangeables.</text>
  <text x="40" y="254" fill="#68776e" font-size="16">Sans ces précisions, CompatAir affiche la valeur mais ne construit pas de classement.</text>
</svg>

## Pression acoustique et puissance acoustique

L’[INRS distingue l’émission d’une machine et l’exposition au poste](https://www.inrs.fr/risques/bruit/exposition-risque). Pour lire une fiche, commencez par identifier le symbole qui accompagne le nombre.

| Indication | Ce qu’elle décrit | Vérification utile |
| --- | --- | --- |
| LpA | Niveau de pression acoustique au point de mesure | Distance, environnement et conditions de fonctionnement |
| LwA | Niveau de puissance acoustique émis par la source | Méthode et conditions de fonctionnement |
| dB(A) seul | Une valeur avec pondération A, sans grandeur précisée | Demander s’il s’agit de LpA ou de LwA |

La pression acoustique dépend du point où elle est mesurée et de l’environnement. La puissance acoustique caractérise l’émission de la source selon une méthode définie. La [directive européenne 2000/14/CE](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014) encadre notamment les émissions sonores de matériels destinés à être utilisés à l’extérieur et leur marquage en puissance acoustique garantie.

Une valeur LpA ne doit donc pas être classée directement face à une valeur LwA. Pour comparer deux pressions acoustiques exprimées en dB(A), la distance et les conditions doivent rester compatibles.

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

La [fiche FINI SILTEK TS/OL130S](/guides/fini-siltek-ts240-debit-64dba/) permet d’examiner ensemble la distance du bruit annoncé et la nature du débit, sans établir un classement acoustique entre mesures prises à des distances différentes.

## Sources

- [INRS, risque bruit](https://www.inrs.fr/risques/bruit/ce-qu-il-faut-retenir.html)
- [INRS, émission, propagation et exposition au bruit](https://www.inrs.fr/risques/bruit/exposition-risque)
- [EUR-Lex, directive 2000/14/CE](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0014)
- [Metabo, Basic 220-24 OF Silent](https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)

La colonne acoustique du [BOGE C 12-2 annoncé à 63 dB(A)](/guides/boge-c12-2-63-db-superschallgedammt/) porte une mention de configuration. Ce cas permet de repérer l’habillage concerné avant de comparer deux offres ou de prévoir l’implantation dans l’atelier.
