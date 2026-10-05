---
title: "Atlas Copco GA110VSDs : lire la fiche CAGI sans confondre moteur, débit et puissance totale"
seoTitle: "GA110VSDs : 735,2 acfm et 130,7 kW dans la fiche CAGI"
description: "La fiche GA110VSDs distingue capacité, puissance moteur et puissance totale. Lisez ses bornes VSD, la note zéro débit et la portée de la vérification CAGI."
pubDate: "2026-10-05"
updatedDate: "2026-10-05"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 7
featured: false
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["lire-fiche-cagi-compresseur-iso-1217", "convertir-cfm-l-min-nl-min-air-comprime", "mesurer-temps-charge-vide-compresseur"]
sources: ["https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-90-160-vsds/ga110-160-vsds/air-cooled/GA110VSDs-COOL_AIR-ENREC_N-FREQ_60HZ-HAT_N-PRESS_8.6BAR-125%20psig.pdf"]
---
La fiche CAGI du [GA110VSDs](/compresseurs/atlas-copco-ga-110-vsds/) est assez précise pour comparer des points de fonctionnement, à condition de garder les colonnes ensemble. À **125,0 psig**, elle associe une capacité maximale de **735,2 acfm** à une puissance absorbée de **130,7 kW**. À la borne minimale publiée, elle associe **204,0 acfm** à **39,3 kW**. Ni l'un ni l'autre de ces chiffres ne se confond avec la puissance nominale du moteur.

Cette lecture concerne la [fiche constructeur GA 110 VSDs-8.6, configuration refroidie par air et 60 Hz](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-90-160-vsds/ga110-160-vsds/air-cooled/GA110VSDs-COOL_AIR-ENREC_N-FREQ_60HZ-HAT_N-PRESS_8.6BAR-125%20psig.pdf). Le document porte la date « 09-04-2025 », conservée telle qu'imprimée sans supposer l'ordre du jour et du mois. Les notes rattachent la capacité et la consommation mesurées à la pression de la feuille ; les chiffres ne sont pas transférés à une autre version.

## Les trois informations du tableau VSD

| Point de la fiche | Puissance absorbée | Capacité | Puissance spécifique |
|---|---:|---:|---:|
| Maximum publié | 130,7 kW | 735,2 acfm | 17,8 kW/100 acfm |
| Point intermédiaire | 106,7 kW | 602,4 acfm | 17,7 kW/100 acfm |
| Point intermédiaire | 83,3 kW | 469,6 acfm | 17,7 kW/100 acfm |
| Point intermédiaire | 60,7 kW | 336,8 acfm | 18,0 kW/100 acfm |
| Minimum publié | 39,3 kW | 204,0 acfm | 19,3 kW/100 acfm |

