---
title: "ROSS DM2 C : un réarmement exige une séquence et une alimentation suffisante"
seoTitle: "ROSS DM2 C : reset, délai et alimentation"
description: "Une DM2 C peut refuser le reset pour une séquence électrique ou une alimentation insuffisante. Distinguer les deux intervalles publiés de 200 ms."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["diametre-longueur-flexible-air-comprime", "vanne-demarrage-progressif-air-comprime-remise-pression", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://ross-admin-global-us-east.s3.amazonaws.com/production/uploads/document_language_file/file/49/ROSS_DM2_Series_C_Double_Valves_Installation_Instructions_SS301.pdf.pdf"]
---

Une DM2 série C ne se réarme pas malgré un signal de reset. ROSS décrit plusieurs causes distinctes : état des bobines principales, temporisation de reprise, alimentation pneumatique ou montage du solénoïde de reset. **Répéter le signal sans distinguer ces conditions peut laisser la cause inchangée.**

## Deux intervalles à ne pas confondre

La [notice SS301, page 2](https://ross-admin-global-us-east.s3.amazonaws.com/production/uploads/document_language_file/file/49/ROSS_DM2_Series_C_Double_Valves_Installation_Instructions_SS301.pdf.pdf#page=2) impose que les deux solénoïdes principaux soient désalimentés pendant le réarmement. Son chronogramme recommande un signal de reset momentané d’au moins **200 ms**, puis **200 ms** pour permettre le remplissage des chambres pilotes après ce signal. La FAQ demande au moins 200 ms entre la suppression de l’alimentation du reset et l’alimentation des solénoïdes principaux.

Ce sont deux parties de la séquence publiée. Une impulsion de 200 ms ne dispense pas du délai qui suit. Le schéma ci-dessous explique leur position ; il ne constitue pas un programme de sécurité ou une validation de commande de machine.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 345" role="img" aria-labelledby="ross-dm2-c-reset-200ms-alimentation-title ross-dm2-c-reset-200ms-alimentation-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="ross-dm2-c-reset-200ms-alimentation-title">DM2 C : le reset précède la reprise</title><desc id="ross-dm2-c-reset-200ms-alimentation-desc">La notice distingue la durée momentanée du reset et le délai après sa suppression. Les bobines principales restent hors tension pendant le reset.</desc><rect width="520" height="345" rx="22" fill="#10281e"/><text x="24" y="42" fill="#d3eb56" font-size="23" font-weight="700">Séquence publiée · DM2 série C</text><text x="25" y="102" fill="#eef2e9" font-size="22">Reset</text><path d="M117 121H181V81H298V121H470" fill="none" stroke="#d3eb56" stroke-width="5"/><text x="25" y="206" fill="#eef2e9" font-size="18">Principales</text><path d="M117 220H408V180H470" fill="none" stroke="#8abfa3" stroke-width="5"/><text x="181" y="153" fill="#eef2e9" font-size="19">200 ms min.</text><text x="296" y="266" fill="#eef2e9" font-size="19">Attendre ≥ 200 ms</text><text x="28" y="316" fill="#eef2e9" font-size="19">Diagnostic réservé au personnel qualifié</text></svg>
<figcaption>La notice distingue la durée momentanée du reset et le délai après sa suppression. Les bobines principales restent hors tension pendant le reset.</figcaption>
</figure>

## Le port 1 doit recevoir pression et volume suffisants

ROSS cite expressément les essais de démarrage avec petits tuyaux et raccords rapides : la pression et le volume du réseau peuvent ne pas être appliqués entièrement au port 1. Une pression disponible en amont ne prouve donc pas les conditions au moment du reset. Le [diagnostic des flexibles](/guides/diametre-longueur-flexible-air-comprime/) aide à identifier une restriction, sans fournir le dimensionnement d’une fonction de sécurité.

La FAQ mentionne aussi une coupure d’air faite avant la désalimentation de la valve. Les deux éléments peuvent alors être en défaut, avec une fuite à l’échappement plus forte lors du retour de l’air ; cela aggrave le manque d’alimentation. Ce constat documenté ne justifie aucune manipulation visant à forcer le réarmement.

| Observation publiée | Branche de diagnostic |
| --- | --- |
| Bobines principales encore alimentées | Condition anti-maintien du reset non satisfaite |
| Reprise immédiatement après le reset | Délai de remplissage des pilotes à examiner |
| Essai sur une alimentation provisoire étroite | Conditions pneumatiques du port 1 |
| Air sortant par l’échappement du solénoïde de reset | Montage inversé cité dans la FAQ |

## Conserver la fonction prévue de la valve

La notice réserve la maintenance aux personnes formées et expérimentées et impose l’isolement, l’évacuation de l’air et le verrouillage avant démontage. Elle décrit également un défaut comme un mouvement asynchrone des éléments internes, signalé par le retour du pressostat et une fuite audible au silencieux.

Le [guide de remise en pression progressive](/guides/vanne-demarrage-progressif-air-comprime-remise-pression/) distingue les fonctions pneumatiques d’une machine. Le [protocole d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) permet de conserver les observations de pression et de séquence. Aucune certification du composant ne suffit ici à conclure à la conformité de l’installation complète ; toute correction de commande reste dans son processus de validation prévu.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [ROSS DM2 série C, instructions SS301](https://ross-admin-global-us-east.s3.amazonaws.com/production/uploads/document_language_file/file/49/ROSS_DM2_Series_C_Double_Valves_Installation_Instructions_SS301.pdf.pdf)
