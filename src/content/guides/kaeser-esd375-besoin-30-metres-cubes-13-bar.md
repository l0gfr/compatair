---
title: "KAESER ESD 375 : 30 m³/min à 13 bar ne se lisent pas sur la ligne 7,5 bar"
seoTitle: "KAESER ESD 375 : atteindre 30 m³/min à 13 bar ?"
description: "L’ESD 375 publie 37,85 m³/min à 7,5 bar et 24,34 à 13 bar selon la configuration. Comparez le besoin au bon point de pression."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["compresseur-piston-ou-vis-profil-charge", "debit-restitue-fad-vs-debit-aspire"]
sources:
  - https://id.kaeser.com/download.ashx?id=tcm:148-5935
---

Un besoin industriel de 30 m³/min peut sembler couvert par une brochure qui affiche 37,85 m³/min. Avec la KAESER ESD 375, cette valeur appartient à la ligne de 7,5 bar. Si le besoin se situe à 13 bar, il faut examiner une autre configuration et une autre ligne de débit. La puissance nominale commune ne rend pas ces points interchangeables.

## Deux configurations standard distinctes

Le tableau ESD 375 publie **37,85 m³/min à 7,5 bar**, avec une pression maximale de configuration de **8,5 bar**. Il publie aussi **24,34 m³/min à 13 bar**, avec une pression maximale de **15 bar**. Ces versions standard sont données avec un moteur nominal de **200 kW**. [Brochure KAESER, page PDF 12](https://id.kaeser.com/download.ashx?id=tcm:148-5935#page=12).

Les fiches des [ESD 375 à pression maximale 8,5 bar](/compresseurs/kaeser-esd-375-8-5-bar/) et [ESD 375 à pression maximale 15 bar](/compresseurs/kaeser-esd-375-15-bar/) gardent ces configurations séparées. Les 200 kW sont une puissance nominale du moteur, sans être transformés en consommation électrique instantanée ou annuelle.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 259" role="img" aria-labelledby="esd-pression-title esd-pression-desc">
<title id="esd-pression-title">Débits de deux configurations ESD 375</title><desc id="esd-pression-desc">Points déclarés du système complet. Le scénario à 13 bar ne peut pas utiliser le débit publié à 7,5 bar.</desc><rect width="440" height="259" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="16"><text x="24" y="32" fill="#d3eb56">Configuration maximale 8,5 bar</text><text x="24" y="56" fill="#eef2e9">37,85 m³/min mesurés à 7,5 bar</text><text x="24" y="89" fill="#d3eb56">Configuration maximale 15 bar</text><text x="24" y="113" fill="#eef2e9">24,34 m³/min mesurés à 13 bar</text><text x="24" y="146" fill="#d3eb56">Scénario : 30 m³/min à 13 bar</text><text x="24" y="170" fill="#eef2e9">Déficit arithmétique : 5,66 m³/min</text></g></svg>
<figcaption>Points déclarés du système complet. Le scénario à 13 bar ne peut pas utiliser le débit publié à 7,5 bar.</figcaption>
</figure>

## Le scénario de 30 m³/min est insuffisant au bon point

Retenons une demande de **30 m³/min à 13 bar**. Il s’agit d’un scénario CompatAir de dimensionnement, à remplacer par le relevé du projet. Au point publié de 13 bar, la version standard ESD 375 fournit 24,34 m³/min : l’écart vaut **5,66 m³/min**, soit **5 660 L/min**, avant toute réserve supplémentaire.

La version à pression maximale de 8,5 bar ne peut pas être retenue pour produire 13 bar, même si son débit à 7,5 bar dépasse 30 m³/min. Il n’est pas possible de combiner la pression maximale d’une version avec le débit d’une autre pour construire une machine fictive.

## La colonne SFC demande une lecture séparée

Le tableau publie également une **ESD 375 SFC**, avec une plage de débit de **6,40 à 27,48 m³/min à 13 bar**, dans la configuration maximale de 15 bar. Le haut de cette plage reste inférieur au scénario de 30 m³/min, avec un écart de **2,52 m³/min**, calcul sur les valeurs publiées. [Tableau SFC](https://id.kaeser.com/download.ashx?id=tcm:148-5935#page=12).

Cette plage décrit une variante à vitesse variable ; elle ne mesure pas une économie électrique pour le profil d’une usine. Son minimum ne définit pas non plus une consommation totale permanente d’installation. Pour une demande variable, établir le [profil de charge](/guides/compresseur-piston-ou-vis-profil-charge/) et examiner la régulation avec le fournisseur.

## Fixer la pression requise dans le cahier des charges

Le besoin doit préciser son emplacement : sortie de station, collecteur ou point d’utilisation. Les pertes du circuit et du traitement d’air doivent être documentées dans le projet. Une pression nécessaire au procédé n’est pas une raison suffisante pour reprendre une pression plus haute sans analyser l’installation.

Le débit de la brochure est celui du système complet dans les conditions de référence indiquées en note, avec ISO 1217, annexe C/E. Ce point de mesure ne constitue pas une observation de l’usine ni une preuve de service permanent pour la configuration livrée. [Note du tableau](https://id.kaeser.com/download.ashx?id=tcm:148-5935#page=12).

Le devis doit reprendre la version, les pressions, les points FAD et les conditions de service. Pour le scénario décrit, les maxima standard et SFC publiés à 13 bar ne couvrent pas 30 m³/min. Cette conclusion découle des points documentés ; elle ne remplace pas l’étude du réseau, du traitement d’air ou de la capacité de secours de l’installation.
