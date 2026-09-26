const product = {
	"id": "shinano-si-1492b",
	"slug": "shinano-si-1492b",
	"brand": "Shinano",
	"model": "SI-1492B",
	"mpn": "SI-1492B",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1492B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1492b.webp",
		"alt": "Repères techniques Shinano SI-1492B, référence SI-1492B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1492B, référence SI-1492B. Le tableau fabricant publie 864 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,94 kg. Montage : Carré 1/2 pouce ; enclume allongée de 2 pouces.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"Référence fabricant : SI-1492B.",
			"Masse publiée : 1,94 kg.",
			"Montage : Carré 1/2 pouce ; enclume allongée de 2 pouces.",
			"Couple maximal publié : 830 Nm."
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
				"shinano-si-1492b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,94 kg",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Montage",
			"value": "Carré 1/2 pouce ; enclume allongée de 2 pouces",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "830 Nm",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1492b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1492B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min."
		},
		{
			"id": "shinano-si-1492b-20260926-workingpressurebar-1",
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
			"shinano-si-1492b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1492b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1492b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 864,
		"typical": 864,
		"max": 864
	}
};

export default product;
