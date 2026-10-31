import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-55502",
	"slug": "cle-a-cliquet-sumake-st-55502",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-55502",
	"brand": "Sumake",
	"model": "ST-55502",
	"mpn": "ST-55502",
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
		"src": "/images/products/cle-a-cliquet-sumake-st-55502.webp",
		"alt": "Repères techniques : Sumake ST-55502",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-55502",
		"label": "Référence ST-55502",
		"distinguishingAttributes": {
			"reference": "ST-55502",
			"Consommation dans les unités du tableau": "283 L/min ; 10 cfm",
			"Configuration complète publiée": "ST-55502",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-55502. Carré d’entraînement : 1/4 pouce. Vitesse à vide : 260 tr/min. Longueur publiée : 133 mm. Le catalogue publie 283 L/min, sans préciser le régime de consommation.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 11.",
			"Consommation dans les unités du tableau : 283 L/min ; 10 cfm.",
			"Configuration complète publiée : ST-55502.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé.",
			"Carré d’entraînement : 1/4 pouce.",
			"Vitesse à vide : 260 tr/min.",
			"Longueur publiée : 133 mm."
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
			"value": "ST-55502",
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
			"value": "ST-55502 1/4 M6 1/ 4 260 20 15 133 5-1/4 1/4” 1/4” 283 10 0.45 0.99 20Pcs/Ctn/10/0.47’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "1/4 pouce",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11",
				"cle-a-cliquet-sumake-st-55502-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "260 tr/min",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11",
				"cle-a-cliquet-sumake-st-55502-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "133 mm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p11",
				"cle-a-cliquet-sumake-st-55502-reserved-20261031-1"
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
			"id": "cle-a-cliquet-sumake-st-55502-reserved-20261031-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=11",
			"sourceLabel": "Sumake ST-55502 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Table Sumake relue : enrichissement avec les caractéristiques propres à ce modèle, en conservant la consommation de régime non précisé hors verdict conclusif."
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
