import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zos3-214-n3",
	"slug": "ponceuse-orbitale-zipp-zos3-214-n3",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZOS3-214-N3",
	"brand": "ZIPP",
	"model": "ZOS3-214-N3",
	"mpn": "ZOS3-214-N3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zos3-214-n3.webp",
		"alt": "Repères techniques : ZIPP ZOS3-214-N3",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zos3-214-n3",
		"label": "Référence ZOS3-214-N3",
		"distinguishingAttributes": {
			"reference": "ZOS3-214-N3",
			"Vitesse à vide": "11000 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZOS3-214-N3. La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé. Vitesse à vide : 11000 tr/min. Masse : 0.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Masse : 0.8 kg.",
			"Référence constructeur : ZOS3-214-N3."
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
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZOS3-214-N3",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "45,307 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 140",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p140",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=140",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 140",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p140"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p140"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p140"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
