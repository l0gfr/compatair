---
title: "Schmalz FQE Xc : pourquoi la LED d’aspiration allumée signifie aspiration arrêtée"
seoTitle: "Schmalz FQE Xc : lire la LED d’aspiration inversée"
description: "Schmalz FQE Xc : LED aspiration allumée pour OFF, LED éteinte pour ON. Vérifier la variante et distinguer voyant, commande et état de prise."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["schmalz-fqe-ventouse-depose-remplacement", "vacuometre-vacuostat-bar-absolu-pourcentage-vide", "capteur-pnp-npn-entree-automate-verin"]
sources: ["https://www.schmalz.com/site/binaries/content/assets/media/05_services/operating-manual/vt/fqe-manual-en-new.pdf"]
---

Sur la variante **FQE…Xc**, la notice Schmalz indique une lecture peu intuitive : la **LED d’aspiration allumée** correspond à **aspirationOFF** ; la **LED éteinte** correspond à **aspirationON**, utilisée pour transporter la pièce. La LED de soufflage suit un autre tableau : allumée signifie soufflageON. [Display Elements, version FQE…Xc](https://www.schmalz.com/site/binaries/content/assets/media/05_services/operating-manual/vt/fqe-manual-en-new.pdf#page=19).

Un technicien qui interprète les deux voyants avec la même convention peut donc diagnostiquer à tort une inversion de commande. La première vérification est la variante exacte, avant toute modification de câblage ou de programme.

## Utiliser le tableau de la bonne variante

| Voyant de la version Xc | Allumé | Éteint |
|---|---|---|
| Aspiration | AspirationOFF | AspirationON |
| Soufflage | SoufflageON | SoufflageOFF |

Ce tableau reprend la notice identifiée. Il ne décrit pas toutes les versions FQE, tous les éjecteurs Schmalz ni les voyants d’un module d’entrées-sorties de l’automate. [Tableau des éléments d’affichage](https://www.schmalz.com/site/binaries/content/assets/media/05_services/operating-manual/vt/fqe-manual-en-new.pdf#page=19).

La notice présente aussi le diagramme de commande des vannes de la variante Xc. Le voyant, la commande électrique et l’état de prise doivent donc être relevés comme trois informations distinctes. [Circuit Diagram for Valves, version FQE…Xc](https://www.schmalz.com/site/binaries/content/assets/media/05_services/operating-manual/vt/fqe-manual-en-new.pdf#page=18).

<div class="article-infographic article-infographic--compact" role="group" aria-label="FQE Xc : deux conventions de voyant" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="schmalz-fqe-xc-led-aspiration-allumee-arret-title schmalz-fqe-xc-led-aspiration-allumee-arret-desc" xmlns="http://www.w3.org/2000/svg"><title id="schmalz-fqe-xc-led-aspiration-allumee-arret-title">FQE Xc : deux conventions de voyant</title><desc id="schmalz-fqe-xc-led-aspiration-allumee-arret-desc">Tableau de la notice 01/2021, version Xc uniquement ; aucune information de charge admissible.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">FQE Xc : deux conventions de</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">voyant</text><circle cx="63" cy="155" r="19" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><text x="107" y="161" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">LED aspiration allumée : OFF</text><circle cx="63" cy="291" r="19" fill="none" stroke="#d3eb56" stroke-width="2"/><text x="107" y="297" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">LED aspiration éteinte : ON</text><circle cx="63" cy="427" r="19" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><text x="107" y="433" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">LED soufflage allumée : ON</text><text x="28" y="515" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Convention de la version FQE…Xc</text></svg>
</div>
*Tableau de la notice 01/2021, version Xc uniquement ; aucune information de charge admissible.*

## Préparer le diagnostic avec les états complets

Nous proposons de noter la référence du préhenseur, l’état demandé par l’automate, le voyant observé et la confirmation pneumatique ou de prise disponible. Ajouter le moment du cycle permet de distinguer aspiration, dépose et repos. Un voyant photographié sans la phase correspondante laisse une partie du diagnostic ouverte.

Pour une machine existante, conserver d’abord le programme et les paramètres appliqués. Toute modification de commande doit être faite dans le cadre de sa maintenance, avec la notice et les conditions de prévention du poste. Une inversion de sortie destinée seulement à faire correspondre une LED à une attente visuelle n’est pas une méthode de diagnostic.

## Le voyant ne démontre pas la tenue de la pièce

Le tableau d’affichage renseigne un état de fonctionnement défini par la notice. Il ne fournit ni force de maintien, ni étanchéité de contact, ni admissibilité d’une trajectoire. La confirmation de prise et les conditions de mouvement restent à vérifier avec les fonctions de la configuration réelle.

Le guide sur les [unités du vide et les seuils de capteur](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) prépare la lecture d’un relevé pneumatique. Celui sur les [sorties PNP/NPN](/guides/capteur-pnp-npn-entree-automate-verin/) traite le raccordement des signaux. Aucun de ces points ne change la convention de LED documentée pour Xc.

## Refermer le diagnostic sur un état identifié

Un dossier utile peut joindre le tableau appliqué, la variante, les observations par phase et les défauts éventuels de l’automate. Si la commande et l’état affiché ne correspondent pas à cette notice, le fournisseur peut examiner la version, le câblage et la fonction configurée avec ces éléments.

Pour les pièces d’usure, le guide sur le [remplacement des ventouses FQE](/guides/schmalz-fqe-ventouse-depose-remplacement/) traite une autre intervention. Une ventouse endommagée peut demander son propre contrôle ; elle ne justifie pas de réinterpréter un voyant. La réponse documentaire est ici exacte : sur FQE…Xc, aspiration allumée signifieOFF, tandis que soufflage allumé signifieON.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Schmalz, notice FQE 30.30.01.02497, version 01 de mars2021](https://www.schmalz.com/site/binaries/content/assets/media/05_services/operating-manual/vt/fqe-manual-en-new.pdf#page=19)
