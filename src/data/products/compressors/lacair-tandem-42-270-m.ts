const product = {
	"id": "lacair-tandem-42-270-m",
	"slug": "lacair-tandem-42-270-m",
	"brand": "Lacair",
	"model": "Tandem 42/270 M",
	"mpn": "462990",
	"tankLiters": 270,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 494
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-tandem-42-270-m.webp",
		"alt": "Repères techniques Lacair Tandem 42/270 M, référence 462990",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=28",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair Tandem 42/270 M, référence 462990 : cuve de 270 L, pression maximale publiée de 11 bar. Le point documenté le plus élevé en pression fournit 494 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 494 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 6 kW.",
			"Débit aspiré : 700 L/min, distinct du débit restitué.",
			"Masse nette publiée : 159 kg.",
			"Alimentation publiée : 230 V, monophasée."
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
				"lacair-462990-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "150 x 57 x 102 cm",
			"evidenceIds": [
				"lacair-462990-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-462990-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=28",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 28, réf. 462990",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-462990-20260926-lubrification",
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
			"lacair-462990-20260926"
		],
		"tankLiters": [
			"lacair-462990-20260926"
		],
		"maxPressureBar": [
			"lacair-462990-20260926"
		],
		"fadCurve": [
			"lacair-462990-20260926"
		],
		"oilType": [
			"lacair-462990-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-462990-20260926"
		],
		"powerKw": [
			"lacair-462990-20260926"
		],
		"weightKg": [
			"lacair-462990-20260926"
		],
		"voltage": [
			"lacair-462990-20260926"
		],
		"phase": [
			"lacair-462990-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 700,
	"powerKw": 6,
	"weightKg": 159,
	"voltage": "230 V",
	"phase": "single-phase"
};

export default product;
