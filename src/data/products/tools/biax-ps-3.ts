const product = {
	"id": "biax-ps-3",
	"slug": "biax-ps-3",
	"brand": "BIAX",
	"model": "PS 3",
	"mpn": "150322921",
	"categoryId": "scie",
	"category": "scie",
	"label": "BIAX PS 3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-ps-3.webp",
		"alt": "Repères techniques BIAX PS 3, référence 150322921",
		"sourceUrl": "https://biax.de/en/product/ps-3-vibrationsgedampft/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX PS 3, référence 150322921. Le tableau fabricant publie 250 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Masse publiée : 980 g.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150322921.",
			"Puissance publiée : 300 W.",
			"Masse publiée : 980 g.",
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
				"biax-150322921-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150322921-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150322921-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "980 g",
			"evidenceIds": [
				"biax-150322921-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "4 mm",
			"evidenceIds": [
				"biax-150322921-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150322921-20260926",
			"sourceUrl": "https://biax.de/en/product/ps-3-vibrationsgedampft/",
			"sourceLabel": "BIAX, fiche technique PS 3 – Vibration dampened, réf. 150322921",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150322921-20260926-workingpressurebar-1",
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
			"biax-150322921-20260926"
		],
		"workingPressureBar": [
			"biax-150322921-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150322921-20260926"
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
