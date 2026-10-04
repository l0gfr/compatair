---
title: "Enerpac PA133 : distinguer manque d’air et désamorçage hydraulique"
seoTitle: "Enerpac PA133 : air moteur et perte d’amorçage"
description: "Quand la PA133 ne fournit plus d’huile, vérifier niveau, alimentation et amorçage. La plage 2,1–2,7 bar appartient à la procédure dédiée de la notice."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["groupe-frl-filtre-regulateur-lubrificateur", "filtre-air-comprime-perte-pression-remplacement", "pompe-membrane-pneumatique-calee-diagnostic"]
sources: ["https://literature.enerpac.com/pdf/L2080_e.pdf"]
---

Une PA133 actionnée à la pédale ne fournit plus d’huile au vérin. Enerpac distingue niveau d’huile bas, manque de pression d’air et perte d’amorçage. **Le symptôme hydraulique ne suffit pas à désigner un compresseur insuffisant.** Les vérifications portent sur deux circuits.

## Partir du tableau de dépannage

La [notice L2080 révision E, page 6](https://literature.enerpac.com/pdf/L2080_e.pdf#page=6) associe l’absence de débit d’huile à ces trois causes. Pour le circuit d’air, elle demande de vérifier filtre, ligne et filtre-régulateur contre obstructions ou fuites, et d’examiner un éventuel dommage moteur. Pour l’huile, elle renvoie au niveau et à l’amorçage.

Ce tableau est présenté comme une aide au diagnostic et interdit le démontage de la pompe par l’utilisateur ; les réparations relèvent d’un centre Enerpac agréé. Le [guide FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) et celui des [restrictions de filtre](/guides/filtre-air-comprime-perte-pression-remplacement/) aident à situer l’alimentation, sans autoriser une ouverture de la pompe.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="enerpac-pa133-pompe-desamorcee-air-hydraulique-title enerpac-pa133-pompe-desamorcee-air-hydraulique-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="enerpac-pa133-pompe-desamorcee-air-hydraulique-title">PA133 : air moteur et amorçage sont distincts</title><desc id="enerpac-pa133-pompe-desamorcee-air-hydraulique-desc">Le moteur peut manquer d’air ou le circuit peut avoir perdu son amorçage. Enerpac prévoit une procédure d’amorçage dédiée, à 2,1–2,7 bar.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">La pompe ne fournit plus d’huile</text><path d="M259 78v53M259 132H103v49M259 132h157v49" fill="none" stroke="#8abfa3" stroke-width="4"/><text x="44" y="215" fill="#eef2e9" font-size="23">Air moteur</text><text x="305" y="215" fill="#eef2e9" font-size="23">Amorçage</text><text x="40" y="262" fill="#eef2e9" font-size="20">Filtre · ligne</text><text x="297" y="262" fill="#eef2e9" font-size="20">Huile · passages</text><text x="31" y="321" fill="#eef2e9" font-size="22">Procédure fabricant à 2,1–2,7 bar</text></svg>
<figcaption>Le moteur peut manquer d’air ou le circuit peut avoir perdu son amorçage. Enerpac prévoit une procédure d’amorçage dédiée, à 2,1–2,7 bar.</figcaption>
</figure>

## L’amorçage a ses propres conditions

La [page 4](https://literature.enerpac.com/pdf/L2080_e.pdf#page=4) donne une procédure dédiée : niveau d’huile suivant la consigne de remplissage, pompe sur un plan horizontal, alimentation réglée à **30–40 psi, soit 2,1–2,7 bar**, pédale en position RELEASE, puis activations momentanées avec le bouton sous la pédale pour faire revenir l’huile et remplir les passages.

Cette plage de pression appartient à l’amorçage décrit. Elle ne doit pas être annoncée comme une pression de fonctionnement universelle ni comme la pression de mesure d’une consommation d’air. Le contrôle de résultat prévu se fait ensuite avec le vérin raccordé, en fonctionnement normal. Si la pompe ne fournit toujours pas d’huile, Enerpac demande de contacter son centre agréé.

## Ne pas confondre les positions de pédale

La même page distingue **ADVANCE**, qui actionne le moteur et pompe l’huile, **NEUTRAL**, qui arrête le moteur et maintient la pression de charge, et **RELEASE**, qui libère la pression ou permet le retour du vérin. Le principe explique pourquoi une observation moteur arrêté ne se lit pas de la même manière dans chacune de ces positions.

| Vérification | Ce qu’elle peut établir |
| --- | --- |
| Niveau d’huile selon notice | Présence du volume requis |
| Alimentation au moteur | Absence de restriction ou fuite à traiter |
| Procédure d’amorçage complète | Retour de l’huile dans les passages selon fabricant |
| Vérin qui n’avance toujours pas | Nécessité de poursuivre avec le service prévu |

Le [diagnostic d’une pompe à membrane](/guides/pompe-membrane-pneumatique-calee-diagnostic/) montre également l’intérêt de séparer alimentation et circuit de produit, mais son mécanisme n’est pas celui de la PA133. Ici, aucune pression hydraulique n’est déduite d’un ratio supposé, aucun démontage et aucune manipulation de charge ne sont ajoutés à la notice. La procédure complète doit être suivie avec les protections et composants autorisés.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Enerpac PA133/PA700/PA133U, notice L2080 RevE, juin 2025](https://literature.enerpac.com/pdf/L2080_e.pdf)
