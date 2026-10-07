import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-gison-gp-827n",
	"slug": "ponceuse-vibrante-gison-gp-827n",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "GISON GP-827N",
	"brand": "GISON",
	"model": "GP-827N",
	"mpn": "GP-827N",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-gison-gp-827n.webp",
		"alt": "Repères techniques : GISON GP-827N",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-827n",
		"label": "Référence GP-827N",
		"distinguishingAttributes": {
			"reference": "GP-827N",
			"Masse": "1.80 kg",
			"Longueur": "170 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-827N. Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.80 kg. Longueur : 170 mm.",
		"verifiedFacts": [
			"Masse : 1.80 kg.",
			"Longueur : 170 mm.",
			"Vitesse à vide : 8000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-827N."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.80 kg",
			"evidenceIds": [
				"october-b-gison-tools-p41"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
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
			"value": "GP-827N",
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
		"Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
