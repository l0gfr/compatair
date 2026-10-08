---
title: "CS DS500 : sauvegarder les voies avant de mettre à jour le logiciel"
seoTitle: "CS DS500 : sauvegarde et mise à jour des voies"
description: "Le DS500 possède des composants logiciel principal et canaux distincts. Exporter les réglages, vérifier le fichier applicable et réceptionner les voies après mise à jour."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "cs-va500-analogique-auto-scaling-automate"
  - "cs-va520-impulsions-50hz-compteur-debit"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_DS500_V2_EN.pdf"
---

Une mise à jour du DS500 ne se résume pas au numéro de version visible à l’accueil. La [notice DS500, pages 64–65](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_DS500_V2_EN.pdf#page=64) distingue le logiciel principal et les composants des canaux. Elle demande de sauvegarder les réglages système avant l’opération.

La décision de maintenance doit donc conserver deux éléments : le fichier approprié à l’appareil et une configuration de référence des voies. Une interface qui redémarre ne démontre pas, à elle seule, que l’enregistrement et les alarmes du poste restent conformes.

## Exporter autre chose qu’une capture de l’écran

La page 64 décrit Export System Settings vers USB ou la carte SD interne. L’export comprend les réglages des capteurs, de l’enregistrement, des alarmes, des graphiques ainsi que les définitions de valeurs et de noms. Une photographie d’une seule voie n’en conserve pas le même périmètre.

La méthode de traçabilité proposée par CompatAir nomme le fichier avec l’identité du poste et sa date. Conservez une copie vérifiée sans écraser le seul export antérieur. La notice propose nouveau fichier ou remplacement d’un fichier existant : ce choix doit préserver la configuration nécessaire au retour en service.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="cs-ds500-mise-a-jour-sauvegarde-canaux-title cs-ds500-mise-a-jour-sauvegarde-canaux-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="cs-ds500-mise-a-jour-sauvegarde-canaux-title">Une mise à jour à réceptionner</title><desc id="cs-ds500-mise-a-jour-sauvegarde-canaux-desc">Parcours de la notice DS500, complété par une réception proposée par CompatAir. Les versions des captures de manuel ne sont pas des versions conseillées.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">Une mise à jour à réceptionner</text><circle cx="46" cy="86" r="18" fill="#d3eb56"/><text x="46" y="93" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">1</text><text x="80" y="83" font-size="22" fill="#eef2e9" font-weight="700">Avant : export vérifié</text><text x="80" y="111" font-size="19" fill="#8abfa3">Voies, alarmes et enregistrement</text><path d="M46 108V147" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="168" r="18" fill="#d3eb56"/><text x="46" y="175" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">2</text><text x="80" y="165" font-size="22" fill="#eef2e9" font-weight="700">Pendant : composants applicables</text><text x="80" y="193" font-size="19" fill="#8abfa3">Principal et canaux distincts</text><path d="M46 190V229" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="250" r="18" fill="#d3eb56"/><text x="46" y="257" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">3</text><text x="80" y="247" font-size="22" fill="#eef2e9" font-weight="700">Après : redémarrage et lecture</text><text x="80" y="275" font-size="19" fill="#8abfa3">Réception de la configuration</text></svg>
<figcaption>Parcours de la notice DS500, complété par une réception proposée par CompatAir. Les versions des captures de manuel ne sont pas des versions conseillées.</figcaption>
</figure>


## Vérifier l’appareil et les composants disponibles

Le menu System Update recherche les mises à jour disponibles sur le support USB et distingue les composants signalés comme nouveaux. Les numéros affichés dans les captures du manuel sont des exemples ; ils ne constituent pas des versions à installer aujourd’hui.

Le fichier actuel doit provenir du fabricant et correspondre à la référence et à la version matérielle de votre appareil. L’opération s’organise dans une fenêtre de maintenance : les mesures indisponibles pendant l’intervention doivent rester identifiées comme indisponibles.

| Avant l’opération | À la réception |
| --- | --- |
| Appareil et versions relevés | Versions effectivement présentes |
| Export de configuration conservé | Réglages des voies relus |
| Fichier applicable confirmé | Canaux attendus disponibles |
| Enregistrement et alarmes identifiés | Fonctionnement contrôlé au poste |

## Suivre le redémarrage demandé, puis contrôler les voies

La page 65 impose le redémarrage si le bouton Reboot System apparaît après la mise à jour. Suivez la procédure applicable à la version identifiée et faites confirmer une éventuelle restauration par CS Instruments.

Sur une voie de consommation, le [facteur d’impulsion et le total initial](/guides/cs-ds500-compteur-impulsion-unite-total-initial/) font partie du contrat à relire après intervention.

Après reprise autorisée, vérifiez les grandeurs, unités, échelles, noms de voies, états d’erreur et fonctions d’enregistrement nécessaires. Cette liste est une proposition de réception CompatAir, pas une preuve qu’une mise à jour conserve automatiquement tous les paramètres.

Le [guide VA500 sur les échelles analogiques](/guides/cs-va500-analogique-auto-scaling-automate/) et celui des [impulsions VA520](/guides/cs-va520-impulsions-50hz-compteur-debit/) couvrent deux contrats de mesure à conserver. Le [journal de maintenance](/guides/maintenance-preventive-reseau-air-comprime/) doit relier l’intervention aux exports et aux versions.

La notice capturée porte V2.02 en couverture et V2.01 sur ces pages. Si la procédure de votre version diffère, faites confirmer l’opération par CS Instruments avant de l’exécuter. Conservez les numéros de version avant et après l’intervention dans le journal du poste.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
