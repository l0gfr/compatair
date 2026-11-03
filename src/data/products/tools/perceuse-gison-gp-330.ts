import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gison-gp-330",
	"slug": "perceuse-gison-gp-330",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GISON GP-330",
	"brand": "GISON",
	"model": "GP-330",
	"mpn": "GP-330",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 620,
		"typical": 620,
		"max": 620
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gison-gp-330.webp",
		"alt": "Repères techniques : GISON GP-330",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-330",
		"label": "Référence GP-330",
		"distinguishingAttributes": {
			"reference": "GP-330",
			"Masse": "1.00 kg",
			"Longueur": "225 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-330. La GP-330 est la perceuse droite à mandrin 3/8 pouce et 2 500 tr/min. La GP-330A est en 1/4 pouce à 6 500 tr/min et 175 mm ; la GP-330ST revient au mandrin 3/8 pouce à 2 600 tr/min dans un corps de 218 mm. Le suffixe correspond à une configuration réelle, pas à un simple changement de nom.",
		"verifiedFacts": [
			"Type : Perceuse droite.",
			"Mandrin : 3/8 pouce.",
			"Vitesse maximale publiée : 2 500 tr/min.",
			"Longueur : 225 mm.",
			"Masse : 1,00 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Perceuse droite",
			"evidenceIds": [
				"perceuse-gison-gp-330-reserved-20261103-1"
			]
		},
		{
			"label": "Mandrin",
			"value": "3/8 pouce",
			"evidenceIds": [
				"perceuse-gison-gp-330-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"perceuse-gison-gp-330-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"perceuse-gison-gp-330-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,00 kg",
			"evidenceIds": [
				"perceuse-gison-gp-330-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p59",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=59",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "perceuse-gison-gp-330-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=59",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-330 est la perceuse droite à mandrin 3/8 pouce et 2 500 tr/min. La GP-330A est en 1/4 pouce à 6 500 tr/min et 175 mm ; la GP-330ST revient au mandrin 3/8 pouce à 2 600 tr/min dans un corps de 218 mm. Le suffixe correspond à une configuration réelle, pas à un simple changement de nom."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p59"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p59"
		],
		"airflowLpm": [
			"october-b-gison-tools-p59"
		],
		"airflowBasis": [
			"october-b-gison-tools-p59"
		],
		"editorial": [
			"perceuse-gison-gp-330-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-gison-gp-330-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 620 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
