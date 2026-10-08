---
title: "Nordson Performus X : arrêter la goutte sans aspirer le produit vers l’appareil"
seoTitle: "Performus X : réglage du vide et retour produit"
description: "Un vide trop fort peut réaspirer le produit ou créer des bulles. Suivre le repère de goutte stable et vérifier le piston pour les fluides peu visqueux."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "pistolet-cartouche-pneumatique-colle-mastic"
  - "cuve-peinture-sous-pression-air-produit-agitation"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://nc-p-001.sitecorecontenthub.cloud/api/public/content/aa66fd045fb040fb9039102bb48e61ae?v=28c1e155"
---

Le liquide ne goutte plus entre deux dépôts, mais la dose devient irrégulière. Sur le Performus X, **trop de vide peut réaspirer le dépôt dans l’embout ou faire apparaître des bulles**. Nordson associe cet excès à un dosage irrégulier. [Notice Performus X, page 20](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/aa66fd045fb040fb9039102bb48e61ae?v=28c1e155#page=20)

Le réglage recherché est une goutte stabilisée, sans croissance ni rentrée dans l’embout. Le vide compense l’effet du liquide dans la seringue entre cycles ; sa valeur ne se choisit pas comme celle d’une ventouse de manutention.

## Reproduire le repère prévu par Nordson

La procédure pour un fluide peu visqueux utilise une seringue EFD, un embout approprié et un premier réglage d’air de **0,1 bar**, donné en parallèle comme 2 psi dans la notice. Le fabricant fait former la goutte, relâcher la commande et augmenter progressivement le vide jusqu’à stabilisation.

Suivez la procédure complète page 20, avec le dispositif prévu pour recevoir le produit. La valeur de 0,1 bar est le point de départ de cette procédure ; ajustez ensuite suivant ses étapes et le comportement du produit.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" role="img" aria-labelledby="nordson-performus-vide-goutte-retour-produit-title nordson-performus-vide-goutte-retour-produit-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="nordson-performus-vide-goutte-retour-produit-title">Le vide doit stabiliser le dépôt</title><desc id="nordson-performus-vide-goutte-retour-produit-desc">Repère de la notice Performus X : arrêter la croissance de la goutte sans la réaspirer et sans faire naître des bulles.</desc><rect width="520" height="360" rx="22" fill="#10281e"/><text x="26" y="42" font-size="21" fill="#d3eb56" font-weight="700">Observer la goutte, puis arrêter le réglage</text><path d="M45 107H475" stroke="#8abfa3" stroke-width="4"/><circle cx="260" cy="107" r="12" fill="#d3eb56"/><text x="45" y="157" font-size="20" fill="#eef2e9">Croissance</text><text x="260" y="193" font-size="24" fill="#d3eb56" font-weight="700" text-anchor="middle">Stabilisation</text><text x="360" y="157" font-size="20" fill="#eef2e9">Réaspiration</text><text x="34" y="264" font-size="23" fill="#eef2e9">Vérifier aussi le piston</text><text x="34" y="305" font-size="21" fill="#eef2e9">et le trajet de retour du produit</text></svg>
<figcaption>Repère de la notice Performus X : arrêter la croissance de la goutte sans la réaspirer et sans faire naître des bulles.</figcaption>
</figure>


## Le piston protège une autre interface

Nordson recommande un piston **LVBarrier** pour les fluides très peu visqueux et des pistons adaptés aux autres viscosités. Le tableau page 24 traite séparément le retour de produit vers le doseur. Le réglage du vide et la présence d’un piston approprié sont donc deux contrôles distincts.

Pour des fluides aqueux sans piston, la page 21 avertit qu’une augmentation rapide du vide ou une seringue inclinée peut favoriser le retour vers le flexible ou le doseur. Une amélioration de l’arrêt de goutte ne justifie pas d’ignorer ce trajet.

Un dépôt qui s’arrête avant sa durée peut aussi suivre une [seconde commande pendant le cycle](/guides/nordson-performus-cycle-interrompu-second-trigger/). Après correction, la [validation pression/temps](/guides/nordson-performus-validation-pression-temps-dose/) conserve un contrôle distinct du dépôt.

## Doser avec une comparaison interprétable

| Observation | Orientation du réglage |
| --- | --- |
| Goutte qui continue à grossir | Procédure de stabilisation du vide |
| Goutte aspirée vers l’embout | Vide excessif à examiner |
| Bulles et doses irrégulières | Vide et air emprisonné à distinguer |
| Produit dans la liaison d’air | Arrêt et diagnostic du retour, piston adapté |

La méthode proposée par CompatAir garde produit, seringue, piston et embout identifiés, puis ne change qu’une variable à la fois. Une série de dépôts se compare avec le critère de masse ou de dimension défini par votre procédé, sans transformer le temps d’ouverture en volume certifié.

Le [dossier des cartouches](/guides/pistolet-cartouche-pneumatique-colle-mastic/) et celui des [circuits air/produit](/guides/cuve-peinture-sous-pression-air-produit-agitation/) permettent de suivre d’autres systèmes d’extrusion. Le [journal de maintenance](/guides/maintenance-preventive-reseau-air-comprime/) doit conserver un éventuel retour de produit. Une contamination du doseur demande son traitement, pas seulement un nouveau réglage.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
