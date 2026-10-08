---
title: "Powerex scroll tourne sans monter en pression : vérifier la rotation après câblage"
seoTitle: "Powerex scroll : tourne sans pression après câblage"
description: "Après une intervention électrique, un scroll triphasé peut tourner dans le mauvais sens. Suivre la piste prévue par Powerex sans inverser soi-même les phases."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "compresseur-ne-demarre-plus-froid-rallonge"
  - "compresseur-perd-pression-arret-fuite-refroidissement"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://powerexinc.com/docs/manuals/258911_0916.pdf"
---

Le moteur tourne après une intervention électrique, mais la cuve ne monte pas en pression. La [notice Powerex scroll, démarrage page 4](https://powerexinc.com/docs/manuals/258911_0916.pdf#page=4) prévoit une vérification particulière sur un groupe triphasé : si la pression ne monte pas, arrêter et faire corriger le raccordement par un électricien qualifié selon la procédure constructeur.

Cette piste est utile après un changement d’alimentation ou de câblage. Elle ne permet pas d’attribuer toute absence de pression au sens de rotation : le tableau de dépannage donne aussi d’autres causes mécaniques et pneumatiques.

## Conserver l’événement qui a précédé le défaut

Notez l’intervention, l’identité de l’alimentation et le résultat au premier redémarrage. Gardez le modèle et la notice appliquée. Vérifiez que la plaque correspond aux familles STS/STD/SBS et versions H couvertes par IN258911AV 09/2016 avant d’appliquer cette procédure.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="powerex-scroll-tourne-sans-pression-rotation-title powerex-scroll-tourne-sans-pression-rotation-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="powerex-scroll-tourne-sans-pression-rotation-title">Le contexte oriente la vérification</title><desc id="powerex-scroll-tourne-sans-pression-rotation-desc">Piste de démarrage triphasé prévue par Powerex. Ce schéma ne donne pas une méthode d’inversion de phases.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">Le contexte oriente la vérification</text><circle cx="46" cy="86" r="18" fill="#d3eb56"/><text x="46" y="93" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">1</text><text x="80" y="83" font-size="22" fill="#eef2e9" font-weight="700">Après intervention électrique</text><text x="80" y="111" font-size="19" fill="#8abfa3">Conserver la chronologie</text><path d="M46 108V147" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="168" r="18" fill="#d3eb56"/><text x="46" y="175" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">2</text><text x="80" y="165" font-size="22" fill="#eef2e9" font-weight="700">Triphasé sans montée</text><text x="80" y="193" font-size="19" fill="#8abfa3">Arrêt et électricien qualifié</text><path d="M46 190V229" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="250" r="18" fill="#d3eb56"/><text x="46" y="257" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">3</text><text x="80" y="247" font-size="22" fill="#eef2e9" font-weight="700">Rotation correcte confirmée</text><text x="80" y="275" font-size="19" fill="#8abfa3">Poursuivre les autres causes</text></svg>
<figcaption>Piste de démarrage triphasé prévue par Powerex. Ce schéma ne donne pas une méthode d’inversion de phases.</figcaption>
</figure>


## Un moteur en rotation ne confirme pas une production d’air

Le tableau page 16 cite notamment mauvais sens de rotation, courroie détendue ou sortie de son logement, filtre colmaté, soupape ouverte, usure des joints de bout, purge restée ouverte et fuite d’air. La chronologie permet d’ordonner leur examen sans supposer immédiatement une panne de pompe.

| Contexte | Recherche à organiser |
| --- | --- |
| Défaut apparu après câblage | Rotation et alimentation vérifiées par l’électricien |
| Aucun changement électrique | Pistes du tableau de dépannage complet |
| Bruit, vibration ou fuite inhabituels | Arrêt et examen selon la notice |
| Purge ou sortie en configuration inattendue | État pneumatique à confronter au démarrage prévu |

Le sens de rotation se confirme avec les repères et la procédure du modèle. Réservez l’accès au coffret et la correction du raccordement à l’électricien qualifié. L’électricien doit aussi vérifier l’adéquation de l’alimentation, pas seulement obtenir une montée en pression.

Le [suivi des joints de bout](/guides/powerex-scroll-tipseals-entretien-version-hp/) conserve une autre cause citée par le tableau. Si le défaut est thermique, examinez le [trajet de refroidissement](/guides/powerex-scroll-air-chaud-recirculation-local/) avec les conditions du local.

## Vérifier le résultat après l’intervention autorisée

La réception conserve la pression et son évolution pendant le démarrage prévu, puis les observations de fuite, bruit et vibration. Une montée retrouvée est un résultat utile ; elle ne constitue pas une mesure de débit restitué.

Le [dossier de non-démarrage](/guides/compresseur-ne-demarre-plus-froid-rallonge/) concerne un moteur qui ne part pas, différent de ce cas où il tourne. La [perte à l’arrêt](/guides/compresseur-perd-pression-arret-fuite-refroidissement/) concerne ensuite le maintien de pression. Séparer ces états rend le diagnostic plus lisible.

Consignez la cause confirmée et l’action dans le [journal de maintenance](/guides/maintenance-preventive-reseau-air-comprime/). Si le défaut persiste malgré une rotation vérifiée, poursuivez le tableau Powerex avec le service technique ; ne multipliez pas les redémarrages pour chercher un sens « qui semble fonctionner ».

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
