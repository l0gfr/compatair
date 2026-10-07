import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gison-gp-950",
	"slug": "visseuse-gison-gp-950",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GISON GP-950",
	"brand": "GISON",
	"model": "GP-950",
	"mpn": "GP-950",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gison-gp-950.webp",
		"alt": "Repères techniques : GISON GP-950",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-950",
		"label": "Référence GP-950",
		"distinguishingAttributes": {
			"reference": "GP-950",
			"Masse": "0.95 kg",
			"Longueur": "135 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-950. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Masse : 0.95 kg. Longueur : 135 mm.",
		"verifiedFacts": [
			"Masse : 0.95 kg.",
			"Longueur : 135 mm.",
			"Vitesse à vide : 10000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-950."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Longueur",
			"value": "135 mm",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-950",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 66",
			"evidenceIds": [
				"october-b-gison-tools-p66"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p66",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=66",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 66",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p66"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p66"
		],
		"demandExplanation": [
			"october-b-gison-tools-p66"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
