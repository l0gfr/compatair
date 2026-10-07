import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-yokota-mg-0cs",
	"slug": "meuleuse-yokota-mg-0cs",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota MG-0CS",
	"brand": "Yokota",
	"model": "MG-0CS",
	"mpn": "MG-0CS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-yokota-mg-0cs.webp",
		"alt": "Repères techniques : Yokota MG-0CS",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-mg-0cs",
		"label": "Référence MG-0CS",
		"distinguishingAttributes": {
			"reference": "MG-0CS",
			"Vitesse à vide": "33000 tr/min",
			"Longueur": "209 mm"
		}
	},
	"editorial": {
		"overview": "Yokota MG-0CS. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 33000 tr/min. Longueur : 209 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 33000 tr/min.",
			"Longueur : 209 mm.",
			"Masse : 0.37 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "33000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Longueur",
			"value": "209 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Masse",
			"value": "0.37 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "180 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p52",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=52",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p52"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p52"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p52"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
