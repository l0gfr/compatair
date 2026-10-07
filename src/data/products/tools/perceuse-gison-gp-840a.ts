import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gison-gp-840a",
	"slug": "perceuse-gison-gp-840a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GISON GP-840A",
	"brand": "GISON",
	"model": "GP-840A",
	"mpn": "GP-840A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 560,
		"typical": 560,
		"max": 560
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gison-gp-840a.webp",
		"alt": "Repères techniques : GISON GP-840A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-840a",
		"label": "Référence GP-840A",
		"distinguishingAttributes": {
			"reference": "GP-840A",
			"Masse": "1.30 kg",
			"Longueur": "191 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-840A. Consommation de régime non précisé : 560 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.30 kg. Longueur : 191 mm.",
		"verifiedFacts": [
			"Masse : 1.30 kg.",
			"Longueur : 191 mm.",
			"Vitesse à vide : 2300 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-840A."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.30 kg",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Longueur",
			"value": "191 mm",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2300 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-840A",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 61",
			"evidenceIds": [
				"october-b-gison-tools-p61"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p61",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=61",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 61",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p61"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p61"
		],
		"airflowLpm": [
			"october-b-gison-tools-p61"
		],
		"airflowBasis": [
			"october-b-gison-tools-p61"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 560 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
