import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-wss-ht-pro",
	"slug": "aircraft-wss-ht-pro",
	"brand": "Aircraft",
	"model": "WSS ½\" HT PRO",
	"mpn": "2401575",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft WSS ½\" HT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-wss-ht-pro.webp",
		"alt": "Repères techniques Aircraft WSS ½\" HT PRO, référence 2401575",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/wss-12-ht-pro-2401575/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft WSS ½\" HT PRO, référence 2401575. Consommation moyenne publiée : 91 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 10 mm. Vitesse de rotation : 8500 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 91 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401575.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Vitesse de rotation : 8500 min¯¹.",
			"Mandrin ou entraînement publié : ½ \"."
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
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 91 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "8500 min¯¹",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "450 Nm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "450 Nm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "237 mm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "60 mm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "88 mm",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle impact wrench",
			"evidenceIds": [
				"aircraft-2401575-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401575-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/wss-12-ht-pro-2401575/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401575, réf. 2401575",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 91 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401575-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401575-20260927"
		],
		"airflowLpm": [
			"aircraft-2401575-20260927"
		],
		"airflowBasis": [
			"aircraft-2401575-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 91,
		"typical": 91,
		"max": 91
	},
	"airflowBasis": "average"
};

export default product;
