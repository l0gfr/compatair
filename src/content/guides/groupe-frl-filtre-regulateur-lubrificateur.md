---
title: "Groupe FRL : filtre, régulateur, lubrificateur, ordre, réglage et entretien"
seoTitle: "Groupe FRL : ordre, réglage et entretien"
description: "Installer et entretenir un groupe FRL sans lubrifier tous les usages : ordre des modules, sens du débit, pression, condensats et contrôle des pertes."
pubDate: 2026-08-28
category: "Installer"
audiences: [particulier, professionnel]
metiers: [garage-automobile, carrosserie-peinture, maintenance-industrielle]
readingTime: 14
featured: false
relatedGuides: [qualite-air-comprime-iso-8573-1, diagnostiquer-chute-pression-air-comprime, point-rosee-secheur-filtre-air-comprime]
sources:
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2024/frl/6159990240_02.pdf
  - https://www.parker.com/content/dam/Parker-com/Literature/Literature-Files/pneumatic/Instruction-sheets/FRL/Service_Lubricators.pdf
  - https://www.parker.com/content/dam/Parker-com/Literature/Literature-Files/pneumatic/Literature/FRL/0700P/0700P_General_Industrial.pdf
  - https://tools.cp.com/en-us/products/sanders/pistol-sanders
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/2050499083.pdf
---

Un groupe FRL associe un **filtre**, un **régulateur** et un **lubrificateur**. Ces trois fonctions ne sont pas automatiquement requises sur chaque branche. Le filtre ne remplace pas un sécheur, le régulateur ne crée pas de débit et le lubrificateur ne doit être installé que si l’équipement aval et le procédé acceptent l’huile.

## L’ordre fonctionnel

Pour le lubrificateur Parker documenté dans ce guide, la notice impose l’installation **en aval du filtre et du régulateur**, puis en amont de l’équipement à lubrifier. La chaîne fonctionnelle est donc :

**arrivée d’air → filtre → régulateur → lubrificateur si requis → outil**

Cet ordre ne dispense pas de lire la notice du groupe exact. Les [instructions FRL Chicago Pneumatic, édition 2025-01](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2024/frl/6159990240_02.pdf), exigent de suivre le sens de débit marqué sur chaque module et d’installer filtres, régulateurs et lubrificateurs verticalement. Les instructions Parker imposent elles aussi le sens de la flèche et placent le bol en bas pour les modèles concernés.

Un module préassemblé ne doit pas être retourné ou réordonné depuis son seul aspect visuel. Identifiez les ports d’entrée et de sortie, le modèle, la pression maximale, la température admissible et la position prévue par le fabricant.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 390" role="img" aria-labelledby="frl-order-title frl-order-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="frl-order-title">Ordre fonctionnel d’un groupe filtre régulateur lubrificateur</title>
  <desc id="frl-order-desc">L’air traverse le filtre puis le régulateur. Le lubrificateur est ajouté en dernier uniquement si la notice de l’équipement aval l’exige.</desc>
  <rect width="760" height="390" rx="22" fill="#10281e"/>
  <text x="40" y="47" fill="#d3eb56" font-size="15" font-weight="700">SUIVRE LES FLÈCHES ET LA NOTICE DU MODÈLE</text>
  <text x="40" y="86" fill="white" font-size="24" font-weight="700">Chaîne fonctionnelle au point d’usage</text>
  <rect x="38" y="130" width="155" height="94" rx="14" fill="#eef2e9"/><text x="116" y="166" text-anchor="middle" fill="#19704f" font-size="15" font-weight="700">FILTRE</text><text x="116" y="194" text-anchor="middle" fill="#56685e" font-size="13">séparation définie</text>
  <text x="205" y="184" fill="#d3eb56" font-size="30" font-weight="700">→</text>
  <rect x="245" y="130" width="155" height="94" rx="14" fill="#eef2e9"/><text x="322" y="166" text-anchor="middle" fill="#19704f" font-size="15" font-weight="700">RÉGULATEUR</text><text x="322" y="194" text-anchor="middle" fill="#56685e" font-size="13">pression aval</text>
  <text x="412" y="184" fill="#d3eb56" font-size="30" font-weight="700">→</text>
  <rect x="452" y="112" width="270" height="130" rx="14" fill="#d3eb56"/><text x="587" y="153" text-anchor="middle" fill="#143426" font-size="15" font-weight="700">LUBRIFICATEUR</text><text x="587" y="181" text-anchor="middle" fill="#143426" font-size="13">seulement si la notice le demande</text><text x="587" y="209" text-anchor="middle" fill="#56685e" font-size="12">au plus près de l’équipement concerné</text>
  <rect x="38" y="286" width="684" height="58" rx="12" fill="#1b4937"/><text x="380" y="312" text-anchor="middle" fill="white" font-size="14" font-weight="700">Chaque module doit être dimensionné au débit réel</text><text x="380" y="332" text-anchor="middle" fill="#bed0c6" font-size="12">La perte de charge vient de la courbe du modèle, pas d’une valeur universelle.</text>
  <text x="40" y="372" fill="#bed0c6" font-size="13">Sources : notices Chicago Pneumatic et Parker.</text>
