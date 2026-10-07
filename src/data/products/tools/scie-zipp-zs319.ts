import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zs319",
	"slug": "scie-zipp-zs319",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZS319",
	"brand": "ZIPP",
	"model": "ZS319",
	"mpn": "ZS319",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-zipp-zs319.webp",
		"alt": "Repères techniques : ZIPP ZS319",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zs319",
		"label": "Référence ZS319",
		"distinguishingAttributes": {
			"reference": "ZS319",
			"Référence constructeur": "ZS319",
			"Configuration publiée": "24T X 5 ZS329 24T X 5"
		}
	},
	"editorial": {
		"overview": "ZIPP ZS319. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Référence constructeur : ZS319. Configuration publiée : 24T X 5 ZS329 24T X 5.",
		"verifiedFacts": [
			"Référence constructeur : ZS319.",
			"Configuration publiée : 24T X 5 ZS329 24T X 5."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZS319",
			"evidenceIds": [
				"october-b-zipp-tools-p97"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "24T X 5 ZS329 24T X 5",
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
		"demandExplanation": [
			"october-b-zipp-tools-p97"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
