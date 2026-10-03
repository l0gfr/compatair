---
title: "Cabine BNP : chercher la cause d’une mauvaise visibilité au-delà du compresseur"
seoTitle: "Clemco BNP : mauvaise visibilité et ventilation"
description: "La notice BNP sépare filtres, extraction, registres, média et gaines. Préparez un diagnostic de visibilité avec observations plutôt qu’une hausse de pression."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-cabine-sablage-succion-pression", "sableuse-perd-puissance-abrasif-humide-diagnostic"]
sources: ["https://www.clemcoindustries.com/s/21278-BNP-65-220-Rev-K.pdf"]
---

**Une cabine où l’on ne voit plus la pièce ne réclame pas automatiquement un compresseur plus gros.** Dans la notice BNP 65P/220P, le diagnostic de visibilité examine extraction, filtres, réglages d’air, état du média et conduits. La pression de projection est une donnée du poste, mais elle ne résume pas la ventilation.

La [section 8.1 de la notice 21278 Rev.K](https://www.clemcoindustries.com/s/21278-BNP-65-220-Rev-K.pdf#page=32) fournit un chemin de recherche propre à cette cabine. Commencez par relever la variante et le dépoussiéreur associé. Leurs notices doivent être rapprochées avant toute intervention.

## Deux circuits à dessiner sur la fiche d’incident

La projection utilise l’air qui alimente le sablage. La ventilation fait circuler l’air chargé de poussières vers le système de récupération et le collecteur. Un manomètre du premier circuit ne qualifie pas le débit ou le réglage du second.

Nous proposons de représenter ces chemins avec les organes réellement installés. Notez ce qui a changé récemment : média, cartouche, gaine ou configuration. Ces informations orientent une revue sans inventer de cause à distance.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Projection et ventilation" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="clemco-bnp-visibilite-ventilation-media-title clemco-bnp-visibilite-ventilation-media-desc" xmlns="http://www.w3.org/2000/svg"><title id="clemco-bnp-visibilite-ventilation-media-title">Projection et ventilation</title><desc id="clemco-bnp-visibilite-ventilation-media-desc">La pression de projection et le circuit de poussières sont deux chaînes de diagnostic dans la cabine BNP.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Projection et ventilation</text><rect x="174" y="210" width="168" height="90" rx="8" fill="#244b36"/><text x="186" y="237" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Cabine BNP</text><rect x="30" y="385" width="195" height="94" rx="8" fill="#244b36"/><text x="42" y="412" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Récupération</text><rect x="295" y="385" width="197" height="94" rx="8" fill="#244b36"/><text x="307" y="412" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Filtration</text><path d="M253 300L136 385" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M139.4 377.8L136 385L143.9 384.0" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M225 429L295 429" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M288.0 432.8L295 429L288.0 425.2" fill="none" stroke="#9ebdad" stroke-width="3"/><text x="27" y="354" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">Air et poussières</text><rect x="27" y="120" width="170" height="62" rx="8" fill="#244b36"/><text x="39" y="147" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Air comprimé</text><path d="M197 151L252 210" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M244.4 207.5L252 210L250.0 202.2" fill="none" stroke="#d3eb56" stroke-width="3"/><text x="337" y="172" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Projection</text></svg>
</div>
*La pression de projection et le circuit de poussières sont deux chaînes de diagnostic dans la cabine BNP.*

## Décrire la gêne avec des observations reproductibles

Indiquez quand la visibilité se dégrade : dès le démarrage, après une durée d’utilisation ou après un remplacement. Relevez les indications de fonctionnement accessibles et l’état du média selon les instructions de la cabine. Les contrôles internes et électriques appartiennent au personnel habilité et à la procédure de l’installation.

Clemco cite notamment filtre encrassé, extracteur, média friable ou usé, registres trop fermés et dommages ou obstructions de gaines. [Notice BNP,§ 8.1](https://www.clemcoindustries.com/s/21278-BNP-65-220-Rev-K.pdf#page=32). Cette liste ne hiérarchise pas les probabilités de votre atelier. Elle empêche surtout de traiter tous les symptômes comme une chute de pression de projection.

## Un tableau qui garde la bonne unité

| Observation à consigner | Circuit concerné |
| --- | --- |
| Pression pendant projection | Alimentation de sablage |
| Indication du collecteur | Filtration et extraction |
| Position des registres documentée | Circulation d’air de la cabine |
| État du média | Production et récupération des poussières |
| État visible des conduits | Chemin de ventilation |

Conservez les unités telles qu’elles sont relevées. Une pression statique de ventilation et une pression de ligne d’air comprimé ne doivent pas figurer sous une même colonne « pression cabine ».

## Après intervention, vérifier la visibilité et le résultat sur pièce

À la réception, utilisez la configuration et le média prévus, avec les critères définis par le responsable du procédé. Consignez la modification et les observations avant/après. Ne qualifiez pas une aspiration simplement parce que le moteur tourne.

Le [guide succion et pression](/guides/compresseur-cabine-sablage-succion-pression/) aide à documenter la demande de projection. Le [diagnostic d’abrasif humide](/guides/sableuse-perd-puissance-abrasif-humide-diagnostic/) répond à un autre groupe de symptômes ; gardez ces dossiers reliés sans les confondre.

La notice ne fournit pas un gain universel de cadence pour un meilleur tirage. Aucun rendement de récupération, temps gagné ou seuil réglementaire d’exposition n’est annoncé ici. Le résultat recherché est un incident décrit sur le bon circuit, puis une correction et une réception documentées.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Clemco BNP 65P/220P 21278 Rev.K, section 8.1](https://www.clemcoindustries.com/s/21278-BNP-65-220-Rev-K.pdf#page=32)
