---
title: "Mesurer les temps en charge et à vide d’un compresseur avant de régler la commande"
seoTitle: "Mesurer charge et marche à vide compresseur"
description: "Protocole de relevé des états charge, marche à vide et arrêt pour établir un profil avant toute modification de pression ou de temporisation."
pubDate: 2026-07-15
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 13
sources:
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
  - https://www.cagi.org/performance-verification
---

Un compresseur qui tourne n’est pas nécessairement en train de produire de l’air utile. Avant de modifier une temporisation ou une bande de pression, il faut mesurer le temps passé en charge, à vide et à l’arrêt, puis rapprocher ces états de la demande et de la puissance appelée.

## Ce que recouvre la marche à vide

Le guide du U.S. Department of Energy [Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) décrit la commande charge/décharge des compresseurs rotatifs à vis. Il indique qu’un compresseur déchargé peut consommer **15 à 35 % de sa puissance à pleine charge sans fournir de travail utile**.

Cette plage appartient au document et à la technologie décrite. Elle ne doit pas être appliquée automatiquement à toute machine. La puissance à débit nul publiée sur une fiche CAGI ou mesurée sur l’installation est préférable lorsqu’elle existe.

## Définir les états à observer

Avant la campagne, utilisez les libellés et signaux de la commande du fabricant : charge, décharge, arrêt, veille ou variation de vitesse. Ne déduisez pas un état du seul bruit de la machine.

Pour chaque compresseur, consignez :

- horodatage d’entrée et de sortie de chaque état ;
- pression de refoulement et pression réseau ;
- puissance électrique mesurée par un dispositif approprié ;
- débit, s’il est instrumenté ;
- autres compresseurs actifs ;
- événement de production associé.

Toute intervention sur un équipement électrique ou sous pression relève de personnes compétentes et des procédures de sécurité du site. Le présent guide décrit le dossier de mesure, pas une procédure de raccordement électrique.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 355" role="img" aria-labelledby="load-unload-title load-unload-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="load-unload-title">Chronologie de charge, marche à vide et arrêt</title><desc id="load-unload-desc">Une période de mesure distingue les plages en charge, à vide et arrêtées, puis rapproche chaque plage de la pression, du débit et de la puissance.</desc>
  <rect width="760" height="355" rx="22" fill="#eef2e9"/><text x="38" y="46" fill="#143426" font-size="22" font-weight="700">Chronométrer les états, puis expliquer leur cause</text><text x="38" y="90" fill="#56685e" font-size="13">07:00</text><text x="686" y="90" text-anchor="end" fill="#56685e" font-size="13">08:00</text>
  <rect x="38" y="112" width="172" height="82" rx="12" fill="#19704f"/><text x="58" y="148" fill="white" font-size="18" font-weight="700">EN CHARGE</text><text x="58" y="174" fill="#d8e6de" font-size="12">air produit</text><rect x="210" y="112" width="104" height="82" fill="#d9a66f"/><text x="230" y="148" fill="#143426" font-size="16" font-weight="700">À VIDE</text><text x="230" y="174" fill="#6c4e32" font-size="12">débit nul</text><rect x="314" y="112" width="83" height="82" fill="#d5ddd5"/><text x="331" y="148" fill="#143426" font-size="16" font-weight="700">ARRÊT</text><rect x="397" y="112" width="226" height="82" fill="#19704f"/><text x="417" y="148" fill="white" font-size="18" font-weight="700">EN CHARGE</text><rect x="623" y="112" width="99" height="82" rx="12" fill="#d9a66f"/><text x="643" y="148" fill="#143426" font-size="16" font-weight="700">À VIDE</text>
  <path d="M38 250h684" stroke="#7c9588" stroke-width="2"/><text x="38" y="285" fill="#143426" font-size="14" font-weight="700">À relier : pression · débit · puissance · événement de production</text><text x="38" y="320" fill="#56685e" font-size="13">Une heure illustrative ne remplace pas une période représentative du site.</text>
</svg>
</div>

## Choisir une fenêtre représentative

Une heure calme peut surestimer la part à vide ; une heure de pointe peut la masquer. Couvrez les démarrages, la production stabilisée, les pauses, les changements d’équipe et l’arrêt. Si le site varie selon les jours, plusieurs fenêtres sont nécessaires.

La durée de campagne est une décision de site. Elle doit permettre de capturer les cycles qui influencent la commande, sans présenter une journée isolée comme une année type.

## Calculer des parts de temps sans les confondre avec l’énergie

Additionnez les durées par état, puis divisez par la durée observée. Une part de temps à vide de 30 % ne signifie pas 30 % de l’énergie : la puissance diffère selon l’état.

Pour l’énergie, intégrez la puissance sur le temps ou utilisez une mesure d’énergie. La fiche du [programme CAGI](https://www.cagi.org/performance-verification) recommande d’étudier les données de performance vérifiées ; ses fiches peuvent inclure la puissance totale à débit nul et la puissance à capacité nominale.

## Interpréter avant de corriger

Une marche à vide prolongée peut provenir d’une temporisation, d’un stockage, d’une demande instable, d’une séquence multi-compresseurs ou d’une contrainte de redémarrage. Le relevé localise la période ; il ne choisit pas automatiquement le nouveau réglage.

Si plusieurs machines partagent le réseau, poursuivez avec le protocole de [séquencement des compresseurs de base et d’appoint](/guides/sequencer-plusieurs-compresseurs/). Si le phénomène suit un appel bref, examinez séparément le [stockage primaire et secondaire](/guides/stockage-primaire-secondaire-air-comprime/).

Avant toute modification, rapprochez le profil de la notice de commande, des limites du fabricant et du comportement des autres machines. Après correction, répétez la même fenêtre et comparez pression, disponibilité, énergie et nombre de démarrages. Un gain énergétique qui dégrade la pression du procédé n’est pas une recette achevée.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
- [CAGI, Performance Verification Program](https://www.cagi.org/performance-verification)
