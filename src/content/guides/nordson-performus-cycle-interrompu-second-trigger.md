---
title: "Nordson Performus X : pourquoi une seconde commande interrompt le dosage"
seoTitle: "Performus X : seconde commande et dose interrompue"
description: "Un dépôt temporisé s’arrête avant la fin. Sur Performus X, une seconde commande pendant le cycle provoque l’arrêt : contrôler le déclenchement et son origine."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "atlas-lms08-hr10-air-temps-serrage"
  - "audit-reseau-air-comprime-protocole-mesures"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://nc-p-001.sitecorecontenthub.cloud/api/public/content/aa66fd045fb040fb9039102bb48e61ae?v=28c1e155"
---

La durée est programmée, pourtant certains dépôts s’arrêtent trop tôt. Sur Performus X, une nouvelle activation de la pédale, du contact manuel ou de la commande par contact pendant le cycle **interrompt immédiatement le dosage**. Nordson décrit ce comportement comme une fonction prévue du dispositif. [Mode temporisé, page 19](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/aa66fd045fb040fb9039102bb48e61ae?v=28c1e155#page=19)

Avant d’accuser une chute de pression, vérifiez donc si une seconde commande arrive pendant l’ouverture. Une pression correcte et un réglage de durée identique n’empêchent pas cet arrêt commandé.

## En mode temporisé, l’impulsion initiale suffit

La notice indique qu’un appui momentané déclenche le cycle pour la durée préréglée. Après expiration, l’appareil attend une autre commande. Un nouvel appui avant cette expiration n’ajoute pas un cycle à la file : il arrête le cycle en cours.

Le mode Steady a un autre comportement. Confirmez d’abord le mode actif et la source de déclenchement sur l’appareil. Ne déduisez pas le mode d’une recette enregistrée dans un automate différent.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" role="img" aria-labelledby="nordson-performus-cycle-interrompu-second-trigger-title nordson-performus-cycle-interrompu-second-trigger-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="nordson-performus-cycle-interrompu-second-trigger-title">La seconde commande arrête le cycle</title><desc id="nordson-performus-cycle-interrompu-second-trigger-desc">Chronologie illustrative, sans échelle de temps : le premier événement démarre le cycle temporisé ; le second, reçu avant la fin prévue, l’interrompt.</desc><rect width="520" height="360" rx="22" fill="#10281e"/><text x="26" y="43" font-size="22" fill="#d3eb56" font-weight="700">Un second événement change le résultat</text><path d="M40 257H475" stroke="#8abfa3" stroke-width="3"/><path d="M76 220V105H269V220" fill="none" stroke="#d3eb56" stroke-width="6"/><path d="M269 105H443V220" fill="none" stroke="#8abfa3" stroke-dasharray="7 7" stroke-width="3"/><text x="48" y="298" font-size="20" fill="#eef2e9">Départ</text><text x="215" y="79" font-size="22" fill="#d3eb56" font-weight="700">Arrêt</text><text x="345" y="298" font-size="20" fill="#eef2e9">Fin prévue</text><text x="34" y="335" font-size="18" fill="#eef2e9">Trait plein : cycle réellement exécuté</text></svg>
<figcaption>Chronologie illustrative, sans échelle de temps : le premier événement démarre le cycle temporisé ; le second, reçu avant la fin prévue, l’interrompt.</figcaption>
</figure>


## Conserver les événements, pas seulement le temps affiché

Le relevé proposé par CompatAir comporte la consigne de durée, le mode actif, la première commande et les commandes suivantes. Pour un pilotage automatique, faites examiner la trace par l’intégrateur avec les caractéristiques de l’entrée utilisées. Faites valider toute modification du pilotage par l’intégrateur avec les spécifications de l’entrée.

| Chronologie observée | Suite à examiner |
| --- | --- |
| Une commande, durée attendue accomplie | Cycle temporisé conforme à cette observation |
| Seconde commande avant expiration | Arrêt prévu par la notice à confronter au dépôt |
| Arrêt sans seconde commande retrouvée | Continuer vers air, matière et autres défauts |
| Mode différent de celui attendu | Recette et configuration à vérifier |

Une trace logicielle qui n’enregistre pas l’entrée physique ne suffit pas à exclure un second événement. Précisez ce qui a été enregistré et ce qui ne l’a pas été. La synchronisation des relevés sert à expliquer la dose interrompue, pas à certifier la machine.

Pour une durée complète mais un dépôt irrégulier, vérifiez le [réglage du vide et le retour de produit](/guides/nordson-performus-vide-goutte-retour-produit/). La [validation instrumentale](/guides/nordson-performus-validation-pression-temps-dose/) traite séparément la conformité du doseur.

## Corriger le déclenchement sans contourner la fonction

Si la seconde commande provient du geste opérateur, la procédure peut rappeler l’appui momentané prévu. Si elle vient du pilotage, la séquence doit être revue par son responsable. Aucun contournement de la fonction d’arrêt ni prolongation automatique compensatoire n’est proposé.

Le [dossier du temps de serrage Atlas](/guides/atlas-lms08-hr10-air-temps-serrage/) traite une autre commande temporisée. Le [protocole d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à rendre les relevés comparables, et le [suivi de maintenance](/guides/maintenance-preventive-reseau-air-comprime/) conserve la correction de séquence.

Après correction autorisée, comparez aussi le dépôt obtenu selon votre critère de procédé. Un cycle complet ne prouve pas une quantité correcte de produit : la matière, l’embout et les réglages restent à contrôler.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
