import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bm-c-13-pro",
	"slug": "aircraft-bm-c-13-pro",
	"brand": "Aircraft",
	"model": "BM-C 13 PRO",
	"mpn": "2404115",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft BM-C 13 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bm-c-13-pro.webp",
		"alt": "Repères techniques Aircraft BM-C 13 PRO, référence 2404115",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bm-c-13-pro-2404115/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft BM-C 13 PRO, référence 2404115. Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de perçage dans l’acier : 13 mm. Capacité de perçage dans le bois : 25 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2404115.",
			"Capacité de perçage dans l’acier : 13 mm.",
			"Capacité de perçage dans le bois : 25 mm.",
			"Vitesse de rotation : 800 min¯¹."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans le bois",
			"value": "25 mm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "800 min¯¹",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "12.5 Nm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "219 mm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "43 mm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "157 mm",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.3 kg",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Pistol drilling machine",
			"evidenceIds": [
				"aircraft-2404115-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404115-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bm-c-13-pro-2404115/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404115, réf. 2404115",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404115-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404115-20260927"
		],
		"airflowLpm": [
			"aircraft-2404115-20260927"
		],
		"airflowBasis": [
			"aircraft-2404115-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 238,
		"typical": 238,
		"max": 238
	},
	"airflowBasis": "average"
};

export default product;
