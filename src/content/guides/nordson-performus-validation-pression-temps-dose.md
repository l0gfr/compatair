---
title: "Nordson Performus X : valider pression et temporisation sans certifier la dose"
seoTitle: "Performus X : validation pression et temporisation"
description: "Le protocole Nordson contrôle la pression et un signal de fin de cycle. Utiliser les tolérances du bon modèle et garder un contrôle distinct du dépôt réel."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "audit-reseau-air-comprime-protocole-mesures"
  - "mesurer-pression-dynamique-pistolet-peinture"
  - "indicateurs-maintenance-air-comprime"
sources:
  - "https://nc-p-001.sitecorecontenthub.cloud/api/public/content/60f492a504774d7fa5ed6a3719e54ffa?v=2a4c4ac7"
---

Une pression et une durée conformes ne suffisent pas à certifier la quantité de colle déposée. Le protocole Nordson de validation Performus X porte sur **deux sorties du doseur : pression et temporisation**. Pour le temps, il mesure la largeur du signal End-of-Cycle Feedback. [Instructions de validation, page 1](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/60f492a504774d7fa5ed6a3719e54ffa?v=2a4c4ac7#page=1)

Cette frontière permet d’organiser deux contrôles utiles : conformité instrumentale selon le protocole fabricant, puis conformité du dépôt selon le procédé. Confondre les deux laisse la matière et l’embout hors de la réception.

## Appliquer les points du modèle exact

| Modèle | Points de vérification publiés | Tolérance de pression publiée |
| --- | --- | --- |
| X100 | 20 et 80 psi, présentés comme 1,4 et 5,5 bar | ±2 psi, présenté comme ±0,14 bar |
| X15 | 3 et 12 psi, présentés comme 0,2 et 0,83 bar | ±0,3 psi, présenté comme ±0,02 bar |

Les équivalences en bar sont les arrondis du document, pas de nouvelles conversions de CompatAir. Le protocole demande un étalon au moins **quatre fois plus précis** au point concerné. Un manomètre quelconque au poste ne démontre pas que cette exigence est satisfaite.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="nordson-performus-validation-pression-temps-dose-title nordson-performus-validation-pression-temps-dose-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="nordson-performus-validation-pression-temps-dose-title">Deux validations distinctes</title><desc id="nordson-performus-validation-pression-temps-dose-desc">Le protocole instrumental valide pression et temporisation. La conformité du dépôt exige un contrôle du procédé distinct.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Deux validations distinctes</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Doseur</text><text x="41" y="151" font-size="21" fill="#eef2e9">Pression aux points</text><text x="41" y="193" font-size="21" fill="#eef2e9">Signal de temporisation</text><text x="41" y="235" font-size="21" fill="#eef2e9">Protocole Nordson</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Dépôt</text><text x="285" y="151" font-size="21" fill="#eef2e9">Matière et embout</text><text x="285" y="193" font-size="21" fill="#eef2e9">Masse ou géométrie</text><text x="285" y="235" font-size="21" fill="#eef2e9">Critère du procédé</text></svg>
<figcaption>Le protocole instrumental valide pression et temporisation. La conformité du dépôt exige un contrôle du procédé distinct.</figcaption>
</figure>


## La temporisation a un signal et une tolérance définis

Nordson spécifie **±0,00005 seconde pour un réglage de 10 secondes**. La grandeur testée est le signal de retour défini dans le protocole, pas le délai jusqu’à la dernière goutte observée. Le branchement d’essai et l’oscilloscope relèvent d’une personne qualifiée suivant les instructions complètes ; ce guide ne fournit pas de câblage alternatif.

Conservez modèle, numéro de série, instruments de référence, date et résultats bruts. Faites indiquer l’incertitude de l’étalon utilisé et le point réellement testé. Une case « étalonnage OK » sans ces éléments ne permet pas de relire la comparaison.

## Un défaut n’autorise pas un recalibrage sur site

Le fabricant précise que les transducteurs et le temporisateur ne peuvent pas être calibrés sur le terrain. Un composant hors tolérance doit retourner chez Nordson EFD pour calibration usine ou remplacement. Corriger un affichage dans une supervision ne remet pas le composant dans sa tolérance.

Le [second déclenchement](/guides/nordson-performus-cycle-interrompu-second-trigger/) peut interrompre un cycle, et le [vide anti-goutte](/guides/nordson-performus-vide-goutte-retour-produit/) peut modifier le comportement du produit. Ce sont deux diagnostics de procédé à garder distincts de la métrologie.

La réception du dépôt garde ensuite le matériau, la température, la seringue, le piston et l’embout identifiés, avec le critère choisi par votre procédé. Ce contrôle de production est une proposition de méthode distincte du protocole instrumental Nordson.

Le [protocole d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à tracer les frontières de mesure. Le [dossier de pression au point d’usage](/guides/mesurer-pression-dynamique-pistolet-peinture/) concerne une autre mesure, et les [indicateurs de maintenance](/guides/indicateurs-maintenance-air-comprime/) permettent de conserver les états indisponibles ou hors tolérance. Consignez les résultats réellement obtenus et les instruments utilisés dans le compte rendu de validation.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
