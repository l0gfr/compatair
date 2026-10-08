---
title: "BEKO QWIK-PURE FAULT 9 : vérifier l’air auxiliaire avant les cartouches"
seoTitle: "QWIK-PURE FAULT 9 : air auxiliaire et cartouches"
description: "FAULT 9 associe huile élevée et niveau haut persistant après décharge. La notice cite aussi l’absence d’air auxiliaire : organiser les contrôles avant remplacement."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "separateur-huile-eau-condensats-compresseur"
  - "bekomat20-condensats-seulement-bouton-test"
  - "entretien-compresseur-purge-condensats"
sources:
  - "https://www.beko-technologies.com/fileadmin/user_upload/qp15-90_ba_02-530_en_04_01.pdf"
---

Le QWIK-PURE affiche **FAULT 9** et les cartouches semblent être la cause évidente. Pourtant, la [notice QWIK-PURE, page 137](https://www.beko-technologies.com/fileadmin/user_upload/qp15-90_ba_02-530_en_04_01.pdf#page=137) cite aussi l’absence d’air comprimé auxiliaire ou une pression trop basse. Remplacer les cartouches sans vérifier cette alimentation peut laisser le défaut entier.

Le message combine deux observations : quantité d’huile trop élevée dans la chambre de mesure et capteur HLA encore couvert trop longtemps après le début d’une décharge. Cette combinaison est plus précise qu’un simple « cartouche pleine ».

## Ne pas confondre FAULT 8 et FAULT 9

La même page décrit FAULT 8 avec l’huile durablement trop élevée, liée aux cartouches ne pouvant plus absorber ou à une arrivée d’huile très importante. FAULT 9 ajoute le comportement de niveau après décharge et une liste de causes plus large.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="beko-qwik-pure-fault9-air-auxiliaire-cartouches-title beko-qwik-pure-fault9-air-auxiliaire-cartouches-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="beko-qwik-pure-fault9-air-auxiliaire-cartouches-title">Deux codes · deux observations</title><desc id="beko-qwik-pure-fault9-air-auxiliaire-cartouches-desc">Différence des tableaux de la notice QWIK-PURE. FAULT 9 ne désigne pas exclusivement les cartouches.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Deux codes · deux observations</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">FAULT 8</text><text x="41" y="151" font-size="21" fill="#eef2e9">Huile élevée</text><text x="41" y="193" font-size="21" fill="#eef2e9">Absorption saturée ?</text><text x="41" y="235" font-size="21" fill="#eef2e9">Arrivée d’huile ?</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">FAULT 9</text><text x="285" y="151" font-size="21" fill="#eef2e9">Huile +HLA couvert</text><text x="285" y="193" font-size="21" fill="#eef2e9">Après décharge</text><text x="285" y="235" font-size="21" fill="#eef2e9">Air auxiliaire aussi ?</text></svg>
<figcaption>Différence des tableaux de la notice QWIK-PURE. FAULT 9 ne désigne pas exclusivement les cartouches.</figcaption>
</figure>


## Vérifier les conditions accessibles avant l’intervention

Le relevé proposé par CompatAir conserve le code exact, le moment d’apparition, l’état de l’arrivée d’air auxiliaire et les événements de démarrage ou de maintenance. Vérifiez l’ouverture et la pression applicable selon la section technique de votre configuration.

| Famille de cause citée pour FAULT 9 | Recherche à organiser |
| --- | --- |
| Absence d’air ou pression trop faible | Alimentation auxiliaire et plage applicable |
| Capteurs FRC encrassés | Procédure de nettoyage de la notice |
| Cartouches saturées ou colmatées | Remplacement selon le diagnostic |
| Piston ou conduit de remontée | Intervention prévue par le fabricant |

Le tableau cite également un niveau très élevé après démarrage et un sifflement aux soupapes FRC pendant la décharge. Ces observations doivent être transmises, sans démonter un ensemble pressurisé pour les reproduire. Les opérations renvoient à des sections de maintenance distinctes du manuel.

## Reprendre le traitement avec une cause documentée

Une décharge manuelle ou un acquittement ne constitue pas une démonstration que le traitement est revenu à son état correct. Après la correction prévue, suivez les critères et contrôles applicables au séparateur. La gestion des condensats contaminés reste celle du site et de ses prescriptions, sans rejet improvisé.

Le [guide du séparateur huile/eau](/guides/separateur-huile-eau-condensats-compresseur/) distingue le traitement du condensat de la séparation d’eau dans l’air. Le [dossier BEKOMAT 20](/guides/bekomat20-condensats-seulement-bouton-test/) concerne un autre équipement : son bouton Test ne fournit pas un dépannage QWIK-PURE. Le [guide de purge](/guides/entretien-compresseur-purge-condensats/) aide à identifier chaque organe.

Le résultat utile est une cause reliée aux deux observations du FAULT 9 et une action conforme, avec les cartouches remplacées seulement lorsque leur diagnostic le justifie. Contrôlez ensuite le résultat selon les exigences de traitement applicables à votre installation.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
