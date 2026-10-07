import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-bs50",
	"slug": "agrafeuse-cloueuse-basso-bs50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO BS50",
	"brand": "BASSO",
	"model": "BS50",
	"mpn": "BS50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-bs50.webp",
		"alt": "Repères techniques : BASSO BS50",
		"sourceUrl": "https://www.basso.com.tw/en/product-215488/Stapler-BS50.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-bs50",
		"label": "Référence BS50",
		"distinguishingAttributes": {
			"reference": "BS50",
			"Fonction déclarée": "Stapler",
			"Masse kg (lb)": "1.4 (3.1)"
		}
	},
	"editorial": {
		"overview": "BASSO BS50. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Stapler. Masse kg (lb) : 1.4 (3.1).",
		"verifiedFacts": [
			"Fonction déclarée : Stapler.",
			"Masse kg (lb) : 1.4 (3.1).",
			"Capacité du chargeur : 100.",
			"Longueur × largeur × hauteur (mm) : 248 x 54 x 247.",
			"Champ fabricant : C / D A X B ( Gauge) : 5.8 / 3.8 1.25 x 1.0mm (18) ; 1.25 x 1.0mm (18)."
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
				"october3c-tools-basso-product-46-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.4 (3.1)",
			"evidenceIds": [
				"october3c-tools-basso-product-46-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "100",
			"evidenceIds": [
				"october3c-tools-basso-product-46-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "248 x 54 x 247",
			"evidenceIds": [
				"october3c-tools-basso-product-46-p1"
			]
		},
		{
			"label": "Champ fabricant : C / D A X B ( Gauge)",
			"value": "5.8 / 3.8 1.25 x 1.0mm (18) ; 1.25 x 1.0mm (18)",
			"evidenceIds": [
				"october3c-tools-basso-product-46-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-46-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-46-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-215488/Stapler-BS50.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c5d8c8df75e69bd3f857cfff3d088a5bac9c907c726ccfc0daa537f5778e36d7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-46-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-46-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-46-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
