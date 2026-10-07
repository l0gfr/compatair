import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-gison-gp-845a",
	"slug": "ponceuse-rotative-gison-gp-845a",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "GISON GP-845A",
	"brand": "GISON",
	"model": "GP-845A",
	"mpn": "GP-845A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-gison-gp-845a.webp",
		"alt": "Repères techniques : GISON GP-845A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-845a",
		"label": "Référence GP-845A",
		"distinguishingAttributes": {
			"reference": "GP-845A",
			"Masse": "3.00 kg",
			"Diamètre de flexible publié": "6.5 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-845A. Consommation de régime non précisé : 350 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 3.00 kg. Diamètre de flexible publié : 6.5 mm.",
		"verifiedFacts": [
			"Masse : 3.00 kg.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-845A."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "3.00 kg",
			"evidenceIds": [
				"october-b-gison-tools-p42"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p42"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-845A",
			"evidenceIds": [
				"october-b-gison-tools-p42"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p42"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 42",
			"evidenceIds": [
				"october-b-gison-tools-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p42",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=42",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p42"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p42"
		],
		"airflowLpm": [
			"october-b-gison-tools-p42"
		],
		"airflowBasis": [
			"october-b-gison-tools-p42"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 350 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
