import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ta562an",
	"slug": "rupes-ta562an",
	"brand": "RUPES",
	"model": "TA562AN",
	"mpn": "TA562AN",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES TA562AN",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ta562an.webp",
		"alt": "Repères techniques RUPES TA562AN, référence TA562AN",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=63",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES TA562AN, référence TA562AN. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 5,2 mm. Diamètre de plateau : 200 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : TA562AN.",
			"Diamètre d’orbite : 5,2 mm.",
			"Diamètre de plateau : 200 mm.",
			"Masse publiée : 2 kg."
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
				"rupes-ta562an-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ta562an-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "5,2 mm",
			"evidenceIds": [
				"rupes-ta562an-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "200 mm",
			"evidenceIds": [
				"rupes-ta562an-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2 kg",
			"evidenceIds": [
				"rupes-ta562an-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "4000 - 10000 tr/min",
			"evidenceIds": [
				"rupes-ta562an-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ta562an-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=63",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 63, réf. TA562AN",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ta562an-20260926"
		],
		"workingPressureBar": [
			"rupes-ta562an-20260926"
		],
		"airflowLpm": [
			"rupes-ta562an-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	}
};

export default product;
