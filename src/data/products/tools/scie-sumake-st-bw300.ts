import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sumake-st-bw300",
	"slug": "scie-sumake-st-bw300",
	"categoryId": "scie",
	"category": "scie",
	"label": "Sumake ST-BW300",
	"brand": "Sumake",
	"model": "ST-BW300",
	"mpn": "ST-BW300",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sumake-st-bw300-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-BW300",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-bw300",
		"label": "Référence ST-BW300",
		"distinguishingAttributes": {
			"reference": "ST-BW300",
			"Consommation dans les unités du tableau": "240 L/min ; 8.5 cfm",
			"Configuration complète publiée": "ST-BW300",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "La ST-BW300 est une scie alternative à transmission par engrenages, course 10 mm et 7 000 coups/min. Sa table donne une capacité acier 5,3 mm et aluminium 5,8 mm ; la ST-SR101 est une cisaille, et la ST-CT100 une tronçonneuse à disque de 76,2 mm. La méthode de coupe et la lame priment donc sur le seul gabarit. Les 240 L/min restent de régime indéterminé.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 23.",
			"Consommation dans les unités du tableau : 240 L/min ; 8.5 cfm.",
			"Configuration complète publiée : ST-BW300.",
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
			"value": "Page PDF 23",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "240 L/min ; 8.5 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-BW300",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-BW300 5.3 5.8 7,000 bpm 10 310 12-1/5 1/4” 3/8” 240 8.5 1.4 3.1 10Pcs/Ctn/17/0.8'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p23",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=23",
			"sourceLabel": "sumake-na-2024, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:scie-sumake-st-bw300:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ST-BW300 est une scie alternative à transmission par engrenages, course 10 mm et 7 000 coups/min. Sa table donne une capacité acier 5,3 mm et aluminium 5,8 mm ; la ST-SR101 est une cisaille, et la ST-CT100 une tronçonneuse à disque de 76,2 mm. La méthode de coupe et la lame priment donc sur le seul gabarit. Les 240 L/min restent de régime indéterminé. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 23."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p23"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p23"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p23"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p23"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 240 L/min à 6,2 bar."
	]
};

export default product;
