import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ws-125-pro",
	"slug": "aircraft-ws-125-pro",
	"brand": "Aircraft",
	"model": "WS 125 PRO",
	"mpn": "2403470",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircraft WS 125 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ws-125-pro.webp",
		"alt": "Repères techniques Aircraft WS 125 PRO, référence 2403470",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ws-125-pro-2403470/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft WS 125 PRO, référence 2403470. Consommation moyenne publiée : 490 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Broche de fixation : Square ¾\". Masse approximative : 1.7 kg.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 490 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403470.",
			"Broche de fixation : Square ¾\".",
			"Masse approximative : 1.7 kg.",
			"Type indiqué par le fabricant : Angle grinder."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403470-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 490 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403470-20260927"
			]
		},
		{
			"label": "Broche de fixation",
			"value": "Square ¾\"",
			"evidenceIds": [
				"aircraft-2403470-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.7 kg",
			"evidenceIds": [
				"aircraft-2403470-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle grinder",
			"evidenceIds": [
				"aircraft-2403470-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403470-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ws-125-pro-2403470/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403470, réf. 2403470",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 490 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403470-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403470-20260927"
		],
		"airflowLpm": [
			"aircraft-2403470-20260927"
		],
		"airflowBasis": [
			"aircraft-2403470-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"airflowBasis": "average"
};

export default product;
