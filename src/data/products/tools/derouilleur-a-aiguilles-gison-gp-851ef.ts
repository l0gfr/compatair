import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-gison-gp-851ef",
	"slug": "derouilleur-a-aiguilles-gison-gp-851ef",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "GISON GP-851EF",
	"brand": "GISON",
	"model": "GP-851EF",
	"mpn": "GP-851EF",
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
		"src": "/images/products/derouilleur-a-aiguilles-gison-gp-851ef.webp",
		"alt": "Repères techniques : GISON GP-851EF",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-851ef",
		"label": "Référence GP-851EF",
		"distinguishingAttributes": {
			"reference": "GP-851EF",
			"Masse": "1.75 kg",
			"Longueur": "335 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-851EF. Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.75 kg. Longueur : 335 mm.",
		"verifiedFacts": [
			"Masse : 1.75 kg.",
			"Longueur : 335 mm.",
			"Référence constructeur : GP-851EF."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.75 kg",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Longueur",
			"value": "335 mm",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-851EF",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 54",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p54",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=54",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p54"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p54"
		],
		"airflowLpm": [
			"october-b-gison-tools-p54"
		],
		"airflowBasis": [
			"october-b-gison-tools-p54"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
