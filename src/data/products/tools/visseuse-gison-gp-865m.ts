import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gison-gp-865m",
	"slug": "visseuse-gison-gp-865m",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GISON GP-865M",
	"brand": "GISON",
	"model": "GP-865M",
	"mpn": "GP-865M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gison-gp-865m.webp",
		"alt": "Repères techniques : GISON GP-865M",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-865m",
		"label": "Référence GP-865M",
		"distinguishingAttributes": {
			"reference": "GP-865M",
			"Masse": "1.16 kg",
			"Longueur": "265 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-865M. Consommation de régime non précisé : 480 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.16 kg. Longueur : 265 mm.",
		"verifiedFacts": [
			"Masse : 1.16 kg.",
			"Longueur : 265 mm.",
			"Diamètre de flexible publié : 5.0 mm.",
			"Référence constructeur : GP-865M."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.16 kg",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		},
		{
			"label": "Longueur",
			"value": "265 mm",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5.0 mm",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-865M",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 64",
			"evidenceIds": [
				"october-b-gison-tools-p64"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p64",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=64",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p64"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p64"
		],
		"airflowLpm": [
			"october-b-gison-tools-p64"
		],
		"airflowBasis": [
			"october-b-gison-tools-p64"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 480 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
