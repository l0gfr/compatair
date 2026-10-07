import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s10-16j",
	"slug": "agrafeuse-cloueuse-basso-s10-16j",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S10/16J",
	"brand": "BASSO",
	"model": "S10/16J",
	"mpn": "S10/16J",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s10-16j.webp",
		"alt": "Repères techniques : BASSO S10/16J",
		"sourceUrl": "https://www.basso.com.tw/en/product-214757/Fine-Wire-Stapler-S10-16J.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s10-16j",
		"label": "Référence S10/16J",
		"distinguishingAttributes": {
			"reference": "S10/16J",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "0.9 (2.0)"
		}
	},
	"editorial": {
		"overview": "BASSO S10/16J. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 0.9 (2.0).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 0.9 (2.0).",
			"Capacité du chargeur : 134.",
			"Longueur × largeur × hauteur (mm) : 237 x 42 x 152.",
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
			"value": "Fine Wire Stapler",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.9 (2.0)",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "134",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "237 x 42 x 152",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "11.2 / 10.0 1.2 x .6mm (20)",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-11-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-11-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214757/Fine-Wire-Stapler-S10-16J.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 15979ed94d73874e960cebfb0c9498577ce742d2e1bee5043c3dea671af118e5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-11-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-11-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-11-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
