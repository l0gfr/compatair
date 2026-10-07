import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zss1-08-40",
	"slug": "visseuse-zipp-zss1-08-40",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZSS1-08-40",
	"brand": "ZIPP",
	"model": "ZSS1-08-40",
	"mpn": "ZSS1-08-40",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zss1-08-40.webp",
		"alt": "Repères techniques : ZIPP ZSS1-08-40",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zss1-08-40",
		"label": "Référence ZSS1-08-40",
		"distinguishingAttributes": {
			"reference": "ZSS1-08-40",
			"Vitesse à vide": "800 tr/min",
			"Masse": "0.43 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZSS1-08-40. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Vitesse à vide : 800 tr/min. Masse : 0.43 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 800 tr/min.",
			"Masse : 0.43 kg.",
			"Référence constructeur : ZSS1-08-40."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "800 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Masse",
			"value": "0.43 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZSS1-08-40",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 30",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p30",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=30",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p30"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p30"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p30"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
