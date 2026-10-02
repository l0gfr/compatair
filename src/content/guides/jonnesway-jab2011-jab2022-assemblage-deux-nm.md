---
title: "Assemblage à 2 N·m : Jonnesway JAB-2011 ou JAB-2022 ?"
seoTitle: "Jonnesway JAB-2011 ou JAB-2022 pour serrer à 2 N·m ?"
description: "Deux visseuses peuvent couvrir le même couple sans avoir la même vitesse. Lire les plages Jonnesway, vérifier le joint et préparer l’essai de serrage."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["groupe-frl-filtre-regulateur-lubrificateur", "puma-at5348-deux-consommations-documentation"]
sources:
  - https://www.jonnesway.com/pImages/JAB-2011_12_21_22_666.jpg
---

Un poste d’assemblage doit serrer une vis à **2 N·m**, selon une prescription propre à la pièce. Cette valeur est ici un exemple de cahier des charges, et non une recommandation générale pour une vis M4. Dans la gamme Jonnesway, les JAB-2011 et JAB-2022 couvrent toutes deux cette valeur. Leur vitesse à vide diffère pourtant fortement. Le choix demande un essai sur l’assemblage réel.

La [fiche technique Jonnesway commune aux quatre versions](https://www.jonnesway.com/pImages/JAB-2011_12_21_22_666.jpg) présente des visseuses à arrêt automatique et contrôle du couple. Elle fournit la plage, la vitesse, la géométrie et la consommation moyenne. Elle ne donne pas une tolérance de serrage garantie à 2 N·m sur votre pièce.

## Deux candidates dans la plage, deux autres à écarter pour ce besoin

| Référence | Capacité indiquée | Plage de couple publiée | Vitesse à vide |
| --- | --- | --- | --- |
| JAB-2011 | M4 | 1,4 à 2,6 N·m | 1 400 tr/min |
| JAB-2012 | M3,5 | 0,9 à 1,6 N·m | 1 400 tr/min |
| JAB-2021 | M5 | 2,2 à 4,3 N·m | 800 tr/min |
| JAB-2022 | M4 | 1,9 à 2,8 N·m | 800 tr/min |

Pour la consigne d’exemple à 2 N·m, les JAB-2012 et JAB-2021 ne conviennent pas à une sélection fondée sur leur plage publiée : l’une s’arrête à 1,6, l’autre commence à 2,2. Leur ressemblance extérieure ne justifie pas d’étendre ces plages.

Les [JAB-2011](/outils-pneumatiques/visseuse-jonnesway-jab-2011/) et [JAB-2022](/outils-pneumatiques/visseuse-jonnesway-jab-2022/) restent deux candidates. Le tableau leur attribue la même longueur de 285 mm, une masse de 0,95 kg et une arrivée d’air de 1/4 pouce. La géométrie publiée ne les départage donc pas comme le ferait, par exemple, une version plus courte.

## Le bas de la plage mérite un contrôle spécifique

Avec la JAB-2022, 2 N·m se trouve seulement 0,1 N·m au-dessus du minimum publié. Avec la JAB-2011, la consigne se situe 0,6 N·m au-dessus du minimum et 0,6 sous le maximum. Ce calcul décrit la position dans la plage ; il ne démontre aucune différence de précision.

Le catalogue ne donne pas ici de courbe de répétabilité, d’incertitude ou de dérive en fonction du réglage. On ne peut donc pas attribuer une meilleure précision à la JAB-2011 simplement parce que 2 N·m est au milieu de sa plage. Cette position fournit une raison de demander des données d’essai, pas un résultat d’essai.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 255" role="img" aria-labelledby="jab-two-title jab-two-desc">
<title id="jab-two-title">Plages publiées autour d’une consigne hypothétique de deux newton-mètres</title>
<desc id="jab-two-desc">La consigne de deux newton-mètres appartient aux plages 1,4 à 2,6 et 1,9 à 2,8. Elle ne renseigne pas la précision obtenue sur le joint.</desc>
<rect width="440" height="255" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="14" fill="#eef2e9">
<text x="22" y="30">Consigne d’exemple : 2 N·m</text>
<text x="22" y="78">JAB-2011</text><text x="176" y="78">1,4 à 2,6</text>
<text x="22" y="146">JAB-2022</text><text x="268" y="146">1,9 à 2,8</text>
<text x="180" y="217">2 N·m</text><text x="22" y="241">La plage n’indique pas la précision du serrage</text>
</g><path d="M110 100H410M110 168H410" stroke="#315341" stroke-width="8"/>
<path d="M170 100H350M245 168H380" stroke="#d3eb56" stroke-width="8"/>
<path d="M260 86V186" stroke="#eef2e9" stroke-width="2" stroke-dasharray="4 4"/>
</svg>
<figcaption>Échelle linéaire de 1 à 3 N·m ; la ligne représente la consigne du scénario, sans mesure de performance.</figcaption>
</figure>

## La vitesse se vérifie sur le travail, sans promettre un temps de cycle

La vitesse à vide de 1 400 tr/min dépasse celle de 800 tr/min. Cela ne permet pas de calculer directement un gain de production. La durée réelle dépend du nombre de tours, de l’engagement, de la résistance du joint, de l’approche et des manipulations.

Préparez un essai avec les vis, pièces, embouts et conditions d’alimentation du poste. Relevez le temps complet de l’opération, les arrêts obtenus et les reprises éventuelles. Vérifiez le résultat avec le moyen de contrôle retenu pour l’assemblage. La fiche fabricant ne remplace ni la consigne de la pièce ni la qualification du procédé.

Si l’engagement du filetage est délicat, l’essai doit inclure cette phase. Une vitesse supérieure ne constitue pas un avantage acquis lorsque l’opérateur doit corriger la prise ou recommencer une opération. À l’inverse, aucune donnée consultée ne démontre qu’une JAB-2022 serait automatiquement plus sûre ou plus précise grâce à sa vitesse inférieure.

## Les deux affichent 198 L/min, sans maximum en charge établi

La fiche indique **198 L/min, soit 7 CFM selon son arrondi**, sous l’intitulé de consommation moyenne, ainsi qu’une pression d’air de 90 psi. Les deux machines ont donc la même consommation moyenne publiée. Choisir la vitesse inférieure ne garantit pas une moindre demande de pointe.

Le tableau ne précise pas ici le maximum en charge ni le protocole de cette moyenne. CompatAir conserve la valeur et son intitulé ; elle ne ferme pas le verdict du compresseur. Demandez ces informations avant d’équiper plusieurs postes simultanés. Le [groupe de préparation d’air](/guides/groupe-frl-filtre-regulateur-lubrificateur/) doit ensuite suivre les instructions de la référence livrée.

Pour un achat, joignez au devis la consigne de 2 N·m, le type d’assemblage, le contrôle attendu et les résultats de l’essai. Vous disposez alors d’un choix traçable entre deux candidates, au lieu d’une sélection fondée uniquement sur leur couple maximal.
