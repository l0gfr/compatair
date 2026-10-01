---
title: "Bosch 0 607 450 593 : deux unités de débit divergent"
description: "La ligne de cette clé Bosch publie 13 L/s et 17,5 cfm à vide. Ces valeurs ne se convertissent pas entre elles : aucune demande corrigée n’est inventée."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 2
reviewStatus: "internal"
featured: false
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources: ["https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf"]
seoTitle: "Bosch 0 607 450 593 : deux unités de débit divergent"
---

Le tableau de la clé Bosch 0 607 450 593 contient une contradiction de débit : **13 L/s et 17,5 cfm à vide**. Les deux unités ne donnent pas la même quantité d’air. Il serait trompeur de choisir l’une comme valeur corrigée sans confirmation du fabricant.

## L’écart est présent dans la source primaire

Le [tableau Bosch S-LINE des clés à cliquet et à chocs](https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=73) associe cette référence à un entraînement carré de 1 pouce, une vitesse à vide de 3 100 tr/min et une masse de 9,6 kg. La ligne de consommation porte 13 L/s et 17,5 cfm. Les [conditions du catalogue](https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=4) annoncent 6,3 bar pour les performances.

Pour comparer les unités, 13 L/s × 60 donne 780 L/min. En utilisant le pied international, 1 cfm correspond à 28,316846592 L/min ; 17,5 cfm donne donc environ 495,545 L/min. L’écart calculé est d’environ 284,455 L/min. Il dépasse un simple effet d’arrondi du tableau.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 234" role="img" aria-labelledby="bosch-0607450593-consommation-unites-title bosch-0607450593-consommation-unites-desc" style="font-family:system-ui,sans-serif"><title id="bosch-0607450593-consommation-unites-title">Deux valeurs du tableau converties</title><desc id="bosch-0607450593-consommation-unites-desc">Ces barres montrent une contradiction documentaire. Aucune des deux valeurs n’est retenue comme correction.</desc><rect width="440" height="234" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">Deux valeurs du tableau converties</text><text x="22" y="75" fill="#eef2e9" font-size="14">13 L/s publiés</text><text x="418" y="75" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">780</text><rect x="22" y="87" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="87" width="396.00" height="9" rx="4" fill="#d3eb56"/><text x="22" y="137" fill="#eef2e9" font-size="14">17,5 cfm publiés</text><text x="418" y="137" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">495.545</text><rect x="22" y="149" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="149" width="251.58" height="9" rx="4" fill="#d3eb56"/><text x="22" y="216" fill="#eef2e9" font-size="13">L/min, conversion des unités déclarées</text></svg><figcaption>Ces barres montrent une contradiction documentaire. Aucune des deux valeurs n’est retenue comme correction.</figcaption></figure>

## Ne pas transformer une préférence en correction

La consommation à vide ne permet déjà pas de certifier une demande maximale ou en charge pour cette clé sur la seule ligne. La contradiction ajoute une seconde limite. CompatAir conserve les deux valeurs déclarées dans les spécifications, exclut cette demande du calcul et attend une confirmation.

La fiche ne choisit pas le plus petit chiffre pour rendre un compresseur compatible. Elle ne choisit pas non plus le plus grand chiffre pour simuler une prudence qui serait une donnée fabricant. Une éventuelle correction doit être documentée pour cette référence et son régime de mesure.

## La demande utile à transmettre au fournisseur

Envoyez la référence 0 607 450 593, le libellé du tableau et les deux unités concernées. Demandez une consommation en charge ou maximale à pression explicite, puis la configuration à laquelle elle s’applique. Faites confirmer séparément le besoin du poste et les conditions du raccordement.

La [fiche de la clé Bosch](/outils-pneumatiques/cle-a-chocs-bosch-0-607-450-593-0607450593/) conserve ce point non résolu. Le [guide de sélection par débit restitué](/guides/comparatif-compresseurs-debit-restitue/) explique ensuite comment comparer une demande correctement documentée au compresseur. Aucun couple annoncé ou numéro de réservoir ne comble cette lacune de consommation.
