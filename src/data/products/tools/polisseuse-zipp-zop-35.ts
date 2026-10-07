import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-zipp-zop-35",
	"slug": "polisseuse-zipp-zop-35",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "ZIPP ZOP-35",
	"brand": "ZIPP",
	"model": "ZOP-35",
	"mpn": "ZOP-35",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-zipp-zop-35.webp",
		"alt": "Repères techniques : ZIPP ZOP-35",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zop-35",
		"label": "Référence ZOP-35",
		"distinguishingAttributes": {
			"reference": "ZOP-35",
			"Vitesse à vide": "11000 tr/min",
			"Masse": "0.5 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZOP-35. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 11000 tr/min. Masse : 0.5 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Masse : 0.5 kg.",
			"Référence constructeur : ZOP-35."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		},
		{
			"label": "Masse",
			"value": "0.5 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZOP-35",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "45,307 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 139",
			"evidenceIds": [
				"october-b-zipp-tools-p139"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p139",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=139",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 139",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p139"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p139"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p139"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
