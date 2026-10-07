import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s80-16lm",
	"slug": "agrafeuse-cloueuse-basso-s80-16lm",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S80/16LM",
	"brand": "BASSO",
	"model": "S80/16LM",
	"mpn": "S80/16LM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s80-16lm.webp",
		"alt": "Repères techniques : BASSO S80/16LM",
		"sourceUrl": "https://www.basso.com.tw/en/product-214725/Fine-Wire-Stapler-S80-16LM.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s80-16lm",
		"label": "Référence S80/16LM",
		"distinguishingAttributes": {
			"reference": "S80/16LM",
			"Fonction déclarée": "Fine Wire Stapler",
			"Masse kg (lb)": "1.35 (2.96)"
		}
	},
	"editorial": {
		"overview": "BASSO S80/16LM. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Fine Wire Stapler. Masse kg (lb) : 1.35 (2.96).",
		"verifiedFacts": [
			"Fonction déclarée : Fine Wire Stapler.",
			"Masse kg (lb) : 1.35 (2.96).",
			"Capacité du chargeur : 305.",
			"Longueur × largeur × hauteur (mm) : 377 x 44 x 160.",
			"Champ fabricant : C / D A X B ( Gauge) : Auto Long Magazine ; Auto."
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
				"october3c-tools-basso-product-5-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.35 (2.96)",
			"evidenceIds": [
				"october3c-tools-basso-product-5-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "305",
			"evidenceIds": [
				"october3c-tools-basso-product-5-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "377 x 44 x 160",
			"evidenceIds": [
				"october3c-tools-basso-product-5-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "Auto Long Magazine ; Auto",
			"evidenceIds": [
				"october3c-tools-basso-product-5-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-5-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-5-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-214725/Fine-Wire-Stapler-S80-16LM.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ae67ec26a9d9407ac6755eeabbb4a21f16f0be92954992594677806d18763ed7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-5-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-5-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-5-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
