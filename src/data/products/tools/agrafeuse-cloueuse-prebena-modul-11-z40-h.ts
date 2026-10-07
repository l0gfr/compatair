import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-modul-11-z40-h",
	"slug": "agrafeuse-cloueuse-prebena-modul-11-z40-h",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA MODUL 11-Z40-H",
	"brand": "PREBENA",
	"model": "MODUL 11-Z40-H",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.5,
		"typical": 6,
		"max": 6
	},
	"airPerActionLiters": 0.95,
	"actionLabel": "fixation",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-modul-11-z40-h.webp",
		"alt": "Repères techniques : PREBENA MODUL 11-Z40-H",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-modul-11-z40-h",
		"label": "MODUL 11-Z40-H",
		"distinguishingAttributes": {
			"Quantité approximative d’air à la pression publiée": "0,95 litre par fixation à 6 bar",
			"Masse": "9,0 kg",
			"Dimensions (L × l × h)": "490 x 330 x 272 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA MODUL 11-Z40-H. Environ 0,95 L par fixation à 6 bar. La cadence réelle reste nécessaire. Quantité approximative d’air à la pression publiée : 0,95 litre par fixation à 6 bar. Masse : 9,0 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 74.",
			"Quantité approximative d’air à la pression publiée : 0,95 litre par fixation à 6 bar.",
			"Masse : 9,0 kg.",
			"Dimensions (L × l × h) : 490 x 330 x 272 mm."
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
			"value": "Page PDF 74",
			"evidenceIds": [
				"documented-d-prebena-2024-p74"
			]
		},
		{
			"label": "Quantité approximative d’air à la pression publiée",
			"value": "0,95 litre par fixation à 6 bar",
			"evidenceIds": [
				"documented-d-prebena-2024-p74"
			]
		},
		{
			"label": "Masse",
			"value": "9,0 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p74"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "490 x 330 x 272 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p74"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p74",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=74",
			"sourceLabel": "prebena-2024, page PDF 74",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p74"
		],
		"airPerActionLiters": [
			"documented-d-prebena-2024-p74"
		]
	},
	"notes": [
		"Environ 0,95 L par fixation à 6 bar. La cadence réelle reste nécessaire."
	]
};

export default product;
