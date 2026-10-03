---
title: "SMC ISE20 : pourquoi la sortie fenêtre est ON hors de la plage"
seoTitle: "SMC ISE20 : fenêtre normale ou sortie inversée"
description: "Une fenêtre ISE20 normale et inversée ne donne pas le même état ON. Relisez le mode, les seuils et l’hystérésis avant de déplacer une limite."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["smc-ise20-filtre-numerique-delai-sortie", "bar-psi-pression-absolue-relative", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf"]
---

**Une sortie SMC ISE20 allumée en dehors d’une plage peut être conforme au mode fenêtre inversé.** Ce comportement n’est pas, à lui seul, une preuve de défaut du capteur. Il faut vérifier le mode de fonctionnement et le style de sortie séparément.

Le [glossaire OMS0007-F](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=13) décrit la sortie normale en mode fenêtre comme ON entre les deux valeurs **P1L et P1H**. La [page suivante](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=14) décrit la sortie inversée comme ON hors des valeurs **n1L et n1H**. Le manuel distingue cette fenêtre du mode à hystérésis, qui n’emploie pas deux limites de plage de la même manière.

## Relire la fonction attendue par l’automate

Demandez si l’entrée signifie « pression dans la plage » ou « pression hors plage ». Ces deux états peuvent employer le même pressostat avec des styles de sortie différents. La variable nommée « air OK » ne révèle pas le réglage réellement chargé.

Relevez le mode, le style normal ou inversé, les deux seuils, l’hystérésis et le délai. La [fonction F1](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=30) organise le choix du mode et du type de sortie ; la [page 31](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=31) distingue le réglage d’hystérésis du réglage de fenêtre. Le contrôle doit porter sur cette configuration complète.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-ise20-sortie-fenetre-inversee-svg-title smc-ise20-sortie-fenetre-inversee-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-ise20-sortie-fenetre-inversee-svg-title">La même fenêtre avec deux styles de sortie</title><desc id="smc-ise20-sortie-fenetre-inversee-svg-desc">Illustration logique hors bandes d’hystérésis : en mode fenêtre, sortie normale à l’intérieur et inversée à l’extérieur. Les seuils et transitions doivent être vérifiés dans la notice.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="22">ISE20 : où la sortie doit-elle être ON ?</text><rect x="180" y="90" width="160" height="190" fill="#203f31"/><text x="190" y="120" fill="white" font-size="20">Fenêtre</text><path d="M35 173h145v-30h160v30h145" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="35" y="156" fill="white" font-size="18">Normal</text><path d="M35 245h145v30h160v-30h145" stroke="#9ebdad" stroke-width="3" fill="none"/><text x="35" y="226" fill="white" font-size="18">Inversé</text><text x="165" y="317" fill="white" font-size="17">Seuil bas</text><text x="315" y="317" fill="white" font-size="17">Seuil haut</text></g>
</svg>
<figcaption>Illustration logique hors bandes d’hystérésis : en mode fenêtre, sortie normale à l’intérieur et inversée à l’extérieur. Les seuils et transitions doivent être vérifiés dans la notice.</figcaption>
</figure>

## Ne pas interpréter une transition avec la seule plage nominale

Le schéma ci-dessus montre le sens général de la logique. Il ne remplace pas les diagrammes de commutation de la [page 32](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=32), ni les bandes d’hystérésis. Près d’un seuil, le résultat peut dépendre du sens de variation et de l’état précédent.

Dans un exemple fictif, un procédé souhaite être informé quand la pression est dans une fenêtre. Si l’appareil est réglé en sortie inversée, l’état donné par le pressostat exprime l’extérieur de cette fenêtre. Ajouter un délai ou déplacer légèrement les seuils ne transforme pas cette signification en celle demandée.

| Observation | Question préalable |
| --- | --- |
| ON à l’extérieur de la plage | Style inversé demandé ou réglé par erreur ? |
| ON après dépassement d’un seul seuil | Mode hystérésis ou fenêtre ? |
| Commutation répétée près d’une limite | Hystérésis, pulsation et temporisation ? |
| Indication locale différente de l’automate | Réglage du pressostat, câblage et interprétation de l’entrée ? |

Cette lecture ne permet pas de conclure sur le câblage à distance. La référence exacte et son schéma électrique restent nécessaires pour cet examen.

## Vérifier sans déplacer arbitrairement les critères du procédé

La prochaine action consiste à comparer la configuration lue à la fonction attendue, puis à faire contrôler les transitions dans les conditions autorisées. Conservez les valeurs appliquées et l’état de sortie de part et d’autre des limites, avec le sens de variation. Modifier la fenêtre pour retrouver un voyant familier peut changer le domaine accepté par la machine.

Le [guide ISE20 filtre ou délai](/guides/smc-ise20-filtre-numerique-delai-sortie/) examine la question temporelle une fois la logique confirmée. Le [guide pression absolue ou relative](/guides/bar-psi-pression-absolue-relative/) aide à vérifier la grandeur comparée. Pour un défaut sur un cycle actif, le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) replace enfin le capteur au bon endroit du circuit.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
