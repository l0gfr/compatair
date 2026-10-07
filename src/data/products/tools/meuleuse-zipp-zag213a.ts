import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag213a",
	"slug": "meuleuse-zipp-zag213a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG213A",
	"brand": "ZIPP",
	"model": "ZAG213A",
	"mpn": "ZAG213A",
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
		"src": "/images/products/meuleuse-zipp-zag213a.webp",
		"alt": "Repères techniques : ZIPP ZAG213A",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag213a",
		"label": "Référence ZAG213A",
		"distinguishingAttributes": {
			"reference": "ZAG213A",
			"Vitesse à vide": "15000 tr/min",
			"Masse": "0.66 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG213A. Consommation moyenne : 220 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 15000 tr/min. Masse : 0.66 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 15000 tr/min.",
			"Masse : 0.66 kg.",
			"Référence constructeur : ZAG213A."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p115"
			]
		},
		{
			"label": "Masse",
			"value": "0.66 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p115"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG213A",
			"evidenceIds": [
				"october-b-zipp-tools-p115"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p115"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 115",
			"evidenceIds": [
				"october-b-zipp-tools-p115"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p115",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=115",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 115",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p115"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p115"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p115"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p115"
		]
	},
	"notes": [
		"Consommation moyenne : 220 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
