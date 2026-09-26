const product = {
	"id": "lacair-twinair-35-200-t",
	"slug": "lacair-twinair-35-200-t",
	"brand": "Lacair",
	"model": "TwinAir 35/200 T",
	"mpn": "463700",
	"tankLiters": 200,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 453
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-twinair-35-200-t.webp",
		"alt": "Repères techniques Lacair TwinAir 35/200 T, référence 463700",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=27",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair TwinAir 35/200 T, référence 463700 : cuve de 200 L, pression maximale publiée de 11 bar. Le point documenté le plus élevé en pression fournit 453 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 453 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 585 L/min, distinct du débit restitué.",
			"Masse nette publiée : 129 kg.",
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
				"lacair-463700-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "141 x 59 x 101 cm",
			"evidenceIds": [
				"lacair-463700-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-463700-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=27",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 27, réf. 463700",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-463700-20260926-lubrification",
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
			"lacair-463700-20260926"
		],
		"tankLiters": [
			"lacair-463700-20260926"
		],
		"maxPressureBar": [
			"lacair-463700-20260926"
		],
		"fadCurve": [
			"lacair-463700-20260926"
		],
		"oilType": [
			"lacair-463700-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-463700-20260926"
		],
		"powerKw": [
			"lacair-463700-20260926"
		],
		"weightKg": [
			"lacair-463700-20260926"
		],
		"voltage": [
			"lacair-463700-20260926"
		],
		"phase": [
			"lacair-463700-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 585,
	"powerKw": 4,
	"weightKg": 129,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
