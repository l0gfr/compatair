import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-cn70-pal",
	"slug": "agrafeuse-cloueuse-max-cn70-pal",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX CN70/PAL",
	"brand": "MAX",
	"model": "CN70/PAL",
	"mpn": "CN70/PAL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-cn70-pal.webp",
		"alt": "Repères techniques : MAX CN70/PAL",
		"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/cn70-pal/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-cn70-pal",
		"label": "Référence CN70/PAL",
		"distinguishingAttributes": {
			"reference": "CN70/PAL",
			"AIR INLET SIZE": "3/8\"",
			"COLLATION TYPE": "Wire"
		}
	},
	"editorial": {
		"overview": "MAX CN70/PAL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. AIR INLET SIZE : 3/8\". COLLATION TYPE : Wire.",
		"verifiedFacts": [
			"AIR INLET SIZE : 3/8\".",
			"COLLATION TYPE : Wire.",
			"NAIL GUN ANGLE : 15.",
			"STRIP OR COIL : Coil.",
			"MINIMUM FASTENER SIZE : 1-3/4\".",
			"MAXIMUM FASTENER SIZE : 2-3/4\".",
			"MINIMUM NAIL DIAMETER : .090\".",
			"MAXIMUM NAIL DIAMETER : .113\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "AIR INLET SIZE",
			"value": "3/8\"",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "COLLATION TYPE",
			"value": "Wire",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "NAIL GUN ANGLE",
			"value": "15",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "STRIP OR COIL",
			"value": "Coil",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "MINIMUM FASTENER SIZE",
			"value": "1-3/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "MAXIMUM FASTENER SIZE",
			"value": "2-3/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "MINIMUM NAIL DIAMETER",
			"value": ".090\"",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "MAXIMUM NAIL DIAMETER",
			"value": ".113\"",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau fournit une plage de fonctionnement, sans pression associée au volume par cycle.",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		},
		{
			"label": "Consommation par cycle, hors calcul",
			"value": "0.052 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-pdp-36-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-pdp-36-p1",
			"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/cn70-pal/",
			"sourceLabel": "MAX USA, fiche produit fabricant max-pdp-36",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ea34d54376f3493ab6282eeab22e8e138162ad2160d29c30a5b4abe5c986bc0a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-pdp-36-p1"
		],
		"workingPressureBar": [
			"october2-tools-max-pdp-36-p1"
		],
		"demandExplanation": [
			"october2-tools-max-pdp-36-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
