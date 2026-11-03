import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-gison-gp-948a",
	"slug": "lime-alternative-gison-gp-948a",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "GISON GP-948A",
	"brand": "GISON",
	"model": "GP-948A",
	"mpn": "GP-948A",
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
		"src": "/images/products/lime-alternative-gison-gp-948a.webp",
		"alt": "Repères techniques : GISON GP-948A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-948a",
		"label": "Référence GP-948A",
		"distinguishingAttributes": {
			"reference": "GP-948A",
			"Masse": "0.57 kg",
			"Longueur": "202 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-948A. La GP-948A est la lime de course 1 mm à 21 000 coups/min ; la GP-948B donne 5 mm et 12 000 coups/min pour 0,70 kg. La GP-948 sans suffixe donne 10 mm et 3 700 coups/min. La course et la cadence orientent le choix, sans déduire une capacité matière absente de la table.",
		"verifiedFacts": [
			"Type : Lime alternative.",
			"Course : 1 mm.",
			"Cadence : 21 000 coups/min.",
			"Longueur : 202 mm.",
			"Masse : 0,57 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Lime alternative",
			"evidenceIds": [
				"lime-alternative-gison-gp-948a-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "1 mm",
			"evidenceIds": [
				"lime-alternative-gison-gp-948a-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "21 000 coups/min",
			"evidenceIds": [
				"lime-alternative-gison-gp-948a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "202 mm",
			"evidenceIds": [
				"lime-alternative-gison-gp-948a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,57 kg",
			"evidenceIds": [
				"lime-alternative-gison-gp-948a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p76",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 76",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "lime-alternative-gison-gp-948a-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-948A est la lime de course 1 mm à 21 000 coups/min ; la GP-948B donne 5 mm et 12 000 coups/min pour 0,70 kg. La GP-948 sans suffixe donne 10 mm et 3 700 coups/min. La course et la cadence orientent le choix, sans déduire une capacité matière absente de la table."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p76"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p76"
		],
		"airflowLpm": [
			"october-b-gison-tools-p76"
		],
		"airflowBasis": [
			"october-b-gison-tools-p76"
		],
		"editorial": [
			"lime-alternative-gison-gp-948a-reserved-20261103-1"
		],
		"specifications": [
			"lime-alternative-gison-gp-948a-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 210 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
