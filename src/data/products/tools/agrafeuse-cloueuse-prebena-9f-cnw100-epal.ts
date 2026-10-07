import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-9f-cnw100-epal",
	"slug": "agrafeuse-cloueuse-prebena-9f-cnw100-epal",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 9F-CNW100-EPAL",
	"brand": "PREBENA",
	"model": "9F-CNW100-EPAL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-9f-cnw100-epal.webp",
		"alt": "Repères techniques : PREBENA 9F-CNW100-EPAL",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-9f-cnw100-epal",
		"label": "9F-CNW100-EPAL",
		"distinguishingAttributes": {
			"Consommation approximative par fixation": "5,38 litre ; pression de mesure non précisée",
			"Masse": "5,3 kg",
			"Dimensions (L × l × h)": "338 x 153 x 418 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 9F-CNW100-EPAL. La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition. Consommation approximative par fixation : 5,38 litre ; pression de mesure non précisée. Masse : 5,3 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 67.",
			"Consommation approximative par fixation : 5,38 litre ; pression de mesure non précisée.",
			"Masse : 5,3 kg.",
			"Dimensions (L × l × h) : 338 x 153 x 418 mm."
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
			"value": "Page PDF 67",
			"evidenceIds": [
				"documented-d-prebena-2024-p67"
			]
		},
		{
			"label": "Consommation approximative par fixation",
			"value": "5,38 litre ; pression de mesure non précisée",
			"evidenceIds": [
				"documented-d-prebena-2024-p67"
			]
		},
		{
			"label": "Masse",
			"value": "5,3 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p67"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "338 x 153 x 418 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p67"
			]
		},
		{
			"label": "Fixations et longueurs du bloc constructeur",
			"value": " Coilnagler für Coilnägel Type CNW von 55 – 100 mm, Drahtmaß: Ø 3,1 – 3,4 mm Ideal geeignet für den Bau/Reparaturen",
			"evidenceIds": [
				"documented-d-prebena-2024-p67"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p67",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=67",
			"sourceLabel": "prebena-2024, page PDF 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p67"
		],
		"demandExplanation": [
			"documented-d-prebena-2024-p67"
		]
	},
	"notes": [
		"La source donne une quantité approximative par fixation, sans indiquer sa pression de mesure. Le calcul par cadence attend cette condition."
	]
};

export default product;
