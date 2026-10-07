import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-ps084",
	"slug": "cle-a-impulsions-zipp-ps084",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP PS084",
	"brand": "ZIPP",
	"model": "PS084",
	"mpn": "PS084",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-ps084.webp",
		"alt": "Repères techniques : ZIPP PS084",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-ps084",
		"label": "Référence PS084",
		"distinguishingAttributes": {
			"reference": "PS084",
			"Vitesse à vide": "5500 tr/min",
			"Masse": "1.42 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP PS084. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 5500 tr/min. Masse : 1.42 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5500 tr/min.",
			"Masse : 1.42 kg.",
			"Référence constructeur : PS084."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Masse",
			"value": "1.42 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "PS084",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Gauge Air Pressure: 60~90psi; consumption measurement point is not uniquely stated.",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 35",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p35",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=35",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p35"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p35"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
