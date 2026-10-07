import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gison-gp-824ste1",
	"slug": "meuleuse-gison-gp-824ste1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GISON GP-824STE1",
	"brand": "GISON",
	"model": "GP-824STE1",
	"mpn": "GP-824STE1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gison-gp-824ste1.webp",
		"alt": "Repères techniques : GISON GP-824STE1",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-824ste1",
		"label": "Référence GP-824STE1",
		"distinguishingAttributes": {
			"reference": "GP-824STE1",
			"Masse": "0.70 kg",
			"Longueur": "240 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-824STE1. Consommation de régime non précisé : 500 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 0.70 kg. Longueur : 240 mm.",
		"verifiedFacts": [
			"Masse : 0.70 kg.",
			"Longueur : 240 mm.",
			"Vitesse maximale publiée : 22000 tr/min.",
			"Diamètre de flexible publié : 5 mm.",
			"Référence constructeur : GP-824STE1."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.70 kg",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Longueur",
			"value": "240 mm",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "22000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-824STE1",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 31",
			"evidenceIds": [
				"october-b-gison-tools-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p31",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=31",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p31"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p31"
		],
		"airflowLpm": [
			"october-b-gison-tools-p31"
		],
		"airflowBasis": [
			"october-b-gison-tools-p31"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 500 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
