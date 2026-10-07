import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s10-25j",
	"slug": "agrafeuse-cloueuse-basso-s10-25j",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S10/25J",
	"brand": "BASSO",
	"model": "S10/25J",
	"mpn": "S10/25J",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s10-25j.webp",
		"alt": "Repères techniques : BASSO S10/25J",
		"sourceUrl": "https://www.basso.com.tw/en/product-215146/Finish-Stapler-S10-25J.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s10-25j",
		"label": "Référence S10/25J",
		"distinguishingAttributes": {
			"reference": "S10/25J",
			"Fonction déclarée": "Finish Stapler",
			"Masse kg (lb)": "1.2 (2.6)"
		}
	},
	"editorial": {
		"overview": "BASSO S10/25J. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Finish Stapler. Masse kg (lb) : 1.2 (2.6).",
		"verifiedFacts": [
			"Fonction déclarée : Finish Stapler.",
			"Masse kg (lb) : 1.2 (2.6).",
			"Capacité du chargeur : 118.",
			"Longueur × largeur × hauteur (mm) : 245 x 55 x 195.",
			"Champ fabricant : C / D A X B ( Gauge) : 11.2 / 10.0 1.2 x .6mm (20)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Finish Stapler",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.2 (2.6)",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "118",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "245 x 55 x 195",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "11.2 / 10.0 1.2 x .6mm (20)",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-41-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-41-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215146/Finish-Stapler-S10-25J.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : db8f7e17c5f2ddd8281cef67320fde267e8948aa3c4f77c91206abf38bbf367f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-41-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-41-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-41-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
