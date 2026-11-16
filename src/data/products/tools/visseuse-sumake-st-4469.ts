import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-st-4469",
	"slug": "visseuse-sumake-st-4469",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake ST-4469",
	"brand": "Sumake",
	"model": "ST-4469",
	"mpn": "ST-4469",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-st-4469-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-4469",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-4469",
		"label": "Référence ST-4469",
		"distinguishingAttributes": {
			"reference": "ST-4469",
			"Consommation dans les unités du tableau": "270 L/min ; 9.5 cfm",
			"Configuration complète publiée": "ST-4469",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "La ST-4469 est la visseuse à impacts Double Hammer à hexagone 1/4 pouce, 7 500 tr/min et 200 Nm maximum. La ST-4470A annonce le même maximum à 8 000 tr/min ; la ST-4468 est plus courte et limitée à 35 Nm. Le maximum n’est pas une consigne de serrage contrôlée. Les 270 L/min du tableau restent sans régime explicite et hors dimensionnement.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 12.",
			"Consommation dans les unités du tableau : 270 L/min ; 9.5 cfm.",
			"Configuration complète publiée : ST-4469.",
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
			"value": "Page PDF 12",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "270 L/min ; 9.5 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-4469",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-4469 6.35 1/4 7,500 200 148 230 9 1/4” 3/8” 270 9.5 1.12 2.4 20/Ctn/15/1.1’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p12",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=12",
			"sourceLabel": "sumake-na-2024, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:visseuse-sumake-st-4469:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ST-4469 est la visseuse à impacts Double Hammer à hexagone 1/4 pouce, 7 500 tr/min et 200 Nm maximum. La ST-4470A annonce le même maximum à 8 000 tr/min ; la ST-4468 est plus courte et limitée à 35 Nm. Le maximum n’est pas une consigne de serrage contrôlée. Les 270 L/min du tableau restent sans régime explicite et hors dimensionnement. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 12."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p12"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p12"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p12"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 270 L/min à 6,2 bar."
	]
};

export default product;
