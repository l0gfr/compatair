const product = {
	"id": "fini-micro-5-5-10",
	"slug": "fini-micro-5-5-10",
	"brand": "Fini",
	"model": "MICRO 5.5-10",
	"mpn": "V51JO92FNM760",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 650
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-micro-5-5-10.webp",
		"alt": "Repères techniques Fini MICRO 5.5-10, référence V51JO92FNM760",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini MICRO 5.5-10, référence V51JO92FNM760 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 650 L/min à 10 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 650 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 5,5 kW.",
			"Masse nette publiée : 126 kg."
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
				"fini-v51jo92fnm760-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v51jo92fnm760-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "600x520x780 mm",
			"evidenceIds": [
				"fini-v51jo92fnm760-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v51jo92fnm760-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 16, réf. V51JO92FNM760",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v51jo92fnm760-20260926-lubrification",
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
			"fini-v51jo92fnm760-20260926"
		],
		"tankLiters": [
			"fini-v51jo92fnm760-20260926"
		],
		"maxPressureBar": [
			"fini-v51jo92fnm760-20260926"
		],
		"fadCurve": [
			"fini-v51jo92fnm760-20260926"
		],
		"oilType": [
			"fini-v51jo92fnm760-20260926-lubrification"
		],
		"powerKw": [
			"fini-v51jo92fnm760-20260926"
		],
		"weightKg": [
			"fini-v51jo92fnm760-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 5.5,
	"weightKg": 126
};

export default product;
