import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-gison-gp-926",
	"slug": "ponceuse-vibrante-gison-gp-926",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "GISON GP-926",
	"brand": "GISON",
	"model": "GP-926",
	"mpn": "GP-926",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-gison-gp-926.webp",
		"alt": "Repères techniques : GISON GP-926",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-926",
		"label": "Référence GP-926",
		"distinguishingAttributes": {
			"reference": "GP-926",
			"Masse": "0.50 kg",
			"Longueur": "140 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-926. La GP-926 possède un patin 75 × 82 mm et une orbite 1,2 mm. La GP-927 passe à 100 × 110 mm, orbite 1,6 mm et 20 000 tr/min pour 0,55 kg ; la GP-937S est de plus grand format 74 × 145 mm, orbite 5 mm et 1,20 kg. La dimension du patin est distincte de la longueur du corps.",
		"verifiedFacts": [
			"Aspiration : Sans aspiration, Non-Vacuum.",
			"Patin : 75 × 82 mm.",
			"Orbite : 1,2 mm.",
			"Vitesse à vide : 15 000 tr/min.",
			"Longueur : 140 mm.",
			"Masse : 0,50 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Aspiration",
			"value": "Sans aspiration, Non-Vacuum",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		},
		{
			"label": "Patin",
			"value": "75 × 82 mm",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "1,2 mm",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "140 mm",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,50 kg",
			"evidenceIds": [
				"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p41",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=41",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-vibrante-gison-gp-926-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=41",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-926 possède un patin 75 × 82 mm et une orbite 1,2 mm. La GP-927 passe à 100 × 110 mm, orbite 1,6 mm et 20 000 tr/min pour 0,55 kg ; la GP-937S est de plus grand format 74 × 145 mm, orbite 5 mm et 1,20 kg. La dimension du patin est distincte de la longueur du corps."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p41"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p41"
		],
		"airflowLpm": [
			"october-b-gison-tools-p41"
		],
		"airflowBasis": [
			"october-b-gison-tools-p41"
		],
		"editorial": [
			"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-vibrante-gison-gp-926-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 150 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
