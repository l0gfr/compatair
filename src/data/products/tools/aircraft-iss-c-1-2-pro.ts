import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-c-1-2-pro",
	"slug": "aircraft-iss-c-1-2-pro",
	"brand": "Aircraft",
	"model": "ISS-C 1/2\" PRO",
	"mpn": "2401475",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS-C 1/2\" PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-c-1-2-pro.webp",
		"alt": "Repères techniques Aircraft ISS-C 1/2\" PRO, référence 2401475",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/iss-c-12-pro-2401475/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft ISS-C 1/2\" PRO, référence 2401475. Consommation moyenne publiée : 188 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 13 mm. Vitesse de rotation : 7000 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 188 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401475.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 7000 min¯¹.",
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
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 188 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "7000 min¯¹",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "1112 Nm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "1756 Nm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "183 mm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "70 mm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "205.6 mm",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Industrial Impact Wrench",
			"evidenceIds": [
				"aircraft-2401475-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401475-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/iss-c-12-pro-2401475/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401475, réf. 2401475",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 188 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401475-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401475-20260927"
		],
		"airflowLpm": [
			"aircraft-2401475-20260927"
		],
		"airflowBasis": [
			"aircraft-2401475-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 188,
		"typical": 188,
		"max": 188
	},
	"airflowBasis": "average"
};

export default product;
