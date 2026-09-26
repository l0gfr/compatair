const product = {
	"id": "stanley-air-kit-sans-cuve-1-5hp",
	"slug": "stanley-air-kit-sans-cuve-1-5hp",
	"brand": "Stanley",
	"model": "AIR KIT sans cuve 1,5HP",
	"mpn": "AIR KIT",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 3,
			"litersPerMinute": 105
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 85
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-air-kit-sans-cuve-1-5hp.webp",
		"alt": "Repères techniques Stanley AIR KIT sans cuve 1,5HP, référence AIR KIT",
		"sourceUrl": "https://www.mecafer.com/compresseurs/compresseur-air-kit-sans-cuve-15hp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley AIR KIT sans cuve 1,5HP, référence AIR KIT : configuration sans cuve intégrée, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 85 L/min à 7 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 105 L/min à 3 bar ; 85 L/min à 7 bar.",
			"Pistons sans huile.",
			"Débit aspiré : 180 L/min, distinct du débit restitué.",
			"Masse nette publiée : 5,6 kg."
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
				"stanley-air-kit-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-air-kit-20260926",
			"sourceUrl": "https://www.mecafer.com/compresseurs/compresseur-air-kit-sans-cuve-15hp",
			"sourceLabel": "Mecafer, fiche officielle AIR KIT, réf. AIR KIT",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Volumes restitués publiés à 3 et 7 bar, distincts du volume aspiré."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-air-kit-20260926"
		],
		"tankLiters": [
			"stanley-air-kit-20260926"
		],
		"maxPressureBar": [
			"stanley-air-kit-20260926"
		],
		"fadCurve": [
			"stanley-air-kit-20260926"
		],
		"oilType": [
			"stanley-air-kit-20260926"
		],
		"intakeFlowLpm": [
			"stanley-air-kit-20260926"
		],
		"weightKg": [
			"stanley-air-kit-20260926"
		],
		"ean": [
			"stanley-air-kit-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 180,
	"weightKg": 5.6,
	"ean": "8016738753899"
};

export default product;
