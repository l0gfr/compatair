import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-3gp-e40",
	"slug": "agrafeuse-cloueuse-prebena-3gp-e40",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 3GP-E40",
	"brand": "PREBENA",
	"model": "3GP-E40",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-3gp-e40.webp",
		"alt": "Repères techniques : PREBENA 3GP-E40",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-3gp-e40",
		"label": "3GP-E40",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "1,28 litre ; pression de mesure non précisée",
			"Masse": "1,83 kg",
			"Dimensions (L × l × h)": "295 x 70 x 265 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 3GP-E40. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 1,28 litre ; pression de mesure non précisée. Masse : 1,83 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 41.",
			"Consommation approximative par fixation : 1,28 litre ; pression de mesure non précisée.",
			"Masse : 1,83 kg.",
			"Dimensions (L × l × h) : 295 x 70 x 265 mm."
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
			"value": "Page PDF 41",
			"evidenceIds": [
				"documented-d-prebena-2024-p41"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "1,28 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p41"
			]
		},
		{
			"label": "Masse",
			"value": "1,83 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p41"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "295 x 70 x 265 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p41"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type E von 15 – 40 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p41",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=41",
			"sourceLabel": "prebena-2024, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p41"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p41"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
