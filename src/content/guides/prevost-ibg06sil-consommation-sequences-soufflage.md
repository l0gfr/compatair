---
title: "Prevost IBG 06SIL : compter les séquences de soufflage sans masquer le débit instantané"
seoTitle: "Prevost IBG 06SIL : débit et séquences de soufflage"
description: "Une soufflette peut avoir un faible usage moyen et une demande instantanée importante. Construire un budget explicite en conservant les unités sources."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["garage-automobile", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["soufflette-garage-securite-bruit-consommation", "mesurer-temps-charge-vide-compresseur", "convertir-cfm-l-min-nl-min-air-comprime"]
sources: ["https://www.prevost.fr/sites/default/files/2021-12/BG%20DOC21FR%20web_0.pdf", "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49626"]
---

Une soufflette n’est pas forcément ouverte pendant toute l’heure. Son volume consommé sur une séquence et le débit qu’elle demande lorsqu’on l’actionne doivent être séparés. Avec la **[Prevost IBG 06SIL](/outils-pneumatiques/soufflette-prevost-ibg06sil/)**, une seconde précaution s’ajoute : deux documents du fabricant présentent des valeurs et des unités différentes.

La [brochure BG DOC21FR, page PDF 4](https://www.prevost.fr/sites/default/files/2021-12/BG%20DOC21FR%20web_0.pdf#page=4) donne **9 Nm³/h à 6 bar**. La [fiche officielle IBG 06SIL](https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49626) affiche **160 l/min à 6 bar**. Les documents consultés ne permettent pas d’établir que les conditions de référence et les versions sont identiques. Nous conservons donc cette différence, sans sélectionner silencieusement une valeur définitive.

## Un calcul de scénario dans une seule référence

Pour montrer la méthode, prenons **un scénario fictif** utilisant exclusivement la valeur de la brochure : trente ouvertures de dix secondes, au débit publié. Le temps total d’ouverture vaut 300 secondes, soit cinq minutes. Le volume correspondant est :

**9 Nm³/h × 5/60 h = 0,75 Nm³**.

Si ces ouvertures se répartissent sur une heure, leur contribution moyenne vaut **0,75 Nm³/h sur cette heure**. Pendant chaque ouverture supposée au débit publié, la demande reste **9 Nm³/h**. Ce calcul suppose un débit identique pendant chaque ouverture ; il ne décrit ni un opérateur observé ni une ouverture progressive réelle.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Même scénario, deux grandeurs" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="prevost-sequence-title prevost-sequence-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="prevost-sequence-title">Même scénario, deux grandeurs</title><desc id="prevost-sequence-desc">Exemple fictif calculé à partir de la brochure. Les durées ne sont pas des mesures d’atelier et la différence avec la fiche actuelle reste non arbitrée.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Même scénario, deux grandeurs</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Pendant l’ouverture</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">9 Nm³/h : hypothèse brochure</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">30 ouvertures de 10 secondes</text><text x="45" y="228" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">300 secondes au total</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Sur l’heure du scénario</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Volume calculé : 0,75 Nm³</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Moyenne calculée : 0,75 Nm³/h</text><text x="45" y="438" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Demande instantanée distincte</text></svg>
</div>

*Exemple fictif calculé à partir de la brochure. Les durées ne sont pas des mesures d’atelier et la différence avec la fiche actuelle reste non arbitrée.*

## Ce que ce calcul apporte au dimensionnement

Il permet de décrire les séquences au lieu d’appliquer un pourcentage d’usage trouvé au hasard. Il ne démontre pas que le réseau maintient la pression pendant les ouvertures. Pour cette seconde question, relevez les consommateurs simultanés et la pression au poste selon les moyens de mesure prévus par l’installation.

Dans le dossier destiné au fournisseur du compresseur, gardez les unités de chaque source. Une quantité exprimée en Nm³ ne doit pas devenir un volume de cuve à pression de stockage par une simple copie. Le guide sur les [CFM, SCFM et litres normalisés](/guides/convertir-cfm-l-min-nl-min-air-comprime/) traite les conditions de référence qu’il faut établir pour une comparaison.

La brochure permet aussi un soufflage progressif. Si l’opérateur module l’ouverture, le calcul à débit constant devient une hypothèse de scénario à signaler. Une mesure de débit ou une caractérisation applicable peut fournir un autre profil ; la durée seule ne donne pas ce profil réel.

## Comment traiter les deux valeurs constructeur

Demandez à Prevost quelle fiche s’applique à la référence livrée, avec les conditions du débit, la version et la pression. Conservez les deux documents dans le dossier tant que la réponse ne tranche pas. La proximité des nombres après conversion d’unités ne prouve pas une équivalence de mesure.

Le dimensionnement attend donc **un débit applicable à la version et un profil d’usage explicite**, avec contrôle de l’alimentation pendant les ouvertures. Le guide sur la [soufflette au garage](/guides/soufflette-garage-securite-bruit-consommation/) traite le choix de buse et les conditions de travail. Le [relevé des temps de charge](/guides/mesurer-temps-charge-vide-compresseur/) aide ensuite à constater ce que le compresseur fait pendant ces séquences.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
