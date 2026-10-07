import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw4510l",
	"slug": "cle-a-chocs-zipp-ziw4510l",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW4510L",
	"brand": "ZIPP",
	"model": "ZIW4510L",
	"mpn": "ZIW4510L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw4510l.webp",
		"alt": "Repères techniques : ZIPP ZIW4510L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw4510l",
		"label": "Référence ZIW4510L",
		"distinguishingAttributes": {
			"reference": "ZIW4510L",
			"Vitesse à vide": "7200 tr/min",
			"Masse": "2.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW4510L. Consommation moyenne : 230 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 7200 tr/min. Masse : 2.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7200 tr/min.",
			"Masse : 2.7 kg.",
			"Référence constructeur : ZIW4510L."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7200 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Masse",
			"value": "2.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW4510L",
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
		"Consommation moyenne : 230 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
