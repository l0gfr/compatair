const product = {
	"id": "rupes-ra75",
	"slug": "rupes-ra75",
	"brand": "RUPES",
	"model": "RA75",
	"mpn": "RA75",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES RA75",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ra75.webp",
		"alt": "Repères techniques RUPES RA75, référence RA75",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RA75, référence RA75. Le tableau fabricant publie 380 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Diamètre de plateau : 75 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RA75.",
			"Diamètre d’orbite : 3 mm.",
			"Diamètre de plateau : 75 mm.",
			"Masse publiée : 0,68 kg."
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
				"rupes-ra75-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ra75-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-ra75-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "75 mm",
			"evidenceIds": [
				"rupes-ra75-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,68 kg",
			"evidenceIds": [
				"rupes-ra75-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-ra75-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ra75-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 62, réf. RA75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ra75-20260926"
		],
		"workingPressureBar": [
			"rupes-ra75-20260926"
		],
		"airflowLpm": [
			"rupes-ra75-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 380,
		"typical": 380,
		"max": 380
	}
};

export default product;
