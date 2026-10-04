---
title: "Lechler : comparer un débit normal à 0 °C avec un FAD à 20 °C"
seoTitle: "Lechler 0 °C et FAD 20 °C : comparer les débits"
description: "Lechler affiche une référence à 0 °C et 1,01325 bar absolu ; Hertz décrit son FAD à 20 °C et 1 bar. Comparez les conditions avant les valeurs en litres."
pubDate: "2026-10-04"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "bar-psi-pression-absolue-relative", "hertz-hgs75-11-debit-13bar"]
sources: ["https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf", "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf"]
---

**Deux débits ramenés à un air de référence peuvent avoir des nombres différents pour la même masse d’air.** Le catalogue Lechler écrit 0 °C et 1,01325 bar absolu pour ses volumes normaux ; le catalogue Hertz précise 20 °C, 1 bar absolu et 0 % d’humidité relative pour les performances de la table HGS/HSC. Les litres ne suffisent pas à rendre les deux bases identiques.

Nous rapportons ici les conditions déclarées par ces documents, sans présenter la mention d’une norme comme une vérification indépendante de son application. La [page Lechler, PDF 164](https://www.lechler.com/fileadmin/media/pdf_flip_software/EN/catalogue_industry/lechler_catalogue_industry_221.pdf#page=164), et la [note Hertz, PDF 26](https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=26), doivent rester attachées aux chiffres.

## Un calcul possible, sous une hypothèse explicitée

Pour un scénario de gaz idéal sec conservant sa masse, la relation proposée est :

**Q₂ = Q₁ × (p₁ / p₂) × (T₂ / T₁)**, avec les pressions absolues et les températures en kelvins.

Supposons 1 000 L/min à 1 bar absolu et 20 °C. En les ramenant à 1,01325 bar absolu et 0 °C, sous cette hypothèse, le calcul donne **919,59 L/min**, arrondis à deux décimales. Les conversions utilisées sont 20 °C = 293,15 K et 0 °C = 273,15 K.

L’humidité de référence n’est pas précisée dans le passage Lechler cité. L’hypothèse d’air sec des deux côtés doit donc rester visible. Ce calcul pédagogique ne certifie pas une équivalence complète entre les méthodes de déclaration des deux fabricants.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 414" role="img" aria-labelledby="lechler-debit-normal-zero-degres-fad-title lechler-debit-normal-zero-degres-fad-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="lechler-debit-normal-zero-degres-fad-title">Conserver les deux références</title><desc id="lechler-debit-normal-zero-degres-fad-desc">Exemple de gaz idéal sec : 1 000 L/min à 20 °C et 1 bar absolu deviennent 919,59 L/min à 0 °C et 1,01325 bar absolu. L’humidité Lechler manque dans le passage cité.</desc>
<rect width="520" height="414" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Conserver les deux références</text><rect x="24" y="66" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="95" fill="#d3eb56" font-size="21" text-anchor="start">Référence du scénario 1</text><text x="42" y="122" fill="white" font-size="19" text-anchor="start">20 °C ; 1 bar absolu ; air sec</text><rect x="24" y="157" width="472" height="104" rx="12" fill="#203f31"/><text x="42" y="186" fill="#d3eb56" font-size="21" text-anchor="start">Référence du scénario 2</text><text x="42" y="213" fill="white" font-size="19" text-anchor="start">0 °C ; 1,01325 bar absolu ; air sec</text><text x="42" y="240" fill="white" font-size="19" text-anchor="start">supposé</text><rect x="24" y="275" width="472" height="77" rx="12" fill="#203f31"/><text x="42" y="304" fill="#d3eb56" font-size="21" text-anchor="start">1 000 → 919,59 L/min</text><text x="42" y="331" fill="white" font-size="19" text-anchor="start">Même masse dans le calcul idéal</text><text x="26" y="390" fill="#b4cec0" font-size="18" text-anchor="start">Hypothèse pédagogique ; aucune certification</text>
</svg>
<figcaption>Exemple de gaz idéal sec : 1 000 L/min à 20 °C et 1 bar absolu deviennent 919,59 L/min à 0 °C et 1,01325 bar absolu. L’humidité Lechler manque dans le passage cité.</figcaption>
</figure>

## Les 7 bar du réseau sont une autre pression

La pression de fonctionnement d’une buse n’est pas la pression à laquelle on rapporte son volume normal. Une valeur normale à 1,01325 bar absolu peut décrire la quantité consommée par une buse utilisée sous plusieurs bar relatifs.

Le [guide des pressions absolues et relatives](/guides/bar-psi-pression-absolue-relative/) permet d’éviter l’emploi de 0 bar relatif dans la formule. La pression absolue inclut le référentiel atmosphérique ; elle ne doit pas être remplacée par le seul affichage relatif du régulateur.

## Ce qu’il faut conserver dans la base CompatAir

Une fiche de débit doit garder la valeur, l’unité, la pression de fonctionnement, la température et la pression de référence, l’humidité lorsqu’elle est publiée et la méthode annoncée. Si une condition manque, elle reste signalée. Une conversion n’efface pas l’incertitude d’origine.

Le [guide FAD et débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) traite une autre distinction essentielle : le volume déplacé à l’aspiration n’est pas le volume effectivement délivré. Harmoniser une température de référence ne transforme pas un débit aspiré en FAD.

Pour le [choix entre HGS 7,5 et HGS 11](/guides/hertz-hgs75-11-debit-13bar/), la pression de travail reste associée à chaque FAD publié. Une comparaison avec une buse Lechler demande ensuite les conditions de la consommation de cette buse. Le résultat acceptable est une comparaison traçable, ou une donnée encore insuffisante ; un chiffre converti seul ne valide pas l’ensemble outil-compresseur.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
