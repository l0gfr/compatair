import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-shs50xp",
	"slug": "agrafeuse-cloueuse-senco-shs50xp",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SHS50XP",
	"brand": "Senco",
	"model": "SHS50XP",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-shs50xp.webp",
		"alt": "Repères techniques : Senco SHS50XP",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-shs50xp",
		"label": "SHS50XP",
		"distinguishingAttributes": {
			"Longueur": "381 mm",
			"Largeur": "89 mm",
			"Hauteur": "279 mm"
		}
	},
	"editorial": {
		"overview": "Senco SHS50XP. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 381 mm. Largeur : 89 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 26.",
			"Longueur : 381 mm.",
			"Largeur : 89 mm.",
			"Hauteur : 279 mm."
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
			"value": "Page PDF 26",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Longueur",
			"value": "381 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Largeur",
			"value": "89 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Hauteur",
			"value": "279 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Masse",
			"value": "2,3 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "90 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p26",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=26",
			"sourceLabel": "senco-eu, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p26"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p26"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
