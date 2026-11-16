import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-5555",
	"slug": "cle-a-cliquet-sumake-st-5555",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-5555",
	"brand": "Sumake",
	"model": "ST-5555",
	"mpn": "ST-5555",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 283,
		"typical": 283,
		"max": 283
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sumake-st-5555-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-5555",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-5555",
		"label": "Référence ST-5555",
		"distinguishingAttributes": {
			"reference": "ST-5555",
			"Consommation dans les unités du tableau": "283 L/min ; 10 cfm",
			"Configuration complète publiée": "ST-5555",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Le ST-5555 est le cliquet à carré 1/4 pouce de 165 mm et 0,5 kg, à 230 tr/min et 34 Nm maximum. Le 5555A change le carré en 3/8 pouce ; le 5557 passe à 267 mm et 68 Nm. Le petit format sert les accès restreints, avec le carré adapté aux douilles. Les 283 L/min et les 6,2 bar recommandés ne qualifient pas une consommation en charge.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 11.",
			"Consommation dans les unités du tableau : 283 L/min ; 10 cfm.",
			"Configuration complète publiée : ST-5555.",
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
			"value": "283 L/min ; 10 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-5555",
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
			"value": "ST-5555 1/4 M7 5/16 230 34 25 165 6-1/2 1/4” 1/4” 283 10 0.5 1.1 25Pcs/Ctn/15/0.8’",
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
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-cliquet-sumake-st-5555:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le ST-5555 est le cliquet à carré 1/4 pouce de 165 mm et 0,5 kg, à 230 tr/min et 34 Nm maximum. Le 5555A change le carré en 3/8 pouce ; le 5557 passe à 267 mm et 68 Nm. Le petit format sert les accès restreints, avec le carré adapté aux douilles. Les 283 L/min et les 6,2 bar recommandés ne qualifient pas une consommation en charge. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 11."
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
		"Consommation publiée, régime non précisé : 283 L/min à 6,2 bar."
	]
};

export default product;
