import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sumake-st-66007",
	"slug": "scie-sumake-st-66007",
	"categoryId": "scie",
	"category": "scie",
	"label": "Sumake ST-66007",
	"brand": "Sumake",
	"model": "ST-66007",
	"mpn": "ST-66007",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sumake-st-66007.webp",
		"alt": "Repères techniques : Sumake ST-66007",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-66007",
		"label": "Référence ST-66007",
		"distinguishingAttributes": {
			"reference": "ST-66007",
			"Consommation dans les unités du tableau": "240 L/min ; 8.5 cfm",
			"Configuration complète publiée": "ST-66007",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-66007. La ST-66007 mini possède course 8 mm, cadence 11 000 coups/min et longueur 185 mm. La ST-66008 pour tubes passe à 20 mm, 5 500 coups/min et 220 mm. Le tableau ne permet pas de déduire une même capacité de coupe à partir des 240 L/min communs.",
		"verifiedFacts": [
			"Type : Mini scie de carrosserie.",
			"Course : 8 mm.",
			"Cadence : 11 000 coups/min.",
			"Longueur : 185 mm.",
			"Masse : 0,50 kg.",
			"Consommation documentaire : 240 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Mini scie de carrosserie",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "8 mm",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "11 000 coups/min",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,50 kg",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "240 L/min, régime non précisé",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"scie-sumake-st-66007-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p21",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=21",
			"sourceLabel": "sumake-na-2024, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "scie-sumake-st-66007-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=21",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-66007 mini possède course 8 mm, cadence 11 000 coups/min et longueur 185 mm. La ST-66008 pour tubes passe à 20 mm, 5 500 coups/min et 220 mm. Le tableau ne permet pas de déduire une même capacité de coupe à partir des 240 L/min communs."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p21"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p21"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p21"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p21"
		],
		"editorial": [
			"scie-sumake-st-66007-reserved-20261103-1"
		],
		"specifications": [
			"scie-sumake-st-66007-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 240 L/min à 6,2 bar."
	]
};

export default product;
