import type { GuideMetierId } from '../domain/editorial-taxonomy';
import type { TradeScenarioId } from '../domain/trade-scenario-prefill';

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
	presetId: TradeScenarioId;
	context: string;
	question: string;
	decision: string;
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
					presetId: 'garage-service-roues',
					context: 'La clé travaille par séquences courtes, mais le poste peut se répéter et partager le réseau avec un autre opérateur.',
					question: 'La pression reste-t-elle suffisante au raccord pendant l’effort, avec les autres postes réellement actifs ?',
					decision: 'Tester la référence exacte, décrire la coactivité puis comparer la pression au poste avec un point mesuré en amont.',
					toolLabel: 'Tester la CP7748',
				},
				{
					presetId: 'garage-gonflage-temporise',
					context: 'Un pistolet de gonflage ne publie pas nécessairement un débit fixe. Le besoin dépend alors du volume, de la pression initiale, de la pression visée et du temps accepté.',
					question: 'Les paramètres de la roue et la durée cible sont-ils connus, au lieu d’être remplacés par une moyenne de catégorie ?',
					decision: 'Renseigner les paramètres transitoires dans le calculateur et conserver un résultat indéterminé lorsqu’un volume nécessaire manque.',
					toolLabel: 'Préparer un scénario de gonflage',
				},
				{
					presetId: 'garage-poncage-prolonge',
					context: 'Un outil utilisé plusieurs minutes peut devenir le poste dimensionnant, même si une clé à chocs paraît plus spectaculaire.',
					question: 'Le compresseur tient-il le débit demandé pendant la durée prévue et dans son cycle de service documenté ?',
					decision: 'Traiter ce poste comme un besoin continu, puis vérifier séparément récupération, échauffement et pression en bout de flexible.',
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
	'atelier-poids-lourds': {
		verdict: 'Un atelier poids lourds se dimensionne sur ses postes les plus exigeants, pas sur une étiquette de puissance ou une taille de cuve.',
		verdictDetail: 'Une clé de 1 pouce, un poste de gonflage et un outil de maintenance ne décrivent pas le même besoin. La décision conserve la référence, la consommation en charge, la pression dynamique, le flexible prescrit et la séquence réelle de chaque poste.',
		principles: ['Référence de la clé', 'Pression sous débit', 'Poste de gonflage', 'Coactivité mesurée'],
		decisions: [
			{ title: 'Poste roues dimensionnant', description: 'Identifier la clé réellement utilisée, son besoin en charge et le passage minimal demandé par le fabricant, sans appliquer une valeur moyenne aux outils de 1 pouce.' },
			{ title: 'Gonflage séparé', description: 'Traiter l’aménagement de sécurité, la pression prescrite, le volume du pneu et le temps accepté comme des données distinctes du desserrage des roues.' },
			{ title: 'Coactivité de l’atelier', description: 'Décrire les opérations capables de se chevaucher entre baie roues, maintenance, soufflage et autres postes au lieu de sommer tout l’inventaire.' },
			{ title: 'Réseau jusqu’au raccord', description: 'Conserver diamètre, longueur, coupleurs et pression dynamique dans la preuve, car la capacité à la centrale ne garantit pas le débit au véhicule.' },
		],
		steps: [
			{ title: 'Découper les postes', description: 'Séparer pose et dépose des roues, gonflage, maintenance pneumatique, nettoyage et opérations longues.', proof: 'Plan des postes et opérations nommées' },
			{ title: 'Identifier les références', description: 'Relever MPN, pression, consommation en charge, entrée d’air et flexible de chaque outil critique.', proof: 'Fiche ou notice fabricant datée' },
			{ title: 'Chronométrer les séquences', description: 'Observer les durées d’appui, les intervalles et les chevauchements sur une période représentative.', proof: 'Séquence nominale et pointe plausible' },
			{ title: 'Comparer au FAD', description: 'Comparer le besoin au débit restitué publié à une pression proche de celle du poste, avec les limites de service de la production.', proof: 'Calcul reproductible et unités comparables' },
			{ title: 'Mesurer en charge', description: 'Relever la pression avant le flexible et au raccord pendant l’opération afin de localiser une restriction éventuelle.', proof: 'Points de mesure, instrument et résultat datés' },
		],
		checkpoints: [
			{ title: 'Clé poids lourds', question: 'La valeur publiée est-elle une consommation en charge ou une moyenne ?', action: 'Conserver le qualificatif exact et ne réduire le besoin que dans un scénario temporel explicite.' },
			{ title: 'Flexible et coupleurs', question: 'Le passage complet respecte-t-il la configuration associée à la donnée fabricant ?', action: 'Documenter longueur, diamètre intérieur, entrée et chaque réduction avant de conclure.' },
			{ title: 'Gonflage', question: 'Le volume, les pressions initiale et finale, le temps cible et le dispositif de protection sont-ils connus ?', action: 'Garder le besoin indéterminé tant qu’une entrée de calcul ou une condition de sécurité manque.' },
			{ title: 'Pointe d’activité', question: 'Quelles opérations peuvent réellement se dérouler pendant le travail de la clé ?', action: 'Tester une pointe réaliste et un fonctionnement nominal, pas une simultanéité totale arbitraire.' },
		],
		boundary: 'Le terme poids lourds ne fournit aucune consommation technique. CompatAir ne remplace ni la notice de la référence, ni l’évaluation des risques du poste, ni les prescriptions du fabricant de pneumatiques. Une capacité documentaire reste à confirmer sur l’installation.',
		longform: {
			readingTime: 20,
			updatedAt: '2026-07-19',
			intro: 'Le poste roues concentre souvent de fortes demandes transitoires, mais il ne résume pas l’atelier. Le gonflage suit une logique volume-temps et un cadre de prévention propre. Les autres outils peuvent imposer une charge plus longue. Ce dossier construit donc trois scénarios séparés avant de vérifier leur éventuelle coactivité.',
			scenarios: [
				{ presetId: 'poids-lourds-cp5000', context: 'Chicago Pneumatic publie pour cette référence une consommation en charge et un flexible associés à une pression dynamique. Ces valeurs décrivent la clé lorsqu’elle travaille.', question: 'La production et le passage complet maintiennent-ils le besoin en charge au raccord pendant une séquence représentative ?', decision: 'Comparer les 25 L/s publiés, soit 1 500 L/min, au FAD disponible près de 6,3 bar, puis mesurer la pression au poste.', toolLabel: 'Tester la CP5000' },
				{ presetId: 'poids-lourds-cp7776', context: 'Une seconde clé de 1 pouce peut publier un autre débit. Le carré d’entraînement ne permet donc pas de recopier le scénario précédent.', question: 'Le calcul conserve-t-il les 15 L/s en charge et le flexible de 13 mm sur 5 m propres à cette référence ?', decision: 'Créer un scénario distinct, puis additionner les deux clés uniquement si leur coactivité est réellement possible.', toolLabel: 'Tester la CP7776' },
				{ presetId: 'poids-lourds-gonflage', context: 'Le gonflage ne publie pas nécessairement un débit fixe. La demande dépend du volume interne, des pressions initiale et finale et du temps accepté.', question: 'Le poste réunit-il les données de calcul et les conditions de gonflage à distance prévues pour la catégorie de pneumatique ?', decision: 'Traiter capacité pneumatique et aménagement de sécurité dans deux preuves séparées, puis garder toute entrée inconnue visible.', toolLabel: 'Préparer le scénario de gonflage' },
			],
			airPath: [
				{ title: 'Production', role: 'Fournir un débit restitué documenté pour la pointe et la charge soutenue étudiées.', verify: 'FAD à pression comparable, commande et limite de service.' },
				{ title: 'Réserve et traitement', role: 'Stabiliser le scénario sans attribuer au stockage un débit continu qu’il ne produit pas.', verify: 'Volume utile, récupération, purge et fonctions de traitement.' },
				{ title: 'Réseau d’atelier', role: 'Distribuer l’air vers les baies sans restriction cachée dans une dérivation ou un enrouleur.', verify: 'Plan, diamètres, longueurs, organes et pression sous débit.' },
				{ title: 'Poste roues', role: 'Conserver le passage demandé par l’outil et l’aménagement propre au gonflage.', verify: 'Flexible, coupleurs, manomètre, commande et protections.' },
				{ title: 'Séquence réelle', role: 'Relier chaque demande à une durée, une cadence et des opérations simultanées observables.', verify: 'Chronométrage, opérateurs, véhicules et résultat au poste.' },
			],
			evidence: [
				{ decision: 'Capacité pour la clé', required: 'Consommation en charge, pression et flexible de la référence', source: 'Fiche constructeur exacte', whenMissing: 'Ne pas appliquer une valeur générique par taille de carré.' },
				{ decision: 'Besoin de pointe', required: 'Durées d’appui, répétitions et coactivité', source: 'Observation d’une séquence de travail', whenMissing: 'Publier plusieurs scénarios bornés sans inventer un facteur d’usage.' },
				{ decision: 'Capacité de production', required: 'FAD à la pression utile et limite de service', source: 'Documentation du compresseur', whenMissing: 'Conserver le verdict données insuffisantes.' },
				{ decision: 'Gonflage', required: 'Volume, pressions, temps et conditions de prévention', source: 'Pneumatique, procédure et référence du poste', whenMissing: 'Ne pas déduire le besoin du diamètre commercial du pneu.' },
				{ decision: 'Validation sur site', required: 'Pression dynamique et résultat sur la séquence cible', source: 'Mesure terrain datée', whenMissing: 'Présenter la compatibilité documentaire comme non confirmée.' },
			],
			fieldPlan: [
				{ moment: 'Inventaire', title: 'Photographier les références', action: 'Relier chaque outil, flexible et organe critique à son identifiant et à sa source.', record: 'MPN, valeur, unité, date et document.' },
				{ moment: 'Observation', title: 'Filmer ou chronométrer une séquence', action: 'Noter appuis, intervalles, reprises et postes actifs pendant une opération complète.', record: 'Scénario nominal et pointe justifiée.' },
				{ moment: 'Conception', title: 'Tracer le passage de l’air', action: 'Positionner production, stockage, traitement, réseau, enrouleur, coupleurs et outil.', record: 'Longueurs, diamètres et restrictions connues.' },
				{ moment: 'Mise en service', title: 'Mesurer sous débit', action: 'Comparer la pression en amont et au raccord pendant la phase dimensionnante.', record: 'Instrument, points, conditions et résultat.' },
				{ moment: 'Évolution', title: 'Rejouer les scénarios', action: 'Recalculer après ajout d’un poste, changement de clé ou modification du réseau.', record: 'Version, écart et décision mise à jour.' },
			],
			sources: [
				{ label: 'INRS, Opérations d’entretien et de remplacement des pneumatiques, ED 961', url: 'https://www.inrs.fr/dms/inrs/CataloguePapier/ED/TI-ED-961/ed961.pdf', scope: 'Organisation du gonflage, distances conseillées, protections et limites propres aux catégories de pneumatiques.' },
				{ label: 'INRS, fiches de poste garages automobiles et poids lourds', url: 'https://www.inrs.fr/metiers/commerce-service/garage/garage-fiches-de-poste', scope: 'Cartographie des opérations de mécanique, pneumatiques et risques transversaux d’un atelier poids lourds.' },
				{ label: 'Chicago Pneumatic, CP5000 T024585', url: 'https://tools.cp.com/en/products/impactwrenches/cp5000-skuT024585', scope: 'Consommation en charge, pression, flexible et caractéristiques de la clé du premier scénario.' },
				{ label: 'Chicago Pneumatic, CP7776 8941077760', url: 'https://tools.cp.com/en/products/impactwrenches/cp7776-sku8941077760', scope: 'Données attribuées à la seconde clé de 1 pouce afin d’éviter une moyenne de catégorie.' },
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
					presetId: 'carrosserie-hvlp',
					context: 'La technologie HVLP ne fournit pas un débit universel. Le modèle exact, son réglage et sa pression d’entrée restent déterminants.',
					question: 'Le FAD disponible couvre-t-il la référence pendant la phase réelle de pulvérisation, avec la pression vérifiée au pistolet ?',
					decision: 'Comparer le besoin publié du pistolet au compresseur, puis contrôler la pression dynamique après le traitement et le flexible.',
					toolLabel: 'Tester le G-550F',
				},
				{
					presetId: 'carrosserie-lvlp',
					context: 'Un besoin inférieur sur une référence précise peut changer le choix de production, sans autoriser une généralisation à toute la famille LVLP.',
					question: 'La comparaison conserve-t-elle le modèle, la pression et la source au lieu de classer les technologies par sigle ?',
					decision: 'Comparer la référence séparément, puis vérifier que la chaîne de traitement reste dimensionnée pour son débit réel.',
					toolLabel: 'Tester le FSP 600 LVLP',
				},
				{
					presetId: 'carrosserie-poncage',
					context: 'Le ponçage peut partager la production avec la préparation ou une autre zone et devenir le besoin continu dominant.',
					question: 'Le scénario sépare-t-il alimentation pneumatique, aspiration des poussières et ventilation du local ?',
					decision: 'Calculer le débit de l’outil, valider son réseau d’air et traiter la maîtrise des poussières dans un circuit de preuve distinct.',
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
		longform: {
			readingTime: 19,
			updatedAt: '2026-07-19',
			intro: 'Un atelier bois peut alterner clouage par impulsions, vissage, ponçage continu et finition. Une valeur par tir ne devient un débit moyen qu’après ajout d’une cadence déclarée. Le parcours conserve donc l’unité constructeur, rend l’hypothèse de production modifiable et traite séparément les usages continus et la qualité d’air de finition.',
			scenarios: [
				{ presetId: 'menuiserie-clouage-tc-pn-50', context: 'La TC-PN 50 publie un volume par tir. Le calculateur doit donc recevoir une cadence de travail explicite au lieu d’une consommation moyenne inventée.', question: 'La cadence proposée correspond-elle à une séquence observée, et la récupération reste-t-elle suffisante entre les tirs ?', decision: 'Commencer avec 30 tirs/min comme hypothèse visible, la remplacer par la cadence réelle, puis contrôler la pression et la récupération sur une série représentative.', toolLabel: 'Calculer le clouage TC-PN 50' },
				{ presetId: 'menuiserie-clouage-scheppach', context: 'La Scheppach 7906100715 publie 1,5 L par tir et une plage de pression. Ces données ne décrivent ni la cadence, ni les chevauchements avec un second poste.', question: 'Le calcul conserve-t-il la consommation propre à cette référence et une cadence déclarée par l’atelier ?', decision: 'Tester séparément la cadence nominale et une pointe plausible, sans confondre débit moyen calculé et pointe instantanée.', toolLabel: 'Calculer la Scheppach 7906100715' },
				{ presetId: 'menuiserie-poncage-continu', context: 'La DSX 150 publie un débit fixe en fonctionnement. Elle peut donc devenir plus exigeante qu’un cloueur lorsque le ponçage dure ou chevauche une autre opération.', question: 'Le compresseur tient-il le débit pendant toute la séquence et son cycle de service couvre-t-il la session ?', decision: 'Traiter le ponçage comme un scénario continu, puis vérifier aspiration des poussières et qualité de finition dans des preuves séparées.', toolLabel: 'Tester le ponçage DSX 150' },
			],
			airPath: [
				{ title: 'Production', role: 'Fournir le débit restitué nécessaire aux scénarios impulsionnels et continus.', verify: 'FAD, pression utile, récupération et cycle de service.' },
				{ title: 'Stockage et traitement', role: 'Stabiliser le besoin sans attribuer à la cuve un débit continu qu’elle ne produit pas.', verify: 'Volume utile, purge, filtration et conditions de maintenance.' },
				{ title: 'Distribution d’atelier', role: 'Acheminer l’air jusqu’aux postes sans restriction cachée ni contamination du circuit de finition.', verify: 'Branches, matériaux, diamètres, raccords et pertes mesurées.' },
				{ title: 'Poste de travail', role: 'Régler et raccorder chaque outil selon sa référence et son mode de consommation.', verify: 'Flexible, pression dynamique, lubrification et cadence.' },
				{ title: 'Opération', role: 'Relier la demande à une série de tirs, une durée de ponçage ou une phase de finition décrite.', verify: 'Séquence, résultat, coactivité et limites consignés.' },
			],
			evidence: [
				{ decision: 'Clouage ou agrafage', required: 'Volume par tir, pression et cadence', source: 'Notice fabricant et scénario déclaré', whenMissing: 'Ne pas convertir en litres par minute.' },
				{ decision: 'Usage continu', required: 'Débit en charge, durée et cycle de service', source: 'Fiche outil et documentation compresseur', whenMissing: 'Conserver la tenue de la session indéterminée.' },
				{ decision: 'Coactivité', required: 'Postes réellement capables de fonctionner ensemble', source: 'Organisation et observation de l’atelier', whenMissing: 'Publier des scénarios séparés.' },
				{ decision: 'Distribution', required: 'Passage et pression pendant l’usage', source: 'Schéma et mesure au poste', whenMissing: 'Ne pas attribuer la chute au seul compresseur.' },
				{ decision: 'Finition', required: 'Exigence de pureté et contrôle adapté', source: 'Procédé, produit et mesure', whenMissing: 'Ne revendiquer aucune qualité finale.' },
			],
			fieldPlan: [
				{ moment: 'Inventaire', title: 'Séparer les unités', action: 'Relever volume par tir, débit en charge, pression et flexible sans les normaliser prématurément.', record: 'Référence, valeur, unité, source et date.' },
				{ moment: 'Observation', title: 'Chronométrer une série', action: 'Compter les tirs ou mesurer la durée continue sur une opération représentative.', record: 'Cadence, durée, pauses et résultat.' },
				{ moment: 'Conception', title: 'Distinguer les branches', action: 'Tracer clouage, ponçage et finition avec leurs traitements et restrictions.', record: 'Plan, diamètres, longueurs et organes.' },
				{ moment: 'Essai', title: 'Mesurer au poste', action: 'Contrôler la pression pendant la série ou le ponçage, puis observer la récupération.', record: 'Instrument, point, conditions et résultat.' },
				{ moment: 'Évolution', title: 'Rejouer la cadence', action: 'Recalculer après changement de référence, de cadence, de flexible ou de coactivité.', record: 'Version du scénario et nouvelle décision.' },
			],
			sources: [
				{ label: 'Einhell France, TC-PN 50 4137790', url: 'https://www.einhell.fr/p/4137790-tc-pn-50/', scope: 'Référence, pression maximale, passage minimal et accès à la notice du premier scénario.' },
				{ label: 'Scheppach, 7906100715', url: 'https://shop.scheppach.com/Zubehoer-Set-Druckluftnagler-scheppach/7906100715', scope: 'Volume par tir, plage de pression et flexible recommandé du second scénario.' },
				{ label: 'Metabo, DSX 150 601558000', url: 'https://de.metabo.com/de/maschinen/trennen-schleifen-fraesen/holzbearbeitung/exzenterschleifer/dsx-150-601558000-druckluft-exzenterschleifer.html', scope: 'Débit et pression attribués à la ponceuse du scénario continu.' },
				{ label: 'INRS, réduction du bruit des cloueurs pneumatiques', url: 'https://www.inrs.fr/publications/bdd/techniques-reduction-bruit/FicheBruitAG.html?refINRS=BRUIT_FicheBruit_61', scope: 'Origines du bruit d’un cloueur et solutions portant notamment sur l’échappement.' },
			],
		},
	},
	'btp-chantier': {
		verdict: 'Sur chantier, la bonne configuration doit être compatible, transportable, raccordable et vérifiable au point d’usage.',
		verdictDetail: 'Un outil percussif, un cloueur et un poste mobile ne se dimensionnent pas avec une catégorie générique. Il faut conserver le débit ou le volume par action de la référence, la pression, le flexible, la durée réelle et le domaine d’usage prévu par sa notice.',
		principles: ['Production mobile', 'Flexible réellement déployé', 'Usage de la notice', 'Bruit et vibrations séparés'],
		decisions: [
			{ title: 'Référence adaptée au service', description: 'Vérifier le besoin pneumatique et le domaine d’usage déclaré. Une compatibilité de débit ne transforme pas un produit prévu pour un usage occasionnel en matériel professionnel soutenu.' },
			{ title: 'Mobilité réelle', description: 'Intégrer alimentation, masse, encombrement, protection, carburant ou batterie et déplacements sans réduire la mobilité au volume de cuve.' },
			{ title: 'Flexible déployé', description: 'Dimensionner la longueur utile, le diamètre intérieur, les raccords et la protection mécanique dans la configuration réellement posée sur le chantier.' },
			{ title: 'Exposition et coactivité', description: 'Traiter bruit, vibrations, poussières, échappement et présence d’autres intervenants dans un dossier de prévention distinct du calcul de débit.' },
		],
		steps: [
			{ title: 'Décrire l’opération', description: 'Nommer matériau, accessoire, durée, cadence, zone de travail et résultat attendu.', proof: 'Mode opératoire et contexte consignés' },
			{ title: 'Lire la notice complète', description: 'Relever besoin d’air, pression, flexible, lubrification, limites d’usage, bruit et vibrations de la référence.', proof: 'Notice et fiche fabricant datées' },
			{ title: 'Construire la chaîne mobile', description: 'Relier source, traitement, flexible, raccords et outil dans la longueur réellement déployée.', proof: 'Schéma d’installation de chantier' },
			{ title: 'Tester la durée utile', description: 'Comparer le besoin au FAD et au service admissible pendant une séquence représentative, pas seulement au démarrage.', proof: 'Calcul et durée de test publiés' },
			{ title: 'Contrôler sur site', description: 'Mesurer la pression pendant l’effort et consigner séparément les conditions de prévention.', proof: 'Mesure datée et contrôle du mode opératoire' },
		],
		checkpoints: [
			{ title: 'Burineur ou marteau', question: 'Le débit publié est-il associé à la pression de travail et à un flexible précis ?', action: 'Conserver les trois données et mesurer la pression pendant une phase de frappe.' },
			{ title: 'Clouage', question: 'La consommation est-elle publiée par tir plutôt qu’en litres par minute ?', action: 'Demander une cadence explicite et ne pas confondre moyenne calculée et pointe instantanée.' },
			{ title: 'Domaine d’usage', question: 'La notice prévoit-elle l’intensité et le contexte professionnels étudiés ?', action: 'Séparer compatibilité pneumatique et adéquation de service, puis conserver toute restriction visible.' },
			{ title: 'Prévention', question: 'Le choix traite-t-il bruit, vibrations, poussières et échappement autrement que par le seul débit ?', action: 'Relier la décision à l’évaluation des risques, aux données d’émission et au mode opératoire.' },
		],
		boundary: 'CompatAir vérifie une relation pneumatique à partir de données publiées. Le site ne valide ni l’aptitude générale d’un matériel au chantier, ni l’exposition d’un opérateur, ni un mode opératoire. Ces décisions exigent la notice, l’évaluation des risques et les contrôles propres au site.',
		longform: {
			readingTime: 21,
			updatedAt: '2026-07-19',
			intro: 'Sur chantier, deux erreurs se cumulent facilement : choisir une machine sur son débit aspiré et choisir un outil sur son seul nom de catégorie. Le dossier repart de trois références dont les modes de consommation diffèrent, puis suit l’air dans une installation mobile sans confondre calcul de capacité et prévention des risques.',
			scenarios: [
				{ presetId: 'btp-burineur-cp7110', context: 'Chicago Pneumatic publie une consommation en charge de 6,9 L/s, une pression dynamique de 6,3 bar et un flexible intérieur minimal de 10 mm sur 5 m.', question: 'La production maintient-elle 414 L/min au voisinage de 6,3 bar au raccord pendant la durée réellement prévue ?', decision: 'Comparer le besoin en charge au FAD, documenter toute longueur supplémentaire et contrôler la pression pendant le travail.', toolLabel: 'Tester le CP7110' },
				{ presetId: 'btp-clouage-mobile', context: 'La notice publie environ 0,66 litre par tir. Le besoin moyen dépend donc d’une cadence déclarée, tandis que la pointe reste une contrainte séparée.', question: 'La cadence, la pression, le flexible et le niveau de service attendu sont-ils explicitement définis ?', decision: 'Calculer le volume moyen à partir des tirs par minute, puis vérifier récupération et pression sur une séquence réelle.', toolLabel: 'Préparer le scénario de clouage' },
				{ presetId: 'btp-burineur-cas-limite', context: 'La fiche publie 113 L/min à 6,3 bar et un flexible de 9 mm, mais la notice précise que l’appareil n’est pas conçu pour un usage professionnel ou industriel.', question: 'La décision distingue-t-elle la possibilité pneumatique de l’adéquation au service et aux conditions du chantier ?', decision: 'Utiliser la référence comme exemple de calcul, sans la recommander pour un usage professionnel que sa notice exclut.', toolLabel: 'Examiner le cas TC-PC 45' },
			],
			airPath: [
				{ title: 'Source mobile', role: 'Produire le débit restitué nécessaire dans les conditions d’alimentation et d’environnement prévues.', verify: 'FAD, pression, durée admissible, énergie et implantation.' },
				{ title: 'Traitement et lubrification', role: 'Appliquer les fonctions demandées par l’outil sans créer une restriction non contrôlée.', verify: 'Notice, huile adaptée, purge, filtre et perte de charge.' },
				{ title: 'Flexible de chantier', role: 'Acheminer l’air sur la longueur déployée tout en protégeant le passage et les raccords.', verify: 'Diamètre intérieur, longueur, coupleurs, état et cheminement.' },
				{ title: 'Point d’usage', role: 'Raccorder et régler la référence dans sa configuration de travail.', verify: 'Pression dynamique, accessoire, échappement et maintien.' },
				{ title: 'Mode opératoire', role: 'Relier la demande d’air à une durée, un matériau, une cadence et une coactivité déterminés.', verify: 'Observation, exposition, résultat et limites du chantier.' },
			],
			evidence: [
				{ decision: 'Besoin pneumatique', required: 'Débit en charge ou volume par action et pression associée', source: 'Fiche et notice de la référence', whenMissing: 'Ne pas utiliser une moyenne de catégorie.' },
				{ decision: 'Adéquation de service', required: 'Usage prévu, limites et conditions d’emploi', source: 'Notice fabricant actuelle', whenMissing: 'Ne pas recommander le matériel pour un contexte non documenté.' },
				{ decision: 'Chaîne mobile', required: 'FAD, flexible, raccords et traitement installés', source: 'Documentation et schéma de chantier', whenMissing: 'Conserver la capacité au point d’usage non confirmée.' },
				{ decision: 'Durée et cadence', required: 'Séquence réelle ou scénario déclaré', source: 'Mode opératoire et observation', whenMissing: 'Publier plusieurs hypothèses modifiables.' },
				{ decision: 'Prévention', required: 'Bruit, vibrations, poussières et coactivité', source: 'Notice, évaluation des risques et mesure adaptée', whenMissing: 'Ne pas déduire la sécurité de la seule compatibilité pneumatique.' },
			],
			fieldPlan: [
				{ moment: 'Préparation', title: 'Décrire le chantier', action: 'Nommer tâche, matériau, durée, zone, énergie disponible et autres intervenants.', record: 'Mode opératoire versionné.' },
				{ moment: 'Choix', title: 'Comparer les références exactes', action: 'Contrôler débit ou volume par action, pression, flexible, domaine d’usage et émissions déclarées.', record: 'Sources, unités et restrictions.' },
				{ moment: 'Installation', title: 'Déployer puis inspecter', action: 'Tracer la longueur utile, protéger le flexible et vérifier raccords, traitement et alimentation.', record: 'Schéma et état avant travail.' },
				{ moment: 'Essai', title: 'Mesurer pendant l’effort', action: 'Relever la pression au raccord et observer la tenue de la production sur la séquence cible.', record: 'Points, instrument, durée et résultat.' },
				{ moment: 'Retour de chantier', title: 'Conserver les écarts', action: 'Noter restrictions, incidents, dérives et modifications nécessaires avant le prochain usage.', record: 'Avant, constat, action et nouvelle décision.' },
			],
			sources: [
				{ label: 'Chicago Pneumatic, CP7110 8941071101', url: 'https://tools.cp.com/en/products/percussivetools/cp7110-sku8941071101', scope: 'Consommation en charge, pression dynamique, flexible, bruit et vibrations du burineur professionnel du premier scénario.' },
				{ label: 'Einhell France, TC-PN 50 4137790', url: 'https://www.einhell.fr/p/4137790-tc-pn-50/', scope: 'Référence de clouage dont le besoin est publié par action et doit être relié à une cadence explicite.' },
				{ label: 'Einhell, notice TC-PC 45 4139040', url: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ajnagqqlfl4l5dvdmthveb042c/4139040_21022_001_SPK2.pdf', scope: 'Débit, pression, flexible, émissions et restriction d’usage professionnel du cas limite.' },
				{ label: 'INRS, Vibrations mains-bras, ED 6342', url: 'https://www.inrs.fr/media.html?refINRS=ED+6342', scope: 'Méthode de prévention fondée sur l’analyse du risque, le choix et l’utilisation des machines.' },
				{ label: 'INRS, choix de cloueurs moins bruyants', url: 'https://www.inrs.fr/publications/bdd/techniques-reduction-bruit/FicheBruitAG.html?refINRS=BRUIT_FicheBruit_61', scope: 'Origines du bruit d’un cloueur pneumatique et intérêt du traitement acoustique de l’échappement.' },
			],
		},
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
		longform: {
			readingTime: 20,
			updatedAt: '2026-07-19',
			intro: 'La maintenance industrielle ne se réduit pas à additionner des consommations nominales. Un scénario exploitable relie la référence de l’outil, sa durée, les autres postes actifs, l’état du réseau et une ligne de base mesurée. Les trois cas ci-dessous servent de configurations de départ, puis chaque intervention doit conserver ce qui a été observé avant et après.',
			scenarios: [
				{ presetId: 'maintenance-meulage-continu', context: 'La Metabo DW 125 publie une consommation continue de 500 L/min à 6,2 bar. Une longue intervention peut donc devenir la charge de référence du secteur.', question: 'La production, le traitement et la distribution tiennent-ils le débit pendant toute la session sans chute au poste ?', decision: 'Tester une session continue, comparer le FAD et le cycle de service, puis consigner la pression avant et après la branche étudiée.', toolLabel: 'Établir la ligne de base DW 125' },
				{ presetId: 'maintenance-derouillage', context: 'Le CP7120 publie 7,4 L/s, soit 444 L/min, avec un passage associé. Une fréquence de travail reste toutefois propre à l’intervention.', question: 'La fréquence proposée et la longueur du passage décrivent-elles la séquence réelle ?', decision: 'Commencer avec une hypothèse soutenue, la corriger par observation et mesurer la pression pendant une phase représentative.', toolLabel: 'Tester le dérouillage CP7120' },
				{ presetId: 'maintenance-vissage-serie', context: 'La Metabo DS 14 publie un débit en charge. Le nombre de cycles ne transforme pas cette valeur constructeur, mais il modifie le besoin moyen et la coactivité.', question: 'Le scénario sépare-t-il consommation en charge, fréquence d’usage et postes simultanés ?', decision: 'Conserver le débit publié, rendre la fréquence modifiable et créer un second scénario si un autre outil fonctionne réellement en même temps.', toolLabel: 'Préparer le vissage DS 14' },
			],
			airPath: [
				{ title: 'Production', role: 'Répondre aux charges normales, pointes et modes de secours explicitement décrits.', verify: 'FAD, commandes, consignes et limites de service.' },
				{ title: 'Traitement', role: 'Maintenir la qualité requise sans ajouter une perte de charge non suivie.', verify: 'Capacité, point de fonctionnement, entretien et contrôles.' },
				{ title: 'Réseau', role: 'Distribuer l’air avec des secteurs, restrictions et fuites identifiables.', verify: 'Plan à jour, mesures de pression et campagne de fuites.' },
				{ title: 'Actif', role: 'Relier chaque outil ou machine à une référence, un mode et une criticité.', verify: 'Identifiant stable, source, réglage et scénario de fonctionnement.' },
				{ title: 'Historique', role: 'Comparer l’état avant intervention, l’action et la mesure après.', verify: 'Date, méthode, résultat, limite et prochaine vérification.' },
			],
			evidence: [
				{ decision: 'Charge de référence', required: 'Outils actifs, durée et pression', source: 'Scénario versionné et fiches fabricants', whenMissing: 'Ne pas présenter la puissance installée comme un besoin.' },
				{ decision: 'Capacité disponible', required: 'FAD et cycle de service au régime étudié', source: 'Documentation de la production', whenMissing: 'Conserver le verdict indéterminé.' },
				{ decision: 'État du réseau', required: 'Pression, fuites et restrictions localisées', source: 'Mesures comparables et plan', whenMissing: 'Ne pas attribuer la dérive à un composant unique.' },
				{ decision: 'Effet de l’intervention', required: 'Mesure avant et après dans des conditions comparables', source: 'Compte rendu de maintenance', whenMissing: 'Ne pas déclarer l’amélioration acquise.' },
				{ decision: 'Nouvel actif', required: 'Référence et profil de charge propres', source: 'Notice et essai de mise en service', whenMissing: 'Ne pas recopier le profil de l’actif remplacé.' },
			],
			fieldPlan: [
				{ moment: 'Baseline', title: 'Fixer les conditions', action: 'Nommer charge, pression, secteurs, température et instruments avant de comparer.', record: 'Périmètre, date et état initial.' },
				{ moment: 'Diagnostic', title: 'Localiser avant de corriger', action: 'Comparer amont, aval et point d’usage pendant le même scénario.', record: 'Points, valeurs et incertitudes.' },
				{ moment: 'Intervention', title: 'Tracer l’action', action: 'Identifier le composant, la consigne ou la fuite traitée sans écraser l’état précédent.', record: 'Action, responsable et heure.' },
				{ moment: 'Vérification', title: 'Rejouer la ligne de base', action: 'Répéter la mesure dans des conditions comparables et noter les écarts restants.', record: 'Avant, après, limite et décision.' },
				{ moment: 'Exploitation', title: 'Planifier le prochain contrôle', action: 'Relier criticité, dérive observée et périodicité sans inventer un intervalle universel.', record: 'Déclencheur et date prévue.' },
			],
			sources: [
				{ label: 'Metabo, DW 125 601556000', url: 'https://www.metabo.com/com/es/maquinas/cortar-rectificar-fresar/amoladoras-angulares/amoladoras-angulares-de-o100-150-mm/dw-125-amoladora-angular-neumatica/601556000', scope: 'Débit et pression de la meuleuse du scénario continu.' },
				{ label: 'Chicago Pneumatic, CP7120 8941071200', url: 'https://tools.cp.com/en-uk/products/compression-tools/cp7120-needle-scaler-sku8941071200', scope: 'Consommation en charge, pression dynamique et passage minimal du dérouilleur à aiguilles.' },
				{ label: 'Metabo, DS 14 604117000', url: 'https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html', scope: 'Débit et pression de la visseuse du troisième scénario.' },
				{ label: 'U.S. Department of Energy, Compressed Air Systems', url: 'https://www.energy.gov/cmei/ito/compressed-air-systems', scope: 'Approche système, fuites, maintenance préventive, qualité d’air, stockage et commandes.' },
			],
		},
	},
};
