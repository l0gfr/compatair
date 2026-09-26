const product = {
	"id": "biax-bwh-6-25-2-k45",
	"slug": "biax-bwh-6-25-2-k45",
	"brand": "BIAX",
	"model": "BWH 6-25/2 K45",
	"mpn": "150222320",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BWH 6-25/2 K45",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bwh-6-25-2-k45.webp",
		"alt": "Repères techniques BIAX BWH 6-25/2 K45, référence 150222320",
		"sourceUrl": "https://biax.de/en/product/bwh-6-25-2-k45/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX BWH 6-25/2 K45, référence 150222320. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 2.500 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150222320.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 2.500 tr/min.",
			"Masse publiée : 1240 g."
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
				"biax-150222320-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2.500 tr/min",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1240 g",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150222320-20260926",
			"sourceUrl": "https://biax.de/en/product/bwh-6-25-2-k45/",
			"sourceLabel": "BIAX, fiche technique BWH 6-25/2 K45, réf. 150222320",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150222320-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=55",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150222320-20260926"
		],
		"workingPressureBar": [
			"biax-150222320-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150222320-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	}
};

export default product;
