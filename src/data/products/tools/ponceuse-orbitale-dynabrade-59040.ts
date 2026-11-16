import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-59040",
	"slug": "ponceuse-orbitale-dynabrade-59040",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital-Spirit 59040",
	"brand": "Dynabrade",
	"model": "Dynorbital-Spirit 59040",
	"mpn": "59040",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital-Spirit 59040",
		"distinguishingAttributes": {
			"Aspiration": "Sans aspiration",
			"Plateau": "6 pouces (152 mm)",
			"Orbite déclarée": "3/32 pouce ; arrondis métriques de 2 et 2,5 mm selon document"
		}
	},
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "B",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-59040-technical-20261116-reserves.svg",
		"alt": "Repères techniques Dynabrade Dynorbital-Spirit 59040 : consommation publiée de 396 L/min à 6,2 bar",
		"sourceUrl": "https://eu.dynabrade.com/en/catalog/6-152-mm-dia-non-vacuum-dynorbital-spirit-random-orbital-sander~e5a782f4-b186-433b-8780-0cf3e59163e9",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La Dynorbital-Spirit 59040 possède un plateau de 6 pouces sans aspiration. Les 59043 et 59044 ajoutent une aspiration intégrée ou centrale ; le système de captage se choisit donc séparément de la taille du plateau. Les documents donnent une orbite de 3/32 pouce, avec des arrondis métriques différents. La fiche et PD11.25 publient 396 L/min, tandis que PD14.22R publie 450 L/min : cette divergence de révision est conservée et la consommation ne dimensionne pas le moteur.",
		"verifiedFacts": [
			"59040 : plateau 6 pouces (152 mm), Non-Vac dans les notices.",
			"12 000 tr/min et 186 W déclarés dans les notices.",
			"Entrée 1/4 pouce NPT et longueur 178 mm dans PD14.22R."
		],
		"limitations": [
			"Les consommations 14 et 16 SCFM restent liées à leurs documents, sans arbitrage de révision.",
			"Les masses et les arrondis d’orbite divergent aussi ; la fiche ne confirme pas la configuration exacte livrée.",
			"L’ancienne URL de catalogue renvoie une page générale HTML ; ces notices alternatives ne la déclarent pas rétablie.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Plateau et aspiration",
			"value": "6 pouces (152 mm), sans aspiration",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:0"
			]
		},
		{
			"label": "Orbite : unités conservées",
			"value": "3/32 pouce ; 2 mm dans les tables et 2,5 mm dans la présentation actuelle",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:0"
			]
		},
		{
			"label": "Vitesse et puissance déclarées",
			"value": "12 000 tr/min ; 0,25 hp (186 W)",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:2"
			]
		},
		{
			"label": "Consommation fiche et PD11.25, hors calcul",
			"value": "14 SCFM / 396 LPM",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:1"
			]
		},
		{
			"label": "Consommation PD14.22R, hors calcul",
			"value": "16 SCFM / 450 LPM",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:2"
			]
		},
		{
			"label": "Pression de service déclarée",
			"value": "90 PSIG (6,2 bar)",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:2"
			]
		},
		{
			"label": "Longueur et raccordement",
			"value": "7 pouces (178 mm), entrée 1/4 pouce NPT ; flexible 1/4 pouce (6 mm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:2"
			]
		},
		{
			"label": "Masse : divergence non arbitrée",
			"value": "Fiche actuelle : 1 lb (0,45 kg). PD14.22R : 1,5 lb (0,6 kg).",
			"evidenceIds": [
				"review:2026-11-16-reserves:dynabrade-59040:0",
				"review:2026-11-16-reserves:dynabrade-59040:2"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-59040-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=157",
			"sourceLabel": "Dynabrade, catalogue D25.01, 59040, page 157",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 157-0, ligne 9. Consommation publiée : 14 (396) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "review:2026-11-16-reserves:dynabrade-59040:0",
			"sourceUrl": "https://eu.dynabrade.com/en/catalog/6-152-mm-dia-non-vacuum-dynorbital-spirit-random-orbital-sander~e5a782f4-b186-433b-8780-0cf3e59163e9",
			"sourceLabel": "Dynabrade, document relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche exacte, PD11.25 et PD14.22R relus avec table p4 et lignes 59040/59043/59044. DemandModel devient variable-volume, maintenant insufficient_data ; les débits, masses et arrondis contradictoires restent visibles. Apport : choix du captage et du plateau, pas garantie de débit pour une révision non identifiée. GET complet SHA-256 11dc3213a135cccd5cbd3a1ed63ee1bccec72c586fae96c5a40ab2a9a5839261."
		},
		{
			"id": "review:2026-11-16-reserves:dynabrade-59040:1",
			"sourceUrl": "https://eu.dynabrade.com/assets/fa93602f-70b6-4dc8-993f-6a245e0d7286/4074397578-pd1125.pdf",
			"sourceLabel": "Dynabrade, document relu le 16 novembre 2026 (pages PDF 1, 3, 4)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche exacte, PD11.25 et PD14.22R relus avec table p4 et lignes 59040/59043/59044. DemandModel devient variable-volume, maintenant insufficient_data ; les débits, masses et arrondis contradictoires restent visibles. Apport : choix du captage et du plateau, pas garantie de débit pour une révision non identifiée. GET complet SHA-256 c74f95fdc9d682d43ab09fbbf8a3a47e31057d0d6008810c763ea6fbdedf9faa."
		},
		{
			"id": "review:2026-11-16-reserves:dynabrade-59040:2",
			"sourceUrl": "https://eu.dynabrade.com/assets/bcb9f265-171e-4e94-ac08-f1a200383886/4074401012-pd1422r.pdf",
			"sourceLabel": "Dynabrade, document relu le 16 novembre 2026 (pages PDF 1, 3, 4)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche exacte, PD11.25 et PD14.22R relus avec table p4 et lignes 59040/59043/59044. DemandModel devient variable-volume, maintenant insufficient_data ; les débits, masses et arrondis contradictoires restent visibles. Apport : choix du captage et du plateau, pas garantie de débit pour une révision non identifiée. GET complet SHA-256 7080e1d42b43a829d264a4d2698681647bc5a253f3d1ae83ef295585e3452c2e."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:dynabrade-59040:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:dynabrade-59040:2"
		],
		"connectorSize": [
			"review:2026-11-16-reserves:dynabrade-59040:2"
		],
		"recommendedHose": [
			"review:2026-11-16-reserves:dynabrade-59040:2"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:dynabrade-59040:0",
			"review:2026-11-16-reserves:dynabrade-59040:1",
			"review:2026-11-16-reserves:dynabrade-59040:2"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil.",
		"Fiche exacte, PD11.25 et PD14.22R relus avec table p4 et lignes 59040/59043/59044. DemandModel devient variable-volume, maintenant insufficient_data ; les débits, masses et arrondis contradictoires restent visibles. Apport : choix du captage et du plateau, pas garantie de débit pour une révision non identifiée."
	],
	"demandExplanation": "La fiche et PD11.25 donnent 14 SCFM/396 LPM ; PD14.22R donne 16 SCFM/450 LPM. Le régime et la révision applicables restent à confirmer. Aucun débit dimensionnant n’est déduit."
};

export default product;
