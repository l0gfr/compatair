import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s10-13j",
	"slug": "agrafeuse-cloueuse-basso-s10-13j",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S10/13J",
	"brand": "BASSO",
	"model": "S10/13J",
	"mpn": "S10/13J",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s10-13j.webp",
		"alt": "Repères techniques : BASSO S10/13J",
		"sourceUrl": "https://www.basso.com.tw/en/product-214751/Fine-Wire-Stapler-S10-13J.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s10-13j",
		"label": "Référence S10/13J",
		"distinguishingAttributes": {
			"reference": "S10/13J",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "0.79 (1.74)"
		}
	},
	"editorial": {
		"overview": "BASSO S10/13J. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 0.79 (1.74).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 0.79 (1.74).",
			"Capacité du chargeur : 125.",
			"Longueur × largeur × hauteur (mm) : 217 x 44 x 155.",
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
				"october3c-tools-basso-product-10-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.79 (1.74)",
			"evidenceIds": [
				"october3c-tools-basso-product-10-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "125",
			"evidenceIds": [
				"october3c-tools-basso-product-10-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "217 x 44 x 155",
			"evidenceIds": [
				"october3c-tools-basso-product-10-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "11.2 / 10.0 1.2 x .6mm (20)",
			"evidenceIds": [
				"october3c-tools-basso-product-10-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-10-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-10-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214751/Fine-Wire-Stapler-S10-13J.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b327b47e167beb1f399c26d63aca3f2760ace91d335e499e543b349fe85f120e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-10-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-10-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-10-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
