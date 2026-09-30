---
title: "Éjecteur Schmalz SCPSi-UHV-HD : pourquoi l’économiseur d’air commute sans arrêt"
seoTitle: "SCPSi-UHV-HD : économiseur d’air et fuites"
description: "Un éjecteur alterne aspiration et arrêt trop souvent : lire H1, l’hystérésis et le passage en aspiration continue sans neutraliser les protections."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "ejecteur-vide-schmalz-sbpl-consommation", "vacuometre-vacuostat-bar-absolu-pourcentage-vide"]
sources:
  - https://media.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101484/29f2b2b77a3c_BAL_30.30.01.01484_en-EN.pdf
---

**Un économiseur d’air n’économise pendant l’arrêt que si le vide peut être maintenu assez longtemps.** Sur une pièce poreuse ou un circuit fuyant, des reprises fréquentes peuvent changer le fonctionnement observé. Il faut examiner la pièce, le circuit et le mode actif avant de promettre un gain.

## Les deux seuils de la régulation

La [notice Schmalz SCPSi-UHV-HD, 30.30.01.01484, révision 02 de 04/24](https://media.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101484/29f2b2b77a3c_BAL_30.30.01.01484_en-EN.pdf), section 7.5, décrit l’arrêt de la génération au seuil H1 et sa reprise lorsque le vide descend sous H1 − h1. La notice indique aussi une surveillance de fréquence de commutation et, selon la configuration, un passage à l’aspiration continue.

L’écart h1 est l’[hystérésis de régulation](/glossaire/#hysteresis-regulation-vide) de ce modèle. Ces paramètres ne donnent pas le gain de votre installation. Ils décrivent une logique de commande pour cette famille, avec des modes à lire dans la notice exacte.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="ejecteur-schmalz-scpsi-economiseur-air-cycles-title ejecteur-schmalz-scpsi-economiseur-air-cycles-desc" style="font-family:system-ui,sans-serif"><title id="ejecteur-schmalz-scpsi-economiseur-air-cycles-title">Une boucle avec hystérésis</title><desc id="ejecteur-schmalz-scpsi-economiseur-air-cycles-desc">Logique de la notice SCPSi-UHV-HD. La fréquence réelle dépend notamment du maintien du vide.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Une boucle avec hystérésis</text><circle cx="40" cy="76" r="15" fill="#d3eb56"/><text x="35" y="82" font-size="17" fill="#10281e" font-weight="700">1</text><text x="68" y="72" font-size="18" fill="#d3eb56" font-weight="700">Vide atteint H1</text><text x="68" y="98" font-size="16" fill="#eef2e9">La génération s’interrompt</text><circle cx="40" cy="146" r="15" fill="#d3eb56"/><text x="35" y="152" font-size="17" fill="#10281e" font-weight="700">2</text><text x="68" y="142" font-size="18" fill="#d3eb56" font-weight="700">Vide descend sous H1 − h1</text><text x="68" y="168" font-size="16" fill="#eef2e9">La génération reprend</text><circle cx="40" cy="216" r="15" fill="#d3eb56"/><text x="35" y="222" font-size="17" fill="#10281e" font-weight="700">3</text><text x="68" y="212" font-size="18" fill="#d3eb56" font-weight="700">Reprises trop fréquentes</text><text x="68" y="238" font-size="16" fill="#eef2e9">Lire le mode et sa protection</text></svg>
<figcaption>Logique de la notice SCPSi-UHV-HD. La fréquence réelle dépend notamment du maintien du vide.</figcaption>
</figure>

## Relever le vide pendant la phase de maintien

Notre proposition de diagnostic sépare la mise au vide, le maintien de pièce et la dépose. Faites enregistrer le vide et l’état de génération sur une séquence autorisée. Notez la matière, la ventouse, les liaisons et les réglages présents.

Si le phénomène apparaît seulement avec une matière poreuse, conservez un échantillon et ses caractéristiques pour le fournisseur. Le [guide des pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) explique pourquoi le débit de fuite doit être étudié avec le niveau de vide requis.

## Un mode continu ne démontre pas une panne

Schmalz décrit l’aspiration continue pour certaines pièces très poreuses et des réactions de protection liées à la fréquence de commutation. Le mode observé doit être rapproché de la configuration ; il n’est pas automatiquement la preuve d’une électrovanne défectueuse.

Conservez les protections et faites traiter la cause avec le concepteur. Forcer l’économie malgré des reprises incessantes pourrait aller contre les précautions de la notice. Ce guide ne donne aucun réglage de seuil destiné à masquer une fuite ou une mauvaise tenue de pièce.

## Distinguer consommation pendant aspiration et moyenne de cycle

La consommation publiée en génération active n’est pas la consommation moyenne observée sur le cycle. Pour un bilan de compresseur, faites documenter les phases actives et la possibilité d’aspiration continue. Le [guide du Schmalz SBPL](/guides/ejecteur-vide-schmalz-sbpl-consommation/) concerne une autre série ; ses valeurs ne se recopient pas sur le SCPSi-UHV-HD.

Gardez également la base de pression du vide. Le [dossier relatif et absolu](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) aide à lire les affichages, sans déduire la force de préhension d’un seuil seul.

## Refaire le contrôle sur la pièce réelle

Après intervention approuvée, comparez le cycle et les phases d’aspiration avec la même pièce et le même mouvement. Ajoutez le contrôle de prise et de dépose défini par le responsable de la machine.

La conclusion peut alors décrire une consommation ou un temps actif mesurés dans ce scénario. Aucun pourcentage d’économie ni maintien sûr universel n’est annoncé à partir de la seule présence de l’économiseur.
