const product = {
	"id": "lacair-silent-c51-500-et",
	"slug": "lacair-silent-c51-500-et",
	"brand": "Lacair",
	"model": "Silent C51/500 ET",
	"mpn": "464866",
	"tankLiters": 500,
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
		"src": "/images/products/lacair-silent-c51-500-et.webp",
		"alt": "Repères techniques Lacair Silent C51/500 ET, référence 464866",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair Silent C51/500 ET, référence 464866 : cuve de 500 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 718 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 718 L/min à 7 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 5,5 kW.",
			"Débit aspiré : 840 L/min, distinct du débit restitué.",
			"Masse nette publiée : 395 kg.",
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
				"lacair-464866-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "195 x 71 x 156 cm",
			"evidenceIds": [
				"lacair-464866-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-464866-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=40",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 40, réf. 464866",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 7 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-464866-20260926-lubrification",
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
			"lacair-464866-20260926"
		],
		"tankLiters": [
			"lacair-464866-20260926"
		],
		"maxPressureBar": [
			"lacair-464866-20260926"
		],
		"fadCurve": [
			"lacair-464866-20260926"
		],
		"oilType": [
			"lacair-464866-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-464866-20260926"
		],
		"powerKw": [
			"lacair-464866-20260926"
		],
		"weightKg": [
			"lacair-464866-20260926"
		],
		"voltage": [
			"lacair-464866-20260926"
		],
		"phase": [
			"lacair-464866-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 840,
	"powerKw": 5.5,
	"weightKg": 395,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
