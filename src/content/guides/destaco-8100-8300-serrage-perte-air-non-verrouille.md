---
title: "DESTACO 8100/8300 : le serrage peut-il rester assuré sans air ?"
seoTitle: "DESTACO 8100/8300 : serrage et perte d’air"
description: "Les brides pivotantes 8100/8300 sont décrites comme non verrouillantes. Distinguer leur force sous pression du maintien requis après perte d’alimentation."
pubDate: "2026-10-08"
category: "Choisir"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "haas-etau-programmable-coupure-courant-serrage"
  - "pince-pneumatique-force-doigt-longueur-prehension"
  - "distributeur-5-3-centre-ferme-verin-derive"
sources:
  - "https://www.destaco.com/clamping/pneumatic-clamping/pneumatic-swing-clamps/pneumatic-swing-clamps-8100-8300"
---

Une bride pivotante n’est pas nécessairement un maintien mécanique verrouillé. Sur sa page des **8100/8300**, DESTACO décrit ces modèles comme **non-locking** et relie la force de serrage à l’alésage et à la pression d’entrée. [Description fabricant 8100/8300](https://www.destaco.com/clamping/pneumatic-clamping/pneumatic-swing-clamps/pneumatic-swing-clamps-8100-8300)

La décision pour un montage qui doit garder sa pièce lors d’une perte d’air ne peut donc pas reposer sur la seule force annoncée sous pression. Il faut faire définir la fonction de maintien requise et vérifier comment l’ensemble la réalise.

## Écrire le scénario qui manque à la fiche de force

Séparez l’état de travail sous alimentation, la coupure électrique, la perte de l’air et la remise en énergie. Le relevé de conception proposé par CompatAir nomme aussi la pièce, son orientation, les efforts extérieurs et la conséquence d’un desserrage.

Le [dossier de l’étau programmable Haas](/guides/haas-etau-programmable-coupure-courant-serrage/) traite un équipement dont la description est différente. Son comportement ne se transpose pas à une bride DESTACO. Une marque ou la présence d’un raccord pneumatique ne définit pas le mécanisme de maintien.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="destaco-8100-8300-serrage-perte-air-non-verrouille-title destaco-8100-8300-serrage-perte-air-non-verrouille-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="destaco-8100-8300-serrage-perte-air-non-verrouille-title">Deux exigences à qualifier</title><desc id="destaco-8100-8300-serrage-perte-air-non-verrouille-desc">DESTACO décrit les 8100/8300 comme non verrouillantes. Le maintien après perte d’air est une exigence distincte à traiter dans le montage.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Deux exigences à qualifier</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Service normal</text><text x="41" y="151" font-size="21" fill="#eef2e9">Pression présente</text><text x="41" y="193" font-size="21" fill="#eef2e9">Force documentée</text><text x="41" y="235" font-size="21" fill="#eef2e9">Montage à vérifier</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Perte d’air</text><text x="285" y="151" font-size="21" fill="#eef2e9">Fonction de maintien</text><text x="285" y="193" font-size="21" fill="#eef2e9">Bride non verrouillante</text><text x="285" y="235" font-size="21" fill="#eef2e9">Ensemble à concevoir</text></svg>
<figcaption>DESTACO décrit les 8100/8300 comme non verrouillantes. Le maintien après perte d’air est une exigence distincte à traiter dans le montage.</figcaption>
</figure>


## Un distributeur fermé ne constitue pas une preuve de verrouillage

Le [guide du distributeur centre fermé](/guides/distributeur-5-3-centre-ferme-verin-derive/) distingue le volume retenu et le mouvement possible. Ajouter un tel organe à un schéma ne transforme pas, par lui-même, une bride non verrouillante en fonction de maintien validée.

| Donnée disponible | Question encore à résoudre |
| --- | --- |
| Force sous pression | Pression et bras réellement applicables |
| Pivotement puis serrage | Position de travail et dégagement de la pièce |
| Modèle non verrouillant | Fonction requise lors d’une perte d’air |
| Circuit proposé | Comportement de l’ensemble dans les états de défaut |

Faites analyser le maintien de la pièce et les moyens de secours par le concepteur, avec les spécifications des composants réellement utilisés.

## Faire porter la réception sur le besoin de maintien

La réception doit vérifier la fonction définie, dans une procédure empêchant l’exposition des personnes et la chute de la pièce. L’essai de serrage normal reste séparé de l’évaluation des défauts d’alimentation. Conservez les vérifications de défauts d’alimentation dans le cadre de réception prévu par le concepteur, hors de la production exposée.

Pour le calcul des efforts et des bras, le [dossier de préhension](/guides/pince-pneumatique-force-doigt-longueur-prehension/) donne une grille utile sur un autre composant. Une conclusion recevable nomme la bride, sa configuration et la fonction du montage. « Elle serre correctement avec l’air » ne répond pas à la demande « elle doit maintenir sans air ».

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
