import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gison-gp-862h",
	"slug": "visseuse-gison-gp-862h",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GISON GP-862H",
	"brand": "GISON",
	"model": "GP-862H",
	"mpn": "GP-862H",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gison-gp-862h.webp",
		"alt": "Repères techniques : GISON GP-862H",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-862h",
		"label": "Référence GP-862H",
		"distinguishingAttributes": {
			"reference": "GP-862H",
			"Longueur": "210 mm",
			"Diamètre de flexible publié": "6.5 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-862H. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Longueur : 210 mm. Diamètre de flexible publié : 6.5 mm.",
		"verifiedFacts": [
			"Longueur : 210 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-862H."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"october-b-gison-tools-p65"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p65"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-862H",
			"evidenceIds": [
				"october-b-gison-tools-p65"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p65"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 65",
			"evidenceIds": [
				"october-b-gison-tools-p65"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p65",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=65",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 65",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p65"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p65"
		],
		"demandExplanation": [
			"october-b-gison-tools-p65"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
