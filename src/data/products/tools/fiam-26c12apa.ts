const product = {
	"id": "fiam-26c12apa",
	"slug": "fiam-26c12apa",
	"brand": "Fiam",
	"model": "26C12APA",
	"mpn": "114814590",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 26C12APA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-26c12apa.webp",
		"alt": "Repères techniques Fiam 26C12APA, référence 114814590",
		"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-88.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 26C12APA, référence 114814590. Le tableau fabricant publie 420 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 400 tr/min. Masse publiée : 1.05 kg.",
		"verifiedFacts": [
			"Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"La brochure publie 7 L/s, soit 420 L/min après conversion × 60.",
			"Référence fabricant : 114814590.",
			"Vitesse à vide : 400 tr/min.",
			"Masse publiée : 1.05 kg."
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
				"fiam-114814590-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La brochure publie 7 L/s, soit 420 L/min après conversion × 60.",
			"evidenceIds": [
				"fiam-114814590-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "400 tr/min",
			"evidenceIds": [
				"fiam-114814590-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.05 kg",
			"evidenceIds": [
				"fiam-114814590-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114814590-20260926",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-88.pdf#page=8",
			"sourceLabel": "Fiam, brochure technique en-88, p. 8, réf. 114814590",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La brochure publie 7 L/s, soit 420 L/min après conversion × 60."
		},
		{
			"id": "fiam-114814590-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-88.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-88, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note explicitant les performances mesurées à 6,3 bar dans la brochure de la famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114814590-20260926"
		],
		"workingPressureBar": [
			"fiam-114814590-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114814590-20260926"
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
