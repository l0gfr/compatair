import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zgd-d27-g1",
	"slug": "perceuse-zipp-zgd-d27-g1",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZGD-D27-G1",
	"brand": "ZIPP",
	"model": "ZGD-D27-G1",
	"mpn": "ZGD-D27-G1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zgd-d27-g1.webp",
		"alt": "Repères techniques : ZIPP ZGD-D27-G1",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zgd-d27-g1",
		"label": "Référence ZGD-D27-G1",
		"distinguishingAttributes": {
			"reference": "ZGD-D27-G1",
			"Vitesse à vide": "1000 tr/min",
			"Masse": "6.34 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZGD-D27-G1. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 1000 tr/min. Masse : 6.34 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 1000 tr/min.",
			"Masse : 6.34 kg.",
			"Référence constructeur : ZGD-D27-G1."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		},
		{
			"label": "Masse",
			"value": "6.34 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZGD-D27-G1",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "lRecommended Gauge Air Pressure: 60~90psi",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "424,753 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 107",
			"evidenceIds": [
				"october-b-zipp-tools-p107"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p107",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=107",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 107",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p107"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p107"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p107"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
