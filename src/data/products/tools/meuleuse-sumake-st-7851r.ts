import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7851r",
	"slug": "meuleuse-sumake-st-7851r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7851R",
	"brand": "Sumake",
	"model": "ST-7851R",
	"mpn": "ST-7851R",
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
		"src": "/images/products/meuleuse-sumake-st-7851r.webp",
		"alt": "Repères techniques : Sumake ST-7851R",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7851r",
		"label": "Référence ST-7851R",
		"distinguishingAttributes": {
			"reference": "ST-7851R",
			"Consommation dans les unités du tableau": "540 L/min ; 19 cfm",
			"Configuration complète publiée": "ST-7851R",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7851R. Consommation publiée, régime non précisé : 540 L/min à 6,2 bar. Consommation dans les unités du tableau : 540 L/min ; 19 cfm. Configuration complète publiée : ST-7851R.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 42.",
			"Consommation dans les unités du tableau : 540 L/min ; 19 cfm.",
			"Configuration complète publiée : ST-7851R.",
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
			"value": "540 L/min ; 19 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p42"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7851R",
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
			"value": "ST-7851R 11,000 4 232 9-1/7 1/4” 3/8” 540 19 1.8 4.0 6pcs/Ctn/13/1.8'",
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
		"Consommation publiée, régime non précisé : 540 L/min à 6,2 bar."
	]
};

export default product;
