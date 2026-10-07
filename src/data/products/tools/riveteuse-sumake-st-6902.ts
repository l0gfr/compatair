import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-6902",
	"slug": "riveteuse-sumake-st-6902",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-6902",
	"brand": "Sumake",
	"model": "ST-6902",
	"mpn": "ST-6902",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sumake-st-6902.webp",
		"alt": "Repères techniques : Sumake ST-6902",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-6902",
		"label": "Référence ST-6902",
		"distinguishingAttributes": {
			"reference": "ST-6902",
			"Consommation dans les unités du tableau": "230 L/min ; 8 cfm",
			"Configuration complète publiée": "ST-6902",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-6902. Consommation publiée, régime non précisé : 230 L/min à 6,2 bar. Consommation dans les unités du tableau : 230 L/min ; 8 cfm. Configuration complète publiée : ST-6902.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 64.",
			"Consommation dans les unités du tableau : 230 L/min ; 8 cfm.",
			"Configuration complète publiée : ST-6902.",
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
			"value": "Page PDF 64",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p64"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "230 L/min ; 8 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p64"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-6902",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p64"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p64"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-6902 M5, M6, M8, M10, 1/4\", 5/16\", 3/8\", 1/4\",5/16\",M6,M8 450 230 8 210 8-1/4 1/4\" 1.8 3.97 5Pcs/Ctn/17/1.0'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p64"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p64",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=64",
			"sourceLabel": "sumake-na-2024, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p64"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p64"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p64"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p64"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 230 L/min à 6,2 bar."
	]
};

export default product;
