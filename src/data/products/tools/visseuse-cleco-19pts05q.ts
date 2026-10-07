import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-cleco-19pts05q",
	"slug": "visseuse-cleco-19pts05q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PTS05Q",
	"brand": "Cleco",
	"model": "19PTS05Q",
	"mpn": "19PTS05Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 311.485,
		"typical": 311.485,
		"max": 311.485
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-cleco-19pts05q.webp",
		"alt": "Repères techniques : Cleco 19PTS05Q",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=53",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-19pts05q",
		"label": "Référence 19PTS05Q",
		"distinguishingAttributes": {
			"reference": "19PTS05Q",
			"Couple maximal publié": "5.1 Nm",
			"Vitesse à vide": "660 tr/min",
			"Longueur publiée": "6.1 in"
		}
	},
	"editorial": {
		"overview": "Cleco 19PTS05Q. Consommation publiée, régime non précisé : 311,485 L/min à 6,2 bar. Couple maximal publié : 5.1 Nm. Vitesse à vide : 660 tr/min.",
		"verifiedFacts": [
			"Couple maximal publié : 5.1 Nm.",
			"Vitesse à vide : 660 tr/min.",
			"Longueur publiée : 6.1 in.",
			"Masse publiée : 0.53 kg."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Couple maximal publié",
			"value": "5.1 Nm",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "660 tr/min",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "6.1 in",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.53 kg",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue constructeur SP-1081, page 53, page 53",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "General: Tool performance rated at 90 psi (620kPa).",
			"evidenceIds": [
				"october-cleco-p53-p53"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p53-p53",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=53#page=53",
			"sourceLabel": "Cleco, catalogue constructeur SP-1081, page 53, page 53",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b56d586490dc1712cffd2cb2082461f091fa129a6841755b9c42f5471b42e7d8. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p53-p53"
		],
		"workingPressureBar": [
			"october-cleco-p53-p53"
		],
		"airflowLpm": [
			"october-cleco-p53-p53"
		],
		"airflowBasis": [
			"october-cleco-p53-p53"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 311,485 L/min à 6,2 bar."
	]
};

export default product;
