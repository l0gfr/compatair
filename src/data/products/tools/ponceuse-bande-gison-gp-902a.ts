import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-gison-gp-902a",
	"slug": "ponceuse-bande-gison-gp-902a",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "GISON GP-902A",
	"brand": "GISON",
	"model": "GP-902A",
	"mpn": "GP-902A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 530,
		"typical": 530,
		"max": 530
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-gison-gp-902a.webp",
		"alt": "Repères techniques : GISON GP-902A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-902a",
		"label": "Référence GP-902A",
		"distinguishingAttributes": {
			"reference": "GP-902A",
			"Masse": "1.18 kg",
			"Longueur": "345 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-902A. La GP-902A est la version à bande 20 × 520 mm. La GP-902 utilise 10 × 330 mm pour 0,78 kg et la GP-902C 60 × 260 mm à 7 000 tr/min pour 1,65 kg. Ces formats de bande ne sont pas interchangeables ; le chiffre de débit ne suffit pas à choisir l’outil.",
		"verifiedFacts": [
			"Bande : 20 × 520 mm.",
			"Vitesse à vide : 18 000 tr/min.",
			"Longueur : 345 mm.",
			"Masse : 1,18 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "20 × 520 mm",
			"evidenceIds": [
				"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "345 mm",
			"evidenceIds": [
				"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,18 kg",
			"evidenceIds": [
				"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
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
		},
		{
			"id": "ponceuse-bande-gison-gp-902a-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=45",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-902A est la version à bande 20 × 520 mm. La GP-902 utilise 10 × 330 mm pour 0,78 kg et la GP-902C 60 × 260 mm à 7 000 tr/min pour 1,65 kg. Ces formats de bande ne sont pas interchangeables ; le chiffre de débit ne suffit pas à choisir l’outil."
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
		],
		"editorial": [
			"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-gison-gp-902a-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 530 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
