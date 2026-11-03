import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-1140ex",
	"slug": "cle-a-chocs-sp-air-sp-1140ex",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-1140EX",
	"brand": "SP AIR",
	"model": "SP-1140EX",
	"mpn": "SP-1140EX",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-1140ex.webp",
		"alt": "Repères techniques : SP AIR SP-1140EX",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1140ex",
		"label": "Référence SP-1140EX",
		"distinguishingAttributes": {
			"reference": "SP-1140EX",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "2.6 kg",
			"Longueur hors tout": "185 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1140EX. La SP-1140EX est la clé 1/2 pouce Twin dog clutch de 2,6 kg, plage 50–500 Nm. La SP-1143 utilise Dyna Jaw clutch, donne 50–320 Nm et 8 000 tr/min pour 1,6 kg. Les mécanismes et plages de couple restent distincts, sans transformer les 0,6 m³/min de régime non précisé en maximum mesuré.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Mécanisme : Twin dog clutch.",
			"Plage de couple : 50–500 Nm.",
			"Vitesse à vide : 6 000 tr/min.",
			"Longueur : 185 mm."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Twin dog clutch",
			"evidenceIds": [
				"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "50–500 Nm",
			"evidenceIds": [
				"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p9",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=9",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=9",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-1140EX est la clé 1/2 pouce Twin dog clutch de 2,6 kg, plage 50–500 Nm. La SP-1143 utilise Dyna Jaw clutch, donne 50–320 Nm et 8 000 tr/min pour 1,6 kg. Les mécanismes et plages de couple restent distincts, sans transformer les 0,6 m³/min de régime non précisé en maximum mesuré."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p9"
		],
		"workingPressureBar": [
			"october-sp-air-p9"
		],
		"airflowLpm": [
			"october-sp-air-p9"
		],
		"airflowBasis": [
			"october-sp-air-p9"
		],
		"editorial": [
			"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-sp-air-sp-1140ex-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 600 L/min à 6,2 bar."
	]
};

export default product;
