const product = {
	"id": "agrafeuse-cloueuse-senco-sft10xp-dl",
	"slug": "agrafeuse-cloueuse-senco-sft10xp-dl",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SFT10XP-DL",
	"brand": "Senco",
	"model": "SFT10XP-DL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.1,
		"max": 6.5
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sft10xp-dl.webp",
		"alt": "Repères techniques : Senco SFT10XP-DL",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sft10xp-dl",
		"label": "SFT10XP-DL",
		"distinguishingAttributes": {
			"Longueur": "375mm",
			"Largeur": "42 mm",
			"Hauteur": "167 mm"
		}
	},
	"editorial": {
		"overview": "Senco SFT10XP-DL. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 375mm. Largeur : 42 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 24.",
			"Longueur : 375mm.",
			"Largeur : 42 mm.",
			"Hauteur : 167 mm."
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
			"value": "Page PDF 24",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Longueur",
			"value": "375mm",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Hauteur",
			"value": "167 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Masse",
			"value": "1,0 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "19,8 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p24",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=24",
			"sourceLabel": "senco-eu, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p24"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p24"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
