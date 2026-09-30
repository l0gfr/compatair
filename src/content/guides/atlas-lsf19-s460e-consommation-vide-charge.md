---
title: "Atlas LSF19 S460E-1/R : 684 ou 900 L/min ?"
description: "La LSF19 S460E-1/R affiche 11,4 L/s à puissance maximale et 15 L/s à vide. Gardez la plus forte consommation pour une alimentation conservatrice."
pubDate: 2026-09-30
category: Choisir
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
featured: false
reviewStatus: internal
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf
  - https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf
relatedCalculatorTool: meuleuse-atlas-copco-lsf19-s460e-1-r-8423122490
---

Pour la meuleuse LSF19 S460E-1/R, le débit à vide publié est supérieur à celui indiqué à puissance maximale. **Choisir uniquement la colonne de travail réduirait ici la demande retenue de 216 L/min.** Le cas rappelle pourquoi il faut lire les deux régimes d’un outil pneumatique.

## Deux colonnes réellement différentes

La [page des meuleuses LSV/LSF](https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210) identifie la référence **8423 1224 90**. Elle donne 11,4 L/s à puissance maximale et 15,0 L/s à vide. La [note de mesure générale](https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3) place les performances à 6,3 bar sauf indication contraire.

| Régime publié | Valeur d’origine | Conversion |
| --- | --- | --- |
| À puissance maximale | 11,4 L/s | 684 L/min |
| À vide | 15,0 L/s | 900 L/min |

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 224" role="img" aria-labelledby="atlas-lsf19-s460e-consommation-vide-charge-title atlas-lsf19-s460e-consommation-vide-charge-desc" style="font-family:system-ui,sans-serif"><title id="atlas-lsf19-s460e-consommation-vide-charge-title">Deux régimes à 6,3 bar</title><desc id="atlas-lsf19-s460e-consommation-vide-charge-desc">Le besoin conservateur conserve 900 L/min, sans supposer une répartition des temps de travail.</desc><rect width="440" height="224" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">Deux régimes à 6,3 bar</text><text x="22" y="70" fill="#eef2e9" font-size="14">À puissance maximale</text><text x="418" y="70" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">684</text><rect x="22" y="80" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="80" width="300.96" height="10" rx="5" fill="#d3eb56"/><text x="22" y="132" fill="#eef2e9" font-size="14">À vide</text><text x="418" y="132" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">900</text><rect x="22" y="142" width="396" height="10" rx="5" fill="#315341"/><rect x="22" y="142" width="396.00" height="10" rx="5" fill="#d3eb56"/><text x="22" y="206" fill="#eef2e9" font-size="13">L/min, conversions des L/s publiés</text></svg>
<figcaption>Le besoin conservateur conserve 900 L/min, sans supposer une répartition des temps de travail.</figcaption>
</figure>

La fiche indique aussi 46 000 tr/min à vide, une puissance maximale de 0,51 kW, une longueur de 293 mm et une pince de 6 mm pour cette configuration. Le débit d’alimentation ne dispense pas de vérifier l’abrasif et les consignes de sécurité propres à cette vitesse.

## Le rapprochement avec le F-DRIVE 6

Le [tableau ALMiG F-DRIVE](https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=16) annonce 940 L/min au maximum à 7 bar pour le modèle 6. Ce point à pression supérieure couvre les 900 L/min du scénario conservateur nominal. La différence calculée est seulement 40 L/min.

Avec une **réserve choisie de 25 %**, la cible devient 900 × 1,25 = 1 125 L/min. Le point de 940 ne confirme pas cette cible. Demandez une performance adaptée à la consigne réelle et aux autres consommations ; ce dossier ne crée pas une courbe du F-DRIVE à 6,3 bar.

## Rester prudent sur le temps à vide

Un opérateur peut alterner contact avec la pièce et rotation à vide. Sans chronologie mesurée, aucune pondération de ces phases n’est appliquée pour réduire le besoin. La plus grande des valeurs publiées reste le repère conservateur du profil.

Les fiches [LSF19 S460E-1/R](/outils-pneumatiques/meuleuse-atlas-copco-lsf19-s460e-1-r-8423122490/) et [F-DRIVE 6](/compresseurs/almig-f-drive-6/) conservent leurs pressions. Le [dossier F-DRIVE 6 à 7 bar](/guides/almig-f-drive-6-940-l-min-7-bar-13-bar/) précise la date de ce tableau et la différence entre plage de pression et point de débit.
