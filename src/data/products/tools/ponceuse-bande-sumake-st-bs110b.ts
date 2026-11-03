import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-sumake-st-bs110b",
	"slug": "ponceuse-bande-sumake-st-bs110b",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Sumake ST-BS110B",
	"brand": "Sumake",
	"model": "ST-BS110B",
	"mpn": "ST-BS110B",
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
		"src": "/images/products/ponceuse-bande-sumake-st-bs110b.webp",
		"alt": "Repères techniques : Sumake ST-BS110B",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-bs110b",
		"label": "Référence ST-BS110B",
		"distinguishingAttributes": {
			"reference": "ST-BS110B",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-BS110B",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-BS110B. La ST-BS110B utilise une bande 10 × 330 mm. La ST-BS110A utilise 6 × 330 mm, la 110C utilise 13 × 610 mm avec un corps de 455 mm et une masse 0,97 kg. Les bandes ne sont pas interchangeables malgré la même consommation publiée 480 L/min.",
		"verifiedFacts": [
			"Bande : 10 × 330 mm.",
			"Vitesse à vide : 17 000 tr/min.",
			"Longueur : 320 mm.",
			"Masse : 0,8 kg.",
			"Équipement annoncé : 3 bandes grains 80/100/120.",
			"Consommation documentaire : 480 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "10 × 330 mm",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "17 000 tr/min",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "320 mm",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Équipement annoncé",
			"value": "3 bandes grains 80/100/120",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "480 L/min, régime non précisé",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p49",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=49",
			"sourceLabel": "sumake-na-2024, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "ponceuse-bande-sumake-st-bs110b-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=49",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-BS110B utilise une bande 10 × 330 mm. La ST-BS110A utilise 6 × 330 mm, la 110C utilise 13 × 610 mm avec un corps de 455 mm et une masse 0,97 kg. Les bandes ne sont pas interchangeables malgré la même consommation publiée 480 L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p49"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p49"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p49"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p49"
		],
		"editorial": [
			"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-sumake-st-bs110b-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
