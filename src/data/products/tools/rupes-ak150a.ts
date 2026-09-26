const product = {
	"id": "rupes-ak150a",
	"slug": "rupes-ak150a",
	"brand": "RUPES",
	"model": "AK150A",
	"mpn": "AK150A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES AK150A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ak150a.webp",
		"alt": "Repères techniques RUPES AK150A, référence AK150A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=64",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES AK150A, référence AK150A. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 5 mm. Diamètre de plateau : 150 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : AK150A.",
			"Diamètre d’orbite : 5 mm.",
			"Diamètre de plateau : 150 mm.",
			"Masse publiée : 1,7 kg."
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
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "150 mm",
			"evidenceIds": [
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,7 kg",
			"evidenceIds": [
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "250 - 700 tr/min",
			"evidenceIds": [
				"rupes-ak150a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ak150a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=64",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 64, réf. AK150A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ak150a-20260926"
		],
		"workingPressureBar": [
			"rupes-ak150a-20260926"
		],
		"airflowLpm": [
			"rupes-ak150a-20260926"
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
