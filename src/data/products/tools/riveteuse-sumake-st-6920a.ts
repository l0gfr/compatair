import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-6920a",
	"slug": "riveteuse-sumake-st-6920a",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-6920A",
	"brand": "Sumake",
	"model": "ST-6920A",
	"mpn": "ST-6920A",
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
		"src": "/images/products/riveteuse-sumake-st-6920a.webp",
		"alt": "Repères techniques : Sumake ST-6920A",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-6920a",
		"label": "Référence ST-6920A",
		"distinguishingAttributes": {
			"reference": "ST-6920A",
			"Consommation dans les unités du tableau": "450 L/min ; 16 cfm",
			"Configuration complète publiée": "ST-6920A",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-6920A. Consommation publiée, régime non précisé : 450 L/min à 6,2 bar. Consommation dans les unités du tableau : 450 L/min ; 16 cfm. Configuration complète publiée : ST-6920A.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 62.",
			"Consommation dans les unités du tableau : 450 L/min ; 16 cfm.",
			"Configuration complète publiée : ST-6920A.",
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
			"value": "ST-6920A",
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
			"value": "ST-6920A ■: 1/4\"-20,5/16\"-18,1/2\"-13, #8-32,#10-24,#10-32,3/8”-16 7 0.28 3,100 6,800 450 16 3 6.6 4Pcs/Ctn/22/3.5'",
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
