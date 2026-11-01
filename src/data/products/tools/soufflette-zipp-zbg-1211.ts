import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-zipp-zbg-1211",
	"slug": "soufflette-zipp-zbg-1211",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "ZIPP ZBG-1211",
	"brand": "ZIPP",
	"model": "ZBG-1211",
	"mpn": "ZBG-1211",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-zipp-zbg-1211.webp",
		"alt": "Repères techniques : ZIPP ZBG-1211",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zbg-1211",
		"label": "Référence ZBG-1211",
		"distinguishingAttributes": {
			"reference": "ZBG-1211",
			"Masse": "0.171 kg",
			"Référence constructeur": "ZBG-1211"
		}
	},
	"editorial": {
		"overview": "ZIPP ZBG-1211. ZTG3125 est un pistolet de nettoyage à godet 1L,330×120×240 mm et 0,7 kg. ZBG-1211 est la petite soufflette sans godet ; les 6000 tr/min du mécanisme ne deviennent ni un débit ni une pression. Configuration : Soufflette à paume, sans godet. Dimensions publiées : 156 × 104 mm. Masse publiée : 0,171 kg.",
		"verifiedFacts": [
			"Masse : 0.171 kg.",
			"Référence constructeur : ZBG-1211.",
			"Configuration : Soufflette à paume, sans godet.",
			"Dimensions publiées : 156 × 104 mm.",
			"Masse publiée : 0,171 kg.",
			"Vitesse du mécanisme publiée : 6 000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.171 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p186"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZBG-1211",
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
		},
		{
			"label": "Configuration",
			"value": "Soufflette à paume, sans godet",
			"evidenceIds": [
				"soufflette-zipp-zbg-1211-reserved-20261101-1"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "156 × 104 mm",
			"evidenceIds": [
				"soufflette-zipp-zbg-1211-reserved-20261101-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,171 kg",
			"evidenceIds": [
				"soufflette-zipp-zbg-1211-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse du mécanisme publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"soufflette-zipp-zbg-1211-reserved-20261101-1"
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
		},
		{
			"id": "soufflette-zipp-zbg-1211-reserved-20261101-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=186",
			"sourceLabel": "ZIPP : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Passage page=186. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
		],
		"editorial": [
			"soufflette-zipp-zbg-1211-reserved-20261101-1"
		],
		"specifications": [
			"soufflette-zipp-zbg-1211-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
