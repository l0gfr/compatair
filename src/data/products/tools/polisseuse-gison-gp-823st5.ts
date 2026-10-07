import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-gison-gp-823st5",
	"slug": "polisseuse-gison-gp-823st5",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "GISON GP-823ST5",
	"brand": "GISON",
	"model": "GP-823ST5",
	"mpn": "GP-823ST5",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 650,
		"typical": 650,
		"max": 650
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-gison-gp-823st5.webp",
		"alt": "Repères techniques : GISON GP-823ST5",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-823st5",
		"label": "Référence GP-823ST5",
		"distinguishingAttributes": {
			"reference": "GP-823ST5",
			"Masse": "1.00 kg",
			"Longueur": "203 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-823ST5. Consommation de régime non précisé : 650 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.00 kg. Longueur : 203 mm.",
		"verifiedFacts": [
			"Masse : 1.00 kg.",
			"Longueur : 203 mm.",
			"Vitesse à vide : 4000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-823ST5."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.00 kg",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Longueur",
			"value": "203 mm",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-823ST5",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 46",
			"evidenceIds": [
				"october-b-gison-tools-p46"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p46",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=46",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p46"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p46"
		],
		"airflowLpm": [
			"october-b-gison-tools-p46"
		],
		"airflowBasis": [
			"october-b-gison-tools-p46"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 650 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
