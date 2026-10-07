import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ta156a",
	"slug": "rupes-ta156a",
	"brand": "RUPES",
	"model": "TA156A",
	"mpn": "TA156A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES TA156A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ta156a.webp",
		"alt": "Repères techniques RUPES TA156A, référence TA156A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=63",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES TA156A, référence TA156A. Le tableau fabricant publie 480 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 6 mm. Diamètre de plateau : 150 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : TA156A.",
			"Diamètre d’orbite : 6 mm.",
			"Diamètre de plateau : 150 mm.",
			"Masse publiée : 1,1 kg."
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
				"rupes-ta156a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ta156a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "6 mm",
			"evidenceIds": [
				"rupes-ta156a-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "150 mm",
			"evidenceIds": [
				"rupes-ta156a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,1 kg",
			"evidenceIds": [
				"rupes-ta156a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0-11.000 tr/min",
			"evidenceIds": [
				"rupes-ta156a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ta156a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=63",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 63, réf. TA156A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ta156a-20260926"
		],
		"workingPressureBar": [
			"rupes-ta156a-20260926"
		],
		"airflowLpm": [
			"rupes-ta156a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	}
};

export default product;
