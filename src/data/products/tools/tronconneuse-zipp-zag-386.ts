import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zag-386",
	"slug": "tronconneuse-zipp-zag-386",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZAG-386",
	"brand": "ZIPP",
	"model": "ZAG-386",
	"mpn": "ZAG-386",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zag-386.webp",
		"alt": "Repères techniques : ZIPP ZAG-386",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag-386",
		"label": "Référence ZAG-386",
		"distinguishingAttributes": {
			"reference": "ZAG-386",
			"Vitesse à vide": "18000 tr/min",
			"Référence constructeur": "ZAG-386"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG-386. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 18000 tr/min. Référence constructeur : ZAG-386.",
		"verifiedFacts": [
			"Vitesse à vide : 18000 tr/min.",
			"Référence constructeur : ZAG-386."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p124"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG-386",
			"evidenceIds": [
				"october-b-zipp-tools-p124"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Capacity Size Horse Power Free Speed Avg. Air Cons. Overall Length Net Weight Air Pressure Air Inlet Size",
			"evidenceIds": [
				"october-b-zipp-tools-p124"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "113,267 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p124"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 124",
			"evidenceIds": [
				"october-b-zipp-tools-p124"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p124",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=124",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 124",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p124"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p124"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p124"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
