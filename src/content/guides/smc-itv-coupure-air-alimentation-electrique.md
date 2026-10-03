---
title: "SMC ITV : distinguer coupure d’air et perte d’alimentation électrique"
seoTitle: "SMC ITV : coupure d’air sous tension et arrêt"
description: "La notice ITV distingue perte d’air sous tension et coupure électrique. Relevez la séquence sans assimiler mémoire des réglages à maintien de pression."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["distributeur-5-3-centre-ferme-verin-derive", "utiliser-plusieurs-outils-pneumatiques", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://www.smcworld.com/upfiles/etc/international/imm/ITV2-TF2Z205EN.pdf"]
---

**Un SMC ITV qui réagit après une coupure d’air sous tension ne se trouve pas dans le même cas qu’une coupure électrique.** La notice distingue ces événements. Elle ne permet pas d’annoncer une dépressurisation automatique de toute la sortie à la perte de tension.

La [notice ITV2-TF2Z205EN, §4.1](https://www.smcworld.com/upfiles/etc/international/imm/ITV2-TF2Z205EN.pdf#page=1) indique que les réglages sont conservés brièvement si l’alimentation électrique disparaît. Si la pression d’air disparaît alors que l’appareil reste sous tension, elle avertit que le solénoïde peut présenter un « flutter » et demande de couper l’alimentation électrique.

## Reconstituer l’ordre des événements

Relevez le moment de la perte d’air, l’état de l’alimentation électrique et celui de la commande analogique. « Le poste a été arrêté » ne dit pas lequel de ces trois éléments a changé en premier. Une vanne réseau fermée peut laisser le régulateur alimenté et commandé.

La notice traite ici les ITV10**, ITV20** et ITV30**, avec des variantes de signaux ; elle précise que les produits spéciaux **-X** peuvent avoir d’autres spécifications. Le modèle complet doit donc être identifié avant d’appliquer le passage à un appareil installé.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="smc-itv-coupure-air-alimentation-electrique-svg-title smc-itv-coupure-air-alimentation-electrique-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-itv-coupure-air-alimentation-electrique-svg-title">Deux pertes d’alimentation à distinguer</title><desc id="smc-itv-coupure-air-alimentation-electrique-svg-desc">La notice ITV distingue perte électrique et perte d’air sous tension. La conservation brève annoncée porte sur les réglages ; elle ne qualifie pas une dépressurisation de sortie.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="22">ITV : quelle alimentation a disparu ?</text><rect x="35" y="90" width="215" height="150" rx="10" fill="#203f31"/><rect x="270" y="90" width="215" height="150" rx="10" fill="#203f31"/><text x="54" y="124" fill="white" font-size="19">Électricité coupée</text><text x="54" y="165" fill="white" font-size="18">Réglages retenus</text><text x="54" y="197" fill="white" font-size="18">brièvement</text><text x="287" y="124" fill="white" font-size="17">Air coupé, tension ON</text><text x="288" y="165" fill="white" font-size="18">Solénoïde :</text><text x="288" y="197" fill="white" font-size="18">« flutter »</text><text x="28" y="301" fill="white" font-size="21">État électrique ≠ état de tous les volumes.</text><text x="28" y="337" fill="white" font-size="21">Lire la séquence de l’installation.</text></g>
</svg>
<figcaption>La notice ITV distingue perte électrique et perte d’air sous tension. La conservation brève annoncée porte sur les réglages ; elle ne qualifie pas une dépressurisation de sortie.</figcaption>
</figure>

## Ne pas confondre mémoire de réglage et pression maintenue

Le mot « settings » du §4.1 désigne les réglages. Il ne donne pas une durée garantie de maintien de pression aval, ni une vitesse de vidange. Présenter cette ligne comme un mécanisme de retenue pneumatique ou de purge serait une extension non démontrée.

Pour préparer une intervention, vérifiez séparément les volumes qui doivent être isolés et dépressurisés dans le circuit réel. Le [guide distributeur et dérive du vérin](/guides/distributeur-5-3-centre-ferme-verin-derive/) aide à suivre les volumes et les actions de commande. Une valeur affichée ou une consigne à zéro ne prouve pas à elle seule l’état de tous ces volumes.

## Identifier aussi la sortie libre

Le même paragraphe avertit qu’en condition de sortie libre, l’air peut continuer à s’écouler. Ce cas change le budget d’air du poste : un régulateur n’est pas seulement un nombre de consigne dans l’automate.

Le [guide d’utilisation de plusieurs outils](/guides/utiliser-plusieurs-outils-pneumatiques/) sépare les fonctionnements simultanés. Pour un écoulement inattendu, conservez état de commande, pression amont et architecture aval avant de le classer comme une fuite mécanique.

| Événement | Vérification documentaire |
| --- | --- |
| Perte électrique | Conservation brève des réglages, sans garantie de pression extrapolée |
| Perte d’air avec tension présente | Avertissement de flutter et séquence d’arrêt à examiner |
| Sortie laissée libre | Écoulement continu prévu par la notice |
| Variante -X | Dessin et spécifications propres à obtenir |

## Faire corriger la séquence au bon endroit

Transmettez la chronologie au responsable de l’installation. La prochaine action est de comparer la séquence d’arrêt et de retour aux prescriptions de la notice complète, avec le circuit monté. La notice interdit le démontage utilisateur et renvoie au bureau SMC pour conseil.

Le [protocole d’audit d’air](/guides/audit-reseau-air-comprime-protocole-mesures/) permet de préparer un relevé qui relie pression, commande et alimentation. Ce contrôle peut expliquer le défaut de séquence ; il ne qualifie aucune fonction de sécurité ou de vidange de machine.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
