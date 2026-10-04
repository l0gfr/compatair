---
title: "LEMAX+ : lire séparément la coupure électrique et la coupure d’air"
seoTitle: "LEMAX+ : coupure électrique, NF/NO et option PG1S"
description: "Les modules LEMAX+ S et V réagissent différemment sans électricité. L’option PG1S relâche la pièce à la coupure d’air : vérifier la référence complète."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["vacuometre-vacuostat-bar-absolu-pourcentage-vide", "ventouse-piece-poreuse-debit-vide", "festo-vfof-ba-verin-air-emprisonne"]
sources: ["https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf"]
---

Deux modules LEMAX+ extérieurement proches peuvent réagir différemment à une coupure électrique. Une option de dépose peut encore changer le comportement à une coupure d’air. **Il faut lire la référence entière, en séparant la commande NF/NO de l’option pneumatique.**

## La génération de vide dépend de l’état de la valve

La [notice COVAL, page 1, section II](https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf#page=1) distingue **LEMAX90X--S**, équipé d’une électrovanne normalement fermée, et **LEMAX90X--V**, normalement ouverte. Lors d’une coupure électrique, le premier ne génère plus de vide ; le second poursuit sa génération pour maintenir la pièce.

Cette deuxième description suppose que l’air nécessaire reste disponible. Elle ne garantit pas le maintien lors de toutes les pertes d’énergie ni une durée donnée sur n’importe quelle pièce. La [lecture d’un niveau de vide](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) reste distincte d’une démonstration de maintien mécanique.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 346" role="img" aria-labelledby="coval-lemax-no-nf-coupure-air-electrique-title coval-lemax-no-nf-coupure-air-electrique-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="coval-lemax-no-nf-coupure-air-electrique-title">LEMAX+ : les pertes d’alimentation sont différentes</title><desc id="coval-lemax-no-nf-coupure-air-electrique-desc">NF arrête la génération de vide lors d’une coupure électrique ; NO la poursuit tant que l’air est disponible. L’option PG1S met la ventouse à l’atmosphère à la coupure d’air.</desc><rect width="520" height="346" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="23" font-weight="700">État de la valve et option exacte</text><text x="35" y="109" fill="#eef2e9" font-size="23">Électricité coupée</text><text x="42" y="153" fill="#eef2e9" font-size="21">NF : génération arrêtée</text><text x="42" y="190" fill="#eef2e9" font-size="21">NO : génération poursuivie</text><path d="M35 217H480" stroke="#8abfa3" stroke-width="2"/><text x="35" y="262" fill="#eef2e9" font-size="23">Air coupé · option PG1S</text><text x="42" y="305" fill="#eef2e9" font-size="21">Ventouse mise à l’atmosphère</text></svg>
<figcaption>NF arrête la génération de vide lors d’une coupure électrique ; NO la poursuit tant que l’air est disponible. L’option PG1S met la ventouse à l’atmosphère à la coupure d’air.</figcaption>
</figure>

## PG1F et PG1S n’ont pas le même rôle

Dans les variantes, **PG1F** désigne un soufflage puissant : une vanne d’isolement dirige le débit de soufflage vers la ventouse pour la dépose. **PG1S** donne un autre comportement : à la coupure d’air comprimé, son clapet met la ventouse à l’atmosphère et la pièce est relâchée.

Une conclusion « le vide reste présent sans électricité » ne doit donc pas être étendue à « la pièce reste tenue sans air ». La référence NF/NO et le suffixe de l’option répondent à deux questions différentes.

| Événement à examiner | Identification nécessaire |
| --- | --- |
| Perte de commande électrique | Valve NF ou NO, référence S ou V |
| Coupure d’air comprimé | Option pneumatique, notamment PG1S si présente |
| Dépose commandée | Soufflage standard ou option PG1F |
| Maintien sur pièce poreuse | Fuites et besoin de génération pendant le cycle |

Le [guide des surfaces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) explique pourquoi le maintien dépend aussi d’un débit traversant. L’absence de consommation sur une phase étanche ne décrit pas un arrêt d’air sur une matière poreuse.

## Faire correspondre l’état prévu à l’installation

La notice donne des connexions différentes selon nombre de connecteurs et fonction NF/NO. Ce guide n’en déduit aucun câblage de remplacement et aucune validation de fonction de sécurité. L’état lors d’une perte d’énergie doit être évalué dans le dispositif prévu, avec la référence et la procédure applicables.

Le [guide de l’air emprisonné](/guides/festo-vfof-ba-verin-air-emprisonne/) concerne un autre composant mais illustre la séparation entre coupure d’alimentation et état pneumatique restant. Pour le LEMAX+, relever S/V et PG1F/PG1S avant une commande de remplacement évite de substituer un module ayant une réaction différente. La notice et l’analyse de l’installation doivent confirmer la variante nécessaire.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [COVAL LEMAX+, notice 2023 V05](https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf)
