const product = {
	"id": "biax-bew-606-k",
	"slug": "biax-bew-606-k",
	"brand": "BIAX",
	"model": "BEW 606 K",
	"mpn": "150810927",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BEW 606 K",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bew-606-k.webp",
		"alt": "Repères techniques BIAX BEW 606 K, référence 150810927",
		"sourceUrl": "https://biax.de/en/product/bew-606-k-bis-senk-o-14-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX BEW 606 K, référence 150810927. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 80 W. Vitesse de rotation : adjustable 0-600 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150810927.",
			"Puissance publiée : 80 W.",
			"Vitesse de rotation : adjustable 0-600 tr/min.",
			"Masse publiée : 630 g."
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
				"biax-150810927-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150810927-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "80 W",
			"evidenceIds": [
				"biax-150810927-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "adjustable 0-600 tr/min",
			"evidenceIds": [
				"biax-150810927-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"biax-150810927-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm hexagonal mm",
			"evidenceIds": [
				"biax-150810927-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150810927-20260926",
			"sourceUrl": "https://biax.de/en/product/bew-606-k-bis-senk-o-14-mm/",
			"sourceLabel": "BIAX, fiche technique BEW 606 K – up to sink-Ø 14 mm, réf. 150810927",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810927-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150810927-20260926"
		],
		"workingPressureBar": [
			"biax-150810927-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150810927-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	}
};

export default product;
