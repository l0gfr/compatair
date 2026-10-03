---
title: "AirPick : une distance d’arrêt de soufflage trop courte peut perturber la dépose"
seoTitle: "AirPick : distance de fermeture après la dépose"
description: "Shutoff distance ferme la valve AirPick après un déplacement. Comprendre le risque de recréer du vide au retrait sans inventer un délai universel."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["vacuometre-vacuostat-bar-absolu-pourcentage-vide", "ventouse-piece-poreuse-debit-vide", "schmalz-fqe-ventouse-depose-remplacement"]
sources: ["https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf"]
---

La pièce est posée mais reste perturbée lorsque le robot retire ses ventouses. Robotiq explique qu’un mouvement de retrait peut recréer du vide à l’intérieur des ventouses. **Le paramètre Shutoff distance garde la valve ouverte pendant une distance d’éloignement configurée.** Ce paramètre ne doit pas être lu comme un simple délai de soufflage.

## Pourquoi attendre un déplacement

Le [manuel AirPick, page 51, Object release delay](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf#page=51) décrit l’ouverture de la valve à la commande de relâchement. Lorsque la pression dans la ventouse rejoint ou dépasse l’ambiance, l’état sans objet apparaît. Le robot s’éloigne ensuite de la pièce ; suivant la ventouse, ce retrait peut générer une nouvelle dépression. La distance définie par l’utilisateur détermine quand la valve se ferme.

Le mécanisme implique donc pression locale, état de détection et déplacement. La [lecture du niveau de vide](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) explique le premier ; l’état ne signifie pas que le robot s’est déjà éloigné suffisamment.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 317" role="img" aria-labelledby="robotiq-airpick-release-distance-valve-title robotiq-airpick-release-distance-valve-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="robotiq-airpick-release-distance-valve-title">AirPick : garder la valve ouverte pendant l’éloignement</title><desc id="robotiq-airpick-release-distance-valve-desc">La commande Release ouvre la valve. Le robot s’éloigne ; la distance configurée détermine ensuite sa fermeture pour éviter de recréer du vide.</desc><rect width="520" height="317" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">Dépose · progression du mouvement</text><path d="M54 151H467" stroke="#8abfa3" stroke-width="5"/><circle cx="64" cy="151" r="11" fill="#d3eb56"/><circle cx="263" cy="151" r="11" fill="#d3eb56"/><circle cx="455" cy="151" r="11" fill="#d3eb56"/><text x="33" y="108" fill="#eef2e9" font-size="21">Release</text><text x="203" y="108" fill="#eef2e9" font-size="21">Éloigner</text><text x="396" y="108" fill="#eef2e9" font-size="21">Fermer</text><text x="37" y="225" fill="#eef2e9" font-size="22">La distance suit le trajet du robot</text><text x="37" y="277" fill="#eef2e9" font-size="21">Aucune temporisation unique déduite</text></svg>
<figcaption>La commande Release ouvre la valve. Le robot s’éloigne ; la distance configurée détermine ensuite sa fermeture pour éviter de recréer du vide.</figcaption>
</figure>

## Shutoff distance est une distance de trajet dans l’URCap

La [page 58](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf#page=58) décrit les réglages avancés de Release : **Shutoff distance** indique la distance parcourue après cette commande avant l’arrêt de la distribution de pression. L’option **Wait until object is released** permet d’attendre l’absence d’objet détecté avant la commande suivante.

Ces réglages ne fournissent pas ici une distance universelle pour toutes les formes de ventouse. Une vitesse différente transforme aussi le temps nécessaire pour parcourir une même distance, sans changer le sens du paramètre. Aucun calcul temporel n’est proposé sans le trajet et la vitesse réels.

| Information | Pourquoi la conserver |
| --- | --- |
| Ventouse utilisée | Le manuel relie la recréation du vide à son type |
| Distance de retrait configurée | Condition de fermeture de la valve |
| État sans objet | Indication de pression, distincte du déplacement accompli |
| Option d’attente | Ordre de poursuite du programme de mouvement |

## Distinguer une dépose contrariée d’une prise insuffisante

Le [guide de porosité](/guides/ventouse-piece-poreuse-debit-vide/) concerne les fuites durant le maintien. Ici, le défaut peut apparaître pendant la séparation alors que la prise précédente était stable. Modifier seulement les seuils de maintien ne répond pas à la distance de retrait décrite par Robotiq.

Le [cas de remplacement des ventouses FQE](/guides/schmalz-fqe-ventouse-depose-remplacement/) porte sur une fixation différente ; il rappelle que référence de ventouse et comportement d’assemblage doivent être conservés. Aucune procédure de retrait destructive FQE n’est transposée à AirPick.

Pour examiner une dépose perturbée, suivre la chronologie Release, apparition de l’état sans objet, déplacement et fermeture. La qualification finale doit être faite dans les conditions de l’installation et selon la notice complète. Le présent schéma explique l’ordre des événements, sans annoncer un essai robotique ou un réglage garanti.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Robotiq AirPick e-Series, notice du 12 septembre 2019](https://assets.robotiq.com/website-assets/support_documents/document/AirPick_Instruction_Manual_e-Series_PDF_20190912.pdf)
