const product = {
	"id": "fini-plus-15-10-500-es",
	"slug": "fini-plus-15-10-500-es",
	"brand": "Fini",
	"model": "PLUS 15-10-500 ES",
	"mpn": "V83NQ92FNM801",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1850
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-15-10-500-es.webp",
		"alt": "Repères techniques Fini PLUS 15-10-500 ES, référence V83NQ92FNM801",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 15-10-500 ES, référence V83NQ92FNM801 : cuve de 500 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 1 850 L/min à 10 bar. Sécheur intégré (version ES).",
		"verifiedFacts": [
			"Débit restitué publié : 1 850 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse nette publiée : 412 kg."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Le catalogue 04-2024 reste disponible sur le site fabricant. La disponibilité locale est à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau.",
			"evidenceIds": [
				"fini-v83nq92fnm801-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur intégré (version ES).",
			"evidenceIds": [
				"fini-v83nq92fnm801-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "2000x680x1630 mm",
			"evidenceIds": [
				"fini-v83nq92fnm801-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v83nq92fnm801-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 18, réf. V83NQ92FNM801",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v83nq92fnm801-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"fini-v83nq92fnm801-20260926"
		],
		"tankLiters": [
			"fini-v83nq92fnm801-20260926"
		],
		"maxPressureBar": [
			"fini-v83nq92fnm801-20260926"
		],
		"fadCurve": [
			"fini-v83nq92fnm801-20260926"
		],
		"oilType": [
			"fini-v83nq92fnm801-20260926-lubrification"
		],
		"powerKw": [
			"fini-v83nq92fnm801-20260926"
		],
		"weightKg": [
			"fini-v83nq92fnm801-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 412
};

export default product;
