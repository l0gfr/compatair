const product = {
	"id": "fini-plus-8-15-270",
	"slug": "fini-plus-8-15-270",
	"brand": "Fini",
	"model": "PLUS 8-15-270",
	"mpn": "V91NI92FNM901",
	"tankLiters": 270,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 15,
			"litersPerMinute": 670
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-8-15-270.webp",
		"alt": "Repères techniques Fini PLUS 8-15-270, référence V91NI92FNM901",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 8-15-270, référence V91NI92FNM901 : cuve de 270 L, pression maximale publiée de 15 bar. Le point documenté le plus élevé en pression fournit 670 L/min à 15 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 670 L/min à 15 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 7,5 kW.",
			"Masse nette publiée : 288 kg."
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
				"fini-v91ni92fnm901-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v91ni92fnm901-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1560x680x1510 mm",
			"evidenceIds": [
				"fini-v91ni92fnm901-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v91ni92fnm901-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 17, réf. V91NI92FNM901",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v91ni92fnm901-20260926-lubrification",
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
			"fini-v91ni92fnm901-20260926"
		],
		"tankLiters": [
			"fini-v91ni92fnm901-20260926"
		],
		"maxPressureBar": [
			"fini-v91ni92fnm901-20260926"
		],
		"fadCurve": [
			"fini-v91ni92fnm901-20260926"
		],
		"oilType": [
			"fini-v91ni92fnm901-20260926-lubrification"
		],
		"powerKw": [
			"fini-v91ni92fnm901-20260926"
		],
		"weightKg": [
			"fini-v91ni92fnm901-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"weightKg": 288
};

export default product;
