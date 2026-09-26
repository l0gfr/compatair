const product = {
	"id": "shinano-si-5405-6",
	"slug": "shinano-si-5405-6",
	"brand": "Shinano",
	"model": "SI-5405-6",
	"mpn": "SI-5405-6",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5405-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5405-6.webp",
		"alt": "Repères techniques Shinano SI-5405-6, référence SI-5405-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-5405-6, référence SI-5405-6. Le tableau fabricant publie 390 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 600 tr/min. Capacité du mandrin : 13 mm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"Référence fabricant : SI-5405-6.",
			"Vitesse à vide publiée : 600 tr/min.",
			"Capacité du mandrin : 13 mm.",
			"Couple maximal publié : 10.58 Nm."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-5405-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "600 tr/min",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "13 mm",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "10.58 Nm",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,41 kg",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5405-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5405-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min."
		},
		{
			"id": "shinano-si-5405-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-5405-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5405-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-5405-6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	}
};

export default product;
