import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-66165v",
	"slug": "riveteuse-sumake-st-66165v",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-66165V",
	"brand": "Sumake",
	"model": "ST-66165V",
	"mpn": "ST-66165V",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 255,
		"typical": 255,
		"max": 255
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sumake-st-66165v.webp",
		"alt": "Repères techniques : Sumake ST-66165V",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-66165v",
		"label": "Référence ST-66165V",
		"distinguishingAttributes": {
			"reference": "ST-66165V",
			"Consommation dans les unités du tableau": "255 L/min ; 9 cfm",
			"Configuration complète publiée": "ST-66165V",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-66165V. Consommation publiée, régime non précisé : 255 L/min à 6,2 bar. Consommation dans les unités du tableau : 255 L/min ; 9 cfm. Configuration complète publiée : ST-66165V.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 63.",
			"Consommation dans les unités du tableau : 255 L/min ; 9 cfm.",
			"Configuration complète publiée : ST-66165V.",
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
			"value": "Page PDF 63",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p63"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "255 L/min ; 9 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p63"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-66165V",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p63"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p63"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-66165V ■: 3/32\"(2.4), 1/8\"(3.2), 5/32\"(4.0), 3/16\"(4.8) 908 2,000 23.5 0.93 270 10-1/2 255 9 3 1.49 3.3 10Pcs/Ctn/19 /2.6'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p63",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=63",
			"sourceLabel": "sumake-na-2024, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p63"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p63"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p63"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p63"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 255 L/min à 6,2 bar."
	]
};

export default product;
