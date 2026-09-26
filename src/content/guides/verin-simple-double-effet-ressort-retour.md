---
title: "Vérin simple ou double effet : comprendre le retour par ressort et le besoin d’air"
seoTitle: "Vérin simple ou double effet : quel retour prévoir ?"
description: "Un vérin simple effet peut pousser ou tirer selon sa version. Comparez mouvement, ressort, circuit et consommation sans supposer une position de sécurité."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "consommation-verin-pneumatique-double-effet", "regler-vitesse-verin-pneumatique-echappement"]
sources: ["https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders-id_pim135", "https://www.festo.com/media/catalog/204284_documentation.pdf"]
---

**Un vérin simple effet utilise l’air pour un sens de mouvement, mais ce sens n’est pas toujours la sortie de tige.** Selon sa version, le ressort peut la rentrer ou la faire sortir. Un vérin double effet utilise l’alimentation pneumatique pour les deux sens décrits dans sa notice.

Cette distinction aide à lire une référence et à préparer le circuit. Elle ne suffit pas à déclarer une position « sûre » lors d’une coupure d’air : cette fonction doit être étudiée pour la machine complète.

## Identifier ce qui produit chaque mouvement

[Festo](https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders-id_pim135) présente les principes du simple et du double effet. Sa [documentation DPCA](https://www.festo.com/media/catalog/204284_documentation.pdf) fournit un exemple précis : la variante **P** est à simple effet en traction, avec tige sortie par le ressort ; la variante **S** est à simple effet en poussée, avec tige rentrée par le ressort. La version double effet décrite comporte deux raccordements alimentés successivement pour commander les deux sens.

Ces lettres ne constituent pas un code universel entre fabricants. La référence complète et la légende de sa propre documentation restent nécessaires.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="verin-simple-double-effet-ressort-retour-title verin-simple-double-effet-ressort-retour-desc" xmlns="http://www.w3.org/2000/svg">
<title id="verin-simple-double-effet-ressort-retour-title">Simple effet : deux versions possibles</title><desc id="verin-simple-double-effet-ressort-retour-desc">Exemple des variantes DPCA ; les lettres appartiennent à cette gamme.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="60" fill="#d3eb56" font-size="24" font-weight="700">DPCA P : traction par l’air</text><text x="44" y="104" fill="white" font-size="22">L’air rentre la tige</text><text x="44" y="146" fill="#8abfa3" font-size="21">Le ressort la fait sortir</text>
<rect x="24" y="204" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="240" fill="#d3eb56" font-size="24" font-weight="700">DPCA S : poussée par l’air</text><text x="44" y="284" fill="white" font-size="22">L’air fait sortir la tige</text><text x="44" y="326" fill="#8abfa3" font-size="21">Le ressort la fait rentrer</text>
</svg>
<figcaption>Simple effet : deux versions possibles. Exemple des variantes DPCA ; les lettres appartiennent à cette gamme.</figcaption>
</figure>

## Commencer par le mouvement utile

Notre fiche de projet décrit d’abord ce que la tige doit accomplir : pousser, tirer, revenir, maintenir ou libérer dans un cycle défini. Elle distingue ensuite l’état sans commande et les situations de perte d’alimentation à analyser.

| Question du projet | Information à rechercher |
| --- | --- |
| Dans quel sens agit l’air ? | Fonction exacte de la variante |
| Qu’est-ce qui produit le retour ? | Ressort ou autre mécanisme documenté |
| Quel effort est demandé ? | Données applicables à chaque sens et position |
| Quelle course est nécessaire ? | Domaine de la référence choisie |
| Quel comportement à l’arrêt ? | Étude du circuit et de la charge |
| Quelle cadence est prévue ? | Scénario utilisé pour le bilan d’air |

Cette préparation évite de choisir une version uniquement parce qu’elle possède le bon diamètre ou la bonne longueur extérieure. Elle permet aussi de faire apparaître une donnée manquante avant la commande.

## La formule de force doit correspondre au mécanisme

Le calcul idéal pression multipliée par surface ne décrit pas, à lui seul, tout l’effort utile d’un ensemble avec ressort et frottements. Demandez au fournisseur les données de force applicables à la version et au mouvement réellement utilisés.

Nous ne proposons pas de soustraire une force de ressort forfaitaire. Sa valeur doit venir de la documentation nécessaire au calcul. Le [guide de force des vérins](/guides/force-verin-pneumatique-diametre-pression/) présente les surfaces et les limites de son modèle ; il ne doit pas être transposé à un autre mécanisme sans les données manquantes.

## Le bilan de consommation suit le cycle réel

Avant de comparer deux solutions, fixez la course, le nombre de cycles, la pression et les volumes inclus dans le calcul. Le [guide de consommation du double effet](/guides/consommation-verin-pneumatique-double-effet/) détaille son propre périmètre. Il ne suffit pas de diviser son résultat par deux pour obtenir tous les montages simple effet.

Notre proposition est de demander deux bilans explicites pour deux solutions candidates, avec les mêmes conditions de production. Une économie annoncée sans scénario commun ne permet pas de comparer le service rendu.

## Un ressort n’est pas une validation de sécurité

Le sens naturel de retour est une caractéristique du composant. Le comportement de la machine inclut aussi sa charge, son circuit, ses blocages possibles et les mesures de protection du projet. Il doit être examiné par les personnes compétentes dans ce périmètre.

Ne remplacez pas un double effet par un simple effet sur la seule idée qu’il reviendra automatiquement. Faites valider le changement et ses conséquences avant montage.

## Conserver la référence dans le dossier de maintenance

La fiche de remplacement doit inclure les options de fonction, de course et de détection nécessaires. Après une intervention autorisée, vérifiez le cycle prévu dans les conditions convenues et archivez le résultat.

Le [réglage de vitesse à l’échappement](/guides/regler-vitesse-verin-pneumatique-echappement/) traite un autre aspect du mouvement. La force, la vitesse et la logique de retour doivent rester des vérifications distinctes, même lorsqu’elles concernent le même vérin.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Festo, principes des vérins pneumatiques](https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders-id_pim135)
- [Festo, documentation DPCA, versions simple et double effet](https://www.festo.com/media/catalog/204284_documentation.pdf)
