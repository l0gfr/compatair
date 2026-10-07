import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-gison-gp-os30",
	"slug": "ponceuse-orbitale-gison-gp-os30",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-OS30",
	"brand": "GISON",
	"model": "GP-OS30",
	"mpn": "GP-OS30",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-gison-gp-os30.webp",
		"alt": "Repères techniques : GISON GP-OS30",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-os30",
		"label": "Référence GP-OS30",
		"distinguishingAttributes": {
			"reference": "GP-OS30",
			"Longueur": "1.15 mm",
			"Diamètre de flexible publié": "0.45 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-OS30. La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance. Longueur : 1.15 mm. Diamètre de flexible publié : 0.45 mm.",
		"verifiedFacts": [
			"Longueur : 1.15 mm.",
			"Diamètre de flexible publié : 0.45 mm.",
			"Référence constructeur : GP-OS30."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur",
			"value": "1.15 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "0.45 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-OS30",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p37",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=37",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p37"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p37"
		],
		"demandExplanation": [
			"october-b-gison-tools-p37"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