La note a indique **ISO 1217, annexe E**, au point terminal de sortie du groupe. Elle définit l'acfm comme un volume par minute aux conditions d'entrée. Conservez ces conditions dans toute conversion ; le dossier [CFM, L/min et Nl/min](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique pourquoi les conditions normales ne peuvent pas être ajoutées automatiquement.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 292" role="img" aria-label="Fiche GA110VSDs à 125 psig : maximum de 735,2 acfm avec 130,7 kW ; minimum de 204 acfm avec 39,3 kW" style="display:block;width:100%;max-width:38rem;height:auto;margin:1.5rem auto 1.75rem"><rect width="420" height="292" rx="16" fill="#102018"/><text x="24" y="34" font-family="system-ui" font-size="19" font-weight="700" fill="#d8ef45">GA110VSDs : deux couples, 125 psig</text><rect x="20" y="58" width="380" height="94" rx="10" fill="#254235"/><text x="36" y="82" font-family="system-ui" font-size="18" fill="#f7f8f2">Maximum publié</text><text x="36" y="112" font-family="system-ui" font-size="26" font-weight="800" fill="#d8ef45">735,2 acfm</text><text x="36" y="139" font-family="system-ui" font-size="17" fill="#cbd8d0">130,7 kW absorbés</text><rect x="20" y="166" width="380" height="94" rx="10" fill="#254235"/><text x="36" y="190" font-family="system-ui" font-size="18" fill="#f7f8f2">Minimum publié</text><text x="36" y="220" font-family="system-ui" font-size="26" font-weight="800" fill="#d8ef45">204,0 acfm</text><text x="36" y="247" font-family="system-ui" font-size="17" fill="#cbd8d0">39,3 kW absorbés</text></svg>

## La puissance du moteur n'est pas celle du groupe

La ligne du moteur principal annonce **147,5 hp**. Celle du ventilateur indique **5,9 hp**. Ces ratings nominaux décrivent des composants, alors que le tableau lie capacité et puissance absorbée. Le guide [lire une fiche CAGI](/guides/lire-fiche-cagi-compresseur-iso-1217/) détaille cette distinction essentielle dans une comparaison énergétique.

La puissance spécifique rapporte la puissance au débit. Le calcul `130,7 / 735,2 × 100` donne environ **17,8 kW/100 acfm**, cohérent avec la valeur de la feuille. Ce ratio est un point documenté, pas une valeur constante à toutes les charges : la table affiche 19,3 à la borne minimale.

Un acheteur peut donc demander une comparaison au même niveau de demande et à la même pression. Comparer seulement deux moteurs nominaux ou sélectionner la meilleure puissance spécifique de chaque machine à des débits différents ne répond pas au profil de l'installation.

## Le minimum VSD reste une borne de fonctionnement publiée

Les 204,0 acfm ne décrivent pas la capacité maximale du GA110VSDs. Ils constituent la borne minimale du tableau. Si l'installation demande moins, cette feuille ne suffit pas à expliquer toutes les séquences de commande, le rôle du stockage ou l'état du groupe entre les phases de consommation.

Pour préparer une étude, mesurez le profil de demande ou faites relever les états de fonctionnement d'un groupe actuel. Le dossier [temps de charge et de marche à vide](/guides/mesurer-temps-charge-vide-compresseur/) aide à construire ce relevé. Il ne remplace pas une courbe de puissance ; il identifie les moments qu'une comparaison doit couvrir.

Le document publie des points intermédiaires, mais ce guide n'invente pas une courbe continue entre eux. Les performances à d'autres débits et dans une autre configuration doivent être obtenues avec une méthode et un périmètre explicites.

## Pourquoi le zéro affiché ne promet pas une installation sans consommation

La ligne de puissance totale à débit nul indique **0,0 kW**. Sa note précise que la méthode permet au fabricant d'indiquer zéro ou une valeur non significative lorsque la puissance mesurée à vide est inférieure à 1 %. Le zéro de la feuille doit être lu avec cette convention.

Il ne démontre donc pas que toute installation équipée du groupe consomme exactement zéro watt sans demande. La note porte sur le périmètre du relevé et sur une règle de présentation. Des équipements annexes ou une autre configuration ne sont pas automatiquement inclus dans cette ligne.

## Le logo CAGI ne suffit pas à certifier les chiffres

Le pied de page indique que CAGI n'a pas vérifié indépendamment les données rapportées. Les astérisques expliquent ce qui serait vérifié pour les modèles testés dans le programme de vérification. Ils ne permettent pas, à eux seuls, d'attribuer ce statut à chaque feuille.

Nous retenons donc une déclaration fabricant présentée au format CAGI. Pour une procédure d'achat exigeant une vérification tierce, demandez le statut exact du modèle et la configuration couverte. La présence du formulaire est utile ; sa portée doit rester celle du document.

Le verdict de lecture est net : **735,2 acfm et 130,7 kW vont ensemble au point maximal de cette configuration à 125,0 psig**. La borne basse, les puissances spécifiques et les notes permettent une comparaison plus fine, mais demandent le profil réel de votre installation.

[Atlas Copco, fiche CAGI GA110VSDs, une page](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-90-160-vsds/ga110-160-vsds/air-cooled/GA110VSDs-COOL_AIR-ENREC_N-FREQ_60HZ-HAT_N-PRESS_8.6BAR-125%20psig.pdf), consultée le 5 octobre 2026. Aucun essai physique CompatAir n'est revendiqué.
