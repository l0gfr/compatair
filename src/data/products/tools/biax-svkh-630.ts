const product = {
	"id": "biax-svkh-630",
	"slug": "biax-svkh-630",
	"brand": "BIAX",
	"model": "SVKH 630",
	"mpn": "150011850",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SVKH 630",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-svkh-630.webp",
		"alt": "Repères techniques BIAX SVKH 630, référence 150011850",
		"sourceUrl": "https://biax.de/en/product/svkh-630-30-000-1-min-kurze-ausf/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SVKH 630, référence 150011850. Le tableau fabricant publie 420 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 260 W. Vitesse de rotation : 30.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150011850.",
			"Puissance publiée : 260 W.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 360 g."
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
				"biax-150011850-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150011850-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "260 W",
			"evidenceIds": [
				"biax-150011850-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150011850-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "360 g",
			"evidenceIds": [
				"biax-150011850-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150011850-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150011850-20260926",
			"sourceUrl": "https://biax.de/en/product/svkh-630-30-000-1-min-kurze-ausf/",
			"sourceLabel": "BIAX, fiche technique SVKH 630 – 30.000 1/min, short version, réf. 150011850",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150011850-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=20",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150011850-20260926"
		],
		"workingPressureBar": [
			"biax-150011850-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150011850-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
