import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sumake-st-m5010",
	"slug": "perceuse-sumake-st-m5010",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake ST-M5010",
	"brand": "Sumake",
	"model": "ST-M5010",
	"mpn": "ST-M5010",
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
		"src": "/images/products/perceuse-sumake-st-m5010.webp",
		"alt": "Repères techniques : Sumake ST-M5010",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-m5010",
		"label": "Référence ST-M5010",
		"distinguishingAttributes": {
			"reference": "ST-M5010",
			"Consommation dans les unités du tableau": "340 L/min ; 12 cfm",
			"Configuration complète publiée": "ST-M5010",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-M5010. Consommation publiée, régime non précisé : 340 L/min à 6,2 bar. Consommation dans les unités du tableau : 340 L/min ; 12 cfm. Configuration complète publiée : ST-M5010.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 17.",
			"Consommation dans les unités du tableau : 340 L/min ; 12 cfm.",
			"Configuration complète publiée : ST-M5010.",
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
			"value": "Page PDF 17",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "340 L/min ; 12 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-M5010",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-M5010 10 3/8 2,000 185 7-1/4 1/4” 3/8” 340 12 1.15 2.5 10Pcs/Ctn/14.5/1.2'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
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
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 340 L/min à 6,2 bar."
	]
};

export default product;
