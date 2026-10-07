import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-gison-gp-827t",
	"slug": "ponceuse-orbitale-gison-gp-827t",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-827T",
	"brand": "GISON",
	"model": "GP-827T",
	"mpn": "GP-827T",
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
		"src": "/images/products/ponceuse-orbitale-gison-gp-827t.webp",
		"alt": "Repères techniques : GISON GP-827T",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-827t",
		"label": "Référence GP-827T",
		"distinguishingAttributes": {
			"reference": "GP-827T",
			"Masse": "1.30 kg",
			"Longueur": "160 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-827T. Consommation de régime non précisé : 340 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.30 kg. Longueur : 160 mm.",
		"verifiedFacts": [
			"Masse : 1.30 kg.",
			"Longueur : 160 mm.",
			"Vitesse à vide : 10000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-827T."
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
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Longueur",
			"value": "160 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-827T",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p37",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=37",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p37"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p37"
		],
		"airflowLpm": [
			"october-b-gison-tools-p37"
		],
		"airflowBasis": [
			"october-b-gison-tools-p37"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 340 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
