import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-57400",
	"slug": "ponceuse-vibrante-dynabrade-57400",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 57400",
	"brand": "Dynabrade",
	"model": "57400",
	"mpn": "57400",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "57400",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "2 400 tr/min",
			"Masse": "1,2 kg",
			"Longueur": "178 mm",
			"Hauteur": "95 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-57400-technical.webp",
		"alt": "Repères techniques Dynabrade 57400 : consommation maximale publiée de 510 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=178",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "57400 : ponceuse à mouvement linéaire, 2 400 courses/min et plateau de 70 × 203 mm. La 51350 voisine emploie un plateau de 70 × 279 mm ; leur maximum déclaré reste de 510 L/min à 6,2 bar. La longueur de surface et le mouvement gouvernent le choix d’abrasif.",
		"verifiedFacts": [
			"Cadence du mouvement linéaire : 2 400 courses/min.",
			"Masse : 1,2 kg.",
			"Longueur : 178 mm.",
			"Hauteur : 95 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Les 2 400 courses/min décrivent un mouvement alternatif ; ils ne sont pas une vitesse de rotation de 2 400 tr/min.",
			"Aucune puissance absente ou contradictoire n’est reconstituée."
		]
	},
	"specifications": [
		{
			"label": "Cadence du mouvement linéaire",
			"value": "2 400 courses/min",
			"evidenceIds": [
				"dynabrade-57400-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"dynabrade-57400-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"dynabrade-57400-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "95 mm",
			"evidenceIds": [
				"dynabrade-57400-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57400-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=178",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57400, page 178",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 178-0, ligne 1. Consommation maximale publiée : 18 (510) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57400-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57400-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57400-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57400-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57400-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
