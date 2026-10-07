import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-yokota-ylt50",
	"slug": "cle-a-impulsions-yokota-ylt50",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLT50",
	"brand": "Yokota",
	"model": "YLT50",
	"mpn": "YLT50",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-ylt50.webp",
		"alt": "Repères techniques : Yokota YLT50",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-ylt50",
		"label": "Référence YLT50",
		"distinguishingAttributes": {
			"reference": "YLT50",
			"Capacité de vissage publiée": "M5",
			"Vitesse à vide": "4300 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YLT50. Consommation en charge : 250 L/min à 6 bar. Capacité de vissage publiée : M5. Vitesse à vide : 4300 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M5.",
			"Vitesse à vide : 4300 tr/min."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M5",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4300 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "負荷時空気消費量 (ℓ/min) (0.6MPa時)",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "250 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p29",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=29",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p29"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p29"
		],
		"airflowLpm": [
			"october2-tools-yokota-jp-p29"
		]
	},
	"notes": [
		"Consommation en charge : 250 L/min à 6 bar."
	]
};

export default product;
