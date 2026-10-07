import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-mg1b1n",
	"slug": "meuleuse-sumake-st-mg1b1n",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-MG1B1N",
	"brand": "Sumake",
	"model": "ST-MG1B1N",
	"mpn": "ST-MG1B1N",
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
		"src": "/images/products/meuleuse-sumake-st-mg1b1n.webp",
		"alt": "Repères techniques : Sumake ST-MG1B1N",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-mg1b1n",
		"label": "Référence ST-MG1B1N",
		"distinguishingAttributes": {
			"reference": "ST-MG1B1N",
			"Consommation dans les unités du tableau": "170 L/min ; 6 cfm",
			"Configuration complète publiée": "ST-MG1B1N",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-MG1B1N. Consommation publiée, régime non précisé : 170 L/min à 6,2 bar. Consommation dans les unités du tableau : 170 L/min ; 6 cfm. Configuration complète publiée : ST-MG1B1N.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 36.",
			"Consommation dans les unités du tableau : 170 L/min ; 6 cfm.",
			"Configuration complète publiée : ST-MG1B1N.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé."
		],
		"limitations": [
			"Le régime de consommation n’est pas indiqué. Aucun débit maximal ou en charge n’est inventé ; le verdict reste insufficient_data.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 36",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p36"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "170 L/min ; 6 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p36"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-MG1B1N",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p36"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p36"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-MG1B1N 30 1-1/6 23,500 140 5-1/2 1/4\" 3/16\" 170 6 0.15 0.33 32Pcs/Ctn/13.2/1.58’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p36",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=36",
			"sourceLabel": "sumake-na-2024, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p36"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p36"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p36"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p36"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 170 L/min à 6,2 bar."
	]
};

export default product;
