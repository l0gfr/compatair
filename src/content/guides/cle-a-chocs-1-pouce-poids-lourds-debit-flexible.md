---
title: "Clé à chocs 1 pouce pour poids lourds : débit en charge, flexible et réception"
seoTitle: "Clé à chocs 1 pouce PL : débit et flexible"
description: "Comparaison sourcée de deux clés à chocs 1 pouce pour montrer pourquoi le modèle exact, le débit en charge et le flexible dimensionnent le poste."
pubDate: 2026-07-19
category: "Choisir"
audiences: [professionnel]
metiers: [atelier-poids-lourds]
readingTime: 15
featured: true
relatedCalculatorTool: chicago-pneumatic-cp7776
sources:
  - https://tools.cp.com/tr-tr/products/impactwrenches/cp5000-skuT024585
  - https://tools.cp.com/en-us/products/impactwrenches/cp7776-sku8941077760
  - https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_vehicle-services/cp-vehicle-services-eng.pdf
  - https://www.inrs.fr/dms/inrs/CataloguePapier/ED/TI-ED-961/ed961.pdf
updatedDate: 2026-09-26
---

Le carré de 1 pouce ne dimensionne pas un poste poids lourds. Deux clés de la même marque et du même format peuvent publier des consommations en charge sensiblement différentes. Le réseau doit donc conserver le modèle exact, sa pression et son passage d’air.

## Réponse directe

