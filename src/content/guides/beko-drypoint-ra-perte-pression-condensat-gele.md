---
title: "DRYPOINT RA : une forte perte de pression peut venir de condensats gelés"
seoTitle: "DRYPOINT RA : perte de pression et condensats gelés"
description: "Une forte perte de pression dans un DRYPOINT RA peut venir de glace. Relier point de rosée bas, purge et bypass frigorifique sans diagnostic forcé."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["filtre-air-comprime-perte-pression-remplacement", "bypass-secheur-air-comprime-qualite-maintenance", "secheur-air-comprime-atelier-non-chauffe"]
sources: ["https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf"]
---

Le réseau reçoit moins d’air alors que le manomètre amont reste haut. Sur un DRYPOINT RA, une forte différence de pression à travers le sécheur peut venir d’une obstruction par glace. **Ajouter un compresseur ou changer un filtre sans examiner la température laisse cette cause intacte.**

## Une température trop basse peut bloquer le passage de l’air

La [notice RA20–960, tableau de dépannage page 45](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=45) associe une perte de pression extrême à trois recherches : défaut d’évacuation des condensats, condensats gelés lorsque le point de rosée est trop bas, ou obstruction des flexibles de connexion. Elle ne donne pas ici un seuil universel de différence de pression permettant de désigner la glace à lui seul.

Relever les pressions amont et aval **pendant la même phase de consommation** situe l’obstacle. Un relevé effectué sans circulation d’air ne décrit pas la perte sous débit. Le [diagnostic des pertes de pression dans les filtres](/guides/filtre-air-comprime-perte-pression-remplacement/) explique cette séparation entre pression disponible et restriction pendant le fonctionnement.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 350" role="img" aria-labelledby="beko-drypoint-ra-perte-pression-condensat-gele-title beko-drypoint-ra-perte-pression-condensat-gele-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="beko-drypoint-ra-perte-pression-condensat-gele-title">RA : rechercher une obstruction froide</title><desc id="beko-drypoint-ra-perte-pression-condensat-gele-desc">La notice relie un point de rosée trop bas à des condensats gelés qui bloquent le passage de l’air. Ce circuit schématique ne représente aucune panne mesurée.</desc><rect width="520" height="350" rx="22" fill="#10281e"/><text x="27" y="44" fill="#d3eb56" font-size="25" font-weight="700">Forte perte de pression</text><path d="M35 148H189M330 148H484" stroke="#8abfa3" stroke-width="18"/><rect x="188" y="90" width="142" height="125" rx="17" fill="#eef2e9"/><path d="M210 104l94 93M304 104l-94 93M257 103v94" stroke="#26775b" stroke-width="9"/><text x="201" y="246" fill="#d3eb56" font-size="23">Condensat gelé</text><text x="37" y="290" fill="#eef2e9" font-size="20">Point de rosée bas → passage obstrué</text></svg>
<figcaption>La notice relie un point de rosée trop bas à des condensats gelés qui bloquent le passage de l’air. Ce circuit schématique ne représente aucune panne mesurée.</figcaption>
</figure>

## Ce que fait le bypass de gaz chaud

À charge partielle, le bypass de gaz chaud renvoie une partie du gaz vers l’aspiration du compresseur frigorifique pour maintenir température et pression d’évaporation. BEKO précise que son réglage est réalisé lors des essais en fabrication et qu’une intervention éventuelle relève d’un frigoriste expérimenté. Le branchement d’un manomètre frigorifique évacue lui-même un peu de fluide ; la [page 34](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=34) réserve l’usage des prises de service à un dysfonctionnement réel.

Ce bypass appartient au **circuit frigorifique**. Il ne faut pas le confondre avec un bypass d’air comprimé qui enverrait de l’air non traité au réseau. Le [guide du bypass de sécheur](/guides/bypass-secheur-air-comprime-qualite-maintenance/) décrit cette deuxième fonction.

## Trois branches de diagnostic, sans ouvrir le circuit frigorifique

| Constat | Piste publiée par BEKO |
| --- | --- |
| Point de rosée trop bas et pression aval qui chute | Condensats gelés ; rechercher les causes du point de rosée bas |
| Évacuation de condensats défaillante | Vérifier le circuit de purge selon sa notice |
| Température cohérente mais forte restriction | Examiner les raccordements et les flexibles pour une obstruction |

Pour un point de rosée trop bas, la [page 44](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=44) cite un ventilateur fonctionnant en permanence à cause de sa commande, une ambiance trop froide ou un bypass de gaz chaud nécessitant le rétablissement de son réglage nominal. Ces hypothèses nécessitent des observations distinctes ; la liste ne confirme aucune panne à distance.

Un atelier froid mérite donc un examen de ses conditions d’exploitation, traité dans le [guide du sécheur en local non chauffé](/guides/secheur-air-comprime-atelier-non-chauffe/). En cas d’arrêt ou d’intervention, les délais, les qualifications et les protections de la notice complète restent applicables. La correction se juge ensuite par les températures, l’évacuation des condensats et les pressions sous débit, dans les conditions autorisées pour le modèle installé.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [BEKO DRYPOINT RA 20-960, notice octobre 2019](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf)
