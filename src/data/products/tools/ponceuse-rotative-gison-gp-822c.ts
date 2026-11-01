import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-gison-gp-822c",
	"slug": "ponceuse-rotative-gison-gp-822c",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-822C",
	"brand": "GISON",
	"model": "GP-822C",
	"mpn": "GP-822C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 320,
		"typical": 320,
		"max": 320
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-gison-gp-822c.webp",
		"alt": "Repères techniques : GISON GP-822C",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-822c",
		"label": "Référence GP-822C",
		"distinguishingAttributes": {
			"reference": "GP-822C",
			"Longueur": "180 mm",
			"Diamètre de flexible publié": "5.0 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-822C. GP-822A utilise 2 pouces et une orbite 3 mm ; GP-822C utilise 3 pouces et une orbite 1 mm. Les GP-824 de type Rotate n’ont pas ce mouvement orbital. La catégorie est corrigée en ponceuse orbitale. Mouvement : Double action (Dual Action). Diamètre de plateau : 3 pouces. Orbite : 1 mm.",
		"verifiedFacts": [
			"Longueur : 180 mm.",
			"Diamètre de flexible publié : 5.0 mm.",
			"Référence constructeur : GP-822C.",
			"Mouvement : Double action (Dual Action).",
			"Diamètre de plateau : 3 pouces.",
			"Orbite : 1 mm.",
			"Vitesse à vide : 16 000 tr/min."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"GP-822A utilise 2 pouces et une orbite 3 mm ; GP-822C utilise 3 pouces et une orbite 1 mm. Les GP-824 de type Rotate n’ont pas ce mouvement orbital. La catégorie est corrigée en ponceuse orbitale."
		]
	},
	"specifications": [
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"october-b-gison-tools-p43"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5.0 mm",
			"evidenceIds": [
				"october-b-gison-tools-p43"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-822C",
			"evidenceIds": [
				"october-b-gison-tools-p43"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm 2)",
			"evidenceIds": [
				"october-b-gison-tools-p43"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 43",
			"evidenceIds": [
				"october-b-gison-tools-p43"
			]
		},
		{
			"label": "Mouvement",
			"value": "Double action (Dual Action)",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "3 pouces",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
			]
		},
		{
			"label": "Orbite",
			"value": "1 mm",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "16 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p43",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=43",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-gison-gp-822c-reserved-20261101-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=43",
			"sourceLabel": "GISON : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Passage page=43. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p43"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p43"
		],
		"airflowLpm": [
			"october-b-gison-tools-p43"
		],
		"airflowBasis": [
			"october-b-gison-tools-p43"
		],
		"categoryId": [
			"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
		],
		"category": [
			"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
		],
		"editorial": [
			"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
		],
		"specifications": [
			"ponceuse-rotative-gison-gp-822c-reserved-20261101-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 320 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
