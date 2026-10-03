---
title: "FIPA GR04 : régler la pénétration des aiguilles selon l’épaisseur de matière"
seoTitle: "FIPA GR04 : course des aiguilles et prise de couche"
description: "Distinguer course d’aiguille et suspension des GR04.710/720. Lire les versions -25 et -50 avant de régler la prise d’une seule couche de matière."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "force-verin-pneumatique-diametre-pression", "pince-pneumatique-force-doigt-longueur-prehension"]
sources: ["https://assets.fipa.com/assets/06_PDF-Datenblaetter/FIPA-GR04.710-Nadelgreifer_en_Master.pdf"]
---

Un préhenseur à aiguilles peut prendre plusieurs couches si sa pénétration ne correspond pas à l’épaisseur travaillée. FIPA prévoit une limitation de course réglable sur les GR04.710 et GR04.720. **Cette course doit être distinguée de la suspension du préhenseur et de l’épaisseur réelle du matériau.**

## Pourquoi passer du vide aux aiguilles

La [fiche FIPA, page 1](https://assets.fipa.com/assets/06_PDF-Datenblaetter/FIPA-GR04.710-Nadelgreifer_en_Master.pdf#page=1) destine ces préhenseurs aux matières peu stables dimensionnellement ou difficiles à manipuler par le vide. Les aiguilles se croisent pour assurer la prise. Ce mécanisme pénètre la matière ; il ne remplace donc pas une ventouse lorsqu’aucune perforation n’est acceptable.

Le [guide des surfaces poreuses](/guides/ventouse-piece-poreuse-debit-vide/) traite les fuites traversantes. Le passage aux aiguilles répond à un autre principe de maintien, qui doit être compatible avec la pièce et son état de surface.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 363" role="img" aria-labelledby="fipa-gr04-aiguilles-course-epaisseur-matiere-title fipa-gr04-aiguilles-course-epaisseur-matiere-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="fipa-gr04-aiguilles-course-epaisseur-matiere-title">FIPA GR04 : la course suit la matière</title><desc id="fipa-gr04-aiguilles-course-epaisseur-matiere-desc">Les aiguilles croisées pénètrent la matière. La course réglable des versions -25 et -50 est publiée à 0–2,5 et 0–5 mm ; la suspension de 35 mm est une autre course.</desc><rect width="520" height="363" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="23" font-weight="700">Pénétration et suspension distinctes</text><rect x="86" y="111" width="348" height="65" rx="14" fill="#26775b"/><path d="M177 157l110 90M343 157l-110 90" stroke="#d3eb56" stroke-width="7"/><rect x="46" y="216" width="428" height="50" rx="8" fill="#8abfa3" opacity=".45"/><text x="109" y="103" fill="#eef2e9" font-size="22">Aiguilles croisées</text><text x="67" y="297" fill="#eef2e9" font-size="21">-25 : 0–2,5 mm · -50 : 0–5 mm</text><text x="66" y="331" fill="#eef2e9" font-size="21">GR04.720 : suspension 35 mm</text></svg>
<figcaption>Les aiguilles croisées pénètrent la matière. La course réglable des versions -25 et -50 est publiée à 0–2,5 et 0–5 mm ; la suspension de 35 mm est une autre course.</figcaption>
</figure>

## Lire la bonne ligne de course

Pour **GR04.710-25**, la course publiée est **0–2,5 mm** ; pour **GR04.710-50**, **0–5 mm**. Les versions **GR04.720-25 et -50** ont les mêmes plages respectives, avec en plus **35 mm de suspension**. Ce déplacement de suspension n’est pas une pénétration de 35 mm des aiguilles.

La fiche donne **dix aiguilles de 2 mm**, un angle d’entrée de **30°** et une pression de service de **2 à 8 bar**. L’angle ne permet pas à lui seul de transformer la course en épaisseur saisissable : il faudrait connaître la géométrie et la définition du mouvement. Aucune épaisseur maximale de prise n’est inventée ici.

| Marquage de version | Course publiée | Suspension publiée |
| --- | --- | --- |
| GR04.710-25 | 0–2,5 mm | Non indiquée |
| GR04.710-50 | 0–5 mm | Non indiquée |
| GR04.720-25 | 0–2,5 mm | 35 mm |
| GR04.720-50 | 0–5 mm | 35 mm |

La colonne GR04.710-100 porte « 0–100 » dans la ligne de course de l’original consulté. Cette valeur demande une confirmation de FIPA avant dimensionnement ; elle n’est pas corrigée silencieusement d’après le suffixe.

## Vérifier une seule couche avec le mouvement prévu

La fiche décrit un fonctionnement double effet, avec des connexions d’air séparées pour sortie et rentrée des aiguilles. Le [guide de force d’un vérin](/guides/force-verin-pneumatique-diametre-pression/) explique la différence entre pression et effort, mais ne donne pas la force de prise de ces aiguilles.

La décision pratique commence par la référence, la course réglée et l’épaisseur des couches sous les conditions de prise. Une course conforme à la plage n’établit pas à elle seule qu’une seule couche sera prélevée. Il faut contrôler ce résultat sur la matière autorisée selon les procédures de l’équipement. Le [guide des pinces et doigts](/guides/pince-pneumatique-force-doigt-longueur-prehension/) rappelle la nécessité de conserver la géométrie réelle dans une qualification de prise.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [FIPA GR04.710 et GR04.720, fiche des préhenseurs à aiguilles](https://assets.fipa.com/assets/06_PDF-Datenblaetter/FIPA-GR04.710-Nadelgreifer_en_Master.pdf)
