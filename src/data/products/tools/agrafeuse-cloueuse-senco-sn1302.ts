const product = {
	"id": "agrafeuse-cloueuse-senco-sn1302",
	"slug": "agrafeuse-cloueuse-senco-sn1302",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SN1302",
	"brand": "Senco",
	"model": "SN1302",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-sn1302.webp",
		"alt": "Repères techniques : Senco SN1302",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-sn1302",
		"label": "SN1302",
		"distinguishingAttributes": {
			"Longueur": "533 mm",
			"Largeur": "144 mm",
			"Hauteur": "478 mm"
		}
	},
	"editorial": {
		"overview": "Senco SN1302. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 533 mm. Largeur : 144 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 42.",
			"Longueur : 533 mm.",
			"Largeur : 144 mm.",
			"Hauteur : 478 mm."
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
			"value": "Page PDF 42",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Longueur",
			"value": "533 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Largeur",
			"value": "144 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Hauteur",
			"value": "478 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Masse",
			"value": "6,2 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "255 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p42",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=42",
			"sourceLabel": "senco-eu, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p42"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p42"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
