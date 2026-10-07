import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt1528",
	"slug": "riveteuse-zipp-zt1528",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT1528",
	"brand": "ZIPP",
	"model": "ZT1528",
	"mpn": "ZT1528",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt1528.webp",
		"alt": "Repères techniques : ZIPP ZT1528",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt1528",
		"label": "Référence ZT1528",
		"distinguishingAttributes": {
			"reference": "ZT1528",
			"Référence constructeur": "ZT1528",
			"Configuration publiée": "(L) / ZT1528D (L) ZT2021 (L) / ZT2021D (L) ZT2021-8 (L) / ZT2021D-8 (L)"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT1528. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Référence constructeur : ZT1528. Configuration publiée : (L) / ZT1528D (L) ZT2021 (L) / ZT2021D (L) ZT2021-8 (L) / ZT2021D-8 (L).",
		"verifiedFacts": [
			"Référence constructeur : ZT1528.",
			"Configuration publiée : (L) / ZT1528D (L) ZT2021 (L) / ZT2021D (L) ZT2021-8 (L) / ZT2021D-8 (L)."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZT1528",
			"evidenceIds": [
				"october-b-zipp-tools-p48"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "(L) / ZT1528D (L) ZT2021 (L) / ZT2021D (L) ZT2021-8 (L) / ZT2021D-8 (L)",
			"evidenceIds": [
				"october-b-zipp-tools-p48"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90PSI/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p48"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 48",
			"evidenceIds": [
				"october-b-zipp-tools-p48"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p48",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=48",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 48",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p48"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p48"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p48"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
