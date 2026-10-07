import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-sp-pro",
	"slug": "aircraft-sp-pro",
	"brand": "Aircraft",
	"model": "SP PRO",
	"mpn": "2102290",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "Aircraft SP PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 8,
		"typical": 8,
		"max": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-sp-pro.webp",
		"alt": "Repères techniques Aircraft SP PRO, référence 2102290",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/sp-pro-2102290/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft SP PRO, référence 2102290. Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 8 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité maximale de cartouche : 600 ml. Masse approximative : 1.32 kg.",
		"verifiedFacts": [
			"Pression de travail publiée : 8 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2102290.",
			"Capacité maximale de cartouche : 600 ml.",
			"Masse approximative : 1.32 kg.",
			"Type indiqué par le fabricant : Silicone dolls gun."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 8 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2102290-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2102290-20260927"
			]
		},
		{
			"label": "Capacité maximale de cartouche",
			"value": "600 ml",
			"evidenceIds": [
				"aircraft-2102290-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.32 kg",
			"evidenceIds": [
				"aircraft-2102290-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Silicone dolls gun",
			"evidenceIds": [
				"aircraft-2102290-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102290-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/sp-pro-2102290/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102290, réf. 2102290",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102290-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102290-20260927"
		],
		"airflowLpm": [
			"aircraft-2102290-20260927"
		],
		"airflowBasis": [
			"aircraft-2102290-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	},
	"airflowBasis": "average"
};

export default product;
