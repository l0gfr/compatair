---
title: "BEKOMAT 16 CO : contrôler pente d’arrivée et remontée d’évacuation des condensats"
seoTitle: "BEKOMAT 16 CO : pente et remontée des condensats"
description: "Purgeur qui évacue mal : lire séparément arrivée gravitaire et sortie sous pression, avec les limites de remontée documentées du BEKOMAT 16 CO."
pubDate: 2026-09-30
category: Installer
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["purgeur-condensats-temporise-detection-niveau", "separateur-huile-eau-condensats-compresseur", "entretien-compresseur-purge-condensats"]
sources:
  - https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm16_ba_01-3582_en_00_00.pdf
---

**Le condensat doit pouvoir arriver au purgeur, puis en sortir dans les conditions prévues.** Un défaut d’évacuation ne se résume donc pas au capteur ou à l’électrovanne. Sur un BEKOMAT 16 CO, le trajet d’entrée et celui de sortie obéissent à des prescriptions différentes.

## Deux trajets dans la notice

La [notice BEKOMAT 16 CO, section 6.2, page 23](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm16_ba_01-3582_en_00_00.pdf) impose une pente d’arrivée d’au moins **3 %** et l’absence de filtre sur cette arrivée. Elle admet une remontée de la conduite de sortie de **5 m maximum**, avec une augmentation de la pression minimale nécessaire de **0,1 bar par mètre de montée**.

La sortie peut donc remonter dans ce domaine documenté ; cela ne permet pas de créer une poche montante sur l’arrivée. Les prescriptions concernent cette référence et cette notice. N’étendez pas ces limites à un purgeur différent.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="bekomat16-condensats-evacuation-remontee-pente-title bekomat16-condensats-evacuation-remontee-pente-desc" style="font-family:system-ui,sans-serif"><title id="bekomat16-condensats-evacuation-remontee-pente-title">Arrivée et sortie séparées</title><desc id="bekomat16-condensats-evacuation-remontee-pente-desc">Limites de la notice BEKOMAT 16 CO, page 23. La pression minimale totale reste à vérifier.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Arrivée et sortie séparées</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Arrivée : pente ≥ 3 %</text><text x="32" y="97" font-size="16" fill="#eef2e9">Trajet continu, sans filtre ajouté</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Sortie : remontée ≤ 5 m</text><text x="32" y="167" font-size="16" fill="#eef2e9">+0,1 bar minimum par mètre monté</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Exemple : remontée de 3 m</text><text x="32" y="237" font-size="16" fill="#eef2e9">Supplément de 0,3 bar, pas pression totale</text></svg>
<figcaption>Limites de la notice BEKOMAT 16 CO, page 23. La pression minimale totale reste à vérifier.</figcaption>
</figure>

## Faire un plan avec les hauteurs

Tracez le point où le condensat est collecté, le purgeur et le collecteur de sortie. Indiquez les hauteurs, les diamètres, les raccords et les parties flexibles. Une photo prise de face ne suffit pas à lire une pente.

Notre proposition de contrôle documentaire consiste à distinguer les tronçons avant et après le purgeur, puis à comparer chacun aux exigences. Le cheminement doit aussi rester accessible pour la maintenance définie par la notice.

## Un exemple de hauteur, sans pression universelle

Pour une remontée hypothétique de **3 m**, le supplément décrit par la notice est **3 × 0,1 = 0,3 bar**. C’est un supplément à la pression minimale applicable, pas une pression totale suffisante de 0,3 bar pour faire fonctionner l’appareil.

Conservez le domaine de service du purgeur et la pression réellement disponible lors du scénario étudié. La seule pression maximale de la ligne ne décrit pas la condition au moment de l’évacuation.

## Contrôler les obstacles avant d’accuser la commande

La notice demande notamment de ne pas plier ou bloquer le flexible de sortie et de ne pas placer de vanne d’arrêt dans l’évacuation. Elle distingue cette sortie de l’arrivée, où elle présente un organe d’isolement pour l’entretien. Le mot « vanne » dans une commande doit donc être relié au bon tronçon.

Le [guide des principes de purge](/guides/purgeur-condensats-temporise-detection-niveau/) explique la commande de l’évacuation. Il ne remplace pas les prescriptions de montage propres au modèle. Le démontage suit la dépressurisation et la sécurisation prévues dans la notice, par les personnes compétentes.

## Examiner aussi le récepteur des condensats

Le [traitement huile/eau des condensats](/guides/separateur-huile-eau-condensats-compresseur/) constitue une étape aval distincte. Faites vérifier la correspondance du collecteur et du système de traitement avec le trajet retenu ; une purge fonctionnelle ne valide pas le traitement du liquide collecté.

Après correction, enregistrez le trajet et les observations de fonctionnement prévues par le protocole. Le [dossier d’entretien](/guides/entretien-compresseur-purge-condensats/) permet de maintenir ce contrôle dans la routine. Aucun diagnostic de capteur ni débit d’évacuation mesuré n’est inventé ici.
