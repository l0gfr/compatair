import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-srs-1-2-ht-pro",
	"slug": "aircraft-srs-1-2-ht-pro",
	"brand": "Aircraft",
	"model": "SRS 1/2\" HT PRO",
	"mpn": "2401570",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircraft SRS 1/2\" HT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-srs-1-2-ht-pro.webp",
		"alt": "Repères techniques Aircraft SRS 1/2\" HT PRO, référence 2401570",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/srs-12-ht-pro-2401570/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft SRS 1/2\" HT PRO, référence 2401570. Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 13 mm. Vitesse de rotation : 600 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401570.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 600 min¯¹.",
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
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "600 min¯¹",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "106 Nm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "106 Nm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "280 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "45,5 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "56.3 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Impact ratchet",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401570-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/srs-12-ht-pro-2401570/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401570, réf. 2401570",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401570-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401570-20260927"
		],
		"airflowLpm": [
			"aircraft-2401570-20260927"
		],
		"airflowBasis": [
			"aircraft-2401570-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 90,
		"typical": 90,
		"max": 90
	},
	"airflowBasis": "average"
};

export default product;
