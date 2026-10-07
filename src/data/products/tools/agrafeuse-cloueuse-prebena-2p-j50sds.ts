import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-2p-j50sds",
	"slug": "agrafeuse-cloueuse-prebena-2p-j50sds",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 2P-J50SDS",
	"brand": "PREBENA",
	"model": "2P-J50SDS",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-2p-j50sds.webp",
		"alt": "Repères techniques : PREBENA 2P-J50SDS",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-2p-j50sds",
		"label": "2P-J50SDS",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "0,75 litre ; pression de mesure non précisée",
			"Masse": "1,25 kg",
			"Dimensions (L × l × h)": "235 x 57,5 x 232 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 2P-J50SDS. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 0,75 litre ; pression de mesure non précisée. Masse : 1,25 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 56.",
			"Consommation approximative par fixation : 0,75 litre ; pression de mesure non précisée.",
			"Masse : 1,25 kg.",
			"Dimensions (L × l × h) : 235 x 57,5 x 232 mm."
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
			"value": "Page PDF 56",
			"evidenceIds": [
				"documented-d-prebena-2024-p56"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "0,75 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p56"
			]
		},
		{
			"label": "Masse",
			"value": "1,25 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p56"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "235 x 57,5 x 232 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p56"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Stauchkopfnägel (Brads) Type J von 16 – 50 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p56",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=56",
			"sourceLabel": "prebena-2024, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p56"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p56"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
