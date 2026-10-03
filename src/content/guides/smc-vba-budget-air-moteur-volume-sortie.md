---
title: "SMC VBA : compter l’air d’entraînement en plus du volume utile"
seoTitle: "SMC VBA : consommation moteur et besoin d’air amont"
description: "Un VBA consomme de l’air pour augmenter la pression. Distinguez volume utile, entraînement et besoin total, puis vérifiez la pointe du cycle."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "convertir-cfm-l-min-nl-min-air-comprime", "smc-vba-redemarrage-ecart-pression"]
sources: ["https://www.smcworld.com/catalog/en/frl/VBA-E/6-6-p1007-1038-vba_en/data/6-6-p1007-1038-vba_en.pdf"]
---

**Le réseau qui alimente un surpresseur SMC VBA doit fournir davantage d’air que le volume utile livré en sortie.** Le mécanisme est lui-même entraîné par l’air comprimé. Compter seulement l’utilisateur aval sous-estime le besoin amont.

Le [catalogue VBA, page imprimée 1014](https://www.smcworld.com/catalog/en/frl/VBA-E/6-6-p1007-1038-vba_en/data/6-6-p1007-1038-vba_en.pdf#page=8) distingue consommation du surpresseur et capacité nécessaire à l’entrée. Pour un rapport de pression **2**, il donne environ **1,2 fois** le volume aval consommé par le mécanisme, soit environ **2,2 fois** ce volume à fournir en amont. Pour un rapport **4**, les valeurs deviennent environ **3,7 fois** et **4,7 fois**. Ce sont des coefficients approximatifs publiés, pas des rendements mesurés sur votre installation.

## Le facteur du moteur n’est pas le facteur total

Une demande fictive de 100 unités de volume aval conduit, avec ces coefficients, à environ 120 unités pour le mécanisme et 220 unités à l’entrée au rapport 2. Au rapport 4, elle conduit à environ 370 et 470 unités. L’exemple garde une même convention de volume ; il ne convertit pas implicitement des litres à une pression quelconque en litres d’air libre.

La distinction change un devis. Une ligne « consommation : 1,2 × sortie » n’est pas suffisante pour annoncer que le réseau n’a besoin que de 1,2 × sortie au total. Conservez les deux colonnes, avec leur convention et le point de fonctionnement.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-vba-budget-air-moteur-volume-sortie-svg-title smc-vba-budget-air-moteur-volume-sortie-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-vba-budget-air-moteur-volume-sortie-svg-title">Le besoin amont comprend aussi le moteur pneumatique</title><desc id="smc-vba-budget-air-moteur-volume-sortie-svg-desc">Coefficients approximatifs du catalogue VBA : à un rapport de pression 2, volume amont 2,2 fois le volume aval ; à un rapport 4, volume amont 4,7 fois le volume aval. Les conditions et la courbe du modèle restent nécessaires.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="23">VBA : compter tout l’air amont</text><rect x="35" y="95" width="448" height="65" rx="8" fill="#203f31"/><rect x="35" y="95" width="203" height="65" rx="8" fill="#d3eb56"/><text x="48" y="124" fill="#10281e" font-size="18">Aval : 1 volume</text><text x="255" y="124" fill="white" font-size="18">Moteur : ≈ 1,2</text><text x="45" y="186" fill="white" font-size="17">Rapport 2 : amont ≈ 2,2 volumes</text><rect x="35" y="211" width="448" height="65" rx="8" fill="#203f31"/><rect x="35" y="211" width="95" height="65" rx="8" fill="#d3eb56"/><text x="48" y="241" fill="#10281e" font-size="16">Aval : 1</text><text x="190" y="241" fill="white" font-size="18">Moteur : ≈ 3,7</text><text x="45" y="302" fill="white" font-size="17">Rapport 4 : amont ≈ 4,7 volumes</text><text x="28" y="332" fill="white" font-size="20">Le rapport de pression ne crée pas d’air.</text></g>
</svg>
<figcaption>Coefficients approximatifs du catalogue VBA : à un rapport de pression 2, volume amont 2,2 fois le volume aval ; à un rapport 4, volume amont 4,7 fois le volume aval. Les conditions et la courbe du modèle restent nécessaires.</figcaption>
</figure>

## Vérifier aussi ce qui se passe pendant le mouvement

La même page demande de sélectionner le surpresseur avec le débit moyen, puis d’examiner le besoin de réservoir à partir du débit instantané maximal. Son exemple de vérin publie **146 L/min (ANR) en moyenne** et **877 L/min (ANR) instantanés**. Les nombres appartiennent au cycle et aux dimensions de cet exemple ; ils ne sont pas des capacités universelles du VBA.

Le réservoir devient nécessaire dans la méthode présentée si le débit fourni au point de fonctionnement couvre la moyenne mais reste sous le maximum instantané. Sa taille se calcule ensuite avec les pressions, le cycle et les temps de recharge. Ajouter une cuve sans ces conditions ne qualifie pas l’alimentation.

| À distinguer | Vérification correspondante |
| --- | --- |
| Volume utile aval | Besoin réel de l’actionneur et des conduites |
| Consommation du mécanisme | Coefficient publié pour le rapport étudié |
| Capacité totale amont | Volume utile et entraînement réunis |
| Débit instantané | Courbe au point de fonctionnement et stockage éventuel |
| Référence du volume | Convention ANR ou autre convention explicitement établie |

## Préparer la sélection avec les données du cycle

Relevez pressions amont et aval, volume de l’actionneur, conduites, durée de mouvement et fréquence. Le [guide d’utilisation de plusieurs outils](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à séparer fonctionnement simultané et moyenne ; le [guide des volumes normalisés](/guides/convertir-cfm-l-min-nl-min-air-comprime/) permet de contrôler la convention avant comparaison.

La courbe et la sélection restent celles du modèle VBA, avec les limites de pression. Le [cas VBA de redémarrage](/guides/smc-vba-redemarrage-ecart-pression/) examine un autre problème : un faible écart de pression peut perturber le mécanisme même quand un calcul moyen semblait suffisant. Si la pression amont baisse pendant le cycle, le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) aide à localiser la perte.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
