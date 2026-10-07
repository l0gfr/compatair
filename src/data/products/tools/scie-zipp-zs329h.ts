import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zs329h",
	"slug": "scie-zipp-zs329h",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZS329H",
	"brand": "ZIPP",
	"model": "ZS329H",
	"mpn": "ZS329H",
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
		"src": "/images/products/scie-zipp-zs329h.webp",
		"alt": "Repères techniques : ZIPP ZS329H",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zs329h",
		"label": "Référence ZS329H",
		"distinguishingAttributes": {
			"reference": "ZS329H",
			"Cadence": "5000 coups/min",
			"Masse": "0.76 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZS329H. Consommation moyenne : 100 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 5000 coups/min. Masse : 0.76 kg.",
		"verifiedFacts": [
			"Cadence : 5000 coups/min.",
			"Masse : 0.76 kg.",
			"Référence constructeur : ZS329H."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "5000 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Masse",
			"value": "0.76 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZS329H",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 97",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p97",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=97",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 97",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p97"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p97"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p97"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p97"
		]
	},
	"notes": [
		"Consommation moyenne : 100 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
