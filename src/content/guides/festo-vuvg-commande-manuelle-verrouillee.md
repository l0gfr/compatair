---
title: "Électrovanne VUVG : repérer une commande manuelle laissée verrouillée"
seoTitle: "VUVG : commande manuelle et remise en service"
description: "Festo propose plusieurs commandes manuelles et protections. Relevez leur version dans le dossier de remise en service avant d’accuser la bobine."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["bobine-electrovanne-24v-ac-dc-remplacement", "capteur-pnp-npn-entree-automate-verin"]
sources: ["https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2021/US/VUVG-G_ENUS.PDF"]
---

**Le voyant de la bobine ne décrit pas toutes les commandes possibles d’une électrovanne.** La gamme VUVG comprend différentes commandes manuelles, dont des versions avec verrouillage. Leur identification doit figurer dans le dossier de remise en service après une opération de maintenance.

Le [catalogue Festo VUVG, page 4](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2021/US/VUVG-G_ENUS.PDF#page=4) distingue commandes non verrouillables, couvertes et verrouillables, avec différents capots. Une photographie de l’ensemble ne permet pas toujours de lire la variante. Relevez la référence et faites-la rapprocher du symbole et de la notice.

## Une vérification de configuration, avant un diagnostic de bobine

Quand un poste ne réagit pas comme prévu à la commande, documentez l’ordre électrique, l’état observé du distributeur et la version de commande manuelle. Cette séparation évite de traiter un état mécanique possible comme une preuve de défaut électrique.

Le titre de ce guide ne signifie pas que tout mouvement persistant vient d’un override verrouillé. Une cause doit être établie sur la machine par l’équipe compétente. Nous ne donnons ici aucune procédure pour neutraliser une commande automate ou contourner un arrêt.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Commande, distributeur et actionneur" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="festo-vuvg-commande-manuelle-verrouillee-title festo-vuvg-commande-manuelle-verrouillee-desc" xmlns="http://www.w3.org/2000/svg"><title id="festo-vuvg-commande-manuelle-verrouillee-title">Commande, distributeur et actionneur</title><desc id="festo-vuvg-commande-manuelle-verrouillee-desc">La revue distingue l’ordre électrique, la variante de commande manuelle et la réponse mécanique ; aucun voyant ne résume seul la chaîne.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Commande, distributeur et</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">actionneur</text><rect x="28" y="123" width="200" height="93" rx="8" fill="#244b36"/><text x="40" y="150" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Ordre bobine</text><text x="40" y="181" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Électrique</text><rect x="290" y="123" width="202" height="93" rx="8" fill="#244b36"/><text x="302" y="150" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Action manuelle</text><text x="302" y="181" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Variante HHB</text><path d="M125 217L245 300" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M237.0 299.2L245 300L241.4 292.9" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M385 217L278 300" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M281.2 292.7L278 300L285.9 298.7" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="150" y="300" width="230" height="80" rx="8" fill="#244b36"/><text x="162" y="327" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Tiroir du VUVG</text><path d="M265 380L265 420" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M261.2 413.0L265 420L268.8 413.0" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="145" y="420" width="240" height="76" rx="8" fill="#244b36"/><text x="157" y="447" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Actionneur</text><text x="30" y="530" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Lire les trois niveaux séparément</text></svg>
</div>
*La revue distingue l’ordre électrique, la variante de commande manuelle et la réponse mécanique ; aucun voyant ne résume seul la chaîne.*

## Mettre la commande manuelle dans la fiche de retour

Nous proposons un relevé de marquage et de protection, accompagné de la procédure de maintenance propre au poste. Indiquez si une commande manuelle a été utilisée et quel contrôle de retour est prescrit par cette procédure. Une case simplement cochée « test réussi » ne conserve pas cette information.

Distinguez le capot qui couvre l’accès, le comportement de la commande et le rôle du voyant. Ce sont trois éléments différents dans le catalogue. La présence d’une protection ne doit pas être interprétée comme une fonction de sécurité de toute la machine.

## Le compte rendu doit relier ordre et mouvement

| Trace | Usage dans la revue |
| --- | --- |
| Référence et variante manuelle | Identifier le matériel exact |
| État de commande enregistré | Décrire l’ordre électrique |
| Position et mouvement observés | Décrire la réponse réelle |
| Opération de maintenance précédente | Rechercher un changement documenté |
| Contrôle de remise en service | Conserver l’acceptation du responsable |

Le [guide des bobines AC et DC](/guides/bobine-electrovanne-24v-ac-dc-remplacement/) complète cette revue si un remplacement électrique est envisagé. Une bobine de même tension ne constitue pas une vérification de l’état mécanique de la commande manuelle.

## Vérifier aussi l’information de position

Le signal d’un capteur d’actionneur appartient à une autre partie de la chaîne. Le [guide des interfaces PNP et NPN](/guides/capteur-pnp-npn-entree-automate-verin/) aide à identifier cette entrée. Une indication de commande et une indication de position peuvent être différentes sans que l’une remplace l’autre.

Pour terminer le dossier, faites décrire le comportement attendu et les contrôles autorisés pour le poste. Gardez les observations et la conclusion séparées. Le catalogue établit l’existence des variantes manuelles ; il ne prouve pas la cause d’un incident particulier ni l’aptitude d’un capot à assurer une protection réglementaire.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Festo VUVG, commande manuelle et capots, p.4](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2021/US/VUVG-G_ENUS.PDF#page=4)
