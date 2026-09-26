---
title: "Lire une fiche CAGI de compresseur : débit, puissance absorbée et point de mesure"
seoTitle: "Fiche CAGI compresseur : lire débit, puissance et limites"
description: "Décodez une fiche CAGI avec un exemple officiel : débit à pression donnée, puissance totale, marche sans débit et portée de la vérification ISO 1217."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["comparer-puissance-specifique-compresseurs", "debit-restitue-fad-vs-debit-aspire", "compresseur-vitesse-variable-vsd-rentabilite-atelier"]
sources: ["https://www.cagi.org/performance-verification-original", "https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryCompressorUniformTestMethod.pdf?updated=1788880181", "https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryVFDCompressorsUniformTestMethod.pdf?updated=1788880181"]
---

**Une fiche CAGI doit être lue comme un ensemble de valeurs rattachées au même point de fonctionnement.** Le débit, la pression et la puissance totale vont ensemble. Isoler le meilleur chiffre ou le comparer à une puissance nominale de moteur retire une partie du sens du document.

Le [CAGI](https://www.cagi.org/performance-verification-original) propose des formats de fiches et un programme de vérification par un tiers pour les équipements et participants concernés. La présence d’un format standard ne prouve pas, à elle seule, que chaque donnée de n’importe quel document a été vérifiée indépendamment.

## Un exemple officiel, clairement pédagogique

L’[exemple CAGI à vitesse fixe, ROT 030.1](https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryCompressorUniformTestMethod.pdf?updated=1788880181) porte les noms de démonstration « ABC Compressor » et « 12A 22B 40 ». **Il s’agit d’une fiche modèle, pas d’un produit évalué par CompatAir.** Son pied de page précise que les données rapportées n’ont pas été indépendamment vérifiées par CAGI.

| Champ de l’exemple | Valeur publiée |
| --- | --- |
| Débit au point nominal | 175,0 acfm |
| Pression de fonctionnement | 125 psig |
| Puissance totale au point nominal | 36,12 kW |
| Puissance totale à débit nul | 9,1 kW |
| Puissance spécifique | 20,64 kW/100 cfm |

La note de mesure renvoie à l’ISO 1217, annexe C, et indique que les acfm sont rapportés aux conditions d’entrée. Conservez cette convention ; ne rebaptisez pas ces valeurs « litres réels dans le tuyau ».

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="lire-fiche-cagi-compresseur-iso-1217-title lire-fiche-cagi-compresseur-iso-1217-desc" xmlns="http://www.w3.org/2000/svg">
<title id="lire-fiche-cagi-compresseur-iso-1217-title">Exemple pédagogique publié par CAGI</title><desc id="lire-fiche-cagi-compresseur-iso-1217-desc">Les données de la fiche modèle servent à lire le document ; aucun produit réel n’est recommandé.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<circle cx="52" cy="68" r="22" fill="#d3eb56"/><text x="52" y="76" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">1</text><text x="90" y="58" fill="#d3eb56" font-size="23" font-weight="700">Débit et pression</text><text x="90" y="94" fill="white" font-size="20">175 acfm à 125 psig</text>
<path d="M52 94v37m-6-7 6 7 6-7" fill="none" stroke="#8abfa3" stroke-width="3"/>
<circle cx="52" cy="184" r="22" fill="#d3eb56"/><text x="52" y="192" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">2</text><text x="90" y="174" fill="#d3eb56" font-size="23" font-weight="700">Puissance totale absorbée</text><text x="90" y="210" fill="white" font-size="20">36,12 kW au point publié</text>
<path d="M52 210v37m-6-7 6 7 6-7" fill="none" stroke="#8abfa3" stroke-width="3"/>
<circle cx="52" cy="300" r="22" fill="#d3eb56"/><text x="52" y="308" text-anchor="middle" fill="#10281e" font-size="22" font-weight="700">3</text><text x="90" y="290" fill="#d3eb56" font-size="23" font-weight="700">Puissance spécifique</text><text x="90" y="326" fill="white" font-size="20">20,64 kW / 100 cfm</text>
</svg>
<figcaption>Exemple pédagogique publié par CAGI. Les données de la fiche modèle servent à lire le document ; aucun produit réel n’est recommandé.</figcaption>
</figure>

## Refaire le calcul de cohérence

À partir des valeurs de la fiche modèle, le calcul est :

**36,12 ÷ (175 ÷ 100) = 20,64 kW/100 cfm.**

Ce calcul vérifie la cohérence arithmétique de la puissance spécifique avec le débit et la puissance indiqués. Il ne vérifie pas physiquement le compresseur. Une erreur de transcription peut ainsi être détectée, mais une fiche cohérente peut toujours nécessiter l’examen de son origine, de sa version et de son statut de vérification.

La puissance à débit nul constitue un autre point du document. Elle ne donne pas directement la consommation annuelle : il manque le temps passé dans cet état et dans les autres états. Pour construire le bilan, utilisez des durées observées avec le [guide de suivi de charge](/guides/mesurer-temps-charge-vide-compresseur/).

## Ne pas remplacer la puissance totale par les chevaux du moteur

Sur la fiche, gardez séparées la puissance nominale du moteur et la puissance totale absorbée par l’ensemble au point publié. Dans notre grille de comparaison, chaque colonne conserve son intitulé exact. Une conversion d’unité ne résout pas une différence de périmètre.

Pour deux propositions commerciales, demandez les fiches des variantes effectivement offertes : pression, fréquence électrique, configuration et options incluses. Si l’un des documents concerne une autre pression, ne présentez pas le classement de puissance spécifique comme une comparaison strictement identique. Le [guide de puissance spécifique](/guides/comparer-puissance-specifique-compresseurs/) approfondit ce point.

## Et pour un compresseur à vitesse variable ?

L’[exemple CAGI à vitesse variable ROT 031.1](https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryVFDCompressorsUniformTestMethod.pdf?updated=1788880181) présente plusieurs points de débit, de puissance absorbée et de puissance spécifique, avec une référence à l’annexe E de l’ISO 1217. Le graphique accompagne ces données ; il ne remplace pas les valeurs et leurs conditions.

Pour l’atelier, confrontez les points disponibles au profil de demande. Si votre régime se situe hors des points ou de la plage documentés, demandez les informations correspondantes. Ne créez pas une courbe d’économie annuelle par interpolation libre entre quelques valeurs de catalogue.

## La fiche suffit-elle pour acheter ?

Elle fournit une base technique structurée. Votre décision exige encore le débit utile après traitement, la pression au poste, le profil de charge et les conditions d’installation. Conservez donc la fiche originale avec le devis, les hypothèses du scénario et les questions non résolues. La qualité de la comparaison vient de ce rapprochement, pas du seul logo en haut du document.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [CAGI, programme de vérification des performances](https://www.cagi.org/performance-verification-original)
- [CAGI, exemple de fiche à vitesse fixe ROT 030.1](https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryCompressorUniformTestMethod.pdf?updated=1788880181)
- [CAGI, exemple de fiche à vitesse variable ROT 031.1](https://uploads.prod01.oregon.platform-os.com/instances/2032/assets/documents/pdfs/RotaryVFDCompressorsUniformTestMethod.pdf?updated=1788880181)
