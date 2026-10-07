---
title: "Rotair 26 Y : pourquoi la paire L/min et CFM doit être confirmée avant dimensionnement"
seoTitle: "Rotair 26 Y : contradiction entre L/min et CFM"
description: "La page Rotair 26 Y présente des valeurs en L/min et CFM qui ne concordent pas. Conservez les cellules et faites confirmer le point de la version proposée."
pubDate: "2026-10-07"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["btp-chantier", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["contradiction-debit-cfm-m3-min-catalogues", "convertir-cfm-l-min-nl-min-air-comprime", "compresseur-reference-erp-nom-commercial"]
sources: ["https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/"]
---

La double unité d’un catalogue devrait aider à vérifier une transcription. Sur la page Rotair, elle révèle au contraire une question à résoudre : pour le **26 Y à 6,5 bar**, le tableau affiche **2 650 L/min** et **88 CFM** sur la même ligne. Ces deux nombres ne correspondent pas à une conversion géométrique simple entre litre et pied cube.

Le [tableau de gamme Rotair](https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/) est conservé comme source de cette contradiction, pas comme autorisation de choisir le nombre le plus favorable. Le problème concerne l’identification du point de débit. Il ne permet pas de conclure que la machine elle-même délivre une quantité fausse.

## Pourquoi ne pas « nettoyer » le catalogue automatiquement ?

Une correction suppose de connaître la cellule erronée et la version matérielle à laquelle les autres données s’appliquent. Le fait de repérer une incohérence ne donne pas cette information. Changer le CFM pour qu’il ressemble au L/min, ou changer le L/min à partir du CFM, produirait une valeur qui n’a pas été publiée comme telle par le constructeur.

Le [guide des contradictions d’unités](/guides/contradiction-debit-cfm-m3-min-catalogues/) explique la conservation des deux cellules. Ici, l’action utile est une demande ciblée sur le 26 Y, sa référence et sa pression de travail. Les autres membres de la gamme ne doivent pas servir de valeurs de remplacement.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Conserver les cellules contradictoires" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rotair-26y-litres-minute-cfm-contradictions-title rotair-26y-litres-minute-cfm-contradictions-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="rotair-26y-litres-minute-cfm-contradictions-title">Conserver les cellules contradictoires</title><desc id="rotair-26y-litres-minute-cfm-contradictions-desc">La paire est reproduite comme contradiction documentaire. Aucune valeur corrigée n’est présentée comme une mesure Rotair.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Conserver les cellules contradictoires</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Table 26 Y : première colonne</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">6,5 bar</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">2 650 L/min et 88 CFM publiés</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Décision documentaire</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Ne pas fusionner les deux valeurs</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Demander la fiche de la version livrée</text></svg>
</div>

*La paire est reproduite comme contradiction documentaire. Aucune valeur corrigée n’est présentée comme une mesure Rotair.*

## La correction doit identifier la cellule remplacée

Joignez la ligne concernée au fournisseur et demandez : « Pour l’exemplaire 26 Y proposé à 6,5 bar, quel débit d’air libre fait foi, dans quelle unité, selon quel document et quelle révision ? » Demandez aussi les conditions de référence et le point de mesure. Une réponse « environ 88 CFM » ne résout pas la présence de 2 650 L/min si elle ne précise pas quelle donnée est remplacée.

| Élément du dossier | Pourquoi le conserver |
| --- | --- |
| Capture de la ligne primaire | Montre le désaccord initial sans le masquer |
| Référence et version du compresseur | Évite de corriger une autre configuration |
| Pression du point demandé | Empêche une substitution avec une autre colonne |
| Réponse écrite du fabricant ou fournisseur | Rend la correction attribuable et datée |
| Document remplaçant la ligne | Permet la révision future de la fiche |

Une réponse ne résout le désaccord que si elle remplace une cellule identifiée pour la bonne version. Conservez la capture initiale et le document qui la remplace pour expliquer une révision du verdict.

## Quel effet sur la compatibilité avec une buse ?

Si le débit nécessaire au poste se situe dans une zone où le choix de cellule change le résultat, la compatibilité doit rester indéterminée. Aucun coefficient de sécurité choisi au hasard ne résout l’identité d’une donnée contradictoire. Le calcul doit attendre la valeur qualifiée ou s’appuyer sur une autre référence dont le point est établi.

Le [guide de conversion CFM, L/min et NL/min](/guides/convertir-cfm-l-min-nl-min-air-comprime/) traite les conditions de référence. Même après une correction arithmétique apparente, celles-ci restent nécessaires. La [référence ERP et le nom commercial](/guides/compresseur-reference-erp-nom-commercial/) servent ensuite à rattacher la réponse au bon produit.

Notre verdict documentaire est donc précis : la page permet de repérer une contradiction, mais la paire concernée ne suffit pas pour valider un débit de dimensionnement. La prochaine étape est une confirmation de point par le constructeur, et non une interpolation ou une préférence pour la valeur la plus haute.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
