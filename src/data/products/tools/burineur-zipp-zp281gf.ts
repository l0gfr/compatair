import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zp281gf",
	"slug": "burineur-zipp-zp281gf",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZP281GF",
	"brand": "ZIPP",
	"model": "ZP281GF",
	"mpn": "ZP281GF",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zp281gf.webp",
		"alt": "Repères techniques : ZIPP ZP281GF",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp281gf",
		"label": "Référence ZP281GF",
		"distinguishingAttributes": {
			"reference": "ZP281GF",
			"Cadence": "2820 coups/min",
			"Masse": "5.5 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP281GF. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Cadence : 2820 coups/min. Masse : 5.5 kg.",
		"verifiedFacts": [
			"Cadence : 2820 coups/min.",
			"Masse : 5.5 kg.",
			"Référence constructeur : ZP281GF."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2820 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Masse",
			"value": "5.5 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p177"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP281GF",
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
			"value": "594,654 L/min",
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
