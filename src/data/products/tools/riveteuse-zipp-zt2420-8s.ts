import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt2420-8s",
	"slug": "riveteuse-zipp-zt2420-8s",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT2420-8S",
	"brand": "ZIPP",
	"model": "ZT2420-8S",
	"mpn": "ZT2420-8S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt2420-8s.webp",
		"alt": "Repères techniques : ZIPP ZT2420-8S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt2420-8s",
		"label": "Référence ZT2420-8S",
		"distinguishingAttributes": {
			"reference": "ZT2420-8S",
			"Référence constructeur": "ZT2420-8S",
			"Configuration publiée": "ZT2420-8S ZT2420HS / ZT2420HSK ZRN1811MS"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT2420-8S. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZT2420-8S. Configuration publiée : ZT2420-8S ZT2420HS / ZT2420HSK ZRN1811MS.",
		"verifiedFacts": [
			"Référence constructeur : ZT2420-8S.",
			"Configuration publiée : ZT2420-8S ZT2420HS / ZT2420HSK ZRN1811MS."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZT2420-8S",
			"evidenceIds": [
				"october-b-zipp-tools-p65"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "ZT2420-8S ZT2420HS / ZT2420HSK ZRN1811MS",
			"evidenceIds": [
				"october-b-zipp-tools-p65"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "DO NOT apply air pressure over 110 psi / 7.5 bar to these tools.",
			"evidenceIds": [
				"october-b-zipp-tools-p65"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 65",
			"evidenceIds": [
				"october-b-zipp-tools-p65"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p65",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=65",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 65",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p65"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p65"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p65"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
