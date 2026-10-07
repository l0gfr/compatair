import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-yokota-hsa-6ak",
	"slug": "ponceuse-rotative-yokota-hsa-6ak",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Yokota HSA-6AK",
	"brand": "Yokota",
	"model": "HSA-6AK",
	"mpn": "HSA-6AK",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-yokota-hsa-6ak.webp",
		"alt": "Repères techniques : Yokota HSA-6AK",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-hsa-6ak",
		"label": "Référence HSA-6AK",
		"distinguishingAttributes": {
			"reference": "HSA-6AK",
			"Vitesse à vide": "5000 tr/min",
			"Longueur": "212 mm"
		}
	},
	"editorial": {
		"overview": "Yokota HSA-6AK. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 5000 tr/min. Longueur : 212 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 5000 tr/min.",
			"Longueur : 212 mm.",
			"Masse : 1.8 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Longueur",
			"value": "212 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Masse",
			"value": "1.8 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "700 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p57",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=57",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p57"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p57"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p57"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
