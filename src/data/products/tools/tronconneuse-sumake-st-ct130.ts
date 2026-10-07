import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-sumake-st-ct130",
	"slug": "tronconneuse-sumake-st-ct130",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Sumake ST-CT130",
	"brand": "Sumake",
	"model": "ST-CT130",
	"mpn": "ST-CT130",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-sumake-st-ct130.webp",
		"alt": "Repères techniques : Sumake ST-CT130",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-ct130",
		"label": "Référence ST-CT130",
		"distinguishingAttributes": {
			"reference": "ST-CT130",
			"Consommation dans les unités du tableau": "370 L/min ; 13 cfm",
			"Configuration complète publiée": "ST-CT130",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-CT130. Consommation publiée, régime non précisé : 370 L/min à 6,2 bar. Consommation dans les unités du tableau : 370 L/min ; 13 cfm. Configuration complète publiée : ST-CT130.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 33.",
			"Consommation dans les unités du tableau : 370 L/min ; 13 cfm.",
			"Configuration complète publiée : ST-CT130.",
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
			"value": "Page PDF 33",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p33"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "370 L/min ; 13 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p33"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-CT130",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p33"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p33"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-CT130 3”Cutting Wheel 20,000 0.45 336 1/4” 3/8” 370 13 180 7 0.74 1.63 10Pcs/Ctn/13/1'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p33",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=33",
			"sourceLabel": "sumake-na-2024, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p33"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p33"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p33"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p33"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 370 L/min à 6,2 bar."
	]
};

export default product;
