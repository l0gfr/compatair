const product = {
	"id": "bostitch-rc-10-u",
	"slug": "bostitch-rc-10-u",
	"brand": "Bostitch",
	"model": "RC-10-U",
	"mpn": "RC-10-U",
	"tankLiters": 10,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 82
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/bostitch-rc-10-u.webp",
		"alt": "Repères techniques Bostitch RC-10-U, référence RC-10-U",
		"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=27",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch RC-10-U, référence RC-10-U : cuve de 10 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 82 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 82 L/min à 7 bar.",
			"Compresseur de chantier.",
			"Débit aspiré : 216 L/min, distinct du débit restitué.",
			"Masse nette publiée : 18 kg.",
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
				"bostitch-rc-10-u-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-rc-10-u-20260926",
			"sourceUrl": "https://v3.pdf.bostitch.eu/literature/Construction_Catalogue_A4_UK.pdf#page=27",
			"sourceLabel": "Bostitch, catalogue officiel construction UK, p. 27, réf. RC-10-U",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Free Air Delivery à 7 bar, colonne 230 V."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-rc-10-u-20260926"
		],
		"tankLiters": [
			"bostitch-rc-10-u-20260926"
		],
		"maxPressureBar": [
			"bostitch-rc-10-u-20260926"
		],
		"fadCurve": [
			"bostitch-rc-10-u-20260926"
		],
		"oilType": [
			"bostitch-rc-10-u-20260926"
		],
		"intakeFlowLpm": [
			"bostitch-rc-10-u-20260926"
		],
		"weightKg": [
			"bostitch-rc-10-u-20260926"
		],
		"voltage": [
			"bostitch-rc-10-u-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 216,
	"weightKg": 18,
	"voltage": "230 V"
};

export default product;
