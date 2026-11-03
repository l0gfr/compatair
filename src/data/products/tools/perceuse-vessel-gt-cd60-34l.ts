import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-vessel-gt-cd60-34l",
	"slug": "perceuse-vessel-gt-cd60-34l",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "VESSEL GT-CD60-34L",
	"brand": "VESSEL",
	"model": "GT-CD60-34L",
	"mpn": "GT-CD60-34L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-vessel-gt-cd60-34l.webp",
		"alt": "Repères techniques : VESSEL GT-CD60-34L",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-cd60-34l",
		"label": "Référence GT-CD60-34L",
		"distinguishingAttributes": {
			"reference": "GT-CD60-34L",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "3,400 tr/min",
			"Code EDP publié": "336142"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-CD60-34 L. La GT-CD60-34 L est la version à levier de la perceuse d’angle, porte-outil fileté 1/4-28 UNF pour Snake Drills et échappement arrière. La GT-CD60-34 est une autre référence, dont l’équipement se vérifie séparément. Les 251 mm et 840 g sont ceux du code 336142 ; les 0,42 m³/min restent sans régime explicite.",
		"verifiedFacts": [
			"Type : Perceuse à renvoi d’angle, commande par levier.",
			"Porte-outil : 1/4-28 UNF, Snake Drills.",
			"Vitesse à vide : 3 400 tr/min.",
			"Longueur : 251 mm.",
			"Masse hors accessoires : 840 g.",
			"Consommation, régime non précisé : 0,42 m³/min."
		],
		"limitations": [
			"La consommation n’a pas de régime de charge explicite ; elle reste non dimensionnante malgré la pression nominale publiée."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Perceuse à renvoi d’angle, commande par levier",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		},
		{
			"label": "Porte-outil",
			"value": "1/4-28 UNF, Snake Drills",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3 400 tr/min",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "251 mm",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "840 g",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,42 m³/min",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p39",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=39",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-vessel-gt-cd60-34l-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airtools_drill/336142",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c9e71ba9e104cf38a15060706d6dba323ffaf9e062a20c17b30f10a5eb82c06d. La GT-CD60-34 L est la version à levier de la perceuse d’angle, porte-outil fileté 1/4-28 UNF pour Snake Drills et échappement arrière. La GT-CD60-34 est une autre référence, dont l’équipement se vérifie séparément. Les 251 mm et 840 g sont ceux du code 336142 ; les 0,42 m³/min restent sans régime explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p39"
		],
		"workingPressureBar": [
			"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
		],
		"airflowLpm": [
			"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
		],
		"airflowBasis": [
			"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
		],
		"editorial": [
			"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-vessel-gt-cd60-34l-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 420 L/min à 6 bar."
	]
};

export default product;
