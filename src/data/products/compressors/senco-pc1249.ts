const product = {
	"id": "senco-pc1249",
	"slug": "senco-pc1249",
	"brand": "Senco",
	"model": "PC1249",
	"mpn": "PC1249EU",
	"tankLiters": 10,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 133
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/senco-pc1249.webp",
		"alt": "Repères techniques Senco PC1249, référence PC1249EU",
		"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/PC1249EU",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Senco PC1249, référence PC1249EU : cuve de 10 L, pression maximale publiée de 9 bar. Le point documenté le plus élevé en pression fournit 133 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 133 L/min à 6 bar.",
			"Compresseur de chantier. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 201 L/min, distinct du débit restitué.",
			"Masse nette publiée : 30 kg.",
			"Alimentation publiée : 230 V."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Le point à 6 bar ne valide pas un outil exigeant 6,3 ou 7 bar.",
			"Alimentation et capacité proviennent de la fiche individuelle actuelle, qui peut différer d’un ancien catalogue de gamme."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit restitué publié à 6 bar (Airflow at 6 bar).",
			"evidenceIds": [
				"senco-pc1249eu-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "senco-pc1249eu-20260926",
			"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/PC1249EU",
			"sourceLabel": "Senco, fiche officielle PC1249EU, réf. PC1249EU",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué publié à 6 bar (Airflow at 6 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"senco-pc1249eu-20260926"
		],
		"tankLiters": [
			"senco-pc1249eu-20260926"
		],
		"maxPressureBar": [
			"senco-pc1249eu-20260926"
		],
		"fadCurve": [
			"senco-pc1249eu-20260926"
		],
		"oilType": [
			"senco-pc1249eu-20260926"
		],
		"intakeFlowLpm": [
			"senco-pc1249eu-20260926"
		],
		"powerKw": [
			"senco-pc1249eu-20260926"
		],
		"weightKg": [
			"senco-pc1249eu-20260926"
		],
		"voltage": [
			"senco-pc1249eu-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 201,
	"powerKw": 1.5,
	"weightKg": 30,
	"voltage": "230 V"
};

export default product;
