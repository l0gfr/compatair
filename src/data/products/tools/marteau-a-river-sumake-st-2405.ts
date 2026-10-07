import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-sumake-st-2405",
	"slug": "marteau-a-river-sumake-st-2405",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Sumake ST-2405",
	"brand": "Sumake",
	"model": "ST-2405",
	"mpn": "ST-2405",
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
		"src": "/images/products/marteau-a-river-sumake-st-2405.webp",
		"alt": "Repères techniques : Sumake ST-2405",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-2405",
		"label": "Référence ST-2405",
		"distinguishingAttributes": {
			"reference": "ST-2405",
			"Consommation dans les unités du tableau": "400 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-2405",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-2405. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Consommation dans les unités du tableau : 400 L/min ; 14 cfm. Configuration complète publiée : ST-2405.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 57.",
			"Consommation dans les unités du tableau : 400 L/min ; 14 cfm.",
			"Configuration complète publiée : ST-2405.",
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
			"value": "Page PDF 57",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "400 L/min ; 14 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-2405",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-2405 0.498 19 3/4 68.3 2-11/16 1,600 3/16 1/4 230 9-3/32 1/4 3/8 400 14 2.2 4.9",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p57",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=57",
			"sourceLabel": "sumake-na-2024, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p57"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p57"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
