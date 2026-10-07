import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-rs21a",
	"slug": "rupes-rs21a",
	"brand": "RUPES",
	"model": "RS21A",
	"mpn": "RS21A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES RS21A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-rs21a.webp",
		"alt": "Repères techniques RUPES RS21A, référence RS21A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RS21A, référence RS21A. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Format de plateau : Delta.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RS21A.",
			"Diamètre d’orbite : 3 mm.",
			"Format de plateau : Delta.",
			"Masse publiée : 0,87 kg."
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
				"rupes-rs21a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-rs21a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-rs21a-20260926"
			]
		},
		{
			"label": "Format de plateau",
			"value": "Delta",
			"evidenceIds": [
				"rupes-rs21a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,87 kg",
			"evidenceIds": [
				"rupes-rs21a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-rs21a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-rs21a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 55, réf. RS21A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-rs21a-20260926"
		],
		"workingPressureBar": [
			"rupes-rs21a-20260926"
		],
		"airflowLpm": [
			"rupes-rs21a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
