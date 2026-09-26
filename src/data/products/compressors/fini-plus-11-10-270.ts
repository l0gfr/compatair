const product = {
	"id": "fini-plus-11-10-270",
	"slug": "fini-plus-11-10-270",
	"brand": "Fini",
	"model": "PLUS 11-10-270",
	"mpn": "V91NM92FNM701",
	"tankLiters": 270,
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
		"src": "/images/products/fini-plus-11-10-270.webp",
		"alt": "Repères techniques Fini PLUS 11-10-270, référence V91NM92FNM701",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 11-10-270, référence V91NM92FNM701 : cuve de 270 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 1 500 L/min à 10 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 1 500 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 11 kW.",
			"Masse nette publiée : 302 kg."
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
				"fini-v91nm92fnm701-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v91nm92fnm701-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1560x680x1510 mm",
			"evidenceIds": [
				"fini-v91nm92fnm701-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v91nm92fnm701-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 17, réf. V91NM92FNM701",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v91nm92fnm701-20260926-lubrification",
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
			"fini-v91nm92fnm701-20260926"
		],
		"tankLiters": [
			"fini-v91nm92fnm701-20260926"
		],
		"maxPressureBar": [
			"fini-v91nm92fnm701-20260926"
		],
		"fadCurve": [
			"fini-v91nm92fnm701-20260926"
		],
		"oilType": [
			"fini-v91nm92fnm701-20260926-lubrification"
		],
		"powerKw": [
			"fini-v91nm92fnm701-20260926"
		],
		"weightKg": [
			"fini-v91nm92fnm701-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"weightKg": 302
};

export default product;
