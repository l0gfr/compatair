import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s80-16b",
	"slug": "agrafeuse-cloueuse-basso-s80-16b",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S80/16B",
	"brand": "BASSO",
	"model": "S80/16B",
	"mpn": "S80/16B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s80-16b.webp",
		"alt": "Repères techniques : BASSO S80/16B",
		"sourceUrl": "https://www.basso.com.tw/en/product-214741/Fine-Wire-Stapler-S80-16B.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s80-16b",
		"label": "Référence S80/16B",
		"distinguishingAttributes": {
			"reference": "S80/16B",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "0.86 (1.9)"
		}
	},
	"editorial": {
		"overview": "BASSO S80/16B. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 0.86 (1.9).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 0.86 (1.9).",
			"Capacité du chargeur : 191.",
			"Longueur × largeur × hauteur (mm) : 238 x 42 x 152.",
			"Champ fabricant : C / D A X B ( Gauge) : B Wire 12.8 / 11.7 .76 x .55mm (21)."
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
				"october3c-tools-basso-product-9-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.86 (1.9)",
			"evidenceIds": [
				"october3c-tools-basso-product-9-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "191",
			"evidenceIds": [
				"october3c-tools-basso-product-9-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "238 x 42 x 152",
			"evidenceIds": [
				"october3c-tools-basso-product-9-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "B Wire 12.8 / 11.7 .76 x .55mm (21)",
			"evidenceIds": [
				"october3c-tools-basso-product-9-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-9-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-9-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214741/Fine-Wire-Stapler-S80-16B.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 48109f0a6873e3ff1070596dae6afa6a4dde6910ee13172e9b66433e5cf664a8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-9-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-9-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-9-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
