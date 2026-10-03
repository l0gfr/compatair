---
title: "SMC ISE20 : filtre numérique ou délai pour une sortie qui commute"
seoTitle: "SMC ISE20 : filtre numérique ou délai de sortie"
description: "Le filtre ISE20 modifie affichage et sortie ; le délai agit sur la commutation. Choisissez le paramètre selon le signal et la réponse demandés."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["diagnostiquer-chute-pression-air-comprime", "smc-ise20-sortie-fenetre-inversee", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf"]
---

**Sur un pressostat SMC ISE20, augmenter le filtre numérique pour supprimer les commutations répétées modifie aussi la pression affichée.** Si seule la sortie doit être temporisée, la notice renvoie à un réglage différent : le délai de sortie.

Le [manuel OMS0007-F, fonction F3](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=33) précise ces deux portées. Les temps du filtre sont donnés comme indications de réponse à **90 %**. Ce nombre ne désigne ni un seuil d’alarme en bar ni une garantie que toute variation plus courte sera ignorée.

## Décrire le défaut que l’on cherche à supprimer

Le [glossaire du manuel](https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_ise-zse20_oms0007en-f.pdf#page=12) nomme « chattering » les commutations répétées autour du seuil sous l’effet des pulsations. Il décrit le filtre numérique comme un lissage des fluctuations, y compris lors d’une montée ou chute brusque. Ce filtre se répercute sur la sortie ON/OFF.

Deux demandes doivent donc être séparées. Pour calmer uniquement une sortie qui commute, examinez le délai prévu pour cette sortie. Pour lisser aussi la valeur mesurée, examinez F3 en acceptant son effet temporel sur l’affichage. Dans les deux cas, la réponse requise par le procédé reste à vérifier.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 370" role="img" aria-labelledby="smc-ise20-filtre-numerique-delai-sortie-svg-title smc-ise20-filtre-numerique-delai-sortie-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-ise20-filtre-numerique-delai-sortie-svg-title">Filtrer la valeur ou retarder la sortie</title><desc id="smc-ise20-filtre-numerique-delai-sortie-svg-desc">Le filtre numérique affecte affichage et commutation. Le délai concerne la commutation. Courbes qualitatives sans échelle temporelle ni délai prescrit.</desc>
<rect width="520" height="370" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="23">ISE20 : quel signal modifier ?</text><path d="M50 118h110v-40h290M50 221h110q85-77 160-77h130" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="270" y="108" fill="white" font-size="18">Pression appliquée</text><text x="285" y="199" fill="white" font-size="18">Valeur filtrée</text><path d="M50 302h235v-38h165" stroke="#9ebdad" stroke-width="3" fill="none"/><text x="50" y="339" fill="white" font-size="20">Le délai de sortie est un autre réglage.</text></g>
</svg>
<figcaption>Le filtre numérique affecte affichage et commutation. Le délai concerne la commutation. Courbes qualitatives sans échelle temporelle ni délai prescrit.</figcaption>
</figure>

## Une trace filtrée ne décrit pas la chute brute

Supposons, sans mesure sur appareil, une baisse rapide de pression suivie d’un retour. Un lissage peut modifier sa représentation dans le temps. La conséquence est particulièrement utile lors d’un diagnostic : comparer une pression filtrée à un manomètre ou à un autre capteur demande de connaître les traitements appliqués.

Le manuel définit la réponse à un échelon par le critère des 90 %. Il ne fournit pas dans ce passage une méthode permettant de reconstruire la pression brute à partir de quelques valeurs filtrées. Exporter une courbe plus souvent ne supprime pas le traitement déjà fait dans l’appareil.

Pour une chute liée au cycle d’une machine, le [protocole de mesure sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) aide à choisir le point de mesure. Ajoutez le filtre actif et le délai de sortie à ce relevé : emplacement et traitement répondent à deux questions différentes.

| Besoin | Paramètre à examiner dans la notice |
| --- | --- |
| Lisser l’affichage et les commutations | Filtre numérique F3 |
| Retarder uniquement l’action de la sortie | Délai de sortie |
| Comprendre une sortie inversée ou une fenêtre | Mode et style de sortie, avant la temporisation |
| Comparer deux historiques | Traitements et conditions d’acquisition des deux appareils |

## Valider le comportement demandé, pas seulement un écran calme

Conservez un cycle représentatif avant et après le changement autorisé : pression affichée, état de sortie et instant de l’événement machine. Le critère est la détection utile au procédé. Un écran plus stable ne démontre pas qu’un défaut de pression a disparu.

Le [cas ISE20 fenêtre normale ou inversée](/guides/smc-ise20-sortie-fenetre-inversee/) traite une sortie dont le sens est inattendu ; un délai supplémentaire ne corrige pas cette logique. Le [protocole d’audit réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) permet ensuite de conserver le paramétrage avec les conditions du relevé.

Si l’entrée sert à une fonction de protection, faites valider le changement dans le cadre de cette fonction. Ce guide explique les réglages documentés ; il ne qualifie aucun temps de réaction acceptable pour une machine.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
