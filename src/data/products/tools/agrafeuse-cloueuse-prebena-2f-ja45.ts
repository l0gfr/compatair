import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-2f-ja45",
	"slug": "agrafeuse-cloueuse-prebena-2f-ja45",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 2F-JA45",
	"brand": "PREBENA",
	"model": "2F-JA45",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 7
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-2f-ja45.webp",
		"alt": "Repères techniques : PREBENA 2F-JA45",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-2f-ja45",
		"label": "2F-JA45",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "0,52 litre ; pression de mesure non précisée",
			"Masse": "1,14 kg",
			"Dimensions (L × l × h)": "280 x 55 x 216 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 2F-JA45. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 0,52 litre ; pression de mesure non précisée. Masse : 1,14 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 55.",
			"Consommation approximative par fixation : 0,52 litre ; pression de mesure non précisée.",
			"Masse : 1,14 kg.",
			"Dimensions (L × l × h) : 280 x 55 x 216 mm."
		],
		"limitations": [
			"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
			"La plage de pression utilisable reste distincte de la pression de mesure de la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 55",
			"evidenceIds": [
				"documented-d-prebena-2024-p55"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "0,52 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p55"
			]
		},
		{
			"label": "Masse",
			"value": "1,14 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p55"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "280 x 55 x 216 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p55"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Stauchkopfnägel (Brads) Type JA von 16 – 45 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p55"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p55",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=55",
			"sourceLabel": "prebena-2024, page PDF 55",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p55"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p55"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
