import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s10-40",
	"slug": "agrafeuse-cloueuse-basso-s10-40",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S10/40",
	"brand": "BASSO",
	"model": "S10/40",
	"mpn": "S10/40",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s10-40.webp",
		"alt": "Repères techniques : BASSO S10/40",
		"sourceUrl": "https://www.basso.com.tw/en/product-215649/Stapler-S10-40.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s10-40",
		"label": "Référence S10/40",
		"distinguishingAttributes": {
			"reference": "S10/40",
			"Fonction déclarée": "Stapler",
			"Masse kg (lb)": "1.3 (2.8)"
		}
	},
	"editorial": {
		"overview": "BASSO S10/40. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Stapler. Masse kg (lb) : 1.3 (2.8).",
		"verifiedFacts": [
			"Fonction déclarée : Stapler.",
			"Masse kg (lb) : 1.3 (2.8).",
			"Capacité du chargeur : 138.",
			"Longueur × largeur × hauteur (mm) : 266 x 60 x 253.",
			"Champ fabricant : C / D A X B ( Gauge) : 10 / 7.8 1.25 x 1.0mm (18)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Stapler",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.3 (2.8)",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "138",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "266 x 60 x 253",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "10 / 7.8 1.25 x 1.0mm (18)",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-53-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-53-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215649/Stapler-S10-40.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 29ff5c6aea0bf5579a4a96a6ebd0388882a14c0926450acbebadbd9e655ffff8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-53-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-53-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-53-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
