---
title: "SMC ITV : une commande absente peut-elle laisser une pression de sortie ?"
seoTitle: "SMC ITV : pression minimale sans consigne"
description: "Le minimum F_1 compte même sans consigne analogique sur un ITV. Vérifier le réglage et la séquence du poste avant de conclure à un régulateur défectueux."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "smc-itv-coupure-air-alimentation-electrique"
  - "groupe-frl-filtre-regulateur-lubrificateur"
  - "vanne-demarrage-progressif-air-comprime-remise-pression"
sources:
  - "https://www.smcworld.com/assets/manual/en-jp/files/ITV-E.pdf"
  - "https://www.smcworld.com/support/faq/en/s.do?ca_id=699&id=883&lang=en"
---

L’automate n’envoie pas de consigne, pourtant l’ITV peut produire une pression lorsque l’air est fourni. La [notice ITV, pages 7–8](https://www.smcworld.com/assets/manual/en-jp/files/ITV-E.pdf#page=7) précise que la pression minimale est délivrée même sans signal d’entrée. Il faut donc regarder le **minimum F_1**, et pas seulement la valeur demandée par l’automate.

Cela ne prouve pas que toutes les pressions inattendues viennent du réglage. Confirmez que la référence et le type d’entrée correspondent aux ITV standard couverts par cette notice avant toute modification.

## Le minimum fait partie de la loi de commande

Le réglage de début de plage et la commande instantanée sont deux informations différentes. Une photographie du menu F_1, conservée avec le programme et la référence complète, permet de les confronter. Un écran de supervision qui affiche une consigne n’indique pas nécessairement la valeur réellement appliquée à l’entrée ni la borne minimale configurée.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 354" role="img" aria-labelledby="smc-itv-pression-minimale-sans-consigne-f1-title smc-itv-pression-minimale-sans-consigne-f1-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="smc-itv-pression-minimale-sans-consigne-f1-title">Avant de conclure à une fuite</title><desc id="smc-itv-pression-minimale-sans-consigne-f1-desc">La notice ITV prévoit une pression minimale même sans signal d’entrée. Ce schéma de diagnostic ne vaut pas procédure de dépressurisation.</desc><rect width="520" height="354" rx="22" fill="#10281e"/><text x="26" y="42" font-size="23" fill="#d3eb56" font-weight="700">Avant de conclure à une fuite</text><circle cx="46" cy="86" r="18" fill="#d3eb56"/><text x="46" y="93" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">1</text><text x="80" y="83" font-size="22" fill="#eef2e9" font-weight="700">Lire F_1</text><text x="80" y="111" font-size="19" fill="#8abfa3">Borne minimale de l’appareil</text><path d="M46 108V147" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="168" r="18" fill="#d3eb56"/><text x="46" y="175" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">2</text><text x="80" y="165" font-size="22" fill="#eef2e9" font-weight="700">Lire le signal réel</text><text x="80" y="193" font-size="19" fill="#8abfa3">Au-delà de la valeur de supervision</text><path d="M46 190V229" stroke="#8abfa3" stroke-width="3"/><circle cx="46" cy="250" r="18" fill="#d3eb56"/><text x="46" y="257" font-size="19" fill="#10281e" font-weight="700" text-anchor="middle">3</text><text x="80" y="247" font-size="22" fill="#eef2e9" font-weight="700">Comparer la pression</text><text x="80" y="275" font-size="19" fill="#8abfa3">Avec la séquence air et tension</text></svg>
<figcaption>La notice ITV prévoit une pression minimale même sans signal d’entrée. Ce schéma de diagnostic ne vaut pas procédure de dépressurisation.</figcaption>
</figure>


La [FAQ SMC sur le bourdonnement](https://www.smcworld.com/support/faq/en/s.do?ca_id=699&id=883&lang=en) donne un exemple avec **F_1 à 0,1 MPa** et aucune arrivée d’air : les électrovannes cherchent cette pression sans pouvoir l’atteindre. Ce nombre est l’exemple SMC, pas un réglage conseillé. Avec l’air interrompu et la tension maintenue, la notice avertit aussi d’un fonctionnement interne pouvant raccourcir la durée de vie.

## Une absence de commande n’est pas une procédure de consignation

Comparer le minimum avec la fonction demandée au poste relève du concepteur. Si l’objectif est de supprimer une pression, une simple attente sur la consigne n’est pas une démonstration de dépressurisation de l’ensemble du circuit. Le [dossier ITV sur les coupures](/guides/smc-itv-coupure-air-alimentation-electrique/) couvre la séquence d’alimentation ; ici, le point précis est l’effet de la borne F_1.

| Donnée à confronter | Question résolue |
| --- | --- |
| Référence et type d’entrée | La procédure concerne-t-elle cette variante ? |
| Minimum F_1 lu sur l’appareil | Quelle borne a été configurée ? |
| Signal effectivement fourni | Correspond-il au programme attendu ? |
| État de l’air et de l’alimentation électrique | Quelle séquence est réellement présente ? |

Si l’appareil affiche un code, consultez le [diagnostic Er.1 et Er.5](/guides/smc-itv-er1-er5-entree-sortie-electrique/) avant de modifier la borne : il distingue entrée hors plage et charge de sortie.

## Corriger la configuration avec le bon responsable

La notice recommande de changer les réglages sans pression d’alimentation et avertit que l’appareil agit dès validation des bornes. Une modification doit donc être préparée avec la mise en sécurité et les conséquences aval, puis vérifiée selon la procédure du poste.

Le [guide du régulateur](/guides/groupe-frl-filtre-regulateur-lubrificateur/) aide à choisir sa fonction ; celui de la [remise en pression progressive](/guides/vanne-demarrage-progressif-air-comprime-remise-pression/) rappelle qu’un retour d’énergie change le comportement de l’installation. Si le minimum et le signal sont conformes mais la pression reste inexpliquée, poursuivez le diagnostic avec SMC plutôt que de déclarer une panne à partir de la seule consigne affichée.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
