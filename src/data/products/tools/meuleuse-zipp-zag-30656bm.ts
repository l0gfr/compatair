import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag-30656bm",
	"slug": "meuleuse-zipp-zag-30656bm",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG-30656BM",
	"brand": "ZIPP",
	"model": "ZAG-30656BM",
	"mpn": "ZAG-30656BM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag-30656bm.webp",
		"alt": "Repères techniques : ZIPP ZAG-30656BM",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag-30656bm",
		"label": "Référence ZAG-30656BM",
		"distinguishingAttributes": {
			"reference": "ZAG-30656BM",
			"Vitesse à vide": "11000 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG-30656BM. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 11000 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZAG-30656BM."
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
				"october-b-zipp-tools-p121"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p121"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG-30656BM",
			"evidenceIds": [
				"october-b-zipp-tools-p121"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p121"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "116,099 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p121"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 121",
			"evidenceIds": [
				"october-b-zipp-tools-p121"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p121",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=121",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 121",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p121"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p121"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p121"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
