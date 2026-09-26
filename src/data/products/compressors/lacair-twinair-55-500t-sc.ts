const product = {
	"id": "lacair-twinair-55-500t-sc",
	"slug": "lacair-twinair-55-500t-sc",
	"brand": "Lacair",
	"model": "TwinAir 55/500T-SC",
	"mpn": "464650",
	"tankLiters": 500,
	"maxPressureBar": 12,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 725
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-twinair-55-500t-sc.webp",
		"alt": "Repères techniques Lacair TwinAir 55/500T-SC, référence 464650",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair TwinAir 55/500T-SC, référence 464650 : cuve de 500 L, pression maximale publiée de 12 bar. Le point documenté le plus élevé en pression fournit 725 L/min à 6 bar. Sécheur frigorifique intégré (version SC).",
		"verifiedFacts": [
			"Débit restitué publié : 725 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 7,5 kW.",
			"Débit aspiré : 915 L/min, distinct du débit restitué.",
			"Masse nette publiée : 314 kg.",
			"Alimentation publiée : 400 V, triphasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Le point de débit à 6 bar ne suffit pas à valider un outil exigeant 6,3 ou 7 bar. Le moteur ne prolonge pas la courbe au-delà de ce point."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis.",
			"evidenceIds": [
				"lacair-464650-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur frigorifique intégré (version SC).",
			"evidenceIds": [
				"lacair-464650-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "195 x 64 x 153 cm",
			"evidenceIds": [
				"lacair-464650-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-464650-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=34",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 34, réf. 464650",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-464650-20260926-lubrification",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=105",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, lubrification, p. 105",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacair-464650-20260926"
		],
		"tankLiters": [
			"lacair-464650-20260926"
		],
		"maxPressureBar": [
			"lacair-464650-20260926"
		],
		"fadCurve": [
			"lacair-464650-20260926"
		],
		"oilType": [
			"lacair-464650-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-464650-20260926"
		],
		"powerKw": [
			"lacair-464650-20260926"
		],
		"weightKg": [
			"lacair-464650-20260926"
		],
		"voltage": [
			"lacair-464650-20260926"
		],
		"phase": [
			"lacair-464650-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 915,
	"powerKw": 7.5,
	"weightKg": 314,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
