import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7741",
	"slug": "meuleuse-sumake-st-7741",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7741",
	"brand": "Sumake",
	"model": "ST-7741",
	"mpn": "ST-7741",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 820,
		"typical": 820,
		"max": 820
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-7741.webp",
		"alt": "Repères techniques : Sumake ST-7741",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7741",
		"label": "Référence ST-7741",
		"distinguishingAttributes": {
			"reference": "ST-7741",
			"Consommation dans les unités du tableau": "820 L/min ; 29 cfm",
			"Configuration complète publiée": "ST-7741",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7741. Consommation publiée, régime non précisé : 820 L/min à 6,2 bar. Consommation dans les unités du tableau : 820 L/min ; 29 cfm. Configuration complète publiée : ST-7741.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 42.",
			"Consommation dans les unités du tableau : 820 L/min ; 29 cfm.",
			"Configuration complète publiée : ST-7741.",
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
			"value": "Page PDF 42",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "820 L/min ; 29 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7741",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-7741 7,000 7 343 13-1/2 3/8” 1/2” 820 29 3.2 7.0 6pcs/Ctn/24.3/2.53'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p42",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=42",
			"sourceLabel": "sumake-na-2024, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p42"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p42"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p42"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p42"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 820 L/min à 6,2 bar."
	]
};

export default product;
