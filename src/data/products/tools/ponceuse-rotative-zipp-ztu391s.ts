import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-zipp-ztu391s",
	"slug": "ponceuse-rotative-zipp-ztu391s",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ZIPP ZTU391S",
	"brand": "ZIPP",
	"model": "ZTU391S",
	"mpn": "ZTU391S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-zipp-ztu391s.webp",
		"alt": "Repères techniques : ZIPP ZTU391S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ztu391s",
		"label": "Référence ZTU391S",
		"distinguishingAttributes": {
			"reference": "ZTU391S",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZTU391S. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 4000 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZTU391S."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZTU391S",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 127",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p127",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=127",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 127",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p127"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p127"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p127"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
