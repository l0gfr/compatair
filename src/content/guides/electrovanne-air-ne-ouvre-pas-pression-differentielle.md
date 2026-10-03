---
title: "Électrovanne d’air qui ne s’ouvre pas : contrôler la pression différentielle"
seoTitle: "Électrovanne bloquée : pression différentielle"
description: "La bobine reçoit sa commande mais l’air ne passe pas : distinguer
  commande directe et servo-assistance, pression amont et différentiel minimal."
pubDate: 2026-09-30
category: Utiliser
audiences: [ "professionnel" ]
metiers: [ "maintenance-industrielle" ]
readingTime: 3
reviewStatus: internal
relatedGuides:
  [
    "choisir-distributeur-pneumatique-debit-nominal",
    "vanne-demarrage-progressif-air-comprime-remise-pression",
    "diagnostiquer-chute-pression-air-comprime"
  ]
sources:
  - https://www.burkert-usa.com/en/company-career/what-s-new/press/media/technical-reports/direct-acting-vs-pilot-solenoid-valves
  - https://www.burkert.co.uk/en/landingpage/10-Frequently-asked-questions-about-solenoid-valves
  - https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf
updatedDate: 2026-10-03
---

La bobine reçoit sa commande et l’arrivée d’air est sous pression. **Une électrovanne servo-assistée peut néanmoins manquer de différence de pression pour fonctionner comme prévu.** Le manomètre amont seul ne répond pas à cette question.

## Commande directe ou servo-assistance

Bürkert explique la [différence entre commande directe et pilotée](https://www.burkert-usa.com/en/company-career/what-s-new/press/media/technical-reports/direct-acting-vs-pilot-solenoid-valves). Dans une vanne directe, la force électromagnétique commande le passage. Une vanne servo-assistée utilise le fluide pour participer au fonctionnement du passage principal ; les conceptions décrites nécessitent un différentiel minimal.

La [FAQ de sélection Bürkert](https://www.burkert.co.uk/en/landingpage/10-Frequently-asked-questions-about-solenoid-valves) cite le différentiel insuffisant parmi les causes possibles d’un défaut d’ouverture ou de fermeture. La valeur exacte appartient à la référence : ne transformez pas une valeur donnée dans une FAQ générale en seuil applicable à toutes les vannes.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="electrovanne-air-ne-ouvre-pas-pression-differentielle-title electrovanne-air-ne-ouvre-pas-pression-differentielle-desc" style="font-family:system-ui,sans-serif"><title id="electrovanne-air-ne-ouvre-pas-pression-differentielle-title">Le différentiel se calcule</title><desc id="electrovanne-air-ne-ouvre-pas-pression-differentielle-desc">Exemple hypothétique CompatAir ; aucun seuil de fonctionnement n’est attribué à une vanne.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Le différentiel se calcule</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Amont : 6 bar</text><text x="32" y="97" font-size="16" fill="#eef2e9">Pression disponible à l’entrée</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Aval : 5,8 bar</text><text x="32" y="167" font-size="16" fill="#eef2e9">Pression au même instant</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Différence : 0,2 bar</text><text x="32" y="237" font-size="16" fill="#eef2e9">6 − 5,8 = 0,2</text></svg>
<figcaption>Exemple hypothétique CompatAir ; aucun seuil de fonctionnement n’est attribué à une vanne.</figcaption>
</figure>

## Distinguer pression disponible et différence de pression

Un exemple hypothétique montre la confusion : **6 bar en amont et 5,8 bar en aval donnent 0,2 bar de [différentiel](/glossaire/#differentiel-pression-electrovanne)**. La pression d’arrivée paraît élevée, mais la différence est petite. Cet exemple ne valide ni n’invalide une électrovanne particulière ; il montre les deux mesures à rechercher.

Faites noter les pressions et l’état de la commande au même instant du scénario autorisé. Demandez si le modèle utilise un pilotage interne ou une alimentation externe, puis retrouvez le schéma prévu. Une modification de l’alimentation de pilotage appartient au concepteur de la machine.

La vanne pilotée peut aussi subir le vide du procédé. AKO prévoit une compensation au corps de la vanne à pincement au-delà de 100 mbar de dépression. Le [cas AKO : manchette qui ne se rouvre pas](/guides/ako-vanne-pincement-vide-manchette-ouverte/) distingue cette situation d’une purge de commande bouchée ou d’une électrovanne défaillante. [AKO, notice des vannes à manchon pneumatiques BA_pV_DIV](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=11).

## Construire la comparaison documentaire

| Élément | Question pour la référence exacte |
| --- | --- |
| Type de commande | Directe, servo-assistée ou autre conception ? |
| Différentiel minimal | Exigence pour ouverture et fermeture ? |
| Pression maximale | Limite du corps et du pilotage ? |
| Sens de passage | Installation conforme au schéma ? |
| Alimentation électrique | Tension, type et commande corrects ? |
| Qualité du fluide | Air et contamination compatibles ? |

Le [guide du débit nominal](/guides/choisir-distributeur-pneumatique-debit-nominal/) couvre la capacité de passage. Celle-ci reste distincte de la condition permettant à la vanne de commuter.

## Le défaut peut apparaître seulement au redémarrage

Décrivez le scénario : circuit aval déjà sous pression, remise en route à vide ou montée progressive de l’alimentation. Le [dossier démarrage progressif](/guides/vanne-demarrage-progressif-air-comprime-remise-pression/) aide à suivre cette phase, sans supposer que toutes les vannes aval deviennent opérationnelles au même instant.

Si le différentiel est documenté comme conforme, poursuivez la recherche selon la notice : commande, montage et état du composant. Ne concluez pas à une bobine défectueuse d’après un bruit de commutation seul.

Pour une réception, conservez les deux pressions avec l’état de la commande et le résultat obtenu. Le [profil de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) peut ensuite aider à localiser une restriction en fonctionnement. Ce relevé doit expliquer l’événement qui posait problème, et pas seulement montrer un débit après une nouvelle mise en pression.
