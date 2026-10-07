import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-pn-f2-roofing",
	"slug": "agrafeuse-cloueuse-basso-pn-f2-roofing",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO PN-F2 (Roofing)",
	"brand": "BASSO",
	"model": "PN-F2 (Roofing)",
	"mpn": "PN-F2 (Roofing)",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-pn-f2-roofing.webp",
		"alt": "Repères techniques : BASSO PN-F2 (Roofing)",
		"sourceUrl": "https://www.basso.com.tw/en/product-216391/Palm-Nailer-PN-F2-Roofing.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-pn-f2-roofing",
		"label": "Référence PN-F2 (Roofing)",
		"distinguishingAttributes": {
			"reference": "PN-F2 (Roofing)",
			"Fonction déclarée": "Palm Nailer",
			"Masse kg (lb)": "0.46 (0.92)"
		}
	},
	"editorial": {
		"overview": "BASSO PN-F2 (Roofing). Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Palm Nailer. Masse kg (lb) : 0.46 (0.92).",
		"verifiedFacts": [
			"Fonction déclarée : Palm Nailer.",
			"Masse kg (lb) : 0.46 (0.92).",
			"Longueur × largeur × hauteur (mm) : 68.2 x 55.9 x 101.3.",
			"Mode de déclenchement : Multi-Blow.",
			"Champ fabricant : Ø : ø 3 (.118”)."
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
				"october3c-tools-basso-product-103-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "0.46 (0.92)",
			"evidenceIds": [
				"october3c-tools-basso-product-103-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "68.2 x 55.9 x 101.3",
			"evidenceIds": [
				"october3c-tools-basso-product-103-p1"
			]
		},
		{
			"label": "Mode de déclenchement",
			"value": "Multi-Blow",
			"evidenceIds": [
				"october3c-tools-basso-product-103-p1"
			]
		},
		{
			"label": "Champ fabricant : Ø",
			"value": "ø 3 (.118”)",
			"evidenceIds": [
				"october3c-tools-basso-product-103-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-103-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-103-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-216391/Palm-Nailer-PN-F2-Roofing.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7f5ec3798fe0c47645b91aac19134f7c1a9c55367e2efca8592a05f84dfe3773. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-103-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-103-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-103-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
