import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-zipp-ztg3125",
	"slug": "pistolet-nettoyage-zipp-ztg3125",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "ZIPP ZTG3125",
	"brand": "ZIPP",
	"model": "ZTG3125",
	"mpn": "ZTG3125",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-zipp-ztg3125.webp",
		"alt": "Repères techniques : ZIPP ZTG3125",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ztg3125",
		"label": "Référence ZTG3125",
		"distinguishingAttributes": {
			"reference": "ZTG3125",
			"Vitesse à vide": "8000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZTG3125. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 8000 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8000 tr/min.",
			"Masse : 0.7 kg.",
			"Référence constructeur : ZTG3125."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZTG3125",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "rpm mm cfm lbs(kgs) Air Pressure psi inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 186",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p186",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=186",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 186",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p186"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p186"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p186"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
