const product = {
	"id": "shinano-si-3102m",
	"slug": "shinano-si-3102m",
	"brand": "Shinano",
	"model": "SI-3102M",
	"mpn": "SI-3102M",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3102M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3102m.webp",
		"alt": "Repères techniques Shinano SI-3102M, référence SI-3102M",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3102M, référence SI-3102M. Le tableau fabricant publie 426 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Dimension du plateau publiée : 75 mm. Vitesse à vide publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"Référence fabricant : SI-3102M.",
			"Dimension du plateau publiée : 75 mm.",
			"Vitesse à vide publiée : 12 000 tr/min.",
			"Masse publiée : 0,54 kg."
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
				"shinano-si-3102m-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"evidenceIds": [
				"shinano-si-3102m-20260926"
			]
		},
		{
			"label": "Dimension du plateau publiée",
			"value": "75 mm",
			"evidenceIds": [
				"shinano-si-3102m-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"shinano-si-3102m-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,54 kg",
			"evidenceIds": [
				"shinano-si-3102m-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3102m-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Shinano, catalogue général 2025, p. 12, réf. SI-3102M",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min."
		},
		{
			"id": "shinano-si-3102m-20260926-workingpressurebar-1",
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
			"shinano-si-3102m-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3102m-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3102m-20260926"
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
