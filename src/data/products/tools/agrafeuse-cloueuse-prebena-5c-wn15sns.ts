import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-5c-wn15sns",
	"slug": "agrafeuse-cloueuse-prebena-5c-wn15sns",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 5C-WN15SNS",
	"brand": "PREBENA",
	"model": "5C-WN15SNS",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-5c-wn15sns.webp",
		"alt": "Repères techniques : PREBENA 5C-WN15SNS",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-5c-wn15sns",
		"label": "5C-WN15SNS",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "1,74 litre ; pression de mesure non précisée",
			"Masse": "2,4 kg",
			"Dimensions (L × l × h)": "300,5 x 82 x 282,5 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 5C-WN15SNS. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 1,74 litre ; pression de mesure non précisée. Masse : 2,4 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 60.",
			"Consommation approximative par fixation : 1,74 litre ; pression de mesure non précisée.",
			"Masse : 2,4 kg.",
			"Dimensions (L × l × h) : 300,5 x 82 x 282,5 mm."
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
			"value": "1,74 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Masse",
			"value": "2,4 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "300,5 x 82 x 282,5 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p60"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Wellennagler für Wellennägel Type WN von 9 – 15 mm Produktmerkmale:",
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
