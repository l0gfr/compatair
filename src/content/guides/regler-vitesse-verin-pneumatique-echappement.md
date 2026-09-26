---
title: "Régler la vitesse d’un vérin pneumatique : admission, échappement et redémarrage"
seoTitle: "Vitesse vérin pneumatique : admission ou échappement ?"
description: "Vérin trop rapide, irrégulier ou brutal au redémarrage : distinguez réglage du débit, pression, échappement et état initial des chambres."
pubDate: "2026-09-26"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "silencieux-pneumatique-colmate-contre-pression", "choisir-distributeur-pneumatique-debit-nominal"]
sources: ["https://static.smc.eu/pdf/ASS100_EU.pdf", "https://www.festo.com/PDF_Flip/safety/en/files/assets/basic-html/page49.html"]
---

**Un vérin trop rapide ne se règle pas seulement en baissant la pression générale.** Il faut identifier le dispositif qui limite le débit, le sens dans lequel il agit et l’état des chambres au départ. Le premier mouvement après une dépressurisation peut différer du cycle déjà établi.

Nous distinguons ici la lecture du circuit, que ce guide aide à préparer, et sa modification, qui relève du concepteur ou de la maintenance compétente. Les réglages d’une machine avec charge mobile ne doivent pas être essayés en exposant un opérateur à sa course.

## Ce que signifient meter-in et meter-out

Dans un réglage à l’admission, dit *meter-in*, on agit sur l’air qui entre. Dans un réglage à l’échappement, dit *meter-out*, on agit sur l’air qui quitte la chambre opposée. La [documentation SMC ASS](https://static.smc.eu/pdf/ASS100_EU.pdf) explique les deux principes et leur comportement au démarrage dans cette gamme.

Sur un montage existant, repérez les symboles, les ports et la référence du composant. La position visuelle d’une vis ne suffit pas à savoir quel sens est étranglé. Un limiteur unidirectionnel peut laisser passer librement dans un sens et restreindre l’autre. L’orientation prévue doit venir du schéma et de la notice.

## Pourquoi le premier départ doit être examiné séparément

SMC décrit le risque de mouvement brusque lorsqu’on applique la pression d’un seul côté d’un vérin initialement dépressurisé. Sa série ASS utilise un comportement particulier lors de la première mise en pression. Cette description n’autorise pas à attribuer la même fonction à un simple raccord de réglage. [Voir le principe et les limites du dispositif ASS](https://static.smc.eu/pdf/ASS100_EU.pdf).

La question de réception devient donc précise : le réglage doit-il satisfaire uniquement les cycles établis, ou aussi la remise en service après arrêt et perte d’air ? Demandez que le second cas soit couvert dans la validation de la machine.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Le premier mouvement mérite son propre essai">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="regler-vitesse-verin-pneumatique-echappement-title regler-vitesse-verin-pneumatique-echappement-desc" xmlns="http://www.w3.org/2000/svg">
<title id="regler-vitesse-verin-pneumatique-echappement-title">Le premier mouvement mérite son propre essai</title><desc id="regler-vitesse-verin-pneumatique-echappement-desc">Identifier le sens du réglage, distinguer les cycles établis du premier mouvement après dépressurisation, puis réceptionner les deux états.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="59" fill="#d3eb56" font-size="24" font-weight="700">Identifier le réglage</text><text x="44" y="93" fill="white" font-size="21">Admission ou échappement</text>
<path d="M260 121v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="140" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="175" fill="#d3eb56" font-size="24" font-weight="700">Observer le cycle</text><text x="44" y="209" fill="white" font-size="21">Charge et pressions stabilisées</text>
<path d="M260 237v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="256" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="291" fill="#d3eb56" font-size="24" font-weight="700">Vérifier le redémarrage</text><text x="44" y="325" fill="white" font-size="21">État initial des chambres documenté</text>
</svg>
</div>

*Le premier mouvement mérite son propre essai : schéma de lecture CompatAir, expliqué dans le texte.*

## Pression, vitesse et effort sont trois lignes différentes

La [force du vérin](/guides/force-verin-pneumatique-diametre-pression/) dépend des surfaces et des pressions. La vitesse demandée entraîne un besoin de débit pendant le mouvement. Une intervention sur la pression peut donc modifier l’effort disponible, au-delà de l’effet recherché sur la vitesse.

Pour organiser le diagnostic, nous proposons de relever la durée de sortie et de rentrée, la charge, le réglage identifié et les autres consommateurs actifs. Conservez les conditions d’un cycle satisfaisant pour les comparer au cycle dégradé. Évitez les mentions « lent » ou « rapide » sans préciser le sens du mouvement.

## Quand le défaut vient du chemin de l’air

Demandez au technicien de contrôler l’ensemble du trajet : distributeur, tubes, limiteurs et échappement. Si un remplacement récent précède le problème, notez la référence avant et après. Le [guide du débit nominal des distributeurs](/guides/choisir-distributeur-pneumatique-debit-nominal/) aide à éviter une équivalence fondée sur le seul filetage.

Un [silencieux à examiner](/guides/silencieux-pneumatique-colmate-contre-pression/) fait également partie du dossier. Le supprimer pour retrouver une vitesse ne constitue pas une réception de la machine : on aurait changé la configuration et ses émissions sonores.

## Une position immobile ne prouve pas une mise en sécurité

Le [guide de sécurité Festo](https://www.festo.com/PDF_Flip/safety/en/files/assets/basic-html/page49.html) signale, dans son exemple, les limites du maintien de pression, les mouvements possibles et la nécessité de traiter les fonctions de sécurité. Une position centrale de distributeur ne doit donc pas être présentée comme une garantie générale d’immobilisation.

Pour une intervention, utilisez la procédure de consignation et de maîtrise des charges prévue pour l’équipement. Pour la réception, nous proposons deux comptes rendus distincts : performance du mouvement et validation des fonctions de sécurité. Notez les références et réglages retenus, les états d’arrêt testés par l’intégrateur et les critères d’acceptation. Cette séparation permet de retrouver un réglage utile sans lui attribuer une protection qu’il n’assure pas.

Le glossaire précise la définition de [réglage meter-out](/glossaire/#meter-out).

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [SMC, série ASS, principes de fonctionnement, pages PDF 2 et 4](https://static.smc.eu/pdf/ASS100_EU.pdf)
- [Festo, Safety engineering guidelines, page 49](https://www.festo.com/PDF_Flip/safety/en/files/assets/basic-html/page49.html)
