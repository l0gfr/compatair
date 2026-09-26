---
title: "Pompe à membrane ARO 66605 : lire la courbe pour dimensionner l’air comprimé"
seoTitle: "Pompe ARO 66605 : débit d’air et courbe de performance"
description: "Distinguer débit de liquide, pression de refoulement et consommation d’air sur la courbe ARO 66605, avec les limites de la documentation constructeur."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 6
reviewStatus: internal
relatedGuides:
  - convertir-cfm-l-min-nl-min-air-comprime
  - utiliser-plusieurs-outils-pneumatiques
  - dimensionner-compresseur-garage-automobile
sources:
  - https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt4a7f56f74475fc47/67bdfdd19f36a11cbf1a81eb/15268519.pdf
  - https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt19a8e75e4a73440a/67bdfdcd018e20f8fa627222/99449712.pdf
---

Les **49,2 L/min** annoncés pour certaines pompes ARO 66605 représentent un **débit maximal de liquide**, pas leur consommation d’air comprimé. Acheter un compresseur en reprenant ce chiffre revient à confondre ce que la pompe transporte et ce qui la fait fonctionner.

La série 66605X-XXX offre un cas concret pour apprendre à lire une courbe à plusieurs grandeurs. Notre analyse utilise la [fiche technique ARO, révision G de 2015](https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt4a7f56f74475fc47/67bdfdd19f36a11cbf1a81eb/15268519.pdf), toujours reliée à la documentation constructeur lors de la consultation. Il faut vérifier son applicabilité à la référence complète et à la révision de votre pompe.

## Avant la courbe, définir le service demandé

Une demande exploitable précise le liquide, sa température, le débit souhaité, les conditions d’aspiration et la contre-pression à vaincre. Le suffixe de la référence identifie les matériaux ; il ne faut pas considérer toutes les 66605 comme interchangeables.

Dans la [notice ARO](https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt19a8e75e4a73440a/67bdfdcd018e20f8fa627222/99449712.pdf), les avertissements imposent notamment de vérifier la compatibilité des matériaux et du fluide. Cette vérification est séparée du dimensionnement pneumatique. Un bilan d’air correct n’établit pas qu’une membrane, un joint ou un corps conviennent au liquide transféré.

## Quatre informations sur un seul graphique

La page 2 de la fiche contient un graphique impérial et un graphique métrique. Sur ce dernier :

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Repères de lecture de la courbe ARO 66605">

| Repère | Grandeur | Utilisation |
| --- | --- | --- |
| Axe horizontal | Débit de liquide en L/min | Quantité à transférer |
| Axe vertical de refoulement | Pression / hauteur de refoulement | Résistance hydraulique du circuit |
| Courbes pleines identifiées 2,8 ; 4,8 ; 6,9 bar | Pression d’air d’alimentation | Courbe de fonctionnement à choisir |
| Courbes discontinues | Consommation d’air en L/s | Besoin d’air à relever au point considéré |

</div>


Les performances sont établies avec **de l’eau à température ambiante**. Elles ne sont pas une mesure de transfert d’huile usagée, de peinture ou de produit visqueux dans votre installation. La courbe NPSH présente sur le même document concerne les conditions d’aspiration ; elle n’est pas une quatrième courbe de consommation d’air.

## Lire un point sans fabriquer de précision

Placez le débit de liquide recherché sur l’axe horizontal, puis sa pression de refoulement sur l’axe vertical. Identifiez la courbe d’alimentation qui permet d’atteindre ce point. Lisez ensuite la famille des courbes discontinues pour estimer l’air correspondant.

