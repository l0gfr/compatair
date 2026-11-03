import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-rs21a",
	"slug": "rupes-rs21a",
	"brand": "RUPES",
	"model": "RS21A",
	"mpn": "RS21A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES RS21A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-rs21a.webp",
		"alt": "Repères techniques RUPES RS21A, référence RS21A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES RS21A. La RS21A est la ponceuse à patin Delta, plateau 985.002 et aspiration centrale. La RE21ACM utilise un patin 80 × 130 mm et un autre plateau, avec la même orbite 3 mm et le même maximum de consommation publié. La pression de service 6,2 bar reste distincte de la pression de mesure du maximum 360 L/min ; cet appariement reste à confirmer.",
		"verifiedFacts": [
			"Patin : Delta.",
			"Orbite : 3 mm.",
			"Vitesse réglable : 0–11 000 tr/min.",
			"Masse : 0,87 kg.",
			"Aspiration : Centrale.",
			"Plateau livré : 985.002.",
			"Consommation maximale publiée : 360 L/min.",
			"Pression de service distincte : 6,2 bar / 90 PSIG."
		],
		"limitations": [
			"Le maximum de consommation et la pression de service sont publiés séparément ; aucune pression exacte de mesure n’est supposée."
		]
	},
	"specifications": [
		{
			"label": "Patin",
			"value": "Delta",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "3 mm",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse réglable",
			"value": "0–11 000 tr/min",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,87 kg",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Aspiration",
			"value": "Centrale",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Plateau livré",
			"value": "985.002",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée",
			"value": "360 L/min",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service distincte",
			"value": "6,2 bar / 90 PSIG",
			"evidenceIds": [
				"rupes-rs21a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-rs21a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 55, réf. RS21A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "rupes-rs21a-reserved-20261103-1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=55",
			"sourceLabel": "RUPES : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. La RS21A est la ponceuse à patin Delta, plateau 985.002 et aspiration centrale. La RE21ACM utilise un patin 80 × 130 mm et un autre plateau, avec la même orbite 3 mm et le même maximum de consommation publié. La pression de service 6,2 bar reste distincte de la pression de mesure du maximum 360 L/min ; cet appariement reste à confirmer."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-rs21a-20260926"
		],
		"workingPressureBar": [
			"rupes-rs21a-reserved-20261103-1"
		],
		"demandModel": [
			"rupes-rs21a-reserved-20261103-1"
		],
		"demandExplanation": [
			"rupes-rs21a-reserved-20261103-1"
		],
		"editorial": [
			"rupes-rs21a-reserved-20261103-1"
		],
		"specifications": [
			"rupes-rs21a-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Maximum publié, sans pression de mesure explicitement appariée. La pression de service reste une donnée distincte."
};

export default product;
