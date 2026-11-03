import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sp-air-sp-1170",
	"slug": "cle-a-cliquet-sp-air-sp-1170",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SP AIR SP-1170",
	"brand": "SP AIR",
	"model": "SP-1170",
	"mpn": "SP-1170",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sp-air-sp-1170.webp",
		"alt": "Repères techniques : SP AIR SP-1170",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1170",
		"label": "Référence SP-1170",
		"distinguishingAttributes": {
			"reference": "SP-1170",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "4.15 kg",
			"Longueur hors tout": "580 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1170. La SP-1170 est le grand cliquet 580 mm et 4,15 kg, carré 1/2 pouce et plage 50–300 Nm. Le SP-1765 voisin est un 3/8 pouce de 176 mm à 10–41 Nm et 500 tr/min. La longueur et la capacité changent fortement ; les 0,72 m³/min restent sans régime explicite.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Mécanisme : Pin clutch.",
			"Plage de couple : 50–300 Nm.",
			"Vitesse à vide : 210 tr/min.",
			"Longueur : 580 mm.",
			"Masse : 4,15 kg."
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
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Pin clutch",
			"evidenceIds": [
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "50–300 Nm",
			"evidenceIds": [
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "210 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "580 mm",
			"evidenceIds": [
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "4,15 kg",
			"evidenceIds": [
				"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p3",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=3",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=3",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-1170 est le grand cliquet 580 mm et 4,15 kg, carré 1/2 pouce et plage 50–300 Nm. Le SP-1765 voisin est un 3/8 pouce de 176 mm à 10–41 Nm et 500 tr/min. La longueur et la capacité changent fortement ; les 0,72 m³/min restent sans régime explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p3"
		],
		"workingPressureBar": [
			"october-sp-air-p3"
		],
		"airflowLpm": [
			"october-sp-air-p3"
		],
		"airflowBasis": [
			"october-sp-air-p3"
		],
		"editorial": [
			"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-sp-air-sp-1170-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 720 L/min à 6,2 bar."
	]
};

export default product;
