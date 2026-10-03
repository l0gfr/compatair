---
title: "Festo YSR-8-8-C : vérifier l’énergie par choc et par heure"
seoTitle: "Festo YSR-8-8-C : énergie, cadence et retour au froid"
description: "Un YSR-8-8-C peut respecter 3 J par choc tout en dépassant 18 000 J par heure. Vérifiez la cadence, le retour de tige et les conditions thermiques."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "verin-tape-fin-course-amortissement-ppv-pps", "verin-rotatif-pneumatique-couple-angle-inertie"]
sources: ["https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/34571.pdf"]
---

**Pour le Festo YSR-8-8-C, respecter 3 J sur un choc ne suffit pas : l’énergie maximale publiée par heure est de 18 000 J.** La cadence peut donc faire échouer une sélection qui semblait correcte à partir d’un seul impact.

La [fiche du YSR-8-8-C, référence 34571](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/34571.pdf) distingue ces deux limites. Elle publie également une course de **8 mm**, une vitesse d’impact maximale de **3 m/s**, et des temps de retour dépendant de la température. Le calcul doit conserver l’ensemble de ces conditions.

## Faire deux calculs sur le même cycle

Le bilan proposé consiste d’abord à déterminer l’énergie reçue lors d’un impact, puis à compter les impacts pendant l’heure de fonctionnement étudiée. Pour une énergie identique E et une cadence constante n en impacts par minute, le second total s’écrit : **E × n × 60**. Cette multiplication décrit un scénario, pas une cadence certifiée par Festo.

Avec un scénario de **3 J par impact et 120 impacts par minute**, le résultat est **21 600 J/h**. La première limite est atteinte ; la seconde est dépassée. Réduire la cadence à 100 impacts par minute donnerait exactement 18 000 J/h dans ce calcul. Un résultat égal au plafond ne valide cependant ni les autres contraintes ni une marge de conception.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="festo-ysr8-8-c-energie-cadence-temperature-svg-title festo-ysr8-8-c-energie-cadence-temperature-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="festo-ysr8-8-c-energie-cadence-temperature-svg-title">Deux plafonds énergétiques</title><desc id="festo-ysr8-8-c-energie-cadence-temperature-svg-desc">Scénario de calcul : 3 J par choc à 120 chocs/minute produit 21 600 J par heure. Le plafond de 18 000 J/h est dépassé alors que 3 J/choc est respecté.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="30" y="44" fill="white" font-size="23">YSR-8-8-C : choc et cadence</text><rect x="40" y="90" width="440" height="53" rx="8" fill="#203f31"/><rect x="40" y="90" width="366" height="53" rx="8" fill="#d3eb56"/><text x="55" y="124" fill="#10281e" font-size="21">18 000 J/h : plafond publié</text><rect x="40" y="190" width="440" height="53" rx="8" fill="#f5a798"/><text x="55" y="224" fill="#10281e" font-size="21">21 600 J/h : scénario dépassé</text><text x="40" y="286" fill="white" font-size="21">3 J × 120/min × 60 min = 21 600 J</text><text x="40" y="326" fill="white" font-size="19">Un choc admissible ne valide pas une heure.</text></g>
</svg>
<figcaption>Scénario de calcul : 3 J par choc à 120 chocs/minute produit 21 600 J par heure. Le plafond de 18 000 J/h est dépassé alors que 3 J/choc est respecté.</figcaption>
</figure>

## Les heures moyennées peuvent cacher la période utile

Si un convoyeur fonctionne intensivement pendant une phase puis reste à l’arrêt, joindre seulement sa moyenne sur une journée supprime une information nécessaire à l’étude. Décrivez les séquences actives, leur durée et leur cadence, puis demandez au fabricant comment appliquer la limite horaire à ce régime.

Le dossier doit également préciser si la masse est encore poussée pendant le freinage. Le [guide de force d’un vérin](/guides/force-verin-pneumatique-diametre-pression/) aide à retrouver la poussée, mais elle ne doit pas être assimilée directement à l’énergie totale. Pour le freinage interne d’un vérin, les [amortissements PPV et PPS](/guides/verin-tape-fin-course-amortissement-ppv-pps/) répondent à une autre sélection que celle de cet amortisseur extérieur.

## Le retour de tige change avec le froid

Festo donne un temps de retour de **0,2 s à température ambiante** et de **1 s à la température ambiante minimale**. La plage d’ambiance annoncée commence à **−10 °C** et finit à **80 °C**. Ces nombres rendent visible une autre contrainte : le retour doit être terminé avant l’impact suivant dans la configuration étudiée.

Un scénario à 120 impacts/minute espace les impacts de 0,5 s. Cette durée dépasse 0,2 s mais reste inférieure à 1 s. Le dossier ne peut donc pas retenir le seul temps de retour à température ambiante pour un poste devant fonctionner à la température minimale. Il faut confirmer le comportement dans les conditions thermiques prévues et le temps effectivement disponible entre impacts.

## Une ligne « 15 kg » ne remplace pas le bilan

La fiche porte une charge publiée (« Load range ») de 15 kg, ainsi qu’une force d’arrêt maximale de 500 N. Ces données ont des unités et des périmètres différents de l’énergie et de la vitesse. Une masse conforme ne suffit pas à accepter n’importe quelle vitesse ou cadence.

Pour réceptionner une modification, documentez la masse mobile, la vitesse au contact, la poussée éventuelle, la cadence et la température. Le [guide des vérins rotatifs et de l’inertie](/guides/verin-rotatif-pneumatique-couple-angle-inertie/) montre un autre cas où l’organe mobile doit être décrit avant de retenir une capacité.

La prochaine décision est de comparer le cycle complet aux critères de la référence, ou de transmettre ce cycle au constructeur pour choisir une taille adaptée. Si le cycle varie, conservez les cas qui changent réellement le bilan. Une réduction de pression destinée à réduire l’impact demande également une vérification du fonctionnement du mécanisme ; elle ne constitue pas une correction automatique.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
