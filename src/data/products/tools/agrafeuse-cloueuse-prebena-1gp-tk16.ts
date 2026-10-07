import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-1gp-tk16",
	"slug": "agrafeuse-cloueuse-prebena-1gp-tk16",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 1GP-TK16",
	"brand": "PREBENA",
	"model": "1GP-TK16",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 6
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-1gp-tk16.webp",
		"alt": "Repères techniques : PREBENA 1GP-TK16",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-1gp-tk16",
		"label": "1GP-TK16",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "0,27 litre ; pression de mesure non précisée",
			"Masse": "0,86 kg",
			"Dimensions (L × l × h)": "220 x 50 x 155 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 1GP-TK16. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 0,27 litre ; pression de mesure non précisée. Masse : 0,86 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 38.",
			"Consommation approximative par fixation : 0,27 litre ; pression de mesure non précisée.",
			"Masse : 0,86 kg.",
			"Dimensions (L × l × h) : 220 x 50 x 155 mm."
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
			"value": "Page PDF 38",
			"evidenceIds": [
				"documented-d-prebena-2024-p38"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "0,27 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p38"
			]
		},
		{
			"label": "Masse",
			"value": "0,86 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p38"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "220 x 50 x 155 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p38"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type TK von 6 – 16 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p38",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=38",
			"sourceLabel": "prebena-2024, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p38"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p38"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
