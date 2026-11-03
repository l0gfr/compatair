import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-gison-gp-940c",
	"slug": "graveur-gison-gp-940c",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "GISON GP-940C",
	"brand": "GISON",
	"model": "GP-940C",
	"mpn": "GP-940C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 60,
		"typical": 60,
		"max": 60
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-gison-gp-940c.webp",
		"alt": "Repères techniques : GISON GP-940C",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-940c",
		"label": "Référence GP-940C",
		"distinguishingAttributes": {
			"reference": "GP-940C",
			"Masse": "0.18 kg",
			"Diamètre de flexible publié": "6.5 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-940C. La GP-940C est la version à corps plastique, course 1,0 mm et pointe carbure 0,5 mm. La GP-940 à corps acier annonce course 1,2 mm, longueur 160 mm et masse 0,24 kg, contre 140 mm et 0,18 kg ici. Une même cadence 34 000 coups/min ne signifie pas une même course.",
		"verifiedFacts": [
			"Corps : Plastique.",
			"Course : 1,0 mm.",
			"Cadence : 34 000 coups/min.",
			"Pointe carbure : 0,5 mm.",
			"Longueur : 140 mm.",
			"Masse : 0,18 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Corps",
			"value": "Plastique",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "1,0 mm",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "34 000 coups/min",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		},
		{
			"label": "Pointe carbure",
			"value": "0,5 mm",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "140 mm",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,18 kg",
			"evidenceIds": [
				"graveur-gison-gp-940c-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p58",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=58",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 58",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "graveur-gison-gp-940c-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=58",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-940C est la version à corps plastique, course 1,0 mm et pointe carbure 0,5 mm. La GP-940 à corps acier annonce course 1,2 mm, longueur 160 mm et masse 0,24 kg, contre 140 mm et 0,18 kg ici. Une même cadence 34 000 coups/min ne signifie pas une même course."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p58"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p58"
		],
		"airflowLpm": [
			"october-b-gison-tools-p58"
		],
		"airflowBasis": [
			"october-b-gison-tools-p58"
		],
		"editorial": [
			"graveur-gison-gp-940c-reserved-20261103-1"
		],
		"specifications": [
			"graveur-gison-gp-940c-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 60 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
