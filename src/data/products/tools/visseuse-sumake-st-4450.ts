import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-st-4450",
	"slug": "visseuse-sumake-st-4450",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake ST-4450",
	"brand": "Sumake",
	"model": "ST-4450",
	"mpn": "ST-4450",
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
		"src": "/images/products/visseuse-sumake-st-4450.webp",
		"alt": "Repères techniques : Sumake ST-4450",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-4450",
		"label": "Référence ST-4450",
		"distinguishingAttributes": {
			"reference": "ST-4450",
			"Consommation dans les unités du tableau": "270 L/min ; 9.5 cfm",
			"Configuration complète publiée": "ST-4450",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-4450. Hexagone d’entraînement : 6,35 mm (1/4 pouce). Vitesse à vide : 1 700 tr/min. Couple maximal publié : 3 Nm. Le catalogue publie 270 L/min, sans préciser le régime de consommation.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 12.",
			"Consommation dans les unités du tableau : 270 L/min ; 9.5 cfm.",
			"Configuration complète publiée : ST-4450.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé.",
			"Hexagone d’entraînement : 6,35 mm (1/4 pouce).",
			"Vitesse à vide : 1 700 tr/min.",
			"Couple maximal publié : 3 Nm."
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
			"value": "ST-4450",
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
			"value": "ST-4450 6.35 1/4 1,700 3 2.2 235 9-1/4 1/4” 3/8” 270 9.5 0.65 1.4 20/Ctn/17/1.1’",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12"
			]
		},
		{
			"label": "Hexagone d’entraînement",
			"value": "6,35 mm (1/4 pouce)",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12",
				"visseuse-sumake-st-4450-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 700 tr/min",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12",
				"visseuse-sumake-st-4450-reserved-20261031-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "3 Nm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p12",
				"visseuse-sumake-st-4450-reserved-20261031-1"
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
			"id": "visseuse-sumake-st-4450-reserved-20261031-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=12",
			"sourceLabel": "Sumake ST-4450 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Table Sumake relue : enrichissement avec les caractéristiques propres à ce modèle, en conservant la consommation de régime non précisé hors verdict conclusif."
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
