import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-gison-gp-836lc5",
	"slug": "riveteuse-gison-gp-836lc5",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "GISON GP-836LC5",
	"brand": "GISON",
	"model": "GP-836LC5",
	"mpn": "GP-836LC5",
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
		"src": "/images/products/riveteuse-gison-gp-836lc5.webp",
		"alt": "Repères techniques : GISON GP-836LC5",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-836lc5",
		"label": "Référence GP-836LC5",
		"distinguishingAttributes": {
			"reference": "GP-836LC5",
			"Masse": "1.50 kg",
			"Longueur": "205 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-836LC5. Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.50 kg. Longueur : 205 mm.",
		"verifiedFacts": [
			"Masse : 1.50 kg.",
			"Longueur : 205 mm.",
			"Vitesse à vide : 1000 tr/min.",
			"Référence constructeur : GP-836LC5."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.50 kg",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Longueur",
			"value": "205 mm",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-836LC5",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 70",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p70",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=70",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p70"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p70"
		],
		"airflowLpm": [
			"october-b-gison-tools-p70"
		],
		"airflowBasis": [
			"october-b-gison-tools-p70"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
