import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-10x-rk130",
	"slug": "agrafeuse-cloueuse-prebena-10x-rk130",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 10X-RK130",
	"brand": "PREBENA",
	"model": "10X-RK130",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-10x-rk130.webp",
		"alt": "Repères techniques : PREBENA 10X-RK130",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-10x-rk130",
		"label": "10X-RK130",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "4,3 litre ; pression de mesure non précisée",
			"Masse": "6,1 kg",
			"Dimensions (L × l × h)": "553 x 175 x 478 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 10X-RK130. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 4,3 litre ; pression de mesure non précisée. Masse : 6,1 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 70.",
			"Consommation approximative par fixation : 4,3 litre ; pression de mesure non précisée.",
			"Masse : 6,1 kg.",
			"Dimensions (L × l × h) : 553 x 175 x 478 mm."
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
			"value": "Page PDF 70",
			"evidenceIds": [
				"documented-d-prebena-2024-p70"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "4,3 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p70"
			]
		},
		{
			"label": "Masse",
			"value": "6,1 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p70"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "553 x 175 x 478 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p70"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Streifennagler für Rundkopf- Streifennägel Type RK und RKP von 100 – 130 mm,",
			"evidenceIds": [
				"documented-d-prebena-2024-p70"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p70",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=70",
			"sourceLabel": "prebena-2024, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p70"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p70"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
