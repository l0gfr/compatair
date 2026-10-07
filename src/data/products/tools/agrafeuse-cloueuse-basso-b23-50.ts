import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-b23-50",
	"slug": "agrafeuse-cloueuse-basso-b23-50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO B23/50",
	"brand": "BASSO",
	"model": "B23/50",
	"mpn": "B23/50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-b23-50.webp",
		"alt": "Repères techniques : BASSO B23/50",
		"sourceUrl": "https://www.basso.com.tw/en/product-215105/Headless-Pinner-B23-50.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-b23-50",
		"label": "Référence B23/50",
		"distinguishingAttributes": {
			"reference": "B23/50",
			"Fonction déclarée": "Headless Pinner",
			"Masse kg (lb)": "1.2 (2.7)"
		}
	},
	"editorial": {
		"overview": "BASSO B23/50. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Headless Pinner. Masse kg (lb) : 1.2 (2.7).",
		"verifiedFacts": [
			"Fonction déclarée : Headless Pinner.",
			"Masse kg (lb) : 1.2 (2.7).",
			"Capacité du chargeur : 115.",
			"Longueur × largeur × hauteur (mm) : 256.2 x 61 x 243.",
			"Champ fabricant : Ø : Ø .64mm (23)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Headless Pinner",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.2 (2.7)",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "115",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "256.2 x 61 x 243",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		},
		{
			"label": "Champ fabricant : Ø",
			"value": "Ø .64mm (23)",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-31-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-31-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215105/Headless-Pinner-B23-50.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7297850813b9050e40a7c6752af4d0c6ac6c4f69c751779a2c44b8cd65180cf4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-31-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-31-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-31-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
