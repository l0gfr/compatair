import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ps-c-pro",
	"slug": "aircraft-ps-c-pro",
	"brand": "Aircraft",
	"model": "PS-C PRO",
	"mpn": "2404125",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Aircraft PS-C PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ps-c-pro.webp",
		"alt": "Repères techniques Aircraft PS-C PRO, référence 2404125",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ps-c-pro-2404125/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft PS-C PRO, référence 2404125. Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 10 mm. Vitesse de rotation : 1800 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2404125.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Vitesse de rotation : 1800 min¯¹.",
			"Mandrin ou entraînement publié : Hexagon ¼ \"."
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
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1800 min¯¹",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "Hexagon ¼ \"",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "8 Nm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "8 Nm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "210 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "43 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "157 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Pistol screwdriver",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404125-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ps-c-pro-2404125/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404125, réf. 2404125",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404125-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404125-20260927"
		],
		"airflowLpm": [
			"aircraft-2404125-20260927"
		],
		"airflowBasis": [
			"aircraft-2404125-20260927"
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
