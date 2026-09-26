---
title: "Clé à impulsions : pourquoi le débit à vide peut dépasser celui en charge"
seoTitle: "Clé à impulsions : débit à vide ou en charge ?"
description: "Les Cleco PHH publient parfois plus de débit à vide qu’en charge. Lire les deux phases et dimensionner sans appliquer un cycle de travail imaginaire."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["cle-a-impulsions-ou-cle-a-chocs-air-comprime", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf"]
---

**Le débit « en charge » n’est pas toujours la plus grande consommation publiée.** Sur certaines clés à impulsions, la rotation à vide appelle davantage d’air. Pour dimensionner un poste, il faut lire les colonnes et conserver les phases au lieu d’adopter automatiquement celle qui semble la plus sévère.

## Deux lignes révélatrices

Le [catalogue Cleco GI-1250-EU, page 86](https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86), distingue vitesse à vide et charge pour les séries H. Les performances sont données à **6 bar**, et non 6,2 ou 6,3 bar.

| Référence | Arrêt automatique de la série | Débit à vide | Débit en charge |
| --- | --- | --- | --- |
| 7PTHH352 | Oui | 0,10 m³/min | 0,25 m³/min |
| 7PHH602 | Non | 0,30 m³/min | 0,25 m³/min |

Sur la première référence, la valeur en charge est supérieure. Sur la seconde, c’est la valeur à vide. La conversion donne respectivement 100/250 et 300/250 L/min. Le régime le plus consommateur ne se déduit donc pas du seul nom « clé à impulsions ».

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="7PHH602 : consommations publiées en L/min">
<svg viewBox="0 0 380 300" role="img" aria-labelledby="pulseflow-title pulseflow-desc" xmlns="http://www.w3.org/2000/svg"><title id="pulseflow-title">7PHH602 : consommations publiées en L/min</title><desc id="pulseflow-desc">À vide: 300 ; En charge: 250</desc><rect width="380" height="300" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">7PHH602 : consommations</text><text x="20" y="60" font-size="20" font-weight="700" fill="#143426">publiées en L/min</text><text x="20" y="112" font-size="16" font-weight="700" fill="#143426">À vide</text><rect x="20" y="126" width="250.00" height="23" rx="4" fill="#19704f"/><text x="352" y="144" text-anchor="end" font-size="16" fill="#143426">300</text><text x="20" y="183" font-size="16" font-weight="700" fill="#143426">En charge</text><rect x="20" y="197" width="208.33" height="23" rx="4" fill="#19704f"/><text x="352" y="215" text-anchor="end" font-size="16" fill="#143426">250</text><text x="20" y="254" font-size="13" font-weight="400" fill="#35473d">Source : Cleco GI-1250-EU, page 86 ;</text><text x="20" y="273" font-size="13" font-weight="400" fill="#35473d">performances à 6 bar.</text></svg>
</div>

## Ce que le calcul peut faire sans chronométrage

La [fiche 7PHH602](/outils-pneumatiques/cleco-7phh602/) retient la plus élevée des deux consommations publiées pour sa référence de dimensionnement : 300 L/min. Cela évite de présenter 250 L/min comme une enveloppe couvrant toutes les phases documentées. Les deux données restent visibles, avec leur sens.

Cette sélection conservatrice n’est pas une mesure de la consommation moyenne de votre chaîne. Elle ne fournit pas non plus la durée pendant laquelle l’outil consomme ce débit. Pour établir un bilan d’énergie ou de production, il faut un cycle observé ou une mesure adaptée.

Pour la [7PTHH352](/outils-pneumatiques/cleco-7pthh352/), le maximum des deux valeurs est au contraire 250 L/min. Le mécanisme d’arrêt est une autre différence à conserver ; il ne faut pas transformer la comparaison de débit en promesse de qualité de serrage.

## Relever les phases d’un cycle réel

Sur un poste représentatif, décrivez la présentation de l’outil, la rotation d’approche, la phase de serrage, les reprises et les temps sans consommation. Utilisez la méthode d’observation ou de mesure autorisée par l’organisation du poste. La durée de la commande actionnée ne doit pas être remplacée par un pourcentage choisi pour rendre le compresseur compatible.

Si plusieurs postes fonctionnent ensemble, conservez aussi leurs chevauchements. Additionner des moyennes sur une heure peut masquer une pointe de demande commune. Le guide [plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) détaille cette différence entre bilan moyen et besoin simultané.

La pression de référence reste celle de la preuve : 6 bar dans ce tableau. Remplacer cette valeur par « la pression habituelle des outils » mélangerait des conditions différentes. Les chiffres présentés proviennent d’un catalogue fabricant archivé, sans essai physique CompatAir ni mesure de cycle dans votre atelier.
