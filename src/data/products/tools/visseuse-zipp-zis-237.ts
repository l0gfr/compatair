import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zis-237",
	"slug": "visseuse-zipp-zis-237",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZIS-237",
	"brand": "ZIPP",
	"model": "ZIS-237",
	"mpn": "ZIS-237",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zis-237.webp",
		"alt": "Repères techniques : ZIPP ZIS-237",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zis-237",
		"label": "Référence ZIS-237",
		"distinguishingAttributes": {
			"reference": "ZIS-237",
			"Vitesse à vide": "5300 tr/min",
			"Masse": "0.84 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZIS-237. Consommation moyenne : 500 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 5300 tr/min. Masse : 0.84 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5300 tr/min.",
			"Masse : 0.84 kg.",
			"Référence constructeur : ZIS-237."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Masse",
			"value": "0.84 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIS-237",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 27",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p27",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=27",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p27"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p27"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p27"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p27"
		]
	},
	"notes": [
		"Consommation moyenne : 500 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