Chicago Pneumatic publie pour la [CP5000](https://tools.cp.com/tr-tr/products/impactwrenches/cp5000-skuT024585) **25 L/s en charge** à **6,3 bar**, avec un flexible intérieur minimal de **13 mm sur 5 m**. La conversion donne 1 500 L/min.

La page de la [CP7776](https://tools.cp.com/en-us/products/impactwrenches/cp7776-sku8941077760) publie **33 cfm en charge**, **90 psi** et 13 mm sur 5 m. Le [catalogue Vehicle Services](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_vehicle-services/cp-vehicle-services-eng.pdf) donne également **15,6 L/s**, soit 936 L/min, pour la référence 8941077760.

Les deux outils ont un carré de 1 pouce et un flexible minimal publié identique sur 5 m. Leur demande en charge diffère pourtant de 564 L/min dans ces documents.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 355" role="img" aria-labelledby="one-inch-title one-inch-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="one-inch-title">Deux clés à chocs un pouce, deux consommations en charge</title><desc id="one-inch-desc">La CP7776 est publiée à neuf cent trente-six litres par minute et la CP5000 à mille cinq cents litres par minute en charge, toutes deux à environ six virgule trois bar.</desc>
  <rect width="760" height="355" rx="22" fill="#10281e"/><text x="38" y="46" fill="#d3eb56" font-size="15" font-weight="700">LE CARRÉ D’ENTRAÎNEMENT NE DONNE PAS LE DÉBIT</text>
  <text x="38" y="108" fill="#bed0c6" font-size="14">CP7776</text><rect x="175" y="82" width="374" height="42" rx="9" fill="#5f8974"/><text x="566" y="110" fill="white" font-size="19" font-weight="700">936 L/min</text>
  <text x="38" y="188" fill="#bed0c6" font-size="14">CP5000</text><rect x="175" y="162" width="540" height="42" rx="9" fill="#d3eb56"/><text x="570" y="190" fill="#143426" font-size="19" font-weight="700">1 500 L/min</text>
  <line x1="175" y1="251" x2="715" y2="251" stroke="#789586" stroke-width="2"/><text x="175" y="277" fill="#bed0c6" font-size="13">0</text><text x="687" y="277" fill="#bed0c6" font-size="13">1 500</text>
  <text x="38" y="320" fill="#bed0c6" font-size="13">Consommations en charge publiées. Aucune moyenne de catégorie n’est utilisée.</text>
</svg>
</div>

## Conserver le contexte des unités

La CP5000 est publiée à 25 L/s. Multiplier par 60 donne exactement 1 500 L/min. Le catalogue CP publie la CP7776 à 15,6 L/s, soit 936 L/min. La page américaine affiche 33 cfm, ce qui constitue le même ordre documentaire dans une autre unité.

Dans un dossier de décision, conservez la valeur d’origine, l’unité et le lien. La conversion peut être recalculée, tandis qu’une valeur isolée de son tableau perd son niveau de preuve.

Ces consommations sont qualifiées « en charge ». Ne les remplacez pas par une consommation moyenne générique. Pour dimensionner la pointe du poste, la valeur en charge reste la base défendable.

## Pression dynamique et flexible forment un couple

Les deux pages publient environ 6,3 bar de pression dynamique et 13 mm sur 5 m. Cette indication décrit le passage minimal dans une longueur précise. Elle ne valide pas un enrouleur de 15 mètres, une canalisation éloignée ou un coupleur dont le passage utile serait inférieur.

Lors de la réception, mesurez la pression au raccord pendant le fonctionnement. Si la production maintient la pression mais pas l’outil, contrôlez les portions successives : traitement, réseau fixe, descente, coupleurs et flexible terminal.

## Construire un scénario de service roues

La consommation en charge ne dit pas combien de secondes la gâchette reste actionnée. Relevez une séquence réelle : nombre d’écrous, durée cumulée d’action, intervalle entre deux roues, seconde clé active, gonflage ou soufflage simultané.

Préparez trois états :

- une baie seule dans un rythme courant ;
- une pointe avec deux usages superposés ;
- une séquence prolongée après plusieurs véhicules.

Pour chaque état, conservez pression au poste, état du compresseur et temps de récupération. La cuve peut soutenir une rafale, mais elle ne crée pas les 1 500 L/min continus demandés par une CP5000 maintenue en charge.

[Ouvrir le scénario CP5000](/calculateur/#scenario=poids-lourds-cp5000) ou [le scénario CP7776](/calculateur/#scenario=poids-lourds-cp7776) rend visibles la durée, le flexible et la fréquence proposés. Ces valeurs d’usage sont modifiables et ne sont pas présentées comme des données constructeur.

## Ne pas classer les outils par consommation

Un débit inférieur n’est pas automatiquement « meilleur ». Couple utile, mécanisme, poids, ergonomie, accès, maintenance et application attendue restent des critères distincts. Cette comparaison répond seulement à la question de l’alimentation pneumatique.

La fiche de choix doit donc porter plusieurs verdicts : capacité du réseau, adéquation mécanique, ergonomie, prévention et service. CompatAir ne transforme pas une proximité de débit en classement commercial absolu.

## Ajouter le gonflage comme poste séparé

Le démontage et le gonflage appartiennent au même parcours de roues, mais pas au même calcul. La brochure [INRS ED 961](https://www.inrs.fr/dms/inrs/CataloguePapier/ED/TI-ED-961/ed961.pdf) traite des risques propres aux pneumatiques et des distances de gonflage. L’aménagement de ce poste ne se déduit pas du flexible de la clé.

Si gonflage et clé fonctionnent simultanément, construisez une ligne de demande séparée avec volume, pression initiale, pression cible et temps. Si le volume est inconnu, la demande reste indéterminée.

## Recette d’acceptation

| Preuve | Contenu attendu |
| --- | --- |
| Outil | modèle, MPN, consommation en charge, pression |
| Distribution | longueurs, diamètres intérieurs, raccords |
| Production | FAD à une pression comparable |
| Exploitation | cadence et chevauchements observés |
| Mesure | pression au raccord pendant une séquence |
| Limites | notice, prévention et usages non couverts |

Une configuration est actionnable lorsque l’atelier peut la rejouer avec la même clé et le même chemin d’air. L’étiquette « 1 pouce » reste un identifiant mécanique, jamais une preuve de capacité pneumatique.

La [lecture des douilles à chocs et adaptateurs](/guides/douilles-choc-adaptateurs-carre-compatibilite/) complète le choix de la clé en distinguant l’interface mécanique et les données de couple.
