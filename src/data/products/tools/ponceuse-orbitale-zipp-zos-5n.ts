import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zos-5n",
	"slug": "ponceuse-orbitale-zipp-zos-5n",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZOS-5N",
	"brand": "ZIPP",
	"model": "ZOS-5N",
	"mpn": "ZOS-5N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zos-5n.webp",
		"alt": "Repères techniques : ZIPP ZOS-5N",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zos-5n",
		"label": "Référence ZOS-5N",
		"distinguishingAttributes": {
			"reference": "ZOS-5N",
			"Référence constructeur": "ZOS-5N",
			"Configuration publiée": "/ ZOS-6N 0.3HP ZOS-5C / ZOS-6C ZOS-5S / ZOS-6S 0.3HP"
		}
	},
	"editorial": {
		"overview": "ZIPP ZOS-5N. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Référence constructeur : ZOS-5N. Configuration publiée : / ZOS-6N 0.3HP ZOS-5C / ZOS-6C ZOS-5S / ZOS-6S 0.3HP.",
		"verifiedFacts": [
			"Référence constructeur : ZOS-5N.",
			"Configuration publiée : / ZOS-6N 0.3HP ZOS-5C / ZOS-6C ZOS-5S / ZOS-6S 0.3HP."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZOS-5N",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "/ ZOS-6N 0.3HP ZOS-5C / ZOS-6C ZOS-5S / ZOS-6S 0.3HP",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 138",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p138",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=138",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 138",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p138"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p138"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p138"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
