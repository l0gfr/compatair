import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
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
		"overview": "RUPES RE21ACM. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point. Référence fabricant : RE21ACM. Diamètre d’orbite : 3 mm. Format de plateau : 80x130 mm. Masse publiée : 0,87 kg.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Référence fabricant : RE21ACM.",
			"Diamètre d’orbite : 3 mm.",
			"Format de plateau : 80x130 mm.",
			"Masse publiée : 0,87 kg.",
			"Consommation de régime non précisé publiée : 360 L/min."
		],
		"limitations": [
			"Le débit concerne l’outil. L’aspiration externe et les autres consommateurs de l’atelier doivent être examinés séparément.",
			"Les variantes d’orbite et de plateau ne sont pas interchangeables pour un même objectif de finition.",
			"La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
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
			"value": "Consommation de régime non précisé publiée : 360 L/min.",
			"evidenceIds": [
				"rupes-re21acm-reserved-20261031-1"
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":360,\"typical\":360,\"max\":360},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"rupes-re21acm-20260926",
				"rupes-re21acm-reserved-20261031-1"
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
		},
		{
			"id": "rupes-re21acm-reserved-20261031-1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
			"sourceLabel": "RUPES RE21ACM : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
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
		],
		"airflowBasis": [
			"rupes-re21acm-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "unqualified"
};

export default product;
