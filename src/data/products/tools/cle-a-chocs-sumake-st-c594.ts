import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-c594",
	"slug": "cle-a-chocs-sumake-st-c594",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-C594",
	"brand": "Sumake",
	"model": "ST-C594",
	"mpn": "ST-C594",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-c594.webp",
		"alt": "Repères techniques : Sumake ST-C594",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-c594",
		"label": "Référence ST-C594",
		"distinguishingAttributes": {
			"reference": "ST-C594",
			"Consommation dans les unités du tableau": "540 L/min ; 19 cfm",
			"Configuration complète publiée": "ST-C594",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-C594. Consommation publiée, régime non précisé : 540 L/min à 6,2 bar. Consommation dans les unités du tableau : 540 L/min ; 19 cfm. Configuration complète publiée : ST-C594.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 4.",
			"Consommation dans les unités du tableau : 540 L/min ; 19 cfm.",
			"Configuration complète publiée : ST-C594.",
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
			"value": "Page PDF 4",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p4"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "540 L/min ; 19 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p4"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-C594",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p4"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p4"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-C594 1 M30 1-3/16 5,500 2,034 1,500 220 8-2/3 3/8\" 1/2\" 540 19 3.7 8.1 6Pcs/Ctn/26.2/1.8'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p4",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=4",
			"sourceLabel": "sumake-na-2024, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p4"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p4"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p4"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p4"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 540 L/min à 6,2 bar."
	]
};

export default product;
