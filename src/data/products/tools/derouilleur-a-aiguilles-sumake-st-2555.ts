import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-sumake-st-2555",
	"slug": "derouilleur-a-aiguilles-sumake-st-2555",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Sumake ST-2555",
	"brand": "Sumake",
	"model": "ST-2555",
	"mpn": "ST-2555",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 283,
		"typical": 283,
		"max": 283
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-sumake-st-2555.webp",
		"alt": "Repères techniques : Sumake ST-2555",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-2555",
		"label": "Référence ST-2555",
		"distinguishingAttributes": {
			"reference": "ST-2555",
			"Consommation dans les unités du tableau": "283 L/min ; 10 cfm",
			"Configuration complète publiée": "ST-2555",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-2555. La ST-2555 à poignée pistolet annonce 19 aiguilles de 3 × 180 mm et 3 800 coups/min. La ST-2558 utilise 12 aiguilles de 3 × 125 mm et 5 000 coups/min pour 1,3 kg, contre 2,7 kg ici. Le nombre, le diamètre et la longueur des aiguilles conditionnent les consommables.",
		"verifiedFacts": [
			"Aiguilles standard : 19 pièces, diamètre 3 mm, longueur 180 mm.",
			"Cadence : 3 800 coups/min.",
			"Course : 33 mm.",
			"Longueur : 330 mm.",
			"Masse : 2,7 kg.",
			"Consommation documentaire : 283 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles standard",
			"value": "19 pièces, diamètre 3 mm, longueur 180 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 800 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "33 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "330 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,7 kg",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "283 L/min, régime non précisé",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p55",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=55",
			"sourceLabel": "sumake-na-2024, page PDF 55",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=55",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-2555 à poignée pistolet annonce 19 aiguilles de 3 × 180 mm et 3 800 coups/min. La ST-2558 utilise 12 aiguilles de 3 × 125 mm et 5 000 coups/min pour 1,3 kg, contre 2,7 kg ici. Le nombre, le diamètre et la longueur des aiguilles conditionnent les consommables."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p55"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p55"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p55"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p55"
		],
		"editorial": [
			"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-sumake-st-2555-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 283 L/min à 6,2 bar."
	]
};

export default product;
