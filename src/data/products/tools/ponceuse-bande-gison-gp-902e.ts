import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-gison-gp-902e",
	"slug": "ponceuse-bande-gison-gp-902e",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "GISON GP-902E",
	"brand": "GISON",
	"model": "GP-902E",
	"mpn": "GP-902E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 640,
		"typical": 640,
		"max": 640
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-gison-gp-902e.webp",
		"alt": "Repères techniques : GISON GP-902E",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-902e",
		"label": "Référence GP-902E",
		"distinguishingAttributes": {
			"reference": "GP-902E",
			"Masse": "0.84 kg",
			"Longueur": "430 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-902E. Consommation de régime non précisé : 640 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 0.84 kg. Longueur : 430 mm.",
		"verifiedFacts": [
			"Masse : 0.84 kg.",
			"Longueur : 430 mm.",
			"Vitesse à vide : 18000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-902E."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.84 kg",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Longueur",
			"value": "430 mm",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-902E",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 45",
			"evidenceIds": [
				"october-b-gison-tools-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p45",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=45",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p45"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p45"
		],
		"airflowLpm": [
			"october-b-gison-tools-p45"
		],
		"airflowBasis": [
			"october-b-gison-tools-p45"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 640 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
