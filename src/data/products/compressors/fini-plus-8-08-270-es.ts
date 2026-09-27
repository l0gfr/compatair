const product = {
	"id": "fini-plus-8-08-270-es",
	"slug": "fini-plus-8-08-270-es",
	"brand": "Fini",
	"model": "PLUS 8-08-270 ES",
	"mpn": "V91NG92FNM801",
	"tankLiters": 270,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 1250
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-8-08-270-es.webp",
		"alt": "Repères techniques Fini PLUS 8-08-270 ES, référence V91NG92FNM801",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 8-08-270 ES, référence V91NG92FNM801 : cuve de 270 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 1 250 L/min à 8 bar. Sécheur intégré (version ES).",
		"verifiedFacts": [
			"Débit restitué publié : 1 250 L/min à 8 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 7,5 kW.",
			"Masse nette publiée : 315 kg.",
			"Fonctionnement continu déclaré par le constructeur pour cette gamme ; taux de marche normalisé à 100 %."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.",
			"Le catalogue 04-2024 reste disponible sur le site fabricant. La disponibilité locale est à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau.",
			"evidenceIds": [
				"fini-v91ng92fnm801-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur intégré (version ES).",
			"evidenceIds": [
				"fini-v91ng92fnm801-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1560x680x1510 mm",
			"evidenceIds": [
				"fini-v91ng92fnm801-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"fini-plus-8-08-270-es-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v91ng92fnm801-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=17",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 17, réf. V91NG92FNM801",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v91ng92fnm801-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		},
		{
			"id": "fini-plus-8-08-270-es-continuous-duty-20260927",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_EN_04-2024_9990395.pdf#page=4",
			"sourceLabel": "Fini, catalogue MICRO/PLUS 2,2–75 kW, avril 2024, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Fonctionnement continu déclaré dans le catalogue MICRO/PLUS ; 112 MPN vérifiés dans les tableaux de cette même édition. Le fonctionnement continu est normalisé en taux de marche 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"fini-v91ng92fnm801-20260926"
		],
		"tankLiters": [
			"fini-v91ng92fnm801-20260926"
		],
		"maxPressureBar": [
			"fini-v91ng92fnm801-20260926"
		],
		"fadCurve": [
			"fini-v91ng92fnm801-20260926"
		],
		"oilType": [
			"fini-v91ng92fnm801-20260926-lubrification"
		],
		"powerKw": [
			"fini-v91ng92fnm801-20260926"
		],
		"weightKg": [
			"fini-v91ng92fnm801-20260926"
		],
		"dutyCycle": [
			"fini-plus-8-08-270-es-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"weightKg": 315,
	"dutyCycle": 1
};

export default product;
