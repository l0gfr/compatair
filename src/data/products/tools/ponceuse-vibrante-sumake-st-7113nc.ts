import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-sumake-st-7113nc",
	"slug": "ponceuse-vibrante-sumake-st-7113nc",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Sumake ST-7113NC",
	"brand": "Sumake",
	"model": "ST-7113NC",
	"mpn": "ST-7113NC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-sumake-st-7113nc.webp",
		"alt": "Repères techniques : Sumake ST-7113NC",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7113nc",
		"label": "Référence ST-7113NC",
		"distinguishingAttributes": {
			"reference": "ST-7113NC",
			"Consommation dans les unités du tableau": "430 L/min ; 15 cfm",
			"Configuration complète publiée": "ST-7113NC",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7113NC. La ST-7113NC est sans aspiration ; la ST-7113DC est prévue pour aspiration centrale et mesure 220 mm contre 190 mm. La ST-7111NC a un patin 75 × 100 mm, 10 000 tr/min et 0,7 kg. Le suffixe d’aspiration et le format du patin sont des choix séparés.",
		"verifiedFacts": [
			"Aspiration : Sans aspiration, NC.",
			"Patin : 100 × 180 mm.",
			"Orbite : 3,2 mm.",
			"Vitesse à vide : 8 500 tr/min.",
			"Longueur : 190 mm.",
			"Masse : 1,2 kg.",
			"Consommation documentaire : 430 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Aspiration",
			"value": "Sans aspiration, NC",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Patin",
			"value": "100 × 180 mm",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "3,2 mm",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "190 mm",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "430 L/min, régime non précisé",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p46",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=46",
			"sourceLabel": "sumake-na-2024, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=46",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-7113NC est sans aspiration ; la ST-7113DC est prévue pour aspiration centrale et mesure 220 mm contre 190 mm. La ST-7111NC a un patin 75 × 100 mm, 10 000 tr/min et 0,7 kg. Le suffixe d’aspiration et le format du patin sont des choix séparés."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p46"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p46"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p46"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p46"
		],
		"editorial": [
			"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-vibrante-sumake-st-7113nc-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6,2 bar."
	]
};

export default product;
