---
title: "Audit d’un réseau d’air comprimé : protocole de mesure et plan d’action"
seoTitle: "Audit réseau d’air comprimé : méthode et mesures"
description: "Préparer un audit d’air comprimé de l’alimentation aux usages, établir une ligne de base mesurable et transformer les écarts en actions vérifiables."
pubDate: 2026-07-20
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 16
featured: true
series: audit-suivi-maintenance-air-comprime
relatedGuides:
  - indicateurs-maintenance-air-comprime
  - fiche-intervention-air-comprime
  - diagnostiquer-chute-pression-air-comprime
  - detecter-mesurer-fuites-air-comprime
  - mesurer-temps-charge-vide-compresseur
sources:
  - https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf
  - https://www.iso.org/fr/standard/46580.html
  - https://www.cagi.org/assets/documents/pdfs/handbook/Chapter_4_handbook_Final2021.pdf
---

Un audit utile ne commence pas par une liste de compresseurs à remplacer. Il définit le périmètre du système, enregistre les conditions de production, mesure simultanément l’offre et la demande, puis établit une ligne de base contre laquelle chaque modification pourra être vérifiée.

L’[ISO 11011:2013](https://www.iso.org/fr/standard/46580.html) structure l’évaluation autour de trois sous-systèmes : alimentation, transmission et demande. Le [Sourcebook du Department of Energy américain](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf) relie la ligne de base aux mesures de puissance, pression et débit. Ces références donnent un cadre. Elles ne fournissent ni les valeurs de votre installation, ni un seuil universel de rentabilité.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 380" role="img" aria-labelledby="audit-title audit-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="audit-title">Architecture d’un audit de réseau d’air comprimé</title><desc id="audit-desc">L’audit relie alimentation, transmission et demande à une ligne de base, des écarts et un plan d’action vérifiable.</desc>
  <rect width="760" height="380" rx="24" fill="#10281e"/><text x="38" y="48" fill="#d3eb56" font-size="15" font-weight="700">LIRE LE SYSTÈME AVANT DE CHOISIR L’ACTION</text>
  <g font-family="Manrope, sans-serif"><rect x="38" y="82" width="202" height="112" rx="16" fill="#28533f"/><text x="58" y="116" fill="white" font-size="18" font-weight="700">01 · Alimentation</text><text x="58" y="148" fill="#c8d7cf" font-size="13">Compresseurs, commande</text><text x="58" y="172" fill="#c8d7cf" font-size="13">traitement et stockage</text>
  <rect x="279" y="82" width="202" height="112" rx="16" fill="#28533f"/><text x="299" y="116" fill="white" font-size="18" font-weight="700">02 · Transmission</text><text x="299" y="148" fill="#c8d7cf" font-size="13">Collecteurs, conduites</text><text x="299" y="172" fill="#c8d7cf" font-size="13">vannes, filtres, flexibles</text>
  <rect x="520" y="82" width="202" height="112" rx="16" fill="#28533f"/><text x="540" y="116" fill="white" font-size="18" font-weight="700">03 · Demande</text><text x="540" y="148" fill="#c8d7cf" font-size="13">Postes, outils, cycles</text><text x="540" y="172" fill="#c8d7cf" font-size="13">fuites et usages improductifs</text></g>
  <path d="M139 219v34m241-34v34m241-34v34M139 253h482" stroke="#e39a5e" stroke-width="3" fill="none"/><rect x="160" y="253" width="440" height="76" rx="16" fill="#d3eb56"/><text x="380" y="284" text-anchor="middle" fill="#10281e" font-size="18" font-weight="700">Ligne de base comparable</text><text x="380" y="309" text-anchor="middle" fill="#28533f" font-size="13">mesures + scénario + instruments + date</text><text x="380" y="359" text-anchor="middle" fill="#c8d7cf" font-size="13">Un écart sans conditions de mesure conservées reste difficile à reproduire.</text>
</svg>
</div>

## Réponse directe : ce que l’audit doit produire

À sa clôture, le dossier doit permettre de répondre à cinq questions distinctes :

1. quelles limites physiques et documentaires ont été observées ;
2. dans quelles conditions chaque valeur a été mesurée ;
3. quel écart sépare l’état observé de l’état requis ;
4. quelle action est proposée, avec quelle hypothèse et quelle preuve ;
5. quelle contre-mesure permettra de confirmer ou d’infirmer l’effet de l’action.

Une présentation commerciale, une visite visuelle et une campagne instrumentée ne produisent pas le même niveau de preuve. Le Sourcebook distingue l’évaluation sommaire, l’évaluation système et l’audit plus approfondi avec enregistrement des données. Le rapport doit annoncer le niveau réellement réalisé.

## Définir le périmètre avant de poser un capteur

L’ISO 11011 couvre le système entier, depuis l’énergie d’entrée jusqu’au travail obtenu. Pour une installation donnée, commencez par dessiner sa frontière :

- machines incluses et machines volontairement exclues ;
- traitement d’air, cuves et organes de commande ;
- collecteurs, dérivations et points de mesure ;
- postes consommateurs et scénarios de production ;
- périodes de fonctionnement observées ;
- données électriques, pneumatiques et documentaires disponibles.

Ce schéma évite deux erreurs courantes. La première consiste à mesurer la pression en salle des compresseurs sans regarder le point d’usage. La seconde consiste à attribuer au compresseur une demande créée par une restriction, une purge ou une fuite située en aval.

Le [profil de pression](/guides/diagnostiquer-chute-pression-air-comprime/) complète le schéma en suivant la pression sous débit à travers les composants. Le [guide du réseau d’atelier](/guides/installer-reseau-air-comprime-atelier/) aide à inventorier longueurs, diamètres, boucles, dérivations et traitement.

## Choisir des scénarios reproductibles

Une moyenne de journée peut masquer le démarrage d’une ligne, une pause, une pointe simultanée ou une longue marche à vide. Le plan de mesure décrit donc les scénarios qui comptent réellement : démarrage, production stabilisée, pointe, changement d’équipe, arrêt et période sans usage productif.

Pour chacun, consignez :

- l’heure de début et de fin ;
- les postes actifs ;
- les produits ou séries fabriqués lorsque cette information est pertinente ;
- les réglages de pression et de commande ;
- les purges, sécheurs et compresseurs actifs ;
- tout événement inhabituel susceptible de modifier la demande.

La durée utile dépend du cycle réel du site. Un exemple de trente minutes dans un document ne devient pas une durée universelle. La fenêtre doit être assez longue pour capturer le phénomène étudié et assez précisément décrite pour être rejouée.

## Construire le plan de mesure

Avant d’exploiter les chiffres, vérifiez l’instrumentation : le [guide du débitmètre d’air comprimé](/guides/debitmetre-air-comprime-diametre-conditions-reference/) détaille l’effet du diamètre programmé, des longueurs droites et de la référence de volume.

Le Sourcebook relie la ligne de base à la puissance, à la pression et au débit. Selon le périmètre, le plan peut aussi inclure température, point de rosée, états de commande et comptages de production. Chaque canal répond à une question différente.

| Canal | Question traitée | Information à conserver |
| --- | --- | --- |
| Pression | Où et quand la pression devient-elle insuffisante ? | Point, horodatage, pression relative ou absolue, état de la demande |
| Débit | Quelle quantité d’air traverse la frontière mesurée ? | Emplacement, sens, conditions de référence et plage de l’instrument |
| Puissance ou énergie | Quelle entrée électrique accompagne le service rendu ? | Instrument, période, machines incluses et méthode d’intégration |
| État machine | La machine produit-elle, tourne-t-elle à vide ou reste-t-elle arrêtée ? | Signal de commande, horodatage et définition constructeur de l’état |
| Qualité d’air | La qualité requise est-elle tenue au point utile ? | Paramètre, point de prélèvement, méthode et exigence du procédé |

Un débit normalisé n’est interprétable que si les conditions de référence de l’instrument sont connues. Une pression relevée au repos ne localise pas une restriction dynamique. Une part de temps à vide n’est pas une part d’énergie. Ces distinctions doivent apparaître dans le rapport, pas rester dans les notes du technicien.

## Établir la ligne de base

La [ligne de base](/glossaire/#ligne-base) est un état documenté, pas une valeur unique. Elle associe mesures, scénario, topologie, réglages, instruments et date. Le Sourcebook recommande de la conserver pour comparer les changements futurs.

Une ligne de base minimale peut réunir :

- pression en sortie de production et au point d’usage critique ;
- débit principal ou débit par secteur lorsque l’instrumentation le permet ;
- puissance ou énergie sur la même période ;
- temps en charge, à vide et à l’arrêt ;
- niveau de fuite mesuré dans un état défini ;
- disponibilité et qualité d’air au procédé ;
- volume ou cadence produit pendant la fenêtre, si cette donnée est fiable.

Le [parcours de mise en service](/mise-en-service/) permet de créer un point zéro local à partir d’une configuration CompatAir. Le [suivi d’exploitation](/suivi-exploitation/) rejoue ensuite les contrôles avec le même Passeport. Ces outils organisent les relevés ; ils ne remplacent ni les instruments ni les procédures du site.

## Séparer mesure, calcul, hypothèse et décision

Une gouvernance claire évite qu’une estimation devienne progressivement un fait. Utilisez quatre statuts :

- **mesuré** : valeur brute issue d’un instrument identifié ;
- **publié** : valeur issue d’une source nommée, datée et reliée à la référence ;
- **calculé** : résultat reproductible avec formule et entrées conservées ;
- **hypothèse** : valeur ou relation à confirmer.

Par exemple, une chute de pression mesurée autour d’un filtre est un fait. L’encrassement du filtre reste une hypothèse tant qu’un contrôle adapté ne l’a pas établi. Le gain attendu après remplacement est un calcul ou une hypothèse, selon les données disponibles. Le gain réel n’existe qu’après contre-mesure.

## Transformer les écarts en plan d’action

Chaque action proposée doit contenir un problème observé, son périmètre, la preuve disponible, les inconnues, un responsable et une mesure de clôture. Le classement peut considérer la sécurité, la continuité de service, la qualité du procédé, la pression disponible et l’énergie. Il ne doit pas inventer une économie lorsque le débit, le rendement, les heures ou le prix de l’énergie manquent.

Un plan d’action défendable distingue :

- correction immédiate d’un écart établi ;
- investigation nécessaire avant décision ;
- amélioration possible à chiffrer ;
- donnée manquante bloquant la conclusion ;
- modification non retenue avec motif conservé.

Le [diagnostic d’intervention](/diagnostic-intervention/) part d’un contrôle en dérive, conserve l’action et exige une contre-mesure. La [fiche d’intervention air comprimé](/guides/fiche-intervention-air-comprime/) précise les champs nécessaires pour fermer cette boucle.

## Rejouer la mesure après modification

Une action ne peut être comparée à la ligne de base que si le scénario, le périmètre et les instruments restent suffisamment proches. Si la production, le réseau ou la météo ont changé, le rapport le signale au lieu de présenter l’écart comme un effet certain.

Trois issues sont possibles : l’écart est réduit dans les conditions comparables, l’écart demeure, ou la comparaison est impossible. La troisième issue doit rester `insufficient_data`. Elle appelle une nouvelle mesure, pas un verdict positif.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance, version 3](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf)
- [ISO 11011:2013, Air comprimé, efficacité énergétique, évaluation](https://www.iso.org/fr/standard/46580.html)
- [CAGI, Compressed Air System Design, chapitre 4 du Compressed Air and Gas Handbook](https://www.cagi.org/assets/documents/pdfs/handbook/Chapter_4_handbook_Final2021.pdf)
