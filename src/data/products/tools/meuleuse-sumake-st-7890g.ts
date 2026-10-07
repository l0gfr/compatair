import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7890g",
	"slug": "meuleuse-sumake-st-7890g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7890G",
	"brand": "Sumake",
	"model": "ST-7890G",
	"mpn": "ST-7890G",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1130,
		"typical": 1130,
		"max": 1130
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-7890g.webp",
		"alt": "Repères techniques : Sumake ST-7890G",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7890g",
		"label": "Référence ST-7890G",
		"distinguishingAttributes": {
			"reference": "ST-7890G",
			"Consommation dans les unités du tableau": "1130 L/min ; 40 cfm",
			"Configuration complète publiée": "ST-7890G",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7890G. Consommation publiée, régime non précisé : 1 130 L/min à 6,2 bar. Consommation dans les unités du tableau : 1130 L/min ; 40 cfm. Configuration complète publiée : ST-7890G.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 38.",
			"Consommation dans les unités du tableau : 1130 L/min ; 40 cfm.",
			"Configuration complète publiée : ST-7890G.",
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
			"value": "1130 L/min ; 40 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p38"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7890G",
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
			"value": "ST-7890G 2.5 9 1/2”-16 5,900 308 12-1/8 1/2” 3/8” 1130 40 4.38 9.66 4Pcs/Ctn/22/1.4’",
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
		"Consommation publiée, régime non précisé : 1 130 L/min à 6,2 bar."
	]
};

export default product;
