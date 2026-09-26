const product = {
	"id": "shinano-si-1460",
	"slug": "shinano-si-1460",
	"brand": "Shinano",
	"model": "SI-1460",
	"mpn": "SI-1460",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1460",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1460.webp",
		"alt": "Repères techniques Shinano SI-1460, référence SI-1460",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1460, référence SI-1460. Le tableau fabricant publie 864 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Carré 1/2 pouce ; couple maximal publié 850 Nm ; version sans suffixe SR. Masse publiée : 1.57 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-1460.",
			"Version et équipement : Carré 1/2 pouce ; couple maximal publié 850 Nm ; version sans suffixe SR.",
			"Masse publiée : 1.57 kg.",
			"Vitesses à vide : 8000 tr/min avant ; 8500 tr/min arrière."
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
				"shinano-si-1460-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-1460-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Carré 1/2 pouce ; couple maximal publié 850 Nm ; version sans suffixe SR.",
			"evidenceIds": [
				"shinano-si-1460-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.57 kg",
			"evidenceIds": [
				"shinano-si-1460-20260926"
			]
		},
		{
			"label": "Vitesses à vide",
			"value": "8000 tr/min avant ; 8500 tr/min arrière",
			"evidenceIds": [
				"shinano-si-1460-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1460-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1460",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-1460-20260926-workingpressurebar-1",
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
			"shinano-si-1460-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1460-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1460-20260926"
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
