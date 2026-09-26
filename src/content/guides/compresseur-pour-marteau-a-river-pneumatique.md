---
title: "Marteau à river pneumatique : débit, compresseur et emmanchement"
seoTitle: "Marteau à river : quel débit de compresseur ?"
description: "RRH06P, RRH08P et RRN11P : consommations vérifiées, coups par minute, emmanchements 10 et 10,2 mm et méthode de dimensionnement de l’air."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 6
featured: false
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-derouilleur-a-aiguilles", "pression-travail-6-3-bar-outils-pneumatiques", "diametre-longueur-flexible-air-comprime"]
relatedCalculatorTool: "atlas-copco-8426111104"
sources:
  - https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-01-sku8426110105
  - https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh08p-sku8426111109
  - https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh06p-sku8426111104
  - https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf
  - https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-02-sku8426110113
---

Pour un marteau à river, **le nombre de coups par minute n’est ni le nombre de rivets posés ni une indication suffisante du débit d’air**. Les références étudiées l’illustrent : le RRN11P-01 annonce 3 960 coups/min et 204 L/min, tandis que le RRH08P annonce 1 440 coups/min et 600 L/min. Les performances concernent des outils différents ; elles ne constituent pas un classement d’efficacité de rivetage. [Atlas Copco RRN11P-01](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-01-sku8426110105) ; [Atlas Copco RRH08P](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh08p-sku8426111109).

Ce guide porte sur les marteaux à river à percussion et leurs bouterolles. Il ne dimensionne pas une riveteuse destinée à tirer la tige d’un rivet aveugle. Le choix du procédé, de la bouterolle et du rivet reste lié au dossier d’assemblage.

## Trois modèles, trois profils de consommation

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Trois modèles, trois profils de consommation">

| Modèle exact | Débit publié | Coups/min | Énergie par coup | Queue de bouterolle |
| --- | --- | --- | --- | --- |
| RRN11P-01 | 3,4 L/s = 204 L/min | 3 960 | 2 J | 10 mm |
| RRH06P | 9 L/s = 540 L/min | 2 160 | 6 J | 10,2 mm |
| RRH08P | 10 L/s = 600 L/min | 1 440 | 8 J | 10,2 mm |


</div>

Les fiches [RRN11P-01](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-01-sku8426110105), [RRH06P](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh06p-sku8426111104) et [RRH08P](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh08p-sku8426111109) publient ces données. Les L/min sont calculés par multiplication des L/s par 60. Atlas Copco documente la référence générale de **6,3 bar** dans son [catalogue d’outils industriels](https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf), page PDF 3 ; le tableau des marteaux est à la page PDF 242. La pression maximale de 7 bar indiquée sur les fiches ne doit pas remplacer cette référence de performance.

<div class="article-infographic" tabindex="0" role="group" aria-label="Débits publiés des marteaux à river">
<svg viewBox="0 0 680 430" role="img" aria-labelledby="river-air-title river-air-desc" xmlns="http://www.w3.org/2000/svg">
<title id="river-air-title">Débits publiés des marteaux à river</title><desc id="river-air-desc">RRN11P-01 : 204 L/min; RRH06P : 540 L/min; RRH08P : 600 L/min. L/min ; le nombre de coups ne classe pas les besoins.</desc>
<rect width="680" height="430" rx="20" fill="#10281e"/><text x="30" y="43" fill="#d3eb56" font-size="25" font-weight="700">Débits publiés des marteaux à river</text>
<text x="30" y="83" fill="white" font-size="23">RRN11P-01</text><rect x="30" y="100" width="149.6" height="30" rx="7" fill="#81a58f"/><text x="194.6" y="123" fill="#d3eb56" font-size="23" font-weight="700">204</text>
<text x="30" y="183" fill="white" font-size="23">RRH06P</text><rect x="30" y="200" width="396.0" height="30" rx="7" fill="#81a58f"/><text x="441.0" y="223" fill="#d3eb56" font-size="23" font-weight="700">540</text>
<text x="30" y="283" fill="white" font-size="23">RRH08P</text><rect x="30" y="300" width="440.0" height="30" rx="7" fill="#81a58f"/><text x="485.0" y="323" fill="#d3eb56" font-size="23" font-weight="700">600</text>
<text x="30" y="403" fill="white" font-size="20">L/min ; le nombre de coups ne classe pas les besoins.</text>
</svg>
</div>

## RRH06P : faut-il viser 540 ou 675 L/min ?

