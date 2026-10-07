import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-16-851",
	"slug": "agrafeuse-cloueuse-basso-16-851",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO 16/851",
	"brand": "BASSO",
	"model": "16/851",
	"mpn": "16/851",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-16-851.webp",
		"alt": "Repères techniques : BASSO 16/851",
		"sourceUrl": "https://www.basso.com.tw/en/product-216159/Stapler-16-851.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-16-851",
		"label": "Référence 16/851",
		"distinguishingAttributes": {
			"reference": "16/851",
			"Fonction déclarée": "Stapler",
			"Masse kg (lb)": "2.5 (5.5)"
		}
	},
	"editorial": {
		"overview": "BASSO 16/851. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Stapler. Masse kg (lb) : 2.5 (5.5).",
		"verifiedFacts": [
			"Fonction déclarée : Stapler.",
			"Masse kg (lb) : 2.5 (5.5).",
			"Capacité du chargeur : 150.",
			"Longueur × largeur × hauteur (mm) : 369 x 93 x 286.",
			"Champ fabricant : C / D A X B ( Gauge) : 11.1 / 8.3 1.6 x 1.4mm (16)."
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
				"october3c-tools-basso-product-60-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "2.5 (5.5)",
			"evidenceIds": [
				"october3c-tools-basso-product-60-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "150",
			"evidenceIds": [
				"october3c-tools-basso-product-60-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "369 x 93 x 286",
			"evidenceIds": [
				"october3c-tools-basso-product-60-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "11.1 / 8.3 1.6 x 1.4mm (16)",
			"evidenceIds": [
				"october3c-tools-basso-product-60-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-60-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-60-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-216159/Stapler-16-851.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9ecdf5fb093a06373ac60db7804c638214b1bfc5db663f57c4333518d7e5d8e3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-60-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-60-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-60-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
