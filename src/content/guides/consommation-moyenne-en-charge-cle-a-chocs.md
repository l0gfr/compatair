---
title: "Clé à chocs : consommation moyenne ou en charge pour choisir le compresseur ?"
seoTitle: "Clé à chocs : débit moyen ou en charge ?"
description: "156 ou 612 L/min pour une CP7732C ? Comprendre les libellés constructeur, les écarts entre documents et le débit à retenir avant d’acheter un compresseur."
pubDate: 2026-09-25
category: "Comprendre"
audiences: [particulier, professionnel]
metiers: [garage-automobile, atelier-poids-lourds]
readingTime: 6
relatedCalculatorTool: chicago-pneumatic-cp7732c
relatedGuides: [compresseur-pour-cle-a-chocs-pneumatique, convertir-cfm-l-min-nl-min-air-comprime, cle-a-chocs-manque-couple-diagnostic]
sources:
  - https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf
  - https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321
  - https://www.einhell.fr/p/4010393/
  - https://www.cagi.org/resource-library
---

**Pour alimenter une clé pendant qu’elle travaille, partez de sa consommation en charge.** Une consommation moyenne peut décrire un autre régime d’utilisation. Elle ne remplace pas le débit nécessaire pendant l’effort. La différence est déterminante lorsqu’un vendeur annonce qu’un petit compresseur « convient aux clés à chocs » sans préciser lesquelles.

La Chicago Pneumatic CP7732C fournit un cas documenté : la même brochure publie une moyenne et une consommation en charge, dans deux colonnes différentes. Nous n’avons pas mesuré cet outil en atelier ; les valeurs ci-dessous sont celles de ses documents, consultés le 25 septembre 2026.

## CP7732C : d’où viennent les 156 et 612 L/min ?

La [brochure CP7732C de 2016, page 2](https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf) identifie la référence **8941077321** et indique une pression de 6,3 bar. En conservant ses colonnes métriques :

| Donnée publiée | Conversion en L/min | Ce que la ligne décrit |
| --- | --- | --- |
| Moyenne : 2,6 L/s | 2,6 × 60 = **156** | Une consommation moyenne annoncée |
| En charge : 10,2 L/s | 10,2 × 60 = **612** | La consommation annoncée pendant l’effort |

La brochure ne détaille pas ici le protocole de calcul de cette moyenne. Déduire de ces nombres que votre travail comporte obligatoirement un quart de temps actif serait une hypothèse supplémentaire. Il faut décrire vos propres séquences.

<div class="article-infographic" tabindex="0" role="group" aria-label="Comparaison des consommations de la CP7732C">
<svg viewBox="0 0 760 280" role="img" aria-labelledby="charge-title charge-desc" xmlns="http://www.w3.org/2000/svg">
<title id="charge-title">Deux consommations, deux lectures</title><desc id="charge-desc">La brochure CP7732C publie 156 litres par minute en moyenne et 612 en charge après conversion. La moyenne ne représente pas le débit pendant l’effort.</desc>
<rect width="760" height="280" rx="20" fill="#eef2e9"/><text x="32" y="42" font-size="22" font-weight="700" fill="#143426">CP7732C : conserver le régime de mesure</text>
<text x="32" y="87" font-size="16" fill="#143426">Moyenne publiée</text><rect x="32" y="101" width="117" height="30" rx="5" fill="#9cac66"/><text x="163" y="123" font-size="18" fill="#143426">156 L/min</text>
<text x="32" y="173" font-size="16" fill="#143426">En charge, brochure</text><rect x="32" y="187" width="459" height="30" rx="5" fill="#19704f"/><text x="505" y="209" font-size="18" fill="#143426">612 L/min</text>
<text x="32" y="253" font-size="14" fill="#35473d">Source : brochure constructeur, page 2. Ce ne sont pas des mesures CompatAir.</text>
</svg>
</div>

## Pourquoi la fiche web donne-t-elle encore un autre chiffre ?

La [fiche web de la même référence](https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321) affiche **10 L/s en charge**, soit **600 L/min**, et **14 L/s à vide**, soit **840 L/min**. Aucun commentaire sur cette page n’explique la différence entre 10 et 10,2 L/s.

