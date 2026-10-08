---
title: "Schmalz SCPSi-L 2C : sauvegarder les paramètres avant de remplacer l’éjecteur"
seoTitle: "SCPSi-L 2C : remplacement et paramètres IO-Link"
description: "Sur un SCPSi-L marqué 2C, le stockage automatique IO-Link n’est pas disponible. Préparer la copie des paramètres et contrôler les deux modules après remplacement."
pubDate: "2026-10-08"
category: "Installer"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "ejecteur-schmalz-scpsi-economiseur-air-cycles"
  - "ventouse-depose-piece-soufflage-duree-debit"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300102084/e148279dd29c_BAL_30.30.01.02084_en-EN.pdf"
---

Remplacer l’éjecteur par la même référence ne garantit pas que le maître IO-Link lui restituera automatiquement ses paramètres. La [notice SCPSi-L, page 22](https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300102084/e148279dd29c_BAL_30.30.01.02084_en-EN.pdf#page=22) exclut la fonction **data storage** pour les produits à deux modules, marqués **2C**. Elle prévoit un transfert manuel par la fonction **block parameter**.

La décision se prend avant la dépose : conserver les paramètres de l’appareil existant ou disposer d’une configuration de référence vérifiée. Attendre que l’ancien éjecteur soit inaccessible rend ce contrôle plus difficile. Ce point concerne le SCPSi-L 2C de la notice 30.30.01.02084, édition 07/23, et non tous les produits IO-Link.

## Une communication active ne suffit pas à retrouver les réglages

La notice sépare les données cycliques de processus et les paramètres échangés sur demande. Un retour de présence de pièce ou un état de communication ne confirme donc pas, à lui seul, que les seuils, les modes de soufflage et les autres paramètres correspondent à l’installation précédente.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="schmalz-scpsi-l-2c-remplacement-parametres-io-link-title schmalz-scpsi-l-2c-remplacement-parametres-io-link-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="schmalz-scpsi-l-2c-remplacement-parametres-io-link-title">Deux voies de remplacement</title><desc id="schmalz-scpsi-l-2c-remplacement-parametres-io-link-desc">La notice exclut la restauration automatique data storage sur les versions 2C et prévoit un transfert manuel des paramètres.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Deux voies de remplacement</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Data storage</text><text x="41" y="151" font-size="21" fill="#eef2e9">Automatique</text><text x="41" y="193" font-size="21" fill="#eef2e9">Indisponible sur 2C</text><text x="41" y="235" font-size="21" fill="#eef2e9">Ne pas le supposer</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Block parameter</text><text x="285" y="151" font-size="21" fill="#eef2e9">Transfert manuel</text><text x="285" y="193" font-size="21" fill="#eef2e9">Export vérifié</text><text x="285" y="235" font-size="21" fill="#eef2e9">Relire après transfert</text></svg>
<figcaption>La notice exclut la restauration automatique data storage sur les versions 2C et prévoit un transfert manuel des paramètres.</figcaption>
</figure>


## Constituer la configuration de référence

Cette liste est une méthode de maintenance CompatAir : enregistrer l’identité complète de l’appareil, la configuration du maître, l’export disponible et les paramètres approuvés des deux modules. Associer la sauvegarde au nom du poste et à la date évite d’importer la configuration d’une autre machine portant le même modèle.

| Avant la dépose | À la remise en service |
| --- | --- |
| Référence complète avec marquage 2C | Référence et version du remplaçant |
| Paramètres lus ou configuration approuvée | Transfert manuel prévu par la notice |
| Affectation des deux modules | Lecture des paramètres après transfert |
| Critères de prise et de libération | Contrôle du cycle selon la procédure du poste |

Le fichier constitue une trace, pas une preuve de fonctionnement. Faites vérifier la compatibilité de l’export et du remplaçant par l’intégrateur. Utilisez la commande d’export et le format prévus par le maître et son outil de configuration.

## Contrôler les conséquences sur la pièce

Après le transfert approuvé, vérifiez les réglages réellement relus et les retours des deux modules. La réception doit suivre les critères du poste pour la prise, le maintien et la dépose. Le [guide de l’économiseur](/guides/ejecteur-schmalz-scpsi-economiseur-air-cycles/) explique pourquoi un changement de seuil ou de mode peut modifier la régulation ; le [guide de dépose](/guides/ventouse-depose-piece-soufflage-duree-debit/) traite la phase suivante.

Si les paramètres historiques manquent, une réception complète avec une configuration approuvée reste nécessaire. Une ancienne capture d’écran partielle ne vaut pas sauvegarde des deux modules. Consignez cette lacune dans le [suivi de maintenance](/guides/maintenance-preventive-reseau-air-comprime/) au lieu d’affirmer que le remplacement a été transparent.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
