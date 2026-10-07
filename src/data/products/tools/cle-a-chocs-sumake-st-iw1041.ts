import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-iw1041",
	"slug": "cle-a-chocs-sumake-st-iw1041",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-IW1041",
	"brand": "Sumake",
	"model": "ST-IW1041",
	"mpn": "ST-IW1041",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-iw1041.webp",
		"alt": "Repères techniques : Sumake ST-IW1041",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-iw1041",
		"label": "Référence ST-IW1041",
		"distinguishingAttributes": {
			"reference": "ST-IW1041",
			"Consommation dans les unités du tableau": "430 L/min ; 15 cfm",
			"Configuration complète publiée": "ST-IW1041",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-IW1041. Consommation publiée, régime non précisé : 430 L/min à 6,2 bar. Consommation dans les unités du tableau : 430 L/min ; 15 cfm. Configuration complète publiée : ST-IW1041.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 5.",
			"Consommation dans les unités du tableau : 430 L/min ; 15 cfm.",
			"Configuration complète publiée : ST-IW1041.",
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
			"value": "Page PDF 5",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p5"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "430 L/min ; 15 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p5"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-IW1041",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p5"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p5"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-IW1041 1/2 M16 5/8 8,000 813 600 99 3-8/9 1/4\" 3/8\" 430 15 1.33 2.98 10Pcs/Ctn/15.9/1.02'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p5",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=5",
			"sourceLabel": "sumake-na-2024, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p5"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p5"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p5"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p5"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6,2 bar."
	]
};

export default product;
