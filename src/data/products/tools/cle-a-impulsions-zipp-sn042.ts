import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-sn042",
	"slug": "cle-a-impulsions-zipp-sn042",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP SN042",
	"brand": "ZIPP",
	"model": "SN042",
	"mpn": "SN042",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-sn042.webp",
		"alt": "Repères techniques : ZIPP SN042",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-sn042",
		"label": "Référence SN042",
		"distinguishingAttributes": {
			"reference": "SN042",
			"Vitesse à vide": "5600 tr/min",
			"Masse": "0.87 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP SN042. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 5600 tr/min. Masse : 0.87 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5600 tr/min.",
			"Masse : 0.87 kg.",
			"Référence constructeur : SN042."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p36"
			]
		},
		{
			"label": "Masse",
			"value": "0.87 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p36"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "SN042",
			"evidenceIds": [
				"october-b-zipp-tools-p36"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Gauge Air Pressure: 60~90psi; consumption measurement point is not uniquely stated.",
			"evidenceIds": [
				"october-b-zipp-tools-p36"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 36",
			"evidenceIds": [
				"october-b-zipp-tools-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p36",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=36",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p36"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p36"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p36"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
