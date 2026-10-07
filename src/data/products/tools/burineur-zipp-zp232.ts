import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zp232",
	"slug": "burineur-zipp-zp232",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZP232",
	"brand": "ZIPP",
	"model": "ZP232",
	"mpn": "ZP232",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 80,
		"typical": 80,
		"max": 80
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zp232.webp",
		"alt": "Repères techniques : ZIPP ZP232",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp232",
		"label": "Référence ZP232",
		"distinguishingAttributes": {
			"reference": "ZP232",
			"Cadence": "4800 coups/min",
			"Masse": "0.72 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP232. Consommation moyenne : 80 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 4800 coups/min. Masse : 0.72 kg.",
		"verifiedFacts": [
			"Cadence : 4800 coups/min.",
			"Masse : 0.72 kg.",
			"Référence constructeur : ZP232."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "4800 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p167"
			]
		},
		{
			"label": "Masse",
			"value": "0.72 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p167"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP232",
			"evidenceIds": [
				"october-b-zipp-tools-p167"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Specification(air pressure at 90psi, 6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p167"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 167",
			"evidenceIds": [
				"october-b-zipp-tools-p167"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p167",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=167",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 167",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p167"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p167"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p167"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p167"
		]
	},
	"notes": [
		"Consommation moyenne : 80 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
