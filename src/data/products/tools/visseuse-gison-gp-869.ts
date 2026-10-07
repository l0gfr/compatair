import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gison-gp-869",
	"slug": "visseuse-gison-gp-869",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GISON GP-869",
	"brand": "GISON",
	"model": "GP-869",
	"mpn": "GP-869",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gison-gp-869.webp",
		"alt": "Repères techniques : GISON GP-869",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-869",
		"label": "Référence GP-869",
		"distinguishingAttributes": {
			"reference": "GP-869",
			"Masse": "0.95 kg",
			"Longueur": "195 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-869. Consommation de régime non précisé : 360 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 0.95 kg. Longueur : 195 mm.",
		"verifiedFacts": [
			"Masse : 0.95 kg.",
			"Longueur : 195 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-869."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		},
		{
			"label": "Longueur",
			"value": "195 mm",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-869",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 63",
			"evidenceIds": [
				"october-b-gison-tools-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p63",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=63",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p63"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p63"
		],
		"airflowLpm": [
			"october-b-gison-tools-p63"
		],
		"airflowBasis": [
			"october-b-gison-tools-p63"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 360 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
