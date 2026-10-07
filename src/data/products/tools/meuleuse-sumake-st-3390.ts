import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-3390",
	"slug": "meuleuse-sumake-st-3390",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-3390",
	"brand": "Sumake",
	"model": "ST-3390",
	"mpn": "ST-3390",
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
		"src": "/images/products/meuleuse-sumake-st-3390.webp",
		"alt": "Repères techniques : Sumake ST-3390",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-3390",
		"label": "Référence ST-3390",
		"distinguishingAttributes": {
			"reference": "ST-3390",
			"Consommation dans les unités du tableau": "170 L/min ; 6 cfm",
			"Configuration complète publiée": "ST-3390",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-3390. Consommation publiée, régime non précisé : 170 L/min à 6,2 bar. Consommation dans les unités du tableau : 170 L/min ; 6 cfm. Configuration complète publiée : ST-3390.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 35.",
			"Consommation dans les unités du tableau : 170 L/min ; 6 cfm.",
			"Configuration complète publiée : ST-3390.",
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
			"value": "Page PDF 35",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p35"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "170 L/min ; 6 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p35"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-3390",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p35"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p35"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-3390 1-3/16 (30mm) 22,000 136 5-1/3 1/4\" 3/8\" 170 6 0.3 0.6 20Pcs/Ctn/10/2’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p35",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=35",
			"sourceLabel": "sumake-na-2024, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p35"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p35"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p35"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p35"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 170 L/min à 6,2 bar."
	]
};

export default product;
