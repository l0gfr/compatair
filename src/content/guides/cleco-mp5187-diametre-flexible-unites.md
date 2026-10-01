---
title: "Cleco MP5187 : le diamètre de flexible à clarifier"
description: "Le catalogue MP5187 associe 1/4 pouce et 9,6 mm pour le diamètre intérieur du tuyau. Ces unités divergent : contrôler la liaison avant commande."
pubDate: "2026-10-01"
category: "Installer"
audiences: ["particulier", "professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 2
reviewStatus: "internal"
featured: false
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources: ["https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf"]
seoTitle: "Cleco MP5187 : le diamètre de flexible à clarifier"
---

**1/4 pouce et 9,6 mm ne désignent pas le même diamètre intérieur.** Le catalogue Dotco/Cleco SP-102 les associe pourtant dans la consigne de flexible de la MP5187. CompatAir conserve cette contradiction sans décider quelle unité le fabricant voulait écrire.

## La ligne qui doit être clarifiée

La [page du dérouilleur à aiguilles MP5187](https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=102) publie une cadence de 4 200 coups par minute, une masse de 1,1 kg et une longueur de 225 mm. Sous le tableau, la rubrique générale donne une entrée d’air 1/4 NPT et un flexible de diamètre intérieur « 1/4” (9.6 mm) ».

Avec la définition de l’unité pouce, **1/4 × 25,4 = 6,35 mm**. À l’inverse, 9,6 mm correspondent à environ 0,378 pouce, proche de 3/8 pouce, qui vaut 9,525 mm. Le rapprochement avec 3/8 est une observation de conversion, pas une correction confirmée par Cleco.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 234" role="img" aria-labelledby="cleco-mp5187-diametre-flexible-unites-title cleco-mp5187-diametre-flexible-unites-desc" style="font-family:system-ui,sans-serif"><title id="cleco-mp5187-diametre-flexible-unites-title">Deux écritures incompatibles</title><desc id="cleco-mp5187-diametre-flexible-unites-desc">Conversion CompatAir : 1 pouce = 25,4 mm. Le document n’établit pas laquelle des deux écritures est correcte.</desc><rect width="440" height="234" rx="16" fill="#10281e"/><text x="22" y="32" fill="#d3eb56" font-size="15" font-weight="700">Deux écritures incompatibles</text><text x="22" y="75" fill="#eef2e9" font-size="14">1/4 pouce, converti</text><text x="418" y="75" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">6.35</text><rect x="22" y="87" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="87" width="261.94" height="9" rx="4" fill="#d3eb56"/><text x="22" y="137" fill="#eef2e9" font-size="14">Valeur métrique publiée</text><text x="418" y="137" text-anchor="end" fill="#eef2e9" font-size="14" font-weight="700">9.6</text><rect x="22" y="149" width="396" height="9" rx="4" fill="#315341"/><rect x="22" y="149" width="396.00" height="9" rx="4" fill="#d3eb56"/><text x="22" y="216" fill="#eef2e9" font-size="13">Diamètre intérieur en mm</text></svg><figcaption>Conversion CompatAir : 1 pouce = 25,4 mm. Le document n’établit pas laquelle des deux écritures est correcte.</figcaption></figure>

## Le raccord et le tuyau ne sont pas une seule dimension

La mention 1/4 NPT identifie le raccord d’entrée. La ligne I.D. vise le diamètre intérieur du flexible. Le document les présente dans deux rubriques distinctes : recopier le 1/4 du raccord comme diamètre intérieur du tuyau ne résout pas le conflit.

Avant achat, transmettez au fournisseur la référence MP5187 et l’extrait de page. Demandez le diamètre intérieur minimal et la longueur de liaison admise dans la notice applicable. La réponse doit préciser la grandeur et l’unité, pour éviter qu’une confirmation du raccord soit prise pour une confirmation du tuyau.

## Le débit requis ne sort pas de la cadence de frappe

Le catalogue rattache les performances à 90 psi / 620 kPa, soit 6,2 bar pour la valeur métrique. Il ne donne pas la consommation d’air de cette référence dans ce tableau. Les 4 200 coups/min ne permettent pas de la déduire sans une consommation par coup documentée.

La [fiche MP5187](/outils-pneumatiques/derouilleur-a-aiguilles-cleco-mp5187/) garde donc un verdict indéterminé. Le [cas Bosch des unités L/s et cfm](/guides/bosch-0607450593-consommation-unites/) illustre un autre contrôle documentaire : publier l’écart et exclure une valeur corrigée arbitrairement. Pour le MP5187, diamètre de liaison et consommation doivent être confirmés avant de conclure sur le compresseur.
