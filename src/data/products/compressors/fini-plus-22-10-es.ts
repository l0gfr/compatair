const product = {
	"id": "fini-plus-22-10-es",
	"slug": "fini-plus-22-10-es",
	"brand": "Fini",
	"model": "PLUS 22-10 ES",
	"mpn": "V60QE92FNM860",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 3000
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-22-10-es.webp",
		"alt": "Repères techniques Fini PLUS 22-10 ES, référence V60QE92FNM860",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 22-10 ES, référence V60QE92FNM860 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 3 000 L/min à 10 bar. Sécheur intégré (version ES).",
		"verifiedFacts": [
			"Débit restitué publié : 3 000 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 22 kW.",
			"Masse nette publiée : 469 kg.",
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
				"fini-v60qe92fnm860-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur intégré (version ES).",
			"evidenceIds": [
				"fini-v60qe92fnm860-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1740x830x1130 mm",
			"evidenceIds": [
				"fini-v60qe92fnm860-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"fini-plus-22-10-es-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v60qe92fnm860-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 18, réf. V60QE92FNM860",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v60qe92fnm860-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		},
		{
			"id": "fini-plus-22-10-es-continuous-duty-20260927",
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
			"fini-v60qe92fnm860-20260926"
		],
		"tankLiters": [
			"fini-v60qe92fnm860-20260926"
		],
		"maxPressureBar": [
			"fini-v60qe92fnm860-20260926"
		],
		"fadCurve": [
			"fini-v60qe92fnm860-20260926"
		],
		"oilType": [
			"fini-v60qe92fnm860-20260926-lubrification"
		],
		"powerKw": [
			"fini-v60qe92fnm860-20260926"
		],
		"weightKg": [
			"fini-v60qe92fnm860-20260926"
		],
		"dutyCycle": [
			"fini-plus-22-10-es-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 22,
	"weightKg": 469,
	"dutyCycle": 1
};

export default product;
