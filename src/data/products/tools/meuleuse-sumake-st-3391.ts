import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-3391",
	"slug": "meuleuse-sumake-st-3391",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-3391",
	"brand": "Sumake",
	"model": "ST-3391",
	"mpn": "ST-3391",
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
		"src": "/images/products/meuleuse-sumake-st-3391.webp",
		"alt": "Repères techniques : Sumake ST-3391",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-3391",
		"label": "Référence ST-3391",
		"distinguishingAttributes": {
			"reference": "ST-3391",
			"Consommation dans les unités du tableau": "170 L/min ; 6 cfm",
			"Configuration complète publiée": "ST-3391",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-3391. La ST-3391 possède une tête 90 degrés ; la ST-3392 est à 120 degrés. Elles publient 30 mm, 21 000 tr/min et 160 mm, mais des masses respectives 0,2 et 0,13 kg. L’angle de tête est un critère d’accès, distinct de la consommation commune de gamme.",
		"verifiedFacts": [
			"Tête : 90 degrés.",
			"Capacité publiée : 30 mm.",
			"Vitesse à vide : 21 000 tr/min.",
			"Longueur : 160 mm.",
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
			"label": "Tête",
			"value": "90 degrés",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité publiée",
			"value": "30 mm",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "21 000 tr/min",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "160 mm",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,2 kg",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "170 L/min, régime non précisé",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"meuleuse-sumake-st-3391-reserved-20261103-1"
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
			"id": "meuleuse-sumake-st-3391-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=35",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-3391 possède une tête 90 degrés ; la ST-3392 est à 120 degrés. Elles publient 30 mm, 21 000 tr/min et 160 mm, mais des masses respectives 0,2 et 0,13 kg. L’angle de tête est un critère d’accès, distinct de la consommation commune de gamme."
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
			"meuleuse-sumake-st-3391-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-sumake-st-3391-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 170 L/min à 6,2 bar."
	]
};

export default product;
