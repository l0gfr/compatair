import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-4c-wd75-s01",
	"slug": "agrafeuse-cloueuse-prebena-4c-wd75-s01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 4C-WD75-S01",
	"brand": "PREBENA",
	"model": "4C-WD75-S01",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-4c-wd75-s01.webp",
		"alt": "Repères techniques : PREBENA 4C-WD75-S01",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-4c-wd75-s01",
		"label": "4C-WD75-S01",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "1,73 litre ; pression de mesure non précisée",
			"Masse": "3,25 kg",
			"Dimensions (L × l × h)": "348 x 78 x 357 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 4C-WD75-S01. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 1,73 litre ; pression de mesure non précisée. Masse : 3,25 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 43.",
			"Consommation approximative par fixation : 1,73 litre ; pression de mesure non précisée.",
			"Masse : 3,25 kg.",
			"Dimensions (L × l × h) : 348 x 78 x 357 mm."
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
			"value": "Page PDF 43",
			"evidenceIds": [
				"documented-d-prebena-2024-p43"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "1,73 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p43"
			]
		},
		{
			"label": "Masse",
			"value": "3,25 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p43"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "348 x 78 x 357 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p43"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type WD von 38 – 75 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p43",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=43",
			"sourceLabel": "prebena-2024, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p43"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p43"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
