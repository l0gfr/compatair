---
title: "Yokota YLT60 ou YLT60L : changer de pression change aussi la sélection"
seoTitle: "Yokota YLT60 ou YLT60L : 5 ou 6 bar au poste ?"
description: "330 L/min à 6 bar ou 280 à 5 bar : les YLT60 et YLT60L sont deux références. Comparez leur domaine de couple avant de modifier un poste."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["cle-a-impulsions-ou-cle-a-chocs-air-comprime", "diagnostiquer-chute-pression-air-comprime"]
sources:
  - https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf
---

Le suffixe L d’une Yokota YLT60L ne doit pas disparaître d’un devis. Le catalogue japonais distingue une série standard et une série pour une pression d’air plus basse. Cette différence affecte le point de consommation et les données de couple publiés. Elle permet une comparaison technique précise, sans supposer qu’abaisser le régulateur d’une YLT60 crée une YLT60L.

## Deux points de consommation en charge

La [YLT60](/outils-pneumatiques/cle-a-impulsions-yokota-ylt60/) publie **330 L/min en charge à 0,6 MPa**, soit **6 bar**. La [YLT60L](/outils-pneumatiques/cle-a-impulsions-yokota-ylt60l/) publie **280 L/min en charge à 0,5 MPa**, soit **5 bar**. Les en-têtes des deux tableaux associent explicitement la pression au débit. La longueur de **164 mm** et la masse de **0,95 kg** sont communes aux deux lignes. [Catalogue Yokota, page PDF 29](https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=29).

L’écart de débit vaut **50 L/min**, par soustraction. Il concerne deux références et deux points de pression différents. Ce résultat ne mesure pas le gain d’une modification du même outil, ni une économie électrique annuelle de compresseur.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 259" role="img" aria-labelledby="ylt-pression-title ylt-pression-desc">
<title id="ylt-pression-title">Deux références, deux points de mesure</title><desc id="ylt-pression-desc">Les pressions proviennent des en-têtes de consommation. Aucun débit intermédiaire n’est interpolé.</desc><rect width="440" height="259" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="16"><text x="24" y="32" fill="#d3eb56">YLT60, série standard</text><text x="24" y="56" fill="#eef2e9">330 L/min en charge à 6 bar</text><text x="24" y="89" fill="#d3eb56">YLT60L, série basse pression</text><text x="24" y="113" fill="#eef2e9">280 L/min en charge à 5 bar</text><text x="24" y="146" fill="#d3eb56">Différence de débit publiée</text><text x="24" y="170" fill="#eef2e9">50 L/min, comparaison de références</text></g></svg>
<figcaption>Les pressions proviennent des en-têtes de consommation. Aucun débit intermédiaire n’est interpolé.</figcaption>
</figure>

## Vérifier la plage de couple pour l’assemblage

La ligne YLT60 indique une plage de couple de référence de **7 à 15,5 Nm**, sous l’en-tête associé à **0,5 à 0,6 MPa**. La YLT60L indique **6 à 13,5 Nm**, sous un en-tête associé à **0,4 à 0,5 MPa**. La note du tableau précise que ces couples sont des valeurs de référence obtenues sur un assemblage rigide ; le choix dépend de la condition de travail. [Tableaux et note Yokota](https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=29).

Ces plages ne fournissent pas une courbe complète de couple selon la pression. Elles ne garantissent pas le couple sur un assemblage différent, une matière différente ou une autre séquence. Pour un poste réglé à une cible donnée, prévoir la qualification de l’assemblage et le contrôle prescrits par le procédé. Le [guide des clés à impulsions](/guides/cle-a-impulsions-ou-cle-a-chocs-air-comprime/) explique la fonction de cette famille.

## Garder la bonne référence sur toute la chaîne

Reporter YLT60 ou YLT60L sur la demande d’achat, la fiche de poste et les documents de réglage. Vérifier également la sortie de l’outil proposé. Le catalogue distingue plusieurs variantes A, B et à carré ; elles ont leurs propres lignes et ne doivent pas être remplacées par un nom de série abrégé.

La source prévoit une plage d’emploi de **0,5 à 0,6 MPa** pour la série standard concernée et de **0,4 à 0,5 MPa** pour la série L. Le point de débit correspond au haut de ces plages. Il n’autorise pas à alimenter la version L à 6,3 bar au motif que cette valeur apparaît souvent sur d’autres outils. [Prescriptions sous les tableaux](https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=29).

## Conclure sur l’air sans conclure sur le serrage

Les deux points de débit et de pression permettent une évaluation déterministe de la capacité d’un compresseur lorsque son FAD et son service sont documentés. Le [guide FAD](/guides/debit-restitue-fad-vs-debit-aspire/) précise les données côté production. Le contrôle du [circuit au poste](/guides/diagnostiquer-chute-pression-air-comprime/) complète cette comparaison.

Un verdict d’alimentation favorable ne qualifie pas l’assemblage vissé. Il indique que le scénario de demande documenté entre dans la capacité d’air évaluée. Le choix entre YLT60 et YLT60L doit donc satisfaire simultanément la plage d’emploi de l’outil, le besoin du procédé de serrage et la configuration du circuit. Les sources permettent de distinguer ces critères ; elles ne proposent pas un remplacement universel entre les deux références.
