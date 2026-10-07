import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-modul-11-wn25",
	"slug": "agrafeuse-cloueuse-prebena-modul-11-wn25",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA MODUL 11-WN25",
	"brand": "PREBENA",
	"model": "MODUL 11-WN25",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6,
		"typical": 8,
		"max": 8
	},
	"airPerActionLiters": 4.5,
	"actionLabel": "fixation",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-modul-11-wn25.webp",
		"alt": "Repères techniques : PREBENA MODUL 11-WN25",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-modul-11-wn25",
		"label": "MODUL 11-WN25",
		"distinguishingAttributes": {
			"Quantité approximative d’air à la pression publiée": "4,5 litre par fixation à 8 bar",
			"Masse": "16,0 kg",
			"Dimensions (L × l × h)": "438 x 552 x 412 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA MODUL 11-WN25. Environ 4,5 L par fixation à 8 bar. La cadence réelle reste nécessaire. Quantité approximative d’air à la pression publiée : 4,5 litre par fixation à 8 bar. Masse : 16,0 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 81.",
			"Quantité approximative d’air à la pression publiée : 4,5 litre par fixation à 8 bar.",
			"Masse : 16,0 kg.",
			"Dimensions (L × l × h) : 438 x 552 x 412 mm."
		],
		"limitations": [
			"La moyenne par minute exige une cadence saisie ; elle ne décrit pas la pointe instantanée du déclenchement.",
			"La plage de pression utilisable reste distincte de la pression de mesure de la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 81",
			"evidenceIds": [
				"documented-d-prebena-2024-p81"
			]
		},
		{
			"label": "Quantité approximative d’air à la pression publiée",
			"value": "4,5 litre par fixation à 8 bar",
			"evidenceIds": [
				"documented-d-prebena-2024-p81"
			]
		},
		{
			"label": "Masse",
			"value": "16,0 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p81"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "438 x 552 x 412 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p81"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p81",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=81",
			"sourceLabel": "prebena-2024, page PDF 81",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p81"
		],
		"airPerActionLiters": [
			"documented-d-prebena-2024-p81"
		]
	},
	"notes": [
		"Environ 4,5 L par fixation à 8 bar. La cadence réelle reste nécessaire."
	]
};

export default product;
