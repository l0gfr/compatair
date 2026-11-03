import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-6240v",
	"slug": "riveteuse-sumake-st-6240v",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-6240V",
	"brand": "Sumake",
	"model": "ST-6240V",
	"mpn": "ST-6240V",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 255,
		"typical": 255,
		"max": 255
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sumake-st-6240v.webp",
		"alt": "Repères techniques : Sumake ST-6240V",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-6240v",
		"label": "Référence ST-6240V",
		"distinguishingAttributes": {
			"reference": "ST-6240V",
			"Consommation dans les unités du tableau": "255 L/min ; 9 cfm",
			"Configuration complète publiée": "ST-6240V",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-6240V. La ST-6240V Vacuum couvre les diamètres 4,8/5,6/6,4 mm de sa ligne, course 26 mm et masse 1,94 kg. La ST-6250V ajoute 7,8 mm et pèse 2,18 kg pour la même longueur 325 mm. La consommation publiée en L/min ne permet pas de déduire un volume par rivet.",
		"verifiedFacts": [
			"Version : Vacuum.",
			"Diamètres de rivets de la ligne : 4,8 / 5,6 / 6,4 mm.",
			"Course : 26 mm.",
			"Longueur : 325 mm.",
			"Masse : 1,94 kg.",
			"Consommation documentaire : 255 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Version",
			"value": "Vacuum",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètres de rivets de la ligne",
			"value": "4,8 / 5,6 / 6,4 mm",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "26 mm",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "325 mm",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,94 kg",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "255 L/min, régime non précisé",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"riveteuse-sumake-st-6240v-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p63",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=63",
			"sourceLabel": "sumake-na-2024, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "riveteuse-sumake-st-6240v-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=63",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-6240V Vacuum couvre les diamètres 4,8/5,6/6,4 mm de sa ligne, course 26 mm et masse 1,94 kg. La ST-6250V ajoute 7,8 mm et pèse 2,18 kg pour la même longueur 325 mm. La consommation publiée en L/min ne permet pas de déduire un volume par rivet."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p63"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p63"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p63"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p63"
		],
		"editorial": [
			"riveteuse-sumake-st-6240v-reserved-20261103-1"
		],
		"specifications": [
			"riveteuse-sumake-st-6240v-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 255 L/min à 6,2 bar."
	]
};

export default product;
