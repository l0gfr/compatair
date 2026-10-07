import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-gison-gp-848r3",
	"slug": "scie-gison-gp-848r3",
	"categoryId": "scie",
	"category": "scie",
	"label": "GISON GP-848R3",
	"brand": "GISON",
	"model": "GP-848R3",
	"mpn": "GP-848R3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-gison-gp-848r3.webp",
		"alt": "Repères techniques : GISON GP-848R3",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-848r3",
		"label": "Référence GP-848R3",
		"distinguishingAttributes": {
			"reference": "GP-848R3",
			"Masse": "0.70 kg",
			"Longueur": "215 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-848R3. Consommation de régime non précisé : 310 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 0.70 kg. Longueur : 215 mm.",
		"verifiedFacts": [
			"Masse : 0.70 kg.",
			"Longueur : 215 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-848R3."
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
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Longueur",
			"value": "215 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-848R3",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 76",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p76",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 76",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p76"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p76"
		],
		"airflowLpm": [
			"october-b-gison-tools-p76"
		],
		"airflowBasis": [
			"october-b-gison-tools-p76"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 310 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
