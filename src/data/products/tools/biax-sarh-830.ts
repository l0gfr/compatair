const product = {
	"id": "biax-sarh-830",
	"slug": "biax-sarh-830",
	"brand": "BIAX",
	"model": "SARH 830",
	"mpn": "150012015",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SARH 830",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sarh-830.webp",
		"alt": "Repères techniques BIAX SARH 830, référence 150012015",
		"sourceUrl": "https://biax.de/en/product/sarh-830-30-000-1-min-extra-robust/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SARH 830, référence 150012015. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 260 W. Vitesse de rotation : 30.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150012015.",
			"Puissance publiée : 260 W.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 520 g."
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
				"biax-150012015-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150012015-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "260 W",
			"evidenceIds": [
				"biax-150012015-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150012015-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "520 g",
			"evidenceIds": [
				"biax-150012015-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150012015-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150012015-20260926",
			"sourceUrl": "https://biax.de/en/product/sarh-830-30-000-1-min-extra-robust/",
			"sourceLabel": "BIAX, fiche technique SARH 830 – 30.000 1/min, extra strong, réf. 150012015",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150012015-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=19",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 19",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150012015-20260926"
		],
		"workingPressureBar": [
			"biax-150012015-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150012015-20260926"
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
