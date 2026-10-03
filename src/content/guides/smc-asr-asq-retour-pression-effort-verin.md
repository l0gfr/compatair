---
title: "SMC ASR/ASQ : quand réduire la pression de retour du vérin convient"
seoTitle: "SMC ASR/ASQ : effort de retour et pression réduite"
description: "ASR/ASQ exige des pressions différentes sur travail et retour. Vérifiez l’effort, la limite de 85 %, la charge et le comportement en position centrale."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "diagnostiquer-chute-pression-air-comprime", "distributeur-5-3-centre-ferme-verin-derive"]
sources: ["https://www.smcworld.com/catalog/en/flowcontrol/ASR-ASQ-E/7-9-3-p1145-1158-ASR-ASQ_en/data/7-9-3-p1145-1158-ASR-ASQ_en.pdf"]
---

**Un ensemble SMC ASR/ASQ ne convient pas si le vérin demande la même pression sur sa course de travail et sur son retour.** L’économie envisagée repose précisément sur une différence de pression entre ces deux phases.

Les [précautions du catalogue, page imprimée 1158](https://www.smcworld.com/catalog/en/flowcontrol/ASR-ASQ-E/7-9-3-p1145-1158-ASR-ASQ_en/data/7-9-3-p1145-1158-ASR-ASQ_en.pdf#page=14) excluent ce cas. Elles prévoient la valve de débit **ASQ côté travail**, là où l’effort est requis, et la valve de pression **ASR côté retour**. Une inversion de ces côtés peut empêcher le fonctionnement du vérin.

## Vérifier ce que le retour doit réellement accomplir

Un retour n’est pas automatiquement une course sans effort. Une charge, un frottement ou un outil entraîné peut encore demander de la poussée. Identifiez le sens qui porte le travail et celui qui est candidat à une pression réduite ; le nom donné à la course dans l’automate ne suffit pas.

La même page exclut les fluctuations de charge et avertit de mouvements brusques possibles avec une charge verticale. Une application qui change de pièce ou de charge doit donc être examinée avant de reproduire un réglage favorable sur un seul cycle.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 380" role="img" aria-labelledby="smc-asr-asq-retour-pression-effort-verin-svg-title smc-asr-asq-retour-pression-effort-verin-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="smc-asr-asq-retour-pression-effort-verin-svg-title">Réduire le retour demande un effort différent</title><desc id="smc-asr-asq-retour-pression-effort-verin-svg-desc">Le catalogue prévoit ASQ côté travail et ASR côté retour. Les deux courses ne peuvent pas exiger la même pression. Schéma fonctionnel, sans raccordement de machine validé.</desc>
<rect width="520" height="380" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="22">ASR/ASQ : deux courses, deux besoins</text><rect x="166" y="103" width="203" height="104" rx="10" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><path d="M267 103v104m0-52h169M82 155h84" stroke="#d3eb56" stroke-width="8" fill="none"/><text x="30" y="255" fill="white" font-size="21">Travail : ASQ</text><text x="289" y="255" fill="white" font-size="21">Retour : ASR</text><text x="28" y="317" fill="white" font-size="20">Même pression requise sur les deux courses ?</text><text x="28" y="348" fill="white" font-size="20">Le catalogue exclut cette utilisation.</text></g>
</svg>
<figcaption>Le catalogue prévoit ASQ côté travail et ASR côté retour. Les deux courses ne peuvent pas exiger la même pression. Schéma fonctionnel, sans raccordement de machine validé.</figcaption>
</figure>

## La pression réduite a aussi une limite d’alimentation

SMC demande de garder la pression réglée en sortie de la valve de pression dans **85 % de la pression d’entrée**. Au-delà, la sortie peut devenir instable sous l’effet des fluctuations amont.

Un exemple fictif avec une entrée de 0,60 MPa donne 0,60 × 0,85 = **0,51 MPa**. Ce calcul situe la limite de sélection publiée ; il ne démontre pas que 0,51 MPa fournit l’effort du retour, ni que la pression amont restera à 0,60 MPa pendant le mouvement. Si l’entrée varie, la comparaison doit porter sur ces conditions réelles.

Le [calcul de force d’un vérin](/guides/force-verin-pneumatique-diametre-pression/) permet d’examiner l’effort demandé, avec sa géométrie. Le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) aide à vérifier l’alimentation pendant la course, au lieu de retenir seulement la pression à l’arrêt.

## Examiner la position centrale du distributeur

Le catalogue précise qu’en position centrale, avec les architectures de distributeur qu’il énumère, le vérin peut bouger jusqu’à l’équilibre des pressions et de la charge. Pour un centre fermé, il demande aussi de n’y passer qu’après établissement de la pression en fin de course ; un remplissage insuffisant peut provoquer un mouvement brusque au redémarrage.

Cette remarque empêche d’utiliser la réduction du retour comme justification d’un maintien immobile. Le [guide distributeur 5/3 et dérive](/guides/distributeur-5-3-centre-ferme-verin-derive/) traite ce problème de circuit séparément.

| Cas rencontré | Conclusion documentaire ou donnée requise |
| --- | --- |
| Même pression nécessaire sur les deux courses | Utilisation exclue par les précautions ASR/ASQ |
| Retour moins chargé et stable | Examiner effort, réglage et modèle exact |
| Charge variable ou verticale | Reprendre les précautions spécifiques avec l’intégrateur |
| Course instable après ajout des valves | Vérifier côtés de montage et pression disponible |

La sélection se termine par un contrôle du cycle, avec les critères de travail et de retour. Aucun pourcentage universel d’économie n’est déduit ici du simple nom ASR/ASQ.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
