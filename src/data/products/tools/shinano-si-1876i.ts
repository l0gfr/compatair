const product = {
	"id": "shinano-si-1876i",
	"slug": "shinano-si-1876i",
	"brand": "Shinano",
	"model": "SI-1876I",
	"mpn": "SI-1876I",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1876I",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1876i.webp",
		"alt": "Repères techniques Shinano SI-1876I, référence SI-1876I",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1876I, référence SI-1876I. Le tableau fabricant publie 1 950 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Commande intérieure ; carré 1 pouce ; couple maximal publié 2300 Nm. Enclume allongée de 6 pouces. Vitesse à vide publiée : 4400 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 69 CFM / 32.5 L/s, soit 1950 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-1876I.",
			"Version et équipement : Commande intérieure ; carré 1 pouce ; couple maximal publié 2300 Nm. Enclume allongée de 6 pouces.",
			"Vitesse à vide publiée : 4400 tr/min.",
			"Masse publiée : 12.1 kg."
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
				"shinano-si-1876i-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 69 CFM / 32.5 L/s, soit 1950 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-1876i-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Commande intérieure ; carré 1 pouce ; couple maximal publié 2300 Nm. Enclume allongée de 6 pouces.",
			"evidenceIds": [
				"shinano-si-1876i-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "4400 tr/min",
			"evidenceIds": [
				"shinano-si-1876i-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "12.1 kg",
			"evidenceIds": [
				"shinano-si-1876i-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1876i-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
			"sourceLabel": "Shinano, catalogue général 2025, p. 6, réf. SI-1876I",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 69 CFM / 32.5 L/s, soit 1950 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-1876i-20260926-workingpressurebar-1",
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
			"shinano-si-1876i-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1876i-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1876i-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1950,
		"typical": 1950,
		"max": 1950
	}
};

export default product;
