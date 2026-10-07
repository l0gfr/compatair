---
title: "Festo DAPS MW : le volant permet une manœuvre, mais comment confirmer la position de vanne ?"
seoTitle: "Festo DAPS MW : volant et confirmation de position"
description: "La commande manuelle et la détection de position sont deux fonctions. Définir ce qui sera observé après une manœuvre sans pression d’alimentation."
pubDate: "2026-10-07"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["festo-daps-simple-double-effet-couple-decollage", "festo-vuvg-commande-manuelle-verrouillee", "verin-simple-double-effet-ressort-retour"]
sources: ["https://www.festo.com/media/catalog/202737_documentation.pdf"]
---

Un actionneur équipé d’un volant peut permettre de déplacer une vanne lorsque l’alimentation d’air est coupée. Cela ne signifie pas que la commande de procédé connaît automatiquement sa nouvelle position. Pour les **DAPS avec volant MW**, il faut traiter séparément la possibilité de manœuvre et la confirmation du résultat.

Le [catalogue Festo DAPS, édition 2026/07, page 2](https://www.festo.com/media/catalog/202737_documentation.pdf#page=2) décrit l’usage du volant sans pression d’alimentation. La [table des versions double effet avec volant, page 9](https://www.festo.com/media/catalog/202737_documentation.pdf#page=9) indique l’absence de détection de position intégrée. Un accessoire de retour d’état éventuellement ajouté à votre ensemble doit donc être identifié dans le dossier.

## La position locale et le retour de commande

Avant une manœuvre, la procédure d’installation doit préciser la position demandée, les conditions du procédé et les moyens de confirmation. Le nom « override » ne définit pas ces conditions. Demandez à l’intégrateur quelle notice s’applique au modèle complet et comment l’état de la vanne est enregistré dans le système concerné.

Une indication locale, un retour électrique et le passage réel du fluide répondent à des questions différentes. Selon le procédé, le critère nécessaire doit être défini par son responsable. Ce guide ne propose pas de manœuvre sur une installation en service ni de position universellement sûre.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Manœuvrer et connaître l’état" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="daps-mw-position-title daps-mw-position-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="daps-mw-position-title">Manœuvrer et connaître l’état</title><desc id="daps-mw-position-desc">Deux fonctions doivent être documentées : déplacer la vanne et confirmer la position requise. Le volant n’ajoute pas automatiquement un capteur au système.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Manœuvrer et connaître l’état</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Volant MW</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Déplacement manuel décrit par Festo</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Version complète à identifier</text><text x="45" y="228" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Procédure propre à l’installation</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Confirmation de position</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Capteur ou indication à identifier</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">État lu par la commande à vérifier</text><text x="45" y="438" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Critère de réception défini</text></svg>
</div>

*Deux fonctions doivent être documentées : déplacer la vanne et confirmer la position requise. Le volant n’ajoute pas automatiquement un capteur au système.*

## Vérifier les accessoires de retour d’état

Listez l’actionneur, la vanne, la commande manuelle et les éventuels accessoires de retour d’état. Photographiez les références et conservez le schéma fonctionnel utilisé par l’intégrateur. Le résultat de réception doit indiquer ce qui a effectivement été observé, et par quel moyen.

Faites également définir le traitement d’une discordance : position locale différente de l’information de commande, état non confirmé ou impossibilité de manœuvre. La poursuite du procédé doit relever de sa procédure validée. Un changement manuel suivi d’une reprise automatique sans état connu laisse le problème non résolu.

Le guide sur une [commande manuelle de distributeur Festo VUVG](/guides/festo-vuvg-commande-manuelle-verrouillee/) traite une autre fonction et un autre organe. Sa procédure ne doit pas être transposée au volant DAPS. Le mécanisme et la référence réelle commandent la notice à utiliser.

## Préparer le retour à la commande pneumatique

Après une intervention manuelle, demandez quelles vérifications sont nécessaires avant de rendre la commande au système. La position attendue, l’état de l’accessoire manuel et le retour de position doivent être traités dans la procédure du modèle. Les documents utilisés ici ne justifient pas une recette commune à toutes les variantes MW.

Pour une version avec ressort, la [sélection simple ou double effet](/guides/festo-daps-simple-double-effet-couple-decollage/) doit aussi traiter le comportement à la perte d’air. La présence d’un volant ne permet pas d’en déduire une position de repli pour tous les montages.

**MW permet une manœuvre manuelle ; la confirmation de position demeure une fonction séparée de l’ensemble installé.** Cette distinction permet d’écrire une réception exploitable et évite d’attribuer une surveillance ou une fonction de sécurité à un équipement qui n’a pas été identifié.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
