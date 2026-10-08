---
title: "Bimba Ultran : la pression admissible ne garantit pas le couplage magnétique"
seoTitle: "Bimba Ultran : Gold/Silver et découplage"
description: "Le chariot Ultran est couplé magnétiquement. Comparer Gold/Silver et la force publiée pour l’alésage avant d’expliquer un chariot qui se désolidarise."
pubDate: "2026-10-08"
category: "Choisir"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "regler-vitesse-verin-pneumatique-echappement"
  - "pince-pneumatique-force-doigt-longueur-prehension"
  - "distributeur-5-3-centre-ferme-verin-derive"
sources:
  - "https://djqq0xq3q4j4b.cloudfront.net/pdf/Ultran%20IMI%202025%20Ultran%20Slide%20Cylinders%20IMI%202025.pdf"
  - "https://www.bimba.com/en/detail/ug_us"
---

Le piston se déplace, mais le chariot Ultran se désolidarise. Ce vérin sans tige transmet le mouvement par un **couplage magnétique**. Le catalogue Bimba distingue les forces Gold et Silver ; sa pression admissible ne constitue pas une garantie que le couplage restera engagé sous toute charge. [Catalogue actuellement lié par Bimba, page 3](https://djqq0xq3q4j4b.cloudfront.net/pdf/Ultran%20IMI%202025%20Ultran%20Slide%20Cylinders%20IMI%202025.pdf#page=3)

La décision de choix doit donc traiter le couplage, la charge et le guidage, au-delà de la seule pression du réseau. La [page Bimba UG/US](https://www.bimba.com/en/detail/ug_us) identifie cette famille. Ce guide concerne Ultran UG/US et les variantes de la table, pas tous les vérins sans tige.

## Comparer deux versions du même alésage

Pour l’alésage **5/16 pouce, code 007**, le tableau publie **13 lbs** de force de couplage Gold et **8 lbs** pour Silver. Ces valeurs restent dans l’unité du catalogue et ne sont pas présentées comme des masses soulevables. Le tableau donne d’autres valeurs pour les autres alésages.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 293" role="img" aria-labelledby="bimba-ultran-gold-silver-decouplage-magnetique-title bimba-ultran-gold-silver-decouplage-magnetique-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="bimba-ultran-gold-silver-decouplage-magnetique-title">Couplage publié · alésage 007</title><desc id="bimba-ultran-gold-silver-decouplage-magnetique-desc">Forces de couplage publiées pour l’alésage 5/16 pouce. Échelle linéaire commune ; ces forces ne sont pas des masses admissibles à soulever.</desc><rect width="520" height="293" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">Couplage publié · alésage 007</text><text x="26" y="87" font-size="21" fill="#eef2e9">Ultran Gold</text><rect x="26" y="100" width="284.3750" height="22" rx="4" fill="#d3eb56"/><text x="390" y="120" font-size="19" fill="#eef2e9">13 lbs</text><text x="26" y="170" font-size="21" fill="#eef2e9">Ultran Silver</text><rect x="26" y="183" width="175.0000" height="22" rx="4" fill="#8abfa3"/><text x="390" y="203" font-size="19" fill="#eef2e9">8 lbs</text><path d="M26 236H376" stroke="#8abfa3"/><path d="M26.0 236v6" stroke="#8abfa3"/><text x="26.0" y="264" font-size="16" fill="#8abfa3" text-anchor="middle">0,0</text><path d="M113.5 236v6" stroke="#8abfa3"/><text x="113.5" y="264" font-size="16" fill="#8abfa3" text-anchor="middle">4,0</text><path d="M201.0 236v6" stroke="#8abfa3"/><text x="201.0" y="264" font-size="16" fill="#8abfa3" text-anchor="middle">8,0</text><path d="M288.5 236v6" stroke="#8abfa3"/><text x="288.5" y="264" font-size="16" fill="#8abfa3" text-anchor="middle">12,0</text><path d="M376.0 236v6" stroke="#8abfa3"/><text x="376.0" y="264" font-size="16" fill="#8abfa3" text-anchor="middle">16,0</text></svg>
<figcaption>Forces de couplage publiées pour l’alésage 5/16 pouce. Échelle linéaire commune ; ces forces ne sont pas des masses admissibles à soulever.</figcaption>
</figure>


La [rubrique de commande, page 19](https://djqq0xq3q4j4b.cloudfront.net/pdf/Ultran%20IMI%202025%20Ultran%20Slide%20Cylinders%20IMI%202025.pdf#page=19) recommande Silver lorsque l’application exige un effort de départ plus faible et avertit d’un découplage possible à des pressions inférieures à 100 PSI. Choisir Silver uniquement parce que le diamètre est identique laisse de côté cette différence fonctionnelle.

## Reconstituer la charge avec le guidage réel

Le relevé proposé par CompatAir conserve la variante, l’alésage, la charge, son point d’application, le guidage extérieur et la chronologie du mouvement. Une masse portée, un effort axial et un moment ne sont pas la même grandeur. La force de couplage ne peut pas être substituée à toutes ces limites.

| Identification | Question qu’elle permet de traiter |
| --- | --- |
| UG/US ou version Slide | Construction et table applicable |
| Code d’alésage | Valeur de couplage publiée |
| Gold ou Silver | Compromis de départ et de couplage |
| Guidage et charge | Efforts réellement transmis au chariot |

Le catalogue actuel est un fichier portant « 2025 » dans son nom, mais ses pages conservent des mentions ©2020/02-21. La date de consultation n’est donc pas présentée comme une date de révision technique. Confirmez la version livrée et les conditions de l’application avec Bimba.

## Revoir la sélection avant d’augmenter la pression

Si le chariot décroche, l’augmentation de pression n’est pas une démonstration de compatibilité mécanique. Faites comparer les efforts au couplage et aux limites de guidage avec le concepteur. Faites définir la remise en service par le concepteur après identification de la cause du découplage.

Le [réglage de vitesse du vérin](/guides/regler-vitesse-verin-pneumatique-echappement/) traite la commande du mouvement ; le [dossier des bras de préhension](/guides/pince-pneumatique-force-doigt-longueur-prehension/) distingue force et moment. Le [distributeur centre fermé](/guides/distributeur-5-3-centre-ferme-verin-derive/) concerne l’état des volumes. Ces dossiers complètent l’étude sans remplacer la sélection du couplage magnétique Ultran.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
