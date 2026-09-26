const product = {
	"id": "fiam-cy9ram-wp",
	"slug": "fiam-cy9ram-wp",
	"brand": "Fiam",
	"model": "CY9RAM-WP",
	"mpn": "116514109",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam CY9RAM-WP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-cy9ram-wp.webp",
		"alt": "Repères techniques Fiam CY9RAM-WP, référence 116514109",
		"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-24.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CY9RAM-WP, référence 116514109. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 700 tr/min. Masse publiée : 1.67 kg.",
		"verifiedFacts": [
			"Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"La brochure publie 10 L/s, soit 600 L/min après conversion × 60.",
			"Référence fabricant : 116514109.",
			"Vitesse à vide : 700 tr/min.",
			"Masse publiée : 1.67 kg."
		],
		"limitations": [
			"Les caractéristiques proviennent de la brochure fabricant, la fiche HTML ne renseignant pas la consommation.",
			"Une consommation à vide n’est pas une mesure de tous les régimes en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"evidenceIds": [
				"fiam-116514109-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La brochure publie 10 L/s, soit 600 L/min après conversion × 60.",
			"evidenceIds": [
				"fiam-116514109-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "700 tr/min",
			"evidenceIds": [
				"fiam-116514109-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.67 kg",
			"evidenceIds": [
				"fiam-116514109-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-116514109-20260926",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-24.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-24, p. 4, réf. 116514109",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La brochure publie 10 L/s, soit 600 L/min après conversion × 60."
		},
		{
			"id": "fiam-116514109-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-24.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-24, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note explicitant les performances mesurées à 6,3 bar dans la brochure de la famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-116514109-20260926"
		],
		"workingPressureBar": [
			"fiam-116514109-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-116514109-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
