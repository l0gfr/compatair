const product = {
	"id": "bostitch-ps20-u",
	"slug": "bostitch-ps20-u",
	"brand": "Bostitch",
	"model": "PS20-U",
	"mpn": "PS20-U",
	"tankLiters": 20,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 138
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/bostitch-ps20-u.webp",
		"alt": "Repères techniques Bostitch PS20-U, référence PS20-U",
		"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=28",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch PS20-U, référence PS20-U : cuve de 20 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 138 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 138 L/min à 7 bar.",
			"Compresseur de chantier.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Masse nette publiée : 35 kg.",
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
				"bostitch-ps20-u-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ps20-u-20260926",
			"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=28",
			"sourceLabel": "Bostitch, catalogue officiel construction UK, p. 28, réf. PS20-U",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Free Air Delivery à 7 bar, colonne 230 V."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ps20-u-20260926"
		],
		"tankLiters": [
			"bostitch-ps20-u-20260926"
		],
		"maxPressureBar": [
			"bostitch-ps20-u-20260926"
		],
		"fadCurve": [
			"bostitch-ps20-u-20260926"
		],
		"oilType": [
			"bostitch-ps20-u-20260926"
		],
		"intakeFlowLpm": [
			"bostitch-ps20-u-20260926"
		],
		"weightKg": [
			"bostitch-ps20-u-20260926"
		],
		"voltage": [
			"bostitch-ps20-u-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"weightKg": 35,
	"voltage": "230 V"
};

export default product;
