import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-gison-gp-851d",
	"slug": "derouilleur-a-aiguilles-gison-gp-851d",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "GISON GP-851D",
	"brand": "GISON",
	"model": "GP-851D",
	"mpn": "GP-851D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-gison-gp-851d-technical-20261116-reviews.svg",
		"alt": "Repères techniques : GISON GP-851D",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-851d",
		"label": "Référence GP-851D",
		"distinguishingAttributes": {
			"reference": "GP-851D",
			"Masse": "4.50 kg",
			"Longueur": "480 mm"
		}
	},
	"editorial": {
		"overview": "Le GP-851D utilise 28 aiguilles de 3 mm, une poignée pistolet et un corps de 480 mm pour 4,50 kg. Les GP-851A et 851B ne portent que 19 aiguilles, à 3 700 coups/min contre 3 000 pour le D. Cette différence d’équipement et de cadence compte davantage que l’intitulé commun dérouilleur. Les 0,21 m³/min de consommation n’ont pas de régime de mesure établi.",
		"verifiedFacts": [
			"Masse : 4.50 kg.",
			"Longueur : 480 mm.",
			"Référence constructeur : GP-851D."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "4.50 kg",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Longueur",
			"value": "480 mm",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-851D",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 53",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p53",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=53",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 53",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:derouilleur-a-aiguilles-gison-gp-851d:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le GP-851D utilise 28 aiguilles de 3 mm, une poignée pistolet et un corps de 480 mm pour 4,50 kg. Les GP-851A et 851B ne portent que 19 aiguilles, à 3 700 coups/min contre 3 000 pour le D. Cette différence d’équipement et de cadence compte davantage que l’intitulé commun dérouilleur. Les 0,21 m³/min de consommation n’ont pas de régime de mesure établi. GET complet SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Pages PDF lues : 53."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p53"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p53"
		],
		"airflowLpm": [
			"october-b-gison-tools-p53"
		],
		"airflowBasis": [
			"october-b-gison-tools-p53"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 210 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
