import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-rh323t",
	"slug": "rupes-rh323t",
	"brand": "RUPES",
	"model": "RH323T",
	"mpn": "RH323T",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES RH323T",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-rh323t.webp",
		"alt": "Repères techniques RUPES RH323T, référence RH323T",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=61",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RH323T, référence RH323T. Le tableau fabricant publie 340 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Diamètre de plateau : 125 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RH323T.",
			"Diamètre d’orbite : 3 mm.",
			"Diamètre de plateau : 125 mm.",
			"Masse publiée : 0,8 kg."
		],
		"limitations": [
			"Le débit concerne l’outil. L’aspiration externe et les autres consommateurs de l’atelier doivent être examinés séparément.",
			"Les variantes d’orbite et de plateau ne sont pas interchangeables pour un même objectif de finition."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "125 mm",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11.000 tr/min",
			"evidenceIds": [
				"rupes-rh323t-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-rh323t-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=61",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 61, réf. RH323T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-rh323t-20260926"
		],
		"workingPressureBar": [
			"rupes-rh323t-20260926"
		],
		"airflowLpm": [
			"rupes-rh323t-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	}
};

export default product;
