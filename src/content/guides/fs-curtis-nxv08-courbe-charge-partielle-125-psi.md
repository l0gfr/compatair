---
title: "FS-Curtis NXV08 : le variateur est-il efficace quand l’atelier consomme peu ?"
seoTitle: "FS-Curtis NXV08 : lire la courbe à charge partielle"
description: "À 125 psig, la fiche NXV08 publie cinq points de puissance et débit. Utilisez leur courbe pour examiner un petit besoin, sans extrapoler sous 15,09 ACFM."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-vitesse-variable-vsd-rentabilite-atelier", "comparer-puissance-specifique-compresseurs", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://us.fscurtis.com/wp-content/uploads/page/65/nxv08-125_072021.pdf"]
---

**La consommation électrique du NXV08 diminue avec le débit sur les points publiés, mais sa puissance spécifique ne diminue pas partout.** Un variateur ne garantit donc pas que le plus petit besoin sera le point le plus économique par volume d’air produit.

La [fiche FS-Curtis NXV08-125 du 3 mars 2021, tableau 8](https://us.fscurtis.com/wp-content/uploads/page/65/nxv08-125_072021.pdf#page=1) donne cinq couples à **125 psig**. À **40,48 ACFM**, la puissance absorbée est **9,5 kW** ; à **15,09 ACFM**, elle est **4,5 kW**. Entre les deux, les points publiés sont 35,43 ACFM/8,3 kW, 30,38 ACFM/6,7 kW et 25,16 ACFM/5,7 kW.

## Lire deux courbes pour deux décisions

La puissance totale sert au calcul d’énergie sur une durée. La puissance spécifique, en kW pour 100 ACFM, sert à comparer l’efficacité par débit au point considéré. La fiche publie **22,05** à 30,38 ACFM et **29,82** à 15,09 ACFM : la puissance totale est plus petite au second point, tandis que la puissance spécifique est plus élevée.

<div class="article-infographic article-infographic--compact" role="group" aria-label="NXV08-125 : les cinq points publiés" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fs-curtis-nxv08-courbe-charge-partielle-125-psi-title fs-curtis-nxv08-courbe-charge-partielle-125-psi-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="fs-curtis-nxv08-courbe-charge-partielle-125-psi-title">NXV08-125 : les cinq points publiés</title><desc id="fs-curtis-nxv08-courbe-charge-partielle-125-psi-desc">Reprise des cinq points FS-Curtis. Le tracé relie les observations pour la lecture et ne fournit aucun point d’essai supplémentaire.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">NXV08-125 : les cinq points publiés</text><path d="M70 110v320h400" fill="none" stroke="#9ebdad" stroke-width="2"/><path d="M70 430.00h400" fill="none" stroke="#365a47"/><text x="58" y="436.0" fill="#9ebdad" font-size="17" text-anchor="end" font-weight="400">20</text><path d="M70 323.33h400" fill="none" stroke="#365a47"/><text x="58" y="329.33333333333337" fill="#9ebdad" font-size="17" text-anchor="end" font-weight="400">25</text><path d="M70 216.67h400" fill="none" stroke="#365a47"/><text x="58" y="222.66666666666669" fill="#9ebdad" font-size="17" text-anchor="end" font-weight="400">30</text><path d="M70 110.00h400" fill="none" stroke="#365a47"/><text x="58" y="116.0" fill="#9ebdad" font-size="17" text-anchor="end" font-weight="400">35</text><path d="M70.00 430v7" stroke="#9ebdad"/><text x="70.0" y="463" fill="#ffffff" font-size="17" text-anchor="middle" font-weight="400">10</text><path d="M184.29 430v7" stroke="#9ebdad"/><text x="184.28571428571428" y="463" fill="#ffffff" font-size="17" text-anchor="middle" font-weight="400">20</text><path d="M298.57 430v7" stroke="#9ebdad"/><text x="298.57142857142856" y="463" fill="#ffffff" font-size="17" text-anchor="middle" font-weight="400">30</text><path d="M412.86 430v7" stroke="#9ebdad"/><text x="412.85714285714283" y="463" fill="#ffffff" font-size="17" text-anchor="middle" font-weight="400">40</text><path d="M470.00 430v7" stroke="#9ebdad"/><text x="470.0" y="463" fill="#ffffff" font-size="17" text-anchor="middle" font-weight="400">45</text><polyline points="128.17,220.51 243.26,373.25 302.91,386.27 360.63,356.83 418.34,355.97" fill="none" stroke="#d3eb56" stroke-width="3"/><circle cx="128.17" cy="220.51" r="5" fill="#d3eb56"/><text x="128.17142857142858" y="205.50666666666666" fill="#d3eb56" font-size="16" text-anchor="middle" font-weight="400">29,82</text><circle cx="243.26" cy="373.25" r="5" fill="#d3eb56"/><text x="243.25714285714287" y="358.25333333333333" fill="#d3eb56" font-size="16" text-anchor="middle" font-weight="400">22,66</text><circle cx="302.91" cy="386.27" r="5" fill="#d3eb56"/><text x="302.9142857142857" y="371.26666666666665" fill="#d3eb56" font-size="16" text-anchor="middle" font-weight="400">22,05</text><circle cx="360.63" cy="356.83" r="5" fill="#d3eb56"/><text x="360.62857142857143" y="341.82666666666665" fill="#d3eb56" font-size="16" text-anchor="middle" font-weight="400">23,43</text><circle cx="418.34" cy="355.97" r="5" fill="#d3eb56"/><text x="418.3428571428571" y="340.97333333333336" fill="#d3eb56" font-size="16" text-anchor="middle" font-weight="400">23,47</text><text x="90" y="505" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Débit publié en ACFM</text><text x="70" y="80" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">Puissance spécifique : kW / 100 ACFM</text></svg>
</div>

*Reprise des cinq points FS-Curtis. Le tracé relie les observations pour la lecture et ne fournit aucun point d’essai supplémentaire.*

Cela ne rend pas automatiquement le compresseur inadapté à un atelier qui consomme peu. La question est combien de temps il passe dans chaque situation, comment il s’arrête et ce que proposent les alternatives aux mêmes pressions. Le [guide sur la puissance spécifique](/guides/comparer-puissance-specifique-compresseurs/) aide à lire cette différence sans transformer une courbe en classement universel.

## Faire un relevé de demande qui correspond au devis

Le relevé doit conserver le débit demandé, la pression, les arrêts et les usages simultanés sur des journées représentatives. Évitez une seule moyenne quotidienne : elle peut mélanger une longue pause et une pointe, sans décrire un fonctionnement intermédiaire réel. Une courbe de puissance n’efface pas cette distinction.

Pour un scénario calculé de trois heures à 30,38 ACFM et trois heures à 15,09 ACFM, l’énergie des points publiés serait 3 × 6,7 + 3 × 4,5 = **33,6 kWh**. Les durées sont fictives ; le calcul illustre seulement la manière de pondérer des points. Aucune consommation réelle d’atelier n’est attribuée à cette machine.

En réception, faire rapprocher les mesures locales du point de commande réellement demandé, avec la configuration électrique et la version exactes. La fiche ancienne doit être confirmée pour l’offre actuelle. Une référence identique dans le nom commercial ne dispense pas de cette confirmation.

## La partie absente du graphique reste absente

Le plus faible débit du tableau est 15,09 ACFM. Nous ne le présentons pas comme une limite mécanique certifiée, ni comme la preuve d’un fonctionnement stable à tous les débits supérieurs. C’est le plus bas **point documenté dans cette fiche**. Une demande inférieure appelle des informations supplémentaires sur régulation, veille, réserve et reprises.

Le zéro affiché à débit nul possède également une note de méthode dans la fiche. Il ne doit pas être étendu à tous les auxiliaires d’une installation, ni lu comme une absence certaine de consommation lors de chaque transition.

Pour une demande sous 15,09 ACFM, la fiche laisse une question précise : le groupe module-t-il, s’arrête-t-il ou passe-t-il dans un autre état ? Cette information de commande doit compléter le devis. Le [guide VSD](/guides/compresseur-vitesse-variable-vsd-rentabilite-atelier/) traite la décision de configuration. Ici, le verdict est borné : les cinq points permettent un calcul conditionnel ; ils ne justifient pas une extrapolation sous la plage documentée.

La [fiche FS-Curtis NXV08](/compresseurs/fs-curtis-nxv08/) utilise un point publié à 100 psig. La courbe à 125 psig analysée ici est un document complémentaire : ses nombres ne doivent pas remplacer ceux du point à 100 psig ni qualifier une autre alimentation.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
