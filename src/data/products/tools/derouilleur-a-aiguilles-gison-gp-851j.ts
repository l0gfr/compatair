import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-gison-gp-851j",
	"slug": "derouilleur-a-aiguilles-gison-gp-851j",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "GISON GP-851J",
	"brand": "GISON",
	"model": "GP-851J",
	"mpn": "GP-851J",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-gison-gp-851j.webp",
		"alt": "Repères techniques : GISON GP-851J",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-851j",
		"label": "Référence GP-851J",
		"distinguishingAttributes": {
			"reference": "GP-851J",
			"Masse": "1.08 kg",
			"Longueur": "258 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-851J. Consommation de régime non précisé : 200 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.08 kg. Longueur : 258 mm.",
		"verifiedFacts": [
			"Masse : 1.08 kg.",
			"Longueur : 258 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-851J."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.08 kg",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Longueur",
			"value": "258 mm",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p54"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-851J",
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
		"Consommation de régime non précisé : 200 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
