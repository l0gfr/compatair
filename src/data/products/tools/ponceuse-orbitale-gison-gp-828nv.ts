import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-gison-gp-828nv",
	"slug": "ponceuse-orbitale-gison-gp-828nv",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-828NV",
	"brand": "GISON",
	"model": "GP-828NV",
	"mpn": "GP-828NV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-gison-gp-828nv.webp",
		"alt": "Repères techniques : GISON GP-828NV",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-828nv",
		"label": "Référence GP-828NV",
		"distinguishingAttributes": {
			"reference": "GP-828NV",
			"Masse": "2.25 kg",
			"Longueur": "130 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-828NV. Consommation de régime non précisé : 300 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 2.25 kg. Longueur : 130 mm.",
		"verifiedFacts": [
			"Masse : 2.25 kg.",
			"Longueur : 130 mm.",
			"Vitesse à vide : 8000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-828NV."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.25 kg",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Longueur",
			"value": "130 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
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
			"value": "GP-828NV",
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
		"Consommation de régime non précisé : 300 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
