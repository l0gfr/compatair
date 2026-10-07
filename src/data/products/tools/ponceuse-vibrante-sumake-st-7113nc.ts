import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-sumake-st-7113nc",
	"slug": "ponceuse-vibrante-sumake-st-7113nc",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Sumake ST-7113NC",
	"brand": "Sumake",
	"model": "ST-7113NC",
	"mpn": "ST-7113NC",
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
		"src": "/images/products/ponceuse-vibrante-sumake-st-7113nc.webp",
		"alt": "Repères techniques : Sumake ST-7113NC",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7113nc",
		"label": "Référence ST-7113NC",
		"distinguishingAttributes": {
			"reference": "ST-7113NC",
			"Consommation dans les unités du tableau": "430 L/min ; 15 cfm",
			"Configuration complète publiée": "ST-7113NC",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7113NC. Consommation publiée, régime non précisé : 430 L/min à 6,2 bar. Consommation dans les unités du tableau : 430 L/min ; 15 cfm. Configuration complète publiée : ST-7113NC.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 46.",
			"Consommation dans les unités du tableau : 430 L/min ; 15 cfm.",
			"Configuration complète publiée : ST-7113NC.",
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
			"value": "Page PDF 46",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p46"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "430 L/min ; 15 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p46"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7113NC",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p46"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p46"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-7113NC 100 X 180 4 X 7-1/10 3.2 8,500 190 7-1/2 1/4” 3/8” 430 15 1.2 2.6 6Pcs/Ctn/8/1.1’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p46"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p46",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=46",
			"sourceLabel": "sumake-na-2024, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p46"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p46"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p46"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p46"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6,2 bar."
	]
};

export default product;
