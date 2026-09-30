---
title: "Tube pneumatique de 6 mm ou 1/4 pouce : mesurer le diamètre extérieur"
seoTitle: "Tube pneumatique : 6 mm ou 1/4 pouce ?"
description: "Un tube de 6 mm et un tube de 1/4 pouce n’ont pas le même diamètre extérieur. Vérifiez raccord, dimensions et tolérances avant le montage."
pubDate: 2026-09-30
category: Installer
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 3
reviewStatus: internal
relatedGuides: ["raccord-air-comprime-bsp-npt-1-4", "diametre-longueur-flexible-air-comprime", "reseau-air-aluminium-pression-accessoires-reception"]
sources:
  - https://media.festo.com/media/3905_documentation.pdf
  - https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8
---

Le tube entre dans le raccord, mais une fuite apparaît après remontage. **La première question est la dimension prévue par le raccord, en diamètre extérieur.** Un tube de 6 mm et un tube de 1/4 pouce portent des désignations proches dans un panier d’achat ; leurs dimensions nominales restent différentes.

## 1/4 pouce vaut 6,35 mm

Le [tableau de conversion NIST, ligne inch](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) donne exactement 2,54 cm par pouce, soit 25,4 mm. La conversion dimensionnelle donne donc **25,4 ÷ 4 = 6,35 mm**. L’écart avec 6 mm est de 0,35 mm sur le diamètre nominal. Ce calcul ne donne pas la tolérance admise par un raccord et n’autorise aucun mélange de dimensions.

Le [mémento Festo des tubes et raccords](https://media.festo.com/media/3905_documentation.pdf) distingue des références en diamètre extérieur métrique et en diamètre extérieur impérial. Son exemple QSL-G1/8-6 associe un filetage G1/8 et un tube de diamètre extérieur 6 mm. Le « 1/8 » côté filetage et le « 6 » côté tube décrivent deux interfaces.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="tube-pneumatique-6mm-un-quart-diametre-exterieur-title tube-pneumatique-6mm-un-quart-diametre-exterieur-desc" style="font-family:system-ui,sans-serif"><title id="tube-pneumatique-6mm-un-quart-diametre-exterieur-title">Deux diamètres nominaux</title><desc id="tube-pneumatique-6mm-un-quart-diametre-exterieur-desc">Conversion de dimension : 1 pouce = 25,4 mm. Les tolérances de montage ne sont pas déduites de cet écart.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Deux diamètres nominaux</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Tube métrique</text><text x="32" y="97" font-size="16" fill="#eef2e9">6,00 mm de diamètre extérieur</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Tube impérial 1/4</text><text x="32" y="167" font-size="16" fill="#eef2e9">6,35 mm de diamètre extérieur</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Écart nominal</text><text x="32" y="237" font-size="16" fill="#eef2e9">0,35 mm : vérifier la paire tube-raccord</text></svg>
<figcaption>Conversion de dimension : 1 pouce = 25,4 mm. Les tolérances de montage ne sont pas déduites de cet écart.</figcaption>
</figure>

## Lire une dimension complète

Sur un tube noté 6 × 4 mm, demandez confirmation de l’ordre de notation dans la documentation : diamètre extérieur, diamètre intérieur. Le premier sert à identifier le montage d’un raccord instantané prévu pour ce diamètre extérieur ; le second intervient dans le passage d’air. Gardez les deux dans la commande.

Le [guide diamètre et longueur](/guides/diametre-longueur-flexible-air-comprime/) traite les restrictions de la ligne. Augmenter le diamètre extérieur ne documente pas à lui seul le diamètre intérieur si l’épaisseur de paroi change.

## Reconstituer le montage qui fuyait

Photographiez le marquage du tube et relevez le code du raccord. Si l’une des deux pièces n’est pas identifiable, demandez sa fiche au fournisseur avant réutilisation. Une mesure extérieure permet de comparer une dimension, mais elle ne reconstitue pas automatiquement la matière, la pression autorisée ou les tolérances du fabricant.

Distinguez ensuite l’interface tube-raccord de l’interface filetée. Notre [dossier BSP et NPT](/guides/raccord-air-comprime-bsp-npt-1-4/) traite le deuxième côté. Une fuite près d’un raccord ne permet pas de choisir son origine sans localisation.

Le démontage et le montage suivent la notice, sur un circuit mis dans son état d’intervention sûr. Forcer un tube ou modifier son diamètre pour l’emboîter ferait perdre la correspondance documentée entre les pièces.

## Commander une paire documentée

La ligne de commande doit associer la référence du tube, ses diamètres, sa matière et le raccord prévu. Faites préciser l’usage autorisé, le domaine de température et de pression, ainsi que les instructions de coupe et d’insertion.

À réception, comparez les codes et dimensions livrés aux fiches avant le montage. Pour une installation plus vaste, le [guide de réception du réseau](/guides/reseau-air-aluminium-pression-accessoires-reception/) montre l’intérêt de conserver cette correspondance sur toute la chaîne. L’objectif est d’avoir un montage identifiable et contrôlable, plutôt qu’un raccord qui semble retenir le tube au premier essai.
