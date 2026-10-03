---
title: "SMC IZN10E : une buse restrictive peut déclencher l’alarme de maintenance"
seoTitle: "SMC IZN10E : alarme NDL après changement de buse"
description: "Sur l’IZN10E fileté, une buse restrictive peut réduire la génération d’ions. Distinguez cette cause de la contamination ou de l’usure de l’émetteur."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["ioniseur-air-comprime-debit-neutralisation-electrostatique", "audit-reseau-air-comprime-protocole-mesures", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.smcworld.com/upfiles/etc/international/imm/IZN10E-TF2Z269EN.pdf"]
---

**Une alarme de maintenance sur un SMC IZN10E peut apparaître après montage d’une buse trop restrictive, même si le nettoyage n’explique pas le changement.** La notice documente une hausse de pression autour de l’émetteur qui diminue la génération d’ions.

Ce passage concerne la version **IZN10E-11□□□-□ à filetage femelle Rc1/8**. La [page 3 de la notice IZN10E-TF2Z269EN](https://www.smcworld.com/upfiles/etc/international/imm/IZN10E-TF2Z269EN.pdf#page=3) avertit qu’une buse dont la sortie ou le diamètre intérieur est inférieur à **4 mm** peut augmenter cette pression selon la configuration. Ce n’est pas une règle universelle imposant une sortie de 4 mm sur tout ioniseur.

## Relier l’apparition de NDL à la modification du montage

Notez la référence de buse, les passages et l’éventuelle combinaison raccord/flexible ajoutée. Le modèle à filetage femelle permet justement un assemblage préparé par l’utilisateur ; sa géométrie devient donc une partie du contrôle.

La même page précise que la performance de neutralisation est basse lorsque cette alarme est présente. La machine peut continuer à fonctionner malgré l’avertissement : le fait qu’elle souffle ne permet pas de considérer sa neutralisation comme rétablie.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-izn10e-alarme-maintenance-buse-etroite-svg-title smc-izn10e-alarme-maintenance-buse-etroite-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-izn10e-alarme-maintenance-buse-etroite-svg-title">La buse peut modifier la pression près de l’émetteur</title><desc id="smc-izn10e-alarme-maintenance-buse-etroite-svg-desc">Pour la version IZN10E à filetage femelle, une buse de sortie ou passage inférieur à 4 mm peut augmenter la pression autour de l’émetteur selon la configuration, réduire la génération et déclencher l’alarme.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="20">IZN10E : une alarme après changement de buse</text><path d="M33 145h88m227 0h78l35-25v50l-35-25" stroke="#9ebdad" stroke-width="8" fill="none"/><rect x="121" y="98" width="227" height="99" rx="12" fill="#203f31"/><text x="146" y="138" fill="white" font-size="22">Émetteur</text><text x="145" y="174" fill="white" font-size="19">Pression locale</text><path d="M375 195v52m0 0H265" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="29" y="281" fill="white" font-size="20">Buse étroite → génération diminuée possible</text><text x="29" y="324" fill="white" font-size="20">NDL ne signifie pas seulement « poussière ».</text></g>
</svg>
<figcaption>Pour la version IZN10E à filetage femelle, une buse de sortie ou passage inférieur à 4 mm peut augmenter la pression autour de l’émetteur selon la configuration, réduire la génération et déclencher l’alarme.</figcaption>
</figure>

## L’avertissement n’a pas une cause unique

La notice nomme aussi contamination, usure et dommage de l’émetteur. Elle prévoit nettoyage ou remplacement suivant l’état, avec ses procédures d’arrêt et d’intervention. Une alarme après changement de buse ne suffit pas à exclure ces autres causes ; elle rend nécessaire l’examen du nouvel échappement.

Le nettoyage et le remplacement ne doivent pas être réalisés sous tension ou avec l’air alimenté. La [section maintenance de la même page](https://www.smcworld.com/upfiles/etc/international/imm/IZN10E-TF2Z269EN.pdf#page=3) traite ces conditions et réserve l’intervention à un opérateur disposant des connaissances nécessaires. Réarmer le signal sans traiter la cause ne démontre pas la restauration du procédé.

| Événement ou observation | Piste à vérifier |
| --- | --- |
| Alarme après ajout d’une buse ou rallonge | Géométrie, restriction et version filetée exacte |
| Dégradation sans changement de montage | Contamination, usure ou dommage selon notice |
| Air présent malgré l’alarme | État de neutralisation, pas seulement souffle |
| Défaut qui reste après nettoyage | État de l’émetteur et montage ; examen qualifié |

## Contrôler le résultat demandé sur la pièce

Le [guide ioniseur et besoin d’air](/guides/ioniseur-air-comprime-debit-neutralisation-electrostatique/) explique pourquoi volume d’air et neutralisation ne sont pas le même critère. Ici, un changement de pression locale peut précisément dissocier souffle apparent et génération utile.

Après remise du montage dans les conditions prévues, vérifiez le comportement sur le procédé, avec sa méthode de contrôle électrostatique et les états d’alarme. N’annoncez pas une neutralisation retrouvée sur le seul retour du voyant. Le [protocole d’audit réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à documenter la pression au point alimenté ; le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) répond à une baisse d’alimentation, différente de la restriction de sortie décrite ici.

La demande utile au service SMC comprend le modèle, la buse et la chronologie du défaut. Elle permet de choisir entre correction du montage et entretien de l’émetteur sans remplacer systématiquement une pièce propre.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
