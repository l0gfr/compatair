import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zb76mc",
	"slug": "visseuse-zipp-zb76mc",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZB76MC",
	"brand": "ZIPP",
	"model": "ZB76MC",
	"mpn": "ZB76MC",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zb76mc.webp",
		"alt": "Repères techniques : ZIPP ZB76MC",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zb76mc",
		"label": "Référence ZB76MC",
		"distinguishingAttributes": {
			"reference": "ZB76MC",
			"Vitesse à vide": "300 tr/min",
			"Masse": "0.84 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZB76MC. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Vitesse à vide : 300 tr/min. Masse : 0.84 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 300 tr/min.",
			"Masse : 0.84 kg.",
			"Référence constructeur : ZB76MC."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Masse",
			"value": "0.84 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZB76MC",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 29",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p29",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=29",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p29"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p29"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p29"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
