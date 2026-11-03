import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-sumake-st-24002",
	"slug": "marteau-a-river-sumake-st-24002",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Sumake ST-24002",
	"brand": "Sumake",
	"model": "ST-24002",
	"mpn": "ST-24002",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-sumake-st-24002.webp",
		"alt": "Repères techniques : Sumake ST-24002",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-24002",
		"label": "Référence ST-24002",
		"distinguishingAttributes": {
			"reference": "ST-24002",
			"Consommation dans les unités du tableau": "400 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-24002",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-24002. La ST-24002 à amortissement publie course 102 mm, 2 160 coups/min et 225 mm de longueur. La ST-2402, sans le zéro supplémentaire, publie course 57,2 mm et 2 580 coups/min. Ces deux codes proches ne désignent pas le même marteau.",
		"verifiedFacts": [
			"Type : Marteau à river à piston.",
			"Queue de burin : 0,401 pouce.",
			"Course : 102 mm.",
			"Cadence : 2 160 coups/min.",
			"Longueur : 225 mm.",
			"Masse : 1,35 kg.",
			"Consommation documentaire : 400 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Marteau à river à piston",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Queue de burin",
			"value": "0,401 pouce",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "102 mm",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "2 160 coups/min",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,35 kg",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "400 L/min, régime non précisé",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"marteau-a-river-sumake-st-24002-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p57",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=57",
			"sourceLabel": "sumake-na-2024, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "marteau-a-river-sumake-st-24002-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=57",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-24002 à amortissement publie course 102 mm, 2 160 coups/min et 225 mm de longueur. La ST-2402, sans le zéro supplémentaire, publie course 57,2 mm et 2 580 coups/min. Ces deux codes proches ne désignent pas le même marteau."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p57"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p57"
		],
		"editorial": [
			"marteau-a-river-sumake-st-24002-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-sumake-st-24002-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
