import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-framepro651",
	"slug": "agrafeuse-cloueuse-senco-framepro651",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco FramePro651",
	"brand": "Senco",
	"model": "FramePro651",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-framepro651.webp",
		"alt": "Repères techniques : Senco FramePro651",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-framepro651",
		"label": "FramePro651",
		"distinguishingAttributes": {
			"Longueur": "384 mm",
			"Largeur": "106 mm",
			"Hauteur": "363 mm"
		}
	},
	"editorial": {
		"overview": "Senco FramePro651. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 384 mm. Largeur : 106 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 41.",
			"Longueur : 384 mm.",
			"Largeur : 106 mm.",
			"Hauteur : 363 mm."
		],
		"limitations": [
			"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
			"La plage de pression utilisable reste distincte de la pression de mesure de la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 41",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Longueur",
			"value": "384 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Largeur",
			"value": "106 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Hauteur",
			"value": "363 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Masse",
			"value": "3,8 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "312 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p41",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=41",
			"sourceLabel": "senco-eu, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p41"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p41"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
