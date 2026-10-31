import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-sumake-st-bs110a",
	"slug": "ponceuse-bande-sumake-st-bs110a",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Sumake ST-BS110A",
	"brand": "Sumake",
	"model": "ST-BS110A",
	"mpn": "ST-BS110A",
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
		"src": "/images/products/ponceuse-bande-sumake-st-bs110a.webp",
		"alt": "Repères techniques : Sumake ST-BS110A",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-bs110a",
		"label": "Référence ST-BS110A",
		"distinguishingAttributes": {
			"reference": "ST-BS110A",
			"Consommation dans les unités du tableau": "480 L/min ; 17 cfm",
			"Configuration complète publiée": "ST-BS110A",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-BS110A. Dimensions de bande : 6 × 330 mm. Vitesse à vide : 17 000 tr/min. Longueur publiée : 320 mm. Le catalogue publie 480 L/min, sans préciser le régime de consommation.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 49.",
			"Consommation dans les unités du tableau : 480 L/min ; 17 cfm.",
			"Configuration complète publiée : ST-BS110A.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé.",
			"Dimensions de bande : 6 × 330 mm.",
			"Vitesse à vide : 17 000 tr/min.",
			"Longueur publiée : 320 mm."
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
			"value": "Page PDF 49",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "480 L/min ; 17 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-BS110A",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-BS110A 6x330 6/25x13 17,000 320 12-3/5 1/4’’ 3/8’’ 480 17 0.82 1.8 10PCS/Ctn/11/1.4'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49"
			]
		},
		{
			"label": "Dimensions de bande",
			"value": "6 × 330 mm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49",
				"ponceuse-bande-sumake-st-bs110a-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "17 000 tr/min",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49",
				"ponceuse-bande-sumake-st-bs110a-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "320 mm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p49",
				"ponceuse-bande-sumake-st-bs110a-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p49",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=49",
			"sourceLabel": "sumake-na-2024, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "ponceuse-bande-sumake-st-bs110a-reserved-20261031-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=49",
			"sourceLabel": "Sumake ST-BS110A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Table Sumake relue : enrichissement avec les caractéristiques propres à ce modèle, en conservant la consommation de régime non précisé hors verdict conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p49"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p49"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p49"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p49"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 480 L/min à 6,2 bar."
	]
};

export default product;
