import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s80-16",
	"slug": "agrafeuse-cloueuse-basso-s80-16",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S80/16",
	"brand": "BASSO",
	"model": "S80/16",
	"mpn": "S80/16",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s80-16.webp",
		"alt": "Repères techniques : BASSO S80/16",
		"sourceUrl": "https://www.basso.com.tw/en/product-214724/Fine-Wire-Stapler-S80-16.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s80-16",
		"label": "Référence S80/16",
		"distinguishingAttributes": {
			"reference": "S80/16",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "0.9 (2.0)"
		}
	},
	"editorial": {
		"overview": "BASSO S80/16. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 0.9 (2.0).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 0.9 (2.0).",
			"Capacité du chargeur : 157.",
			"Longueur × largeur × hauteur (mm) : 238 x 42 x 152.",
			"Champ fabricant : C / D A X B ( Gauge) : AT Wire 12.8 / 11.5 .95 x .65mm (21)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Fine Wire Stapler",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.9 (2.0)",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "157",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "238 x 42 x 152",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "AT Wire 12.8 / 11.5 .95 x .65mm (21)",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-4-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-4-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214724/Fine-Wire-Stapler-S80-16.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0f9b9599dcbd4367600f4d21fd471506266fb61e1dca906efa3f5d9544636535. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-4-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-4-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-4-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
