const product = {
	"id": "lacair-fixair-40-300",
	"slug": "lacair-fixair-40-300",
	"brand": "Lacair",
	"model": "FixAir 40/300",
	"mpn": "465211",
	"tankLiters": 300,
	"maxPressureBar": 12,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 600
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-fixair-40-300.webp",
		"alt": "Repères techniques Lacair FixAir 40/300, référence 465211",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair FixAir 40/300, référence 465211 : cuve de 300 L, pression maximale publiée de 12 bar. Le point documenté le plus élevé en pression fournit 600 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 600 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 5,5 kW.",
			"Débit aspiré : 700 L/min, distinct du débit restitué.",
			"Masse nette publiée : 211 kg.",
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
				"lacair-465211-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "165 x 55 x 110 cm",
			"evidenceIds": [
				"lacair-465211-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-465211-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=30",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 30, réf. 465211",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-465211-20260926-lubrification",
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
			"lacair-465211-20260926"
		],
		"tankLiters": [
			"lacair-465211-20260926"
		],
		"maxPressureBar": [
			"lacair-465211-20260926"
		],
		"fadCurve": [
			"lacair-465211-20260926"
		],
		"oilType": [
			"lacair-465211-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-465211-20260926"
		],
		"powerKw": [
			"lacair-465211-20260926"
		],
		"weightKg": [
			"lacair-465211-20260926"
		],
		"voltage": [
			"lacair-465211-20260926"
		],
		"phase": [
			"lacair-465211-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 700,
	"powerKw": 5.5,
	"weightKg": 211,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
