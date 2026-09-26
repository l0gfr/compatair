---
title: "Amplificateur d’air EXAIR 120021 : consommation, débit soufflé et compresseur"
seoTitle: "EXAIR 120021 : débit soufflé et air comprimé consommé"
description: "EXAIR 120021 : distinguer 229 SLPM consommés, 4 132 SLPM en sortie et l’air entraîné. Calcul d’un poste de soufflage et critères de comparaison."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
featured: false
reviewStatus: "internal"
relatedGuides: ["soufflette-garage-securite-bruit-consommation", "utiliser-plusieurs-outils-pneumatiques", "surpresseur-pneumatique-festo-dpa-pression-debit"]
sources:
  - https://www.exair.com/media/productcms/pdf/AirAmplifiers2_1.pdf
  - https://blog.exair.com/2021/03/26/exairs-super-air-amplifier-amplification-ratios-explained/
---

**Les 4 132 SLPM annoncés en sortie d’un EXAIR 120021 ne sont pas 4 132 SLPM d’air comprimé produits pour le réseau.** Le tableau constructeur associe cette valeur à une consommation de 229 SLPM d’air comprimé, à 5,5 bar d’alimentation. Le jet entraîne de l’air ambiant ; les deux chiffres décrivent des flux différents. [EXAIR, tableau de performances, page PDF 8](https://www.exair.com/media/productcms/pdf/AirAmplifiers2_1.pdf).

## Lire les trois colonnes sans les intervertir

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="EXAIR 120021 : trois débits distincts">

| Grandeur publiée | Valeur pour le 120021 | À quoi sert-elle ? |
| --- | --- | --- |
| Consommation d’air comprimé | 229 SLPM | Préparer le besoin sur le réseau d’air |
| Volume d’air en sortie | 4 132 SLPM | Décrire le jet total à la sortie |
| Volume d’air à 152 mm | 12 339 SLPM | Décrire un autre plan de mesure, après entraînement supplémentaire |

</div>

Le tableau est donné à **80 psig, soit 5,5 bar dans la publication**, avec une cale de 0,003 pouce, donnée pour 0,08 mm, pour ce modèle. Son rapport d’amplification publié est 18. Les arrondis expliquent que `4 132 / 229` donne environ 18,04 : cette division ne remplace pas le rapport constructeur et ne justifie pas une précision supplémentaire.

## D’où vient le volume d’air supplémentaire ?

EXAIR décrit un jet d’air comprimé qui entraîne l’air environnant. L’amplification concerne le volume total déplacé, et le volume continue à évoluer avec la distance considérée. Son [explication du rapport d’amplification](https://blog.exair.com/2021/03/26/exairs-super-air-amplifier-amplification-ratios-explained/) distingue la sortie de l’appareil et la mesure plus loin dans le jet.

Il ne s’agit donc pas d’une multiplication de FAD disponible sous pression pour alimenter une clé à chocs ou recharger une cuve. Pour une augmentation de pression, le [surpresseur pneumatique](/guides/surpresseur-pneumatique-festo-dpa-pression-debit/) répond à une autre question et consomme lui aussi de l’air.

<div class="article-infographic" tabindex="0" role="group" aria-label="EXAIR 120021 : suivre le bon flux">
<svg viewBox="0 0 680 404" role="img" aria-labelledby="amplificateur-title amplificateur-desc" xmlns="http://www.w3.org/2000/svg">
<title id="amplificateur-title">EXAIR 120021 : suivre le bon flux</title><desc id="amplificateur-desc">Air comprimé prélevé : 229 SLPM, à 5,5 bar dans le tableau. Jet total en sortie : 4 132 SLPM, avec de l’air ambiant entraîné. Jet total à 152 mm : 12 339 SLPM, à un autre plan de mesure. Données constructeur ; mêmes modèle, cale et pression.</desc>
<rect width="680" height="404" rx="20" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">EXAIR 120021 : suivre le bon flux</text>
<rect x="24" y="70" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="98" fill="#d3eb56" font-size="22" font-weight="700">Air comprimé prélevé</text><text x="40" y="126" fill="white" font-size="20">229 SLPM, à 5,5 bar dans le tableau.</text>
<rect x="24" y="158" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="186" fill="#d3eb56" font-size="22" font-weight="700">Jet total en sortie</text><text x="40" y="214" fill="white" font-size="20">4 132 SLPM, avec de l’air ambiant entraîné.</text>
<rect x="24" y="246" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="274" fill="#d3eb56" font-size="22" font-weight="700">Jet total à 152 mm</text><text x="40" y="302" fill="white" font-size="20">12 339 SLPM, à un autre plan de mesure.</text>
<text x="28" y="379" fill="white" font-size="19">Données constructeur ; mêmes modèle, cale et pression.</text>
</svg>
</div>

## Quel débit demander au compresseur pour deux postes ?

**Scénario pédagogique :** deux 120021 sont utilisés simultanément dans les conditions du tableau. Leur demande publiée cumulée est `2 × 229 = 458 SLPM`, avant les autres usages et pertes. Ce n’est ni 8 264 ni 24 678 SLPM d’air comprimé à produire : ces totaux additionneraient les colonnes de jet, qui incluent l’air entraîné.

Si, par hypothèse, les deux appareils soufflent ensemble 15 secondes par minute et ne prélèvent rien le reste du temps, leur demande moyenne théorique vaut `458 × 15 / 60 = 114,5 SLPM`. **La demande pendant le soufflage reste de 458 SLPM.** Ce cycle est choisi pour expliquer le calcul ; il n’a pas été observé dans un atelier et ne constitue pas une recommandation de cadence.

Pour comparer avec un compresseur, conservez les [conditions standard des débits](/guides/convertir-cfm-l-min-nl-min-air-comprime/) et le point de pression. Le [guide de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/) complète le scénario si les postes démarrent séparément.

## Comparer le travail rendu, pas seulement le rapport 18

Pour un poste à ventouses, le [guide des éjecteurs Schmalz SBPL](/guides/ejecteur-vide-schmalz-sbpl-consommation/) distingue également les flux : aspiration côté vide et prélèvement côté air comprimé.

Un rapport d’amplification ne démontre pas qu’un dispositif convient à toute pièce ou qu’il est le plus économique. Nous proposons de comparer les solutions sur le même résultat attendu : zone à traiter, distance, durée du soufflage et critère d’acceptation de la pièce. Sans cela, deux jets de volume différent ne répondent pas nécessairement à la même tâche.

Pour un essai de sélection, conservez la référence, la configuration, la pression à l’entrée et le cycle. Faites constater le résultat par le responsable du procédé avant de comparer les consommations. Ce protocole est une proposition CompatAir ; aucune économie chiffrée n’a été mesurée ici.

## Attention à l’air ambiant entraîné

Le principe décrit par EXAIR implique un mélange avec l’air du voisinage. Il serait donc incorrect de déduire la qualité du jet complet de la seule filtration installée sur l’alimentation comprimée. Cette limite est une conséquence du mélange, pas une mesure de contamination du modèle étudié.

Pour une application ayant une exigence de propreté, demandez une validation portant sur le flux qui atteint effectivement la pièce et sur l’environnement. Ne présentez pas le dispositif comme produisant un air respirable ou stérile sur la seule base du débit publié. Le [guide de qualité d’air](/guides/qualite-air-comprime-iso-8573-1/) permet de préciser les exigences à documenter.

## Les informations utiles dans une consultation fournisseur

Pour un besoin de refroidissement local, le [dossier EXAIR Cold Gun](/guides/pistolet-air-froid-exair-cold-gun-compresseur/) étudie les références standard et High Power ainsi que le volume d’air par opération.

Indiquez le nombre de postes, leur fonctionnement simultané, la pression disponible, le résultat demandé et la géométrie de l’application. Demandez ensuite la référence et la configuration proposées, leur consommation comprimée, les conditions de mesure du jet et le protocole de vérification.

Le bon choix est celui dont le service attendu et le besoin d’air sont démontrés dans ce cadre. Une grande valeur de débit soufflé, prise sans son plan de mesure, n’est pas un argument suffisant pour sélectionner le compresseur.

## Sources et périmètre

Sources consultées le **26 septembre 2026**. Analyse documentaire interne : CompatAir n’a pas réalisé d’essai physique de ces équipements. Les scénarios et calculs pédagogiques sont distingués des caractéristiques publiées.

- [EXAIR, catalogue Air Amplifiers, pages PDF 7 et 8 (pages imprimées 45 et 46)](https://www.exair.com/media/productcms/pdf/AirAmplifiers2_1.pdf)
- [EXAIR, explication des rapports d’amplification](https://blog.exair.com/2021/03/26/exairs-super-air-amplifier-amplification-ratios-explained/)
