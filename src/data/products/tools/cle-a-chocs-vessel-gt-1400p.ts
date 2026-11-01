import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-1400p",
	"slug": "cle-a-chocs-vessel-gt-1400p",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-1400P",
	"brand": "VESSEL",
	"model": "GT-1400P",
	"mpn": "GT-1400P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-1400p.webp",
		"alt": "Repères techniques : VESSEL GT-1400P",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=22",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-1400p",
		"label": "Référence GT-1400P",
		"distinguishingAttributes": {
			"reference": "GT-1400P",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "7,000 tr/min",
			"Code EDP publié": "331265"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-1400P. GT-P12 partage la plage 49–294,1 Nm mais publie 7500 tr/min,185 mm et 2,3 kg ; GT-1400P publie 7000 tr/min,182 mm et 2,25 kg. Le tableau exact est page PDF22 et non 21. Consommation 0,35 m³/min de régime non précisé ; aucun maximum en charge déduit. Carré de sortie : 12,7 mm. Plage de couple publiée : 49–294,1 Nm. Couple maximal publié : 344,9 Nm.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 7,000 tr/min.",
			"Code EDP publié : 331265.",
			"Carré de sortie : 12,7 mm.",
			"Plage de couple publiée : 49–294,1 Nm.",
			"Couple maximal publié : 344,9 Nm.",
			"Longueur hors accessoires : 182 mm.",
			"Masse hors accessoires : 2,25 kg."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "Rc 1/4",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "331265",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 21",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6 MPa",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "12,7 mm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "49–294,1 Nm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "344,9 Nm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur hors accessoires",
			"value": "182 mm",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "2,25 kg",
			"evidenceIds": [
				"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p21",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=21",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-vessel-gt-1400p-reserved-20261101-1",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=22",
			"sourceLabel": "VESSEL : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Passage page=22. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p21"
		],
		"workingPressureBar": [
			"october-vessel-air-p21"
		],
		"airflowLpm": [
			"october-vessel-air-p21"
		],
		"airflowBasis": [
			"october-vessel-air-p21"
		],
		"editorial": [
			"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
		],
		"image": [
			"cle-a-chocs-vessel-gt-1400p-reserved-20261101-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 350 L/min à 6 bar."
	]
};

export default product;
