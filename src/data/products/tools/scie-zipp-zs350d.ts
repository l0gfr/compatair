import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zs350d",
	"slug": "scie-zipp-zs350d",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZS350D",
	"brand": "ZIPP",
	"model": "ZS350D",
	"mpn": "ZS350D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-zipp-zs350d.webp",
		"alt": "Repères techniques : ZIPP ZS350D",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zs350d",
		"label": "Référence ZS350D",
		"distinguishingAttributes": {
			"reference": "ZS350D",
			"Cadence": "1200 coups/min",
			"Masse": "2.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZS350D. Consommation moyenne : 130 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 1200 coups/min. Masse : 2.8 kg.",
		"verifiedFacts": [
			"Cadence : 1200 coups/min.",
			"Masse : 2.8 kg.",
			"Référence constructeur : ZS350D."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1200 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p100"
			]
		},
		{
			"label": "Masse",
			"value": "2.8 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p100"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZS350D",
			"evidenceIds": [
				"october-b-zipp-tools-p100"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p100"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 100",
			"evidenceIds": [
				"october-b-zipp-tools-p100"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p100",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=100",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 100",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p100"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p100"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p100"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p100"
		]
	},
	"notes": [
		"Consommation moyenne : 130 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
