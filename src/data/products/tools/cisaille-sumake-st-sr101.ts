import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-sumake-st-sr101",
	"slug": "cisaille-sumake-st-sr101",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sumake ST-SR101",
	"brand": "Sumake",
	"model": "ST-SR101",
	"mpn": "ST-SR101",
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
		"src": "/images/products/cisaille-sumake-st-sr101.webp",
		"alt": "Repères techniques : Sumake ST-SR101",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-sr101",
		"label": "Référence ST-SR101",
		"distinguishingAttributes": {
			"reference": "ST-SR101",
			"Consommation dans les unités du tableau": "370 L/min ; 13 cfm",
			"Configuration complète publiée": "ST-SR101",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-SR101. Consommation publiée, régime non précisé : 370 L/min à 6,2 bar. Consommation dans les unités du tableau : 370 L/min ; 13 cfm. Configuration complète publiée : ST-SR101.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 23.",
			"Consommation dans les unités du tableau : 370 L/min ; 13 cfm.",
			"Configuration complète publiée : ST-SR101.",
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
			"value": "Page PDF 23",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "370 L/min ; 13 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-SR101",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-SR101 1.2 2.4 2,500 - 250 9-3/4 1/4” 3/8” 370 13 1.21 2.7 10Pcs/Ctn/13.9/0.8'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p23",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=23",
			"sourceLabel": "sumake-na-2024, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p23"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p23"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p23"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p23"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 370 L/min à 6,2 bar."
	]
};

export default product;
