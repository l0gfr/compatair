import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-sn90fxp",
	"slug": "agrafeuse-cloueuse-senco-sn90fxp",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SN90FXP",
	"brand": "Senco",
	"model": "SN90FXP",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sn90fxp.webp",
		"alt": "Repères techniques : Senco SN90FXP",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sn90fxp",
		"label": "SN90FXP",
		"distinguishingAttributes": {
			"Longueur": "508 mm",
			"Largeur": "106 mm",
			"Hauteur": "337 mm"
		}
	},
	"editorial": {
		"overview": "Senco SN90FXP. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 508 mm. Largeur : 106 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 40.",
			"Longueur : 508 mm.",
			"Largeur : 106 mm.",
			"Hauteur : 337 mm."
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
			"value": "Page PDF 40",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Longueur",
			"value": "508 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Largeur",
			"value": "106 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Hauteur",
			"value": "337 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Masse",
			"value": "3,8 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "283 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p40",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=40",
			"sourceLabel": "senco-eu, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p40"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p40"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
