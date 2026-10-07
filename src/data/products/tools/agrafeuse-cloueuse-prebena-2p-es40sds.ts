import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-2p-es40sds",
	"slug": "agrafeuse-cloueuse-prebena-2p-es40sds",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 2P-ES40SDS",
	"brand": "PREBENA",
	"model": "2P-ES40SDS",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-2p-es40sds.webp",
		"alt": "Repères techniques : PREBENA 2P-ES40SDS",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-2p-es40sds",
		"label": "2P-ES40SDS",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "0,27 litre ; pression de mesure non précisée",
			"Masse": "1,3 kg",
			"Dimensions (L × l × h)": "225 x 57,5 x 222 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 2P-ES40SDS. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 0,27 litre ; pression de mesure non précisée. Masse : 1,3 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 40.",
			"Consommation approximative par fixation : 0,27 litre ; pression de mesure non précisée.",
			"Masse : 1,3 kg.",
			"Dimensions (L × l × h) : 225 x 57,5 x 222 mm."
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
			"value": "Page PDF 40",
			"evidenceIds": [
				"documented-d-prebena-2024-p40"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "0,27 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p40"
			]
		},
		{
			"label": "Masse",
			"value": "1,3 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p40"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "225 x 57,5 x 222 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p40"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type ES von 15 – 40 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p40",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=40",
			"sourceLabel": "prebena-2024, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p40"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p40"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
