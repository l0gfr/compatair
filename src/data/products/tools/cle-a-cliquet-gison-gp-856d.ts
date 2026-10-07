import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-gison-gp-856d",
	"slug": "cle-a-cliquet-gison-gp-856d",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "GISON GP-856D",
	"brand": "GISON",
	"model": "GP-856D",
	"mpn": "GP-856D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-gison-gp-856d.webp",
		"alt": "Repères techniques : GISON GP-856D",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-856d",
		"label": "Référence GP-856D",
		"distinguishingAttributes": {
			"reference": "GP-856D",
			"Masse": "1.20 kg",
			"Longueur": "265 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-856D. Consommation de régime non précisé : 490 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.20 kg. Longueur : 265 mm.",
		"verifiedFacts": [
			"Masse : 1.20 kg.",
			"Longueur : 265 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-856D."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.20 kg",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		},
		{
			"label": "Longueur",
			"value": "265 mm",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-856D",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 21",
			"evidenceIds": [
				"october-b-gison-tools-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p21",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=21",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p21"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p21"
		],
		"airflowLpm": [
			"october-b-gison-tools-p21"
		],
		"airflowBasis": [
			"october-b-gison-tools-p21"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 490 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
