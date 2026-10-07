import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sumake-st-as10nfh-3",
	"slug": "ponceuse-orbitale-sumake-st-as10nfh-3",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Sumake ST-AS10NFH-3",
	"brand": "Sumake",
	"model": "ST-AS10NFH-3",
	"mpn": "ST-AS10NFH-3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 76,
		"typical": 76,
		"max": 76
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sumake-st-as10nfh-3.webp",
		"alt": "Repères techniques : Sumake ST-AS10NFH-3",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-as10nfh-3",
		"label": "Référence ST-AS10NFH-3",
		"distinguishingAttributes": {
			"reference": "ST-AS10NFH-3",
			"Consommation dans les unités du tableau": "76 L/min ; 2.7 cfm",
			"Configuration complète publiée": "ST-AS10NFH-3",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-AS10NFH-3. Consommation publiée, régime non précisé : 76 L/min à 6,2 bar. Consommation dans les unités du tableau : 76 L/min ; 2.7 cfm. Configuration complète publiée : ST-AS10NFH-3.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 25.",
			"Consommation dans les unités du tableau : 76 L/min ; 2.7 cfm.",
			"Configuration complète publiée : ST-AS10NFH-3.",
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
			"value": "Page PDF 25",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p25"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "76 L/min ; 2.7 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p25"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-AS10NFH-3",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p25"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p25"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-AS10NFH-3 30mm (1.2”) 8,000 180 7 1/4” 3/8” 76 2.7 0.65 1.4 10Pcs/Ctn/9/0.5'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p25",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=25",
			"sourceLabel": "sumake-na-2024, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p25"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p25"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p25"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p25"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 76 L/min à 6,2 bar."
	]
};

export default product;
