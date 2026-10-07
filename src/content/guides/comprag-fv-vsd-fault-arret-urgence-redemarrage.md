---
title: "Comprag FV : que faire devant VSD FAULT après un arrêt du compresseur ?"
seoTitle: "Comprag FV : VSD FAULT et remise en marche"
description: "VSD FAULT est un message global. Relevez le code du variateur et la cause avant de suivre la remise en marche ; l’arrêt d’urgence impose sa propre attente."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["remise-service-machine-pneumatique-arret-prolonge", "compresseur-ne-demarre-plus-froid-rallonge", "maintenance-preventive-reseau-air-comprime"]
sources: ["https://www.comprag.com/en/comprag/docs/pdf_manual/Manual_FV30-55_EN_DE_RU_v1_5_0.pdf"]
---

Le panneau v-Log indique **VSD FAULT**. Ce message ne signifie pas que le moteur ou le variateur doit être remplacé immédiatement. La [notice Comprag FV30–55 version 1.5, page 23](https://www.comprag.com/en/comprag/docs/pdf_manual/Manual_FV30-55_EN_DE_RU_v1_5_0.pdf#page=23) explique qu’il s’agit du message général présenté lorsqu’une erreur du variateur survient. Le code détaillé du variateur conserve une information nécessaire au diagnostic.

Commencez par relever les deux affichages avant tout acquittement, avec la phase du compresseur et le contexte de l’arrêt. Si plusieurs tentatives ont déjà été faites, indiquez-les au service technique. Les effacer du récit peut masquer un défaut récurrent.

## Traduire l’erreur avant de relancer

La liste de la notice couvre plusieurs familles de défauts. Nous ne donnons pas à toutes la même cause et ne prescrivons pas une modification électrique générique. Le code, les circonstances et l’installation permettent au service compétent de déterminer le contrôle applicable.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Une erreur a deux niveaux de lecture" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="comprag-fv-vsd-fault-arret-urgence-redemarrage-title comprag-fv-vsd-fault-arret-urgence-redemarrage-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="comprag-fv-vsd-fault-arret-urgence-redemarrage-title">Une erreur a deux niveaux de lecture</title><desc id="comprag-fv-vsd-fault-arret-urgence-redemarrage-desc">La notice FV30–55 distingue le défaut général et le défaut du variateur. Un acquittement n’est pas une réparation.</desc><rect width="520" height="480" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Une erreur a deux niveaux de lecture</text><rect x="28" y="88" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="120" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">v-Log : VSD FAULT</text><text x="45" y="154" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Message global du compresseur</text><path d="M260 184v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="208" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="240" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Variateur : code détaillé</text><text x="45" y="274" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Cause à identifier dans sa liste</text><path d="M260 304v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="328" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="360" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Cause traitée et procédure suivie</text><text x="45" y="394" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">La remise en marche reste conditionnelle</text></svg>
</div>

*La notice FV30–55 distingue le défaut général et le défaut du variateur. Un acquittement n’est pas une réparation.*

La notice précise que les **cinq derniers messages** restent en mémoire. Elle décrit un ordre d’acquittement et demande de contacter un partenaire de service si le défaut réapparaît. Elle interdit de reprendre l’exploitation sans éliminer sa cause. Cette instruction limite le sens d’un retour de l’affichage à l’état normal : l’écran peut être acquitté sans que le problème matériel soit résolu.

## Conserver le code avant l’acquittement

| Observation | Utilité pour le diagnostic |
| --- | --- |
| Code du variateur et message v-Log | Rattacher l’erreur à la bonne liste |
| Phase : départ, charge, vide ou arrêt | Identifier le moment où elle se produit |
| Première apparition ou récurrence | Distinguer incident isolé et défaut persistant |
| Modification récente | Signaler maintenance, alimentation ou réglage changé |
| Action déjà réalisée | Éviter que le service interprète un historique incomplet |

Ajoutez la référence exacte et la révision de notice. La liste et les commandes doivent correspondre à cette génération de contrôle. Le [guide de maintenance du réseau](/guides/maintenance-preventive-reseau-air-comprime/) aide à conserver l’intervention et son résultat dans l’historique.

## Un arrêt d’urgence suit une autre séquence

Au [§4.3 page 24](https://www.comprag.com/en/comprag/docs/pdf_manual/Manual_FV30-55_EN_DE_RU_v1_5_0.pdf#page=24), le constructeur distingue l’arrêt d’urgence et l’arrêt ordinaire. Après un arrêt d’urgence, il indique une remise en marche **pas avant dix minutes**. Cette durée n’est pas un diagnostic du défaut et ne transforme pas l’installation en équipement consigné.

Ne confondez donc pas trois événements : un message de variateur, l’action sur l’arrêt d’urgence et un arrêt planifié par la commande normale. Ils doivent apparaître séparément dans le relevé. Si la maintenance a besoin d’intervenir, elle suit les dispositions de dépressurisation et d’isolement du document applicable.

## Quand la décision devient claire

Si le code est identifié et la cause traitée selon la procédure du service, la remise en marche peut être préparée dans le cadre constructeur. Si le message revient ou si la cause reste inconnue, conserver le compresseur indisponible pour cette exploitation et faire poursuivre le diagnostic. Une répétition d’acquittements n’établit pas un résultat acceptable.

La [remise en service après arrêt](/guides/remise-service-machine-pneumatique-arret-prolonge/) traite les contrôles du réseau aval. Pour le défaut VSD, la remise en marche reste liée à la cause du code et à sa correction. Les délais et les commandes sont ceux de la notice, sans raccourci inventé pour accélérer un redémarrage.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
