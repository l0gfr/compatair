const product = {
	"id": "rupes-re21acm",
	"slug": "rupes-re21acm",
	"brand": "RUPES",
	"model": "RE21ACM",
	"mpn": "RE21ACM",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES RE21ACM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-re21acm.webp",
		"alt": "Repères techniques RUPES RE21ACM, référence RE21ACM",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RE21ACM, référence RE21ACM. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Format de plateau : 80x130 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RE21ACM.",
			"Diamètre d’orbite : 3 mm.",
			"Format de plateau : 80x130 mm.",
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
				"rupes-re21acm-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-re21acm-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-re21acm-20260926"
			]
		},
		{
			"label": "Format de plateau",
			"value": "80x130 mm",
			"evidenceIds": [
				"rupes-re21acm-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,87 kg",
			"evidenceIds": [
				"rupes-re21acm-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-re21acm-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-re21acm-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 55, réf. RE21ACM",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-re21acm-20260926"
		],
		"workingPressureBar": [
			"rupes-re21acm-20260926"
		],
		"airflowLpm": [
			"rupes-re21acm-20260926"
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
