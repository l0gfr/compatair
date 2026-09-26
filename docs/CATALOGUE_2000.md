# Extension du catalogue à 2 000 références

Lot du 26 septembre 2026 : 397 outils Atlas Copco et 103 perceuses Desoutter, soit 500 références fabricant distinctes. Le catalogue compte 239 compresseurs et 1 761 outils. Les 1 500 objets du catalogue précédent sont conservés à l’identique.

## Sources et sélection

Les fiches individuelles fabricant sont recoupées avec [Industrial Tools and Solutions UK, Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf) et le [catalogue général Desoutter de juillet 2026](https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf). Le millésime du catalogue Atlas Copco n’est pas affirmé. La publication Desoutter est reliée depuis sa bibliothèque officielle.

Les relevés `atlas-copco-reviewed-2026-09-26.json` et `desoutter-reviewed-2026-09-26.json` conservent les MPN, les attributs individuels avec leurs unités, l’URL et l’empreinte SHA-256 de chaque fiche, ainsi que l’empreinte du PDF et la ligne identifiant la référence dans son tableau. La sélection exclut les profils techniques dupliqués, les valeurs de débit contradictoires et les conditions de pression non résolues. Les faits seuls sont repris, sans copie des textes promotionnels.

Le lot comprend 164 perceuses, 95 visseuses, 92 boulonneuses, 48 clés à impulsions, 43 meuleuses, 13 ponceuses orbitales, 12 ponceuses rotatives, 8 burineurs, 8 clés à chocs, 7 marteaux à river, 4 taraudeuses, 3 clés à cliquet, 2 ponceuses à bande et 1 dérouilleur à aiguilles. Les nouvelles catégories séparent notamment les impulsions hydrauliques des chocs mécaniques.

## Conditions de calcul

- Les L/s sont convertis en L/min par multiplication par 60. Le contrôle CFM tient compte de la précision décimale publiée des deux valeurs ; une contradiction au-delà de leurs arrondis rejette la référence.
- Atlas Copco : la plus élevée des consommations documentées est retenue, avec sa phase visible (à vide, à puissance maximale, en charge ou consommation publiée). Le calcul ne moyenne pas ces phases et n’invente pas de cycle de travail.
- La pression de référence Atlas Copco est donnée page PDF 3, avec l’identité individuelle recoupée dans le catalogue. Les variantes basse pression et LUD ne font pas partie du lot. Pour les clés à impulsions, la pression nominale doit aussi figurer sur la fiche individuelle.
- Une pression maximale de 7 bar reste distincte du point de référence de 6,3 bar. Elle ne permet pas d’extrapoler un débit à 7 bar. Les cartes techniques affichent la pression de référence.
- Desoutter : le débit à vide de la fiche individuelle est contrôlé contre le tableau ou la note de famille des pages 296, 298, 302 et 304. La pression de 6,3 bar et sa tolérance de ±0,15 bar sont documentées page 345.
- Les flexibles Desoutter sont explicitement documentés pour 5 m. Aucune longueur n’est attribuée aux recommandations Atlas Copco qui n’en indiquent pas. Une indication composite de diamètre reste textuelle.
- Les données sont déclarées par les fabricants, sans essai physique CompatAir. Elles ne prouvent ni un stock français, ni un prix, ni le contenu de livraison d’un vendeur.

## Pages, preuve et reproductibilité

L’index généré conserve une collection brute typée `unknown`, validée par les schémas du catalogue avant utilisation. `Array.of<unknown>` évite que TypeScript construise une union de milliers de formes individuelles.

Les deux fonctions d’import reconstruisent intégralement les 500 objets publiés. Les tests contrôlent leur égalité, les MPN, l’unicité des profils, les unités, les données manquantes et les conditions de pression. Les cartes sont reproductibles avec `node scripts/render-industrial-catalog-cards.mjs`.

Chaque référence alimente sa fiche, sa page « quel compresseur pour », la recherche, les répertoires de marque et d’usage, le calculateur et les exports API/MCP. Les URL conservent le modèle exact normalisé. Les pages réutilisent le maillage vers les guides, les fiches liées et les comparaisons calculées. Le catalogue expose 420 879 combinaisons explorables, dont 418 250 verdicts fixes et 2 629 combinaisons paramétriques. Il ne produit pas de page HTML pour chaque couple.

Les 1 000 nouvelles preuves et les 500 observations MPN sont ajoutées à leurs historiques. Les photographies mensuelles antérieures restent inchangées.

## Volume et mémoire

Le build initial mesure 419 Mio, dont 114,4 Mio de HTML répartis sur 4 227 pages. Les plafonds d’artefact passent à 464 Mio au total et 128 Mio de HTML. Le catalogue du calculateur mesure 101 Kio gzip, sous un plafond de 104 Kio ; l’index de recherche mesure 74,8 Kio, sous un plafond de 80 Kio. Les budgets JavaScript initial, LCP et accessibilité restent inchangés. Le plafond du JavaScript total à la demande du seul calculateur passe de 57 à 58 Kio pour le chargement vérifié des suggestions et la gestion explicite des échecs (58 667 octets mesurés).

Le lecteur MCP partage les charges de calcul identiques derrière une classe à prototype unique, avec un cache borné à 20 000 entrées. Les identifiants compresseur et outil restent individuels. Les enregistrements atypiques, les extensions inconnues et les clés réservées conservent leur représentation d’origine. Le benchmark reconstruit le JSON complet depuis les recherches indexées et vérifie son empreinte, puis les réponses HTTP, sous le plafond de service existant de 256 Mio. Le moteur de calcul reste inchangé.

Le benchmark à 2 000 références restitue les 418 250 verdicts à l’identique avec un pic de 225,3 Mio. Le contrôle de rendu à 390 px ne montre aucun débordement horizontal sur la fiche Desoutter vérifiée ; le calculateur préremplit la référence Atlas Copco testée et restitue sa cible de 1 650 L/min avec la réserve de 25 %.

Les suggestions du calculateur sont servies séparément avec une empreinte SHA-256 vérifiée par le navigateur. Leur chargement commence après le premier affichage et précède tout préremplissage. Une indisponibilité, une empreinte incohérente ou un dépassement de délai bloque le calcul avec une erreur visible. Le HTML passe de 545 277 à 92 143 octets. Le contrôle Lighthouse ciblé mesure un LCP de 2,27 s, aucun décalage de mise en page et un score performance de 98/100.

Le contrôle des 1 186 URL de sources ne confirme aucun lien mort. Les 502 sources propres au nouveau lot répondent, dont deux après un second contrôle. Douze sources Metabo antérieures renvoient HTTP 502 lors des deux contrôles ; onze autres sources antérieures restent non vérifiables automatiquement. Ces états ne sont pas requalifiés en succès.
