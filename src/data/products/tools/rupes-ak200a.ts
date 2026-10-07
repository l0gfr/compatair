import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ak200a",
	"slug": "rupes-ak200a",
	"brand": "RUPES",
	"model": "AK200A",
	"mpn": "AK200A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES AK200A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ak200a.webp",
		"alt": "Repères techniques RUPES AK200A, référence AK200A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=64",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES AK200A, référence AK200A. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 5 mm. Diamètre de plateau : 200 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : AK200A.",
			"Diamètre d’orbite : 5 mm.",
			"Diamètre de plateau : 200 mm.",
			"Masse publiée : 2,3 kg."
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
				"rupes-ak200a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ak200a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"rupes-ak200a-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "200 mm",
			"evidenceIds": [
				"rupes-ak200a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,3 kg",
			"evidenceIds": [
				"rupes-ak200a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "350 - 900 tr/min",
			"evidenceIds": [
				"rupes-ak200a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ak200a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=64",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 64, réf. AK200A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ak200a-20260926"
		],
		"workingPressureBar": [
			"rupes-ak200a-20260926"
		],
		"airflowLpm": [
			"rupes-ak200a-20260926"
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
