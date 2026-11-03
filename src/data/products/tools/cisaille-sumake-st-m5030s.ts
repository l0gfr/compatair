import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-sumake-st-m5030s",
	"slug": "cisaille-sumake-st-m5030s",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sumake ST-M5030S",
	"brand": "Sumake",
	"model": "ST-M5030S",
	"mpn": "ST-M5030S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-sumake-st-m5030s.webp",
		"alt": "Repères techniques : Sumake ST-M5030S",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-m5030s",
		"label": "Référence ST-M5030S",
		"distinguishingAttributes": {
			"reference": "ST-M5030S",
			"Consommation dans les unités du tableau": "340 L/min ; 12 cfm",
			"Configuration complète publiée": "ST-M5030S",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-M5030S. La ST-M5030S est donnée pour acier 1,2 mm et aluminium 2,4 mm. La ST-M5030B donne acier 1,6 mm, aluminium 2,0 mm et inox 0,8 mm ; la ligne S ne documente pas l’inox. Les capacités matière sont distinctes malgré la même consommation publiée.",
		"verifiedFacts": [
			"Capacité acier : 1,2 mm.",
			"Capacité aluminium : 2,4 mm.",
			"Cadence publiée : 2 500 tr/min, libellé du tableau.",
			"Masse : 1,28 kg.",
			"Consommation documentaire : 340 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Capacité acier",
			"value": "1,2 mm",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité aluminium",
			"value": "2,4 mm",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "2 500 tr/min, libellé du tableau",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,28 kg",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "340 L/min, régime non précisé",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"cisaille-sumake-st-m5030s-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p17",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=17",
			"sourceLabel": "sumake-na-2024, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "cisaille-sumake-st-m5030s-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=17",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-M5030S est donnée pour acier 1,2 mm et aluminium 2,4 mm. La ST-M5030B donne acier 1,6 mm, aluminium 2,0 mm et inox 0,8 mm ; la ligne S ne documente pas l’inox. Les capacités matière sont distinctes malgré la même consommation publiée."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p17"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p17"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p17"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p17"
		],
		"editorial": [
			"cisaille-sumake-st-m5030s-reserved-20261103-1"
		],
		"specifications": [
			"cisaille-sumake-st-m5030s-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 340 L/min à 6,2 bar."
	]
};

export default product;
