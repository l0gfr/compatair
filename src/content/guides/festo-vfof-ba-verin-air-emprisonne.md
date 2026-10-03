---
title: "Festo VFOF-BA : un vérin arrêté peut encore contenir de l’air sous pression"
seoTitle: "VFOF-BA : vérin arrêté et air emprisonné"
description: "Le clapet piloté VFOF-BA peut retenir l’air du vérin. Identifiez
  fonction BA, pilotage et purge prévue avant d’interpréter un arrêt
  intermédiaire."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: [ "professionnel" ]
metiers: [ "maintenance-industrielle" ]
readingTime: 4
reviewStatus: "internal"
relatedGuides:
  [
    "distributeur-5-3-centre-ferme-verin-derive",
    "regler-vitesse-verin-pneumatique-echappement",
    "blocage-tige-verin-dsnu-kp-maintien-securite"
  ]
sources:
  - https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF
  - https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf
updatedDate: 2026-10-03
---

**L’arrêt du mouvement ne démontre pas que les chambres du vérin sont dépressurisées.** Sur la combinaison VFOF-BA décrite par Festo, l’absence de signal pilote ferme l’échappement du vérin. L’air retenu appartient donc au fonctionnement prévu de cet organe. [Principe BA, page PDF8](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF#page=8).

La [documentation VFOF/VFFF, page 7](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF#page=7) distingue cette combinaison du simple régleur de débit. Le suffixe et le symbole pneumatique comptent : une référence VFOF dépourvue de la fonction BA ne doit pas recevoir les mêmes propriétés dans un plan de maintenance.

## Une fonction de maintien intermédiaire de courte durée

Festo associe l’ensemble à un réglage de vitesse et à des arrêts intermédiaires temporaires. Le constructeur décrit un clapet piloté et un moyen manuel de relâcher le volume emprisonné. Il ne s’agit donc pas uniquement d’un étrangleur réglant la vitesse. [Description fonctionnelle, page PDF8](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF#page=8).

Ce descriptif ne donne pas à l’installation une fonction de sécurité certifiée, une durée de maintien garantie ou une autorisation de travailler sous une charge. La [lecture d’un blocage de tige](/guides/blocage-tige-verin-dsnu-kp-maintien-securite/) traite une autre architecture. L’une ne doit pas être substituée à l’autre sur la seule observation « le vérin tient ».

<div class="article-infographic article-infographic--compact" role="group" aria-label="L’arrêt peut retenir un volume" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="festo-vfof-ba-verin-air-emprisonne-title festo-vfof-ba-verin-air-emprisonne-desc" xmlns="http://www.w3.org/2000/svg"><title id="festo-vfof-ba-verin-air-emprisonne-title">L’arrêt peut retenir un volume</title><desc id="festo-vfof-ba-verin-air-emprisonne-desc">La combinaison BA ferme l’échappement sans signal pilote et prévoit une fonction manuelle de relâchement ; aucun arrêt sûr universel n’est établi.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">L’arrêt peut retenir un volume</text><rect x="155" y="140" width="235" height="70" rx="8" fill="#244b36"/><path d="M270 140v70m0-40h110" fill="none" stroke="#ffffff" stroke-width="3"/><text x="160" y="128" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Clapet BA</text><path d="M270 210v75" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="165" y="285" width="215" height="92" rx="8" fill="#244b36"/><path d="M260 290v82m0-40h150" fill="none" stroke="#ffffff" stroke-width="3"/><text x="42" y="329" fill="#9ebdad" font-size="21" text-anchor="start" font-weight="400">Vérin</text><path d="M380 175h75" fill="none" stroke="#f5a798" stroke-width="3" stroke-dasharray="5 5"/><path d="M419 155l28 40m-28 0 28-40" fill="none" stroke="#f5a798" stroke-width="3"/><text x="30" y="422" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Sans pilote : échappement fermé</text><text x="30" y="466" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Le volume peut rester pressurisé.</text><text x="30" y="491" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Fonction manuelle selon la notice.</text></svg>
</div>
*La combinaison BA ferme l’échappement sans signal pilote et prévoit une fonction manuelle de relâchement ; aucun arrêt sûr universel n’est établi.*

## Retrouver le chemin de chaque chambre

Avant une intervention, faites rapprocher le schéma de la machine et les références présentes. Identifiez les chambres, le pilotage et les organes susceptibles de fermer leur échappement. La coupure de l’alimentation générale ne renseigne pas à elle seule sur un volume isolé plus loin dans le circuit.

Nous proposons de préparer une fiche avec photo du marquage, symbole et extrait de notice. Le responsable de l’installation doit compléter la procédure d’arrêt et de vérification adaptée à la charge. Cette préparation documentaire ne constitue pas une consigne universelle de purge.

## Des observations qui méritent des mots différents

| Observation | Formulation pour le dossier |
| --- | --- |
| Vérin immobile | Mouvement arrêté, état des chambres à vérifier |
| Pilotage absent | Clapet susceptible de retenir l’échappement selon montage |
| Pression relevée dans une chambre | Énergie pneumatique encore présente au point mesuré |
| Charge tenue | Condition observée, durée et moyen de maintien à identifier |

Un vérin immobilisé peut aussi subir d’autres contraintes mécaniques. Il faut éviter d’attribuer toute tenue au clapet sans relire le montage. Le [guide de dérive avec distributeur 5/3](/guides/distributeur-5-3-centre-ferme-verin-derive/) rappelle que la position d’un tiroir ne qualifie pas à elle seule le comportement d’un actionneur chargé.

## Conserver la distinction lors d’un remplacement

Pour remplacer la pièce, comparez fonction de contrôle de débit, fonction de clapet, pilotage et moyen de relâchement. Un raccord qui se visse au même endroit peut porter un symbole différent. Faites valider cette différence dans le schéma au lieu de conclure sur la seule taille du filetage.

Le [réglage de vitesse à l’échappement](/guides/regler-vitesse-verin-pneumatique-echappement/) restera ensuite une vérification de mouvement. Ici, le résultat attendu du dossier est l’identification des volumes potentiellement retenus et de la procédure de la machine. Aucune pression résiduelle fictive ni durée de maintien mesurée n’est publiée.

La perte d’électricité et la perte d’air doivent également être distinguées sur les préhenseurs. Les modules LEMAX+ NF et NO réagissent différemment à la première ; l’option PG1S relâche la pièce à la coupure pneumatique. Le [guide des variantes LEMAX+](/guides/coval-lemax-no-nf-coupure-air-electrique/) précise ces références sans étendre leur comportement à tous les modules de vide. [COVAL LEMAX+, notice 2023 V05](https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf#page=1).

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Festo VFOF/VFFF, combinaison BA, p.7](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF#page=7)
