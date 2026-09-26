const product = {
	"id": "biax-t-6-50-s",
	"slug": "biax-t-6-50-s",
	"brand": "BIAX",
	"model": "T 6-50 S",
	"mpn": "150149820",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX T 6-50 S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-t-6-50-s.webp",
		"alt": "Repères techniques BIAX T 6-50 S, référence 150149820",
		"sourceUrl": "https://biax.de/en/product/t-6-50-s-olfrei-50-000-1-min-drehventil/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX T 6-50 S, référence 150149820. Le tableau fabricant publie 270 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : < 100 W. Vitesse de rotation : 50.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 270 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150149820.",
			"Puissance publiée : < 100 W.",
			"Vitesse de rotation : 50.000 tr/min.",
			"Masse publiée : 400 g."
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
				"biax-150149820-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 270 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150149820-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "< 100 W",
			"evidenceIds": [
				"biax-150149820-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "50.000 tr/min",
			"evidenceIds": [
				"biax-150149820-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "400 g",
			"evidenceIds": [
				"biax-150149820-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm",
			"evidenceIds": [
				"biax-150149820-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150149820-20260926",
			"sourceUrl": "https://biax.de/en/product/t-6-50-s-olfrei-50-000-1-min-drehventil/",
			"sourceLabel": "BIAX, fiche technique T 6-50 S – oilfree, 50.000 1/min, rotary valve, réf. 150149820",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 270 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150149820-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=8",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150149820-20260926"
		],
		"workingPressureBar": [
			"biax-150149820-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150149820-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	}
};

export default product;
