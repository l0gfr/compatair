import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-wb-10-1-pro",
	"slug": "aircraft-wb-10-1-pro",
	"brand": "Aircraft",
	"model": "WB 10-1 PRO",
	"mpn": "2404120",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft WB 10-1 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-wb-10-1-pro.webp",
		"alt": "Repères techniques Aircraft WB 10-1 PRO, référence 2404120",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/wb-10-1-pro-2404120/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft WB 10-1 PRO, référence 2404120. Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de perçage dans l’acier : 10 mm. Capacité de perçage dans le bois : 20 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2404120.",
			"Capacité de perçage dans l’acier : 10 mm.",
			"Capacité de perçage dans le bois : 20 mm.",
			"Vitesse de rotation : 1400 min¯¹."
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
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans le bois",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 min¯¹",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "5 Nm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "214 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "43.5 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "91.5 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,2 kg",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle drill",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404120-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/wb-10-1-pro-2404120/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404120, réf. 2404120",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404120-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404120-20260927"
		],
		"airflowLpm": [
			"aircraft-2404120-20260927"
		],
		"airflowBasis": [
			"aircraft-2404120-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 175,
		"typical": 175,
		"max": 175
	},
	"airflowBasis": "average"
};

export default product;
