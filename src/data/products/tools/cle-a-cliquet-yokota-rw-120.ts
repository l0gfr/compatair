import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-yokota-rw-120",
	"slug": "cle-a-cliquet-yokota-rw-120",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Yokota RW-120",
	"brand": "Yokota",
	"model": "RW-120",
	"mpn": "RW-120",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-yokota-rw-120.webp",
		"alt": "Repères techniques : Yokota RW-120",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-rw-120",
		"label": "Référence RW-120",
		"distinguishingAttributes": {
			"reference": "RW-120",
			"Capacité de vissage publiée": "M10",
			"Vitesse à vide": "150 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota RW-120. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M10. Vitesse à vide : 150 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M10.",
			"Vitesse à vide : 150 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M10",
			"evidenceIds": [
				"october2-tools-yokota-jp-p42"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p42"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p42"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "400 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p42",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=42",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p42"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p42"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p42"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
