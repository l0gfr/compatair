const product = {
	"id": "fiam-tls12",
	"slug": "fiam-tls12",
	"brand": "Fiam",
	"model": "TLS12",
	"mpn": "164650102",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Fiam TLS12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-tls12.webp",
		"alt": "Repères techniques Fiam TLS12, référence 164650102",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-tools-for-cutting/tls12/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam TLS12, référence 164650102. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 6500 tr/min. Masse publiée : 1.07 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 164650102.",
			"Vitesse à vide : 6500 tr/min.",
			"Masse publiée : 1.07 kg.",
			"Dimensions publiées : Ø 40 x L 245 mm."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-164650102-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6500 tr/min",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.07 kg",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 245 mm",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-164650102-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-164650102-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-tools-for-cutting/tls12/",
			"sourceLabel": "Fiam, fiche technique TLS12, réf. 164650102",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-164650102-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-1.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-1, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-164650102-20260926"
		],
		"workingPressureBar": [
			"fiam-164650102-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-164650102-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	}
};

export default product;
