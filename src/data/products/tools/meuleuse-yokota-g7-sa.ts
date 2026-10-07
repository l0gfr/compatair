import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-yokota-g7-sa",
	"slug": "meuleuse-yokota-g7-sa",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G7-SA",
	"brand": "Yokota",
	"model": "G7-SA",
	"mpn": "G7-SA",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-yokota-g7-sa.webp",
		"alt": "Repères techniques : Yokota G7-SA",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-g7-sa",
		"label": "Référence G7-SA",
		"distinguishingAttributes": {
			"reference": "G7-SA",
			"Vitesse à vide": "7500 tr/min",
			"Longueur": "260 mm"
		}
	},
	"editorial": {
		"overview": "Yokota G7-SA. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Longueur : 260 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Longueur : 260 mm.",
			"Masse : 2.7 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Longueur",
			"value": "260 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Masse",
			"value": "2.7 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "800 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p56",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=56",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p56"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p56"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p56"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
