import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-rw950",
	"slug": "cle-a-cliquet-sumake-st-rw950",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-RW950",
	"brand": "Sumake",
	"model": "ST-RW950",
	"mpn": "ST-RW950",
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
		"src": "/images/products/cle-a-cliquet-sumake-st-rw950.webp",
		"alt": "Repères techniques : Sumake ST-RW950",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-rw950",
		"label": "Référence ST-RW950",
		"distinguishingAttributes": {
			"reference": "ST-RW950",
			"Consommation dans les unités du tableau": "400 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-RW950",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-RW950. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Consommation dans les unités du tableau : 400 L/min ; 14 cfm. Configuration complète publiée : ST-RW950.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 11.",
			"Consommation dans les unités du tableau : 400 L/min ; 14 cfm.",
			"Configuration complète publiée : ST-RW950.",
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
			"value": "400 L/min ; 14 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-RW950",
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
			"value": "ST-RW950 3/8 M13 1/2 180 108 80 298 11-3/4 1/4” 3/8” 400 14 1.22 2.71 10Pcs/Ctn/13.9/0.84’",
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
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
