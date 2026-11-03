import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-sumake-st-ah603h-q",
	"slug": "burineur-sumake-st-ah603h-q",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Sumake ST-AH603H-Q",
	"brand": "Sumake",
	"model": "ST-AH603H-Q",
	"mpn": "ST-AH603H-Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-sumake-st-ah603h-q.webp",
		"alt": "Repères techniques : Sumake ST-AH603H-Q",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-ah603h-q",
		"label": "Référence ST-AH603H-Q",
		"distinguishingAttributes": {
			"reference": "ST-AH603H-Q",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-AH603H-Q",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-AH603H-Q. La ST-AH603H-Q accepte un burin hexagonal 10 mm ; la 603R-Q est ronde 0,41 pouce. La 605H-Q conserve l’hexagonal 10 mm mais passe à 89 mm de course et 2 500 coups/min, contre 58 mm et 3 500 ici. Le choix du burin et de la course précède le choix du compresseur.",
		"verifiedFacts": [
			"Emmanchement : Hexagonal 10 mm.",
			"Cadence : 3 500 coups/min.",
			"Course piston : 58 mm.",
			"Longueur : 242 mm.",
			"Masse : 2,2 kg.",
			"Consommation documentaire : 480 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement",
			"value": "Hexagonal 10 mm",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 500 coups/min",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Course piston",
			"value": "58 mm",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "242 mm",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,2 kg",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "480 L/min, régime non précisé",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"burineur-sumake-st-ah603h-q-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p53",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=53",
			"sourceLabel": "sumake-na-2024, page PDF 53",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "burineur-sumake-st-ah603h-q-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=53",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-AH603H-Q accepte un burin hexagonal 10 mm ; la 603R-Q est ronde 0,41 pouce. La 605H-Q conserve l’hexagonal 10 mm mais passe à 89 mm de course et 2 500 coups/min, contre 58 mm et 3 500 ici. Le choix du burin et de la course précède le choix du compresseur."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p53"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p53"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p53"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p53"
		],
		"editorial": [
			"burineur-sumake-st-ah603h-q-reserved-20261103-1"
		],
		"specifications": [
			"burineur-sumake-st-ah603h-q-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
