# Aircraft : réparation des sources du 23 octobre 2026

Le contrôle complet [39983573413](https://github.com/l0gfr/compatair/actions/runs/39983573413), sur `6205a81599051d10cd378ed8e73f66a0e5f47e86`, relevait 150 nouvelles réponses 404 Stürmer : 88 compresseurs et 62 outils, avec 153 citations actives et 150 provenances de cartes techniques. Les pages d’accueil [Stürmer](https://www.stuermer-machines.com/) et [Aircraft](https://www.aircraft.at/) annoncent une mise hors ligne préventive liée à des vulnérabilités PHP. Cela ne permet pas de conclure à l’arrêt des produits.

## Origine et date de chaque preuve

Les relevés des fiches fabricant du 27 septembre restent consultables dans les deux fichiers JSON publics immuables du commit `6205a81599051d10cd378ed8e73f66a0e5f47e86`. Leur contenu a été téléchargé et comparé octet par octet aux imports versionnés. Ces transcriptions sont étiquetées « archive CompatAir », avec rôle secondaire. Elles ne sont pas présentées comme les pages originales du fabricant. Les dates historiques, les conditions de débit et les références `fieldSources` sont conservées.

152 preuves distinctes donnent accès à la documentation fabricant consultée le 23 octobre : catalogues, brochures, notices et une fiche produit. Chaque référence précise l’édition, la page, l’éditeur et l’empreinte SHA-256 du PDF. Les documents OXOMI sont diffusés par le portail public MROSE, fournisseur Stürmer 702076. Les notices hébergées par des distributeurs sont identifiées comme documents fabricant sur un miroir tiers.

149 modèles disposent d’une documentation fabricant avec identité exacte. Pour `2018831.2SAR`, le catalogue actuel documente le compresseur nu `2018831.2` ; la composition du kit avec enrouleur reste celle du relevé historique. Cette limite figure sur la fiche. Les PDF OXOMI vides qui ne contenaient qu’un numéro ont été rejetés.

## Comparaisons et divergences

Les tableaux des 77 compresseurs retrouvés dans le catalogue 2026/27 comportent 906 champs concordants, 44 produits avec différences et 7 avec des champs absents ; ces catégories peuvent se recouper. Les dix autres références anciennes sont documentées par des notices avec articles exacts. Le kit restant a le périmètre limité décrit ci-dessus.

Les sources outil distinguent notamment les consommations moyennes des consommations sans régime explicite. La notice de l’IWS 125-2 PRO confirme 326 L/min moyens et la brochure automne/hiver 2026/27 donne 252 L/min moyens pour le TTS PRO ; le catalogue général indique 113 L/min pour chacun. Ces déclarations disposent de preuves séparées et restent visibles sur les fiches. Les autres écarts de masse, dimensions, pression, puissance ou remplissage sont également datés, avec les deux valeurs. Une puissance moteur générique n’est pas assimilée automatiquement à une puissance absorbée ou restituée.

Les entrées de calcul sont inchangées. Toutes les courbes FAD des 88 compresseurs restent vides. Aucun débit aspiré ou de remplissage n’est promu en FAD et aucune consommation moyenne n’est transformée en débit continu. Les cartes techniques gardent leur contenu et pointent vers l’archive qui étaye leurs valeurs.

## Vérifications

- 67 adresses uniques du lot contrôlées avec le vérificateur réseau du projet : 67 joignables, zéro lien cassé, indisponible, dangereux ou non vérifié.
- Reconstruction exacte du catalogue, empreintes et tests ciblés de réparation et d’historique vérifiés.
- Historique : préfixe de 36 997 événements intact, 153 corrections et 152 ajouts distincts, soit 305 nouveaux événements.
- Les imports et les registres de réparation antérieurs sont conservés.

Le contrôle des 67 adresses est ciblé sur cette réparation. Il ne vaut pas validation de toutes les sources du site ; les deux anciennes erreurs Beck/Senco du contrôle complet sont hors périmètre.

Registre : `src/data/imports/source-url-repairs-aircraft-2026-10-23.json`. Rapport HTTP : `source-repairs-aircraft-2026-10-23.health.json`.
