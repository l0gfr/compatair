import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s80-30",
	"slug": "agrafeuse-cloueuse-basso-s80-30",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S80/30",
	"brand": "BASSO",
	"model": "S80/30",
	"mpn": "S80/30",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s80-30.webp",
		"alt": "Repères techniques : BASSO S80/30",
		"sourceUrl": "https://www.basso.com.tw/en/product-214735/Fine-Wire-Stapler-S80-30.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s80-30",
		"label": "Référence S80/30",
		"distinguishingAttributes": {
			"reference": "S80/30",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "1.2 (2.6)"
		}
	},
	"editorial": {
		"overview": "BASSO S80/30. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 1.2 (2.6).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 1.2 (2.6).",
			"Capacité du chargeur : 157.",
			"Longueur × largeur × hauteur (mm) : 237 x 55 x 200.",
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
				"october3c-tools-basso-product-7-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.2 (2.6)",
			"evidenceIds": [
				"october3c-tools-basso-product-7-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "157",
			"evidenceIds": [
				"october3c-tools-basso-product-7-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "237 x 55 x 200",
			"evidenceIds": [
				"october3c-tools-basso-product-7-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "AT Wire 12.8 / 11.5 .95 x .65mm (21)",
			"evidenceIds": [
				"october3c-tools-basso-product-7-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-7-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-7-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214735/Fine-Wire-Stapler-S80-30.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 45c1e695b09d6b4a17193cf9a2d2ab11307d208285c3c943f48aa15aef8d9da5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-7-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-7-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-7-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
