const product = {
	"id": "lacair-silent-c54-500-sc-et",
	"slug": "lacair-silent-c54-500-sc-et",
	"brand": "Lacair",
	"model": "Silent C54/500 SC-ET",
	"mpn": "464854",
	"tankLiters": 500,
	"maxPressureBar": 14,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 720
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-silent-c54-500-sc-et.webp",
		"alt": "Repères techniques Lacair Silent C54/500 SC-ET, référence 464854",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair Silent C54/500 SC-ET, référence 464854 : cuve de 500 L, pression maximale publiée de 14 bar. Le point documenté le plus élevé en pression fournit 720 L/min à 7 bar. Sécheur frigorifique intégré (version SC).",
		"verifiedFacts": [
			"Débit restitué publié : 720 L/min à 7 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 7,5 kW.",
			"Débit aspiré : 900 L/min, distinct du débit restitué.",
			"Masse nette publiée : 444 kg.",
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
				"lacair-464854-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur frigorifique intégré (version SC).",
			"evidenceIds": [
				"lacair-464854-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "194 x 81 x 151 cm",
			"evidenceIds": [
				"lacair-464854-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-464854-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=41",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 41, réf. 464854",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 7 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-464854-20260926-lubrification",
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
			"lacair-464854-20260926"
		],
		"tankLiters": [
			"lacair-464854-20260926"
		],
		"maxPressureBar": [
			"lacair-464854-20260926"
		],
		"fadCurve": [
			"lacair-464854-20260926"
		],
		"oilType": [
			"lacair-464854-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-464854-20260926"
		],
		"powerKw": [
			"lacair-464854-20260926"
		],
		"weightKg": [
			"lacair-464854-20260926"
		],
		"voltage": [
			"lacair-464854-20260926"
		],
		"phase": [
			"lacair-464854-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 900,
	"powerKw": 7.5,
	"weightKg": 444,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
