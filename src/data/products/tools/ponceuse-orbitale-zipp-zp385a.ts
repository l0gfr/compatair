import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zp385a",
	"slug": "ponceuse-orbitale-zipp-zp385a",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZP385A",
	"brand": "ZIPP",
	"model": "ZP385A",
	"mpn": "ZP385A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zp385a.webp",
		"alt": "Repères techniques : ZIPP ZP385A",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp385a",
		"label": "Référence ZP385A",
		"distinguishingAttributes": {
			"reference": "ZP385A",
			"Vitesse à vide": "16000 tr/min",
			"Masse": "0.98 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP385A. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 16000 tr/min. Masse : 0.98 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 16000 tr/min.",
			"Masse : 0.98 kg.",
			"Référence constructeur : ZP385A."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "16000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		},
		{
			"label": "Masse",
			"value": "0.98 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP385A",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "113 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 132",
			"evidenceIds": [
				"october-b-zipp-tools-p132"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p132",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=132",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 132",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p132"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p132"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p132"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
