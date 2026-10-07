import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-sumake-st-2557",
	"slug": "derouilleur-a-aiguilles-sumake-st-2557",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Sumake ST-2557",
	"brand": "Sumake",
	"model": "ST-2557",
	"mpn": "ST-2557",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-sumake-st-2557.webp",
		"alt": "Repères techniques : Sumake ST-2557",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-2557",
		"label": "Référence ST-2557",
		"distinguishingAttributes": {
			"reference": "ST-2557",
			"Consommation dans les unités du tableau": "230 L/min ; 8 cfm",
			"Configuration complète publiée": "ST-2557",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-2557. Consommation publiée, régime non précisé : 230 L/min à 6,2 bar. Consommation dans les unités du tableau : 230 L/min ; 8 cfm. Configuration complète publiée : ST-2557.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 55.",
			"Consommation dans les unités du tableau : 230 L/min ; 8 cfm.",
			"Configuration complète publiée : ST-2557.",
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
			"value": "Page PDF 55",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p55"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "230 L/min ; 8 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p55"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-2557",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p55"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p55"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-2557 4,650 Ø3X180X19Pcs - 33 1/4\" 230 8 2.7 420 6Pcs/Ctn/18/0.6'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p55"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p55",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=55",
			"sourceLabel": "sumake-na-2024, page PDF 55",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p55"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p55"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p55"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p55"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 230 L/min à 6,2 bar."
	]
};

export default product;
