---
title: "UHT TurboLap TLL ou TLS : choisir le mouvement qui atteint réellement le fond du moule"
seoTitle: "TurboLap TLL ou TLS : atteindre un angle de moule"
description: "Une empreinte étroite ne se polit pas comme une face ouverte. Comparer les trajectoires TLL et TLS avant de choisir la course ou le compresseur."
pubDate: "2026-10-07"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["kinshun-mag095a-mag095d-meuleuse-cavite", "biax-srd355-t365-micro-meuleuse", "groupe-frl-filtre-regulateur-lubrificateur"]
sources: ["https://www.uht.co.jp/pdf/turbolap.pdf", "https://www.uht.co.jp/ja/support/pdf/tl_manu.pdf"]
---

Une pierre peut entrer dans une rainure à l’arrêt et toucher sa paroi dès que l’outil fonctionne. Pour choisir entre les familles **TurboLap TLL et TLS**, il faut regarder l’enveloppe du mouvement à l’extrémité, puis l’espace disponible. La consommation d’air ne tranche pas cette question de géométrie.

Le [catalogue UHT TurboLap, page 2](https://www.uht.co.jp/pdf/turbolap.pdf#page=2) décrit une trajectoire de va-et-vient linéaire pour TLL et un mouvement elliptique pour TLS. Il associe le mouvement linéaire aux zones étroites et aux angles. Cette distinction suffit à orienter un premier choix ; elle ne garantit ni l’accès dans votre pièce ni le résultat de finition.

## Dessiner la zone que la pierre doit parcourir

Sur le plan de la pièce, distinguez la face à finir, les parois à préserver et le passage nécessaire au porte-outil. Ajoutez la longueur de la pierre qui dépasse du serrage. Une dimension extérieure de machine ne décrit pas à elle seule ce passage.

Pour une rainure, demandez où doit aller le mouvement : le long de son axe, vers le fond ou sur sa face latérale. Pour une empreinte ouverte, demandez plutôt quelle zone de contact vous cherchez à parcourir. Le croquis doit distinguer la face à finir et l’arête à préserver. C’est cette zone de contact qui détermine la trajectoire recherchée.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux enveloppes de mouvement" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="uht-trajectoires-title uht-trajectoires-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="uht-trajectoires-title">Deux enveloppes de mouvement</title><desc id="uht-trajectoires-desc">Schéma conceptuel sans échelle : un va-et-vient axial et une trajectoire elliptique occupent des espaces différents.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Deux enveloppes de mouvement</text><rect x="38" y="86" width="444" height="175" rx="12" fill="#244b36"/><text x="58" y="122" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">TLL : trajectoire linéaire</text><path d="M90 178h320m-14-10 14 10-14 10M104 168l-14 10 14 10" fill="none" stroke="#fff" stroke-width="4"/><text x="58" y="235" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Relever l’espace dans cet axe</text><rect x="38" y="288" width="444" height="195" rx="12" fill="#244b36"/><text x="58" y="324" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">TLS : trajectoire elliptique</text><ellipse cx="250" cy="390" rx="116" ry="36" fill="none" stroke="#fff" stroke-width="4"/><text x="58" y="465" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Relever toute l’enveloppe</text></svg>
</div>

*Schéma conceptuel sans échelle : un va-et-vient axial et une trajectoire elliptique occupent des espaces différents.*

## Vérifier l’ensemble pointe, serrage et outil

La [notice TurboLap, pages 1 et 2](https://www.uht.co.jp/ja/support/pdf/tl_manu.pdf#page=1) traite séparément le montage du Super Collet, l’accessoire et les précautions d’emploi. Elle interdit le fonctionnement sans ce porte-accessoire. Le contrôle d’accès doit donc porter sur l’ensemble réellement monté, pas sur une pierre tenue seule devant la pièce.

Préparez une photographie de cette configuration avec la référence de pointe, son dépassement et l’orientation de la zone à finir. L’accessoire doit être admis par UHT pour le mouvement choisi. Si le dégagement est serré, une validation sur pièce témoin doit précéder le travail sur la pièce de valeur ; aucune simulation géométrique présentée ici ne remplace cette réception.

## Quand choisir TLL, quand faire valider TLS

Pour une zone étroite alignée avec le va-et-vient, **TLL est le premier candidat cohérent avec l’usage décrit par UHT**. Il reste à confirmer la pointe, le dégagement et la course utile. Pour une face où un déplacement dans plusieurs directions est recherché, TLS mérite une étude avec le fournisseur ; la simple mention « swing » ne suffit pas à valider un coin intérieur.

Si le corps ou le serrage ne passe pas, changer la pression ne résout pas l’accès. Comparez alors une autre architecture d’outil, comme dans le guide sur les [meuleuses pour cavités](/guides/kinshun-mag095a-mag095d-meuleuse-cavite/). Si l’accès est correct mais l’alimentation chute pendant le travail, la question devient celle du [filtre et du régulateur](/guides/groupe-frl-filtre-regulateur-lubrificateur/), distincte du choix de trajectoire.

La base distingue les fiches [UHT TLL-07](/outils-pneumatiques/lime-alternative-uht-tll-07/) et [UHT TLS-07](/outils-pneumatiques/lime-alternative-uht-tls-07/). La compatibilité de leur alimentation reste une vérification séparée du choix de trajectoire.

Le catalogue contient aussi des données numériques anciennes. Elles ne sont pas utilisées ici pour attribuer une consommation aux modèles actuels : la décision de ce guide porte sur le mouvement décrit, avec confirmation de la version livrée.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