</svg>
</div>

## Filtre : séparer ce qu’il est conçu pour séparer

Un filtre de ligne peut retirer des particules et de l’humidité liquide entraînée selon sa conception et son élément. Il ne réduit pas à lui seul la vapeur d’eau jusqu’à un [point de rosée sous pression](/guides/point-rosee-secheur-filtre-air-comprime/) spécifié. Un besoin de séchage, de filtration coalescente ou de classe [ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) doit être traité séparément.

La notice Parker décrit pour ses filtres un déflecteur centrifuge, un élément et une purge. Elle demande de purger régulièrement les versions manuelles avant que le liquide n’atteigne l’élément. Les instructions Chicago Pneumatic distinguent purge automatique et purge manuelle et demandent une purge manuelle si l’automatisme ne répond pas et que le condensat atteint le repère supérieur.

La finesse de filtration, le débit nominal et le critère de remplacement appartiennent au modèle exact. Ne transformez pas la consigne de remplacement d’un filtre Parker particulier en règle pour tous les bols du marché.

## Régulateur : abaisser et stabiliser, pas compenser un manque de débit

Le régulateur règle la pression aval dans sa plage de fonctionnement. Le tourner vers une consigne plus élevée ne restaure pas un débit que le compresseur, le filtre, le raccord ou le flexible ne peuvent pas fournir.

Les instructions Chicago Pneumatic demandent de relever le capot, de tourner le réglage puis de le repousser, et prévoient un verrouillage sur les versions concernées. Après réglage, contrôlez la pression pendant le fonctionnement représentatif de l’outil. L’écart entre lecture statique et lecture sous débit révèle l’ensemble des restrictions amont, pas uniquement le régulateur.

Pour une chute anormale, mesurez avant et après le groupe. Le guide [diagnostiquer une chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) permet d’isoler le composant au lieu d’augmenter aveuglément la pression du compresseur.

## Lubrificateur : une décision par outil et par procédé

Un lubrificateur introduit un brouillard d’huile dans l’air aval. Il n’est utile que si la documentation de l’équipement le demande et si l’application accepte cette huile. Le [manuel de la ponceuse CP9779](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/2050499083.pdf), par exemple, prescrit une huile SAE 10 à deux gouttes par minute. À l’inverse, Chicago Pneumatic présente les moteurs des ponceuses orbitales CP53 et CP55 comme sans huile afin de protéger le procédé de ponçage contre les contaminants.

Ces deux cas suffisent à exclure une règle générale du type « tout outil pneumatique doit passer par un lubrificateur ». Une branche qui alimente peinture, instrumentation, soufflage de procédé ou moteur explicitement sans huile doit conserver son exigence propre. Si un autre outil demande de l’huile, placez le lubrificateur sur sa branche dédiée, en aval du filtre et du régulateur et aussi près que le demande la notice.

Parker indique qu’un lubrificateur individuel par consommateur donne la meilleure assurance de lubrification sur les modèles visés. Cette recommandation technique ne définit pas à elle seule l’architecture de tout atelier, mais elle soutient la séparation des branches lorsque leurs exigences diffèrent.

## Aucun réglage universel en gouttes par minute

