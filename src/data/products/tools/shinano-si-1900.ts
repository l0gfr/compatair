const product = {
	"id": "shinano-si-1900",
	"slug": "shinano-si-1900",
	"brand": "Shinano",
	"model": "SI-1900",
	"mpn": "SI-1900",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1900",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1900.webp",
		"alt": "Repères techniques Shinano SI-1900, référence SI-1900",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1900, référence SI-1900. Le tableau fabricant publie 2 256 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Commande extérieure ; carré 1 1/2 pouce ; couple maximal publié 5500 Nm. Vitesse à vide publiée : 3600 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 79.7 CFM / 37.6 L/s, soit 2256 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-1900.",
			"Version et équipement : Commande extérieure ; carré 1 1/2 pouce ; couple maximal publié 5500 Nm.",
			"Vitesse à vide publiée : 3600 tr/min.",
			"Masse publiée : 18 kg."
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
				"shinano-si-1900-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 79.7 CFM / 37.6 L/s, soit 2256 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-1900-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Commande extérieure ; carré 1 1/2 pouce ; couple maximal publié 5500 Nm.",
			"evidenceIds": [
				"shinano-si-1900-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3600 tr/min",
			"evidenceIds": [
				"shinano-si-1900-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "18 kg",
			"evidenceIds": [
				"shinano-si-1900-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1900-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
			"sourceLabel": "Shinano, catalogue général 2025, p. 6, réf. SI-1900",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 79.7 CFM / 37.6 L/s, soit 2256 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-1900-20260926-workingpressurebar-1",
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
			"shinano-si-1900-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1900-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1900-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 2256,
		"typical": 2256,
		"max": 2256
	}
};

export default product;