Nous proposons de reporter **un intervalle** lorsque le point tombe entre deux courbes. Par exemple, une lecture encadrée entre 4 et 6 L/s conduit à un besoin situé entre **240 et 360 L/min** sur la même base de référence : `4 × 60` et `6 × 60`. Cet exemple explique la conversion ; il n’attribue pas ce débit à une application réelle ou à un point déterminé de la pompe.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Lire le liquide, puis lire l’air">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="aro-title aro-desc" xmlns="http://www.w3.org/2000/svg">
<title id="aro-title">Lire le liquide, puis lire l’air</title><desc id="aro-desc">Un point hydraulique combine débit liquide et refoulement. La courbe donne ensuite la pression d’alimentation et la consommation d’air. Exemple de conversion seulement : 4 à 6 L/s valent 240 à 360 L/min.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Lire le liquide, puis lire l’air</text>
<rect x="28" y="78" width="280" height="125" rx="12" fill="#203f31"/><text x="48" y="115" fill="#d3eb56" font-size="21">Besoin hydraulique</text><text x="48" y="153" fill="white" font-size="19">Débit de liquide</text><text x="48" y="181" fill="white" font-size="19">+ refoulement</text><path d="M321 141h61m-13-10 13 10-13 10" stroke="#d3eb56" stroke-width="4" fill="none"/><rect x="400" y="78" width="292" height="125" rx="12" fill="#203f31"/><text x="420" y="115" fill="#d3eb56" font-size="21">Besoin pneumatique</text><text x="420" y="153" fill="white" font-size="19">Pression d’alimentation</text><text x="420" y="181" fill="white" font-size="19">+ débit d’air</text><text x="28" y="259" fill="white" font-size="22">Conversion : 4 à 6 L/s = 240 à 360 L/min</text><text x="28" y="302" fill="white" font-size="17">Exemple de méthode, sans point de fonctionnement attribué.</text>
</svg>
</div>


Une valeur lue graphiquement n’a pas la précision d’un essai instrumenté. Si la sélection dépend d’un faible écart de débit, demandez au fabricant un point garanti pour le fluide et la configuration retenus. Ne transformez pas une interpolation visuelle en consommation exacte au dixième de litre.

## Calculer la durée de transfert séparément

**Scénario pédagogique :** transférer 60 litres à un débit liquide effectivement tenu de 20 L/min demande théoriquement `60 / 20 = 3 minutes`. Le calcul suppose un débit constant et ignore amorçage, pauses et résidus ; ces conditions doivent être vérifiées sur le procédé.

Si un essai de cette installation relevait simultanément 300 L/min d’air, trois minutes représenteraient 900 litres d’air sur la base de mesure retenue. **Les 300 L/min sont ici une hypothèse**, pas une consommation annoncée pour la 66605. Cette séparation évite de calculer un volume d’air à partir du seul débit de liquide.

## Quelle donnée transmettre pour sélectionner le compresseur ?

Notre fiche de consultation tient en un relevé cohérent : référence complète de pompe, fluide et température, point hydraulique accepté, pression d’air requise, consommation à ce point, conditions de référence du débit et durée de fonctionnement. Ajoutez les postes actifs en même temps et les pertes documentées de l’alimentation.

Le [guide des unités de débit](/guides/convertir-cfm-l-min-nl-min-air-comprime/) aide à comparer la consommation avec un FAD. Le [guide de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/) permet ensuite de replacer la pompe dans l’atelier.

## La version documentaire fait partie du verdict

La fiche étudiée donne une plage d’alimentation de 1,4 à 6,9 bar. Ce guide ne vaut pas autorisation d’utiliser une autre pression repérée sur une page commerciale ou une autre génération de pompe. Pour l’installation et les limites, faites prévaloir la notice applicable à l’équipement identifié et la confirmation du fabricant en cas de contradiction.

Sans ces éléments, le bon résultat du dimensionnement est « données insuffisantes ». La courbe permet de poser les bonnes questions ; elle ne remplace ni la validation du fluide ni l’essai du circuit.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [ARO, Sales & Engineering Data 66605X-XXX, révision G du 7 août 2015, pages 1 et 2](https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt4a7f56f74475fc47/67bdfdd19f36a11cbf1a81eb/15268519.pdf)
- [ARO, notice 66605X-X, document 99449712](https://azure-na-assets.contentstack.com/v3/assets/blt7de7417393caec8b/blt19a8e75e4a73440a/67bdfdcd018e20f8fa627222/99449712.pdf)
