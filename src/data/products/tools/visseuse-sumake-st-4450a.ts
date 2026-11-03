import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-st-4450a",
	"slug": "visseuse-sumake-st-4450a",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake ST-4450A",
	"brand": "Sumake",
	"model": "ST-4450A",
	"mpn": "ST-4450A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-st-4450a.webp",
		"alt": "Repères techniques : Sumake ST-4450A",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-4450a",
		"label": "Référence ST-4450A",
		"distinguishingAttributes": {
			"reference": "ST-4450A",
			"Consommation dans les unités du tableau": "270 L/min ; 9.5 cfm",
			"Configuration complète publiée": "ST-4450A",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-4450A. La ST-4450A possède le changement rapide d’embout ; la ST-4450 utilise le même hexagonal 6,35 mm sans cette mention. La ST-4460A est une visseuse à chocs distincte à 12 000 tr/min et 35 Nm, contre 1 700 tr/min et 3 Nm ici. Les codes proches ne justifient pas un échange de couples.",
		"verifiedFacts": [
			"Porte-embout : Hexagonal 6,35 mm à changement rapide.",
			"Vitesse à vide : 1 700 tr/min.",
			"Couple maximal publié : 3 Nm.",
			"Longueur : 235 mm.",
			"Masse : 0,66 kg.",
			"Consommation documentaire : 270 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Porte-embout",
			"value": "Hexagonal 6,35 mm à changement rapide",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 700 tr/min",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "3 Nm",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "235 mm",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,66 kg",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "270 L/min, régime non précisé",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"visseuse-sumake-st-4450a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p12",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=12",
			"sourceLabel": "sumake-na-2024, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "visseuse-sumake-st-4450a-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=12",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-4450A possède le changement rapide d’embout ; la ST-4450 utilise le même hexagonal 6,35 mm sans cette mention. La ST-4460A est une visseuse à chocs distincte à 12 000 tr/min et 35 Nm, contre 1 700 tr/min et 3 Nm ici. Les codes proches ne justifient pas un échange de couples."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p12"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p12"
		],
		"editorial": [
			"visseuse-sumake-st-4450a-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-sumake-st-4450a-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 270 L/min à 6,2 bar."
	]
};

export default product;
