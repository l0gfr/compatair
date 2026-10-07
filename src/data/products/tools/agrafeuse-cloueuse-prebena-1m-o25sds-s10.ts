import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-1m-o25sds-s10",
	"slug": "agrafeuse-cloueuse-prebena-1m-o25sds-s10",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 1M-O25SDS-S10",
	"brand": "PREBENA",
	"model": "1M-O25SDS-S10",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 6
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-1m-o25sds-s10.webp",
		"alt": "Repères techniques : PREBENA 1M-O25SDS-S10",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-1m-o25sds-s10",
		"label": "1M-O25SDS-S10",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "0,25 litre ; pression de mesure non précisée",
			"Masse": "1,0 kg",
			"Dimensions (L × l × h)": "209 x 42 x 160 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 1M-O25SDS-S10. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 0,25 litre ; pression de mesure non précisée. Masse : 1,0 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 39.",
			"Consommation approximative par fixation : 0,25 litre ; pression de mesure non précisée.",
			"Masse : 1,0 kg.",
			"Dimensions (L × l × h) : 209 x 42 x 160 mm."
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
			"value": "Page PDF 39",
			"evidenceIds": [
				"documented-d-prebena-2024-p39"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "0,25 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p39"
			]
		},
		{
			"label": "Masse",
			"value": "1,0 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p39"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "209 x 42 x 160 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p39"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Druckluftnagler für Heftklammern Type O von 8 – 25 mm Produktmerkmale:",
			"evidenceIds": [
				"documented-d-prebena-2024-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p39",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=39",
			"sourceLabel": "prebena-2024, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p39"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p39"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
