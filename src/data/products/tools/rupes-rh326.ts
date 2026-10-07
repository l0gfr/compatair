import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-rh326",
	"slug": "rupes-rh326",
	"brand": "RUPES",
	"model": "RH326",
	"mpn": "RH326",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES RH326",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-rh326.webp",
		"alt": "Repères techniques RUPES RH326, référence RH326",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=60",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RH326, référence RH326. Le tableau fabricant publie 340 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 6 mm. Diamètre de plateau : 125 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RH326.",
			"Diamètre d’orbite : 6 mm.",
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
				"rupes-rh326-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-rh326-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "6 mm",
			"evidenceIds": [
				"rupes-rh326-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "125 mm",
			"evidenceIds": [
				"rupes-rh326-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"rupes-rh326-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-rh326-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-rh326-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=60",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 60, réf. RH326",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-rh326-20260926"
		],
		"workingPressureBar": [
			"rupes-rh326-20260926"
		],
		"airflowLpm": [
			"rupes-rh326-20260926"
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
