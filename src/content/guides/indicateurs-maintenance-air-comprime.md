---
title: "Indicateurs de maintenance d’un réseau d’air comprimé : lire la dérive"
seoTitle: "Indicateurs maintenance air comprimé | CompatAir"
description: "Suivre pression, débit, fuites, états machine et qualité d’air sans score opaque, seuil universel ni confusion entre mesure, calcul et hypothèse."
pubDate: 2026-07-20
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 15
series: audit-suivi-maintenance-air-comprime
relatedGuides:
  - audit-reseau-air-comprime-protocole-mesures
  - fiche-intervention-air-comprime
  - mesurer-temps-charge-vide-compresseur
  - detecter-mesurer-fuites-air-comprime
  - qualite-air-comprime-iso-8573-1
sources:
  - https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf
  - https://www.iso.org/fr/standard/46580.html
  - https://www.cagi.org/performance-verification
---

Un bon tableau de bord d’air comprimé ne réduit pas le réseau à une note. Il montre quelques grandeurs comparables dans le temps, leurs conditions de mesure, leur limite et l’action déclenchée lorsqu’une dérive est confirmée.

Le [Sourcebook du Department of Energy américain](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf) recommande de suivre pression, débit et puissance pour établir une ligne de base. L’[ISO 11011:2013](https://www.iso.org/fr/standard/46580.html) demande une lecture du système entier, de l’alimentation à l’usage. Le choix final des indicateurs dépend donc du procédé et de la mesure réellement disponible.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 390" role="img" aria-labelledby="kpi-title kpi-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="kpi-title">Tableau de bord de maintenance d’un réseau d’air comprimé</title><desc id="kpi-desc">Quatre familles suivent le service, la distribution, la production et la qualité des données avant de déclencher une action.</desc>
  <rect width="760" height="390" rx="24" fill="#10281e"/><text x="38" y="48" fill="#d3eb56" font-size="15" font-weight="700">PAS DE SCORE UNIQUE, QUATRE LECTURES COMPARABLES</text>
  <g font-family="Manrope, sans-serif"><rect x="38" y="83" width="320" height="104" rx="16" fill="#28533f"/><text x="58" y="116" fill="white" font-size="18" font-weight="700">Service au point d’usage</text><text x="58" y="147" fill="#c8d7cf" font-size="13">pression dynamique · disponibilité</text><circle cx="325" cy="113" r="13" fill="#d3eb56"/>
  <rect x="402" y="83" width="320" height="104" rx="16" fill="#28533f"/><text x="422" y="116" fill="white" font-size="18" font-weight="700">Distribution</text><text x="422" y="147" fill="#c8d7cf" font-size="13">différentiels · fuites · restrictions</text><circle cx="689" cy="113" r="13" fill="#e39a5e"/>
  <rect x="38" y="214" width="320" height="104" rx="16" fill="#28533f"/><text x="58" y="247" fill="white" font-size="18" font-weight="700">Production</text><text x="58" y="278" fill="#c8d7cf" font-size="13">charge · à vide · débit · énergie</text><circle cx="325" cy="244" r="13" fill="#d3eb56"/>
  <rect x="402" y="214" width="320" height="104" rx="16" fill="#28533f"/><text x="422" y="247" fill="white" font-size="18" font-weight="700">Qualité de la preuve</text><text x="422" y="278" fill="#c8d7cf" font-size="13">source · instrument · scénario · date</text><circle cx="689" cy="244" r="13" fill="#d3eb56"/></g>
  <text x="380" y="357" text-anchor="middle" fill="white" font-size="16" font-weight="700">Une dérive devient actionnable quand elle est comparable et localisée.</text>
</svg>
</div>

## Réponse directe : suivre le service avant la machine

Le premier indicateur est le service rendu au point d’usage : pression disponible pendant le scénario, qualité d’air requise et continuité. Les indicateurs du compresseur expliquent ensuite comment ce service est produit. Cet ordre évite de célébrer une baisse d’énergie qui aurait dégradé le procédé.

Un tableau de bord minimal comporte quatre familles :

- service au point d’usage ;
- pertes et comportement de la distribution ;
- fonctionnement de la production ;
- qualité et comparabilité des données.

Il peut rester court. Chaque indicateur doit avoir un propriétaire, une source, une fréquence adaptée au phénomène et une règle d’action explicite.

## Pression disponible au point d’usage

La pression utile se mesure pendant que le procédé demande de l’air. Une pression de cuve au repos ne prouve pas que l’outil reçoit sa pression de travail.

Conservez au moins la valeur au point d’usage, la valeur en amont, le scénario et l’heure. La différence entre deux points pris au même moment localise une partie de la chute :

> Écart de pression du tronçon = pression amont moins pression aval.

Cette soustraction est un calcul. La cause reste à établir. Une dérive autour d’un filtre peut provenir de son état, de son dimensionnement, du débit traversant ou de l’instrumentation. Le guide [construire un profil de pression](/guides/diagnostiquer-chute-pression-air-comprime/) organise le diagnostic tronçon par tronçon.

Il n’existe pas de seuil unique pour tous les sites. La limite dépend de l’exigence du procédé, des spécifications des composants et de la ligne de base adoptée.

## Débit et demande du système

Le débit mesure ce qui traverse un point donné dans des conditions de référence. Notez ces conditions, la plage de l’instrument et les secteurs inclus. Deux valeurs exprimées dans la même unité peuvent rester non comparables si leurs références de température ou de pression diffèrent.

Les lectures utiles incluent :

- débit principal par scénario ;
- débit pendant les périodes sans usage productif ;
- débit d’un secteur avant et après isolement ;
- rapport entre demande de pointe et demande stabilisée, lorsque les deux fenêtres sont clairement définies.

Une hausse de débit n’est pas automatiquement une fuite. Elle peut correspondre à une cadence, un poste ou une purge supplémentaire. Le [guide de détection des fuites](/guides/detecter-mesurer-fuites-air-comprime/) sépare estimation globale, localisation et vérification des réparations.

## États de fonctionnement du compresseur

Le temps de marche ne dit pas à lui seul combien d’air utile a été produit. Pour une commande charge et décharge, distinguez charge, marche à vide et arrêt à partir des signaux définis par le fabricant.

La part de temps à vide se calcule ainsi :

> Durée à vide divisée par la durée totale observée.

Ce ratio décrit le temps, pas l’énergie. Pour obtenir l’énergie, il faut intégrer la puissance ou utiliser une mesure d’énergie. Les fiches du [programme de vérification CAGI](https://www.cagi.org/performance-verification) peuvent publier, selon les machines, une puissance totale à débit nul et une puissance à capacité nominale.

Le dossier [mesurer les temps en charge et à vide](/guides/mesurer-temps-charge-vide-compresseur/) précise le protocole et les limites d’interprétation.

## Puissance spécifique : utile seulement à conditions comparables

La puissance spécifique rapproche une puissance d’un débit livré. Elle devient trompeuse si le débit, la pression de refoulement, les auxiliaires ou les conditions de référence ne sont pas alignés.

CompatAir sépare les valeurs publiées, les mesures terrain et les calculs. Le guide [comparer la puissance spécifique](/guides/comparer-puissance-specifique-compresseurs/) détaille les précautions nécessaires. Dans le tableau de bord, conservez les entrées du ratio et pas seulement le résultat final.

## Fuites : suivre une campagne, pas un pourcentage isolé

Un programme de fuites peut suivre :

- nombre de défauts localisés ;
- nombre réparé puis vérifié ;
- délai entre détection et contre-mesure ;
- débit global dans une période sans usage productif ;
- récidives par zone ou composant.

Le nombre de fuites n’est pas leur débit. Dix petits défauts ne valent pas nécessairement un défaut important. Le taux de clôture ne prouve pas non plus une économie. Il prouve seulement que les dossiers possèdent une vérification finale.

Une économie demande au minimum un débit évité, les conditions de fonctionnement, l’énergie correspondante, les heures concernées et un prix daté. Si ces entrées manquent, la valeur financière reste `insufficient_data`.

## Qualité d’air : partir de l’exigence du procédé

Le point de rosée, les particules et l’huile ne sont pas des indicateurs universels de la même façon pour tous les usages. La classe ou la limite doit être reliée à l’exigence du procédé, à la notice de l’outil ou à une spécification contractuelle.

Le guide [qualité d’air et ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) explique pourquoi trois dimensions doivent être déclarées séparément. Un résultat global « qualité conforme » masque une éventuelle non-conformité sur un seul contaminant.

## Qualité des données : l’indicateur oublié

Une courbe ne devient décisionnelle que si son origine est exploitable. Ajoutez un statut de donnée visible :

- **complète** : point, instrument, scénario, unité et date sont conservés ;
- **partielle** : une information de contexte manque sans empêcher toute lecture ;
- **non comparable** : le changement de protocole bloque la comparaison ;
- **à confirmer** : la valeur est une hypothèse ou une saisie non vérifiée.

Ce vocabulaire qualifie la donnée, pas le réseau. Une installation peut être en dérive avec une excellente qualité de preuve, ou sembler stable avec des données insuffisantes.

## Lire une tendance sans inventer une alarme

Comparez les mesures à une ligne de base et à une limite documentée. Une valeur isolée ne suffit pas à établir une tendance. Trois niveaux de lecture peuvent être utilisés sans imposer de chiffre universel :

1. **dans la plage documentée** : aucune action autre que le suivi prévu ;
2. **écart à confirmer** : répéter la mesure ou contrôler le contexte ;
3. **dérive établie** : ouvrir un diagnostic avec la mesure et la limite applicables.

Le [suivi d’exploitation CompatAir](/suivi-exploitation/) conserve localement les contrôles successifs. Lorsqu’un écart est confirmé, le [diagnostic d’intervention](/diagnostic-intervention/) exige une action et une contre-mesure. La [maintenance préventive](/maintenance-preventive/) aide ensuite à repérer les récurrences sans inventer leur cause.

## Un tableau de bord actionnable

Pour chaque ligne, conservez : nom, définition, unité, source, périmètre, scénario, fréquence, ligne de base, limite, dernière valeur, statut de qualité et action attendue. Affichez les données brutes à côté des ratios les plus importants.

Le tableau de bord doit aussi permettre d’écrire « non mesuré » et « non comparable ». Masquer ces états derrière une moyenne ou une couleur verte produit une fausse certitude.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance, version 3](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf)
- [ISO 11011:2013, Air comprimé, efficacité énergétique, évaluation](https://www.iso.org/fr/standard/46580.html)
- [CAGI, Performance Verification Program](https://www.cagi.org/performance-verification)
