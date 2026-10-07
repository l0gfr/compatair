import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-6f-wn25sns",
	"slug": "agrafeuse-cloueuse-prebena-6f-wn25sns",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 6F-WN25SNS",
	"brand": "PREBENA",
	"model": "6F-WN25SNS",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-6f-wn25sns.webp",
		"alt": "Repères techniques : PREBENA 6F-WN25SNS",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-6f-wn25sns",
		"label": "6F-WN25SNS",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "1,6 litre ; pression de mesure non précisée",
			"Masse": "4,1 kg",
			"Dimensions (L × l × h)": "380 x 101 x 275 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 6F-WN25SNS. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 1,6 litre ; pression de mesure non précisée. Masse : 4,1 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 60.",
			"Consommation approximative par fixation : 1,6 litre ; pression de mesure non précisée.",
			"Masse : 4,1 kg.",
			"Dimensions (L × l × h) : 380 x 101 x 275 mm."
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
			"value": "Page PDF 60",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "1,6 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Masse",
			"value": "4,1 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "380 x 101 x 275 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Wellennagler für Wellennägel Type WN 25 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p60",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=60",
			"sourceLabel": "prebena-2024, page PDF 60",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p60"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p60"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
