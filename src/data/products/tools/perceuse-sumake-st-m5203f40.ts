import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sumake-st-m5203f40",
	"slug": "perceuse-sumake-st-m5203f40",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake ST-M5203F40",
	"brand": "Sumake",
	"model": "ST-M5203F40",
	"mpn": "ST-M5203F40",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sumake-st-m5203f40.webp",
		"alt": "Repères techniques : Sumake ST-M5203F40",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-m5203f40",
		"label": "Référence ST-M5203F40",
		"distinguishingAttributes": {
			"reference": "ST-M5203F40",
			"Consommation dans les unités du tableau": "400 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-M5203F40",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-M5203F40. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Consommation dans les unités du tableau : 400 L/min ; 14 cfm. Configuration complète publiée : ST-M5203F40.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 16.",
			"Consommation dans les unités du tableau : 400 L/min ; 14 cfm.",
			"Configuration complète publiée : ST-M5203F40.",
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
			"value": "Page PDF 16",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p16"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "400 L/min ; 14 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p16"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-M5203F40",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p16"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p16"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-M5203F40 Non-Reversible 3/8\" 4,000 3/8\"- 24 200 7-7/8 1/4\" 3/8\" 400 14 1 2.20",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p16",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=16",
			"sourceLabel": "sumake-na-2024, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p16"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p16"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p16"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p16"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
