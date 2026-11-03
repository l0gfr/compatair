import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-vessel-gt-h4r",
	"slug": "visseuse-vessel-gt-h4r",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-H4R",
	"brand": "VESSEL",
	"model": "GT-H4R",
	"mpn": "GT-H4R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-vessel-gt-h4r.webp",
		"alt": "Repères techniques : VESSEL GT-H4R",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-h4r",
		"label": "Référence GT-H4R",
		"distinguishingAttributes": {
			"reference": "GT-H4R",
			"Raccord publié": "G 1/4",
			"Vitesse à vide": "1,500 tr/min",
			"Code EDP publié": "311036"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-H4R. La GT-H4R est la visseuse à embrayage démarrant par poussée, embout hexagonal 6,35 mm retenu par bille. Elle est donnée pour vis standard et boulons 3–4 mm, et vis à bois 1,8–2,4 mm. Les GT-H4RC et H4PR sont d’autres géométries/commandes du catalogue, sans couple de serrage supposé. Les 0,2 m³/min restent sans régime explicite.",
		"verifiedFacts": [
			"Emmanchement : Hexagonal 6,35 mm, retenue à bille.",
			"Démarrage : Par poussée.",
			"Capacité vis standard / boulon : 3–4 mm.",
			"Capacité vis à bois : 1,8–2,4 mm.",
			"Vitesse à vide : 1 500 tr/min.",
			"Longueur : 190 mm.",
			"Masse hors accessoires : 590 g.",
			"Consommation, régime non précisé : 0,2 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement",
			"value": "Hexagonal 6,35 mm, retenue à bille",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Démarrage",
			"value": "Par poussée",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité vis standard / boulon",
			"value": "3–4 mm",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité vis à bois",
			"value": "1,8–2,4 mm",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 500 tr/min",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "190 mm",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "590 g",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,2 m³/min",
			"evidenceIds": [
				"visseuse-vessel-gt-h4r-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p9",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=9",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "visseuse-vessel-gt-h4r-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airtools_screwdriver/311036",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 be66ec07e544fd86de2cbe0643f9a765439fd6bb9bd0001a8ea6cbe60f8642cc. La GT-H4R est la visseuse à embrayage démarrant par poussée, embout hexagonal 6,35 mm retenu par bille. Elle est donnée pour vis standard et boulons 3–4 mm, et vis à bois 1,8–2,4 mm. Les GT-H4RC et H4PR sont d’autres géométries/commandes du catalogue, sans couple de serrage supposé. Les 0,2 m³/min restent sans régime explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p9"
		],
		"workingPressureBar": [
			"visseuse-vessel-gt-h4r-reserved-20261103-1"
		],
		"airflowLpm": [
			"visseuse-vessel-gt-h4r-reserved-20261103-1"
		],
		"airflowBasis": [
			"visseuse-vessel-gt-h4r-reserved-20261103-1"
		],
		"editorial": [
			"visseuse-vessel-gt-h4r-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-vessel-gt-h4r-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6 bar."
	]
};

export default product;
