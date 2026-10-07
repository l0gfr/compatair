import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-5598-6",
	"slug": "cle-a-chocs-sumake-st-5598-6",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-5598-6",
	"brand": "Sumake",
	"model": "ST-5598-6",
	"mpn": "ST-5598-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 708,
		"typical": 708,
		"max": 708
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-5598-6.webp",
		"alt": "Repères techniques : Sumake ST-5598-6",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-5598-6",
		"label": "Référence ST-5598-6",
		"distinguishingAttributes": {
			"reference": "ST-5598-6",
			"Consommation dans les unités du tableau": "708 L/min ; 25 cfm",
			"Configuration complète publiée": "ST-5598-6",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-5598-6. Consommation publiée, régime non précisé : 708 L/min à 6,2 bar. Consommation dans les unités du tableau : 708 L/min ; 25 cfm. Configuration complète publiée : ST-5598-6.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 7.",
			"Consommation dans les unités du tableau : 708 L/min ; 25 cfm.",
			"Configuration complète publiée : ST-5598-6.",
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
			"value": "Page PDF 7",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p7"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "708 L/min ; 25 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p7"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-5598-6",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p7"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p7"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-5598-6 1 M45 1-3/4 3,000 4,342 3,200 520 20-1/2 1/2” 1/2” 708 25 17.3 38.06 1Pcs/Ctn/21/0.8’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p7",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=7",
			"sourceLabel": "sumake-na-2024, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p7"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p7"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p7"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p7"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 708 L/min à 6,2 bar."
	]
};

export default product;
