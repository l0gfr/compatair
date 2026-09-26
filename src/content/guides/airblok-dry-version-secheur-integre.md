---
title: "Airblok DRY : ce que change une version avec sécheur"
seoTitle: "FIAC Airblok DRY : vérifier la version avec sécheur"
description: "Comparer les codes Airblok de base et DRY, les masses et le FAD publiés. Le suffixe DRY ne suffit pas à déclarer une classe de pureté complète."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 3
relatedGuides: ["compresseur-sur-chassis-sans-cuve", "qualite-air-comprime-iso-8573-1"]
sources: ["https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf", "https://shop.fiac.it/en-IT/products/4152026080/ax-103bd-dry-8-40050-ce"]
---

Sur les Airblok concernés par ce guide, le suffixe **DRY** désigne une version avec sécheur. Il ne signifie pas « compresseur sans huile » et ne décrit pas, à lui seul, une classe de pureté pour toutes les pollutions de l’air.

Le [catalogue FIAC S226-R1-062026](https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35) distingue les Airblok BD de base, page 34, et les versions BD DRY, page 35. Prenons une seule configuration de pression pour éviter de mélanger plusieurs variantes :

| Donnée publiée | Airblok 103 BD, 8 bar | Airblok 103 BD DRY, 8 bar |
| --- | --- | --- |
| Code commande | 4152026072 | 4152026080 |
| Sécheur dans cette désignation | Version de base | Version avec sécheur |
| FAD du tableau | 1 240 L/min | 1 240 L/min |
| Puissance moteur publiée | 7,5 kW | 7,5 kW |
| Masse publiée | 246 kg | 276 kg |

La masse augmente de **30 kg** dans cet exemple. Ce calcul appartient à ces deux lignes précises : il ne doit pas être appliqué à toutes les versions DRY de la gamme.

## Un FAD identique ne décrit pas tout le traitement d’air

Les deux tableaux donnent ici le même FAD. Cela ne documente pas, par soi-même, le point de rosée obtenu dans toutes les températures ambiantes ni les pertes de pression de chaque installation. La fiche du sécheur et ses conditions nominales restent nécessaires.

Demandez le type de sécheur, son débit admissible dans les conditions du site, son point de rosée sous pression et les corrections prévues par le fabricant. Faites préciser aussi la purge, l’entretien et les limites de température. Une demande générique « air sec pour peinture » laisse ces points ouverts.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Séparer trois propriétés">
<svg viewBox="0 0 380 408" role="img" aria-labelledby="dry-title dry-desc" xmlns="http://www.w3.org/2000/svg"><title id="dry-title">Séparer trois propriétés</title><desc id="dry-desc">Compression: FAD et pression de la version exacte ; Séchage: Point de rosée et conditions nominales du sécheur ; Pureté finale: Particules, eau et huile à spécifier séparément</desc><rect width="380" height="408" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">Séparer trois propriétés</text><circle cx="32" cy="81" r="14" fill="#19704f"/><text x="32" y="86" text-anchor="middle" font-size="14" fill="white">1</text><text x="58" y="86" font-size="17" font-weight="700" fill="#143426">Compression</text><text x="58" y="109" font-size="15" font-weight="400" fill="#35473d">FAD et pression de la version</text><text x="58" y="130" font-size="15" font-weight="400" fill="#35473d">exacte</text><circle cx="32" cy="173" r="14" fill="#19704f"/><text x="32" y="178" text-anchor="middle" font-size="14" fill="white">2</text><text x="58" y="178" font-size="17" font-weight="700" fill="#143426">Séchage</text><text x="58" y="201" font-size="15" font-weight="400" fill="#35473d">Point de rosée et conditions</text><text x="58" y="222" font-size="15" font-weight="400" fill="#35473d">nominales du sécheur</text><circle cx="32" cy="265" r="14" fill="#19704f"/><text x="32" y="270" text-anchor="middle" font-size="14" fill="white">3</text><text x="58" y="270" font-size="17" font-weight="700" fill="#143426">Pureté finale</text><text x="58" y="293" font-size="15" font-weight="400" fill="#35473d">Particules, eau et huile à</text><text x="58" y="314" font-size="15" font-weight="400" fill="#35473d">spécifier séparément</text><text x="20" y="362" font-size="13" font-weight="400" fill="#35473d">Schéma de lecture ; aucune mesure physique</text><text x="20" y="381" font-size="13" font-weight="400" fill="#35473d">CompatAir.</text></svg>
</div>

## DRY ne veut pas dire sans huile

Les pages FIAC des familles BD et BD DRY mentionnent des huiles dans les options de gamme. Le suffixe porte donc sur le séchage, pas sur une transformation en machine sans huile. Une application exigeant une pureté précise doit définir séparément les contaminants et le traitement adapté ; le [guide ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) donne les repères de lecture.

La [fiche actuelle du code 4152026080](https://shop.fiac.it/en-IT/products/4152026080/ax-103bd-dry-8-40050-ce) permet de contrôler l’identité commandée. Vérifiez le devis sur ce code, la tension, la pression et l’équipement inclus. La présence d’un sécheur intégré ne prouve pas non plus la présence d’une cuve : les deux éléments doivent être relevés distinctement dans le dossier.
