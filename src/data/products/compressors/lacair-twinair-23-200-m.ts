const product = {
	"id": "lacair-twinair-23-200-m",
	"slug": "lacair-twinair-23-200-m",
	"brand": "Lacair",
	"model": "TwinAir 23/200 M",
	"mpn": "462900",
	"tankLiters": 200,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 275
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-twinair-23-200-m.webp",
		"alt": "Repères techniques Lacair TwinAir 23/200 M, référence 462900",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=26",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair TwinAir 23/200 M, référence 462900 : cuve de 200 L, pression maximale publiée de 11 bar. Le point documenté le plus élevé en pression fournit 275 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 275 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 385 L/min, distinct du débit restitué.",
			"Masse nette publiée : 110 kg.",
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
				"lacair-462900-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "141 x 59 x 99 cm",
			"evidenceIds": [
				"lacair-462900-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-462900-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=26",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 26, réf. 462900",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-462900-20260926-lubrification",
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
			"lacair-462900-20260926"
		],
		"tankLiters": [
			"lacair-462900-20260926"
		],
		"maxPressureBar": [
			"lacair-462900-20260926"
		],
		"fadCurve": [
			"lacair-462900-20260926"
		],
		"oilType": [
			"lacair-462900-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-462900-20260926"
		],
		"powerKw": [
			"lacair-462900-20260926"
		],
		"weightKg": [
			"lacair-462900-20260926"
		],
		"voltage": [
			"lacair-462900-20260926"
		],
		"phase": [
			"lacair-462900-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 385,
	"powerKw": 3,
	"weightKg": 110,
	"voltage": "230 V",
	"phase": "single-phase"
};

export default product;