**540 L/min est la consommation publiée.** Les 675 L/min obtenus par `540 × 1,25` sont un seuil de présélection avec la marge interne CompatAir de 25 %. De la même façon, le RRH08P conduit à 750 L/min avec cette marge, contre 600 L/min de besoin publié.

Dans les deux cas, comparez avec le [FAD documenté](/guides/debit-restitue-fad-vs-debit-aspire/) du compresseur, à la pression utile. Le résultat ne constitue pas une homologation de l’installation ni du procédé. Un atelier avec plusieurs marteaux doit aussi décrire la simultanéité ; une majoration forfaitaire ne suffit pas à couvrir un second opérateur.

Le scénario « deux RRH06P fonctionnent ensemble » donne `2 × 540 = 1 080 L/min` avant marge et autres consommations. C’est une addition de données constructeur, pas une mesure de votre réseau. Si les opérateurs travaillent en alternance, il faut documenter cette alternance et vérifier les recouvrements réels, plutôt que diviser automatiquement par deux.

## Une bouterolle de 10 mm n’est pas une variante de 10,2 mm

Le [RRN11P-02](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-02-sku8426110113) publie une queue de 10,2 mm, alors que le RRN11P-01 indique 10 mm. Les deux références annoncent la même consommation de 3,4 L/s. Le dimensionnement de l’air est donc identique sur ce critère, mais la configuration mécanique doit rester distincte.

Avant une commande d’accessoires, relevez le suffixe complet de l’outil, la référence de la bouterolle et celle du dispositif de retenue. Une proximité de diamètre ne prouve pas l’interchangeabilité. Faites confirmer l’ensemble par la notice ou le fournisseur ; n’adaptez pas une queue pour la faire entrer. Le tableau du catalogue distingue explicitement les versions -01 et -02.

Ce point compte particulièrement sur l’occasion : une photo de la famille RRN11P n’identifie pas forcément le modèle livré. La bonne ligne de devis doit mentionner la référence complète, puis les accessoires prévus pour l’assemblage.

## Vérifier le réseau pendant la frappe

Les fiches RRH06P et RRH08P recommandent un flexible de 10 mm ; celle du RRN11P-01 indique 6,3 mm. Ne transférez pas automatiquement le montage d’un modèle à l’autre. Les conditions du flexible et de ses raccords doivent être confrontées à la notice de la configuration retenue.

Pour la réception, nous proposons de noter la pression à l’outil en fonctionnement, l’état du filtre et du détendeur, les autres usages actifs et le réglage réellement utilisé. Une lecture sur la cuve pendant l’arrêt du marteau n’est pas le relevé de pression du poste pendant la frappe. Le [guide des flexibles](/guides/diametre-longueur-flexible-air-comprime/) détaille les paramètres de la liaison.

## Ce que le débit ne permet pas de valider

Un compresseur capable de fournir le débit requis ne garantit pas la qualité d’un rivet. Les données d’air n’indiquent ni la géométrie finale acceptable ni les conditions de contrôle d’un assemblage particulier. Notre fiche de décision sépare donc quatre validations :

1. **Air :** débit, pression et récupération entre séquences.
2. **Montage :** modèle, bouterolle et retenue compatibles.
3. **Procédé :** pièce, rivet, accès et contre-appui prévus dans la gamme.
4. **Résultat :** critères d’acceptation et contrôle définis avant la production.

Pour les opérations encadrées par une procédure de réparation ou de fabrication, utilisez cette procédure pour le résultat attendu. Une comparaison de J/coup ou de coups/min ne la remplace pas.

Consultez la [fiche du RRH06P](/outils-pneumatiques/marteau-a-river-atlas-copco-rrh06p/) et son [dimensionnement compresseur](/quel-compresseur-pour/marteau-a-river-atlas-copco-rrh06p/). Pour étudier un deuxième poste, saisissez un scénario explicite dans le [calculateur](/calculateur/#outil=atlas-copco-8426111104) et consultez le guide [plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/).

## Sources et périmètre

Données et documents consultés le **26 septembre 2026**. Ce guide repose sur une analyse documentaire ; CompatAir n’a pas réalisé d’essai physique de ces équipements. Les exemples de calcul sont identifiés comme tels.

- [Atlas Copco RRN11P-01](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-01-sku8426110105)
- [Atlas Copco RRH08P](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh08p-sku8426111109)
- [RRH06P](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh06p-sku8426111104)
- [catalogue d’outils industriels](https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf)
- [RRN11P-02](https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrn11p-02-sku8426110113)
