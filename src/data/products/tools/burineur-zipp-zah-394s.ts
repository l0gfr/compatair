import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zah-394s",
	"slug": "burineur-zipp-zah-394s",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZAH-394S",
	"brand": "ZIPP",
	"model": "ZAH-394S",
	"mpn": "ZAH-394S",
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
		"src": "/images/products/burineur-zipp-zah-394s.webp",
		"alt": "Repères techniques : ZIPP ZAH-394S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zah-394s",
		"label": "Référence ZAH-394S",
		"distinguishingAttributes": {
			"reference": "ZAH-394S",
			"Cadence": "2100 coups/min",
			"Masse": "2.1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAH-394S. Consommation moyenne : 160 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 2100 coups/min. Masse : 2.1 kg.",
		"verifiedFacts": [
			"Cadence : 2100 coups/min.",
			"Masse : 2.1 kg.",
			"Référence constructeur : ZAH-394S."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2100 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p89"
			]
		},
		{
			"label": "Masse",
			"value": "2.1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p89"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAH-394S",
			"evidenceIds": [
				"october-b-zipp-tools-p89"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p89"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 89",
			"evidenceIds": [
				"october-b-zipp-tools-p89"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p89",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=89",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 89",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p89"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p89"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p89"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p89"
		]
	},
	"notes": [
		"Consommation moyenne : 160 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
