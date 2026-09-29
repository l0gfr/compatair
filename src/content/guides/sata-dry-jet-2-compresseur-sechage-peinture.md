---
title: "SATA dry jet 2 : quel débit de compresseur pour sécher une peinture à l’eau ?"
description: "Le SATA dry jet 2 consomme 270 Nl/min à 2,5 bar. Dimensionner un ou deux sécheurs, distinguer air injecté et air ambiant, vérifier le poste peinture."
pubDate: 2026-09-29
category: Choisir
audiences: ["professionnel"]
metiers: ["carrosserie-peinture"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["air-comprime-carrosserie-peinture", "amplificateur-air-exair-consommation-debit", "filtration-air-cabine-peinture-etages"]
sources:
  - https://www.sata.com/media/84/06/70/1790259017/BAL-SATA-DRY-JET-2.PDF.PDF?ts=1790259017
  - https://www.sata.com/de-de/sata-dry-jet-2-trockenblaspistole/217489
---

Le SATA dry jet 2 demande **270 Nl/min à 2,5 bar**, d’après sa notice. Son fonctionnement par entraînement d’air ambiant ne dispense donc pas de dimensionner l’alimentation comprimée. Ajouter un deuxième appareil au poste augmente la demande du réseau, même si le jet de séchage contient une part d’air prise dans la cabine.

## Distinguer le jet de sortie et le besoin du réseau

Le [mode d’emploi officiel, tableau français page 94](https://www.sata.com/media/84/06/70/1790259017/BAL-SATA-DRY-JET-2.PDF.PDF?ts=1790259017), donne 270 Nl/min à 2,5 bar. La [fiche produit SATA 217489](https://www.sata.com/de-de/sata-dry-jet-2-trockenblaspistole/217489) décrit le principe Venturi : l’air comprimé injecté entraîne de l’air environnant. Le débit d’air mobilisé pour le séchage ne doit pas être confondu avec la quantité demandée au compresseur.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 286" role="img" aria-labelledby="sata-dry-jet-2-compresseur-sechage-peinture-title sata-dry-jet-2-compresseur-sechage-peinture-desc" style="font-family:system-ui,sans-serif">
<title id="sata-dry-jet-2-compresseur-sechage-peinture-title">Air comprimé et air entraîné dans le dry jet 2</title><desc id="sata-dry-jet-2-compresseur-sechage-peinture-desc">La notice publie 270 Nl/min à 2,5 bar côté alimentation. Le volume d’air ambiant entraîné n’est pas quantifié dans ce schéma.</desc>
<rect width="440" height="286" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Dry jet 2 : deux flux distincts</text><text x="24" y="73" fill="#eef2e9" font-size="19" text-anchor="start" font-weight="400">Réseau : 270 Nl/min à 2,5 bar</text><path d="M220 89L220 128" stroke="#9fb3a8" stroke-width="3" fill="none"/><rect x="140" y="133" width="160" height="60" rx="8" fill="#19704f"/><text x="220" y="171" fill="#eef2e9" font-size="20" text-anchor="middle" font-weight="400">Injecteur</text><path d="M48 160L136 160" stroke="#9fb3a8" stroke-width="3" fill="none"/><text x="24" y="118" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">Air ambiant</text><path d="M220 195L220 225" stroke="#9fb3a8" stroke-width="3" fill="none"/><text x="220" y="259" fill="#eef2e9" font-size="20" text-anchor="middle" font-weight="400">Flux de séchage entraîné</text>
</svg>
<figcaption>La notice publie 270 Nl/min à 2,5 bar côté alimentation. Le volume d’air ambiant entraîné n’est pas quantifié dans ce schéma.</figcaption>
</figure>

Le symbole Nl/min désigne ici une quantité d’air ramenée à des conditions de référence. Avant une comparaison avec un débit de compresseur, vérifiez ces conditions dans les documents des appareils. Une valeur volumique relevée dans une canalisation sous pression n’est pas automatiquement comparable.

Le [guide du soufflage amplifié](/guides/amplificateur-air-exair-consommation-debit/) explique cette distinction entre air entraîné et air fourni. Nous ne calculons pas un débit total de séchage à partir d’un facteur d’amplification non documenté.

## Un appareil, deux appareils, puis les autres consommateurs

Deux dry jet 2 alimentés simultanément au point nominal correspondent à 2 × 270 = **540 Nl/min de demande déclarée additionnée**. Ce résultat est un scénario de dimensionnement, pas une mesure du réseau ni la capacité finale à acheter. Les accessoires et les autres utilisateurs doivent encore être intégrés.

| Configuration examinée | Base de demande |
| --- | --- |
| Un dry jet 2 au point nominal | 270 Nl/min à 2,5 bar |
| Deux dry jet 2 simultanés | 540 Nl/min à la même condition |
| Séchage et autre poste en fonctionnement | Ajouter le besoin sourcé de l’autre poste |

La pression de 2,5 bar concerne l’alimentation en fonctionnement de l’appareil. Régler un détendeur à vide sur cette valeur ne démontre pas qu’elle reste disponible lorsque les deux appareils soufflent.

## Le poste de séchage doit conserver sa qualité d’air

La préparation du débit se complète par le [traitement d’air de cabine](/guides/filtration-air-cabine-peinture-etages/). Un flexible partagé avec un outil lubrifié peut faire entrer un autre problème dans le projet. Identifiez le point de prise, le traitement, le flexible et les raccords utilisés pour cette tâche.

L’aspiration d’air ambiant concerne aussi les conditions de la cabine. Les règles d’application, de ventilation et de séchage du produit restent celles de sa fiche technique et de l’installation. Le dry jet 2 ne justifie pas de modifier ces consignes pour accélérer artificiellement le processus.

## Contrôler sans annoncer un temps de séchage universel

À la réception, vérifiez la référence, les accessoires, la pression en fonctionnement et la tenue du réseau avec la configuration prévue. Consignez séparément le produit appliqué, les conditions de cabine et le résultat observé. Une modification de l’un de ces paramètres limite la comparaison avec une autre opération.

La notice contient aussi un filtre propre à l’appareil, indiqué comme remplaçable en cas d’encrassement. Son entretien suit cette notice. Aucun temps de séchage, gain de rendement ou essai sur peinture n’a été mesuré par CompatAir pour ce dossier.
