import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s80-16ln",
	"slug": "agrafeuse-cloueuse-basso-s80-16ln",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S80/16LN",
	"brand": "BASSO",
	"model": "S80/16LN",
	"mpn": "S80/16LN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s80-16ln.webp",
		"alt": "Repères techniques : BASSO S80/16LN",
		"sourceUrl": "https://www.basso.com.tw/en/product-214726/Fine-Wire-Stapler-S80-16LN.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s80-16ln",
		"label": "Référence S80/16LN",
		"distinguishingAttributes": {
			"reference": "S80/16LN",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "1.04 (2.29)"
		}
	},
	"editorial": {
		"overview": "BASSO S80/16LN. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 1.04 (2.29).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 1.04 (2.29).",
			"Capacité du chargeur : 154.",
			"Longueur × largeur × hauteur (mm) : 227 x 44 x 204.",
			"Champ fabricant : C / D A X B ( Gauge) : Long Nose."
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
				"october3c-tools-basso-product-6-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.04 (2.29)",
			"evidenceIds": [
				"october3c-tools-basso-product-6-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "154",
			"evidenceIds": [
				"october3c-tools-basso-product-6-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "227 x 44 x 204",
			"evidenceIds": [
				"october3c-tools-basso-product-6-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "Long Nose",
			"evidenceIds": [
				"october3c-tools-basso-product-6-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-6-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-6-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214726/Fine-Wire-Stapler-S80-16LN.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 832d0a9a84c3dd8fe785bae34520be697fb0e177603cf9b9842e251cdbf53cfc. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-6-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-6-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-6-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
