import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zt2021",
	"slug": "riveteuse-zipp-zt2021",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZT2021",
	"brand": "ZIPP",
	"model": "ZT2021",
	"mpn": "ZT2021",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zt2021.webp",
		"alt": "Repères techniques : ZIPP ZT2021",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zt2021",
		"label": "Référence ZT2021",
		"distinguishingAttributes": {
			"reference": "ZT2021",
			"Référence constructeur": "ZT2021",
			"Configuration publiée": "8.7(221) 12.68(322) Ø5.35(136) 13.31(338) 3.23(82) Ø1.1(28) Ø1.89(48)"
		}
	},
	"editorial": {
		"overview": "ZIPP ZT2021. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Référence constructeur : ZT2021. Configuration publiée : 8.7(221) 12.68(322) Ø5.35(136) 13.31(338) 3.23(82) Ø1.1(28) Ø1.89(48).",
		"verifiedFacts": [
			"Référence constructeur : ZT2021.",
			"Configuration publiée : 8.7(221) 12.68(322) Ø5.35(136) 13.31(338) 3.23(82) Ø1.1(28) Ø1.89(48)."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZT2021",
			"evidenceIds": [
				"october-b-zipp-tools-p67"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "8.7(221) 12.68(322) Ø5.35(136) 13.31(338) 3.23(82) Ø1.1(28) Ø1.89(48)",
			"evidenceIds": [
				"october-b-zipp-tools-p67"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p67"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 67",
			"evidenceIds": [
				"october-b-zipp-tools-p67"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p67",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=67",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p67"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p67"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p67"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
