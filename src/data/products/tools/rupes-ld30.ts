import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ld30",
	"slug": "rupes-ld30",
	"brand": "RUPES",
	"model": "LD30",
	"mpn": "LD30",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES LD30",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ld30.webp",
		"alt": "Repères techniques RUPES LD30, référence LD30",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES LD30. La LD30 est la mini-ponceuse d’égrenage 30 mm à orbite 1,5 mm et filetage M10 femelle. La TA50 reçoit 50 mm, orbite 3 mm et filetage M6 femelle, à 15 000 tr/min contre 7 500. Le maximum 130 L/min est publié séparément de la pression de service 6,2 bar ; aucun appariement explicite à une pression de mesure n’est ajouté.",
		"verifiedFacts": [
			"Plateau : 30 mm.",
			"Orbite : 1,5 mm.",
			"Vitesse : 7 500 tr/min.",
			"Masse : 0,65 kg.",
			"Filetage : M10 femelle.",
			"Consommation maximale publiée : 130 L/min.",
			"Pression de service distincte : 6,2 bar / 90 PSIG."
		],
		"limitations": [
			"Le maximum de consommation et la pression de service sont publiés séparément ; aucune pression exacte de mesure n’est supposée."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "30 mm",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "1,5 mm",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "7 500 tr/min",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,65 kg",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage",
			"value": "M10 femelle",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée",
			"value": "130 L/min",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service distincte",
			"value": "6,2 bar / 90 PSIG",
			"evidenceIds": [
				"rupes-ld30-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ld30-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 57, réf. LD30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "rupes-ld30-reserved-20261103-1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=57",
			"sourceLabel": "RUPES : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. La LD30 est la mini-ponceuse d’égrenage 30 mm à orbite 1,5 mm et filetage M10 femelle. La TA50 reçoit 50 mm, orbite 3 mm et filetage M6 femelle, à 15 000 tr/min contre 7 500. Le maximum 130 L/min est publié séparément de la pression de service 6,2 bar ; aucun appariement explicite à une pression de mesure n’est ajouté."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-ld30-20260926"
		],
		"workingPressureBar": [
			"rupes-ld30-reserved-20261103-1"
		],
		"demandModel": [
			"rupes-ld30-reserved-20261103-1"
		],
		"demandExplanation": [
			"rupes-ld30-reserved-20261103-1"
		],
		"editorial": [
			"rupes-ld30-reserved-20261103-1"
		],
		"specifications": [
			"rupes-ld30-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Maximum publié, sans pression de mesure explicitement appariée. La pression de service reste une donnée distincte."
};

export default product;
