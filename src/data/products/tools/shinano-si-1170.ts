const product = {
	"id": "shinano-si-1170",
	"slug": "shinano-si-1170",
	"brand": "Shinano",
	"model": "SI-1170",
	"mpn": "SI-1170",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1170",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1170.webp",
		"alt": "Repères techniques Shinano SI-1170, référence SI-1170",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1170, référence SI-1170. Le tableau fabricant publie 390 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 20 Nm. Vitesse à vide publiée : 700 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"Référence fabricant : SI-1170.",
			"Couple maximal publié : 20 Nm.",
			"Vitesse à vide publiée : 700 tr/min.",
			"Masse publiée : 0,85 kg."
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
				"shinano-si-1170-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"evidenceIds": [
				"shinano-si-1170-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "20 Nm",
			"evidenceIds": [
				"shinano-si-1170-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "700 tr/min",
			"evidenceIds": [
				"shinano-si-1170-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,85 kg",
			"evidenceIds": [
				"shinano-si-1170-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1170-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Shinano, catalogue général 2025, p. 8, réf. SI-1170",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min."
		},
		{
			"id": "shinano-si-1170-20260926-workingpressurebar-1",
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
			"shinano-si-1170-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1170-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1170-20260926"
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
