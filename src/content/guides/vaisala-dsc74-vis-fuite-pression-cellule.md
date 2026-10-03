---
title: "DSC74 : une vis de fuite trop ouverte fausse la pression de mesure"
seoTitle: "Vaisala DSC74 : régler la vis de fuite à un demi-tour"
description: "La vis de fuite DSC74 doit rester ouverte d’un demi-tour selon Vaisala. Une ouverture excessive peut abaisser la pression de la cellule de mesure."
pubDate: "2026-10-03"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["point-rosee-atmospherique-sous-pression-mesure", "vaisala-dmt143-point-rosee-fige-purge-autocalibration", "fiche-intervention-air-comprime"]
sources: ["https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-1F8C125B-3DA2-4829-8AEF-CCC0C57CAFCA/GUID-60605156-E294-44DF-98EE-DBAB3441173E?contentId=qEuLfA2ITLkKAIbIcCMqhQ"]
---

**Sur une cellule Vaisala DSC74, ouvrir davantage la vis de fuite peut abaisser la pression au point de mesure.** Le manuel demande une ouverture de **½ tour** et avertit de ne pas dépasser cette valeur. Une fuite plus généreuse n’est donc pas un réglage neutre pour contrôler le point de rosée sous pression.

La [documentation DSC74 du manuel DMT143 M211435EN-L](https://docs.vaisala.com/r/M211435EN-L/en-US/GUID-1F8C125B-3DA2-4829-8AEF-CCC0C57CAFCA/GUID-60605156-E294-44DF-98EE-DBAB3441173E?contentId=qEuLfA2ITLkKAIbIcCMqhQ) décrit cette vis comme une restriction réglable : elle autorise le passage d’air devant le capteur tout en préservant la pression du procédé. Ce guide traite ce montage précis, avec son raccord rapide et son corps de cellule, plutôt qu’une règle générale sur tous les prélèvements.

## Retrouver le réglage avant de comparer deux points de rosée

Un résultat différent après déplacement d’un capteur ne signifie pas nécessairement que le sécheur a changé. Le prélèvement peut avoir changé lui aussi. Pour une DSC74, ajoutez l’ouverture de la vis aux informations déjà relevées sur l’emplacement et la pression.

La consigne du fabricant est de partir de la vis fermée, puis de l’ouvrir de ½ tour. Son application doit suivre les instructions de montage et de manipulation de la référence. La présence d’un souffle ne constitue pas à elle seule une vérification chiffrée de pression ou de débit.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="vaisala-dsc74-vis-fuite-pression-cellule-svg-title vaisala-dsc74-vis-fuite-pression-cellule-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="vaisala-dsc74-vis-fuite-pression-cellule-svg-title">Une restriction préserve la pression dans la cellule</title><desc id="vaisala-dsc74-vis-fuite-pression-cellule-svg-desc">La fuite réglée permet un passage d’air autour du capteur tout en conservant la pression de procédé. Une ouverture excessive peut abaisser la pression de la cellule ; schéma sans échelle.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="42" fill="white" font-size="22">DSC74 : mesurer dans la bonne pression</text><path d="M30 172h90m280 0h84" stroke="#9ebdad" stroke-width="12"/><rect x="120" y="103" width="280" height="145" rx="18" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><rect x="224" y="74" width="55" height="85" rx="5" fill="#d3eb56"/><path d="M314 172h64m-8-8 8 8-8 8" stroke="#d3eb56" stroke-width="3" fill="none"/><path d="M409 148l30 48m0-48-30 48" stroke="white" stroke-width="3"/><text x="146" y="205" fill="white" font-size="21">Pression de cellule</text><text x="332" y="113" fill="white" font-size="17">Vis de fuite</text><text x="28" y="290" fill="white" font-size="21">Consigne DSC74 : ouverture de ½ tour</text><text x="28" y="329" fill="white" font-size="19">Une consigne propre à cette cellule.</text></g>
</svg>
<figcaption>La fuite réglée permet un passage d’air autour du capteur tout en conservant la pression de procédé. Une ouverture excessive peut abaisser la pression de la cellule ; schéma sans échelle.</figcaption>
</figure>

## Une cellule doit rester identifiée dans le dossier

Le nom DSC74 ne doit pas être remplacé par « petite chambre de prélèvement ». Le document nomme un corps DMT242SC, un raccord rapide, une vis de fuite et des adaptateurs de filetage. D’autres cellules de la gamme répondent à d’autres architectures ; leur procédure ne doit pas être déduite de ce demi-tour.

Sur un poste déjà installé, photographiez la référence et le raccordement avant de comparer des mesures. Si le montage comprend des éléments ajoutés, décrivez-les : la consigne d’un composant ne documente pas automatiquement la pression obtenue dans tout un circuit de prélèvement modifié.

| Contrôle | Information recherchée |
| --- | --- |
| Référence | DSC74 effectivement utilisée, capteur et accessoires identifiés |
| Vis de fuite | Position conforme à la procédure de cette cellule |
| Pression de procédé | Valeur et endroit où elle est observée |
| Conditions du prélèvement | Configuration inchangée ou modification expliquée |
| Comparaison avant/après | Même grandeur de point de rosée et même périmètre |

Cette grille est une préparation de contrôle. Elle ne remplace pas une mesure de pression dans la cellule lorsque celle-ci est nécessaire à l’analyse.

## Revenir à la grandeur que l’on souhaite vérifier

Le [guide point de rosée atmosphérique ou sous pression](/guides/point-rosee-atmospherique-sous-pression-mesure/) explique pourquoi les conditions de pression doivent rester attachées à la valeur. La DSC74 fournit un cas concret où le réglage de fuite peut justement changer ces conditions.

Si la courbe comporte aussi un plateau, un deuxième mécanisme est possible : le [DMT143 conserve des sorties pendant son traitement interne](/guides/vaisala-dmt143-point-rosee-fige-purge-autocalibration/). Le réglage de cellule et l’état du capteur doivent alors être examinés séparément. Modifier la vis pour faire disparaître un plateau ne répond pas à un traitement interne en cours.

## Corriger le montage, puis refaire une comparaison traçable

Lorsqu’une ouverture excessive est constatée, faites remettre le montage dans les conditions documentées par la personne compétente, puis reprenez un relevé comparable. Conservez la position précédente, la correction et les observations avec leurs unités. La [fiche d’intervention](/guides/fiche-intervention-air-comprime/) sert à rattacher le résultat à l’action réelle.

Si l’écart persiste, l’examen peut alors revenir à l’humidité livrée par le réseau, avec le [guide sécheur et qualité d’air](/guides/point-rosee-secheur-filtre-air-comprime/). Un changement de point de rosée obtenu après réglage du prélèvement ne doit pas être annoncé comme une amélioration du sécheur sans preuve portant sur celui-ci.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
