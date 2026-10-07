import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s10-10f",
	"slug": "agrafeuse-cloueuse-basso-s10-10f",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S10/10F",
	"brand": "BASSO",
	"model": "S10/10F",
	"mpn": "S10/10F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s10-10f.webp",
		"alt": "Repères techniques : BASSO S10/10F",
		"sourceUrl": "https://www.basso.com.tw/en/product-215054/Fine-Wire-Stapler-S10-10F.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s10-10f",
		"label": "Référence S10/10F",
		"distinguishingAttributes": {
			"reference": "S10/10F",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "0.8 (1.7)"
		}
	},
	"editorial": {
		"overview": "BASSO S10/10F. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 0.8 (1.7).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 0.8 (1.7).",
			"Capacité du chargeur : 180.",
			"Longueur × largeur × hauteur (mm) : 222 x 44 x 153.",
			"Champ fabricant : C / D A X B ( Gauge) : 11.2 / 10.2 .7 x .5mm (23)."
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
				"october3c-tools-basso-product-21-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.8 (1.7)",
			"evidenceIds": [
				"october3c-tools-basso-product-21-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "180",
			"evidenceIds": [
				"october3c-tools-basso-product-21-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "222 x 44 x 153",
			"evidenceIds": [
				"october3c-tools-basso-product-21-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "11.2 / 10.2 .7 x .5mm (23)",
			"evidenceIds": [
				"october3c-tools-basso-product-21-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-21-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-21-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215054/Fine-Wire-Stapler-S10-10F.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c80223952eb8180b148cd57dc408a40eb2b2ce649cba78b307056ac94a5b7c6a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-21-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-21-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-21-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
