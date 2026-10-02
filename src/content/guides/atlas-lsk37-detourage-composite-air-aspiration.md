---
title: "Atlas Copco LSK37 : préparer l’air et l’aspiration pour détourer un composite"
seoTitle: "LSK37 : air comprimé et aspiration du détourage composite"
description: "La LSK37 demande 32 cfm d’air et une aspiration de 200 m³/h. Lire ces deux circuits, identifier la pince et préparer un poste de détourage de composites."
pubDate: 2026-10-02
category: Installer
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["ponceuse-pneumatique-bois-aspiration-poussieres", "meuleuse-pneumatique-pince-6-mm-ou-1-4", "dimensionner-compresseur-menuiserie-agencement"]
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf
---

Une détoureuse pneumatique peut tourner correctement tout en laissant le poste mal équipé pour collecter les poussières. Sur l’**Atlas Copco LSK37 S250**, le catalogue associe un besoin d’air comprimé de **32 cfm** à une exigence d’aspiration séparée de **200 m³/h**. La préparation du poste exige deux vérifications : alimenter le moteur et raccorder le dispositif de captage prévu pour la coupe.

Ces chiffres figurent sur la [page PDF 225 du catalogue fabricant](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=225). Ils concernent les références détaillées dans cette édition. Avant une commande ou un achat d’occasion, confrontez le numéro de commande et la notice de l’exemplaire à cette documentation.

## Deux raccordements à prévoir dans le devis

Le tableau donne pour les LSK37 S250-DS1 et DS2 une vitesse à vide de 25 000 tr/min, une puissance publiée de 0,95 hp et une masse de 6,1 lb. Les deux versions partagent les 32 cfm de consommation. Le texte présente un régulateur de vitesse et un capot d’extraction intégré. Il indique ensuite, hors de la colonne d’alimentation, une exigence d’aspiration de 200 m³/h.

Les [conventions du catalogue, page PDF 4](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=4), précisent que les consommations d’air sont exprimées en air libre et données à 6,3 bar, sauf indication contraire. Elles décrivent la consommation maximale des outils munis d’un régulateur de vitesse au point de puissance maximale. Le débit de 32 cfm peut ainsi être rapproché d’une fourniture d’air restitué documentée à la pression pertinente.

La conversion donne **environ 906 L/min** : 32 × 28,3168. Le résultat conserve le sens de la colonne pneumatique. Les 200 m³/h correspondent au circuit d’aspiration. Les additionner au besoin du moteur créerait une demande de compresseur que cette fiche ne publie pas.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" role="img" aria-labelledby="lsk-title lsk-desc">
<title id="lsk-title">Deux circuits autour de la LSK37</title>
<desc id="lsk-desc">Le moteur reçoit de l’air comprimé. Le capot est raccordé à une aspiration externe. Leurs débits ne s’additionnent pas dans le dimensionnement du compresseur.</desc>
<rect width="440" height="260" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="15" fill="#eef2e9">
<text x="24" y="34">Alimentation du moteur</text><text x="24" y="65">32 cfm, environ 906 L/min à 6,3 bar</text>
<text x="24" y="153">Captage prévu sur le poste</text><text x="24" y="184">Exigence d’aspiration : 200 m³/h</text>
<text x="24" y="237">Deux vérifications à inscrire dans le devis</text>
</g><path d="M24 88H396M24 207H396" stroke="#d3eb56" stroke-width="6"/>
</svg>
<figcaption>Schéma des fonctions. Les conditions de mesure et les pertes de chaque circuit doivent être examinées séparément.</figcaption>
</figure>

## La capacité du compresseur ne valide pas le captage

Un compresseur fournissant 906 L/min à sa sortie ne démontre pas que l’outil recevra ce débit à 6,3 bar. Le tableau recommande un tuyau de 13 mm et un raccord d’entrée NPT 3/8. Le flexible, les raccords et les accessoires installés doivent être examinés avec la pression en fonctionnement. La fiche ne permet pas de calculer une longueur maximale de flexible universelle ni un pourcentage de perte forfaitaire.

Le dispositif d’aspiration demande une vérification comparable à son propre point de fonctionnement : raccordement, flexible, filtration et captage pendant la coupe. La seule valeur d’air comprimé ne renseigne aucun de ces éléments. Le [dossier sur les poussières de ponçage](/guides/ponceuse-pneumatique-bois-aspiration-poussieres/) aide à préparer les questions de captage ; le matériau usiné et le procédé de détourage doivent ensuite être examinés avec leurs exigences spécifiques.

Pour un essai de réception, consignez séparément la pression disponible à l’outil pendant la coupe et le résultat de la vérification du captage. Une rotation à vide confirme seulement que le moteur fonctionne dans les conditions de cet essai. Elle ne mesure ni la fourniture nécessaire à puissance maximale ni la collecte obtenue dans la pièce réellement usinée.

## Identifier la pince avant d’acheter la fraise

Les deux références publiées se distinguent sur un point mécanique décisif :

| Version | Numéro de commande | Pince publiée |
| --- | --- | --- |
| LSK37 S250-DS1 | 8423 1234 41 | 6 mm |
| LSK37 S250-DS2 | 8423 1234 42 | 1/4 pouce |

Un quart de pouce correspond à 6,35 mm. Cette conversion ne qualifie aucune interchangeabilité entre une queue de fraise de 6 mm et une pince de 1/4 pouce. Vérifiez la pince montée et les accessoires autorisés dans la notice. Le [guide sur les pinces métriques et impériales](/guides/meuleuse-pneumatique-pince-6-mm-ou-1-4/) approfondit cette vérification.

Les fiches [LSK37 DS1](/outils-pneumatiques/detoureuse-atlas-copco-lsk37-s250-ds1-8423123441/) et [DS2](/outils-pneumatiques/detoureuse-atlas-copco-lsk37-s250-ds2-8423123442/) conservent ces identités. Un devis exploitable doit préciser la référence, la pince, l’alimentation à la pression requise et le dispositif d’aspiration. Le catalogue apporte les points de départ ; l’essai du poste complète les données propres à votre coupe.
