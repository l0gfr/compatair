import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-ziw1020c",
	"slug": "cle-a-chocs-zipp-ziw1020c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZIW1020C",
	"brand": "ZIPP",
	"model": "ZIW1020C",
	"mpn": "ZIW1020C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 147,
		"typical": 147,
		"max": 147
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-ziw1020c.webp",
		"alt": "Repères techniques : ZIPP ZIW1020C",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ziw1020c",
		"label": "Référence ZIW1020C",
		"distinguishingAttributes": {
			"reference": "ZIW1020C",
			"Vitesse à vide": "8300 tr/min",
			"Masse": "1.6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIW1020C. Consommation moyenne : 147 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 8300 tr/min. Masse : 1.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8300 tr/min.",
			"Masse : 1.6 kg.",
			"Référence constructeur : ZIW1020C."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p17"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIW1020C",
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
		"Consommation moyenne : 147 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
