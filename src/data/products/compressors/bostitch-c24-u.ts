const product = {
	"id": "bostitch-c24-u",
	"slug": "bostitch-c24-u",
	"brand": "Bostitch",
	"model": "C24-U",
	"mpn": "C24-U",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 108
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/bostitch-c24-u.webp",
		"alt": "Repères techniques Bostitch C24-U, référence C24-U",
		"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=26",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch C24-U, référence C24-U : cuve de 24 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 108 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 108 L/min à 7 bar.",
			"Compresseur de chantier.",
			"Débit aspiré : 233 L/min, distinct du débit restitué.",
			"Masse nette publiée : 25 kg.",
			"Alimentation publiée : 230 V."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Référence du catalogue britannique : prise secteur et disponibilité en France à confirmer. Les variantes 110 V sont exclues."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Free Air Delivery à 7 bar, colonne 230 V.",
			"evidenceIds": [
				"bostitch-c24-u-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-c24-u-20260926",
			"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=26",
			"sourceLabel": "Bostitch, catalogue officiel construction UK, p. 26, réf. C24-U",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Free Air Delivery à 7 bar, colonne 230 V."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-c24-u-20260926"
		],
		"tankLiters": [
			"bostitch-c24-u-20260926"
		],
		"maxPressureBar": [
			"bostitch-c24-u-20260926"
		],
		"fadCurve": [
			"bostitch-c24-u-20260926"
		],
		"oilType": [
			"bostitch-c24-u-20260926"
		],
		"intakeFlowLpm": [
			"bostitch-c24-u-20260926"
		],
		"weightKg": [
			"bostitch-c24-u-20260926"
		],
		"voltage": [
			"bostitch-c24-u-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 233,
	"weightKg": 25,
	"voltage": "230 V"
};

export default product;
