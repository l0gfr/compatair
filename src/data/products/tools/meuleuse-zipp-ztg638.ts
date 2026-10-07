import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-ztg638",
	"slug": "meuleuse-zipp-ztg638",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZTG638",
	"brand": "ZIPP",
	"model": "ZTG638",
	"mpn": "ZTG638",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-ztg638.webp",
		"alt": "Repères techniques : ZIPP ZTG638",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ztg638",
		"label": "Référence ZTG638",
		"distinguishingAttributes": {
			"reference": "ZTG638",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "8.38 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZTG638. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 8500 tr/min. Masse : 8.38 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 8.38 kg.",
			"Référence constructeur : ZTG638."
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
				"october-b-zipp-tools-p162"
			]
		},
		{
			"label": "Masse",
			"value": "8.38 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p162"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZTG638",
			"evidenceIds": [
				"october-b-zipp-tools-p162"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p162"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 162",
			"evidenceIds": [
				"october-b-zipp-tools-p162"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p162",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=162",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 162",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p162"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p162"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p162"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