Les instructions FRL Chicago Pneumatic utilisent, pour les modèles couverts par ce document, la formule `D = L × 0,2`, où `D` est le nombre de gouttes par minute, `L` la consommation de l’outil en L/s et une goutte vaut 15 mm³. Le manuel CP9779 demande, lui, deux gouttes par minute.

Ces prescriptions ont des périmètres différents. La formule d’un groupe FRL ne doit pas écraser la notice de l’outil et une consigne CP ne doit pas être transférée à un lubrificateur Parker. Relevez donc :

1. le modèle du lubrificateur ;
2. l’huile autorisée ;
3. le débit minimal nécessaire à son fonctionnement ;
4. le réglage demandé par la notice de l’outil ;
5. la méthode de contrôle du brouillard ou du niveau.

Si ces données manquent, n’inventez pas un nombre de gouttes.

## Dimensionner le passage, pas seulement le filetage

Chaque filtre, régulateur et lubrificateur introduit une restriction dépendant de sa géométrie, de son réglage, de l’élément installé et du débit. Le [catalogue Parker General Industrial FRL](https://www.parker.com/content/dam/Parker-com/Literature/Literature-Files/pneumatic/Literature/FRL/0700P/0700P_General_Industrial.pdf) publie des courbes de débit et de chute de pression propres aux séries.

Le filetage 1/4, 1/2 ou 3/4 pouce ne suffit donc pas pour déclarer un groupe compatible. Comparez la courbe du modèle au débit maximal simultané, à la pression amont et à la chute acceptable. Si aucune courbe ou capacité n’est disponible, la caractéristique critique reste insuffisamment documentée.

## Entretien sans calendrier inventé

La périodicité dépend du modèle, de l’air amont et de l’usage. Les instructions Chicago Pneumatic demandent des contrôles réguliers, le remplacement des éléments contaminés ou usés, le suivi du niveau d’huile et l’entretien de la purge. Elles ne donnent pas dans la section générale une fréquence universelle applicable à toutes les installations.

Le dossier de maintenance doit au minimum enregistrer :

- modèle, sens de montage et pression maximale ;
- pression amont et aval sous un débit reproductible ;
- niveau de condensat et fonctionnement de la purge ;
- état et référence de l’élément filtrant ;
- niveau, huile et réglage du lubrificateur lorsqu’il existe ;
- fuites, dommages du bol, date et motif de l’intervention.

Avant ouverture, les notices CP et Parker demandent de couper l’alimentation et de dépressuriser les lignes concernées. Chicago Pneumatic avertit aussi que les solvants et nettoyants agressifs endommagent les bols en polycarbonate et limite le nettoyage de ses composants concernés à un chiffon légèrement humide, avec eau et nettoyant doux si nécessaire. Appliquez toujours la procédure du modèle installé.

## Contrôle de remise en service

1. Confirmer le sens des flèches et la position verticale prescrite.
2. Vérifier l’assemblage, les ports obturés et la tenue des raccords.
3. Confirmer que le lubrificateur est absent des branches qui ne l’acceptent pas.
4. Contrôler filtre, purge, huile éventuelle et réglage du régulateur.
5. Remettre progressivement sous pression selon la notice.
6. Rechercher les fuites.
7. Mesurer les pressions amont et aval pendant un débit représentatif.
8. Consigner le résultat et retirer le groupe du service si son fonctionnement reste anormal.

Un FRL bien monté n’est pas une preuve suffisante de qualité d’air. Le procédé doit toujours relier filtre, séchage, huile, débit et pression à ses propres exigences.

## Sources

- [Chicago Pneumatic, instructions FRL, édition 2025-01](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2024/frl/6159990240_02.pdf)
- [Parker, Installation and Service Instructions, filtres et lubrificateurs](https://www.parker.com/content/dam/Parker-com/Literature/Literature-Files/pneumatic/Instruction-sheets/FRL/Service_Lubricators.pdf)
- [Parker, General Industrial Filter, Regulator, Lubricator Products](https://www.parker.com/content/dam/Parker-com/Literature/Literature-Files/pneumatic/Literature/FRL/0700P/0700P_General_Industrial.pdf)
- [Chicago Pneumatic, gammes de ponceuses orbitales à moteur sans huile](https://tools.cp.com/en-us/products/sanders/pistol-sanders)
- [Chicago Pneumatic, manuel CP9779](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/2050499083.pdf)
