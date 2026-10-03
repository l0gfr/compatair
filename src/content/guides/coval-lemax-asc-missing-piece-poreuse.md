---
title: "LEMAX+ : pourquoi « ASC missing » peut laisser la prise fonctionner"
seoTitle: "COVAL LEMAX+ : comprendre ASC missing"
description: "ASC missing peut accompagner une pièce poreuse sans arrêter la génération de vide. Lire les reprises entre 65 et 75 % et rechercher les fuites."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["vacuometre-vacuostat-bar-absolu-pourcentage-vide", "ventouse-piece-poreuse-debit-vide", "schmalz-svk-ventouses-non-occupees-vide"]
sources: ["https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf"]
---

L’afficheur indique « ASC missing » sur une pièce poreuse, alors que la pompe continue de produire du vide. COVAL décrit cette adaptation pour le LEMAX+ : **la suppression temporaire de l’économie d’air ne signifie pas à elle seule l’arrêt du cycle.** Elle renseigne sur la capacité du circuit à conserver le vide.

## Ce que surveille le cycle ASC

La [notice LEMAX+, logiciel 1.6, page 1, section I](https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf#page=1) décrit un signal de prise à **65 % de vide**. À **75 %**, le venturi cesse d’être alimenté et le vide est conservé par le clapet. Les microfuites le font ensuite baisser ; une nouvelle génération le ramène de 65 à 75 %.

Ces pourcentages sont les seuils du cycle expliqué par la notice. Ils ne constituent pas une capacité de charge universelle. Le [guide des vacuostats](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) distingue seuil, mesure et convention de vide.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 335" role="img" aria-labelledby="coval-lemax-asc-missing-piece-poreuse-title coval-lemax-asc-missing-piece-poreuse-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="coval-lemax-asc-missing-piece-poreuse-title">LEMAX+ : distinguer cycle ASC et pièce poreuse</title><desc id="coval-lemax-asc-missing-piece-poreuse-desc">Le cycle publié reprend le vide à 65 % et coupe le venturi à 75 %. Des reprises en battement peuvent conduire au mode sans ASC.</desc><rect width="520" height="335" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">ASC · seuils publiés du cycle</text><path d="M45 206H475M45 112H475" stroke="#8abfa3" stroke-width="2" stroke-dasharray="6 6"/><text x="32" y="99" fill="#eef2e9" font-size="21">75 % : arrêt venturi</text><text x="32" y="240" fill="#eef2e9" font-size="21">65 % : reprise</text><path d="M54 206l75-94 75 94 75-94 75 94 75-94" fill="none" stroke="#d3eb56" stroke-width="5"/><text x="29" y="297" fill="#eef2e9" font-size="22">Battements → sans ASC si détectés</text></svg>
<figcaption>Le cycle publié reprend le vide à 65 % et coupe le venturi à 75 %. Des reprises en battement peuvent conduire au mode sans ASC.</figcaption>
</figure>

## Une pièce poreuse peut supprimer la phase d’économie

COVAL décrit une pièce poreuse provoquant des reprises de vide successives en battement. Le module détecte cette situation, affiche ou signale le fonctionnement sans ASC et continue de travailler. Il revient automatiquement en ASC lorsque les fuites disparaissent, par exemple avec une pièce étanche ou après maintenance du circuit.

La première question devient donc la provenance de la fuite : perméabilité de la pièce, contact des ventouses ou circuit. Le [guide des pièces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) explique pourquoi un montage validé sur surface étanche peut ne pas reproduire le même comportement sur un matériau traversant.

| Contexte observé | Comparaison utile |
| --- | --- |
| Sans ASC seulement sur une matière donnée | Perméabilité et surface de contact de cette pièce |
| Sans ASC sur toutes les pièces après maintenance | Étanchéité et remontage du circuit |
| Reprises espacées puis battements | Évolution du vide dans le cycle et apparition des fuites |
| Retour en ASC avec une pièce étanche | Différence de comportement liée au circuit ou à la matière |

## Ne pas déduire une économie fixe de la mention ASC

Une phase sans alimentation du venturi a un sens physique ; elle ne donne pas le bilan énergétique de toute la machine. Le temps de prise, les reprises de vide et la dépose appartiennent aussi au cycle. Aucun pourcentage d’économie réel n’est calculé dans ce guide.

La notice demande un circuit durablement étanche et recommande de réduire le volume à vider, avec un module proche des ventouses. Le [traitement des ventouses non occupées](/guides/schmalz-svk-ventouses-non-occupees-vide/) présente un mécanisme différent : une fuite par une prise libre ne se corrige pas comme la porosité de toute une pièce.

Pour trancher, comparer les chronologies de vide d’une pièce étanche et de la pièce concernée, dans les conditions autorisées. L’apparition de « ASC missing » oriente la recherche ; elle ne prouve ni une erreur de compresseur, ni une force de maintien suffisante pour l’opération.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [COVAL LEMAX+, notice 2023 V05](https://doc.coval.com/g/LEMAX%2B/not/lemax%2B_notice_coval_2023_v05.pdf)
