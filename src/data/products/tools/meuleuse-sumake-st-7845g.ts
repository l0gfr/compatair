import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7845g",
	"slug": "meuleuse-sumake-st-7845g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7845G",
	"brand": "Sumake",
	"model": "ST-7845G",
	"mpn": "ST-7845G",
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
		"src": "/images/products/meuleuse-sumake-st-7845g.webp",
		"alt": "Repères techniques : Sumake ST-7845G",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7845g",
		"label": "Référence ST-7845G",
		"distinguishingAttributes": {
			"reference": "ST-7845G",
			"Consommation dans les unités du tableau": "540 L/min ; 19 cfm",
			"Configuration complète publiée": "ST-7845G",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7845G. Consommation publiée, régime non précisé : 540 L/min à 6,2 bar. Consommation dans les unités du tableau : 540 L/min ; 19 cfm. Configuration complète publiée : ST-7845G.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 38.",
			"Consommation dans les unités du tableau : 540 L/min ; 19 cfm.",
			"Configuration complète publiée : ST-7845G.",
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
			"value": "Page PDF 38",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "540 L/min ; 19 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7845G",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-7845G 1 5 M14 x 2.0 13,500 218 8-4/7 3/8” 3/8” 540 19 1.74 3.83 10Pcs/Ctn/19/1.3’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p38",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=38",
			"sourceLabel": "sumake-na-2024, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p38"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p38"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p38"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p38"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 540 L/min à 6,2 bar."
	]
};

export default product;
