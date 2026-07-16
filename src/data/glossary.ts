export const glossarySources = {
	cagi: {
		label: 'CAGI, glossaire de l’air comprimé',
		url: 'https://www.cagi.org/resource-library',
	},
	cagiVerification: {
		label: 'CAGI, Performance Verification Program',
		url: 'https://www.cagi.org/performance-verification',
	},
	atlas: {
		label: 'Atlas Copco, Compressed Air Manual, 9e édition',
		url: 'https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf',
	},
	doe: {
		label: 'U.S. Department of Energy, Improving Compressed Air System Performance',
		url: 'https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf',
	},
	iso: {
		label: 'ISO, ISO 8573-1:2010',
		url: 'https://www.iso.org/fr/standard/46418.html',
	},
	nist: {
		label: 'NIST, Guide for the Use of the International System of Units',
		url: 'https://physics.nist.gov/cuu/pdf/sp811.pdf',
	},
	nasa: {
		label: 'NASA Glenn Research Center, Ideal Gases under Constant Volume',
		url: 'https://www.grc.nasa.gov/WWW/K-12/Numbers/Math/Mathematical_Thinking_ppc/ideal_gases_under_constant.htm',
	},
	method: {
		label: 'Méthodologie CompatAir',
		url: '/methodologie/',
	},
	cp: {
		label: 'Chicago Pneumatic, fiche officielle CP7748',
		url: 'https://tools.cp.com/fr-fr/products/impactwrenches/cp7748-sku8941077481',
	},
	sata: {
		label: 'SATA, données techniques SATAjet 5000 B HVLP',
		url: 'https://www.sata.com/en-us/satajet-5000-b-hvlp-nozzle-1.3-rps-multi-purpose-cup-0.3-l-0.6-l-0.9-l-each-1x-swivel-joint/210765',
	},
	einhellManual: {
		label: 'Einhell, notice TC-PN 50',
		url: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf',
	},
	atlasPiping: {
		label: 'Atlas Copco, dimensionnement des canalisations d’air comprimé',
		url: 'https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe',
	},
} as const;

export type GlossarySourceKey = keyof typeof glossarySources;

export type GlossaryTerm = {
	term: string;
	slug: string;
	definition: string;
	source: GlossarySourceKey;
	related?: { label: string; href: string };
};

