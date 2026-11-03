import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-sumake-st-66103s",
	"slug": "lime-alternative-sumake-st-66103s",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "Sumake ST-66103S",
	"brand": "Sumake",
	"model": "ST-66103S",
	"mpn": "ST-66103S",
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
		"src": "/images/products/lime-alternative-sumake-st-66103s.webp",
		"alt": "Repères techniques : Sumake ST-66103S",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-66103s",
		"label": "Référence ST-66103S",
		"distinguishingAttributes": {
			"reference": "ST-66103S",
			"Consommation dans les unités du tableau": "170 L/min ; 6 cfm",
			"Configuration complète publiée": "ST-66103S",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-66103S. La ST-66103S est la version oscillante swing de course 0,3 mm à 55 000 coups/min ; la ST-66103 est linéaire à 50 000. La 66107S passe à 0,7 mm et 20 000 coups/min. La course et le mouvement changent même si les consommations de gamme sont identiques.",
		"verifiedFacts": [
			"Mouvement : Turbolap swing, oscillant.",
			"Course : 0,3 mm.",
			"Cadence du tableau : 55 000 coups/min.",
			"Longueur : 185 mm.",
			"Masse : 0,2 kg.",
			"Consommation documentaire : 170 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Mouvement",
			"value": "Turbolap swing, oscillant",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "0,3 mm",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence du tableau",
			"value": "55 000 coups/min",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,2 kg",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "170 L/min, régime non précisé",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"lime-alternative-sumake-st-66103s-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p36",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=36",
			"sourceLabel": "sumake-na-2024, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "lime-alternative-sumake-st-66103s-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=36",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-66103S est la version oscillante swing de course 0,3 mm à 55 000 coups/min ; la ST-66103 est linéaire à 50 000. La 66107S passe à 0,7 mm et 20 000 coups/min. La course et le mouvement changent même si les consommations de gamme sont identiques."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p36"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p36"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p36"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p36"
		],
		"editorial": [
			"lime-alternative-sumake-st-66103s-reserved-20261103-1"
		],
		"specifications": [
			"lime-alternative-sumake-st-66103s-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 170 L/min à 6,2 bar."
	]
};

export default product;
