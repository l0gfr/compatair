import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-5c-q75",
	"slug": "agrafeuse-cloueuse-prebena-5c-q75",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 5C-Q75",
	"brand": "PREBENA",
	"model": "5C-Q75",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-5c-q75.webp",
		"alt": "Repères techniques : PREBENA 5C-Q75",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-5c-q75",
		"label": "5C-Q75",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "2,3 litre ; pression de mesure non précisée",
			"Masse": "2,75 kg",
			"Dimensions (L × l × h)": "370 x 98 x 349 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 5C-Q75. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 2,3 litre ; pression de mesure non précisée. Masse : 2,75 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 47.",
			"Consommation approximative par fixation : 2,3 litre ; pression de mesure non précisée.",
			"Masse : 2,75 kg.",
			"Dimensions (L × l × h) : 370 x 98 x 349 mm."
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
			"value": "Page PDF 47",
			"evidenceIds": [
				"documented-d-prebena-2024-p47"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "2,3 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p47"
			]
		},
		{
			"label": "Masse",
			"value": "2,75 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p47"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "370 x 98 x 349 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p47"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type Q von 35 – 75 mm und QL von 35 – 75 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p47"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p47",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=47",
			"sourceLabel": "prebena-2024, page PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p47"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p47"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
