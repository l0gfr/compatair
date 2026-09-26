const product = {
	"id": "shinano-si-3004rm",
	"slug": "shinano-si-3004rm",
	"brand": "Shinano",
	"model": "SI-3004RM",
	"mpn": "SI-3004RM",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3004RM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3004rm.webp",
		"alt": "Repères techniques Shinano SI-3004RM, référence SI-3004RM",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3004RM, référence SI-3004RM. Le tableau fabricant publie 456 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Plateau rond autoagrippant 125 mm ; orbite 4 mm ; finition. Vitesse à vide publiée : 9000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3004RM.",
			"Version et équipement : Plateau rond autoagrippant 125 mm ; orbite 4 mm ; finition.",
			"Vitesse à vide publiée : 9000 tr/min.",
			"Masse publiée : 0.78 kg."
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
				"shinano-si-3004rm-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3004rm-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau rond autoagrippant 125 mm ; orbite 4 mm ; finition.",
			"evidenceIds": [
				"shinano-si-3004rm-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"shinano-si-3004rm-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.78 kg",
			"evidenceIds": [
				"shinano-si-3004rm-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3004rm-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3004RM",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3004rm-20260926-workingpressurebar-1",
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
			"shinano-si-3004rm-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3004rm-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3004rm-20260926"
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
