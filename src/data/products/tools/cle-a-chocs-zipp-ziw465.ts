import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw465",
	"slug": "cle-a-chocs-zipp-ziw465",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW465",
	"brand": "ZIPP",
	"model": "ZIW465",
	"mpn": "ZIW465",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw465.webp",
		"alt": "Repères techniques : ZIPP ZIW465",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw465",
		"label": "Référence ZIW465",
		"distinguishingAttributes": {
			"reference": "ZIW465",
			"Vitesse à vide": "8000 tr/min",
			"Masse": "2.6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW465. Consommation moyenne : 220 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 8000 tr/min. Masse : 2.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8000 tr/min.",
			"Masse : 2.6 kg.",
			"Référence constructeur : ZIW465."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Masse",
			"value": "2.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW465",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 7",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p7",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=7",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p7"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p7"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p7"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p7"
		]
	},
	"notes": [
		"Consommation moyenne : 220 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
