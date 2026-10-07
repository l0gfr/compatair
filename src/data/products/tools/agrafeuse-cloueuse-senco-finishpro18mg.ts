import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-finishpro18mg",
	"slug": "agrafeuse-cloueuse-senco-finishpro18mg",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco FinishPro18Mg",
	"brand": "Senco",
	"model": "FinishPro18Mg",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-finishpro18mg.webp",
		"alt": "Repères techniques : Senco FinishPro18Mg",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-finishpro18mg",
		"label": "FinishPro18Mg",
		"distinguishingAttributes": {
			"Longueur": "267 mm",
			"Largeur": "64 mm",
			"Hauteur": "248 mm"
		}
	},
	"editorial": {
		"overview": "Senco FinishPro18Mg. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 267 mm. Largeur : 64 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 48.",
			"Longueur : 267 mm.",
			"Largeur : 64 mm.",
			"Hauteur : 248 mm."
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
			"value": "Page PDF 48",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Longueur",
			"value": "267 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Largeur",
			"value": "64 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Hauteur",
			"value": "248 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Masse",
			"value": "1,1 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "68 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p48"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p48",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=48",
			"sourceLabel": "senco-eu, page PDF 48",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p48"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p48"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
