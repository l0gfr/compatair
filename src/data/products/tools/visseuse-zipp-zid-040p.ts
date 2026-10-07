import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zid-040p",
	"slug": "visseuse-zipp-zid-040p",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZID-040P",
	"brand": "ZIPP",
	"model": "ZID-040P",
	"mpn": "ZID-040P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 160,
		"typical": 160,
		"max": 160
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zid-040p.webp",
		"alt": "Repères techniques : ZIPP ZID-040P",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zid-040p",
		"label": "Référence ZID-040P",
		"distinguishingAttributes": {
			"reference": "ZID-040P",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZID-040P. Consommation moyenne : 160 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 8500 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZID-040P."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p27"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZID-040P",
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
		"Consommation moyenne : 160 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
