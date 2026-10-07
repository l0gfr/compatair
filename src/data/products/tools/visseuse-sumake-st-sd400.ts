import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-st-sd400",
	"slug": "visseuse-sumake-st-sd400",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake ST-SD400",
	"brand": "Sumake",
	"model": "ST-SD400",
	"mpn": "ST-SD400",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-st-sd400.webp",
		"alt": "Repères techniques : Sumake ST-SD400",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-sd400",
		"label": "Référence ST-SD400",
		"distinguishingAttributes": {
			"reference": "ST-SD400",
			"Consommation dans les unités du tableau": "270 L/min ; 9.5 cfm",
			"Configuration complète publiée": "ST-SD400",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-SD400. Consommation publiée, régime non précisé : 270 L/min à 6,2 bar. Consommation dans les unités du tableau : 270 L/min ; 9.5 cfm. Configuration complète publiée : ST-SD400.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 12.",
			"Consommation dans les unités du tableau : 270 L/min ; 9.5 cfm.",
			"Configuration complète publiée : ST-SD400.",
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
			"value": "Page PDF 12",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "270 L/min ; 9.5 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-SD400",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-SD400 6.35 1/4 13,000 60 44.5 187 7-1/3 1/4” 3/8” 270 9.5 1 2.2 10/Ctn/13.78/1.1’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p12",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=12",
			"sourceLabel": "sumake-na-2024, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p12"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p12"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 270 L/min à 6,2 bar."
	]
};

export default product;
