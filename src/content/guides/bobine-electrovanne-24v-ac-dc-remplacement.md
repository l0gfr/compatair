---
title: "Bobine d’électrovanne 24 V AC ou DC : commander le bon remplacement"
seoTitle: "Bobine électrovanne : 24 V AC ou DC ?"
description: "Même tension écrite, bobines différentes : préparer la référence, AC/DC, fréquence, puissance et connecteur avant de remplacer une électrovanne d’air."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["electrovanne-air-ne-ouvre-pas-pression-differentielle", "capteur-pnp-npn-entree-automate-verin", "fiche-intervention-air-comprime"]
sources:
  - https://www.burkert.co.uk/en/landingpage/10-Frequently-asked-questions-about-solenoid-valves
---

**La mention « 24 V » ne termine pas l’identification d’une bobine d’électrovanne.** Le courant alternatif AC et le courant continu DC sont deux alimentations à distinguer. Commander à partir de la forme du connecteur et de cette seule tension expose à recevoir une variante qui ne correspond pas à la machine.

## Partir de la bobine et du corps de vanne

La [FAQ technique Bürkert](https://www.burkert.co.uk/en/landingpage/10-Frequently-asked-questions-about-solenoid-valves) indique que les bobines sont conçues pour des alimentations AC ou DC et retient la tension et la puissance parmi les critères de sélection. Elle cite aussi une tension incorrecte dans les causes possibles de défaut de commutation.

Photographiez les marquages lisibles de la bobine et du corps, puis associez-les au code complet de l’ensemble. La bobine est un élément de l’électrovanne : sa correspondance mécanique et fonctionnelle avec le corps doit être confirmée, même si un connecteur semble pouvoir se monter.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="bobine-electrovanne-24v-ac-dc-remplacement-title bobine-electrovanne-24v-ac-dc-remplacement-desc" style="font-family:system-ui,sans-serif"><title id="bobine-electrovanne-24v-ac-dc-remplacement-title">Une identification complète</title><desc id="bobine-electrovanne-24v-ac-dc-remplacement-desc">Grille de commande : aucun type de courant ou brochage n’est déduit de la forme du connecteur.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Une identification complète</text><circle cx="40" cy="76" r="15" fill="#d3eb56"/><text x="35" y="82" font-size="17" fill="#10281e" font-weight="700">1</text><text x="68" y="72" font-size="18" fill="#d3eb56" font-weight="700">Tension + AC/DC</text><text x="68" y="98" font-size="16" fill="#eef2e9">Lire la bobine et le schéma</text><circle cx="40" cy="146" r="15" fill="#d3eb56"/><text x="35" y="152" font-size="17" fill="#10281e" font-weight="700">2</text><text x="68" y="142" font-size="18" fill="#d3eb56" font-weight="700">Bobine + corps</text><text x="68" y="168" font-size="16" fill="#eef2e9">Faire confirmer la correspondance</text><circle cx="40" cy="216" r="15" fill="#d3eb56"/><text x="35" y="222" font-size="17" fill="#10281e" font-weight="700">3</text><text x="68" y="212" font-size="18" fill="#d3eb56" font-weight="700">Connecteur + commande</text><text x="68" y="238" font-size="16" fill="#eef2e9">Conserver les références accessoires</text></svg>
<figcaption>Grille de commande : aucun type de courant ou brochage n’est déduit de la forme du connecteur.</figcaption>
</figure>

## Préparer une commande sans champ implicite

| Champ | Document attendu |
| --- | --- |
| Référence de bobine | Code fabricant et variante |
| Tension et AC/DC | Marquage et schéma d’alimentation |
| Fréquence si applicable | Domaine de la variante AC |
| Puissance et service | Caractéristiques de la référence |
| Connecteur et brochage | Correspondance avec la liaison existante |
| Corps et fonction de vanne | Compatibilité confirmée de l’ensemble |

Cette liste est un contrôle de commande proposé par CompatAir. Elle ne suppose aucune fréquence, puissance ou durée de service universelle. Les cases absentes restent des questions à poser au fabricant.

## Séparer le diagnostic électrique de celui de l’air

Faites préciser si la commande est présente, si le défaut est permanent ou apparaît à chaud et si la vanne commute dans le scénario prévu. Les mesures électriques relèvent du personnel compétent, dans les conditions d’intervention de la machine ; ce guide ne propose pas d’alimentation d’essai improvisée.

Si la commande est conforme, le [dossier de pression différentielle](/guides/electrovanne-air-ne-ouvre-pas-pression-differentielle/) examine une autre condition possible de fonctionnement. Remplacer la bobine sans ce contrôle documentaire peut laisser la cause initiale intacte.

## Le connecteur ne définit pas la logique de commande

Conservez les références des accessoires montés dans la liaison et leurs fiches. Une pièce ressemblante ne documente pas un brochage identique. Le [guide PNP/NPN](/guides/capteur-pnp-npn-entree-automate-verin/) traite une autre interface électrique fréquente ; ses règles de sortie de capteur ne sont pas celles d’une bobine.

Si une variante impose un changement de commande ou d’accessoire, faites valider l’ensemble avant le montage. Évitez un dossier où le technicien découvre après livraison que la référence proposée nécessite une autre alimentation.

## Garder une trace du remplacement

La [fiche d’intervention](/guides/fiche-intervention-air-comprime/) peut rapprocher les marquages de la pièce déposée, les références livrées et le contrôle du cycle. Notez également les conditions dans lesquelles le défaut initial apparaissait.

La réception doit montrer que l’électrovanne obtient les états prévus, avec les limites documentées. Un bruit de bobine ou un voyant de commande ne constitue pas, à lui seul, une vérification du passage d’air.
