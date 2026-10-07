import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-zipp-zjs-nl4ac",
	"slug": "ponceuse-vibrante-zipp-zjs-nl4ac",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "ZIPP ZJS-NL4AC",
	"brand": "ZIPP",
	"model": "ZJS-NL4AC",
	"mpn": "ZJS-NL4AC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-zipp-zjs-nl4ac.webp",
		"alt": "Repères techniques : ZIPP ZJS-NL4AC",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zjs-nl4ac",
		"label": "Référence ZJS-NL4AC",
		"distinguishingAttributes": {
			"reference": "ZJS-NL4AC",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZJS-NL4AC. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 8500 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZJS-NL4AC."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZJS-NL4AC",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "45,307 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 146",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p146",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=146",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 146",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p146"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p146"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p146"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
