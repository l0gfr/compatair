import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw685l",
	"slug": "cle-a-chocs-zipp-ziw685l",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW685L",
	"brand": "ZIPP",
	"model": "ZIW685L",
	"mpn": "ZIW685L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw685l.webp",
		"alt": "Repères techniques : ZIPP ZIW685L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw685l",
		"label": "Référence ZIW685L",
		"distinguishingAttributes": {
			"reference": "ZIW685L",
			"Vitesse à vide": "7500 tr/min",
			"Masse": "3.08 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW685L. Consommation moyenne : 210 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 7500 tr/min. Masse : 3.08 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Masse : 3.08 kg.",
			"Référence constructeur : ZIW685L."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p6"
			]
		},
		{
			"label": "Masse",
			"value": "3.08 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p6"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW685L",
			"evidenceIds": [
				"october-b-zipp-tools-p6"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p6"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 6",
			"evidenceIds": [
				"october-b-zipp-tools-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p6",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=6",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p6"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p6"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p6"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p6"
		]
	},
	"notes": [
		"Consommation moyenne : 210 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
