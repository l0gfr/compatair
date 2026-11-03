import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-vessel-gt-ds50b",
	"slug": "ponceuse-rotative-vessel-gt-ds50b",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "VESSEL GT-DS50B",
	"brand": "VESSEL",
	"model": "GT-DS50B",
	"mpn": "GT-DS50B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 650,
		"typical": 650,
		"max": 650
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-vessel-gt-ds50b.webp",
		"alt": "Repères techniques : VESSEL GT-DS50B",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-ds50b",
		"label": "Référence GT-DS50B",
		"distinguishingAttributes": {
			"reference": "GT-DS50B",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "5,000 tr/min",
			"Longueur hors tout": "211 mm"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-DS50B. La GT-DS50B est la ponceuse pour disque 100 mm au montage M10 par écrou, à 5 000 tr/min. Les GT-DG50/DG100 sont des meuleuses et la GT-DS50A une autre configuration de ponceuse ; leurs montages restent distincts. La fiche exacte fournit protecteur et écrou. Les 0,65 m³/min restent non dimensionnants tant que leur régime n’est pas qualifié.",
		"verifiedFacts": [
			"Disque : 100 mm.",
			"Montage : M10, écrou de disque.",
			"Vitesse à vide : 5 000 tr/min.",
			"Longueur : 211 mm.",
			"Masse hors accessoires : 1 150 g.",
			"Consommation, régime non précisé : 0,65 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "100 mm",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		},
		{
			"label": "Montage",
			"value": "M10, écrou de disque",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "211 mm",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "1 150 g",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,65 m³/min",
			"evidenceIds": [
				"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p31",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=31",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airtools_sander2/310636",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 7f2cbb717c2ab5b60f135556595322fba846750c536e9cc4517576dac443410f. La GT-DS50B est la ponceuse pour disque 100 mm au montage M10 par écrou, à 5 000 tr/min. Les GT-DG50/DG100 sont des meuleuses et la GT-DS50A une autre configuration de ponceuse ; leurs montages restent distincts. La fiche exacte fournit protecteur et écrou. Les 0,65 m³/min restent non dimensionnants tant que leur régime n’est pas qualifié."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p31"
		],
		"workingPressureBar": [
			"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
		],
		"airflowLpm": [
			"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
		],
		"airflowBasis": [
			"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
		],
		"editorial": [
			"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-vessel-gt-ds50b-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 650 L/min à 6 bar."
	]
};

export default product;
