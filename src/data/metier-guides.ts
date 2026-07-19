import type { GuideMetierId } from '../domain/editorial-taxonomy';

type MetierDecision = {
	title: string;
	description: string;
};

type MetierStep = {
	title: string;
	description: string;
	proof: string;
};

type MetierCheckpoint = {
	title: string;
	question: string;
	action: string;
};

type MetierScenario = {
	title: string;
	context: string;
	question: string;
	decision: string;
	toolId: string;
	toolLabel: string;
};

type MetierAirStage = {
	title: string;
	role: string;
	verify: string;
};

type MetierEvidence = {
	decision: string;
	required: string;
	source: string;
	whenMissing: string;
};

type MetierFieldStep = {
	moment: string;
	title: string;
	action: string;
	record: string;
};

type MetierSource = {
	label: string;
	url: string;
	scope: string;
};

export type MetierLongform = {
	readingTime: number;
	updatedAt: string;
	intro: string;
	scenarios: MetierScenario[];
	airPath: MetierAirStage[];
	evidence: MetierEvidence[];
	fieldPlan: MetierFieldStep[];
	sources: MetierSource[];
};

export type MetierGuideProfile = {
	verdict: string;
	verdictDetail: string;
	principles: string[];
	decisions: MetierDecision[];
	steps: MetierStep[];
	checkpoints: MetierCheckpoint[];
	boundary: string;
	longform?: MetierLongform;
};

