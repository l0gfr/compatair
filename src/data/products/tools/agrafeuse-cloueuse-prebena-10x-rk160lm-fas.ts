import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-10x-rk160lm-fas",
	"slug": "agrafeuse-cloueuse-prebena-10x-rk160lm-fas",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA 10X-RK160LM-FAS",
	"brand": "PREBENA",
	"model": "10X-RK160LM-FAS",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6,
		"typical": 8,
		"max": 8
	},
	"airPerActionLiters": 5,
	"actionLabel": "fixation",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-10x-rk160lm-fas.webp",
		"alt": "Repères techniques : PREBENA 10X-RK160LM-FAS",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-10x-rk160lm-fas",
		"label": "10X-RK160LM-FAS",
		"distinguishingAttributes": {
			"Quantité approximative d’air à la pression publiée": "5,0 litre par fixation à 8 bar",
			"Masse": "14,25 kg",
			"Dimensions (L × l × h)": "1027 x 157 x 536 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA 10X-RK160LM-FAS. Environ 5 L par fixation à 8 bar. La cadence réelle reste nécessaire. Quantité approximative d’air à la pression publiée : 5,0 litre par fixation à 8 bar. Masse : 14,25 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 83.",
			"Quantité approximative d’air à la pression publiée : 5,0 litre par fixation à 8 bar.",
			"Masse : 14,25 kg.",
			"Dimensions (L × l × h) : 1027 x 157 x 536 mm."
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
			"value": "Page PDF 83",
			"evidenceIds": [
				"documented-d-prebena-2024-p83"
			]
		},
		{
			"label": "Quantité approximative d’air à la pression publiée",
			"value": "5,0 litre par fixation à 8 bar",
			"evidenceIds": [
				"documented-d-prebena-2024-p83"
			]
		},
		{
			"label": "Masse",
			"value": "14,25 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p83"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1027 x 157 x 536 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p83"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p83",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=83",
			"sourceLabel": "prebena-2024, page PDF 83",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p83"
		],
		"airPerActionLiters": [
			"documented-d-prebena-2024-p83"
		]
	},
	"notes": [
		"Environ 5 L par fixation à 8 bar. La cadence réelle reste nécessaire."
	]
};

export default product;
