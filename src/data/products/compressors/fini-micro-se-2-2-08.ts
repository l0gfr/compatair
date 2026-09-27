const product = {
	"id": "fini-micro-se-2-2-08",
	"slug": "fini-micro-se-2-2-08",
	"brand": "Fini",
	"model": "MICRO SE 2.2-08",
	"mpn": "V51JU72FNM760",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 325
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-micro-se-2-2-08.webp",
		"alt": "Repères techniques Fini MICRO SE 2.2-08, référence V51JU72FNM760",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini MICRO SE 2.2-08, référence V51JU72FNM760 : configuration sans cuve intégrée, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 325 L/min à 8 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 325 L/min à 8 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 2,2 kW.",
			"Masse nette publiée : 93 kg.",
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
				"fini-v51ju72fnm760-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v51ju72fnm760-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "580x480x760 mm",
			"evidenceIds": [
				"fini-v51ju72fnm760-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"fini-micro-se-2-2-08-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v51ju72fnm760-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 16, réf. V51JU72FNM760",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v51ju72fnm760-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		},
		{
			"id": "fini-micro-se-2-2-08-continuous-duty-20260927",
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
			"fini-v51ju72fnm760-20260926"
		],
		"tankLiters": [
			"fini-v51ju72fnm760-20260926"
		],
		"maxPressureBar": [
			"fini-v51ju72fnm760-20260926"
		],
		"fadCurve": [
			"fini-v51ju72fnm760-20260926"
		],
		"oilType": [
			"fini-v51ju72fnm760-20260926-lubrification"
		],
		"powerKw": [
			"fini-v51ju72fnm760-20260926"
		],
		"weightKg": [
			"fini-v51ju72fnm760-20260926"
		],
		"dutyCycle": [
			"fini-micro-se-2-2-08-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 2.2,
	"weightKg": 93,
	"dutyCycle": 1
};

export default product;
