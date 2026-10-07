import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-zipp-zrw-919ls",
	"slug": "cle-a-cliquet-zipp-zrw-919ls",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "ZIPP ZRW-919LS",
	"brand": "ZIPP",
	"model": "ZRW-919LS",
	"mpn": "ZRW-919LS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 127,
		"typical": 127,
		"max": 127
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-zipp-zrw-919ls.webp",
		"alt": "Repères techniques : ZIPP ZRW-919LS",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrw-919ls",
		"label": "Référence ZRW-919LS",
		"distinguishingAttributes": {
			"reference": "ZRW-919LS",
			"Vitesse à vide": "180 tr/min",
			"Masse": "1.3 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRW-919LS. Consommation moyenne : 127 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 180 tr/min. Masse : 1.3 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 180 tr/min.",
			"Masse : 1.3 kg.",
			"Référence constructeur : ZRW-919LS."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "180 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p20"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p20"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRW-919LS",
			"evidenceIds": [
				"october-b-zipp-tools-p20"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p20"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 20",
			"evidenceIds": [
				"october-b-zipp-tools-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p20",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=20",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p20"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p20"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p20"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p20"
		]
	},
	"notes": [
		"Consommation moyenne : 127 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
