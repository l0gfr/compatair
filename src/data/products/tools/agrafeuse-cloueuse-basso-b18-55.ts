import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-b18-55",
	"slug": "agrafeuse-cloueuse-basso-b18-55",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO B18/55",
	"brand": "BASSO",
	"model": "B18/55",
	"mpn": "B18/55",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-b18-55.webp",
		"alt": "Repères techniques : BASSO B18/55",
		"sourceUrl": "https://www.basso.com.tw/en/product-215630/Finish-Nailer-B18-55.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-b18-55",
		"label": "Référence B18/55",
		"distinguishingAttributes": {
			"reference": "B18/55",
			"Fonction déclarée": "Finish Nailer",
			"Masse kg (lb)": "1.1 (2.4)"
		}
	},
	"editorial": {
		"overview": "BASSO B18/55. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Finish Nailer. Masse kg (lb) : 1.1 (2.4).",
		"verifiedFacts": [
			"Fonction déclarée : Finish Nailer.",
			"Masse kg (lb) : 1.1 (2.4).",
			"Capacité du chargeur : 100.",
			"Longueur × largeur × hauteur (mm) : 244 x 66 x 255.",
			"Champ fabricant : C / D A X B ( Gauge) : 1.25 x 1.0mm (18)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Finish Nailer",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.1 (2.4)",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "100",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "244 x 66 x 255",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "1.25 x 1.0mm (18)",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-49-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-49-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215630/Finish-Nailer-B18-55.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f0d78ebdb91dc41d7fd85174ad8f54e92bcce4d095112eeaf67948bf19ae2e45. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-49-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-49-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-49-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
