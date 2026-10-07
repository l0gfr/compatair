import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-s90-40l",
	"slug": "agrafeuse-cloueuse-basso-s90-40l",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO S90/40L",
	"brand": "BASSO",
	"model": "S90/40L",
	"mpn": "S90/40L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-s90-40l.webp",
		"alt": "Repères techniques : BASSO S90/40L",
		"sourceUrl": "https://www.basso.com.tw/en/product-215648/Stapler-S90-40L.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-s90-40l",
		"label": "Référence S90/40L",
		"distinguishingAttributes": {
			"reference": "S90/40L",
			"Fonction déclarée": "Stapler",
			"Masse kg (lb)": "1.2 (2.6)"
		}
	},
	"editorial": {
		"overview": "BASSO S90/40L. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Stapler. Masse kg (lb) : 1.2 (2.6).",
		"verifiedFacts": [
			"Fonction déclarée : Stapler.",
			"Masse kg (lb) : 1.2 (2.6).",
			"Capacité du chargeur : 100.",
			"Longueur × largeur × hauteur (mm) : 266 x 60 x 253.",
			"Champ fabricant : C / D A X B ( Gauge) : 5.8 / 3.8 1.25 x 1.0mm (18)."
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
				"october3c-tools-basso-product-52-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.2 (2.6)",
			"evidenceIds": [
				"october3c-tools-basso-product-52-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "100",
			"evidenceIds": [
				"october3c-tools-basso-product-52-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "266 x 60 x 253",
			"evidenceIds": [
				"october3c-tools-basso-product-52-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "5.8 / 3.8 1.25 x 1.0mm (18)",
			"evidenceIds": [
				"october3c-tools-basso-product-52-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-52-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-52-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215648/Stapler-S90-40L.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fc5c8adcaacb319af28883bf02fda9e63bda2f382b84a1f74909a263ad92554c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-52-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-52-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-52-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
