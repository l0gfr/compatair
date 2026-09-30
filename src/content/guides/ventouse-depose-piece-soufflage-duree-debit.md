---
title: "Ventouse qui dépose mal la pièce : durée et débit du soufflage de séparation"
seoTitle: "Ventouse : régler la dépose et le soufflage"
description: "Sur un Schmalz SCPSi-UHV-HD, distinguer commande de soufflage, durée et débit pour préparer une dépose régulière avec le concepteur du poste."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["ejecteur-schmalz-scpsi-economiseur-air-cycles", "ventouse-piece-poreuse-debit-vide", "pince-pneumatique-force-doigt-longueur-prehension"]
sources:
  - https://media.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101484/29f2b2b77a3c_BAL_30.30.01.01484_en-EN.pdf
---

La pièce est bien aspirée, mais reste sur la ventouse ou tombe à un moment irrégulier. **La dépose est une phase distincte de la prise.** Le débit de soufflage, la durée et le mode de commande doivent être identifiés séparément avant de modifier le vide de maintien.

## Trois commandes de soufflage sur la référence étudiée

La [notice Schmalz SCPSi-UHV-HD, révision 02 de 04/24](https://media.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101484/29f2b2b77a3c_BAL_30.30.01.01484_en-EN.pdf), section 7.6, distingue un soufflage commandé extérieurement, un soufflage temporisé déclenché à l’arrêt de l’aspiration et un soufflage temporisé déclenché extérieurement. La section 7.7 traite séparément le réglage du débit de soufflage.

Une durée de commande ne désigne donc pas toujours la durée effective : cela dépend du mode. Cette lecture concerne le SCPSi-UHV-HD documenté, sans transfert à tous les éjecteurs Schmalz.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="ventouse-depose-piece-soufflage-duree-debit-title ventouse-depose-piece-soufflage-duree-debit-desc" style="font-family:system-ui,sans-serif"><title id="ventouse-depose-piece-soufflage-duree-debit-title">Décrire la phase de libération</title><desc id="ventouse-depose-piece-soufflage-duree-debit-desc">Fonctions documentées dans la notice SCPSi-UHV-HD, puis réception selon le cycle de la machine.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Décrire la phase de libération</text><circle cx="40" cy="76" r="15" fill="#d3eb56"/><text x="35" y="82" font-size="17" fill="#10281e" font-weight="700">1</text><text x="68" y="72" font-size="18" fill="#d3eb56" font-weight="700">Déclenchement</text><text x="68" y="98" font-size="16" fill="#eef2e9">Extérieur ou après arrêt d’aspiration</text><circle cx="40" cy="146" r="15" fill="#d3eb56"/><text x="35" y="152" font-size="17" fill="#10281e" font-weight="700">2</text><text x="68" y="142" font-size="18" fill="#d3eb56" font-weight="700">Durée et débit</text><text x="68" y="168" font-size="16" fill="#eef2e9">Deux réglages à identifier séparément</text><circle cx="40" cy="216" r="15" fill="#d3eb56"/><text x="35" y="222" font-size="17" fill="#10281e" font-weight="700">3</text><text x="68" y="212" font-size="18" fill="#d3eb56" font-weight="700">Libération réelle</text><text x="68" y="238" font-size="16" fill="#eef2e9">Moment et position de réception</text></svg>
<figcaption>Fonctions documentées dans la notice SCPSi-UHV-HD, puis réception selon le cycle de la machine.</figcaption>
</figure>

## Dessiner la chronologie de dépose

Demandez au concepteur de représenter la commande d’aspiration, celle du soufflage, la position de l’actionneur et le moment où la pièce doit être libérée. Faites préciser l’état attendu de la pièce et le critère de contrôle de dépose.

Cette chronologie peut être confrontée à un relevé de cycle dans les conditions autorisées. Un simple bruit de souffle ne décrit ni son déclenchement exact ni la libération effective de la pièce.

## Débit et durée se vérifient séparément

Si la temporisation est augmentée, on modifie la durée prévue. Si le passage de soufflage est modifié, on agit sur un autre paramètre. Conservez les réglages initiaux et la modification approuvée pour que le résultat reste interprétable.

Le [guide de l’économiseur d’air](/guides/ejecteur-schmalz-scpsi-economiseur-air-cycles/) traite la génération et le maintien. Une prise correcte n’autorise pas à recopier ses seuils comme réglages de dépose. Le [dossier de préhension](/guides/pince-pneumatique-force-doigt-longueur-prehension/) montre, sur un autre dispositif, l’importance du scénario de libération.

## Examiner la pièce et la ventouse ensemble

Préparez la matière, la surface, la référence de ventouse, les conditions de contact et le mouvement. Si la dépose change avec le lot de pièces, gardez cette variation dans le diagnostic. Le [guide des surfaces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) couvre une autre difficulté de l’interface pièce-ventouse.

Aucun débit de soufflage optimal n’est proposé par défaut. Le réglage doit correspondre à la pièce et au montage, avec les limites de la notice et les critères fixés par le concepteur. Une pression plus élevée n’est pas une mesure de fiabilité de dépose.

## Terminer par le résultat mécanique

Après modification validée, faites vérifier le moment de libération, la position de réception et les retours de contrôle prévus par la machine. Notez les pièces utilisées et le nombre de cycles réellement observés ; ce nombre ne doit pas être transformé en durée de vie garantie.

Un compte rendu utile relie la commande choisie, la durée, le réglage de débit et le résultat de dépose. Il évite de conclure « soufflage réparé » quand seul le signal électrique a été vérifié.
