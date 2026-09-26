const product = {
	"id": "mecadeco-mecadeco-9l-0-5hp",
	"slug": "mecadeco-mecadeco-9l-0-5hp",
	"brand": "MecaDéco",
	"model": "MecaDéco 9L 0,5HP",
	"mpn": "425516",
	"tankLiters": 9,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 3,
			"litersPerMinute": 40
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 30
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/mecadeco-mecadeco-9l-0-5hp.webp",
		"alt": "Repères techniques MecaDéco MecaDéco 9L 0,5HP, référence 425516",
		"sourceUrl": "https://www.mecafer.com/compresseurs/compresseur-silencieux-mecadeco-9l-05hp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MecaDéco MecaDéco 9L 0,5HP, référence 425516 : cuve de 9 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 30 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 40 L/min à 3 bar ; 30 L/min à 7 bar.",
			"Pistons lubrifiés.",
			"Débit aspiré : 50 L/min, distinct du débit restitué.",
			"Masse nette publiée : 21,6 kg."
		],
		"limitations": [
			"Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Volumes restitués publiés à 3 et 7 bar, distincts du volume aspiré.",
			"evidenceIds": [
				"mecadeco-425516-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "mecadeco-425516-20260926",
			"sourceUrl": "https://www.mecafer.com/compresseurs/compresseur-silencieux-mecadeco-9l-05hp",
			"sourceLabel": "Mecafer, fiche officielle 425516, réf. 425516",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Volumes restitués publiés à 3 et 7 bar, distincts du volume aspiré."
		}
	],
	"fieldSources": {
		"mpn": [
			"mecadeco-425516-20260926"
		],
		"tankLiters": [
			"mecadeco-425516-20260926"
		],
		"maxPressureBar": [
			"mecadeco-425516-20260926"
		],
		"fadCurve": [
			"mecadeco-425516-20260926"
		],
		"oilType": [
			"mecadeco-425516-20260926"
		],
		"intakeFlowLpm": [
			"mecadeco-425516-20260926"
		],
		"weightKg": [
			"mecadeco-425516-20260926"
		],
		"ean": [
			"mecadeco-425516-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 50,
	"weightKg": 21.6,
	"ean": "3283494255164"
};

export default product;