Il existe donc deux questions indépendantes : le régime de fonctionnement et la version du document. CompatAir conserve dans la [fiche technique de la CP7732C](/outils-pneumatiques/cle-a-chocs-chicago-pneumatic-cp7732c/) le besoin en charge de 612 L/min documenté par la brochure, avec l’écart signalé. Ce choix conservateur ne prouve pas qu’un exemplaire réel consomme exactement cette quantité.

Les 840 L/min à vide ne doivent pas non plus être effacés : une séquence comprenant du fonctionnement libre peut demander un autre débit. Le verdict calculé sur le point en charge n’est pas une validation de toutes les phases possibles de fonctionnement.

## Un compresseur de 50 L peut-il suivre ?

Le volume de cuve ne répond pas seul à cette question. Le [CAGI distingue stockage et capacité délivrée](https://www.cagi.org/resource-library). Il faut examiner la production d’air et le déroulement de l’usage, puis vérifier la pression au raccord de l’outil.

Prenons le [TC-AC 240/50/10 OF](/compresseurs/einhell-tc-ac-240-50-10-of/). [Einhell publie](https://www.einhell.fr/p/4010393/) **107 L/min à 4 bar et 76 L/min à 7 bar**. Selon l’interpolation linéaire explicitée dans notre [méthodologie](/methodologie/), le point à 6,3 bar vaut :

`107 + (6,3 − 4) / (7 − 4) × (76 − 107) = 83,23 L/min`.

Ce résultat est **calculé**, et non mesuré à 6,3 bar. Il reste très inférieur aux deux valeurs constructeur en charge, 600 et 612 L/min. Ce compresseur ne couvre donc pas ce besoin en continu selon cette comparaison. Une réserve d’air peut permettre une action brève ; elle ne démontre ni combien d’écrous seront desserrés, ni avec quel couple.

La page [quel compresseur pour la CP7732C ?](/quel-compresseur-pour/cle-a-chocs-chicago-pneumatic-cp7732c/) compare les références actuellement documentées. Elle conserve les limites de données plutôt que de transformer « 50 L » en garantie.

## Ce qu’il faut demander avant l’achat

Une demande exploitable au fournisseur tient en un court dossier : référence de la clé, consommation **avec son libellé**, pression dynamique, longueur et diamètre intérieur du flexible, puis référence du compresseur et débit restitué à une pression comparable. Ajoutez la durée d’une séquence et le nombre d’opérateurs susceptibles de travailler ensemble.

Si l’on vous répond uniquement « 150 L/min », demandez si cette valeur est une moyenne, un débit en charge ou une conversion. Le [guide des unités de débit](/guides/convertir-cfm-l-min-nl-min-air-comprime/) permet de vérifier l’unité sans perdre les conditions d’origine.

Pour un matériel déjà installé, consignez le comportement pendant une tâche représentative : pression avant l’action, pression pendant l’effort, récupération et autres outils actifs. Une clé faible avec une cuve apparemment pleine peut relever du [diagnostic de manque de couple](/guides/cle-a-chocs-manque-couple-diagnostic/), pas seulement d’un achat de compresseur plus gros.

## Peut-on dimensionner sur sa propre moyenne ?

Une moyenne mesurée sur votre atelier peut servir à analyser la demande sur une période. Conservez alors la période, les arrêts, les pointes et le protocole de mesure. Le fichier de travail doit garder les deux informations : **volume consommé sur la période** et **débit à fournir pendant les phases actives**.

La question d’achat devient précise : « Cette production, ce stockage et ce réseau alimentent-ils cette séquence ? » Elle ne se résout pas en choisissant le plus petit nombre trouvé dans une fiche.

## Sources et portée

- [Chicago Pneumatic, brochure CP7732C, 2016, page 2](https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf) : moyenne et charge, colonnes L/s.
- [Chicago Pneumatic, fiche 8941077321](https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321) : valeurs web en charge et à vide.
- [Einhell, référence 4010393](https://www.einhell.fr/p/4010393/) : points de débit du compresseur.
- [CAGI, Resource Library](https://www.cagi.org/resource-library) : vocabulaire de capacité et de stockage.
