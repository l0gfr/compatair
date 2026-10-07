import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zdg-301l",
	"slug": "meuleuse-zipp-zdg-301l",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZDG-301L",
	"brand": "ZIPP",
	"model": "ZDG-301L",
	"mpn": "ZDG-301L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zdg-301l.webp",
		"alt": "Repères techniques : ZIPP ZDG-301L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zdg-301l",
		"label": "Référence ZDG-301L",
		"distinguishingAttributes": {
			"reference": "ZDG-301L",
			"Vitesse à vide": "22000 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZDG-301L. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 22000 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 22000 tr/min.",
			"Masse : 0.9 kg.",
			"Référence constructeur : ZDG-301L."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "22000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZDG-301L",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "116,099 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 116",
			"evidenceIds": [
				"october-b-zipp-tools-p116"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p116",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=116",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 116",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p116"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p116"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p116"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
