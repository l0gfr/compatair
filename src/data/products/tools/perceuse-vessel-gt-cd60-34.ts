import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-vessel-gt-cd60-34",
	"slug": "perceuse-vessel-gt-cd60-34",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "VESSEL GT-CD60-34",
	"brand": "VESSEL",
	"model": "GT-CD60-34",
	"mpn": "GT-CD60-34",
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
		"src": "/images/products/perceuse-vessel-gt-cd60-34.webp",
		"alt": "Repères techniques : VESSEL GT-CD60-34",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-cd60-34",
		"label": "Référence GT-CD60-34",
		"distinguishingAttributes": {
			"reference": "GT-CD60-34",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "3,400 tr/min",
			"Code EDP publié": "336141"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-CD60-34. GT-CD60-34L démarre par levier, mesure 251 mm et 840 g ; les deux lignes partagent 3400 tr/min et 0,42 m³/min. La commande par poussée différencie GT-CD60-34 dans l’accès à la pièce. Commande : Démarrage par poussée. Longueur hors accessoires : 250 mm. Masse hors accessoires : 820 g.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 3,400 tr/min.",
			"Code EDP publié : 336141.",
			"Commande : Démarrage par poussée.",
			"Longueur hors accessoires : 250 mm.",
			"Masse hors accessoires : 820 g.",
			"Raccord de foret : 1/4-28 UNF."
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
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3,400 tr/min",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "336141",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 39",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "air pressure: 0.6 MPa",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Commande",
			"value": "Démarrage par poussée",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur hors accessoires",
			"value": "250 mm",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "820 g",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
			]
		},
		{
			"label": "Raccord de foret",
			"value": "1/4-28 UNF",
			"evidenceIds": [
				"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
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
			"id": "perceuse-vessel-gt-cd60-34-reserved-20261101-1",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=39",
			"sourceLabel": "VESSEL : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Passage page=39. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p39"
		],
		"workingPressureBar": [
			"october-vessel-air-p39"
		],
		"airflowLpm": [
			"october-vessel-air-p39"
		],
		"airflowBasis": [
			"october-vessel-air-p39"
		],
		"editorial": [
			"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
		],
		"specifications": [
			"perceuse-vessel-gt-cd60-34-reserved-20261101-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 420 L/min à 6 bar."
	]
};

export default product;
