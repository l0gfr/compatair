# Extension documentée du 26 septembre 2026

Le catalogue passe de 239 à 519 compresseurs et de 1 761 à 1 787 outils : 280 nouveaux compresseurs, 26 nouveaux outils, 2 306 références au total. Les anciennes références restent inchangées.

## Périmètre et provenance

| Marque | Compresseurs ajoutés | Outils ajoutés | Source primaire |
| --- | ---: | ---: | --- |
| Fini | 112 | 0 | Catalogue MICRO/PLUS, édition 04-2024, tableaux p. 16-18 |
| FIAC | 77 | 0 | Catalogue S226-R1-062026, NEW SILVER p. 18-20 |
| Lacair | 67 | 0 | Catalogue Lacair 2026, tableaux p. 16-41 |
| Senco | 8 | 0 | Fiches individuelles officielles, données actuelles |
| Bostitch | 5 | 2 | Catalogue Construction UK p. 26-28, fiches françaises des outils |
| Scheppach | 4 | 0 | Fiches individuelles HC08Si, HC24V, HC10-Twin et HC105DC |
| Mecafer | 4 | 0 | Fiches individuelles du fabricant |
| Stanley | 2 | 0 | Fiches individuelles Mecafer de la marque Stanley |
| MecaDéco | 1 | 0 | Fiche individuelle Mecafer |
| Lacmé | 0 | 24 | Catalogue Outillage 2026, p. 14, 16, 24, 26 et 30 |

`src/data/imports/multi-brand-reviewed-2026-09-26.json` conserve les URL, la date de consultation, le SHA-256 de chaque document, les pages et les lignes techniques revues. Les PDF et copies HTML complets ne sont pas ajoutés au dépôt. Les cartes techniques sont des illustrations CompatAir des valeurs publiées, explicitement distinguées des photographies fabricant.

Sources de référence :

- [Fini MICRO/PLUS](https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf)
- [FIAC 2026](https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf)
- [Catalogues actuels Lacmé et Lacair](https://lacme.com/lacme/consultez-nos-catalogues/)
- [Bostitch Construction](https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf)
- [Senco AC20216BL-EU](https://www.senco.eu/en/products/compressors/compressor/p/AFN0037EU)
- [Compresseurs Scheppach](https://shop.scheppach.com/Produkte/Heimwerker/Kompressoren/oelfreie-Kompressoren/)
- [Compresseurs Mecafer](https://www.mecafer.com/compresseurs)
- [Bostitch BT1855-E](https://bostitch.fr/produits/details-de-l-outil/bt1855-e/)

## Limites conservées

Les déclinaisons de cuve, de pression et de sécheur Fini/FIAC possèdent chacune une référence fabricant distincte. Les kits et les doublons de références existantes sont exclus. Le nombre de références ne constitue pas un classement des ventes : aucune donnée de ventes vérifiable n'a été obtenue.

Les débits aspirés restent séparés des débits restitués. Les points à 6 bar des Senco et des Lacair à piston ne sont jamais extrapolés à 6,3 ou 7 bar. Les points Fini et FIAC conservent leur pression de mesure publiée. La disponibilité commerciale, le taux de marche et les caractéristiques absentes ne sont pas inventés.

Les outils Lacmé indiquent une plage de 6 à 7 bar. Le dimensionnement retient explicitement la borne haute publiée, sans la présenter comme la pression d'un essai de consommation. Les deux Bostitch expriment une consommation par coup et exigent une cadence utilisateur.

Le MaxAir 20/20 reste à 17 L selon son tableau, malgré son nom. Le Senco AC12824 utilise les 24 L de la fiche individuelle actuelle. Le HC20Si-Twin est exclu car sa courbe publiée contient une valeur incohérente ; aucune correction supposée n'est introduite. Les unités 110 V Bostitch sont exclues, et les variantes 230 V du catalogue UK portent une réserve sur la prise et la disponibilité locale.

## Publication contrôlée

Le lot produit 927 453 combinaisons explorables, dont 920 706 verdicts fixes et 6 747 combinaisons paramétriques. Il ne crée aucune page HTML par couple. Les pages produit, marque et usage réutilisent les données sourcées, leurs limites et le maillage existant.

Les tests reconstruisent les 306 produits à partir des faits versionnés, vérifient les unités, les pressions, les courbes, les identités et la non-extrapolation. Chaque verdict fixe reste comparé au moteur déterministe.

Le catalogue complet mesure 679 Mio bruts, dont 129 Mio de HTML et 436 Mio de verdicts JSON audités. L'archive de déploiement gzip mesure 95 Mio ; un contrôle la bloque au-delà de 112 Mio avant tout envoi à GitHub. Les budgets JavaScript restent inchangés. La recherche reste sous 80 Kio gzip ; le catalogue calculateur mesure 115 Kio gzip, sous un plafond explicite de 120 Kio. Les archives de production conservent une rétention de sept jours et le nettoyage existant protège la production active et son retour arrière.

Le lecteur MCP renouvelle désormais son cache borné de calculs : atteindre le plafond n'arrête plus la mutualisation pour la fin du catalogue. Le test de démarrage applique toujours la limite de 256 Mio au serveur réel et à ses requêtes HTTP. La reconstruction exhaustive des 920 706 verdicts vérifie ensuite l'égalité exacte des octets ; cette sérialisation complète n'est pas exécutée au démarrage en production.
