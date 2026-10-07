import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-sumake-st-24001",
	"slug": "marteau-a-river-sumake-st-24001",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Sumake ST-24001",
	"brand": "Sumake",
	"model": "ST-24001",
	"mpn": "ST-24001",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-sumake-st-24001.webp",
		"alt": "Repères techniques : Sumake ST-24001",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-24001",
		"label": "Référence ST-24001",
		"distinguishingAttributes": {
			"reference": "ST-24001",
			"Consommation dans les unités du tableau": "400 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-24001",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-24001. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Consommation dans les unités du tableau : 400 L/min ; 14 cfm. Configuration complète publiée : ST-24001.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 57.",
			"Consommation dans les unités du tableau : 400 L/min ; 14 cfm.",
			"Configuration complète publiée : ST-24001.",
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
			"value": "Page PDF 57",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "400 L/min ; 14 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-24001",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-24001 0.401 15.24 3/5 40 1-4/7 3,690 - - 180 7-1/10 1/4 3/8 400 14 1.1 2.4",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p57",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=57",
			"sourceLabel": "sumake-na-2024, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p57"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p57"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p57"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
