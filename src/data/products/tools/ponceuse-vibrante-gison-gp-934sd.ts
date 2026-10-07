import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-gison-gp-934sd",
	"slug": "ponceuse-vibrante-gison-gp-934sd",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "GISON GP-934SD",
	"brand": "GISON",
	"model": "GP-934SD",
	"mpn": "GP-934SD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-gison-gp-934sd.webp",
		"alt": "Repères techniques : GISON GP-934SD",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-934sd",
		"label": "Référence GP-934SD",
		"distinguishingAttributes": {
			"reference": "GP-934SD",
			"Masse": "2.10 kg",
			"Longueur": "275 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-934SD. Consommation de régime non précisé : 400 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 2.10 kg. Longueur : 275 mm.",
		"verifiedFacts": [
			"Masse : 2.10 kg.",
			"Longueur : 275 mm.",
			"Vitesse à vide : 9000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-934SD."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.10 kg",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Longueur",
			"value": "275 mm",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-934SD",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 41",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p41",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=41",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p41"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p41"
		],
		"airflowLpm": [
			"october-b-gison-tools-p41"
		],
		"airflowBasis": [
			"october-b-gison-tools-p41"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 400 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
