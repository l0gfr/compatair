import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-rw700",
	"slug": "cle-a-cliquet-sumake-st-rw700",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-RW700",
	"brand": "Sumake",
	"model": "ST-RW700",
	"mpn": "ST-RW700",
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
		"src": "/images/products/cle-a-cliquet-sumake-st-rw700.webp",
		"alt": "Repères techniques : Sumake ST-RW700",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-rw700",
		"label": "Référence ST-RW700",
		"distinguishingAttributes": {
			"reference": "ST-RW700",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-RW700",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-RW700. Consommation publiée, régime non précisé : 480 L/min à 6,2 bar. Consommation dans les unités du tableau : 480 L/min ; 17 cfm. Configuration complète publiée : ST-RW700.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 9.",
			"Consommation dans les unités du tableau : 480 L/min ; 17 cfm.",
			"Configuration complète publiée : ST-RW700.",
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
			"value": "Page PDF 9",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p9"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "480 L/min ; 17 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p9"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-RW700",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p9"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p9"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-RW700 10, 11, 12, 13, 14, 15,16, 17, 18, 19, (11/16\") 190 25 18 338 13-1/3 1/4\" 3/8” 480 17 2 4.41 5Pcs/Ctn/21.6/1.4'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p9",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=9",
			"sourceLabel": "sumake-na-2024, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p9"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p9"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p9"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p9"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
