---
title: "UHT MicroSpindle ne repart pas à chaque cycle : documenter une limite de démarrage"
seoTitle: "UHT MicroSpindle : démarrage intermittent en machine"
description: "Une broche arrêtée entre chaque cycle peut poser un problème de reprise. Lire la limite publiée par UHT avant de déclarer le réseau insuffisant."
pubDate: "2026-10-07"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["biax-srd355-t365-micro-meuleuse", "micro-meuleuse-50000-60000-tr-min", "compresseur-machine-cnc-haas-pression-debit"]
sources: ["https://www.uht.co.jp/en/support/faq/airtool/"]
---

Une broche pneumatique intégrée dans une machine reçoit l’ordre de tourner, mais reste parfois immobile. Le réseau peut être en cause ; il existe aussi une limite propre au démarrage du moteur. Pour les **MicroSpindle**, UHT explique dans sa FAQ que la reprise d’un moteur à palettes n’est pas garantie à chaque arrêt et déconseille les commandes marche-arrêt répétées pour cet usage.

La [FAQ UHT, question sur les MicroSpindle en fonctionnement intermittent](https://www.uht.co.jp/en/support/faq/airtool/) propose une organisation avec rotation au repos et surveillance. Cette réponse constitue un point à examiner avec l’intégrateur. Elle ne fournit pas une fonction de sécurité certifiée, une logique machine complète ou une autorisation de laisser un outil accessible en rotation.

## Ne pas confondre commande envoyée et rotation établie

Dans le compte rendu de défaut, séparez trois informations : l’ordre machine, l’état de l’alimentation d’air et la rotation effectivement constatée. Un voyant de sortie électrique confirme une commande. Il ne confirme pas à lui seul le mouvement de la broche.

Relevez la référence complète, le cycle en cause, l’état précédent et la fréquence de survenue. Conservez également le point de mesure de pression et les autres consommateurs actifs. Cette fiche permet de demander au constructeur si le mode d’utilisation respecte le comportement prévu, avant de modifier le réglage ou le dimensionnement du réseau.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Trois états à distinguer" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="uht-start-title uht-start-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="uht-start-title">Trois états à distinguer</title><desc id="uht-start-desc">La chaîne de diagnostic distingue une sortie de commande, l’alimentation et le mouvement réel. Ce schéma n’est pas un circuit de sécurité.</desc><rect width="520" height="480" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Trois états à distinguer</text><rect x="28" y="88" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="120" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Ordre de la machine</text><text x="45" y="154" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">La commande a été envoyée</text><path d="M260 184v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="208" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="240" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Alimentation de la broche</text><text x="45" y="274" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Conditions à relever au poste</text><path d="M260 304v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="328" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="360" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Rotation confirmée</text><text x="45" y="394" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Information indépendante de l’ordre</text></svg>
</div>

*La chaîne de diagnostic distingue une sortie de commande, l’alimentation et le mouvement réel. Ce schéma n’est pas un circuit de sécurité.*

## Un ordre envoyé ne confirme pas la rotation

Présentez au fournisseur le scénario réel : durée d’arrêt, démarrage demandé, accès à la broche et opération suivante. Demandez une réponse explicite sur l’aptitude du modèle au cycle, la détection de rotation et le comportement prévu lorsqu’une reprise n’a pas lieu.

Si une rotation de repos est envisagée, elle change les états de la machine. L’intégrateur doit traiter l’accès opérateur, les arrêts, la surveillance et les défauts dans l’analyse de la machine concernée. La réponse de la FAQ ne remplace pas cette étude. Aucune consigne de pression de repos ni procédure de modification des commandes n’est fournie ici.

Pour la réception, définissez avec cet intégrateur comment un défaut de reprise doit être détecté et traité avant l’opération suivante. Le contrôle doit rester observable et documenté. Une machine qui poursuit son cycle en supposant que la broche tourne laisse la question technique non résolue.

## Ce qui permet d’incriminer l’alimentation

Une chute de pression observée au poste lors du défaut mérite un examen de l’alimentation. L’absence de relevé ne doit pas être remplacée par une estimation. À l’inverse, des conditions d’air conformes ne garantissent pas la reprise de chaque moteur à palettes : c’est précisément la limite indiquée par UHT pour l’usage intermittent considéré.

Pour une MicroSpindle, la reprise entre deux arrêts doit être qualifiée dans le cycle machine. Le dimensionnement de l’air vient ensuite avec les données applicables au modèle. Les exigences d’une machine entière restent distinctes, comme l’explique le guide sur le [compresseur pour une machine CNC Haas](/guides/compresseur-machine-cnc-haas-pression-debit/). Le choix d’une [micro-meuleuse](/guides/micro-meuleuse-50000-60000-tr-min/) portative répond à une autre organisation du travail.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
