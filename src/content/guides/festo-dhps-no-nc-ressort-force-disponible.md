---
title: "Festo DHPS NO ou NC : calculer la force disponible avec le ressort"
seoTitle: "Festo DHPS NO/NC : ressort et force de préhension"
description: "Une DHPS NO ouvre hors pression, une NC ferme. Combinez force pneumatique et ressort selon le sens de préhension, la course et le bras de levier."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["pince-pneumatique-force-doigt-longueur-prehension", "force-verin-pneumatique-diametre-pression", "distributeur-5-3-centre-ferme-verin-derive"]
sources: ["https://www.festo.com/media/catalog/204231_documentation.pdf"]
---

**Le suffixe NO ou NC d’une pince Festo DHPS change le sens du ressort lorsque la pression disparaît.** Il ne garantit pas que l’effort pneumatique nominal reste disponible. Une substitution de variante demande donc de vérifier le sens, la géométrie et la force effectivement obtenue.

Le [catalogue DHPS, édition 2026/08, page 2](https://www.festo.com/media/catalog/204231_documentation.pdf#page=2) distingue **NC, fermeture par ressort hors pression**, et **NO, ouverture par ressort hors pression**. La [page 14](https://www.festo.com/media/catalog/204231_documentation.pdf#page=14) décrit ensuite comment associer force pneumatique et force de ressort selon l’application.

## Retrouver la combinaison de forces

La notation FH représente la force pneumatique par mors ; Ftot est la force de ressort à considérer par doigt. La préhension par ressort seul utilise Ftot. La préhension par pression contre le ressort utilise **FH − Ftot**. Lorsque pression et ressort agissent dans le même sens, la formule devient **FH + Ftot**.

Ces trois cas ne sont pas interchangeables. Ajouter un ressort peut soutenir une préhension, mais il peut aussi réduire la force disponible dans le mouvement opposé. Un tableau donnant FH pour une pince double effet ne répond pas directement à la question de maintien hors pression.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="festo-dhps-no-nc-ressort-force-disponible-svg-title festo-dhps-no-nc-ressort-force-disponible-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="festo-dhps-no-nc-ressort-force-disponible-svg-title">Trois combinaisons de force propres à l’application</title><desc id="festo-dhps-no-nc-ressort-force-disponible-svg-desc">La documentation DHPS distingue préhension par ressort, par pression contre le ressort, et pression aidée par le ressort. Une option de maintien ne conserve pas automatiquement la force pneumatique.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="23">DHPS : où le ressort agit-il ?</text><path d="M45 110h46l8-14 12 28 12-28 12 28 12-28 12 28 8-14h45" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="236" y="117" fill="white" font-size="22">Ressort seul : Ftot</text><text x="43" y="195" fill="white" font-size="22">Pression contre ressort : FH − Ftot</text><text x="43" y="267" fill="white" font-size="22">Pression + ressort : FH + Ftot</text><text x="28" y="332" fill="white" font-size="21">NO ouvre sans pression ; NC ferme.</text></g>
</svg>
<figcaption>La documentation DHPS distingue préhension par ressort, par pression contre le ressort, et pression aidée par le ressort. Une option de maintien ne conserve pas automatiquement la force pneumatique.</figcaption>
</figure>

## Le ressort demande aussi la longueur du doigt

La page 14 demande de tenir compte du bras de levier x pour calculer Ftot par doigt. Par exemple, la formule du DHPS-16 est **−0,08 × x + 0,5 × F**, où F provient de la courbe de ressort de la [page 13](https://www.festo.com/media/catalog/204231_documentation.pdf#page=13) pour la course du mors étudiée.

Cette expression ne permet pas d’inventer F quand la course n’est pas connue. Conservez la taille, la course, la longueur et le sens de préhension avant de lire les courbes. La [sélection générale d’une pince et de ses doigts](/guides/pince-pneumatique-force-doigt-longueur-prehension/) traite l’effet de la géométrie ; ce cas DHPS ajoute la combinaison du ressort avec l’action pneumatique.

## Une coupure d’air n’est pas une qualification du maintien

Le mouvement prévu du ressort n’établit pas à lui seul une capacité de retenue de la pièce dans toutes les positions. La pièce, les surfaces de contact, l’accélération et le montage doivent être étudiés. Ce guide ne convertit aucune force de ressort en masse suspendue admissible.

Pour remplacer une pince, préparez une comparaison des deux références complètes. Une différence NO/NC ou de longueur de doigt peut changer le comportement même si l’encombrement principal paraît identique.

| À relever | Décision qu’il prépare |
| --- | --- |
| Suffixe NO ou NC | Sens du ressort hors pression |
| Taille et course | Courbe de force de ressort applicable |
| Bras de levier et doigt | Force réellement disponible à la prise |
| Préhension interne ou externe | Sens des efforts dans l’application |
| FH et Ftot | Formule de combinaison correcte |

Le [guide force du vérin](/guides/force-verin-pneumatique-diametre-pression/) aide à distinguer force pneumatique et pression. Le [cas distributeur et dérive](/guides/distributeur-5-3-centre-ferme-verin-derive/) explique pourquoi l’état d’une commande doit aussi être relié au circuit. Faites confirmer la variante et le bilan de préhension avant de remplacer l’organe ; une option de ressort ne constitue pas une assurance générale contre la chute d’une pièce.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
