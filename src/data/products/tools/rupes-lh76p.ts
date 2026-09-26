const product = {
	"id": "rupes-lh76p",
	"slug": "rupes-lh76p",
	"brand": "RUPES",
	"model": "LH76P",
	"mpn": "LH76P",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "RUPES LH76P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-lh76p.webp",
		"alt": "Repères techniques RUPES LH76P, référence LH76P",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES LH76P, référence LH76P. Le tableau fabricant publie 644 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre de plateau : 75 mm. Masse publiée : 1 kg.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : LH76P.",
			"Diamètre de plateau : 75 mm.",
			"Masse publiée : 1 kg.",
			"Vitesse publiée : 5000 tr/min."
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
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "75 mm",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "5000 tr/min",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-lh76p-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 65, réf. LH76P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-lh76p-20260926"
		],
		"workingPressureBar": [
			"rupes-lh76p-20260926"
		],
		"airflowLpm": [
			"rupes-lh76p-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 644,
		"typical": 644,
		"max": 644
	}
};

export default product;
