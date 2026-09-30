const product = {
	"id": "agrafeuse-cloueuse-senco-scn650",
	"slug": "agrafeuse-cloueuse-senco-scn650",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco SCN650",
	"brand": "Senco",
	"model": "SCN650",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-scn650.webp",
		"alt": "Repères techniques : Senco SCN650",
		"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-scn650",
		"label": "SCN650",
		"distinguishingAttributes": {
			"Longueur": "316 mm",
			"Largeur": "145 mm",
			"Hauteur": "300 mm"
		}
	},
	"editorial": {
		"overview": "Senco SCN650. Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner. Longueur : 316 mm. Largeur : 145 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 64.",
			"Longueur : 316 mm.",
			"Largeur : 145 mm.",
			"Hauteur : 300 mm."
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
			"value": "Page PDF 64",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Longueur",
			"value": "316 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Largeur",
			"value": "145 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Hauteur",
			"value": "300 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Masse",
			"value": "2,3 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "106 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p64"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p64",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=64",
			"sourceLabel": "senco-eu, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"documented-d-senco-eu-p64"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p64"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
