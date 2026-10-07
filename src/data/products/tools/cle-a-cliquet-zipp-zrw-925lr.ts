import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-zipp-zrw-925lr",
	"slug": "cle-a-cliquet-zipp-zrw-925lr",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "ZIPP ZRW-925LR",
	"brand": "ZIPP",
	"model": "ZRW-925LR",
	"mpn": "ZRW-925LR",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-zipp-zrw-925lr.webp",
		"alt": "Repères techniques : ZIPP ZRW-925LR",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrw-925lr",
		"label": "Référence ZRW-925LR",
		"distinguishingAttributes": {
			"reference": "ZRW-925LR",
			"Référence constructeur": "ZRW-925LR",
			"Configuration publiée": "44.4 26 18 105 25.2 12.2 11/16\" ZRW-925LRB-11/16"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRW-925LR. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Référence constructeur : ZRW-925LR. Configuration publiée : 44.4 26 18 105 25.2 12.2 11/16\" ZRW-925LRB-11/16.",
		"verifiedFacts": [
			"Référence constructeur : ZRW-925LR.",
			"Configuration publiée : 44.4 26 18 105 25.2 12.2 11/16\" ZRW-925LRB-11/16."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZRW-925LR",
			"evidenceIds": [
				"october-b-zipp-tools-p22"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "44.4 26 18 105 25.2 12.2 11/16\" ZRW-925LRB-11/16",
			"evidenceIds": [
				"october-b-zipp-tools-p22"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p22"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 22",
			"evidenceIds": [
				"october-b-zipp-tools-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p22",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=22",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p22"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p22"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p22"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
