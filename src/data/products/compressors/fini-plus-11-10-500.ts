const product = {
	"id": "fini-plus-11-10-500",
	"slug": "fini-plus-11-10-500",
	"brand": "Fini",
	"model": "PLUS 11-10-500",
	"mpn": "V83NM92FNM701",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1500
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-11-10-500.webp",
		"alt": "Repères techniques Fini PLUS 11-10-500, référence V83NM92FNM701",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 11-10-500, référence V83NM92FNM701 : cuve de 500 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 1 500 L/min à 10 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 1 500 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 11 kW.",
			"Masse nette publiée : 353 kg."
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
				"fini-v83nm92fnm701-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v83nm92fnm701-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "2000x680x1630 mm",
			"evidenceIds": [
				"fini-v83nm92fnm701-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v83nm92fnm701-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 17, réf. V83NM92FNM701",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v83nm92fnm701-20260926-lubrification",
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
			"fini-v83nm92fnm701-20260926"
		],
		"tankLiters": [
			"fini-v83nm92fnm701-20260926"
		],
		"maxPressureBar": [
			"fini-v83nm92fnm701-20260926"
		],
		"fadCurve": [
			"fini-v83nm92fnm701-20260926"
		],
		"oilType": [
			"fini-v83nm92fnm701-20260926-lubrification"
		],
		"powerKw": [
			"fini-v83nm92fnm701-20260926"
		],
		"weightKg": [
			"fini-v83nm92fnm701-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"weightKg": 353
};

export default product;
