import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-sumake-st-7841sl",
	"slug": "tronconneuse-sumake-st-7841sl",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Sumake ST-7841SL",
	"brand": "Sumake",
	"model": "ST-7841SL",
	"mpn": "ST-7841SL",
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
		"src": "/images/products/tronconneuse-sumake-st-7841sl.webp",
		"alt": "Repères techniques : Sumake ST-7841SL",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7841sl",
		"label": "Référence ST-7841SL",
		"distinguishingAttributes": {
			"reference": "ST-7841SL",
			"Consommation dans les unités du tableau": "540 L/min ; 19 cfm",
			"Configuration complète publiée": "ST-7841SL",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7841SL. Consommation publiée, régime non précisé : 540 L/min à 6,2 bar. Consommation dans les unités du tableau : 540 L/min ; 19 cfm. Configuration complète publiée : ST-7841SL.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 28.",
			"Consommation dans les unités du tableau : 540 L/min ; 19 cfm.",
			"Configuration complète publiée : ST-7841SL.",
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
			"value": "Page PDF 28",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p28"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "540 L/min ; 19 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p28"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7841SL",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p28"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p28"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-7841SL 5/8” & 3/8” 15,000 4 376 14-4/5 1/4” 3/8” 540 19 1.7 3.8 12/Ctn/21.5/2'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p28",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=28",
			"sourceLabel": "sumake-na-2024, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p28"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p28"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p28"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p28"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 540 L/min à 6,2 bar."
	]
};

export default product;
