const product = {
	"id": "senco-ac20250bl-eu",
	"slug": "senco-ac20250bl-eu",
	"brand": "Senco",
	"model": "AC20250BL-EU",
	"mpn": "AFN0039EU",
	"tankLiters": 50,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 130
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/senco-ac20250bl-eu.webp",
		"alt": "Repères techniques Senco AC20250BL-EU, référence AFN0039EU",
		"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/AFN0039EU",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Senco AC20250BL-EU, référence AFN0039EU : cuve de 50 L, pression maximale publiée de 9 bar. Le point documenté le plus élevé en pression fournit 130 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 130 L/min à 6 bar.",
			"Compresseur de chantier. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 202 L/min, distinct du débit restitué.",
			"Masse nette publiée : 31 kg.",
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
				"senco-afn0039eu-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "senco-afn0039eu-20260926",
			"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/AFN0039EU",
			"sourceLabel": "Senco, fiche officielle AFN0039EU, réf. AFN0039EU",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué publié à 6 bar (Airflow at 6 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"senco-afn0039eu-20260926"
		],
		"tankLiters": [
			"senco-afn0039eu-20260926"
		],
		"maxPressureBar": [
			"senco-afn0039eu-20260926"
		],
		"fadCurve": [
			"senco-afn0039eu-20260926"
		],
		"oilType": [
			"senco-afn0039eu-20260926"
		],
		"intakeFlowLpm": [
			"senco-afn0039eu-20260926"
		],
		"powerKw": [
			"senco-afn0039eu-20260926"
		],
		"weightKg": [
			"senco-afn0039eu-20260926"
		],
		"voltage": [
			"senco-afn0039eu-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 202,
	"powerKw": 1.5,
	"weightKg": 31,
	"voltage": "230 V"
};

export default product;
