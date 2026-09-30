const product = {
	"id": "agrafeuse-cloueuse-senco-sns41",
	"slug": "agrafeuse-cloueuse-senco-sns41",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SNS41",
	"brand": "Senco",
	"model": "SNS41",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5.5,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sns41.webp",
		"alt": "Repères techniques : Senco SNS41",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sns41",
		"label": "SNS41",
		"distinguishingAttributes": {
			"Longueur": "381 mm",
			"Largeur": "75 mm",
			"Hauteur": "273 mm"
		}
	},
	"editorial": {
		"overview": "Senco SNS41. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 381 mm. Largeur : 75 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 29.",
			"Longueur : 381 mm.",
			"Largeur : 75 mm.",
			"Hauteur : 273 mm."
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
			"value": "Page PDF 29",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Longueur",
			"value": "381 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Largeur",
			"value": "75 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Hauteur",
			"value": "273 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Masse",
			"value": "2,1 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "153 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p29",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=29",
			"sourceLabel": "senco-eu, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p29"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p29"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
