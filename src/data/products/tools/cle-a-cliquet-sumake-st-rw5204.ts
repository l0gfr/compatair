import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-rw5204",
	"slug": "cle-a-cliquet-sumake-st-rw5204",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-RW5204",
	"brand": "Sumake",
	"model": "ST-RW5204",
	"mpn": "ST-RW5204",
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
		"src": "/images/products/cle-a-cliquet-sumake-st-rw5204.webp",
		"alt": "Repères techniques : Sumake ST-RW5204",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-rw5204",
		"label": "Référence ST-RW5204",
		"distinguishingAttributes": {
			"reference": "ST-RW5204",
			"Consommation dans les unités du tableau": "370 L/min ; 13 cfm",
			"Configuration complète publiée": "ST-RW5204",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-RW5204. Consommation publiée, régime non précisé : 370 L/min à 6,2 bar. Consommation dans les unités du tableau : 370 L/min ; 13 cfm. Configuration complète publiée : ST-RW5204.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 11.",
			"Consommation dans les unités du tableau : 370 L/min ; 13 cfm.",
			"Configuration complète publiée : ST-RW5204.",
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
			"value": "Page PDF 11",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "370 L/min ; 13 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-RW5204",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-RW5204 1/2 M13 1/2 200 61 45 265 10-3/7 1/4” 3/8” 370 13 1.1 2.43 10Pcs/Ctn/14/0.6’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p11",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=11",
			"sourceLabel": "sumake-na-2024, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p11"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p11"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p11"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p11"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 370 L/min à 6,2 bar."
	]
};

export default product;
