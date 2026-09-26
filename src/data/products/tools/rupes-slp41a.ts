const product = {
	"id": "rupes-slp41a",
	"slug": "rupes-slp41a",
	"brand": "RUPES",
	"model": "SLP41A",
	"mpn": "SLP41A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES SLP41A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-slp41a.webp",
		"alt": "Repères techniques RUPES SLP41A, référence SLP41A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES SLP41A, référence SLP41A. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 4.8 mm. Format de plateau : 400x70 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : SLP41A.",
			"Diamètre d’orbite : 4.8 mm.",
			"Format de plateau : 400x70 mm.",
			"Masse publiée : 2,4 kg."
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
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "4.8 mm",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Format de plateau",
			"value": "400x70 mm",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "4000 - 10000 tr/min",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-slp41a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 56, réf. SLP41A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-slp41a-20260926"
		],
		"workingPressureBar": [
			"rupes-slp41a-20260926"
		],
		"airflowLpm": [
			"rupes-slp41a-20260926"
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
