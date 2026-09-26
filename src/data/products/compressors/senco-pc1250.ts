const product = {
	"id": "senco-pc1250",
	"slug": "senco-pc1250",
	"brand": "Senco",
	"model": "PC1250",
	"mpn": "PC1250EU",
	"tankLiters": 46,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 164
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/senco-pc1250.webp",
		"alt": "Repères techniques Senco PC1250, référence PC1250EU",
		"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/PC1250EU",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Senco PC1250, référence PC1250EU : cuve de 46 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 164 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 164 L/min à 6 bar.",
			"Compresseur de chantier. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 277 L/min, distinct du débit restitué.",
			"Masse nette publiée : 42 kg.",
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
				"senco-pc1250eu-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "senco-pc1250eu-20260926",
			"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/PC1250EU",
			"sourceLabel": "Senco, fiche officielle PC1250EU, réf. PC1250EU",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué publié à 6 bar (Airflow at 6 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"senco-pc1250eu-20260926"
		],
		"tankLiters": [
			"senco-pc1250eu-20260926"
		],
		"maxPressureBar": [
			"senco-pc1250eu-20260926"
		],
		"fadCurve": [
			"senco-pc1250eu-20260926"
		],
		"oilType": [
			"senco-pc1250eu-20260926"
		],
		"intakeFlowLpm": [
			"senco-pc1250eu-20260926"
		],
		"powerKw": [
			"senco-pc1250eu-20260926"
		],
		"weightKg": [
			"senco-pc1250eu-20260926"
		],
		"voltage": [
			"senco-pc1250eu-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 277,
	"powerKw": 1.5,
	"weightKg": 42,
	"voltage": "230 V"
};

export default product;
