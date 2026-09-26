const product = {
	"id": "lacair-silent-6-6-sh",
	"slug": "lacair-silent-6-6-sh",
	"brand": "Lacair",
	"model": "Silent 6/6 SH",
	"mpn": "461900",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 60
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-silent-6-6-sh.webp",
		"alt": "Repères techniques Lacair Silent 6/6 SH, référence 461900",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair Silent 6/6 SH, référence 461900 : cuve de 6 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 60 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 60 L/min à 6 bar.",
			"Pistons sans huile. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 105 L/min, distinct du débit restitué.",
			"Masse nette publiée : 14,2 kg.",
			"Alimentation publiée : 230 V, monophasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Le point de débit à 6 bar ne suffit pas à valider un outil exigeant 6,3 ou 7 bar. Le moteur ne prolonge pas la courbe au-delà de ce point."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis.",
			"evidenceIds": [
				"lacair-461900-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "45 x 18,5 x 46 cm",
			"evidenceIds": [
				"lacair-461900-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-461900-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=20",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 20, réf. 461900",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-461900-20260926-lubrification",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=20",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, lubrification, p. 20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacair-461900-20260926"
		],
		"tankLiters": [
			"lacair-461900-20260926"
		],
		"maxPressureBar": [
			"lacair-461900-20260926"
		],
		"fadCurve": [
			"lacair-461900-20260926"
		],
		"oilType": [
			"lacair-461900-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-461900-20260926"
		],
		"powerKw": [
			"lacair-461900-20260926"
		],
		"weightKg": [
			"lacair-461900-20260926"
		],
		"voltage": [
			"lacair-461900-20260926"
		],
		"phase": [
			"lacair-461900-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 105,
	"powerKw": 0.55,
	"weightKg": 14.2,
	"voltage": "230 V",
	"phase": "single-phase"
};

export default product;
