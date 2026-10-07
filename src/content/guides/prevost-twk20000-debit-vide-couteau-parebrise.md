---
title: "Prevost TWK 20000 : 113 l/min à vide suffisent-ils pour choisir un compresseur de dépose pare-brise ?"
seoTitle: "Prevost TWK 20000 : débit à vide et pare-brise"
description: "Le catalogue qualifie les 113 l/min à vide. Préparer le besoin d’air du couteau pare-brise sans inventer une consommation pendant la coupe."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["garage-automobile", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["rupes-nitto-ponceuse-debit-max-vide", "cle-a-chocs-manque-couple-diagnostic", "flexible-enrouleur-raccords-garage-debit"]
sources: ["https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf"]
---

Le catalogue donne **113 l/min** pour le couteau pneumatique Prevost **[TWK 20000](/outils-pneumatiques/cisaille-prevost-twk20000/)**, destiné à la découpe des joints de colle de pare-brise. La colonne dit **consommation d’air à vide**. Cette qualification est nécessaire : le document ne fournit pas une consommation pendant votre opération de coupe.

La source est le [catalogue Prevost AT DOC 14F, page PDF 42](https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=42). La même ligne publie une pression maximale de service de **6,2 bar** et une **cadence de coupe de 20 000 bpm**. Cette cadence n’est pas une vitesse de rotation de broche. Aucun de ces nombres ne permet de calculer silencieusement le débit en charge.

## Pourquoi un comparatif automatique resterait incomplet

Mettre 113 l/min en face du débit restitué d’un compresseur produit une comparaison de deux nombres. Pour obtenir un verdict de travail, il faut aussi établir ce que demande l’outil dans le régime envisagé et à quelle pression l’alimentation doit être maintenue au poste.

Le débit à vide n’est pas converti ici en débit chargé par un coefficient arbitraire. La cadence ne donne pas non plus un volume d’air par coup dans le catalogue consulté. Une pression maximale décrit une limite de service ; elle ne doit pas être transformée en prescription unique pour chaque tâche.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Donnée présente, donnée à demander" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="prevost-twk-regime-title prevost-twk-regime-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="prevost-twk-regime-title">Donnée présente, donnée à demander</title><desc id="prevost-twk-regime-desc">Le catalogue fournit des données avec un régime précis. La consommation pendant une découpe donnée demeure non documentée par cette seule table.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Donnée présente, donnée à demander</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Catalogue TWK 20000</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">113 l/min qualifiés à vide</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Cadence : 20 000 bpm</text><text x="45" y="228" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Maximum de service : 6,2 bar</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Opération pare-brise</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Débit dans le régime de coupe</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Conditions d’alimentation prescrites</text><text x="45" y="438" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Configuration lame et poste</text></svg>
</div>

*Le catalogue fournit des données avec un régime précis. La consommation pendant une découpe donnée demeure non documentée par cette seule table.*

## Le débit de coupe manque à la table

Transmettez au fournisseur la référence complète, la lame prévue, le type d’opération et l’organisation du poste. Précisez les autres consommateurs susceptibles de fonctionner en même temps. Demandez la consommation applicable pendant le travail ou une méthode de qualification du poste pour cette utilisation.

Pour le réseau existant, notez le flexible, les raccords et le point où la pression peut être relevée selon la procédure de l’atelier. Comparez les indications dans les conditions de fonctionnement prévues, avec un outil en état et un accessoire approuvé. Une perte de performance ne doit pas être corrigée par une hausse au-delà de la limite du modèle.

Le guide sur les [flexibles, enrouleurs et raccords](/guides/flexible-enrouleur-raccords-garage-debit/) aide à organiser cette partie du contrôle. Celui sur une [clé qui manque de couple](/guides/cle-a-chocs-manque-couple-diagnostic/) illustre la distinction entre alimentation et défaut d’outil, sans transposer son mécanisme de frappe au couteau pare-brise.

## Quel verdict publier dans la base ?

La base peut publier la référence, la source, la consommation **à vide** et les autres caractéristiques correctement qualifiées. Tant que le régime pertinent pour l’usage reste inconnu, un moteur de compatibilité doit conserver **`insufficient_data` pour une garantie de travail continu**, plutôt que d’inventer le débit manquant.

Cette limite est utile au professionnel : elle dit quelle information demander avant d’acheter. Si le fournisseur confirme un besoin applicable, le comparatif pourra utiliser cette donnée avec le débit restitué documenté du compresseur et les pertes du circuit. Le guide sur les [consommations maximales et à vide](/guides/rupes-nitto-ponceuse-debit-max-vide/) explique pourquoi ces mentions doivent rester visibles sur les fiches.

**Les seuls 113 l/min à vide ne garantissent pas l’alimentation d’une découpe.** Ils restent une caractéristique sourcée dans la base, avec le régime affiché. La qualification de la cadence évite également un faux classement par vitesse de rotation entre des outils de mécanismes différents.

Le même tableau distingue le [crayon graveur Prevost TES 34000](/outils-pneumatiques/graveur-prevost-tes34000/) du couteau pare-brise. Leur consommation à vide reste une caractéristique propre à chaque outil ; elle n’établit pas une équivalence entre gravure et découpe des joints.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
