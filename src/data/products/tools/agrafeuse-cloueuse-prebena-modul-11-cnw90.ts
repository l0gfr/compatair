import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-prebena-modul-11-cnw90",
	"slug": "agrafeuse-cloueuse-prebena-modul-11-cnw90",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PREBENA MODUL 11-CNW90",
	"brand": "PREBENA",
	"model": "MODUL 11-CNW90",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.5,
		"typical": 6,
		"max": 7.5
	},
	"airPerActionLiters": 3.6,
	"actionLabel": "fixation",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-prebena-modul-11-cnw90.webp",
		"alt": "Repères techniques : PREBENA MODUL 11-CNW90",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "prebena-modul-11-cnw90",
		"label": "MODUL 11-CNW90",
		"distinguishingAttributes": {
			"Quantité approximative d’air à la pression publiée": "3,6 litre par fixation à 6 bar",
			"Masse": "11,0 kg",
			"Dimensions (L × l × h)": "495 x 227 x 406 mm"
		}
	},
	"editorial": {
		"overview": "PREBENA MODUL 11-CNW90. Environ 3,6 L par fixation à 6 bar. La cadence réelle reste nécessaire. Quantité approximative d’air à la pression publiée : 3,6 litre par fixation à 6 bar. Masse : 11,0 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 82.",
			"Quantité approximative d’air à la pression publiée : 3,6 litre par fixation à 6 bar.",
			"Masse : 11,0 kg.",
			"Dimensions (L × l × h) : 495 x 227 x 406 mm."
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
			"value": "Page PDF 82",
			"evidenceIds": [
				"documented-d-prebena-2024-p82"
			]
		},
		{
			"label": "Quantité approximative d’air à la pression publiée",
			"value": "3,6 litre par fixation à 6 bar",
			"evidenceIds": [
				"documented-d-prebena-2024-p82"
			]
		},
		{
			"label": "Masse",
			"value": "11,0 kg",
			"evidenceIds": [
				"documented-d-prebena-2024-p82"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "495 x 227 x 406 mm",
			"evidenceIds": [
				"documented-d-prebena-2024-p82"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-prebena-2024-p82",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/Downloads/Prospekte/PREBENA-Hauptkatalog_2024_Seitenverlinkung_DE.pdf#page=82",
			"sourceLabel": "prebena-2024, page PDF 82",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 80e839ee7c69b786c470baff4ff85214f2776c400ebd64dda03145a061a88028. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-prebena-2024-p82"
		],
		"airPerActionLiters": [
			"documented-d-prebena-2024-p82"
		]
	},
	"notes": [
		"Environ 3,6 L par fixation à 6 bar. La cadence réelle reste nécessaire."
	]
};

export default product;
