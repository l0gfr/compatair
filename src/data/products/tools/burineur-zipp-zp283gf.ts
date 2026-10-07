import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zp283gf",
	"slug": "burineur-zipp-zp283gf",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZP283GF",
	"brand": "ZIPP",
	"model": "ZP283GF",
	"mpn": "ZP283GF",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zp283gf.webp",
		"alt": "Repères techniques : ZIPP ZP283GF",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp283gf",
		"label": "Référence ZP283GF",
		"distinguishingAttributes": {
			"reference": "ZP283GF",
			"Cadence": "1900 coups/min",
			"Masse": "6.5 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP283GF. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 1900 coups/min. Masse : 6.5 kg.",
		"verifiedFacts": [
			"Cadence : 1900 coups/min.",
			"Masse : 6.5 kg.",
			"Référence constructeur : ZP283GF."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1900 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Masse",
			"value": "6.5 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP283GF",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "679,604 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 177",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p177",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=177",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 177",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p177"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p177"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p177"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
