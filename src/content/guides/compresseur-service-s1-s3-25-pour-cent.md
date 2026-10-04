---
title: "Compresseur S1 ou S3 25 % : comprendre le service avant le travail continu"
description: "S1 et S3 25 % décrivent le service moteur. Lire le rapport marche/repos, les conditions de notice et le débit restitué sans calcul de capacité trompeur."
pubDate: 2026-09-29
category: Comprendre
audiences: ["particulier", "professionnel"]
metiers: ["garage-automobile", "menuiserie-agencement", "maintenance-industrielle"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["guide-complet-dimensionner-compresseur-air", "einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs", "compresseur-pour-ponceuse-pneumatique"]
sources:
  - https://library.e.abb.com/public/891764f173c5494b82b7e66e0b2d6080/9AKK105285%20REV%20C%2010-2018.pdf
  - https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of
---

**Le service S3 25 % n’est pas un débit d’air et n’autorise pas un travail continu à pleine charge.** Il décrit un fonctionnement intermittent dans des conditions déterminées. Pour choisir un compresseur, il faut lire cette donnée séparément du FAD, du volume de cuve et de la pression maximale.

## Le rapport décrit un cycle moteur

Le [guide technique des moteurs ABB, édition 2018, section 4.7](https://library.e.abb.com/public/891764f173c5494b82b7e66e0b2d6080/9AKK105285%20REV%20C%2010-2018.pdf) définit S1 comme un fonctionnement à charge constante assez long pour atteindre l’équilibre thermique. Pour S3, il décrit une succession de cycles avec fonctionnement à charge constante, repos et moteur hors tension ; l’effet thermique du démarrage n’est pas significatif dans ce type de service.

Le facteur de durée est N/(N + R), où N est la période de fonctionnement et R celle de repos. Le guide présente un cycle de 10 minutes et l’exemple de désignation S3 25 %. Il s’agit de la définition exposée pour les moteurs dans cette source.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="compresseur-service-s1-s3-25-pour-cent-title compresseur-service-s1-s3-25-pour-cent-desc" style="font-family:system-ui,sans-serif">
<title id="compresseur-service-s1-s3-25-pour-cent-title">Facteur de durée du service S3</title><desc id="compresseur-service-s1-s3-25-pour-cent-desc">Schéma du rapport N/(N+R), à 25 % pour cet exemple. La durée applicable et l’exploitation de la machine doivent être vérifiées dans sa notice.</desc>
<rect width="440" height="290" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">S3 : rapport marche / cycle</text><rect x="24" y="75" width="98" height="52" rx="8" fill="#d3eb56"/><rect x="122" y="75" width="294" height="52" rx="8" fill="#315341"/><text x="73" y="109" fill="#10281e" font-size="22" text-anchor="middle" font-weight="700">N</text><text x="269" y="109" fill="#eef2e9" font-size="22" text-anchor="middle" font-weight="400">R</text><text x="220" y="175" fill="#eef2e9" font-size="24" text-anchor="middle" font-weight="400">N / (N + R) = 25 %</text><text x="24" y="225" fill="#eef2e9" font-size="16" text-anchor="start" font-weight="400">N : fonctionnement à charge constante</text><text x="24" y="258" fill="#eef2e9" font-size="16" text-anchor="start" font-weight="400">R : repos, moteur hors tension</text>
</svg>
<figcaption>Schéma du rapport N/(N+R), à 25 % pour cet exemple. La durée applicable et l’exploitation de la machine doivent être vérifiées dans sa notice.</figcaption>
</figure>

## Lire la mention sur une machine réelle

La [fiche Einhell du TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of) affiche S3 25 %. La notice correspondant à la machine reste nécessaire pour appliquer ses consignes, ses conditions ambiantes et ses limites d’exploitation. La définition générale d’un service ne remplace pas une procédure utilisateur.

À titre d’illustration arithmétique de la définition ABB, 25 % d’un cycle de 10 minutes représente 2,5 minutes de fonctionnement et 7,5 de repos. **Ce calcul n’est pas une consigne d’utilisation rédigée par Einhell pour chaque séquence de cet appareil.** Il montre pourquoi une lecture « 15 minutes d’affilée sur une heure » n’est pas équivalente à de courts cycles répétitifs.

Le [cas de la CP7732C avec cet Einhell](/guides/einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs/) distingue déjà demande en charge et production. Le service ajoute une limite temporelle à examiner ; il ne remplace pas ce bilan de débit.

## Ne pas transformer le pourcentage en FAD mesuré

Multiplier un point de débit publié par 25 % ne produit pas une nouvelle mesure constructeur. Le débit dépend de la pression, et l’exploitation dépend des seuils du pressostat, des pauses et de la réserve. Il faut un scénario explicite pour discuter une moyenne de production, avec ses hypothèses et ses limites.

De même, S1 sur un moteur ne garantit pas à lui seul le fonctionnement continu de tous les éléments d’un compresseur. La machine complète peut avoir ses propres exigences de refroidissement, de traitement et de maintenance.

| Question | Document ou donnée à obtenir |
| --- | --- |
| Quel débit à la pression utile ? | Point FAD ou courbe constructeur |
| Quel service de la machine ? | Notice et désignation applicable |
| Quelle cadence de travail ? | Séquence, pauses et simultanéité |
| Quelles conditions d’installation ? | Température et ventilation admises |

## Dimensionner pour une séquence identifiable

Décrivez la durée pendant laquelle l’outil consomme réellement et les pauses normales. Le [guide du dimensionnement](/guides/guide-complet-dimensionner-compresseur-air/) associe cette description au besoin d’air. Pour une [ponceuse utilisée durablement](/guides/compresseur-pour-ponceuse-pneumatique/), une grande cuve ne supprime pas les contraintes de service.

Si le service autorisé manque dans la documentation disponible, demandez-le au fabricant. Il ne devient pas 100 % par défaut. Aucun essai d’endurance ou température de protection n’est inventé ici pour compléter une fiche commerciale.

Les définitions du [service S1](/glossaire/#service-s1) et du [service S3](/glossaire/#service-s3) restent accessibles dans le glossaire pour relire une désignation moteur.

Le [cas Bambi BB24](/guides/bambi-bb24-50-pourcent-debit-continu/) associe le FAD publié au facteur de marche. La [notice FINI SuperSilent](/guides/fini-supersilent-redemarrage-thermique/) traite un autre point pratique : l’arrêt thermique et le retour automatique décrits pour son périmètre.
