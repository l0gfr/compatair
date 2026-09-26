const product = {
	"id": "fiam-csi12",
	"slug": "fiam-csi12",
	"brand": "Fiam",
	"model": "CSI12",
	"mpn": "114820112",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Fiam CSI12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-csi12.webp",
		"alt": "Repères techniques Fiam CSI12, référence 114820112",
		"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam CSI12, référence 114820112. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 2200 tr/min. Masse publiée : 0.98 kg.",
		"verifiedFacts": [
			"Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60.",
			"Référence fabricant : 114820112.",
			"Vitesse à vide : 2200 tr/min.",
			"Masse publiée : 0.98 kg."
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
				"fiam-114820112-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60.",
			"evidenceIds": [
				"fiam-114820112-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2200 tr/min",
			"evidenceIds": [
				"fiam-114820112-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.98 kg",
			"evidenceIds": [
				"fiam-114820112-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114820112-20260926",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4, réf. 114820112",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60."
		},
		{
			"id": "fiam-114820112-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note explicitant les performances mesurées à 6,3 bar dans la brochure de la famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114820112-20260926"
		],
		"workingPressureBar": [
			"fiam-114820112-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114820112-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
