import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-gison-gp-848r2",
	"slug": "scie-gison-gp-848r2",
	"categoryId": "scie",
	"category": "scie",
	"label": "GISON GP-848R2",
	"brand": "GISON",
	"model": "GP-848R2",
	"mpn": "GP-848R2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-gison-gp-848r2.webp",
		"alt": "Repères techniques : GISON GP-848R2",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-848r2",
		"label": "Référence GP-848R2",
		"distinguishingAttributes": {
			"reference": "GP-848R2",
			"Masse": "0.50 kg",
			"Longueur": "180 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-848R2. La GP-848R2 annonce une course 10 mm, 10 000 coups/min et une cellule de capacité 4 mm. La GP-848R3 passe à 20 mm, 5 500 coups/min et une cellule 8 mm. Le tableau ne nomme pas la matière de cette capacité ; aucune capacité acier ou inox n’est ajoutée.",
		"verifiedFacts": [
			"Type : Scie de carrosserie.",
			"Capacité publiée, matière non précisée dans la cellule : 4 mm.",
			"Course : 10 mm.",
			"Cadence : 10 000 coups/min.",
			"Longueur : 180 mm.",
			"Masse : 0,50 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Scie de carrosserie",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité publiée, matière non précisée dans la cellule",
			"value": "4 mm",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "10 mm",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "10 000 coups/min",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,50 kg",
			"evidenceIds": [
				"scie-gison-gp-848r2-reserved-20261103-1"
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
			"id": "scie-gison-gp-848r2-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-848R2 annonce une course 10 mm, 10 000 coups/min et une cellule de capacité 4 mm. La GP-848R3 passe à 20 mm, 5 500 coups/min et une cellule 8 mm. Le tableau ne nomme pas la matière de cette capacité ; aucune capacité acier ou inox n’est ajoutée."
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
			"scie-gison-gp-848r2-reserved-20261103-1"
		],
		"specifications": [
			"scie-gison-gp-848r2-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 370 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
