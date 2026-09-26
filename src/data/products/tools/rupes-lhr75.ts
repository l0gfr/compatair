const product = {
	"id": "rupes-lhr75",
	"slug": "rupes-lhr75",
	"brand": "RUPES",
	"model": "LHR75",
	"mpn": "LHR75",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "RUPES LHR75",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-lhr75.webp",
		"alt": "Repères techniques RUPES LHR75, référence LHR75",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES LHR75, référence LHR75. Le tableau fabricant publie 320 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Vitesse publiée : 0 - 11000 tr/min. Diamètre d’orbite : 15 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : LHR75.",
			"Vitesse publiée : 0 - 11000 tr/min.",
			"Diamètre d’orbite : 15 mm.",
			"Diamètre de plateau : 75 mm."
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
				"rupes-lhr75-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-lhr75-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-lhr75-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "15 mm",
			"evidenceIds": [
				"rupes-lhr75-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "75 mm",
			"evidenceIds": [
				"rupes-lhr75-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-lhr75-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 65, réf. LHR75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-lhr75-20260926"
		],
		"workingPressureBar": [
			"rupes-lhr75-20260926"
		],
		"airflowLpm": [
			"rupes-lhr75-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 320,
		"typical": 320,
		"max": 320
	}
};

export default product;
