const product = {
	"id": "biax-srh-8-10",
	"slug": "biax-srh-8-10",
	"brand": "BIAX",
	"model": "SRH 8-10",
	"mpn": "150010980",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRH 8-10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srh-8-10.webp",
		"alt": "Repères techniques BIAX SRH 8-10, référence 150010980",
		"sourceUrl": "https://biax.de/en/product/srh-8-10-10-000-1-min/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRH 8-10, référence 150010980. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 280 W. Vitesse de rotation : 10.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150010980.",
			"Puissance publiée : 280 W.",
			"Vitesse de rotation : 10.000 tr/min.",
			"Masse publiée : 645 g."
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
				"biax-150010980-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150010980-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "280 W",
			"evidenceIds": [
				"biax-150010980-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "10.000 tr/min",
			"evidenceIds": [
				"biax-150010980-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "645 g",
			"evidenceIds": [
				"biax-150010980-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150010980-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150010980-20260926",
			"sourceUrl": "https://biax.de/en/product/srh-8-10-10-000-1-min/",
			"sourceLabel": "BIAX, fiche technique SRH 8-10 – 10.000 1/min, lever valve, réf. 150010980",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150010980-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=56",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 56",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150010980-20260926"
		],
		"workingPressureBar": [
			"biax-150010980-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150010980-20260926"
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
