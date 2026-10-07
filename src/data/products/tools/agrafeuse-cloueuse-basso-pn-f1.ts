import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-pn-f1",
	"slug": "agrafeuse-cloueuse-basso-pn-f1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO PN-F1",
	"brand": "BASSO",
	"model": "PN-F1",
	"mpn": "PN-F1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-pn-f1.webp",
		"alt": "Repères techniques : BASSO PN-F1",
		"sourceUrl": "https://www.basso.com.tw/en/product-216390/Palm-Nailer-PN-F1.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-pn-f1",
		"label": "Référence PN-F1",
		"distinguishingAttributes": {
			"reference": "PN-F1",
			"Fonction déclarée": "Palm Nailer",
			"Masse kg (lb)": "0.5 (1.1)"
		}
	},
	"editorial": {
		"overview": "BASSO PN-F1. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Palm Nailer. Masse kg (lb) : 0.5 (1.1).",
		"verifiedFacts": [
			"Fonction déclarée : Palm Nailer.",
			"Masse kg (lb) : 0.5 (1.1).",
			"Longueur × largeur × hauteur (mm) : 69 x 56 x 103.",
			"Mode de déclenchement : Multi-Blow.",
			"Champ fabricant : Ø : ø 2.0~ 4.0mm (.08”~ .16”)."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Palm Nailer",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.5 (1.1)",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "69 x 56 x 103",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		},
		{
			"label": "Mode de déclenchement",
			"value": "Multi-Blow",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		},
		{
			"label": "Champ fabricant : Ø",
			"value": "ø 2.0~ 4.0mm (.08”~ .16”)",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-102-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-102-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-216390/Palm-Nailer-PN-F1.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0df4e231ff06a97db105a5fd008b86b5b8b461ef16a7f1f198570fed5b66946b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-102-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-102-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-102-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
