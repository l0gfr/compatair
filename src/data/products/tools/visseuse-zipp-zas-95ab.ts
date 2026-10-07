import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zas-95ab",
	"slug": "visseuse-zipp-zas-95ab",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZAS-95AB",
	"brand": "ZIPP",
	"model": "ZAS-95AB",
	"mpn": "ZAS-95AB",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zas-95ab.webp",
		"alt": "Repères techniques : ZIPP ZAS-95AB",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zas-95ab",
		"label": "Référence ZAS-95AB",
		"distinguishingAttributes": {
			"reference": "ZAS-95AB",
			"Vitesse à vide": "550 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAS-95AB. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Vitesse à vide : 550 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 550 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZAS-95AB."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "550 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p30"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAS-95AB",
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
