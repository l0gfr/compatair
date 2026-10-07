import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bpi-pro",
	"slug": "aircraft-bpi-pro",
	"brand": "Aircraft",
	"model": "BPI PRO",
	"mpn": "2102170",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BPI PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bpi-pro.webp",
		"alt": "Repères techniques Aircraft BPI PRO, référence 2102170",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bpi-pro-2102170/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft BPI PRO, référence 2102170. Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de sortie de buse : 16 mm. Masse approximative : 0.27 kg.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2102170.",
			"Diamètre de sortie de buse : 16 mm.",
			"Masse approximative : 0.27 kg.",
			"Type indiqué par le fabricant : Professional blow gun with injector nozzle."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2102170-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2102170-20260927"
			]
		},
		{
			"label": "Diamètre de sortie de buse",
			"value": "16 mm",
			"evidenceIds": [
				"aircraft-2102170-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.27 kg",
			"evidenceIds": [
				"aircraft-2102170-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Professional blow gun with injector nozzle",
			"evidenceIds": [
				"aircraft-2102170-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102170-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bpi-pro-2102170/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102170, réf. 2102170",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102170-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102170-20260927"
		],
		"airflowLpm": [
			"aircraft-2102170-20260927"
		],
		"airflowBasis": [
			"aircraft-2102170-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "average"
};

export default product;
