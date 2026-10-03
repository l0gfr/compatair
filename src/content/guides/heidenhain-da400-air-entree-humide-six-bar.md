---
title: "DA400 : pourquoi l’air humide à moins de 6 bar peut exiger un sécheur en amont"
seoTitle: "HEIDENHAIN DA400 : air humide et seuil de 6 bar"
description: "Le DA400 impose une condition de séchage sous 6 bar si l’air est saturé. Lire séparément pression admise et classes de qualité à l’entrée et aux codeurs."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["qualite-air-comprime-iso-8573-1", "point-rosee-secheur-filtre-air-comprime", "compresseur-machine-cnc-haas-pression-debit"]
sources: ["https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf"]
---

Un ensemble de filtres pour codeurs n’autorise pas à ignorer l’état de l’air qui l’alimente. HEIDENHAIN donne une condition précise pour le DA400 : **si la pression est inférieure à 6 bar et que l’air est saturé en vapeur d’eau, un sécheur supplémentaire doit être placé en amont.** Les deux conditions figurent ensemble dans la fiche fabricant.

## Lire l’entrée et la sortie séparément

La [fiche DA400 de février 2025, page 2](https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf#page=2) demande à l’entrée les classes **5/6/4** selon ISO 8573-1:2010, et annonce en sortie **1/4/1** pour l’air introduit dans les codeurs. Dans l’ordre particules/eau/huile, elle associe la classe d’eau 6 à un point de rosée sous pression de **10 °C** à l’entrée, et la classe 4 à **3 °C** pour l’air de barrage.

Pour l’huile totale, les limites citées sont **5 mg/m³** à l’entrée et **0,01 mg/m³** pour le codeur. La [lecture des classes ISO](/guides/qualite-air-comprime-iso-8573-1/) aide à comprendre cet ordre ; elle ne remplace pas la spécification propre au DA400.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 328" role="img" aria-labelledby="heidenhain-da400-air-entree-humide-six-bar-title heidenhain-da400-air-entree-humide-six-bar-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="heidenhain-da400-air-entree-humide-six-bar-title">DA400 : deux exigences de qualité</title><desc id="heidenhain-da400-air-entree-humide-six-bar-desc">Le système reçoit un air 5/6/4 et fournit l’air de barrage 1/4/1 annoncé. Sous 6 bar avec air saturé, un sécheur supplémentaire doit précéder le DA400.</desc><rect width="520" height="328" rx="22" fill="#10281e"/><text x="25" y="42" fill="#d3eb56" font-size="23" font-weight="700">Air du réseau → DA400 → codeur</text><text x="40" y="113" fill="#eef2e9" font-size="23">Entrée</text><text x="37" y="156" fill="#d3eb56" font-size="26" font-weight="700">5 / 6 / 4</text><path d="M182 147H320" stroke="#8abfa3" stroke-width="6"/><rect x="210" y="114" width="84" height="65" rx="12" fill="#26775b"/><text x="219" y="153" fill="#eef2e9" font-size="18">Filtrer</text><text x="365" y="113" fill="#eef2e9" font-size="23">Sortie</text><text x="355" y="156" fill="#d3eb56" font-size="26" font-weight="700">1 / 4 / 1</text><text x="33" y="248" fill="#eef2e9" font-size="23">&lt; 6 bar ET vapeur d’eau saturante</text><text x="33" y="293" fill="#eef2e9" font-size="22">Sécheur supplémentaire en amont</text></svg>
<figcaption>Le système reçoit un air 5/6/4 et fournit l’air de barrage 1/4/1 annoncé. Sous 6 bar avec air saturé, un sécheur supplémentaire doit précéder le DA400.</figcaption>
</figure>

## Une pression autorisée ne suffit pas à qualifier l’air

La fiche publie une pression d’entrée typique de **7 bar**, minimale de **4 bar** et maximale de **12 bar**. La condition de séchage sous 6 bar peut donc concerner une pression située dans la plage autorisée. Être au-dessus du minimum ne dispense pas de vérifier la saturation.

La même fiche décrit trois étages de filtration : préfiltre, filtre fin et charbon actif, puis un régulateur. Ces composants ont des fonctions précises ; l’existence d’un filtre ne démontre pas que toutes les conditions d’eau en entrée sont satisfaites. Le [guide point de rosée et filtration](/guides/point-rosee-secheur-filtre-air-comprime/) distingue ces mécanismes.

## Ce qu’il faut établir avant le raccordement

| Paramètre | Question à résoudre |
| --- | --- |
| Pression reçue par le DA400 | Reste-t-elle dans la plage et sous 6 bar dans certaines phases ? |
| État de vapeur d’eau | L’air est-il saturé dans ces conditions ? |
| Classes d’air d’entrée | Sont-elles documentées au point d’alimentation ? |
| Air destiné aux codeurs | Respecte-t-il la spécification de sortie applicable ? |

Une seule pression de cuve ne répond pas aux quatre questions. Le [guide du réseau d’une machine CNC](/guides/compresseur-machine-cnc-haas-pression-debit/) illustre la nécessité de distinguer alimentation globale et besoins des sous-ensembles ; les exigences HEIDENHAIN restent celles du codeur utilisé.

La consigne fabricant ne doit être ni élargie à « sécheur systématique sous 6 bar », ni réduite à « quatre bars suffisent ». Si la saturation est inconnue, cette condition d’admission reste non établie. La fiche renvoie à la notice de fonctionnement 1409623 pour l’installation complète. Ici, aucun essai de qualité de sortie ni mesure de point de rosée n’a été effectué.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [HEIDENHAIN DA400, information produit, février 2025](https://www.heidenhain.com/fileadmin/pdf/en/01_Products/Produktinformationen/PI_DA400_ID894509_en.pdf)
