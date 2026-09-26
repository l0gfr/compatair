const product = {
	"id": "fiac-ns-10s-d-500-l-10-bar",
	"slug": "fiac-ns-10s-d-500-l-10-bar",
	"brand": "FIAC",
	"model": "NS 10S D 500 L 10 bar",
	"mpn": "4152044362",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 995
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ns-10s-d-500-l-10-bar.webp",
		"alt": "Repères techniques FIAC NS 10S D 500 L 10 bar, référence 4152044362",
		"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC NS 10S D 500 L 10 bar, référence 4152044362 : cuve de 500 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 995 L/min à 10 bar. Sécheur intégré (version D).",
		"verifiedFacts": [
			"Débit restitué publié : 995 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 7,5 kW.",
			"Alimentation publiée : 400 V / 50 Hz, triphasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Free Air Delivery, ISO 1217 annexe C ; pression de service du tableau.",
			"evidenceIds": [
				"fiac-4152044362-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur intégré (version D).",
			"evidenceIds": [
				"fiac-4152044362-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152044362-20260926",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=20",
			"sourceLabel": "FIAC, catalogue S226 R1, juin 2026, p. 20, réf. 4152044362",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Free Air Delivery, ISO 1217 annexe C ; pression de service du tableau."
		},
		{
			"id": "fiac-4152044362-20260926-lubrification",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=17",
			"sourceLabel": "FIAC, catalogue S226 R1, juin 2026, lubrification, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152044362-20260926"
		],
		"tankLiters": [
			"fiac-4152044362-20260926"
		],
		"maxPressureBar": [
			"fiac-4152044362-20260926"
		],
		"fadCurve": [
			"fiac-4152044362-20260926"
		],
		"oilType": [
			"fiac-4152044362-20260926-lubrification"
		],
		"powerKw": [
			"fiac-4152044362-20260926"
		],
		"voltage": [
			"fiac-4152044362-20260926"
		],
		"phase": [
			"fiac-4152044362-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz",
	"phase": "three-phase"
};

export default product;
