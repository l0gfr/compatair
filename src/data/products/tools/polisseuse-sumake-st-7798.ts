import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-sumake-st-7798",
	"slug": "polisseuse-sumake-st-7798",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Sumake ST-7798",
	"brand": "Sumake",
	"model": "ST-7798",
	"mpn": "ST-7798",
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
		"src": "/images/products/polisseuse-sumake-st-7798-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-7798",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-7798",
		"label": "Référence ST-7798",
		"distinguishingAttributes": {
			"reference": "ST-7798",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-7798",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "La ST-7798 est la polisseuse 200 mm à 2 500 tr/min et broche UNC 5/8-11. La ST-7788 emploie le même diamètre pour poncer à 4 500 tr/min ; la ST-7797 réduit le plateau à 180 mm. L’accessoire doit correspondre au diamètre et à la vitesse, pas au seul filetage. Le corps mesure 305 mm pour 2 kg ; les 480 L/min ne sont pas une consommation en charge qualifiée.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 47.",
			"Consommation dans les unités du tableau : 480 L/min ; 17 cfm.",
			"Configuration complète publiée : ST-7798.",
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
			"value": "Page PDF 47",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p47"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "480 L/min ; 17 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p47"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-7798",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p47"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p47"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-7798 200 8 5/8”-11 2,500 305 12 1/4\" 3/8\" 480 17 2.0 4.41 10Pcs/Ctn/23.5/1.95'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p47"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p47",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=47",
			"sourceLabel": "sumake-na-2024, page PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:polisseuse-sumake-st-7798:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ST-7798 est la polisseuse 200 mm à 2 500 tr/min et broche UNC 5/8-11. La ST-7788 emploie le même diamètre pour poncer à 4 500 tr/min ; la ST-7797 réduit le plateau à 180 mm. L’accessoire doit correspondre au diamètre et à la vitesse, pas au seul filetage. Le corps mesure 305 mm pour 2 kg ; les 480 L/min ne sont pas une consommation en charge qualifiée. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 47."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p47"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p47"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p47"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p47"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
