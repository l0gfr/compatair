import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-50211",
	"slug": "ponceuse-rotative-dynabrade-50211",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 50211",
	"brand": "Dynabrade",
	"model": "50211",
	"mpn": "50211",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "50211",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "1/4\"-20 Male",
			"Longueur": "266 mm",
			"Hauteur": "98 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 595,
		"typical": 595,
		"max": 595
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-50211-technical.webp",
		"alt": "Repères techniques Dynabrade 50211 : consommation maximale publiée de 595 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=90",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "50211 : ponceuse de 76 mm à capot abaissé, aspiration centralisée et port de vide de 1¼ pouce. La 50210 utilise un captage autogénéré et un port de 1 pouce. Elles publient le même maximum de 595 L/min à 6,2 bar et 15 000 tr/min : l’installation de captage peut départager le choix.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 1/4\"-20 Male.",
			"Longueur : 266 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le port de vide ne désigne pas l’entrée d’air comprimé.",
			"La compatibilité des disques et du capot doit être vérifiée dans la notice ; un besoin d’air identique ne valide pas un accessoire."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-50211-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-50211-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4\"-20 Male",
			"evidenceIds": [
				"dynabrade-50211-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "266 mm",
			"evidenceIds": [
				"dynabrade-50211-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "98 mm",
			"evidenceIds": [
				"dynabrade-50211-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50211-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=90",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50211, page 90",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 90-0, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50211-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50211-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50211-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50211-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50211-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
