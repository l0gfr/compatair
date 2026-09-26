const product = {
	"id": "shinano-si-2500l",
	"slug": "shinano-si-2500l",
	"brand": "Shinano",
	"model": "SI-2500L",
	"mpn": "SI-2500L",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2500L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2500l.webp",
		"alt": "Repères techniques Shinano SI-2500L, référence SI-2500L",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2500L, référence SI-2500L. Le tableau fabricant publie 456 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 12 700 tr/min. Masse publiée : 1,82 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 16.2 CFM / 7.6 L/s. Conversion du maximum publié : 7.6 × 60 = 456 L/min.",
			"Référence fabricant : SI-2500L.",
			"Vitesse à vide publiée : 12 700 tr/min.",
			"Masse publiée : 1,82 kg."
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
				"shinano-si-2500l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 16.2 CFM / 7.6 L/s. Conversion du maximum publié : 7.6 × 60 = 456 L/min.",
			"evidenceIds": [
				"shinano-si-2500l-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12 700 tr/min",
			"evidenceIds": [
				"shinano-si-2500l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,82 kg",
			"evidenceIds": [
				"shinano-si-2500l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2500l-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Shinano, catalogue général 2025, p. 20, réf. SI-2500L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 16.2 CFM / 7.6 L/s. Conversion du maximum publié : 7.6 × 60 = 456 L/min."
		},
		{
			"id": "shinano-si-2500l-20260926-workingpressurebar-1",
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
			"shinano-si-2500l-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2500l-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2500l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 456,
		"typical": 456,
		"max": 456
	}
};

export default product;
