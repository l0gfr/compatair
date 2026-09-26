---
title: "Vacuomètre et vacuostat : comprendre les bar relatifs, absolus et le pourcentage de vide"
seoTitle: "Vacuostat : −0,6 bar, pression absolue et % de vide"
description: "Un affichage à −0,6 bar ne signifie pas une pression absolue négative. Comparez les références du vide avec un exemple calculé et préparez le relevé du capteur."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["bar-psi-pression-absolue-relative", "ejecteur-vide-schmalz-sbpl-consommation", "ventouse-piece-poreuse-debit-vide"]
sources: ["https://www.schmalz.com/en-gb/support/know-how/glossary/vacuum", "https://www.schmalz.com/en-tr/support/know-how/vacuum-knowledge/basic-knowledge/"]
---

**Un affichage à −0,6 bar correspond à une pression relative si le zéro de l’instrument est l’atmosphère.** Il ne représente pas une pression absolue négative. Pour comparer cet affichage à une fiche technique ou à un seuil de commande, il faut connaître l’unité et la référence utilisées.

Le raisonnement est utile sur un vacuomètre comme lors de la lecture des paramètres d’un vacuostat. Il ne permet pas, à lui seul, de définir un seuil garantissant le maintien d’une pièce.

## Identifier le zéro avant de lire le nombre

[Schmalz](https://www.schmalz.com/en-gb/support/know-how/glossary/vacuum) distingue la pression relative, référencée à l’ambiance, et la pression absolue, référencée au vide absolu. Ses [principes de technique du vide](https://www.schmalz.com/en-tr/support/know-how/vacuum-knowledge/basic-knowledge/) rappellent aussi l’influence des conditions atmosphériques. La valeur locale ne doit donc pas être supposée identique pour tous les sites.

Notre première vérification consiste à recopier la désignation du paramètre dans la notice du capteur. Le signe, le symbole affiché et le format de sortie doivent être conservés. Un nombre seul dans un automate ou sur une capture d’écran peut laisser la convention indéterminée.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="vacuometre-vacuostat-bar-absolu-pourcentage-vide-title vacuometre-vacuostat-bar-absolu-pourcentage-vide-desc" xmlns="http://www.w3.org/2000/svg">
<title id="vacuometre-vacuostat-bar-absolu-pourcentage-vide-title">Situer le zéro de pression</title><desc id="vacuometre-vacuostat-bar-absolu-pourcentage-vide-desc">Exemple avec une atmosphère locale supposée à 1,00 bar absolu. Le point à 0,40 bar absolu est à −0,60 bar relatif.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="32" y="44" fill="white" font-size="23">Pression absolue · bar</text>
<path d="M52 144H466" stroke="#8abfa3" stroke-width="4"/>
<path d="M52 132v24M218 126v36M466 132v24" stroke="white" stroke-width="3"/>
<circle cx="218" cy="144" r="9" fill="#d3eb56"/>
<text x="52" y="115" fill="white" font-size="22" text-anchor="middle">0</text><text x="218" y="115" fill="#d3eb56" font-size="22" text-anchor="middle">0,40</text><text x="466" y="115" fill="white" font-size="22" text-anchor="middle">1,00</text>
<text x="32" y="199" fill="#8abfa3" font-size="20">Vide absolu</text><text x="330" y="199" fill="#8abfa3" font-size="20">Atmosphère</text>
<path d="M466 230H218m10-7-10 7 10 7" fill="none" stroke="#d3eb56" stroke-width="3"/>
<text x="252" y="269" fill="#d3eb56" font-size="23">−0,60 bar relatif</text>
<text x="32" y="332" fill="white" font-size="22">Baisse rapportée à l’atmosphère :</text><text x="32" y="367" fill="#d3eb56" font-size="24">0,60 / 1,00 = 60 %</text>
</svg>
<figcaption>Situer le zéro de pression. Exemple avec une atmosphère locale supposée à 1,00 bar absolu. Le point à 0,40 bar absolu est à −0,60 bar relatif.</figcaption>
</figure>

## Exemple de conversion, avec hypothèse visible

Supposons uniquement pour le calcul une atmosphère locale de **1,00 bar absolu** et une pression relative de **−0,60 bar**. La relation entre les références donne :

**Pression absolue = pression atmosphérique + pression relative = 1,00 − 0,60 = 0,40 bar absolu.**

Si le pourcentage de vide est défini par la baisse de pression rapportée à cette atmosphère, il vaut **(1,00 − 0,40) / 1,00 × 100 = 60 %**. La définition du pourcentage doit elle aussi être vérifiée dans la documentation de l’instrument.

Ce résultat vaut pour l’hypothèse annoncée. Avec une autre pression atmosphérique, l’équivalence absolue change. Ne réutilisez pas le chiffre de 1,00 bar comme une mesure réalisée dans votre atelier.

## Ne pas mélanger pression et capacité d’aspiration

Une valeur de pression ne contient aucune information de débit à elle seule. Pour un projet de préhension, le relevé doit donc nommer ce qui a été mesuré : niveau de vide à un point, temps d’établissement, débit selon la méthode retenue ou maintien observé dans un scénario donné.

Le [guide des éjecteurs de vide](/guides/ejecteur-vide-schmalz-sbpl-consommation/) distingue les grandeurs publiées pour leur alimentation et leur aspiration. Celui des [pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) traite les questions particulières d’étanchéité et de débit à examiner.

## Lire un seuil sans modifier la machine

| Paramètre à relever | Question documentaire |
| --- | --- |
| Référence et unité | bar relatifs, absolus, kPa ou convention différente ? |
| Point de mesure | Où le capteur est-il raccordé ? |
| Seuil et retour | Quelles valeurs et quelle logique sont configurées ? |
| Filtrage temporel | Quelle temporisation est effectivement utilisée ? |
| État transmis | À quelle condition la sortie change-t-elle ? |
| Critère machine | Quelle décision cet état commande-t-il ? |

Cette grille prépare une lecture avec les personnes responsables de la machine. Elle ne constitue pas une procédure de réglage. Un seuil déjà programmé ne prouve pas son adéquation à une nouvelle pièce ou à un nouveau cycle.

## Ce que doit conserver le rapport de contrôle

Nous proposons de noter l’instrument, sa configuration, la pression atmosphérique utilisée si une conversion l’exige, et les conditions du cycle. Conservez aussi le résultat brut avant toute conversion. Cela permet de retrouver un éventuel écart de convention sans perdre la donnée d’origine.

Une indication cohérente du capteur est une preuve sur une mesure. La validation du maintien, des mouvements et des réactions à une défaillance appartient au dossier complet de la machine. Le [guide des pressions absolue et relative](/guides/bar-psi-pression-absolue-relative/) complète les conversions lorsque plusieurs conventions apparaissent dans les documents.

Le glossaire précise le terme [vide relatif](/glossaire/#vide-relatif).

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Schmalz, définition du vide et références de pression](https://www.schmalz.com/en-gb/support/know-how/glossary/vacuum)
- [Schmalz, bases de la technique du vide](https://www.schmalz.com/en-tr/support/know-how/vacuum-knowledge/basic-knowledge/)
