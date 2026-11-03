import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sumake-st-7719",
	"slug": "ponceuse-orbitale-sumake-st-7719",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-orbitale",
	"label": "Sumake ST-7719",
	"brand": "Sumake",
	"model": "ST-7719",
	"mpn": "ST-7719",
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
		"src": "/images/products/ponceuse-orbitale-sumake-st-7719.webp",
		"alt": "Repères techniques : Sumake ST-7719",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7719",
		"label": "Référence ST-7719",
		"distinguishingAttributes": {
			"reference": "ST-7719",
			"Consommation dans les unités du tableau": "430 L/min ; 15 cfm",
			"Configuration complète publiée": "ST-7719",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7719. La ST-7719 est une ponceuse linéaire à deux pistons et patin 70 × 444 mm, pas la ST-7718 orbitale de patin 90 × 197 mm. La catégorie est corrigée en ponceuse vibrante ; la ligne ne documente aucun diamètre d’orbite et aucun n’est inventé.",
		"verifiedFacts": [
			"Mouvement : Straight line, linéaire à deux pistons.",
			"Patin : 70 × 444 mm.",
			"Cadence publiée : 2 500, libellé r.p.m. du tableau.",
			"Longueur du corps : 410 mm.",
			"Masse : 3,1 kg.",
			"Consommation documentaire : 430 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Mouvement",
			"value": "Straight line, linéaire à deux pistons",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Patin",
			"value": "70 × 444 mm",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "2 500, libellé r.p.m. du tableau",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur du corps",
			"value": "410 mm",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "3,1 kg",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "430 L/min, régime non précisé",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
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
			"id": "ponceuse-orbitale-sumake-st-7719-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=46",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-7719 est une ponceuse linéaire à deux pistons et patin 70 × 444 mm, pas la ST-7718 orbitale de patin 90 × 197 mm. La catégorie est corrigée en ponceuse vibrante ; la ligne ne documente aucun diamètre d’orbite et aucun n’est inventé."
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
		"categoryId": [
			"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
		],
		"editorial": [
			"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-sumake-st-7719-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6,2 bar."
	]
};

export default product;
