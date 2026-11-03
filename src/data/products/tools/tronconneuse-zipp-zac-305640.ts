import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zac-305640",
	"slug": "tronconneuse-zipp-zac-305640",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZAC-305640",
	"brand": "ZIPP",
	"model": "ZAC-305640",
	"mpn": "ZAC-305640",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zac-305640.webp",
		"alt": "Repères techniques : ZIPP ZAC-305640",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zac-305640",
		"label": "Référence ZAC-305640",
		"distinguishingAttributes": {
			"reference": "ZAC-305640",
			"Vitesse à vide": "14000 tr/min",
			"Masse": "1.4 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAC-305640. La ZAC-305640 utilise un disque 4,5 pouces ; la ZAC-30540 utilise 4 pouces. Elles partagent 14 000 tr/min, 345 mm et 1,4 kg. La ZAC-304 est une autre géométrie à 16 000 tr/min : la vitesse admissible du disque doit correspondre au modèle exact.",
		"verifiedFacts": [
			"Disque : 4,5 pouces.",
			"Vitesse à vide : 14 000 tr/min.",
			"Longueur : 345 mm.",
			"Masse : 1,4 kg.",
			"Puissance publiée : 1,0 hp."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "4,5 pouces",
			"evidenceIds": [
				"tronconneuse-zipp-zac-305640-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "14 000 tr/min",
			"evidenceIds": [
				"tronconneuse-zipp-zac-305640-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "345 mm",
			"evidenceIds": [
				"tronconneuse-zipp-zac-305640-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"tronconneuse-zipp-zac-305640-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1,0 hp",
			"evidenceIds": [
				"tronconneuse-zipp-zac-305640-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p122",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=122",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 122",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "tronconneuse-zipp-zac-305640-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=122",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAC-305640 utilise un disque 4,5 pouces ; la ZAC-30540 utilise 4 pouces. Elles partagent 14 000 tr/min, 345 mm et 1,4 kg. La ZAC-304 est une autre géométrie à 16 000 tr/min : la vitesse admissible du disque doit correspondre au modèle exact."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p122"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p122"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p122"
		],
		"editorial": [
			"tronconneuse-zipp-zac-305640-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-zipp-zac-305640-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
