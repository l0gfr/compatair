import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-c5444s",
	"slug": "cle-a-chocs-sumake-st-c5444s",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-C5444S",
	"brand": "Sumake",
	"model": "ST-C5444S",
	"mpn": "ST-C5444S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-c5444s.webp",
		"alt": "Repères techniques : Sumake ST-C5444S",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-c5444s",
		"label": "Référence ST-C5444S",
		"distinguishingAttributes": {
			"reference": "ST-C5444S",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-C5444S",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-C5444S. Consommation publiée, régime non précisé : 480 L/min à 6,2 bar. Consommation dans les unités du tableau : 480 L/min ; 17 cfm. Configuration complète publiée : ST-C5444S.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 3.",
			"Consommation dans les unités du tableau : 480 L/min ; 17 cfm.",
			"Configuration complète publiée : ST-C5444S.",
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
			"value": "Page PDF 3",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p3"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "480 L/min ; 17 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p3"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-C5444S",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p3"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p3"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-C5444S 1/2 M21 53/64 8,500 1,080 800 1,491 1,100 175 6-8/9 1/4\" 3/8\" 480 17 1.65 3.64 10Pcs/Ctn/19.3/1.4'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p3",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=3",
			"sourceLabel": "sumake-na-2024, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p3"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p3"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p3"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p3"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
