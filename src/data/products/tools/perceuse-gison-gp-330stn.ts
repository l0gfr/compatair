import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gison-gp-330stn",
	"slug": "perceuse-gison-gp-330stn",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GISON GP-330STN",
	"brand": "GISON",
	"model": "GP-330STN",
	"mpn": "GP-330STN",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 640,
		"typical": 640,
		"max": 640
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gison-gp-330stn.webp",
		"alt": "Repères techniques : GISON GP-330STN",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-330stn",
		"label": "Référence GP-330STN",
		"distinguishingAttributes": {
			"reference": "GP-330STN",
			"Masse": "1.08 kg",
			"Longueur": "218 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-330STN. Consommation de régime non précisé : 640 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.08 kg. Longueur : 218 mm.",
		"verifiedFacts": [
			"Masse : 1.08 kg.",
			"Longueur : 218 mm.",
			"Vitesse maximale publiée : 3600 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-330STN."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.08 kg",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "3600 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-330STN",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p59",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=59",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p59"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p59"
		],
		"airflowLpm": [
			"october-b-gison-tools-p59"
		],
		"airflowBasis": [
			"october-b-gison-tools-p59"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 640 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
