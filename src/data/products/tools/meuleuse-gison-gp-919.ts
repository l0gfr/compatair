import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gison-gp-919",
	"slug": "meuleuse-gison-gp-919",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GISON GP-919",
	"brand": "GISON",
	"model": "GP-919",
	"mpn": "GP-919",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 460,
		"typical": 460,
		"max": 460
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gison-gp-919.webp",
		"alt": "Repères techniques : GISON GP-919",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-919",
		"label": "Référence GP-919",
		"distinguishingAttributes": {
			"reference": "GP-919",
			"Masse": "4.20 kg",
			"Longueur": "340 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-919. Consommation de régime non précisé : 460 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 4.20 kg. Longueur : 340 mm.",
		"verifiedFacts": [
			"Masse : 4.20 kg.",
			"Longueur : 340 mm.",
			"Diamètre de flexible publié : 13 mm.",
			"Référence constructeur : GP-919."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "4.20 kg",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		},
		{
			"label": "Longueur",
			"value": "340 mm",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "13 mm",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-919",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 26",
			"evidenceIds": [
				"october-b-gison-tools-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p26",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=26",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p26"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p26"
		],
		"airflowLpm": [
			"october-b-gison-tools-p26"
		],
		"airflowBasis": [
			"october-b-gison-tools-p26"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 460 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
