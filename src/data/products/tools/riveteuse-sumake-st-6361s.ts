import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-6361s",
	"slug": "riveteuse-sumake-st-6361s",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-6361S",
	"brand": "Sumake",
	"model": "ST-6361S",
	"mpn": "ST-6361S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sumake-st-6361s.webp",
		"alt": "Repères techniques : Sumake ST-6361S",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-6361s",
		"label": "Référence ST-6361S",
		"distinguishingAttributes": {
			"reference": "ST-6361S",
			"Consommation dans les unités du tableau": "450 L/min ; 16 cfm",
			"Configuration complète publiée": "ST-6361S",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-6361S. Consommation publiée, régime non précisé : 450 L/min à 6,2 bar. Consommation dans les unités du tableau : 450 L/min ; 16 cfm. Configuration complète publiée : ST-6361S.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 62.",
			"Consommation dans les unités du tableau : 450 L/min ; 16 cfm.",
			"Configuration complète publiée : ST-6361S.",
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
			"value": "Page PDF 62",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "450 L/min ; 16 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-6361S",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-6361S ■: #8-32, #10-24, #10-32, 1/4\"-20, 5/16\"-18, 3/8\"-16, 1/2\"-13 7 0.28 2,724 6,000 450 16 2.1 4.6 5Pcs/Ctn/20.5/2.8'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p62",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=62",
			"sourceLabel": "sumake-na-2024, page PDF 62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p62"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p62"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p62"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p62"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 450 L/min à 6,2 bar."
	]
};

export default product;
