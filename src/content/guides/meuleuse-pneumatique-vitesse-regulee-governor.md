---
title: "Meuleuse pneumatique régulée : ce que fait le governor"
seoTitle: "Meuleuse régulée : governor et sécurité de survitesse"
description: "Régulation de vitesse, dispositif de survitesse et pression du réseau remplissent des fonctions différentes. Lire les équipements des CP3340."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["meuleuse-verticale-fonderie-3kw-debit", "meuleuse-pneumatique-pince-6-mm-ou-1-4"]
sources: ["https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf"]
---

Une meuleuse annoncée « régulée » n’est pas nécessairement une machine dont l’opérateur peut choisir librement la vitesse. Le terme peut désigner un mécanisme interne qui agit sur l’alimentation du moteur. Pour préparer un achat, il faut distinguer cette régulation du réglage de pression du poste et du dispositif de sécurité contre la survitesse.

La [fiche de gamme CP3340 dans le catalogue Chicago Pneumatic, page PDF 148](https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148), mentionne un **governor** et un **overspeed shut-off device**. Ces deux expressions désignent des fonctions séparées : la régulation pendant le fonctionnement et une coupure en situation de survitesse. Le catalogue ne fournit pas ici leur procédure de contrôle ou d’intervention.

## Trois lignes à séparer dans le cahier des charges

| Élément | Information à demander | Ce qu’il ne démontre pas |
| --- | --- | --- |
| Régulation du moteur | Fonction et régime nominal de la référence | Une vitesse réglable sur toute une plage |
| Coupure de survitesse | Présence sur la version exacte et contrôle prescrit | Une autorisation de dépasser la pression prévue |
| Alimentation du poste | Pression dynamique et débit en charge | La compatibilité mécanique de la meule |

Sur cette même page, la CP3340-SALAVAD est donnée pour **8 500 tr/min** et une capacité de **180 mm**, tandis que la CP3340-SALAVADE est donnée pour **6 000 tr/min** et **230 mm**. Le suffixe et la vitesse restent déterminants malgré une puissance commune de 3 400 W. La mention de régulation ne rend pas les accessoires interchangeables.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Régulation et protection ont des rôles distincts">
<svg viewBox="0 0 380 413" role="img" aria-labelledby="governor-title governor-desc" xmlns="http://www.w3.org/2000/svg"><title id="governor-title">Régulation et protection ont des rôles distincts</title><desc id="governor-desc">Fonctionnement: Le governor régule le moteur ; Anomalie de vitesse: Le dispositif de survitesse assure une fonction de coupure ; Choix de la meule: Régime, dimensions et montage restent à vérifier</desc><rect width="380" height="413" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">Régulation et protection</text><text x="20" y="60" font-size="20" font-weight="700" fill="#143426">ont des rôles distincts</text><circle cx="32" cy="107" r="14" fill="#19704f"/><text x="32" y="112" text-anchor="middle" font-size="14" fill="white">1</text><text x="58" y="112" font-size="17" font-weight="700" fill="#143426">Fonctionnement</text><text x="58" y="135" font-size="15" font-weight="400" fill="#35473d">Le governor régule le moteur</text><circle cx="32" cy="178" r="14" fill="#19704f"/><text x="32" y="183" text-anchor="middle" font-size="14" fill="white">2</text><text x="58" y="183" font-size="17" font-weight="700" fill="#143426">Anomalie de vitesse</text><text x="58" y="206" font-size="15" font-weight="400" fill="#35473d">Le dispositif de survitesse assure</text><text x="58" y="227" font-size="15" font-weight="400" fill="#35473d">une fonction de coupure</text><circle cx="32" cy="270" r="14" fill="#19704f"/><text x="32" y="275" text-anchor="middle" font-size="14" fill="white">3</text><text x="58" y="275" font-size="17" font-weight="700" fill="#143426">Choix de la meule</text><text x="58" y="298" font-size="15" font-weight="400" fill="#35473d">Régime, dimensions et montage</text><text x="58" y="319" font-size="15" font-weight="400" fill="#35473d">restent à vérifier</text><text x="20" y="367" font-size="13" font-weight="400" fill="#35473d">Schéma de lecture ; aucune mesure physique</text><text x="20" y="386" font-size="13" font-weight="400" fill="#35473d">CompatAir.</text></svg>
</div>

## Réceptionner une machine documentée

Le dossier utile comprend la référence complète, la notice correspondante, le régime inscrit sur la machine et la liste des montages autorisés. Demandez aussi les instructions de maintenance et de vérification des dispositifs de sécurité. Une phrase commerciale telle que « puissance constante » ne donne ni une tolérance de régime mesurée ni la périodicité de contrôle.

Si le régime paraît anormal ou si la protection a déclenché, le catalogue commercial ne suffit pas pour décider d’une remise en service. Il faut appliquer la notice et faire intervenir la personne compétente ; modifier le governor ou neutraliser la coupure n’est pas une méthode d’adaptation d’un accessoire.

## Prévoir l’air avant l’essai

La CP3340-SALAVAD publie **52 L/s en charge**, soit **3 120 L/min**. Cette demande concerne un poste industriel. Elle doit être rapprochée d’un débit restitué documenté et de la pression disponible à l’outil, sans déduire la capacité du réseau de la seule puissance électrique du compresseur.

La [fiche CP3340-SALAVAD](/outils-pneumatiques/meuleuse-chicago-pneumatic-cp3340-salavad/) et le [guide des meuleuses de fonderie](/guides/meuleuse-verticale-fonderie-3kw-debit/) permettent de poursuivre la comparaison sur des références et des conditions explicites.
