import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw4100",
	"slug": "cle-a-chocs-zipp-ziw4100",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW4100",
	"brand": "ZIPP",
	"model": "ZIW4100",
	"mpn": "ZIW4100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 144,
		"typical": 144,
		"max": 144
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw4100.webp",
		"alt": "Repères techniques : ZIPP ZIW4100",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw4100",
		"label": "Référence ZIW4100",
		"distinguishingAttributes": {
			"reference": "ZIW4100",
			"Vitesse à vide": "9000 tr/min",
			"Masse": "1.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW4100. Consommation moyenne : 144 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 9000 tr/min. Masse : 1.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 9000 tr/min.",
			"Masse : 1.8 kg.",
			"Référence constructeur : ZIW4100."
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
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Masse",
			"value": "1.8 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p7"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW4100",
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
		"Consommation moyenne : 144 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
