const product = {
	"id": "shinano-si-5505",
	"slug": "shinano-si-5505",
	"brand": "Shinano",
	"model": "SI-5505",
	"mpn": "SI-5505",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5505",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5505.webp",
		"alt": "Repères techniques Shinano SI-5505, référence SI-5505",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-5505, référence SI-5505. Le tableau fabricant publie 444 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 1 900 tr/min. Capacité du mandrin : 10 mm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min.",
			"Référence fabricant : SI-5505.",
			"Vitesse à vide publiée : 1 900 tr/min.",
			"Capacité du mandrin : 10 mm.",
			"Masse publiée : 0,75 kg."
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
				"shinano-si-5505-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min.",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1 900 tr/min",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,75 kg",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5505-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5505",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min."
		},
		{
			"id": "shinano-si-5505-20260926-workingpressurebar-1",
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
			"shinano-si-5505-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5505-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-5505-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 444,
		"typical": 444,
		"max": 444
	}
};

export default product;
