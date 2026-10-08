---
title: "Sullivan D750/D900 : lire l’alarme de séparateur avec ses deux pressions"
seoTitle: "Sullivan D750/D900 : alarme du séparateur huile/air"
description: "Le contrôleur attend un différentiel supérieur à 10 psi pendant 600 s. Vérifier les pressions humide/sèche et les capteurs avant d’attribuer l’alarme au séparateur."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "btp-chantier"
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "huile-sortie-compresseur-air-comprime-diagnostic"
  - "maintenance-preventive-reseau-air-comprime"
  - "audit-reseau-air-comprime-protocole-mesures"
sources:
  - "https://www.sullivan-palatek.com/wp-content/uploads/2023/11/05018730-0282_R01.pdf"
---

Une alarme **Service Air/Oil Separator** ne désigne pas uniquement une pièce colmatée. La [notice Sullivan 05018730-0282R01, page PDF 50](https://www.sullivan-palatek.com/wp-content/uploads/2023/11/05018730-0282_R01.pdf#page=50) demande de vérifier les pressions des côtés humide et sec et cite aussi de faux avertissements dus aux transducteurs.

Le périmètre retenu est celui de la couverture : **D750PH5CU5(AF) et D900PH5CU5(AF)**, noticejuillet 2023. Un intitulé D1600 apparaît dans la liste de pièces, en contradiction avec cette couverture ; il n’est pas utilisé pour étendre les prescriptions à ce modèle.

## Le contrôleur regarde une différence pendant une durée

Le tableau donne un déclenchement lorsque le différentiel humide/sec dépasse **10 psi pendant 600 secondes**, soit 10 minutes. Une pointe isolée ne constitue donc pas l’événement décrit. Gardez les deux lectures et leur chronologie, plutôt qu’une seule pression de refoulement.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" role="img" aria-labelledby="sullivan-d750-d900-alarme-separateur-differentiel-title sullivan-d750-d900-alarme-separateur-differentiel-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="sullivan-d750-d900-alarme-separateur-differentiel-title">Seuil et persistance</title><desc id="sullivan-d750-d900-alarme-separateur-differentiel-desc">Logique publiée pour les modèles de couverture : différentiel humide/sec supérieur à 10 psi pendant 600 s. Dessin de logique, sans courbe mesurée.</desc><rect width="520" height="360" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">Deux pressions · une persistance</text><text x="35" y="112" font-size="26" fill="#eef2e9">P humide − P sèche</text><text x="35" y="173" font-size="29" fill="#d3eb56" font-weight="700">&gt; 10 psi</text><path d="M35 203H481" stroke="#8abfa3" stroke-width="2"/><text x="35" y="258" font-size="29" fill="#eef2e9">pendant 600 s</text><text x="35" y="316" font-size="21" fill="#eef2e9">Puis vérifier aussi les transducteurs</text></svg>
<figcaption>Logique publiée pour les modèles de couverture : différentiel humide/sec supérieur à 10 psi pendant 600 s. Dessin de logique, sans courbe mesurée.</figcaption>
</figure>


Le manuel renvoie à la page Air/Oil Separator dans Compressor Diagnostics. Faites relever les valeurs du contrôleur et les états concernés par une personne formée. Une différence calculée entre capteurs erronés peut produire une alarme cohérente en apparence.

## Distinguer entretien et diagnostic de l’alarme

La [section 5.11, page PDF 41](https://www.sullivan-palatek.com/wp-content/uploads/2023/11/05018730-0282_R01.pdf#page=41) indique séparément le remplacement selon heures, année ou différentiel. Ces critères d’entretien ne doivent pas être confondus avec la temporisation de l’alarme. L’absence d’avertissement ne supprime pas une échéance de maintenance applicable.

| Question | Élément à vérifier |
| --- | --- |
| Le seuil a-t-il été dépassé pendant la durée décrite ? | Deux pressions et historique |
| Les lectures sont-elles crédibles ? | Diagnostic des transducteurs |
| Le séparateur est-il à remplacer ? | Critères d’entretien et état confirmés |
| Le colmatage revient rapidement ? | Filtres d’admission, huile et pollution selon le tableau |

Le document avertit des risques liés au séparateur et à sa mise à la masse. Ce guide ne fournit aucun démontage ni suppression d’un élément de liaison. L’intervention relève de la procédure constructeur et du personnel qualifié.

## Garder la frontière entre alarme et huile de sortie

Le [dossier d’huile en sortie](/guides/huile-sortie-compresseur-air-comprime-diagnostic/) couvre une autre observation. L’alarme de différentiel ne constitue pas une mesure de concentration d’huile dans l’air livré. Le [protocole d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à conserver la grandeur réellement mesurée.

Après action, inscrivez cause, valeurs et pièce éventuellement remplacée dans le [journal de maintenance](/guides/maintenance-preventive-reseau-air-comprime/). La résolution est un avertissement expliqué par les données de cette machine et une intervention justifiée, sans attribuer automatiquement toute alarme au consommable.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
