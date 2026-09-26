const product = {
	"id": "biax-sbrd-8-12-2",
	"slug": "biax-sbrd-8-12-2",
	"brand": "BIAX",
	"model": "SBRD 8-12/2",
	"mpn": "150020750",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRD 8-12/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrd-8-12-2.webp",
		"alt": "Repères techniques BIAX SBRD 8-12/2, référence 150020750",
		"sourceUrl": "https://biax.de/en/product/sbrd-8-12-2-12-000-1-min-zweihandschl/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SBRD 8-12/2, référence 150020750. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 12.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150020750.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 12.000 tr/min.",
			"Masse publiée : 1100 g."
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
				"biax-150020750-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150020750-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150020750-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "12.000 tr/min",
			"evidenceIds": [
				"biax-150020750-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1100 g",
			"evidenceIds": [
				"biax-150020750-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150020750-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150020750-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrd-8-12-2-12-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRD 8-12/2 – 12.000 1/min – two hands, réf. 150020750",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150020750-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150020750-20260926"
		],
		"workingPressureBar": [
			"biax-150020750-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150020750-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	}
};

export default product;
