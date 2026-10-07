import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bs-c-20-pro-vs",
	"slug": "aircraft-bs-c-20-pro-vs",
	"brand": "Aircraft",
	"model": "BS-C 20 PRO VS",
	"mpn": "2403780",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Aircraft BS-C 20 PRO VS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bs-c-20-pro-vs.webp",
		"alt": "Repères techniques Aircraft BS-C 20 PRO VS, référence 2403780",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bs-c-20-pro-vs-2403780/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft BS-C 20 PRO VS, référence 2403780. Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur de bande : 520 mm. Largeur de bande : 20 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403780.",
			"Longueur de bande : 520 mm.",
			"Largeur de bande : 20 mm.",
			"Longueur approximative : 396 mm."
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
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Longueur de bande",
			"value": "520 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Largeur de bande",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "396 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "85 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "95 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0,96 kg",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Belt sander",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403780-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bs-c-20-pro-vs-2403780/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403780, réf. 2403780",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403780-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403780-20260927"
		],
		"airflowLpm": [
			"aircraft-2403780-20260927"
		],
		"airflowBasis": [
			"aircraft-2403780-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "average"
};

export default product;
