import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-re21aln",
	"slug": "rupes-re21aln",
	"brand": "RUPES",
	"model": "RE21ALN",
	"mpn": "RE21ALN",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES RE21ALN",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-re21aln.webp",
		"alt": "Repères techniques RUPES RE21ALN, référence RE21ALN",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RE21ALN, référence RE21ALN. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 3 mm. Format de plateau : 70x198 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : RE21ALN.",
			"Diamètre d’orbite : 3 mm.",
			"Format de plateau : 70x198 mm.",
			"Masse publiée : 0,85 kg."
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
				"rupes-re21aln-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-re21aln-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-re21aln-20260926"
			]
		},
		{
			"label": "Format de plateau",
			"value": "70x198 mm",
			"evidenceIds": [
				"rupes-re21aln-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,85 kg",
			"evidenceIds": [
				"rupes-re21aln-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "0 - 11000 tr/min",
			"evidenceIds": [
				"rupes-re21aln-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-re21aln-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 56, réf. RE21ALN",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-re21aln-20260926"
		],
		"workingPressureBar": [
			"rupes-re21aln-20260926"
		],
		"airflowLpm": [
			"rupes-re21aln-20260926"
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
