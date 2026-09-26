const product = {
	"id": "dynabrade-x31",
	"slug": "ponceuse-orbitale-dynabrade-x31",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital Extreme X31",
	"brand": "Dynabrade",
	"model": "Dynorbital Extreme X31",
	"mpn": "X31",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital Extreme X31",
		"distinguishingAttributes": {
			"Diamètre du plateau": "76 mm",
			"Fixation du plateau": "Autoagrippant",
			"Diamètre de l’orbite": "5 mm",
			"Aspiration des poussières": "Sans aspiration",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Puissance moteur": "75 W",
			"Masse": "0,53 kg",
			"Hauteur": "78 mm",
			"Longueur": "150 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 227,
		"typical": 227,
		"max": 227
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-x31-technical.webp",
		"alt": "Repères techniques Dynabrade Dynorbital Extreme X31 : consommation maximale publiée de 227 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=154",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade Dynorbital Extreme X31, référence X31, présente une consommation maximale publiée de 227 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 154. Diamètre du plateau : 76 mm. Fixation du plateau : Autoagrippant.",
		"verifiedFacts": [
			"Diamètre du plateau : 76 mm.",
			"Fixation du plateau : Autoagrippant.",
			"Diamètre de l’orbite : 5 mm.",
			"Aspiration des poussières : Sans aspiration.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Diamètre du plateau",
			"value": "76 mm",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "Autoagrippant",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "75 W",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,53 kg",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "78 mm",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "150 mm",
			"evidenceIds": [
				"dynabrade-x31-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-x31-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=154",
			"sourceLabel": "Dynabrade, catalogue D25.01, X31, page 154",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 154-1, ligne 1. Consommation maximale publiée : 8 (227) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-x31-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-x31-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-x31-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-x31-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-x31-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
