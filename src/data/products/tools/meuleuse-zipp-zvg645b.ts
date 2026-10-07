import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zvg645b",
	"slug": "meuleuse-zipp-zvg645b",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZVG645B",
	"brand": "ZIPP",
	"model": "ZVG645B",
	"mpn": "ZVG645B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zvg645b.webp",
		"alt": "Repères techniques : ZIPP ZVG645B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zvg645b",
		"label": "Référence ZVG645B",
		"distinguishingAttributes": {
			"reference": "ZVG645B",
			"Vitesse à vide": "4500 tr/min",
			"Masse": "5.9 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZVG645B. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 4500 tr/min. Masse : 5.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4500 tr/min.",
			"Masse : 5.9 kg.",
			"Référence constructeur : ZVG645B."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Masse",
			"value": "5.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZVG645B",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "2 400 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 163",
			"evidenceIds": [
				"october-b-zipp-tools-p163"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p163",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=163",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 163",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p163"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p163"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p163"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
