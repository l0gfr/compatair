import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-pn063",
	"slug": "cle-a-impulsions-zipp-pn063",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP PN063",
	"brand": "ZIPP",
	"model": "PN063",
	"mpn": "PN063",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-pn063-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP PN063",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-pn063",
		"label": "Référence PN063",
		"distinguishingAttributes": {
			"reference": "PN063",
			"Vitesse à vide": "5800 tr/min",
			"Masse": "0.94 kg"
		}
	},
	"editorial": {
		"overview": "La PN063 est une visseuse à impulsions sans coupure, à carré 3/8 pouce. La table distingue ses couples sur assemblage dur à 0,4, 0,5 et 0,6 MPa ; les PS correspondantes ajoutent l’arrêt automatique. La PN063 publie 5 800 tr/min et 0,43 m³/min moyens. Ces consommations ne deviennent pas une demande continue par la seule présence d’une plage de pression d’essai.",
		"verifiedFacts": [
			"Vitesse à vide : 5800 tr/min.",
			"Masse : 0.94 kg.",
			"Référence constructeur : PN063."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5800 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Masse",
			"value": "0.94 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "PN063",
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
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-impulsions-zipp-pn063:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La PN063 est une visseuse à impulsions sans coupure, à carré 3/8 pouce. La table distingue ses couples sur assemblage dur à 0,4, 0,5 et 0,6 MPa ; les PS correspondantes ajoutent l’arrêt automatique. La PN063 publie 5 800 tr/min et 0,43 m³/min moyens. Ces consommations ne deviennent pas une demande continue par la seule présence d’une plage de pression d’essai. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 35."
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
