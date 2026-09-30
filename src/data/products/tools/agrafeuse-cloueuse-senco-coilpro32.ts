const product = {
	"id": "agrafeuse-cloueuse-senco-coilpro32",
	"slug": "agrafeuse-cloueuse-senco-coilpro32",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco CoilPro32",
	"brand": "Senco",
	"model": "CoilPro32",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7.5
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-coilpro32.webp",
		"alt": "Repères techniques : Senco CoilPro32",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-coilpro32",
		"label": "CoilPro32",
		"distinguishingAttributes": {
			"Longueur": "212 mm",
			"Largeur": "110 mm",
			"Hauteur": "257 mm"
		}
	},
	"editorial": {
		"overview": "Senco CoilPro32. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 212 mm. Largeur : 110 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 63.",
			"Longueur : 212 mm.",
			"Largeur : 110 mm.",
			"Hauteur : 257 mm."
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
			"value": "Page PDF 63",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Longueur",
			"value": "212 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Largeur",
			"value": "110 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Hauteur",
			"value": "257 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "40,2 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p63",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=63",
			"sourceLabel": "senco-eu, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p63"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p63"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
