const product = {
	"id": "shinano-si-ag20e-6r-6",
	"slug": "shinano-si-ag20e-6r-6",
	"brand": "Shinano",
	"model": "SI-AG20E-6R-6",
	"mpn": "SI-AG20E-6R-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-AG20E-6R-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-ag20e-6r-6.webp",
		"alt": "Repères techniques Shinano SI-AG20E-6R-6, référence SI-AG20E-6R-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_Industrial-Air-Tools_2025.pdf#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-AG20E-6R-6, référence SI-AG20E-6R-6. Le tableau fabricant publie 315 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 20000 tr/min. Puissance moteur publiée : 160 W.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation fabricant publiée : 5.25 L/s, soit 315 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum.",
			"Référence fabricant : SI-AG20E-6R-6.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Puissance moteur publiée : 160 W.",
			"Montage et commande : Pince 6 mm ; commande rotative."
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
				"shinano-si-ag20e-6r-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation fabricant publiée : 5.25 L/s, soit 315 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum.",
			"evidenceIds": [
				"shinano-si-ag20e-6r-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"shinano-si-ag20e-6r-6-20260926"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "160 W",
			"evidenceIds": [
				"shinano-si-ag20e-6r-6-20260926"
			]
		},
		{
			"label": "Montage et commande",
			"value": "Pince 6 mm ; commande rotative.",
			"evidenceIds": [
				"shinano-si-ag20e-6r-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "700 g",
			"evidenceIds": [
				"shinano-si-ag20e-6r-6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-ag20e-6r-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_Industrial-Air-Tools_2025.pdf#page=7",
			"sourceLabel": "Shinano, Industrial Air Tools 2025, p. 7, réf. SI-AG20E-6R-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation fabricant publiée : 5.25 L/s, soit 315 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum."
		},
		{
			"id": "shinano-si-ag20e-6r-6-20260926-workingpressurebar-1",
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
			"shinano-si-ag20e-6r-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-ag20e-6r-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-ag20e-6r-6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 315,
		"typical": 315,
		"max": 315
	}
};

export default product;
