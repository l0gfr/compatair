import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
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
		"overview": "RUPES AK150A. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point. Référence fabricant : AK150A. Diamètre d’orbite : 5 mm. Diamètre de plateau : 150 mm. Masse publiée : 1,7 kg.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Référence fabricant : AK150A.",
			"Diamètre d’orbite : 5 mm.",
			"Diamètre de plateau : 150 mm.",
			"Masse publiée : 1,7 kg.",
			"Consommation de régime non précisé publiée : 400 L/min."
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
				"rupes-ak150a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 400 L/min.",
			"evidenceIds": [
				"rupes-ak150a-reserved-20261031-1"
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":400,\"typical\":400,\"max\":400},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"rupes-ak150a-20260926",
				"rupes-ak150a-reserved-20261031-1"
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
		},
		{
			"id": "rupes-ak150a-reserved-20261031-1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=64",
			"sourceLabel": "RUPES AK150A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
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
		],
		"airflowBasis": [
			"rupes-ak150a-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified"
};

export default product;
