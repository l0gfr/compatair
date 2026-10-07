import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zdg-s220",
	"slug": "meuleuse-zipp-zdg-s220",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZDG-S220",
	"brand": "ZIPP",
	"model": "ZDG-S220",
	"mpn": "ZDG-S220",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zdg-s220.webp",
		"alt": "Repères techniques : ZIPP ZDG-S220",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zdg-s220",
		"label": "Référence ZDG-S220",
		"distinguishingAttributes": {
			"reference": "ZDG-S220",
			"Vitesse à vide": "2200 tr/min",
			"Masse": "0.92 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZDG-S220. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Vitesse à vide : 2200 tr/min. Masse : 0.92 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2200 tr/min.",
			"Masse : 0.92 kg.",
			"Référence constructeur : ZDG-S220."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2200 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p118"
			]
		},
		{
			"label": "Masse",
			"value": "0.92 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p118"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZDG-S220",
			"evidenceIds": [
				"october-b-zipp-tools-p118"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p118"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 118",
			"evidenceIds": [
				"october-b-zipp-tools-p118"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p118",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=118",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 118",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p118"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p118"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p118"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
