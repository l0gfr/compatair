---
title: "Étau pneumatique Haas : vérifier ce qu’il fait à la coupure de courant"
seoTitle: "Étau Haas : serrage à la coupure de courant"
description: "L’état de l’étau dépend du raccordement de l’option Programmable Air. Définir une réception documentée avant de supposer que la pièce reste serrée."
pubDate: "2026-10-07"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["haas-tab-alarme2081-seuil-logiciel-orifice", "compresseur-machine-cnc-haas-pression-debit", "bobine-electrovanne-24v-ac-dc-remplacement"]
sources: ["https://haascnc.com/service/troubleshooting-and-how-to/how-to/programmable-air-option-install-instructions.alarm%3Dgeneral_966-0000"]
---

« Pneumatique » ne décrit pas le comportement d’un étau quand l’alimentation électrique disparaît. Pour l’option **Programmable Air**, Haas précise que les ports auxquels sont raccordés les flexibles déterminent si l’étau reste serré à la coupure. Le constructeur demande de vérifier ce comportement à la fin de l’installation.

Cette remarque figure dans la [procédure Haas AD0473, révision B 11/2025, installation de l’électrovanne](https://haascnc.com/service/troubleshooting-and-how-to/how-to/programmable-air-option-install-instructions.alarm%3Dgeneral_966-0000). Elle interdit de supposer un état universel à partir du seul nom de l’option. L’étau fourni, le circuit réel et la machine doivent faire partie du dossier.

## Définir séparément chaque perte d’alimentation

Avant la réception, faites préciser l’état attendu pour la pièce, les mors et la commande dans chaque situation traitée par l’intégrateur. Une coupure électrique, une perte d’air et un arrêt commandé sont trois scénarios différents. Aucun test de l’un ne qualifie automatiquement les deux autres.

Le compte rendu doit dire quelle pièce ou charge a été utilisée, quel étau est monté et quelle configuration de circuit a été vérifiée. Un mot comme « maintien » demande aussi une définition : présence d’une pression, état du distributeur et maintien mécanique de la pièce ne sont pas la même observation.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Trois scénarios à réceptionner" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="haas-etau-coupure-title haas-etau-coupure-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="haas-etau-coupure-title">Trois scénarios à réceptionner</title><desc id="haas-etau-coupure-desc">Le résultat d’une coupure électrique ne permet pas de déduire celui d’une perte d’air. Aucun comportement de sécurité universel n’est attribué à l’option.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Trois scénarios à réceptionner</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Coupure électrique</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Alimentation d’air identifiée</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">État réel du serrage observé</text><text x="45" y="228" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Configuration du circuit conservée</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Perte d’air ou arrêt commandé</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Scénarios distincts à traiter</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Résultat non déduit du premier test</text><text x="45" y="438" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Procédure validée par l’intégrateur</text></svg>
</div>

*Le résultat d’une coupure électrique ne permet pas de déduire celui d’une perte d’air. Aucun comportement de sécurité universel n’est attribué à l’option.*

## Confier l’essai à une procédure de réception

Demandez au service Haas ou à l’intégrateur de définir un essai maîtrisé, sans usinage et sans exposition à une pièce qui pourrait se déplacer. Les conditions, les moyens de retenue et les critères d’acceptation doivent être fixés avant le test. Couper une machine en pleine opération pour « voir ce qui arrive » ne constitue pas une réception organisée.

Gardez une photographie du raccordement et les références des éléments installés dans le dossier de maintenance. Si le circuit est modifié, le résultat de la réception précédente doit être réexaminé. Le guide sur une [bobine d’électrovanne](/guides/bobine-electrovanne-24v-ac-dc-remplacement/) rappelle les différences de référence électrique ; une bobine compatible ne valide pas la fonction entière du serrage.

## L’alarme de serrage ne remplace pas ce contrôle

AD0473 prévoit également la vérification du pressostat et de l’alarme de fixation dans la procédure d’installation. Cette surveillance et l’état après coupure doivent être documentés séparément. Une indication de pression au démarrage n’explique pas ce que le circuit fera après la disparition d’une alimentation.

Si le comportement constaté diffère de celui attendu, arrêtez la réception et demandez une correction de la configuration par le service compétent. Ne changez pas les tuyaux ou les seuils de surveillance sur la seule base d’un schéma générique : les générations de machine et les options présentes comptent dans AD0473.

Le compte rendu doit fixer le **comportement observé de cet étau dans le scénario vérifié**, avec son critère de réception. Cela permet de discuter le besoin d’air de la [machine Haas](/guides/compresseur-machine-cnc-haas-pression-debit/) sans confondre réserve de pression et maintien garanti de la pièce. L’option [TAB](/guides/haas-tab-alarme2081-seuil-logiciel-orifice/) soulève encore une autre question : son débit de soufflage ne qualifie pas le serrage.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
