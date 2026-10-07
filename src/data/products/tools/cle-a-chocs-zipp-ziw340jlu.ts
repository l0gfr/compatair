import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw340jlu",
	"slug": "cle-a-chocs-zipp-ziw340jlu",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW340JLU",
	"brand": "ZIPP",
	"model": "ZIW340JLU",
	"mpn": "ZIW340JLU",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 119,
		"typical": 119,
		"max": 119
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw340jlu.webp",
		"alt": "Repères techniques : ZIPP ZIW340JLU",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw340jlu",
		"label": "Référence ZIW340JLU",
		"distinguishingAttributes": {
			"reference": "ZIW340JLU",
			"Vitesse à vide": "9000 tr/min",
			"Masse": "1.26 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW340JLU. Consommation moyenne : 119 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 9000 tr/min. Masse : 1.26 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 9000 tr/min.",
			"Masse : 1.26 kg.",
			"Référence constructeur : ZIW340JLU."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p13"
			]
		},
		{
			"label": "Masse",
			"value": "1.26 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p13"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW340JLU",
			"evidenceIds": [
				"october-b-zipp-tools-p13"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p13"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 13",
			"evidenceIds": [
				"october-b-zipp-tools-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p13",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=13",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p13"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p13"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p13"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p13"
		]
	},
	"notes": [
		"Consommation moyenne : 119 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
