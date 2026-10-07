import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-gd512l7",
	"slug": "meuleuse-sumake-st-gd512l7",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-GD512L7",
	"brand": "Sumake",
	"model": "ST-GD512L7",
	"mpn": "ST-GD512L7",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-gd512l7.webp",
		"alt": "Repères techniques : Sumake ST-GD512L7",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-gd512l7",
		"label": "Référence ST-GD512L7",
		"distinguishingAttributes": {
			"reference": "ST-GD512L7",
			"Consommation dans les unités du tableau": "370 L/min ; 13 cfm",
			"Configuration complète publiée": "ST-GD512L7",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-GD512L7. Consommation publiée, régime non précisé : 370 L/min à 6,2 bar. Consommation dans les unités du tableau : 370 L/min ; 13 cfm. Configuration complète publiée : ST-GD512L7.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 40.",
			"Consommation dans les unités du tableau : 370 L/min ; 13 cfm.",
			"Configuration complète publiée : ST-GD512L7.",
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
			"value": "Page PDF 40",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p40"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "370 L/min ; 13 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p40"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-GD512L7",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p40"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p40"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-GD512L7 0.3 50 2 1/4\"-28 15,000 1/4\" 3/8\" 370 13 177 7 0.68 1.50",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p40",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=40",
			"sourceLabel": "sumake-na-2024, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p40"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p40"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p40"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p40"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 370 L/min à 6,2 bar."
	]
};

export default product;
