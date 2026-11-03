import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-vessel-gt-r10m",
	"slug": "cle-a-cliquet-vessel-gt-r10m",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "VESSEL GT-R10M",
	"brand": "VESSEL",
	"model": "GT-R10M",
	"mpn": "GT-R10M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-vessel-gt-r10m.webp",
		"alt": "Repères techniques : VESSEL GT-R10M",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-r10m",
		"label": "Référence GT-R10M",
		"distinguishingAttributes": {
			"reference": "GT-R10M",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "250 tr/min",
			"Code EDP publié": "339003"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-R10M. La GT-R10M est le mini-cliquet carré 9,5 mm, 170 mm de longueur et 500 g. La GT-R10 est l’autre modèle de cliquet lié par le fabricant ; la différence de format est à vérifier avec sa propre fiche, sans couple supposé. La fiche exacte confirme le verrouillage à bille et le raccord Rc1/4. Le régime des 0,3 m³/min n’est pas précisé.",
		"verifiedFacts": [
			"Carré : 9,5 mm (SQ9.5), verrouillage à bille.",
			"Capacité boulon ordinaire : 10 mm.",
			"Vitesse à vide : 250 tr/min.",
			"Longueur : 170 mm.",
			"Masse hors accessoires : 500 g.",
			"Consommation, régime non précisé : 0,3 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "9,5 mm (SQ9.5), verrouillage à bille",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité boulon ordinaire",
			"value": "10 mm",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "500 g",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,3 m³/min",
			"evidenceIds": [
				"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p27",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=27",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airtools_wrench/339003",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 6fe3a96ee0213c998747179fa8d52aa6a6db979cfeafa312288907286dd24bd0. La GT-R10M est le mini-cliquet carré 9,5 mm, 170 mm de longueur et 500 g. La GT-R10 est l’autre modèle de cliquet lié par le fabricant ; la différence de format est à vérifier avec sa propre fiche, sans couple supposé. La fiche exacte confirme le verrouillage à bille et le raccord Rc1/4. Le régime des 0,3 m³/min n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p27"
		],
		"workingPressureBar": [
			"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
		],
		"airflowLpm": [
			"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
		],
		"airflowBasis": [
			"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
		],
		"editorial": [
			"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-vessel-gt-r10m-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6 bar."
	]
};

export default product;