export const metierGuideProfiles: Record<GuideMetierId, MetierGuideProfile> = {
	'garage-automobile': {
		verdict: 'Un garage ne se dimensionne ni sur la taille de la cuve, ni sur la puissance moteur affichée.',
		verdictDetail: 'La décision part de la référence de chaque outil, de sa pression de travail et de sa consommation publiée. Elle tient ensuite compte des usages qui peuvent réellement se chevaucher, du réseau et du débit restitué disponible au point de fonctionnement.',
		principles: ['Références exactes', 'Simultanéité réelle', 'Débit restitué', 'Pression au poste'],
		decisions: [
			{ title: 'Postes à alimenter', description: 'Distinguer les outils intermittents des usages longs, puis identifier ceux qui peuvent fonctionner au même moment dans l’organisation réelle de l’atelier.' },
			{ title: 'Débit à comparer', description: 'Comparer le besoin documenté au débit restitué du compresseur à la pression utile. Le débit aspiré ne répond pas à cette question.' },
			{ title: 'Réseau et flexibles', description: 'Vérifier que le diamètre, la longueur, les raccords et les enrouleurs ne rendent pas insuffisant un compresseur correctement dimensionné à sa sortie.' },
			{ title: 'Réserve opérationnelle', description: 'Conserver une marge explicite pour les écarts de documentation, les pertes et les extensions connues, sans la transformer en règle commerciale universelle.' },
		],
		steps: [
			{ title: 'Inventorier', description: 'Relever marque, modèle, MPN, pression et consommation de chaque outil réellement utilisé.', proof: 'Étiquette, notice ou fiche fabricant identifiée' },
			{ title: 'Décrire le travail', description: 'Noter la durée, la cadence et les chevauchements possibles par poste, sans inventer un taux d’usage générique.', proof: 'Séquence de travail déclarée par l’atelier' },
			{ title: 'Calculer le besoin', description: 'Additionner uniquement les usages simultanés et conserver séparément les hypothèses de durée ou de cadence.', proof: 'Calcul reproductible et hypothèses visibles' },
			{ title: 'Vérifier la machine', description: 'Lire le FAD au voisinage de la pression demandée et contrôler le cycle de service lorsqu’il est publié.', proof: 'Courbe ou valeur constructeur sourcée' },
			{ title: 'Mesurer au poste', description: 'Contrôler la pression pendant l’écoulement et observer la récupération en situation représentative.', proof: 'Mesure datée, matériel et protocole notés' },
		],
		checkpoints: [
			{ title: 'Clés à chocs et cliquets', question: 'La consommation publiée décrit-elle la charge, une moyenne ou une valeur maximale ?', action: 'Conserver le libellé exact du fabricant et vérifier la pression dynamique pendant l’effort.' },
			{ title: 'Ponçage et meulage', question: 'L’usage peut-il durer assez longtemps pour devenir le poste dimensionnant ?', action: 'Traiter la durée et le cycle de service avant de conclure sur une simple valeur instantanée.' },
			{ title: 'Gonflage et soufflage', question: 'Le besoin est-il un débit continu, une recharge ou une action brève ?', action: 'Séparer les scénarios et ne pas utiliser la cuve comme substitut à un débit restitué manquant.' },
			{ title: 'Plusieurs opérateurs', question: 'Quels postes peuvent réellement fonctionner ensemble ?', action: 'Construire au moins un scénario nominal et un scénario de pointe explicitement décrits.' },
		],
		boundary: 'Une page métier ne remplace pas la donnée de la référence. Si la pression, la consommation ou le débit restitué manque, le résultat reste indéterminé jusqu’à obtention d’une source ou d’une mesure exploitable.',
		longform: {
			readingTime: 18,
			updatedAt: '2026-07-19',
			intro: 'Un atelier peut réunir des outils à impulsion, des usages continus et des opérations de gonflage. Les additionner sans scénario produit un besoin artificiel. Les ignorer produit une installation fragile. Le dossier relie donc chaque poste à sa référence, chaque chevauchement à l’organisation réelle et chaque verdict à une mesure possible.',
			scenarios: [
				{
					title: 'Service roues et clé à chocs',
					context: 'La clé travaille par séquences courtes, mais le poste peut se répéter et partager le réseau avec un autre opérateur.',
					question: 'La pression reste-t-elle suffisante au raccord pendant l’effort, avec les autres postes réellement actifs ?',
					decision: 'Tester la référence exacte, décrire la coactivité puis comparer la pression au poste avec un point mesuré en amont.',
					toolId: 'chicago-pneumatic-cp7748',
					toolLabel: 'Tester la CP7748',
				},
				{
					title: 'Gonflage et contrôle de pression',
					context: 'Un pistolet de gonflage ne publie pas nécessairement un débit fixe. Le besoin dépend alors du volume, de la pression initiale, de la pression visée et du temps accepté.',
					question: 'Les paramètres de la roue et la durée cible sont-ils connus, au lieu d’être remplacés par une moyenne de catégorie ?',
					decision: 'Renseigner les paramètres transitoires dans le calculateur et conserver un résultat indéterminé lorsqu’un volume nécessaire manque.',
					toolId: 'einhell-4137000-manometre',
					toolLabel: 'Préparer un scénario de gonflage',
				},
				{
					title: 'Ponçage ou préparation prolongée',
					context: 'Un outil utilisé plusieurs minutes peut devenir le poste dimensionnant, même si une clé à chocs paraît plus spectaculaire.',
					question: 'Le compresseur tient-il le débit demandé pendant la durée prévue et dans son cycle de service documenté ?',
					decision: 'Traiter ce poste comme un besoin continu, puis vérifier séparément récupération, échauffement et pression en bout de flexible.',
					toolId: 'metabo-dsx-150',
					toolLabel: 'Tester la DSX 150',
				},
			],
			airPath: [
				{ title: 'Production', role: 'Fournir un débit restitué documenté à une pression comparable au besoin.', verify: 'Courbe FAD, cycle de service et conditions de publication.' },
				{ title: 'Traitement', role: 'Séparer les fonctions nécessaires sans confondre filtration, séchage et stockage.', verify: 'Composants identifiés, état et perte de charge observée.' },
				{ title: 'Distribution', role: 'Transporter le débit vers les zones de travail avec des restrictions maîtrisées.', verify: 'Plan du réseau, diamètres, longueurs, dérivations et enrouleurs.' },
				{ title: 'Poste', role: 'Réguler et raccorder l’outil dans sa configuration réelle.', verify: 'Flexible, raccord, régulateur et pression pendant l’écoulement.' },
				{ title: 'Usage', role: 'Produire le travail attendu selon une durée, une cadence et une coactivité déclarées.', verify: 'Référence, séquence d’usage et observation datée.' },
			],
			evidence: [
				{ decision: 'Besoin de chaque outil', required: 'Pression, consommation et mode de consommation', source: 'Notice ou fiche fabricant de la référence', whenMissing: 'Ne pas substituer une valeur de catégorie ou d’un modèle voisin.' },
				{ decision: 'Besoin de l’atelier', required: 'Durées, cadences et chevauchements possibles', source: 'Scénarios déclarés par l’atelier', whenMissing: 'Calculer des scénarios séparés plutôt qu’une simultanéité totale arbitraire.' },
				{ decision: 'Capacité du compresseur', required: 'Débit restitué à la pression utile et limite de service', source: 'Documentation constructeur actuelle', whenMissing: 'Conserver le verdict données insuffisantes.' },
				{ decision: 'Capacité du réseau', required: 'Pression sous débit aux points significatifs', source: 'Mesures comparables et datées', whenMissing: 'Localiser la restriction avant de relever la consigne du compresseur.' },
				{ decision: 'Validation du poste', required: 'Résultat sur une séquence représentative', source: 'Essai terrain consigné', whenMissing: 'Présenter la compatibilité documentaire comme non confirmée sur installation.' },
			],
			fieldPlan: [
				{ moment: 'Avant le calcul', title: 'Photographier et nommer', action: 'Relever les plaques, notices, raccords et organes traversés par chaque poste.', record: 'Référence, unité, source et date.' },
				{ moment: 'Avant l’achat', title: 'Rejouer les journées réelles', action: 'Décrire un scénario nominal, une pointe plausible et les usages qui ne se chevauchent jamais.', record: 'Outils actifs, durée, cadence et opérateurs.' },
				{ moment: 'À la réception', title: 'Contrôler la configuration', action: 'Comparer la machine, le traitement et les accessoires livrés avec la configuration étudiée.', record: 'Modèle exact, réglages et écarts constatés.' },
				{ moment: 'À la mise en service', title: 'Mesurer sous débit', action: 'Relever la pression en amont et au poste pendant une séquence représentative.', record: 'Points, instruments, conditions et résultats.' },
				{ moment: 'Après évolution', title: 'Recalculer au lieu de recopier', action: 'Rejouer le besoin lorsqu’un outil, un flexible, un poste ou l’organisation change.', record: 'Version du scénario et décision mise à jour.' },
			],
			sources: [
				{ label: 'INRS, fiches de poste garages automobiles et poids lourds', url: 'https://www.inrs.fr/metiers/commerce-service/garage/garage-fiches-de-poste.html', scope: 'Repérage des opérations et risques propres aux postes de mécanique, pneumatiques, tôlerie-peinture et soufflage.' },
				{ label: 'U.S. Department of Energy, Compressed Air Systems', url: 'https://www.energy.gov/cmei/ito/compressed-air-systems', scope: 'Approche système, profils de pression, qualité d’air, stockage, fuites et maintenance.' },
				{ label: 'Chicago Pneumatic, CP7748', url: 'https://tools.cp.com/en/products/impactwrenches/cp7748-sku8941077481', scope: 'Caractéristiques attribuées à la référence utilisée dans le scénario de clé à chocs.' },
				{ label: 'Einhell France, manomètre 4137000', url: 'https://www.einhell.fr/p/4137000-manometre/', scope: 'Référence de gonflage dont la fiche ne fournit pas un débit fixe exploitable.' },
			],
		},
	},
	'carrosserie-peinture': {
		verdict: 'La peinture exige de vérifier séparément quantité d’air, pression dynamique et qualité d’air.',
		verdictDetail: 'Un débit suffisant à la sortie du compresseur ne garantit pas la pression au pistolet ni l’absence d’eau, d’huile ou de particules. Le parcours doit suivre l’air jusqu’au point d’utilisation et documenter chaque fonction de traitement.',
		principles: ['Débit du pistolet', 'Pression dynamique', 'Traitement de l’air', 'Contrôle au point d’usage'],
		decisions: [
			{ title: 'Pistolet et réglage', description: 'Identifier la référence exacte, la technologie du pistolet et les conditions auxquelles le fabricant publie sa consommation et sa pression d’entrée.' },
			{ title: 'Continuité du débit', description: 'Vérifier que le compresseur tient la phase de pulvérisation considérée, sans déduire cette capacité du seul volume de cuve.' },
			{ title: 'Chaîne de traitement', description: 'Relier refroidissement, séparation, filtration, séchage et contrôle final à l’exigence du procédé, sans revendiquer une classe non mesurée.' },
			{ title: 'Distribution finale', description: 'Limiter et mesurer les pertes créées par la longueur, le diamètre, les raccords, les filtres et les régulateurs entre la production et le pistolet.' },
		],
		steps: [
			{ title: 'Identifier le procédé', description: 'Distinguer préparation, application, séchage et nettoyage, puis associer les équipements réellement utilisés.', proof: 'Procédé et références consignés' },
			{ title: 'Qualifier le besoin', description: 'Relever débit et pression d’entrée selon la documentation du pistolet, avec le réglage auquel ils s’appliquent.', proof: 'Notice ou fiche technique actuelle' },
			{ title: 'Tracer le parcours de l’air', description: 'Décrire chaque organe entre le compresseur et le point d’utilisation, y compris les éléments temporaires.', proof: 'Schéma de distribution et composants identifiés' },
			{ title: 'Vérifier le débit disponible', description: 'Comparer le besoin au FAD documenté à la pression utile et intégrer les usages simultanés réellement possibles.', proof: 'Calcul reproductible, données attribuées' },
			{ title: 'Contrôler la sortie', description: 'Mesurer la pression pendant le débit et vérifier la qualité d’air avec une méthode adaptée au défaut recherché.', proof: 'Contrôle daté au point d’usage' },
		],
		checkpoints: [
			{ title: 'Pression au pistolet', question: 'La pression est-elle lue pendant que l’air circule ?', action: 'Mesurer en condition dynamique avec le réglage de travail, pas seulement circuit fermé.' },
			{ title: 'Eau et point de rosée', question: 'La maîtrise de l’humidité est-elle démontrée ou seulement supposée ?', action: 'Relier le traitement installé à une mesure ou à une exigence documentaire explicite.' },
			{ title: 'Huile et particules', question: 'Les filtres présents répondent-ils au défaut et au niveau de qualité recherchés ?', action: 'Identifier leur fonction, leur état, leur perte de charge et le protocole de contrôle.' },
			{ title: 'Phase de pulvérisation', question: 'Le scénario couvre-t-il la durée et les autres consommateurs simultanés ?', action: 'Tester une séquence représentative et consigner les variations de pression.' },
		],
		boundary: 'CompatAir peut structurer la décision et comparer des données publiées. Le site ne certifie pas une qualité d’air au point d’usage sans mesure adaptée et ne remplace ni la notice du produit appliqué, ni les exigences du procédé de peinture.',
		longform: {
			readingTime: 20,
			updatedAt: '2026-07-19',
			intro: 'Dans un atelier de carrosserie, la production d’air, sa distribution, sa pureté et la ventilation du procédé répondent à des preuves différentes. Une machine capable d’alimenter un pistolet ne démontre ni la pression réellement disponible à sa gâchette, ni la qualité de l’air, ni la maîtrise des risques liés au poste de peinture.',
			scenarios: [
				{
					title: 'Pulvérisation avec un pistolet HVLP identifié',
					context: 'La technologie HVLP ne fournit pas un débit universel. Le modèle exact, son réglage et sa pression d’entrée restent déterminants.',
					question: 'Le FAD disponible couvre-t-il la référence pendant la phase réelle de pulvérisation, avec la pression vérifiée au pistolet ?',
					decision: 'Comparer le besoin publié du pistolet au compresseur, puis contrôler la pression dynamique après le traitement et le flexible.',
					toolId: 'abac-g-550f',
					toolLabel: 'Tester le G-550F',
				},
				{
					title: 'Retouche avec un pistolet LVLP identifié',
					context: 'Un besoin inférieur sur une référence précise peut changer le choix de production, sans autoriser une généralisation à toute la famille LVLP.',
					question: 'La comparaison conserve-t-elle le modèle, la pression et la source au lieu de classer les technologies par sigle ?',
					decision: 'Comparer la référence séparément, puis vérifier que la chaîne de traitement reste dimensionnée pour son débit réel.',
					toolId: 'metabo-fsp-600-lvlp',
					toolLabel: 'Tester le FSP 600 LVLP',
				},
				{
					title: 'Ponçage continu avant mise en peinture',
					context: 'Le ponçage peut partager la production avec la préparation ou une autre zone et devenir le besoin continu dominant.',
					question: 'Le scénario sépare-t-il alimentation pneumatique, aspiration des poussières et ventilation du local ?',
					decision: 'Calculer le débit de l’outil, valider son réseau d’air et traiter la maîtrise des poussières dans un circuit de preuve distinct.',
					toolId: 'metabo-dsx-150',
					toolLabel: 'Tester la DSX 150',
				},
			],
			airPath: [
				{ title: 'Production', role: 'Fournir le débit restitué nécessaire aux usages réellement simultanés.', verify: 'FAD publié à une pression comparable et limite de service.' },
				{ title: 'Refroidissement et séparation', role: 'Évacuer les condensats formés sans revendiquer une pureté finale.', verify: 'Fonction de chaque organe, purge et conditions de fonctionnement.' },
				{ title: 'Séchage et filtration', role: 'Répondre à une exigence attribuée pour l’eau, l’huile et les particules.', verify: 'Exigence du procédé, capacité, entretien et méthode de contrôle.' },
				{ title: 'Distribution dédiée', role: 'Acheminer l’air traité sans recréer une restriction ou une contamination non maîtrisée.', verify: 'Matériaux, dérivations, pertes de charge et état du réseau.' },
				{ title: 'Point d’usage', role: 'Réguler, mesurer et raccorder le pistolet dans sa configuration de travail.', verify: 'Pression dynamique, flexible, raccords et contrôle qualité adapté.' },
			],
			evidence: [
				{ decision: 'Débit du pistolet', required: 'Consommation, pression et réglage publiés pour le modèle', source: 'Fiche ou notice fabricant', whenMissing: 'Ne pas appliquer une valeur HVLP ou LVLP générique.' },
				{ decision: 'Qualité d’air requise', required: 'Niveau demandé pour particules, eau et huile', source: 'Procédé, produit appliqué ou cahier des charges', whenMissing: 'Décrire le traitement sans annoncer une classe de conformité.' },
				{ decision: 'Traitement installé', required: 'Fonction, capacité et entretien de chaque organe', source: 'Notices des composants et dossier de maintenance', whenMissing: 'Ne pas considérer le mot filtre ou sécheur comme une preuve suffisante.' },
				{ decision: 'Pression disponible', required: 'Pression au raccord pendant la pulvérisation', source: 'Mesure dynamique datée', whenMissing: 'La pression réglée à vide ne valide pas le poste.' },
				{ decision: 'Résultat au point d’usage', required: 'Contrôle adapté au défaut recherché', source: 'Méthode, instrument et résultat consignés', whenMissing: 'Aucune pureté finale ni conformité de procédé n’est revendiquée.' },
			],
			fieldPlan: [
				{ moment: 'Cadrage', title: 'Décrire le procédé', action: 'Séparer préparation, pulvérisation, nettoyage du matériel, séchage et ponçage.', record: 'Produits, postes, références et exigences associées.' },
				{ moment: 'Dimensionnement', title: 'Tracer les trois exigences', action: 'Calculer le débit, fixer la pression dynamique et identifier séparément la qualité d’air demandée.', record: 'Source et statut de chaque exigence.' },
				{ moment: 'Conception', title: 'Dessiner la chaîne complète', action: 'Positionner production, séparation, séchage, filtration, distribution, régulation et contrôle final.', record: 'Schéma, composants et fonctions déclarées.' },
				{ moment: 'Mise en service', title: 'Tester au point d’usage', action: 'Mesurer pendant une phase représentative et rechercher chaque défaut avec une méthode adaptée.', record: 'Conditions, instruments, résultats et limites.' },
				{ moment: 'Exploitation', title: 'Conserver l’historique', action: 'Relier entretien, changement de filtre, purge, dérive et nouveau contrôle.', record: 'Avant, action, après et prochaine vérification.' },
			],
			sources: [
				{ label: 'INRS, Carrosserie, guide pratique de ventilation n° 24', url: 'https://www.inrs.fr/media.html?refINRS=ED+6406', scope: 'Prévention des risques liés aux agents chimiques par la ventilation en carrosserie-réparation de véhicules légers.' },
				{ label: 'ISO, ISO 8573-1:2010', url: 'https://www.iso.org/fr/standard/46418.html', scope: 'Classement séparé des polluants et classes de pureté de l’air comprimé.' },
				{ label: 'ABAC, pistolet G-550F', url: 'https://shop.abacaircompressors.com/en-GB/products/2809913544/paint-spray-gun-g-550f', scope: 'Caractéristiques attribuées au pistolet HVLP utilisé dans le scénario.' },
				{ label: 'Metabo, FSP 600 LVLP', url: 'https://de.metabo.com/de/maschinen/druckluft/druckluft-werkzeuge/druckluft-farbspritzpistolen/fsp-600-lvlp-601578000-druckluft-farbspritzpistole.html', scope: 'Caractéristiques attribuées au pistolet LVLP utilisé dans le scénario.' },
			],
		},
	},
	'menuiserie-agencement': {
		verdict: 'Le clouage, la finition et les usages continus doivent être dimensionnés comme des besoins différents.',
		verdictDetail: 'Un volume d’air par tir ne se compare pas directement à une consommation continue. La cadence doit rester une hypothèse visible, tandis que ponçage, soufflage ou finition peuvent imposer un scénario complètement différent.',
		principles: ['Volume par action', 'Cadence déclarée', 'Usages continus', 'Qualité de finition'],
		decisions: [
			{ title: 'Mode de consommation', description: 'Distinguer la consommation par action, le débit en charge et le besoin de pointe au lieu de les ramener silencieusement à une même grandeur.' },
			{ title: 'Cadence de production', description: 'Décrire la cadence réellement visée et les postes qui peuvent se chevaucher. Une cadence supposée doit rester modifiable dans le calcul.' },
			{ title: 'Finition et propreté', description: 'Séparer les exigences de clouage de celles de la finition, de la pulvérisation ou des équipements sensibles à l’humidité et aux particules.' },
			{ title: 'Évolution de l’atelier', description: 'Documenter les postes prévus et la distribution future sans surdimensionner sur une liste d’achats encore indéterminée.' },
		],
		steps: [
			{ title: 'Classer les opérations', description: 'Séparer assemblage, clouage, agrafage, finition, nettoyage et usages d’atelier.', proof: 'Liste d’opérations et références associées' },
			{ title: 'Conserver l’unité source', description: 'Garder volume par tir, débit en charge ou pression tels qu’ils sont publiés avant toute conversion.', proof: 'Valeur, unité et contexte attribués' },
			{ title: 'Déclarer la cadence', description: 'Convertir un volume par action uniquement avec une cadence explicite et adaptée au scénario étudié.', proof: 'Hypothèse visible et recalculable' },
			{ title: 'Tester les chevauchements', description: 'Additionner les postes seulement lorsqu’ils peuvent réellement fonctionner ensemble.', proof: 'Scénarios nominal et de pointe décrits' },
			{ title: 'Valider la distribution', description: 'Mesurer la pression au poste le plus défavorable et contrôler la récupération sur une séquence représentative.', proof: 'Mesure au point d’usage consignée' },
		],
		checkpoints: [
			{ title: 'Cloueurs et agrafeuses', question: 'La documentation publie-t-elle un volume par action ou un débit ?', action: 'Ne convertir qu’avec une cadence déclarée et conserver la pointe instantanée comme limite séparée.' },
			{ title: 'Ponçage pneumatique', question: 'Le poste est-il continu et simultané avec d’autres opérations ?', action: 'Le traiter séparément des outils à impulsion et vérifier le cycle de service de la production.' },
			{ title: 'Finition', question: 'Le réseau de finition partage-t-il l’air avec des usages susceptibles de perturber pression ou qualité ?', action: 'Cartographier les branches, les traitements et les scénarios de coactivité.' },
			{ title: 'Nettoyage', question: 'Le nettoyage est-il modélisé comme une opération définie ?', action: 'Décrire l’équipement, le temps et l’alternative prévue au lieu d’ajouter un forfait d’air arbitraire.' },
		],
		boundary: 'Le métier ne fournit aucune consommation moyenne universelle. Chaque conversion dépend de la référence, de l’unité publiée et d’une cadence déclarée. Une hypothèse utile reste présentée comme une hypothèse.',
	},
	'maintenance-industrielle': {
		verdict: 'En maintenance, la qualité de la décision dépend autant de la traçabilité que du calcul initial.',
		verdictDetail: 'Le besoin évolue avec les équipements, les fuites, les horaires et les modes dégradés. Le bon référentiel relie les actifs, les valeurs publiées, les mesures, les arbitrages et la date de chaque vérification.',
		principles: ['Inventaire des actifs', 'Scénarios de charge', 'Mesures datées', 'Historique des décisions'],
		decisions: [
			{ title: 'Périmètre critique', description: 'Identifier les usages dont l’arrêt, la chute de pression ou la dégradation de qualité a une conséquence opérationnelle particulière.' },
			{ title: 'Charge et séquencement', description: 'Décrire les régimes normaux, les pointes, les secours et les règles de séquencement sans confondre puissance installée et débit disponible.' },
			{ title: 'Pertes et dérives', description: 'Suivre les écarts de pression, les fuites et les changements de profil dans le temps avec des mesures comparables et datées.' },
			{ title: 'Preuve de maintenance', description: 'Conserver la source, l’intervention, la mesure avant et après, puis l’impact sur la décision technique.' },
		],
		steps: [
			{ title: 'Cartographier', description: 'Relier chaque consommateur, branche, organe de traitement et moyen de production à un identifiant stable.', proof: 'Inventaire versionné et schéma du réseau' },
			{ title: 'Établir la ligne de base', description: 'Documenter les scénarios de charge et les mesures de référence avant de qualifier une dérive.', proof: 'Période, instruments et conditions consignés' },
			{ title: 'Comparer aux sources', description: 'Séparer les caractéristiques fabricant, les hypothèses d’exploitation et les mesures terrain.', proof: 'Provenance explicite pour chaque valeur' },
			{ title: 'Arbitrer', description: 'Publier la règle appliquée lorsqu’une source, une mesure ou une configuration se contredit.', proof: 'Décision, limite et responsable identifiés' },
			{ title: 'Recontrôler', description: 'Mesurer après intervention et conserver l’historique au lieu d’écraser la ligne de base.', proof: 'Avant, après et date de vérification' },
		],
		checkpoints: [
			{ title: 'Ligne de base', question: 'Les conditions de mesure permettent-elles une comparaison future ?', action: 'Conserver période, charge, pression, instruments, emplacement et état du réseau.' },
			{ title: 'Fuites', question: 'Le constat est-il localisé et quantifié par une méthode reproductible ?', action: 'Séparer détection, estimation et mesure, puis vérifier l’effet de la correction.' },
			{ title: 'Séquençage', question: 'Les compresseurs et équipements de traitement répondent-ils au même scénario ?', action: 'Documenter les consignes, les priorités, les secours et les limites de chaque régime.' },
			{ title: 'Changement d’actif', question: 'Une nouvelle référence modifie-t-elle le besoin, la qualité ou le point de contrôle ?', action: 'Rejouer la décision avec la nouvelle source au lieu de recopier la valeur de l’équipement remplacé.' },
		],
		boundary: 'Un historique ne prouve pas à lui seul la performance actuelle. Chaque conclusion doit rester reliée à une période, un état du réseau et une méthode de mesure. Une dérive non mesurée ne reçoit pas de valeur artificielle.',
	},
};
