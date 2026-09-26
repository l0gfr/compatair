const product = {
	"id": "biax-tsd-385",
	"slug": "biax-tsd-385",
	"brand": "BIAX",
	"model": "TSD 385",
	"mpn": "150001710",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX TSD 385",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-tsd-385.webp",
		"alt": "Repères techniques BIAX TSD 385, référence 150001710",
		"sourceUrl": "https://biax.de/en/product/tsd-385-olfrei-85-000-1-min-drehventil/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX TSD 385, référence 150001710. Le tableau fabricant publie 170 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : < 100 W. Vitesse de rotation : 85.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 170 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150001710.",
			"Puissance publiée : < 100 W.",
			"Vitesse de rotation : 85.000 tr/min.",
			"Masse publiée : 190 g."
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
				"biax-150001710-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 170 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150001710-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "< 100 W",
			"evidenceIds": [
				"biax-150001710-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "85.000 tr/min",
			"evidenceIds": [
				"biax-150001710-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "190 g",
			"evidenceIds": [
				"biax-150001710-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "3 mm",
			"evidenceIds": [
				"biax-150001710-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150001710-20260926",
			"sourceUrl": "https://biax.de/en/product/tsd-385-olfrei-85-000-1-min-drehventil/",
			"sourceLabel": "BIAX, fiche technique TSD 385 – oilfree, 85.000 1/min, rotary valve, réf. 150001710",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 170 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150001710-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=7",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150001710-20260926"
		],
		"workingPressureBar": [
			"biax-150001710-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150001710-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	}
};

export default product;
