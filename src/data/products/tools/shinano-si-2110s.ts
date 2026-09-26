const product = {
	"id": "shinano-si-2110s",
	"slug": "shinano-si-2110s",
	"brand": "Shinano",
	"model": "SI-2110S",
	"mpn": "SI-2110S",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2110S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2110s.webp",
		"alt": "Repères techniques Shinano SI-2110S, référence SI-2110S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2110S, référence SI-2110S. Le tableau fabricant publie 426 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Dimension du plateau publiée : 75 mm. Vitesse à vide publiée : 15 000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"Référence fabricant : SI-2110S.",
			"Dimension du plateau publiée : 75 mm.",
			"Vitesse à vide publiée : 15 000 tr/min."
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
				"shinano-si-2110s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"evidenceIds": [
				"shinano-si-2110s-20260926"
			]
		},
		{
			"label": "Dimension du plateau publiée",
			"value": "75 mm",
			"evidenceIds": [
				"shinano-si-2110s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"shinano-si-2110s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2110s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2110S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min."
		},
		{
			"id": "shinano-si-2110s-20260926-workingpressurebar-1",
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
			"shinano-si-2110s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2110s-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2110s-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 426,
		"typical": 426,
		"max": 426
	}
};

export default product;
