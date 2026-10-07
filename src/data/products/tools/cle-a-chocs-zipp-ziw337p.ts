import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw337p",
	"slug": "cle-a-chocs-zipp-ziw337p",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW337P",
	"brand": "ZIPP",
	"model": "ZIW337P",
	"mpn": "ZIW337P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 113,
		"typical": 113,
		"max": 113
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw337p.webp",
		"alt": "Repères techniques : ZIPP ZIW337P",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw337p",
		"label": "Référence ZIW337P",
		"distinguishingAttributes": {
			"reference": "ZIW337P",
			"Vitesse à vide": "8000 tr/min",
			"Masse": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW337P. Consommation moyenne : 113 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 8000 tr/min. Masse : 1.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8000 tr/min.",
			"Masse : 1.1 kg.",
			"Référence constructeur : ZIW337P."
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
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW337P",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 17",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p17",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=17",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p17"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p17"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p17"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p17"
		]
	},
	"notes": [
		"Consommation moyenne : 113 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
