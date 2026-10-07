---
title: "Sécheur Haas : A11, A21 ou A22, préparer une intervention adaptée à l’alarme"
seoTitle: "Sécheur Haas : diagnostiquer A11, A21 et A22"
description: "Un code de sécheur ne désigne pas toujours un manque de fluide. Distinguer les alarmes documentées par Haas et transmettre un dossier exploitable."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["bypass-secheur-air-comprime-qualite-maintenance", "point-rosee-ligne-prelevement-condensation-refroidissement", "haas-compresseur-huile-trouble-eau-demarrage"]
sources: ["https://www.haascnc.com/service/online-manuals/haas-air-compressor---operators-service-manual/haas-air-compressor---troubleshooting.html"]
---

Deux sécheurs peuvent afficher le même code avec des significations différentes. Sur les sécheurs couverts par le manuel Haas, **A11 est associé à un manque de fluide frigorigène, A21 au capteur de point de rosée et A22 au capteur de condensation**. Ces trois alarmes ne demandent donc pas automatiquement la même intervention.

La référence est le [manuel Haas, chapitre 5.2, tableau des symptômes, révision D 09/2026](https://www.haascnc.com/service/online-manuals/haas-air-compressor---operators-service-manual/haas-air-compressor---troubleshooting.html). Utilisez cette correspondance seulement si le modèle et la commande de votre sécheur relèvent de cette documentation. Un code isolé trouvé sur un autre appareil ne suffit pas.

## Lire le code avec le modèle et les températures

Photographiez le code complet et les températures affichées. Notez le modèle, l’état du compresseur, les conditions ambiantes connues et l’apparition du défaut. Décrivez le symptôme côté atelier : humidité observée, pression insuffisante ou seulement message au panneau.

Si une pression différente est constatée entre la réserve et la sortie, indiquez les deux points et les conditions de fonctionnement. Un code de capteur et une perte de pression peuvent coexister sans que le premier explique automatiquement la seconde. Le technicien doit pouvoir examiner les deux observations.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Trois alarmes, trois pistes" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="haas-secheur-code-title haas-secheur-code-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="haas-secheur-code-title">Trois alarmes, trois pistes</title><desc id="haas-secheur-code-desc">Correspondances du tableau Haas 5.2 : les codes désignent des pistes de diagnostic sur le sécheur documenté, pas un diagnostic universel.</desc><rect width="520" height="500" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Trois alarmes, trois pistes</text><rect x="28" y="90" width="464" height="110" rx="12" fill="#244b36"/><text x="47" y="129" fill="#d3eb56" font-size="26" text-anchor="start" font-weight="700">A11</text><text x="47" y="170" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Circuit de fluide frigorigène</text><rect x="28" y="220" width="464" height="110" rx="12" fill="#244b36"/><text x="47" y="259" fill="#d3eb56" font-size="26" text-anchor="start" font-weight="700">A21</text><text x="47" y="300" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Capteur de point de rosée</text><rect x="28" y="350" width="464" height="110" rx="12" fill="#244b36"/><text x="47" y="389" fill="#d3eb56" font-size="26" text-anchor="start" font-weight="700">A22</text><text x="47" y="430" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Capteur de condensation</text></svg>
</div>

*Correspondances du tableau Haas 5.2 : les codes désignent des pistes de diagnostic sur le sécheur documenté, pas un diagnostic universel.*

## Demander une vérification, pas une recharge supposée

Pour A11, transmettez le défaut au service compétent pour le circuit frigorifique. La correspondance du manuel ne démontre pas à elle seule la quantité manquante ni la cause d’une perte. Pour A21 et A22, demandez une vérification du capteur et de sa chaîne de mesure selon le modèle. Une température affichée par une chaîne en défaut ne doit pas servir à affirmer une performance de séchage.

Le compte rendu de maintenance doit conserver les contrôles effectués, le composant retenu comme cause et l’état après correction. Effacer un message décrit une action sur l’affichage ; cela ne décrit pas forcément le retour à une mesure fiable.

## Examiner séparément la perte de pression

Dans le même chapitre, Haas mentionne la formation de glace lorsque la température concernée reste sous **0 °C**, avec une restriction possible. Cette piste ne justifie pas de changer au hasard les paramètres du sécheur. Le service doit vérifier leur application au modèle, la mesure et les autres causes possibles du symptôme.

Le guide sur le [sécheur, la perte de pression et le bypass](/guides/bypass-secheur-air-comprime-qualite-maintenance/) détaille la comparaison de points de mesure. Si une mesure de point de rosée est réalisée à l’extérieur, son prélèvement doit rester représentatif ; le guide sur la [condensation dans une ligne de prélèvement](/guides/point-rosee-ligne-prelevement-condensation-refroidissement/) explique cette limite.

**A11 oriente le contrôle vers le circuit frigorifique ; A21 et A22 vers leurs chaînes de capteur.** La remise en service doit retrouver une mesure fiable et le fonctionnement attendu. Elle évite aussi de remplacer un compresseur pour une anomalie localisée dans le traitement d’air.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
