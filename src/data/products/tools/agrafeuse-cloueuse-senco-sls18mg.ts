import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-sls18mg",
	"slug": "agrafeuse-cloueuse-senco-sls18mg",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SLS18MG",
	"brand": "Senco",
	"model": "SLS18MG",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sls18mg.webp",
		"alt": "Repères techniques : Senco SLS18MG",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sls18mg",
		"label": "SLS18MG",
		"distinguishingAttributes": {
			"Longueur": "260 mm",
			"Largeur": "64 mm",
			"Hauteur": "241 mm"
		}
	},
	"editorial": {
		"overview": "Senco SLS18MG. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 260 mm. Largeur : 64 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 28.",
			"Longueur : 260 mm.",
			"Largeur : 64 mm.",
			"Hauteur : 241 mm."
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
			"value": "Page PDF 28",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Longueur",
			"value": "260 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Largeur",
			"value": "64 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Hauteur",
			"value": "241 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "68 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p28",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=28",
			"sourceLabel": "senco-eu, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p28"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p28"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
