import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-sls25xp",
	"slug": "agrafeuse-cloueuse-senco-sls25xp",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SLS25XP",
	"brand": "Senco",
	"model": "SLS25XP",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sls25xp.webp",
		"alt": "Repères techniques : Senco SLS25XP",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sls25xp",
		"label": "SLS25XP",
		"distinguishingAttributes": {
			"Longueur": "305 mm",
			"Largeur": "51 mm",
			"Hauteur": "229 mm"
		}
	},
	"editorial": {
		"overview": "Senco SLS25XP. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 305 mm. Largeur : 51 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 25.",
			"Longueur : 305 mm.",
			"Largeur : 51 mm.",
			"Hauteur : 229 mm."
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
			"value": "Page PDF 25",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Longueur",
			"value": "305 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Largeur",
			"value": "51 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Hauteur",
			"value": "229 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "54 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p25",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=25",
			"sourceLabel": "senco-eu, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p25"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p25"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
