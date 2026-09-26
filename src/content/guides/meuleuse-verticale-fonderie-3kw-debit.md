---
title: "Meuleuse verticale de fonderie : préparer un besoin de 3 000 L/min"
seoTitle: "Meuleuse de fonderie : quel débit pour 3 kW ?"
description: "Les CP3340 et CP3349 demandent plusieurs milliers de litres d’air par minute. Comparer débit en charge, diamètre et version avant de choisir le réseau."
pubDate: 2026-09-26
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["meuleuse-pneumatique-vitesse-regulee-governor", "debit-restitue-fad-vs-debit-aspire", "meuleuse-ir99-compresseur-800-litres"]
sources: ["https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf"]
---

Une meuleuse verticale de plusieurs kilowatts change l’échelle du poste pneumatique. Le besoin ne se résume plus à choisir une grosse cuve : il faut vérifier la production d’air restitué, la distribution jusqu’au poste et les autres usages simultanés.

Les [pages PDF 148 et 149 du catalogue Chicago Pneumatic](https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148) donnent des consommations **en charge**, avec des colonnes distinctes pour la vitesse, la puissance et la capacité de meule. Voici trois références, sans classement de performance :

| Référence | Puissance publiée | Régime à vide | Consommation en charge |
| --- | --- | --- | --- |
| CP3340-SALAVAD | 3 400 W | 8 500 tr/min | 52 L/s, soit 3 120 L/min |
| CP3340-SALAVADE | 3 400 W | 6 000 tr/min | 45 L/s, soit 2 700 L/min |
| CP3349-SALAVADE | 3 000 W | 7 700 tr/min | 46 L/s, soit 2 760 L/min |

Les conversions multiplient les L/s par 60. Elles ne constituent pas une mesure CompatAir ni une estimation de la moyenne sur une journée. Le premier et le troisième modèles acceptent une capacité de 180 mm dans ce tableau ; le deuxième est présenté en 230 mm.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Consommations déclarées en charge, L/min">
<svg viewBox="0 0 380 371" role="img" aria-labelledby="foundry-title foundry-desc" xmlns="http://www.w3.org/2000/svg"><title id="foundry-title">Consommations déclarées en charge, L/min</title><desc id="foundry-desc">CP3340-SALAVAD: 3120 ; CP3340-SALAVADE: 2700 ; CP3349-SALAVADE: 2760</desc><rect width="380" height="371" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">Consommations déclarées en</text><text x="20" y="60" font-size="20" font-weight="700" fill="#143426">charge, L/min</text><text x="20" y="112" font-size="16" font-weight="700" fill="#143426">CP3340-SALAVAD</text><rect x="20" y="126" width="250.00" height="23" rx="4" fill="#19704f"/><text x="352" y="144" text-anchor="end" font-size="16" fill="#143426">3120</text><text x="20" y="183" font-size="16" font-weight="700" fill="#143426">CP3340-SALAVADE</text><rect x="20" y="197" width="216.35" height="23" rx="4" fill="#19704f"/><text x="352" y="215" text-anchor="end" font-size="16" fill="#143426">2700</text><text x="20" y="254" font-size="16" font-weight="700" fill="#143426">CP3349-SALAVADE</text><rect x="20" y="268" width="221.15" height="23" rx="4" fill="#19704f"/><text x="352" y="286" text-anchor="end" font-size="16" fill="#143426">2760</text><text x="20" y="325" font-size="13" font-weight="400" fill="#35473d">Source : Chicago Pneumatic, pages PDF 148</text><text x="20" y="344" font-size="13" font-weight="400" fill="#35473d">et 149 ; versions distinctes.</text></svg>
</div>

## Vérifier un poste, puis l’atelier

Commencez par la machine réellement commandée. Relevez sa pression de référence, sa consommation en charge, le raccordement et les prescriptions de flexible. Contrôlez ensuite les caractéristiques des organes successifs : vanne, filtre, régulateur, raccord et flexible. Un élément dont le débit admissible est inconnu reste un point à documenter.

Pour le compresseur, demandez le **FAD à la pression utile**, les conditions de fonctionnement et la capacité disponible quand les autres postes travaillent. La consommation de l’outil n’est pas un débit aspiré de compresseur ; le [guide du FAD](/guides/debit-restitue-fad-vs-debit-aspire/) explicite cette différence.

Si l’on retient, à titre de scénario, deux CP3340-SALAVAD simultanément en charge, la somme des valeurs publiées vaut **6 240 L/min**. Ce calcul suppose précisément cette simultanéité et n’inclut ni autre poste ni perte ni réserve de dimensionnement. Il ne décrit pas automatiquement l’exploitation de votre atelier.

## Ce que le tableau ne permet pas de départager

Les watts et le diamètre ne donnent pas la quantité de matière retirée sur votre pièce, le coût par opération ou la durée d’exposition de l’opérateur. Pour trancher, un essai doit préciser l’abrasif, le matériau, l’accès et le résultat attendu. Une comparaison de prix sans ces conditions peut opposer deux équipements destinés à des travaux différents.

Les fiches [CP3340-SALAVAD](/outils-pneumatiques/meuleuse-chicago-pneumatic-cp3340-salavad/) et [CP3349-SALAVADE](/outils-pneumatiques/meuleuse-chicago-pneumatic-cp3349-salavade/) servent de point de départ documentaire. Le choix final du poste doit aussi intégrer le montage de meule, le carter et les conditions de sécurité de la notice.
