---
title: "Compresseur de secours N+1 : vérifier le débit qui reste après une panne"
description: "N+1 ne se valide pas en additionnant tous les débits. Calculer la capacité restante, vérifier pression, traitement, alimentation et reprise du secours."
pubDate: 2026-09-29
category: Installer
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "atelier-poids-lourds"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["sequencer-plusieurs-compresseurs", "raccorder-deux-compresseurs-en-parallele", "stockage-primaire-secondaire-air-comprime"]
sources:
  - https://pr.kaeser.com/en/compressed-air-resources/kaeser-talks-shop/improved-efficiency-aerospace.aspx
---

**La réserve N+1 doit couvrir le besoin après la perte de l’unité prévue dans le scénario.** Additionner les débits de toutes les machines ne démontre pas cette continuité. Le secours doit aussi être disponible dans les bonnes conditions de pression, de service et de traitement.

## Distinguer base, appoint et secours

Dans un [cas industriel publié par Kaeser](https://pr.kaeser.com/en/compressed-air-resources/kaeser-talks-shop/improved-efficiency-aerospace.aspx), le fabricant décrit trois compresseurs : un pour la demande habituelle, un pour les pointes et un en attente pour la redondance, notamment pendant la maintenance. Ce cas illustre trois fonctions. Il ne définit pas un nombre de machines ou une taille universels pour tout atelier.

Le [guide du séquencement](/guides/sequencer-plusieurs-compresseurs/) traite la coordination de plusieurs unités. Le dimensionnement du secours ajoute une question : quelle demande doit rester alimentée si une unité est indisponible ?

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 282" role="img" aria-labelledby="compresseur-secours-n-plus-un-capacite-restante-title compresseur-secours-n-plus-un-capacite-restante-desc" style="font-family:system-ui,sans-serif">
<title id="compresseur-secours-n-plus-un-capacite-restante-title">Calcul de capacité après indisponibilité</title><desc id="compresseur-secours-n-plus-un-capacite-restante-desc">Exemple fictif : trois unités de 250 L/min, dont une indisponible, laissent 500 L/min pour un besoin de 400. Pression, traitement et reprise restent à vérifier.</desc>
<rect width="440" height="282" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="18" text-anchor="start" font-weight="700">Exemple fictif : trois unités de 250</text><rect x="25" y="78" width="120" height="75" rx="8" fill="#19704f"/><rect x="160" y="78" width="120" height="75" rx="8" fill="#19704f"/><rect x="295" y="78" width="120" height="75" rx="8" fill="#765039"/><text x="85" y="110" fill="#eef2e9" font-size="25" text-anchor="middle" font-weight="400">250</text><text x="220" y="110" fill="#eef2e9" font-size="25" text-anchor="middle" font-weight="400">250</text><text x="355" y="110" fill="#eef2e9" font-size="22" text-anchor="middle" font-weight="400">Arrêt</text><text x="85" y="136" fill="#eef2e9" font-size="16" text-anchor="middle" font-weight="400">L/min</text><text x="220" y="136" fill="#eef2e9" font-size="16" text-anchor="middle" font-weight="400">L/min</text><text x="220" y="206" fill="#eef2e9" font-size="25" text-anchor="middle" font-weight="400">Restant : 500 L/min</text><text x="220" y="250" fill="#eef2e9" font-size="19" text-anchor="middle" font-weight="400">Besoin fictif : 400 L/min</text>
</svg>
<figcaption>Exemple fictif : trois unités de 250 L/min, dont une indisponible, laissent 500 L/min pour un besoin de 400. Pression, traitement et reprise restent à vérifier.</figcaption>
</figure>

## Calculer un exemple sans le prendre pour un projet réel

Supposons **trois unités fictives**, chacune capable de fournir 250 L/min dans les mêmes conditions utiles, avec un service adapté. La somme vaut 750 L/min. Si une unité est indisponible, il reste 500 L/min. Pour une demande fictive de 400 L/min, ce seul bilan de production conserve une différence de 100 L/min.

Avec seulement deux unités de 250 L/min, le total installé atteint encore 500 L/min, mais la perte d’une unité ne laisse que 250 L/min. Le même besoin de 400 L/min n’est alors plus couvert. Aucun de ces nombres ne correspond à une offre recommandée ou à une mesure de site.

Si les unités ont des capacités différentes, examinez notamment la perte de celle qui fournit le plus dans le scénario retenu. Les capacités doivent rester comparables en pression et en conditions de référence ; le débit aspiré n’est pas la base de ce calcul.

## Examiner les éléments communs

Un compresseur disponible ne suffit pas si le chemin vers le réseau est indisponible. Identifiez les éléments partagés : traitement, collecteur, commande, alimentation électrique et isolement. Le dossier doit préciser ce que couvre le secours et ce qui demeure un point commun de défaillance.

| Situation prévue | Vérification utile |
| --- | --- |
| Panne d’une unité | Débit restant et pression minimale au réseau |
| Maintenance planifiée | Isolement et remise en service documentés |
| Démarrage du secours | Conditions et délai de reprise évalués |
| Défaillance d’un élément commun | Mesure de continuité prévue ou limite assumée |

Le [raccordement de deux compresseurs](/guides/raccorder-deux-compresseurs-en-parallele/) ne doit pas être confondu avec une démonstration N+1. Une connexion en parallèle rend une architecture possible ; elle ne garantit pas le besoin après panne.

## Préparer un essai de continuité encadré

Le test doit être prévu par les responsables du site avec la procédure et les critères d’arrêt appropriés. Observez le démarrage de l’unité de secours, la pression au point critique et les consommateurs qui doivent rester disponibles. Ne provoquez pas une panne improvisée sur une production sensible.

Le [stockage primaire et secondaire](/guides/stockage-primaire-secondaire-air-comprime/) peut intervenir dans la transition ; il ne transforme pas une capacité restante insuffisante en alimentation durable.

Aucun niveau de disponibilité ou délai garanti n’est calculé ici. Une conclusion N+1 doit indiquer le scénario couvert, les conditions et les limites, puis être confirmée pour le projet réel.
