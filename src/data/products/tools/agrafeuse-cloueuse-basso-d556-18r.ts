import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-basso-d556-18r",
	"slug": "agrafeuse-cloueuse-basso-d556-18r",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "BASSO D556/18R",
	"brand": "BASSO",
	"model": "D556/18R",
	"mpn": "D556/18R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-basso-d556-18r.webp",
		"alt": "Repères techniques : BASSO D556/18R",
		"sourceUrl": "https://www.basso.com.tw/en/product-216412/Carton-Closer-D556-18R.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "basso-d556-18r",
		"label": "Référence D556/18R",
		"distinguishingAttributes": {
			"reference": "D556/18R",
			"Fonction déclarée": "Carton Closer",
			"Masse kg (lb)": "1.9 (4.3)"
		}
	},
	"editorial": {
		"overview": "BASSO D556/18R. Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur. Fonction déclarée : Carton Closer. Masse kg (lb) : 1.9 (4.3).",
		"verifiedFacts": [
			"Fonction déclarée : Carton Closer.",
			"Masse kg (lb) : 1.9 (4.3).",
			"Capacité du chargeur : 1000.",
			"Longueur × largeur × hauteur (mm) : 235 x 104 x 205.",
			"Mode de déclenchement : Single-Blow."
		],
		"limitations": [
			"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Carton Closer",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		},
		{
			"label": "Masse kg (lb)",
			"value": "1.9 (4.3)",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "1000",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		},
		{
			"label": "Longueur × largeur × hauteur (mm)",
			"value": "235 x 104 x 205",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		},
		{
			"label": "Mode de déclenchement",
			"value": "Single-Blow",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-basso-product-20-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-basso-product-20-p1",
			"sourceUrl": "https://www.basso.com.tw/en/product-216412/Carton-Closer-D556-18R.html",
			"sourceLabel": "Fiche fabricant BASSO, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : dd92951b642e05fe869dc22f5907c85efca062892f5e33fb852026e0fb8a9957. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-basso-product-20-p1"
		],
		"workingPressureBar": [
			"october3c-tools-basso-product-20-p1"
		],
		"demandExplanation": [
			"october3c-tools-basso-product-20-p1"
		]
	},
	"notes": [
		"Cette fiche précise les fixations, le chargeur et la géométrie du modèle. Elle ne fournit ni volume d’air par tir ni point de pression de consommation ; aucun débit n’est calculé à partir de la seule capacité du chargeur."
	]
};

export default product;
