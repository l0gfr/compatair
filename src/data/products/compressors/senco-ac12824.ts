const product = {
	"id": "senco-ac12824",
	"slug": "senco-ac12824",
	"brand": "Senco",
	"model": "AC12824",
	"mpn": "AFN0035",
	"tankLiters": 24,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 80
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/senco-ac12824.webp",
		"alt": "Repères techniques Senco AC12824, référence AFN0035",
		"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/AFN0035",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Senco AC12824, référence AFN0035 : cuve de 24 L, pression maximale publiée de 9 bar. Le point documenté le plus élevé en pression fournit 80 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 80 L/min à 6 bar.",
			"Compresseur de chantier. Puissance moteur publiée : 0,75 kW.",
			"Débit aspiré : 128 L/min, distinct du débit restitué.",
			"Masse nette publiée : 22 kg.",
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
				"senco-afn0035-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "senco-afn0035-20260926",
			"sourceUrl": "https://www.senco.eu/en/products/compressors/compressor/p/AFN0035",
			"sourceLabel": "Senco, fiche officielle AFN0035, réf. AFN0035",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué publié à 6 bar (Airflow at 6 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"senco-afn0035-20260926"
		],
		"tankLiters": [
			"senco-afn0035-20260926"
		],
		"maxPressureBar": [
			"senco-afn0035-20260926"
		],
		"fadCurve": [
			"senco-afn0035-20260926"
		],
		"oilType": [
			"senco-afn0035-20260926"
		],
		"intakeFlowLpm": [
			"senco-afn0035-20260926"
		],
		"powerKw": [
			"senco-afn0035-20260926"
		],
		"weightKg": [
			"senco-afn0035-20260926"
		],
		"voltage": [
			"senco-afn0035-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 128,
	"powerKw": 0.75,
	"weightKg": 22,
	"voltage": "230 V"
};

export default product;
