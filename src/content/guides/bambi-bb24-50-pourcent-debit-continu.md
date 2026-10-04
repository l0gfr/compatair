---
title: "Bambi BB24 : 27 L/min à 5 bar et 50 % de service, que peut-on conclure ?"
seoTitle: "Bambi BB24 : FAD 27 L/min et service 50 %"
description: "Le BB24 annonce 27 L/min restitués à 5 bar et 50 % de service maximal. Ces deux données ne garantissent pas un outil de 20 L/min en fonctionnement continu."
pubDate: "2026-10-04"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-service-s1-s3-25-pour-cent", "compresseur-perd-pression-arret-fuite-refroidissement", "debit-restitue-fad-vs-debit-aspire"]
sources: ["https://bambi-air.co.uk/product/bb24/"]
---

**Les 27 L/min du Bambi BB24 à 5 bar ne sont pas une garantie de débit utilisable en continu.** La fiche publie également un facteur de marche maximal de 50 %. Pour un consommateur qui ne s’arrête pas, il faut examiner ensemble production d’air, repos admis et cycle réel du poste.

La [fiche BB24 du fabricant](https://bambi-air.co.uk/product/bb24/) donne 27 L/min de FAD à 5 bar, une cuve de 24 litres et une pression maximale de 8 bar. Son tableau de débit varie avec la pression : le FAD atteint 35 L/min à 1 bar et 25 L/min à 8 bar. Les 35 L/min ne doivent pas être utilisés pour un outil demandant 5 bar.

## Un consommateur de 20 L/min : scénario de consultation

Supposons un outil demandant constamment 20 L/min à 5 bar. La comparaison instantanée 27 > 20 semble favorable, mais elle ignore le repos du compresseur. Sous l’hypothèse simplifiée d’une production constante de 27 L/min pendant seulement la moitié du temps, **27 × 0,5 = 13,5 L/min** est une borne moyenne théorique.

Ce calcul ne garantit aucun débit continu du BB24 : la fiche ne précise pas ici la durée de la fenêtre utilisée pour ses 50 %, et le remplissage de la cuve traverse plusieurs pressions avec des débits différents. Il ne constitue donc ni un programme de marche/repos ni une autonomie calculée pour ce modèle.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 392" role="img" aria-labelledby="bambi-bb24-50-pourcent-debit-continu-title bambi-bb24-50-pourcent-debit-continu-desc" style="display:block;width:100%;height:auto;font-family:Manrope Variable,system-ui,sans-serif">
<title id="bambi-bb24-50-pourcent-debit-continu-title">Débit et régime restent associés</title><desc id="bambi-bb24-50-pourcent-debit-continu-desc">Données publiées du BB24. Le FAD varie avec la pression et le facteur de marche maximal est de 50 % ; aucune capacité continue n’est promise.</desc>
<rect width="520" height="392" rx="20" fill="#10281e"/>
<text x="26" y="39" fill="#d3eb56" font-size="22" font-weight="700" text-anchor="start">Débit et régime restent associés</text><text x="26" y="84" fill="#b4cec0" font-size="19" text-anchor="start">FAD à 1 bar</text><rect x="26" y="96" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="96" width="340.0" height="27" rx="12" fill="#d3eb56"/><text x="487" y="118" fill="white" font-size="22" font-weight="700" text-anchor="end">35</text><text x="26" y="173" fill="#b4cec0" font-size="19" text-anchor="start">FAD à 5 bar</text><rect x="26" y="185" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="185" width="262.29" height="27" rx="12" fill="#d3eb56"/><text x="487" y="207" fill="white" font-size="22" font-weight="700" text-anchor="end">27</text><text x="26" y="262" fill="#b4cec0" font-size="19" text-anchor="start">FAD à 8 bar</text><rect x="26" y="274" width="340" height="27" rx="12" fill="#315341"/><rect x="26" y="274" width="242.86" height="27" rx="12" fill="#d3eb56"/><text x="487" y="296" fill="white" font-size="22" font-weight="700" text-anchor="end">25</text><text x="26" y="350" fill="#d3eb56" font-size="19" text-anchor="start">L/min restitués publiés</text><text x="26" y="376" fill="#b4cec0" font-size="18" text-anchor="start">Facteur de marche maximal annoncé : 50 %</text>
</svg>
<figcaption>Données publiées du BB24. Le FAD varie avec la pression et le facteur de marche maximal est de 50 % ; aucune capacité continue n’est promise.</figcaption>
</figure>

Le scénario de 20 L/min continus n’est pas qualifié par ces seules données. Demandez au fabricant la durée de cycle admise et le bilan validé pour cette consommation. Le [guide des facteurs de marche](/guides/compresseur-service-s1-s3-25-pour-cent/) explique pourquoi un pourcentage sans sa fenêtre temporelle ne donne pas un calendrier exploitable.

## La cuve ne crée pas une production supplémentaire

La cuve peut participer aux transitions de pression. Sur un usage prolongé, elle ne remplace pas l’air que le compresseur doit produire. Une estimation d’autonomie demanderait les pressions utiles, le débit à ces pressions et les conditions de commande ; le seul volume de 24 litres ne suffit pas.

Le [guide de perte de pression à l’arrêt](/guides/compresseur-perd-pression-arret-fuite-refroidissement/) décrit aussi pourquoi une baisse observée ne doit pas être attribuée automatiquement à un manque de stockage. Pour le choix, les consommations et le régime réel doivent être clairement documentés.

## Ce qu’un devis doit confirmer

Indiquez le consommateur exact, la pression minimale, les durées d’usage et les autres appareils. Demandez le débit restitué aux points utiles, le régime de service autorisé et la configuration de traitement d’air. Le [guide FAD et aspiration](/guides/debit-restitue-fad-vs-debit-aspire/) aide à vérifier la nature des chiffres proposés.

La page consultée affiche actuellement 54 dB(A), avec sa note de mesure, pour ce modèle. Cette valeur ne devient pas une promesse de silence dans un local donné et ne répare pas le bilan d’air. La décision d’achat reste technique : un usage intermittent documenté peut être étudié, tandis qu’un usage continu doit obtenir sa qualification propre, sans multiplier les chiffres favorables.

## Sources et méthode

Sources fabricant consultées le **4 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios et calculs CompatAir sont signalés dans le texte.
