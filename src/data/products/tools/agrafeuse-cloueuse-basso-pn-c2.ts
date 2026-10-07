import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-pn-c2",
	"slug": "agrafeuse-cloueuse-basso-pn-c2",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO PN-C2",
	"brand": "BASSO",
	"model": "PN-C2",
	"mpn": "PN-C2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-pn-c2.webp",
		"alt": "Repères techniques : BASSO PN-C2",
		"sourceUrl": "https://www.basso.com.tw/en/product-216394/Palm-Nailer-PN-C2.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-pn-c2",
		"label": "Référence PN-C2",
		"distinguishingAttributes": {
			"reference": "PN-C2",
			"Fonction déclarée": "Palm Nailer",
			"Masse kg (lb)": "1.0 (2.2)"
		}
	},
	"editorial": {
		"overview": "BASSO PN-C2. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Palm Nailer. Masse kg (lb) : 1.0 (2.2).",
		"verifiedFacts": [
			"Fonction déclarée : Palm Nailer.",
			"Masse kg (lb) : 1.0 (2.2).",
			"Longueur × largeur × hauteur (mm) : 248 x 82 x 124.",
			"Mode de déclenchement : Multi-Blow.",
			"Champ fabricant : Ø : ø 2.0~ 7.9mm (.08”~ .31”)."
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
				"october3c-tools-basso-product-105-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.0 (2.2)",
			"evidenceIds": [
				"october3c-tools-basso-product-105-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "248 x 82 x 124",
			"evidenceIds": [
				"october3c-tools-basso-product-105-p1"
			]
		},
		{
			"label": "Mode de déclenchement",
			"value": "Multi-Blow",
			"evidenceIds": [
				"october3c-tools-basso-product-105-p1"
			]
		},
		{
			"label": "Champ fabricant : Ø",
			"value": "ø 2.0~ 7.9mm (.08”~ .31”)",
			"evidenceIds": [
				"october3c-tools-basso-product-105-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-105-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-105-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-216394/Palm-Nailer-PN-C2.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5a30861a02c04afe5f8261cc7017c3599b99a2867601eaf2461c319f337998b3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-105-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-105-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-105-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
