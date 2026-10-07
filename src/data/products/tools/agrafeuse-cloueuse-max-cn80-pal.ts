import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-cn80-pal",
	"slug": "agrafeuse-cloueuse-max-cn80-pal",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX CN80/PAL",
	"brand": "MAX",
	"model": "CN80/PAL",
	"mpn": "CN80/PAL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-cn80-pal.webp",
		"alt": "Repères techniques : MAX CN80/PAL",
		"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/cn80-pal/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-cn80-pal",
		"label": "Référence CN80/PAL",
		"distinguishingAttributes": {
			"reference": "CN80/PAL",
			"AIR INLET SIZE": "3/8\"",
			"COLLATION TYPE": "Wire"
		}
	},
	"editorial": {
		"overview": "MAX CN80/PAL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. AIR INLET SIZE : 3/8\". COLLATION TYPE : Wire.",
		"verifiedFacts": [
			"AIR INLET SIZE : 3/8\".",
			"COLLATION TYPE : Wire.",
			"NAIL GUN ANGLE : 15.",
			"STRIP OR COIL : Coil.",
			"MINIMUM FASTENER SIZE : 2\".",
			"MAXIMUM FASTENER SIZE : 3-1/4\".",
			"MINIMUM NAIL DIAMETER : .099\".",
			"MAXIMUM NAIL DIAMETER : .131\"."
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
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "COLLATION TYPE",
			"value": "Wire",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "NAIL GUN ANGLE",
			"value": "15",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "STRIP OR COIL",
			"value": "Coil",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "MINIMUM FASTENER SIZE",
			"value": "2\"",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "MAXIMUM FASTENER SIZE",
			"value": "3-1/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "MINIMUM NAIL DIAMETER",
			"value": ".099\"",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "MAXIMUM NAIL DIAMETER",
			"value": ".131\"",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau fournit une plage de fonctionnement, sans pression associée au volume par cycle.",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		},
		{
			"label": "Consommation par cycle, hors calcul",
			"value": "0.06 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-pdp-35-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-pdp-35-p1",
			"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/cn80-pal/",
			"sourceLabel": "MAX USA, fiche produit fabricant max-pdp-35",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1bb25aabd6f141cfffc154d3a7f63f4099459297414d26706cd5e2d0091b58a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-pdp-35-p1"
		],
		"workingPressureBar": [
			"october2-tools-max-pdp-35-p1"
		],
		"demandExplanation": [
			"october2-tools-max-pdp-35-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
