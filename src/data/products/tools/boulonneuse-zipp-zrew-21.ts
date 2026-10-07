import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zrew-21",
	"slug": "boulonneuse-zipp-zrew-21",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZREW-21",
	"brand": "ZIPP",
	"model": "ZREW-21",
	"mpn": "ZREW-21",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 198,
		"typical": 198,
		"max": 198
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zrew-21.webp",
		"alt": "Repères techniques : ZIPP ZREW-21",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrew-21",
		"label": "Référence ZREW-21",
		"distinguishingAttributes": {
			"reference": "ZREW-21",
			"Vitesse à vide": "300 tr/min",
			"Masse": "1.65 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZREW-21. Consommation moyenne : 198 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 300 tr/min. Masse : 1.65 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 300 tr/min.",
			"Masse : 1.65 kg.",
			"Référence constructeur : ZREW-21."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p26"
			]
		},
		{
			"label": "Masse",
			"value": "1.65 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p26"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZREW-21",
			"evidenceIds": [
				"october-b-zipp-tools-p26"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p26"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 26",
			"evidenceIds": [
				"october-b-zipp-tools-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p26",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=26",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p26"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p26"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p26"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p26"
		]
	},
	"notes": [
		"Consommation moyenne : 198 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
