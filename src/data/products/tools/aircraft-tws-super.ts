import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-tws-super",
	"slug": "aircraft-tws-super",
	"brand": "Aircraft",
	"model": "TWS Super",
	"mpn": "2403491",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Aircraft TWS Super",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-tws-super.webp",
		"alt": "Repères techniques Aircraft TWS Super, référence 2403491",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/tws-super-2403491/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft TWS Super, référence 2403491. Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de disque : 100 mm. Masse approximative : 1,4 kg.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403491.",
			"Diamètre de disque : 100 mm.",
			"Masse approximative : 1,4 kg.",
			"Type indiqué par le fabricant : Extended corner grinder."
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
				"aircraft-2403491-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403491-20260927"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "100 mm",
			"evidenceIds": [
				"aircraft-2403491-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,4 kg",
			"evidenceIds": [
				"aircraft-2403491-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Extended corner grinder",
			"evidenceIds": [
				"aircraft-2403491-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403491-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/tws-super-2403491/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403491, réf. 2403491",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403491-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403491-20260927"
		],
		"airflowLpm": [
			"aircraft-2403491-20260927"
		],
		"airflowBasis": [
			"aircraft-2403491-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "average"
};

export default product;
