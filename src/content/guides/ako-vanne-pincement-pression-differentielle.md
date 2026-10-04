---
title: "Vanne à pincement AKO : ajouter le différentiel à la pression du produit"
seoTitle: "Vanne AKO : régler la pression avec le différentiel"
description: "La fermeture d’une vanne AKO dépend de la pression du produit et du différentiel de plaque. Lire C = A + B sans augmenter arbitrairement la commande."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "diametre-longueur-flexible-air-comprime", "electrovanne-air-ne-ouvre-pas-pression-differentielle"]
sources: ["https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/Technische_Infobl%C3%A4tter/TI_pV_OS_DE-EN.pdf", "https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf"]
---

Une vanne à pincement ne se ferme pas entièrement malgré une pression d’air qui semblait suffisante à vide. Pour AKO, le réglage tient compte de la pression du produit dans la conduite. **Le différentiel figurant sur la plaque doit être ajouté à cette pression de service.** Il ne remplace pas la pression de service.

## Reconstituer le calcul avec la plaque de la vanne

La [fiche Optimum control pressure du 15 janvier 2024](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/Technische_Infobl%C3%A4tter/TI_pV_OS_DE-EN.pdf#page=1) définit A comme pression de la conduite, B comme différentiel entre commande et conduite, et C comme pression optimale de fermeture : **C = A + B**. Elle renvoie à la plaque ou au texte de l’article pour les maxima autorisés.

La [notice d’août 2026, page 5](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=5) fournit l’exemple **3 bar de pression de produit + 2,5 bar de différentiel = 5,5 bar de commande**. C’est l’exemple du fabricant, sans valeur universelle de différentiel. Une autre manchette ou une autre référence peut imposer une autre valeur.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 350" role="img" aria-labelledby="ako-vanne-pincement-pression-differentielle-title ako-vanne-pincement-pression-differentielle-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="ako-vanne-pincement-pression-differentielle-title">AKO : la pression de fermeture est une somme</title><desc id="ako-vanne-pincement-pression-differentielle-desc">Le fabricant définit C = A + B : pression de conduite plus différentiel de la plaque. Son exemple donne 3 + 2,5 = 5,5 bar.</desc><rect width="520" height="350" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="25" font-weight="700">Pression de commande C</text><rect x="33" y="104" width="215" height="77" rx="14" fill="#26775b"/><rect x="255" y="104" width="230" height="77" rx="14" fill="#d3eb56"/><text x="54" y="151" fill="#eef2e9" font-size="23">A : conduite</text><text x="275" y="151" fill="#10281e" font-size="23">B : différentiel</text><text x="48" y="228" fill="#eef2e9" font-size="22">Exemple fabricant :</text><text x="48" y="273" fill="#d3eb56" font-size="29" font-weight="700">3 + 2,5 = 5,5 bar</text><text x="34" y="321" fill="#eef2e9" font-size="20">Toujours dans les limites de la plaque</text></svg>
<figcaption>Le fabricant définit C = A + B : pression de conduite plus différentiel de la plaque. Son exemple donne 3 + 2,5 = 5,5 bar.</figcaption>
</figure>

## Un réglage plus haut peut accélérer l’usure

Le [tableau de dépannage page 23](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=23) cite une pression de commande trop faible pour une fermeture incomplète. Il cite également une pression de commande ou un différentiel trop haut parmi les causes d’usure rapide de la manchette. Augmenter arbitrairement la pression jusqu’à disparition du symptôme ne constitue donc pas le réglage publié.

La [page 11](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf#page=11) exige un régulateur ou limiteur sur la ligne de commande, réglé à la pression optimale, et le respect strict des maxima de pression et température de la plaque. Si la plaque manque, elle demande de contacter AKO.

| Donnée | Où la vérifier |
| --- | --- |
| Pression du produit | Conditions de service de la conduite |
| Différentiel requis | Plaque et qualité de manchette |
| Maximum de commande | Plaque ou documentation de la référence |
| Pression réellement appliquée | Point d’alimentation de la vanne pendant la commande |

Le [guide des forces pneumatiques](/guides/force-verin-pneumatique-diametre-pression/) traite un autre actionneur ; il aide à comprendre pourquoi une pression opposée change un effort. Il ne fournit pas le différentiel de cette manchette.

## La fermeture lente reste une autre recherche

AKO distingue aussi les lignes de commande trop longues ou trop étroites et les passages insuffisants de l’électrovanne. Une pression cible correcte ne prouve donc pas la vitesse d’établissement. Le [guide des flexibles](/guides/diametre-longueur-flexible-air-comprime/) et celui des [électrovannes et différentiels](/guides/electrovanne-air-ne-ouvre-pas-pression-differentielle/) permettent de séparer ces mécanismes.

La suite utile consiste à confronter le calcul de fermeture à la référence réelle, puis à vérifier la commande conformément à la notice. Une fuite de produit, une manchette défectueuse ou des conditions hors limite doivent être traitées selon leurs procédures propres ; elles ne se corrigent pas par une nouvelle consigne d’air improvisée.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [AKO, pression de commande optimale TI_pV_OS, 15 janvier 2024](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/Technische_Infobl%C3%A4tter/TI_pV_OS_DE-EN.pdf)
- [AKO, notice des vannes à manchon pneumatiques BA_pV_DIV](https://www.pinch-valve.com/fileadmin/user_upload/Downloads/PDF/BA_pV_DIV_EN.pdf)
