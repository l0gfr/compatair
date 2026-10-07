import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt0918l",
	"slug": "riveteuse-zipp-zt0918l",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT0918L",
	"brand": "ZIPP",
	"model": "ZT0918L",
	"mpn": "ZT0918L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt0918l.webp",
		"alt": "Repères techniques : ZIPP ZT0918L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt0918l",
		"label": "Référence ZT0918L",
		"distinguishingAttributes": {
			"reference": "ZT0918L",
			"Masse": "1.80 kg",
			"Référence constructeur": "ZT0918L"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT0918L. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Masse : 1.80 kg. Référence constructeur : ZT0918L.",
		"verifiedFacts": [
			"Masse : 1.80 kg.",
			"Référence constructeur : ZT0918L."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.80 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p42"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZT0918L",
			"evidenceIds": [
				"october-b-zipp-tools-p42"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90PSI/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p42"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 42",
			"evidenceIds": [
				"october-b-zipp-tools-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p42",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=42",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p42"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p42"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p42"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
