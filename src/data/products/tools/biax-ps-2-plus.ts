const product = {
	"id": "biax-ps-2-plus",
	"slug": "biax-ps-2-plus",
	"brand": "BIAX",
	"model": "PS 2 PLUS",
	"mpn": "150322922",
	"categoryId": "scie",
	"category": "scie",
	"label": "BIAX PS 2 PLUS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-ps-2-plus.webp",
		"alt": "Repères techniques BIAX PS 2 PLUS, référence 150322922",
		"sourceUrl": "https://biax.de/en/product/ps-2-plus-das-leichtgewicht/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX PS 2 PLUS, référence 150322922. Le tableau fabricant publie 250 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 280 W. Masse publiée : 720 g.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150322922.",
			"Puissance publiée : 280 W.",
			"Masse publiée : 720 g.",
			"Diamètre maximal de queue : 4 mm."
		],
		"limitations": [
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150322922-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150322922-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "280 W",
			"evidenceIds": [
				"biax-150322922-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "720 g",
			"evidenceIds": [
				"biax-150322922-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "4 mm",
			"evidenceIds": [
				"biax-150322922-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150322922-20260926",
			"sourceUrl": "https://biax.de/en/product/ps-2-plus-das-leichtgewicht/",
			"sourceLabel": "BIAX, fiche technique PS 2 PLUS – the lightweight, réf. 150322922",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150322922-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=61",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 61",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150322922-20260926"
		],
		"workingPressureBar": [
			"biax-150322922-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150322922-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	}
};

export default product;
