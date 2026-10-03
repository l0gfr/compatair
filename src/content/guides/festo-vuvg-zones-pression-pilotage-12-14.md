---
title: "Îlot VUVG à deux pressions : le pilotage 12/14 reste-t-il commun ?"
seoTitle: "VUVG : zones de pression et pilotage 12/14"
description: "La séparation des canaux 1, 3 et 5 ne crée pas une zone de pilotage indépendante. Lisez les restrictions Festo avant de commander le rail."
pubDate: "2026-10-03"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["choisir-distributeur-pneumatique-debit-nominal", "electrovanne-air-ne-ouvre-pas-pression-differentielle"]
sources: ["https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2019/EN/VTUG-G_EN.PDF"]
---

**Créer deux zones de pression sur un îlot ne signifie pas que tous ses canaux sont séparés.** La documentation VUVG autorise des séparations dans les canaux 1, 3 et 5, mais précise que le canal de pilotage 12/14 ne peut pas être séparé de cette façon.

La [page Festo consacrée aux zones](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2019/EN/VTUG-G_EN.PDF#page=8) devient donc un document de commande, au même titre que la liste des électrovannes. Deux consignes de régulateur ne suffisent pas à définir un îlot à deux zones correctement documenté.

## Lire les canaux sur le plan, pas uniquement les étiquettes

Demandez un plan montrant les positions de valves, les séparateurs et les points d’alimentation. Festo indique au moins une alimentation par zone. Les canaux d’échappement doivent également être identifiés : la séparation du canal de pression ne donne pas automatiquement des échappements indépendants.

Cette revue concerne la configuration décrite dans le document. Elle n’autorise pas à transposer les mêmes règles à un autre terminal de valves. Le code complet du rail et des accessoires doit rester associé au plan retenu.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Trois chemins à vérifier" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="festo-vuvg-zones-pression-pilotage-12-14-title festo-vuvg-zones-pression-pilotage-12-14-desc" xmlns="http://www.w3.org/2000/svg"><title id="festo-vuvg-zones-pression-pilotage-12-14-title">Trois chemins à vérifier</title><desc id="festo-vuvg-zones-pression-pilotage-12-14-desc">Dans la documentation VUVG, les canaux 1, 3 et 5 sont séparables ; la séparation du pilotage 12/14 n’est pas possible de la même manière.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Trois chemins à vérifier</text><text x="28" y="125" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Canal 1 : zones séparables</text><rect x="35" y="155" width="208" height="70" rx="8" fill="#244b36"/><rect x="278" y="155" width="208" height="70" rx="8" fill="#244b36"/><text x="50" y="191" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Zone A</text><text x="294" y="191" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Zone B</text><path d="M261 142v95" fill="none" stroke="#f5a798" stroke-width="3" stroke-dasharray="5 5"/><text x="28" y="295" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Canal pilote 12/14</text><rect x="35" y="330" width="451" height="64" rx="8" fill="#244b36"/><path d="M55 362h410" fill="none" stroke="#ffffff" stroke-width="3"/><text x="30" y="450" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Le pilotage ne se sépare pas de la même</text><text x="30" y="476" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">manière.</text></svg>
</div>
*Dans la documentation VUVG, les canaux 1, 3 et 5 sont séparables ; la séparation du pilotage 12/14 n’est pas possible de la même manière.*

## Le pilotage conserve sa propre exigence

Une valve pilotée a des conditions de fonctionnement qui ne se résument pas à la pression du consommateur. Faites relever le type de pilotage, sa provenance et la plage applicable à chaque valve. Une zone de travail à basse pression ne démontre pas que le pilotage y fonctionne dans les conditions prévues.

Le [guide de pression différentielle d’une électrovanne](/guides/electrovanne-air-ne-ouvre-pas-pression-differentielle/) traite cette lecture. Il ne permet pas de reconstruire les connexions internes d’un rail sans documentation.

## Une fiche de commande à quatre lignes

| Ligne | Élément demandé au fournisseur |
| --- | --- |
| Alimentation de puissance | Canaux et points d’entrée par zone |
| Échappement | Chemin des canaux 3 et 5 |
| Pilotage | Origine et chemin du 12/14 |
| Composition | Codes de rail, séparateurs, plaques et valves |

Nous proposons d’annoter cette fiche sur le plan du fournisseur, plutôt que de produire un schéma de montage à partir de principes généraux. Un plan signé de configuration évite qu’une option de séparation soit supposée présente lors de la réception.

## Vérifier une modification de procédé

Lorsqu’une zone reçoit un nouvel actionneur, reprenez pression de puissance et exigence de pilotage. La compatibilité ne se déduit ni de la largeur de valve ni du nombre de positions libres. Le [guide du débit nominal de distributeur](/guides/choisir-distributeur-pneumatique-debit-nominal/) complète le dossier pour le passage d’air, sans valider les canaux partagés.

La conclusion de la revue doit nommer les zones réellement séparées et celles qui restent communes. Nous ne chiffrons pas de temps de réponse et ne qualifions pas une fonction de sécurité avec cette seule page. Le document permet d’éviter une erreur d’architecture précise : commander une séparation de puissance en croyant commander aussi une séparation de pilotage.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Festo VUVG/VTUG-G, zones et canaux, page PDF8](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2019/EN/VTUG-G_EN.PDF#page=8)
