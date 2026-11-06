import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ra150a",
	"slug": "rupes-ra150a",
	"brand": "RUPES",
	"model": "RA150A",
	"mpn": "RA150A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES RA150A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ra150a-20261106.svg",
		"alt": "Repères techniques RUPES RA150A, référence RA150A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RA150A, référence RA150A. Le tableau fabricant publie 380 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 5 mm. Diamètre de plateau : 150 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RA150A.",
			"Diamètre d’orbite : 5 mm.",
			"Diamètre de plateau : 150 mm.",
			"Masse publiée : 0,95 kg."
		],
		"limitations": [
			"Le débit concerne l’outil. L’aspiration externe et les autres consommateurs de l’atelier doivent être examinés séparément.",
			"Les variantes d’orbite et de plateau ne sont pas interchangeables pour un même objectif de finition.",
			"Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "150 mm",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,95 kg",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-ra150a-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "380 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:rupes-ra150a:1"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ra150a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 62, réf. RA150A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "review:2026-11-06-followup:rupes-ra150a:1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
			"sourceLabel": "RUPES, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue62 RA150A,orbite5/plateau150,0,95kg etAirconsumptionmax380Lmin; service6,2bar donné séparément. Le tableau n’atteste pas la pression de mesure380Lmin; traiter la donnée comme non dimensionnante, distinct AK150A à400. SHA-256 du document complet : 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ra150a-20260926"
		],
		"workingPressureBar": [
			"rupes-ra150a-20260926"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:rupes-ra150a:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;
