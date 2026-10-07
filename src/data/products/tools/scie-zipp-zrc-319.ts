import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zrc-319",
	"slug": "scie-zipp-zrc-319",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZRC-319",
	"brand": "ZIPP",
	"model": "ZRC-319",
	"mpn": "ZRC-319",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-zipp-zrc-319.webp",
		"alt": "Repères techniques : ZIPP ZRC-319",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrc-319",
		"label": "Référence ZRC-319",
		"distinguishingAttributes": {
			"reference": "ZRC-319",
			"Cadence": "9500 coups/min",
			"Masse": "0.51 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRC-319. Consommation moyenne : 100 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 9500 coups/min. Masse : 0.51 kg.",
		"verifiedFacts": [
			"Cadence : 9500 coups/min.",
			"Masse : 0.51 kg.",
			"Référence constructeur : ZRC-319."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "9500 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p99"
			]
		},
		{
			"label": "Masse",
			"value": "0.51 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p99"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRC-319",
			"evidenceIds": [
				"october-b-zipp-tools-p99"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p99"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 99",
			"evidenceIds": [
				"october-b-zipp-tools-p99"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p99",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=99",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 99",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p99"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p99"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p99"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p99"
		]
	},
	"notes": [
		"Consommation moyenne : 100 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
