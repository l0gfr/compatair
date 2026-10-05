---
title: "DENAIR DVA-37 : pourquoi 3,92 m³/min est le minimum VSD et non sa capacité maximale"
seoTitle: "DENAIR DVA-37 : lire la plage VSD de 3,92 à 6,54"
description: "Le DVA-37 publie deux bornes de débit à chaque pression et fréquence. Identifiez la bonne colonne pour dimensionner la demande haute et les périodes creuses."
pubDate: "2026-10-05"
updatedDate: "2026-10-05"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 7
featured: false
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "mesurer-temps-charge-vide-compresseur", "devis-compresseur-deux-postes-poncage"]
sources: ["https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf"]
---
Une table VSD peut produire deux erreurs opposées : prendre le minimum de régulation pour la capacité du compresseur, ou présenter le maximum comme une production permanente dans toutes les situations. Le DENAIR [DVA-37](/compresseurs/denair-dva-37/) illustre bien ce problème. À **7 bar et 50 Hz**, sa plage publiée va de **3,92 à 6,54 m³/min**. Les deux bornes appartiennent à la même ligne, mais elles servent à examiner des moments différents de la demande.

La [page 8 du catalogue DENAIR Screw Air Compressors](https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf) distingue les colonnes de **50 Hz et 60 Hz**, avec un minimum et un maximum dans chacune. Sa note qualifie le FAD selon **ISO 1217:2009, annexe C**, pour une pression absolue d'entrée de 1 bar et une température d'entrée de 20 °C. Cette lecture conserve donc pression, fréquence et borne ensemble.

## La version 50 Hz fournit quatre lignes distinctes

| Pression de la ligne | Minimum publié | Maximum publié |
|---|---:|---:|
| 7 bar | 3,92 m³/min | 6,54 m³/min |
| 8 bar | 3,91 m³/min | 6,52 m³/min |
| 10 bar | 3,21 m³/min | 5,35 m³/min |
| 12,5 bar | 3,09 m³/min | 5,16 m³/min |

La puissance moteur indiquée est de **37 kW**. La table ne permet pas de transformer ce nominal en puissance totale absorbée à chaque borne. Elle ne publie pas non plus une courbe de consommation électrique continue pour relier tous les points.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 240" role="img" aria-label="DVA-37, configuration 50 Hz: 3,92 à 6,54 m³/min" style="display:block;width:100%;max-width:38rem;height:auto;margin:1.5rem auto 1.75rem"><rect width="420" height="240" rx="16" fill="#102018"/><text x="24" y="36" font-family="system-ui" font-size="19" font-weight="700" fill="#d8ef45">DVA-37, configuration 50 Hz</text><rect x="38" y="104" width="344" height="28" rx="14" fill="#d8ef45"/><circle cx="38" cy="118" r="9" fill="#176b4d"/><circle cx="382" cy="118" r="9" fill="#176b4d"/><text x="38" y="83" font-family="system-ui" font-size="24" font-weight="800" fill="#f7f8f2">3,92</text><text x="382" y="83" text-anchor="end" font-family="system-ui" font-size="24" font-weight="800" fill="#f7f8f2">6,54</text><text x="38" y="166" font-family="system-ui" font-size="18" fill="#cbd8d0">Minimum publié</text><text x="382" y="166" text-anchor="end" font-family="system-ui" font-size="18" fill="#cbd8d0">Maximum publié</text><text x="210" y="204" text-anchor="middle" font-family="system-ui" font-size="18" fill="#d8ef45">m³/min ; point publié à 7 bar</text></svg>

Pour la ligne de 7 bar, les conversions sont **3 920 et 6 540 L/min**. L'écart entre les deux bornes vaut **2 620 L/min**. Ces calculs conservent les conditions du même débit original et ne créent pas un point à une pression absente. Le dossier [débit restitué FAD](/guides/debit-restitue-fad-vs-debit-aspire/) explique pourquoi la pression associée doit rester visible dans une fiche.

## Le maximum aide à examiner la demande haute

Si votre installation doit alimenter plusieurs postes pendant une phase précise, leurs consommations documentées et leur chevauchement doivent être confrontés au maximum correspondant à la configuration retenue. Un outil qui demande une autre pression ne peut pas être validé à partir d'une ligne choisie seulement pour son plus gros chiffre.

Un débit théorique total ne suffit pas non plus à décrire le réseau. Le fournisseur doit connaître les équipements de traitement et le point où la pression est requise. Il doit expliquer comment le groupe, les accessoires et l'installation répondent à ce cas. Le guide [préparer un devis pour plusieurs postes](/guides/devis-compresseur-deux-postes-poncage/) donne un exemple de description exploitable des usages simultanés.

La table nous permet d'affirmer que **6,54 m³/min est le maximum publié à 7 bar pour la configuration 50 Hz**. Elle ne permet pas de garantir cette valeur à 12,5 bar, où la ligne correspondante annonce 5,16 m³/min.

## Le minimum pose la question des périodes creuses

Le minimum de 3,92 m³/min est utile lorsque la demande baisse. Il ne correspond ni à zéro débit ni à la consommation minimale de n'importe quel atelier. Si votre besoin passe sous cette borne, il faut demander ce que fait la commande : modes disponibles, séquences autorisées et interaction avec le stockage. Le tableau seul ne décrit pas ces règles.

Il serait donc trompeur de promettre une modulation stable jusqu'à une petite consommation choisie arbitrairement. Le réservoir et le pilotage peuvent entrer dans une étude, mais leurs effets doivent venir d'une configuration et d'une documentation précises. La présence du mot VSD ne fournit pas toutes ces réponses.

Sur une installation actuelle, notez les heures où la demande baisse et les états du compresseur. Le dossier [mesurer les temps de charge et de marche à vide](/guides/mesurer-temps-charge-vide-compresseur/) aide à constituer un relevé. Celui-ci sert à demander une solution adaptée au profil réel, sans déduire une économie d'énergie du seul écart entre deux débits.

## Le tableau voisin à 60 Hz ne peut pas compléter une lacune à 50 Hz

La même ligne de 7 bar publie, pour **60 Hz**, un minimum de **3,80** et un maximum de **6,33 m³/min**. Ces chiffres décrivent une autre configuration. Les utiliser pour remplacer une case manquante de la version 50 Hz mélangerait deux jeux de données.

Lors d'un achat ou d'une reprise de fiche distributeur, conservez donc le triplet pression, fréquence, plage. Demandez ensuite la référence exacte et la notice de l'appareil proposé. Le catalogue d'export ne démontre pas sa disponibilité dans un marché particulier ni la conformité d'un raccordement local.

La bonne conclusion pour le DVA-37 est une plage documentée, pas un chiffre isolé : **3,92 à 6,54 m³/min à 7 bar pour la configuration 50 Hz**. Le maximum renseigne la demande haute ; le minimum invite à vérifier le fonctionnement en faible demande. Une étude qui ne lit qu'une seule borne peut choisir une machine mal adaptée même avec un FAD correctement sourcé.

[DENAIR, Screw Air Compressors, page 8](https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf), consulté le 5 octobre 2026. Aucun essai physique CompatAir n'est revendiqué.
