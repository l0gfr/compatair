const product = {
	"id": "lacair-silent-c51-270-et",
	"slug": "lacair-silent-c51-270-et",
	"brand": "Lacair",
	"model": "Silent C51/270 ET",
	"mpn": "464864",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 718
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-silent-c51-270-et.webp",
		"alt": "Repères techniques Lacair Silent C51/270 ET, référence 464864",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair Silent C51/270 ET, référence 464864 : cuve de 270 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 718 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 718 L/min à 7 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 5,5 kW.",
			"Débit aspiré : 840 L/min, distinct du débit restitué.",
			"Masse nette publiée : 260 kg.",
			"Alimentation publiée : 400 V, triphasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit moyen restitué à 7 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis.",
			"evidenceIds": [
				"lacair-464864-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "148 x 68 x 146 cm",
			"evidenceIds": [
				"lacair-464864-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-464864-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=40",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 40, réf. 464864",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 7 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-464864-20260926-lubrification",
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
			"lacair-464864-20260926"
		],
		"tankLiters": [
			"lacair-464864-20260926"
		],
		"maxPressureBar": [
			"lacair-464864-20260926"
		],
		"fadCurve": [
			"lacair-464864-20260926"
		],
		"oilType": [
			"lacair-464864-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-464864-20260926"
		],
		"powerKw": [
			"lacair-464864-20260926"
		],
		"weightKg": [
			"lacair-464864-20260926"
		],
		"voltage": [
			"lacair-464864-20260926"
		],
		"phase": [
			"lacair-464864-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 840,
	"powerKw": 5.5,
	"weightKg": 260,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
