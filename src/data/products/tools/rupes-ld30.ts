import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ld30",
	"slug": "rupes-ld30",
	"brand": "RUPES",
	"model": "LD30",
	"mpn": "LD30",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES LD30",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ld30.webp",
		"alt": "Repères techniques RUPES LD30, référence LD30",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES LD30, référence LD30. Le tableau fabricant publie 130 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 1,5 mm. Diamètre de plateau : 30 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : LD30.",
			"Diamètre d’orbite : 1,5 mm.",
			"Diamètre de plateau : 30 mm.",
			"Masse publiée : 0,65 kg."
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
				"rupes-ld30-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ld30-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "1,5 mm",
			"evidenceIds": [
				"rupes-ld30-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "30 mm",
			"evidenceIds": [
				"rupes-ld30-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,65 kg",
			"evidenceIds": [
				"rupes-ld30-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "7500 tr/min",
			"evidenceIds": [
				"rupes-ld30-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ld30-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 57, réf. LD30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ld30-20260926"
		],
		"workingPressureBar": [
			"rupes-ld30-20260926"
		],
		"airflowLpm": [
			"rupes-ld30-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	}
};

export default product;