export const glossaryTerms: GlossaryTerm[] = [
	{ term: 'Aftercooler', slug: 'aftercooler', definition: 'Échangeur qui refroidit l’air à la sortie du compresseur. Le refroidissement peut faire condenser une partie de l’eau, ensuite séparée en aval.', source: 'cagi', related: { label: 'Condensats et entretien', href: '/guides/entretien-compresseur-purge-condensats/' } },
	{ term: 'Air libre', slug: 'air-libre', definition: 'Air considéré aux conditions atmosphériques d’un lieu déterminé, avant l’effet du compresseur. Les conditions de référence doivent être précisées pour comparer des débits.', source: 'cagi' },
	{ term: 'Atmosphère standard', slug: 'atmosphere-standard', definition: 'Unité de pression définie exactement à 101 325 pascals, soit 1,01325 bar. CompatAir utilise cette valeur de référence pour exprimer le volume d’air libre équivalent du calcul de gonflage.', source: 'nist', related: { label: 'Calculer un gonflage', href: '/guides/compresseur-pour-gonfler-pneus/' } },
	{ term: 'Bar', slug: 'bar', definition: 'Unité de pression non SI couramment utilisée pour l’air comprimé. Un bar vaut exactement 100 000 pascals, soit 100 kPa.', source: 'nist', related: { label: 'Comprendre bar, psi et pression', href: '/guides/bar-psi-pression-absolue-relative/' } },
	{ term: 'Boucle de réseau', slug: 'boucle-reseau', definition: 'Architecture de distribution dans laquelle la conduite principale forme une boucle. Les points d’utilisation peuvent alors être alimentés par plusieurs directions, selon la configuration du réseau.', source: 'atlasPiping', related: { label: 'Installer un réseau d’atelier', href: '/guides/installer-reseau-air-comprime-atelier/' } },
	{ term: 'Capacité réelle', slug: 'capacite-reelle', definition: 'Quantité d’air effectivement comprimée et délivrée dans les conditions nominales. Le CAGI rapproche cette notion du Free Air Delivered.', source: 'cagi' },
	{ term: 'CFM', slug: 'cfm', definition: 'Cubic feet per minute, unité de débit volumique utilisée dans les documentations anglo-saxonnes. Une valeur en CFM n’est comparable que si ses conditions de référence sont connues.', source: 'cagi', related: { label: 'Conversions et conditions', href: '/guides/bar-psi-pression-absolue-relative/' } },
	{ term: 'Chute de pression', slug: 'chute-pression', definition: 'Réduction de pression produite par les frottements ou une restriction dans un composant ou un réseau d’air comprimé.', source: 'cagi', related: { label: 'Diagnostiquer une chute de pression', href: '/guides/diagnostiquer-chute-pression-air-comprime/' } },
	{ term: 'Compresseur alternatif', slug: 'compresseur-alternatif', definition: 'Compresseur dans lequel un piston effectue un mouvement alternatif dans un cylindre pour comprimer l’air.', source: 'cagi' },
	{ term: 'Compresseur d’appoint', slug: 'compresseur-appoint', definition: 'Dans une centrale séquencée, machine chargée de suivre la part variable de la demande tandis que les compresseurs de base peuvent fonctionner à pleine charge. Le guide DOE emploie aussi le terme anglais « trim compressor ».', source: 'doe', related: { label: 'Séquencer plusieurs compresseurs', href: '/guides/sequencer-plusieurs-compresseurs/' } },
	{ term: 'Compresseur volumétrique', slug: 'compresseur-volumetrique', definition: 'Famille de compresseurs qui enferment successivement des volumes de gaz puis réduisent mécaniquement leur volume. Elle comprend des technologies alternatives et rotatives.', source: 'cagi' },
	{ term: 'Consommation en charge', slug: 'consommation-en-charge', definition: 'Consommation publiée pendant le fonctionnement sous charge d’un outil. Ce libellé doit rester attaché à la référence et aux conditions du fabricant, sans être remplacé par une consommation moyenne.', source: 'cp', related: { label: 'Dimensionner un garage automobile', href: '/guides/dimensionner-compresseur-garage-automobile/' } },
	{ term: 'Condensat', slug: 'condensat', definition: 'Liquide formé lorsque la vapeur d’eau contenue dans l’air se condense pendant le refroidissement ou dans le réseau. Sa gestion dépend de l’installation et des règles applicables.', source: 'atlas', related: { label: 'Purge et contrôles', href: '/guides/entretien-compresseur-purge-condensats/' } },
	{ term: 'Coupleur rapide', slug: 'coupleur-rapide', definition: 'Raccord permettant de connecter et déconnecter rapidement un flexible ou un outil. Son passage interne et son état peuvent contribuer à la chute de pression.', source: 'atlas', related: { label: 'Flexible et raccords', href: '/guides/diametre-longueur-flexible-air-comprime/' } },
	{ term: 'Cuve', slug: 'cuve', definition: 'Récipient qui stocke du gaz sous pression. Un réseau peut utiliser des réservoirs primaires et secondaires. La cuve amortit une demande, mais ne crée pas de débit continu.', source: 'cagi', related: { label: 'Rôle du volume de cuve', href: '/guides/choisir-volume-cuve-24-50-90-litres/' } },
	{ term: 'Cycle de service', slug: 'cycle-service', definition: 'Part du temps pendant laquelle un équipement peut fonctionner dans les conditions définies par son fabricant. Sa valeur et sa période de référence doivent provenir de la notice du modèle.', source: 'atlas' },
	{ term: 'Débit aspiré', slug: 'debit-aspire', definition: 'Débit entrant dans le compresseur ou son filtre d’admission dans des conditions données. Il ne décrit pas directement le débit utile disponible sous pression.', source: 'cagi', related: { label: 'Débit aspiré ou FAD', href: '/guides/debit-restitue-fad-vs-debit-aspire/' } },
	{ term: 'Débit restitué', slug: 'debit-restitue', definition: 'Débit effectivement délivré par le compresseur, exprimé selon des conditions identifiées. C’est la donnée à rapprocher du besoin d’un outil à pression comparable.', source: 'cagi', related: { label: 'Comparer les débits restitués', href: '/guides/comparatif-compresseurs-debit-restitue/' } },
	{ term: 'Demande artificielle', slug: 'demande-artificielle', definition: 'Consommation supplémentaire créée par une pression du réseau supérieure au besoin réel, notamment sur les usages non régulés et les fuites.', source: 'doe', related: { label: 'Profil de pression', href: '/guides/diagnostiquer-chute-pression-air-comprime/' } },
	{ term: 'Dessiccant', slug: 'dessiccant', definition: 'Matériau utilisé pour retenir l’humidité. Dans un sécheur par adsorption, sa surface poreuse attire l’eau et peut être régénérée selon la technologie.', source: 'cagi', related: { label: 'Point de rosée et sécheurs', href: '/guides/point-rosee-secheur-filtre-air-comprime/' } },
	{ term: 'Extrapolation', slug: 'extrapolation', definition: 'Estimation effectuée en dehors de la plage couverte par les points connus. CompatAir ne prolonge pas une courbe constructeur hors de sa plage documentée.', source: 'method', related: { label: 'Règles du calculateur', href: '/methodologie/' } },
	{ term: 'FAD', slug: 'fad', definition: 'Free Air Delivered. Désignation anglaise du débit d’air libre effectivement délivré, rattaché à des conditions de référence et de mesure.', source: 'cagi', related: { label: 'Guide complet du FAD', href: '/guides/debit-restitue-fad-vs-debit-aspire/' } },
	{ term: 'Facteur de simultanéité', slug: 'facteur-simultaneite', definition: 'Élément d’étude qui traduit le nombre de consommateurs susceptibles de fonctionner en même temps. Il doit être fondé sur le profil réel d’utilisation.', source: 'atlas', related: { label: 'Plusieurs outils', href: '/guides/utiliser-plusieurs-outils-pneumatiques/' } },
	{ term: 'Filtre', slug: 'filtre', definition: 'Dispositif qui sépare des particules, de l’humidité liquide ou du lubrifiant entraîné selon sa conception. Un filtre ne réduit pas à lui seul la vapeur d’eau ni le point de rosée sous pression.', source: 'cagi', related: { label: 'Qualité de l’air comprimé', href: '/guides/qualite-air-comprime-iso-8573-1/' } },
	{ term: 'FRL', slug: 'frl', definition: 'Ensemble filtre, régulateur et lubrificateur placé au voisinage d’un usage lorsque ces trois fonctions sont requises. Chaque composant peut ajouter une perte de charge.', source: 'doe' },
	{ term: 'Fuite', slug: 'fuite', definition: 'Écoulement involontaire d’air comprimé vers une zone de pression plus basse. Une fuite augmente la demande et peut abaisser la pression disponible.', source: 'doe', related: { label: 'Détecter et mesurer les fuites', href: '/guides/detecter-mesurer-fuites-air-comprime/' } },
	{ term: 'Humidité relative', slug: 'humidite-relative', definition: 'Rapport entre la pression partielle de vapeur d’eau et la pression de vapeur saturante à la température considérée.', source: 'cagi' },
	{ term: 'Interpolation', slug: 'interpolation', definition: 'Calcul d’une valeur entre deux points documentés. CompatAir emploie une interpolation linéaire uniquement à l’intérieur d’une courbe publiée et indique qu’il s’agit d’un calcul.', source: 'method', related: { label: 'Méthodologie', href: '/methodologie/' } },
	{ term: 'ISO 8573-1', slug: 'iso-8573-1', definition: 'Norme qui spécifie des classes de pureté de l’air comprimé pour les particules, l’eau et l’huile. Elle identifie aussi d’autres familles de contaminants.', source: 'iso', related: { label: 'Lire ISO 8573-1', href: '/guides/qualite-air-comprime-iso-8573-1/' } },
	{ term: 'L/min', slug: 'litre-par-minute', definition: 'Litre par minute, unité de débit volumique. Une valeur seule reste incomplète si la pression et les conditions auxquelles elle s’applique ne sont pas indiquées.', source: 'cagi' },
	{ term: 'Loi des gaz parfaits', slug: 'loi-gaz-parfaits', definition: 'Relation d’état entre pression, volume, quantité de matière et température pour un gaz idéal. Son emploi pour le gonflage reste une approximation qui suppose notamment une température et un volume constants.', source: 'nasa', related: { label: 'Méthode de gonflage', href: '/methodologie/' } },
	{ term: 'Ligne de base', slug: 'ligne-base', definition: 'État initial documenté avant une action corrective. Les mesures réalisées après l’action sont comparées à cette référence dans des conditions décrites.', source: 'doe', related: { label: 'Maintenance préventive du réseau', href: '/guides/maintenance-preventive-reseau-air-comprime/' } },
	{ term: 'Marche à vide', slug: 'marche-a-vide', definition: 'État dans lequel un compresseur entraîné reste en fonctionnement sans délivrer de débit utile. La puissance absorbée dans cet état dépend de la machine et de sa stratégie de commande.', source: 'doe', related: { label: 'Mesurer charge et marche à vide', href: '/guides/mesurer-temps-charge-vide-compresseur/' } },
	{ term: 'Marge indicative CompatAir', slug: 'marge-compatair', definition: 'Réserve de débit réglable, fixée à 25 % par défaut. Elle est affichée séparément du besoin publié et ne constitue pas une prescription universelle du fabricant.', source: 'method', related: { label: 'Méthode de dimensionnement', href: '/guides/guide-complet-dimensionner-compresseur-air/' } },
	{ term: 'Point de rosée sous pression', slug: 'point-rosee-pression', definition: 'Température à laquelle l’eau commence à condenser dans l’air à une pression donnée. Elle doit être distinguée du point de rosée aux conditions atmosphériques.', source: 'cagi', related: { label: 'Choisir le traitement d’air', href: '/guides/point-rosee-secheur-filtre-air-comprime/' } },
	{ term: 'Pression absolue', slug: 'pression-absolue', definition: 'Pression mesurée à partir du vide absolu. Elle intègre donc la pression atmosphérique locale.', source: 'cagi', related: { label: 'Pression absolue et relative', href: '/guides/bar-psi-pression-absolue-relative/' } },
	{ term: 'Pression de travail', slug: 'pression-travail', definition: 'Pression requise au point d’utilisation pour qu’un outil ou un procédé fonctionne dans les conditions publiées.', source: 'atlas', related: { label: 'Pourquoi 6,3 bar', href: '/guides/pression-travail-6-3-bar-outils-pneumatiques/' } },
	{ term: 'Pression dynamique à l’entrée', slug: 'pression-dynamique', definition: 'Pression à l’entrée d’un outil pendant que l’air circule. SATA emploie cette grandeur pour la pression d’entrée recommandée de ses pistolets documentés.', source: 'sata', related: { label: 'Air comprimé en carrosserie', href: '/guides/air-comprime-carrosserie-peinture/' } },
	{ term: 'Pression maximale', slug: 'pression-maximale', definition: 'Limite supérieure annoncée pour un équipement. Elle ne prouve ni le débit disponible à cette pression, ni la capacité à alimenter un outil en continu.', source: 'atlas', related: { label: 'Dimensionner sans raccourci', href: '/guides/guide-complet-dimensionner-compresseur-air/' } },
	{ term: 'Pression relative', slug: 'pression-relative', definition: 'Pression mesurée par rapport à la pression atmosphérique. La plupart des manomètres usuels affichent cette différence.', source: 'cagi', related: { label: 'Bar, psi et références', href: '/guides/bar-psi-pression-absolue-relative/' } },
	{ term: 'Profil de demande', slug: 'profil-demande', definition: 'Évolution du débit demandé au cours du temps. Il révèle les pointes, les charges intermittentes et les périodes sans consommation productive.', source: 'doe', related: { label: 'Mesurer le réseau', href: '/guides/diagnostiquer-chute-pression-air-comprime/' } },
	{ term: 'Profil de pression', slug: 'profil-pression', definition: 'Relevé de pression en plusieurs points du système, à un instant ou dans le temps, utilisé pour localiser les pertes et comprendre le fonctionnement du réseau.', source: 'doe', related: { label: 'Construire un profil de pression', href: '/guides/diagnostiquer-chute-pression-air-comprime/' } },
	{ term: 'PSI', slug: 'psi', definition: 'Pound-force per square inch, unité anglo-saxonne de pression. Un psi vaut 6,894 757 kPa selon les facteurs de conversion du NIST.', source: 'nist', related: { label: 'Convertir sans confondre', href: '/guides/bar-psi-pression-absolue-relative/' } },
	{ term: 'Puissance à débit nul', slug: 'puissance-debit-nul', definition: 'Puissance totale absorbée par le package lorsque le débit délivré est nul dans les conditions de la fiche. Les formulaires CAGI la publient séparément de la puissance à capacité nominale.', source: 'cagiVerification', related: { label: 'Comparer les performances CAGI', href: '/guides/comparer-puissance-specifique-compresseurs/' } },
	{ term: 'Régulateur de pression', slug: 'regulateur-pression', definition: 'Dispositif qui maintient une pression aval adaptée à l’usage dans sa plage de fonctionnement. Il ne compense pas un débit amont insuffisant.', source: 'atlas' },
	{ term: 'Sécheur', slug: 'secheur', definition: 'Équipement destiné à réduire la teneur en vapeur d’eau de l’air comprimé. Sa technologie se choisit à partir du point de rosée requis et des conditions de service.', source: 'atlas', related: { label: 'Point de rosée et séchage', href: '/guides/point-rosee-secheur-filtre-air-comprime/' } },
	{ term: 'Séparateur d’eau', slug: 'separateur-eau', definition: 'Équipement qui retire de l’eau liquide entraînée dans le flux. Il ne remplace pas un sécheur lorsque la vapeur d’eau doit être réduite.', source: 'cagi' },
	{ term: 'Puissance spécifique', slug: 'specific-power', definition: 'Rapport entre la puissance totale absorbée par le package et la capacité délivrée au même point de pression. La comparaison exige des unités, des conditions et un périmètre identiques.', source: 'cagiVerification', related: { label: 'Comparer la puissance spécifique', href: '/guides/comparer-puissance-specifique-compresseurs/' } },
	{ term: 'Stockage primaire', slug: 'stockage-primaire', definition: 'Réserve placée côté production pour absorber les fluctuations de demande et soutenir la stratégie de commande. Son volume, sa plage de pression et sa position se dimensionnent ensemble.', source: 'doe', related: { label: 'Placer le stockage d’air', href: '/guides/stockage-primaire-secondaire-air-comprime/' } },
	{ term: 'Stockage secondaire', slug: 'stockage-secondaire', definition: 'Réserve locale destinée à soutenir une charge intermittente ou critique près de son point d’utilisation. Sa recharge doit être étudiée afin de ne pas recréer une pointe sur le réseau.', source: 'doe', related: { label: 'Placer le stockage d’air', href: '/guides/stockage-primaire-secondaire-air-comprime/' } },
	{ term: 'Plage de pression', slug: 'plage-pression', definition: 'Écart entre les pressions minimale et maximale de régulation d’un compresseur, souvent décrit par les seuils de démarrage et d’arrêt ou de charge et décharge.', source: 'cagi' },
	{ term: 'Volume d’air par action', slug: 'volume-par-action', definition: 'Quantité d’air publiée pour une action unitaire, par exemple un tir. Sa conversion en débit moyen exige une cadence explicite et ne décrit pas à elle seule la pointe instantanée.', source: 'einhellManual', related: { label: 'Dimensionner le clouage et l’agrafage', href: '/guides/dimensionner-compresseur-menuiserie-agencement/' } },
];
