import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-sumake-st-909",
	"slug": "graveur-sumake-st-909",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Sumake ST-909",
	"brand": "Sumake",
	"model": "ST-909",
	"mpn": "ST-909",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-sumake-st-909.webp",
		"alt": "Repères techniques : Sumake ST-909",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-909",
		"label": "Référence ST-909",
		"distinguishingAttributes": {
			"reference": "ST-909",
			"Consommation dans les unités du tableau": "170 L/min ; 6 cfm",
			"Configuration complète publiée": "ST-909",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-909. La ST-909 annonce 10 000 coups/min et 170 mm. La ST-909A annonce 30 000–34 000 coups/min, 160 mm et 0,2 kg ; la ST-6501 est à 3 300–3 400 coups/min et 0,11 kg. Les trois partagent 170 L/min publiés, ce qui ne les rend pas équivalentes pour le geste de gravure.",
		"verifiedFacts": [
			"Cadence publiée : 10 000 coups/min.",
			"Longueur : 170 mm.",
			"Masse de la table : 0,9 kg.",
			"Raccord : 1/4 pouce.",
			"Consommation documentaire : 170 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Cadence publiée",
			"value": "10 000 coups/min",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		},
		{
			"label": "Masse de la table",
			"value": "0,9 kg",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		},
		{
			"label": "Raccord",
			"value": "1/4 pouce",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "170 L/min, régime non précisé",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"graveur-sumake-st-909-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p35",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=35",
			"sourceLabel": "sumake-na-2024, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "graveur-sumake-st-909-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=35",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-909 annonce 10 000 coups/min et 170 mm. La ST-909A annonce 30 000–34 000 coups/min, 160 mm et 0,2 kg ; la ST-6501 est à 3 300–3 400 coups/min et 0,11 kg. Les trois partagent 170 L/min publiés, ce qui ne les rend pas équivalentes pour le geste de gravure."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p35"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p35"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p35"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p35"
		],
		"editorial": [
			"graveur-sumake-st-909-reserved-20261103-1"
		],
		"specifications": [
			"graveur-sumake-st-909-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 170 L/min à 6,2 bar."
	]
};

export default product;
