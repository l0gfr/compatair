import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sumake-st-c110c",
	"slug": "perceuse-sumake-st-c110c",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake ST-C110C",
	"brand": "Sumake",
	"model": "ST-C110C",
	"mpn": "ST-C110C",
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
		"src": "/images/products/perceuse-sumake-st-c110c.webp",
		"alt": "Repères techniques : Sumake ST-C110C",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-c110c",
		"label": "Référence ST-C110C",
		"distinguishingAttributes": {
			"reference": "ST-C110C",
			"Consommation dans les unités du tableau": "340 L/min ; 12 cfm",
			"Configuration complète publiée": "ST-C110C",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-C110C. La ST-C110C ajoute le mandrin sans clé à la ST-C110. La ST-C111C donne 2 100 tr/min avec la même capacité 10 mm ; la ST-C112C passe à 13 mm et 800 tr/min. La capacité du mandrin et la vitesse doivent être choisies séparément.",
		"verifiedFacts": [
			"Mandrin : Sans clé, capacité 10 mm.",
			"Vitesse à vide : 2 000 tr/min.",
			"Longueur : 210 mm.",
			"Masse : 1,15 kg.",
			"Consommation documentaire : 340 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "Sans clé, capacité 10 mm",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 000 tr/min",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,15 kg",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "340 L/min, régime non précisé",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"perceuse-sumake-st-c110c-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p20",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=20",
			"sourceLabel": "sumake-na-2024, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "perceuse-sumake-st-c110c-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=20",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-C110C ajoute le mandrin sans clé à la ST-C110. La ST-C111C donne 2 100 tr/min avec la même capacité 10 mm ; la ST-C112C passe à 13 mm et 800 tr/min. La capacité du mandrin et la vitesse doivent être choisies séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p20"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p20"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p20"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p20"
		],
		"editorial": [
			"perceuse-sumake-st-c110c-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-sumake-st-c110c-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 340 L/min à 6,2 bar."
	]
};

export default product;
