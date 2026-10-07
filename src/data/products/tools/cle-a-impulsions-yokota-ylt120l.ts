import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-yokota-ylt120l",
	"slug": "cle-a-impulsions-yokota-ylt120l",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLT120L",
	"brand": "Yokota",
	"model": "YLT120L",
	"mpn": "YLT120L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 5,
		"max": 5
	},
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-ylt120l.webp",
		"alt": "Repères techniques : Yokota YLT120L",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-ylt120l",
		"label": "Référence YLT120L",
		"distinguishingAttributes": {
			"reference": "YLT120L",
			"Capacité de vissage publiée": "M12",
			"Vitesse à vide": "5200 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YLT120L. Consommation en charge : 490 L/min à 5 bar. Capacité de vissage publiée : M12. Vitesse à vide : 5200 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M12.",
			"Vitesse à vide : 5200 tr/min."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M12",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5200 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "負荷時空気消費量 (ℓ/min) (0.5MPa時)",
			"evidenceIds": [
				"october2-tools-yokota-jp-p29"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "490 L/min",
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
		"Consommation en charge : 490 L/min à 5 bar."
	]
};

export default product;
