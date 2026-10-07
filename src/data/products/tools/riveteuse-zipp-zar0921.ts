import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zar0921",
	"slug": "riveteuse-zipp-zar0921",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZAR0921",
	"brand": "ZIPP",
	"model": "ZAR0921",
	"mpn": "ZAR0921",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zar0921.webp",
		"alt": "Repères techniques : ZIPP ZAR0921",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zar0921",
		"label": "Référence ZAR0921",
		"distinguishingAttributes": {
			"reference": "ZAR0921",
			"Course publiée": "19 mm",
			"Référence constructeur": "ZAR0921"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAR0921. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Course publiée : 19 mm. Référence constructeur : ZAR0921.",
		"verifiedFacts": [
			"Course publiée : 19 mm.",
			"Référence constructeur : ZAR0921."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Course publiée",
			"value": "19 mm",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAR0921",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "60–90 psi pour ZAR0921 / ZAR0921V ; pression de mesure du volume par coup non explicitée.",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 49",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p49",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p49"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p49"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p49"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
