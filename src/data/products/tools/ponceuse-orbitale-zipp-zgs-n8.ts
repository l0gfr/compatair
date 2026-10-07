import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zgs-n8",
	"slug": "ponceuse-orbitale-zipp-zgs-n8",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZGS-N8",
	"brand": "ZIPP",
	"model": "ZGS-N8",
	"mpn": "ZGS-N8",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zgs-n8.webp",
		"alt": "Repères techniques : ZIPP ZGS-N8",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zgs-n8",
		"label": "Référence ZGS-N8",
		"distinguishingAttributes": {
			"reference": "ZGS-N8",
			"Vitesse à vide": "900 tr/min",
			"Masse": "1.6 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZGS-N8. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 900 tr/min. Masse : 1.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 900 tr/min.",
			"Masse : 1.6 kg.",
			"Référence constructeur : ZGS-N8."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZGS-N8",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "84,951 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 145",
			"evidenceIds": [
				"october-b-zipp-tools-p145"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p145",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=145",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 145",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p145"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p145"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p145"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
