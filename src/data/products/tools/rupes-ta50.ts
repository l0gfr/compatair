import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ta50",
	"slug": "rupes-ta50",
	"brand": "RUPES",
	"model": "TA50",
	"mpn": "TA50",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES TA50",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ta50.webp",
		"alt": "Repères techniques RUPES TA50, référence TA50",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES TA50, référence TA50. Le tableau fabricant publie 330 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Diamètre de plateau : 50 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : TA50.",
			"Diamètre d’orbite : 3 mm.",
			"Diamètre de plateau : 50 mm.",
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
				"rupes-ta50-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ta50-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-ta50-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "50 mm",
			"evidenceIds": [
				"rupes-ta50-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,65 kg",
			"evidenceIds": [
				"rupes-ta50-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "15000 tr/min",
			"evidenceIds": [
				"rupes-ta50-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ta50-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 57, réf. TA50",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ta50-20260926"
		],
		"workingPressureBar": [
			"rupes-ta50-20260926"
		],
		"airflowLpm": [
			"rupes-ta50-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 330,
		"typical": 330,
		"max": 330
	}
};

export default product;
