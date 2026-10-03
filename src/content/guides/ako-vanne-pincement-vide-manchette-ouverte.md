---
title: "AKO sous vide : une manchette peut rester fermée après évacuation de la commande"
seoTitle: "Vanne AKO sous vide : comprendre la réouverture"
description: "Une manchette AKO peut rester fermée dans un procédé sous vide. Distinguer purge obstruée et compensation prévue au-delà de 100 mbar de dépression."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["vacuometre-vacuostat-bar-absolu-pourcentage-vide", "electrovanne-air-ne-ouvre-pas-pression-differentielle", "festo-vfof-ba-verin-air-emprisonne"]
sources: ["https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf"]
---

Une vanne à pincement peut rester partiellement fermée alors que la commande a été évacuée. Dans un procédé sous vide, la pression du produit ne contribue plus à la réouverture comme dans une conduite en pression. **AKO prévoit une compensation de vide au corps pour les conditions décrites par sa notice.**

## Le seuil porte sur la dépression du procédé

La [notice AKO, page 11, section 3.4](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=11) demande une égalisation de pression avec le produit si la dépression du procédé dépasse **100 mbar**. Elle cite un bypass vers le procédé ou une pompe à vide, avec ses solutions AKOVAC.

La compensation doit au moins égaler le vide du procédé ; la notice préfère une dépression supérieure d’au moins **100 mbar**. Son exemple associe **−200 mbar dans la conduite, soit 0,8 bar absolu**, à **−300 mbar au corps, soit 0,7 bar absolu**. Ces valeurs sont celles de l’exemple publié. Le [guide des conventions de vide](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) explique pourquoi pression absolue et relative ne doivent pas être mélangées.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 355" role="img" aria-labelledby="ako-vanne-pincement-vide-manchette-ouverte-title ako-vanne-pincement-vide-manchette-ouverte-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="ako-vanne-pincement-vide-manchette-ouverte-title">AKO : le vide peut empêcher la réouverture</title><desc id="ako-vanne-pincement-vide-manchette-ouverte-desc">Au-delà de 100 mbar de dépression, la notice prévoit une compensation au corps. Exemple fabricant : conduite −200 mbar, compensation −300 mbar.</desc><rect width="520" height="355" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="23" font-weight="700">Réouverture dans un procédé sous vide</text><rect x="69" y="107" width="383" height="72" rx="17" fill="#26775b"/><text x="115" y="150" fill="#eef2e9" font-size="24">Conduite : −200 mbar</text><path d="M260 179v57" stroke="#8abfa3" stroke-width="7"/><rect x="78" y="236" width="366" height="56" rx="12" fill="#d3eb56"/><text x="111" y="272" fill="#10281e" font-size="24">Corps : −300 mbar</text><text x="31" y="326" fill="#eef2e9" font-size="19">Exemple de la notice, pas un réglage global</text></svg>
<figcaption>Au-delà de 100 mbar de dépression, la notice prévoit une compensation au corps. Exemple fabricant : conduite −200 mbar, compensation −300 mbar.</figcaption>
</figure>

## Une absence de réouverture a plusieurs causes

La [page 23](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=23) distingue un orifice de purge de commande obstrué, un vide dans la conduite, une fermeture prolongée et une valve de commande qui ne commute pas. Pour une manchette restée fermée longtemps, la notice décrit une déformation liée à l’élastomère et précise que la pression du produit aide l’ouverture.

| Cause envisagée | Partie concernée |
| --- | --- |
| Évacuation bouchée | Silencieux ou ligne de commande |
| Vide dans le procédé | Compensation prévue au corps |
| Fermeture prolongée | Comportement de la manchette et ouverture assistée prévue |
| Commande qui ne commute pas | Électrovanne de pilotage |

Augmenter la pression de fermeture ne résout pas une évacuation bloquée et peut augmenter la contrainte sur la manchette. Le [guide d’électrovanne](/guides/electrovanne-air-ne-ouvre-pas-pression-differentielle/) aide à situer la fonction de pilotage, sans fournir la conception d’un système de compensation AKO.

## Confirmer le montage avant une intervention

La page 11 exige que pression, température et conditions restent dans les limites de la plaque. Les solutions de compensation doivent être choisies avec la référence et le procédé réels. Le schéma ici explique les deux volumes de pression ; il n’est pas un plan de tuyauterie pour modifier une installation.

Le [guide de l’air emprisonné](/guides/festo-vfof-ba-verin-air-emprisonne/) distingue coupure et état de pression restant. Sur la vanne à pincement, le diagnostic doit de même établir l’évacuation de commande et le vide dans le procédé séparément. La réouverture ne peut pas être déclarée fiable à partir du seul état électrique de l’électrovanne.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [AKO, notice des vannes à manchon pneumatiques BA_pV_DIV](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf)
