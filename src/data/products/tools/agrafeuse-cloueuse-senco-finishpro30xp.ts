import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-finishpro30xp",
	"slug": "agrafeuse-cloueuse-senco-finishpro30xp",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco FinishPro30XP",
	"brand": "Senco",
	"model": "FinishPro30XP",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-finishpro30xp.webp",
		"alt": "Repères techniques : Senco FinishPro30XP",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-finishpro30xp",
		"label": "FinishPro30XP",
		"distinguishingAttributes": {
			"Longueur": "305 mm",
			"Largeur": "83 mm",
			"Hauteur": "244 mm"
		}
	},
	"editorial": {
		"overview": "Senco FinishPro30XP. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 305 mm. Largeur : 83 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 47.",
			"Longueur : 305 mm.",
			"Largeur : 83 mm.",
			"Hauteur : 244 mm."
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
			"value": "Page PDF 47",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Longueur",
			"value": "305 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Largeur",
			"value": "83 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Hauteur",
			"value": "244 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "61 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p47"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p47",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=47",
			"sourceLabel": "senco-eu, page PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p47"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p47"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
