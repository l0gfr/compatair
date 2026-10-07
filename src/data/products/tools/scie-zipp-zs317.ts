import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zs317",
	"slug": "scie-zipp-zs317",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZS317",
	"brand": "ZIPP",
	"model": "ZS317",
	"mpn": "ZS317",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 90,
		"typical": 90,
		"max": 90
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-zipp-zs317.webp",
		"alt": "Repères techniques : ZIPP ZS317",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zs317",
		"label": "Référence ZS317",
		"distinguishingAttributes": {
			"reference": "ZS317",
			"Cadence": "5000 coups/min",
			"Masse": "0.96 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZS317. Consommation moyenne : 90 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 5000 coups/min. Masse : 0.96 kg.",
		"verifiedFacts": [
			"Cadence : 5000 coups/min.",
			"Masse : 0.96 kg.",
			"Référence constructeur : ZS317."
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
			"value": "0.96 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZS317",
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
		"Consommation moyenne : 90 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
