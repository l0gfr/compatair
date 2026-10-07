import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-gison-gp-937s",
	"slug": "ponceuse-vibrante-gison-gp-937s",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "GISON GP-937S",
	"brand": "GISON",
	"model": "GP-937S",
	"mpn": "GP-937S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-gison-gp-937s.webp",
		"alt": "Repères techniques : GISON GP-937S",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-937s",
		"label": "Référence GP-937S",
		"distinguishingAttributes": {
			"reference": "GP-937S",
			"Masse": "1.20 kg",
			"Longueur": "155 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-937S. Consommation de régime non précisé : 340 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.20 kg. Longueur : 155 mm.",
		"verifiedFacts": [
			"Masse : 1.20 kg.",
			"Longueur : 155 mm.",
			"Vitesse à vide : 8000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-937S."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.20 kg",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Longueur",
			"value": "155 mm",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
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
			"value": "GP-937S",
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
		"Consommation de régime non précisé : 340 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
