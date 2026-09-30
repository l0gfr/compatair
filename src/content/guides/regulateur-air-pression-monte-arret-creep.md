---
title: "Pression aval qui monte à l’arrêt : reconnaître le creep d’un régulateur"
seoTitle: "Régulateur : pression aval qui monte à l’arrêt"
description: "Une pression monte après l’arrêt du débit : distinguer passage au siège, effet de pression amont et événement aval avec un relevé synchronisé."
pubDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["regulateur-air-comprime-fuit-event-decompression", "diagnostiquer-chute-pression-air-comprime", "detecter-mesurer-fuites-air-comprime"]
sources:
  - https://www.swagelok.com/en/blog/troubleshoot-common-regulator-problems
---

Le régulateur est réglé, le consommateur s’arrête, puis la pression aval augmente. **Cette montée doit être caractérisée avant de retoucher la consigne.** Le [creep](/glossaire/#creep-regulateur) désigne un passage indésirable à travers le siège fermé ; une variation de pression amont peut provoquer un autre phénomène.

## Le mécanisme expliqué par Swagelok

Le [guide de dépannage Swagelok](https://www.swagelok.com/en/blog/troubleshoot-common-regulator-problems) décrit une contamination qui laisse un faible passage entre siège et obturateur. Le fluide peut alors traverser le siège et faire monter la pression aval. Le constructeur distingue ce creep de l’effet de pression d’alimentation, SPE, et d’une chute liée au débit, droop.

Le document concerne les régulateurs de systèmes fluides. Pour appliquer le diagnostic à votre air comprimé, identifiez le modèle, ses fonctions et le schéma du poste. La pression maximale admissible de l’équipement aval doit rester prise en compte pendant l’enquête.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="regulateur-air-pression-monte-arret-creep-title regulateur-air-pression-monte-arret-creep-desc" style="font-family:system-ui,sans-serif"><title id="regulateur-air-pression-monte-arret-creep-title">Décrire la montée aval</title><desc id="regulateur-air-pression-monte-arret-creep-desc">Distinctions Swagelok et grille de relevé proposée ; aucun diagnostic automatique à partir d’un cadran.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Décrire la montée aval</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Creep</text><text x="32" y="97" font-size="16" fill="#eef2e9">Passage indésirable au siège fermé</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Effet d’alimentation</text><text x="32" y="167" font-size="16" fill="#eef2e9">Variation liée à la pression amont</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Relevé synchronisé</text><text x="32" y="237" font-size="16" fill="#eef2e9">Amont, aval et état du débit</text></svg>
<figcaption>Distinctions Swagelok et grille de relevé proposée ; aucun diagnostic automatique à partir d’un cadran.</figcaption>
</figure>

## Construire une chronologie de pression

Demandez au mainteneur un relevé simultané en amont et en aval, dans un scénario autorisé : état du débit, position des commandes et moment de la montée. Gardez les unités, les points physiques et l’heure. Sans ces éléments, deux photographies de cadrans peuvent décrire deux instants différents.

Une hausse aval avec une alimentation stable mérite un examen du siège et des autres origines de pression. Une hausse corrélée à une baisse amont oriente une autre question. Ces observations sont des indices ; elles ne démontrent pas à elles seules la cause interne.

## Le souffle par l’évent est un autre symptôme

La [lecture d’un régulateur qui souffle](/guides/regulateur-air-comprime-fuit-event-decompression/) distingue les fonctions de décompression et de retour d’air selon la version. Notez si la montée aval s’accompagne d’un échappement, et à quel moment. Un évent bouché pour faire taire le bruit supprimerait une fonction possible sans résoudre l’origine de pression.

Le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) décrit le fonctionnement en débit. Ne mélangez pas son relevé avec la montée lente observée après fermeture : gardez deux scénarios si les deux défauts existent.

## Préparer la réparation avec l’historique du circuit

Transmettez la référence, la consigne, les pressions relevées, les travaux récents et l’état de filtration en amont. Swagelok cite notamment les débris d’installation dans la contamination du siège. Cela constitue une cause possible, pas une preuve que votre ligne en contient.

Le fournisseur ou le mainteneur doit déterminer l’intervention selon la notice et les conditions de mise en sécurité. Aucun réglage interne, nettoyage de siège ou essai de surpression improvisé n’est proposé ici.

## Vérifier la disparition du défaut dans le même scénario

Après réparation validée, répétez les contrôles prévus et comparez la pression au repos dans les conditions qui faisaient apparaître la montée. Notez la durée d’observation réelle ; une mesure immédiate ne documente pas un comportement sur plusieurs heures.

Notre [méthode de suivi des fuites](/guides/detecter-mesurer-fuites-air-comprime/) aide à garder la trace du résultat. Une conclusion exploitable nomme l’organe corrigé, la cause retenue et le scénario contrôlé, sans déclarer tous les régulateurs du réseau exempts de défaut.
