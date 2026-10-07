import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-zipp-zbs-383",
	"slug": "ponceuse-bande-zipp-zbs-383",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "ZIPP ZBS-383",
	"brand": "ZIPP",
	"model": "ZBS-383",
	"mpn": "ZBS-383",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-zipp-zbs-383.webp",
		"alt": "Repères techniques : ZIPP ZBS-383",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zbs-383",
		"label": "Référence ZBS-383",
		"distinguishingAttributes": {
			"reference": "ZBS-383",
			"Vitesse à vide": "17000 tr/min",
			"Masse": "1.33 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZBS-383. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 17000 tr/min. Masse : 1.33 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 17000 tr/min.",
			"Masse : 1.33 kg.",
			"Référence constructeur : ZBS-383."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "17000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Masse",
			"value": "1.33 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZBS-383",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "113,267 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 133",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p133",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=133",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 133",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p133"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p133"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p133"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
