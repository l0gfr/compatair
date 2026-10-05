---
title: "Nitto 40PM et 400PM : pourquoi le même filetage ne suffit pas"
seoTitle: "Nitto 40PM ou 400PM : deux profils malgré le R 1/2"
description: "Un embout Nitto 400PM ne remplace pas un 40PM sur la foi du filetage R 1/2. Identifiez le profil et le couple embout-douille avant achat."
pubDate: "2026-10-05"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["raccord-air-comprime-bsp-npt-1-4", "raccord-rapide-securite-decompression-air-comprime"]
sources: ["https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/C01en-b_web.pdf"]
---

**Le Nitto 40PM et le 400PM portent tous les deux un filetage mâle R 1/2 dans le catalogue, mais leurs profils d’accouplement appartiennent à deux groupes différents.** Commander « un raccord Nitto en demi-pouce » laisse donc une information décisive hors du bon de commande.

Cette confusion concerne l’extrémité qui entre dans la douille rapide. Elle ne se règle pas avec un adaptateur vissé sur le port de la machine : cet adaptateur agit sur le filetage, sans changer la géométrie de l’embout engagé.

## Lire les deux interfaces du raccord

La [table des modèles HI CUPLA, page PDF 41](https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/C01en-b_web.pdf#page=41) distingue la colonne **T**, qui décrit le filetage, des dimensions de l’embout. Pour le 40PM, elle donne T = R 1/2 et ØBd = 7,5 mm ; pour le 400PM, T = R 1/2 et ØBd = 13 mm. ØBd est le repère du dessin fabricant, et non une nouvelle désignation de filetage.

La [matrice d’interchangeabilité, page PDF 22](https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/C01en-b_web.pdf#page=22) place ces deux références dans des groupes séparés. Elle précise que les références du groupe inférieur ne s’accouplent pas avec celles du groupe supérieur. C’est cette matrice, accompagnée du modèle exact de la douille, qui permet de préparer l’achat.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="nitto-40pm-400pm-meme-filetage-profils-differents-title nitto-40pm-400pm-meme-filetage-profils-differents-desc" xmlns="http://www.w3.org/2000/svg">
<title id="nitto-40pm-400pm-meme-filetage-profils-differents-title">Nitto 40PM et 400PM : pourquoi le même filetage ne suffit pas</title><desc id="nitto-40pm-400pm-meme-filetage-profils-differents-desc">Repères de décision issus du catalogue Nitto ; les composants doivent être identifiés avant montage.</desc><rect width="520" height="350" rx="20" fill="#10281e"/><rect x="24" y="24" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="58" fill="#d3eb56" font-size="23" font-weight="700">40PM</text><text x="44" y="98" fill="white" font-size="22">Filetage R 1/2 ; ØBd 7,5 mm</text><text x="44" y="136" fill="#8abfa3" font-size="18">Famille d’accouplement 10, 17, 20, 30, 40</text><rect x="24" y="180" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="214" fill="#d3eb56" font-size="23" font-weight="700">400PM</text><text x="44" y="254" fill="white" font-size="22">Filetage R 1/2 ; ØBd 13 mm</text><text x="44" y="292" fill="#8abfa3" font-size="18">Famille d’accouplement 400, 600, 800</text></svg>
<figcaption>Repères du catalogue constructeur. Le détail du montage reste celui de la notice de la référence.</figcaption>
</figure>


## Relever ce qui est déjà installé

Sur un poste existant, relevez le marquage de la douille et celui de l’embout après mise en sécurité conformément aux notices. Une photographie de chaque référence aide à éviter la confusion entre **40** et **400**. Ne concluez pas à partir du seul diamètre extérieur, de la couleur ou de la description du vendeur.

| Information à conserver | Ce qu’elle permet de décider |
| --- | --- |
| Référence de la douille rapide | Groupe d’embouts déclaré compatible |
| Référence de l’embout | Géométrie d’accouplement et dimensions propres |
| Filetage T dans le dessin | Raccordement au port de la machine |
| Pression et fluide de la série | Domaine de service autorisé |

Si le marquage a disparu, transmettre les pièces identifiées à un fournisseur compétent est plus fiable qu’un essai par insertion sous pression. Un embout qui semble entrer n’établit ni verrouillage correct ni compatibilité déclarée.

## Écrire une commande sans ambiguïté

Une ligne de commande utile nomme la référence complète, le matériau lorsque le catalogue offre plusieurs choix, le type de terminaison et la douille avec laquelle l’embout doit fonctionner. Le mot « compatible » doit renvoyer à une correspondance constructeur explicite.

Écrivez les deux références sur la commande : l’embout acheté et la douille qu’il doit rejoindre. Pour un 40PM, recherchez la douille dans le groupe supérieur de la matrice ; pour un 400PM, dans le groupe 400, 600 et 800. Le filetage R 1/2 reste identique dans cet exemple, pas le groupe d’accouplement.

Le [guide BSP et NPT](/guides/raccord-air-comprime-bsp-npt-1-4/) traite l’autre interface. Il reste nécessaire : une bonne famille d’accouplement peut être montée sur un mauvais filetage, et l’inverse est également possible.

## Vérifier le résultat au poste

Après montage autorisé, faites vérifier le couple identifié : verrouillage, étanchéité et déconnexion doivent correspondre aux notices des pièces reçues. Une insertion possible à la main ne remplace pas l’appartenance au groupe déclaré par Nitto.

La pression disponible pendant l’usage reste un contrôle séparé. Le raccord choisi peut être compatible mécaniquement sans apporter le débit nécessaire à l’outil. Si la machine perd sa force, poursuivez avec le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) plutôt que de changer de compresseur sur la seule base de la taille du filetage.

## Documents utilisés

Catalogue Nitto Kohki consulté le **5 octobre 2026** ; pages PDF précisées dans les liens. Les tableaux de choix et relevés de réception sont proposés par CompatAir. Rédaction avec assistance d’IA et contrôle interne des documents, sans essai physique ni relecture professionnelle externe.
