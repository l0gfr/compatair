const product = {
	"id": "lacair-maxair-20-24",
	"slug": "lacair-maxair-20-24",
	"brand": "Lacair",
	"model": "MaxAir 20/24",
	"mpn": "460700",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 215
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-maxair-20-24.webp",
		"alt": "Repères techniques Lacair MaxAir 20/24, référence 460700",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair MaxAir 20/24, référence 460700 : cuve de 24 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 215 L/min à 6 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 215 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 2,7 kW.",
			"Débit aspiré : 335 L/min, distinct du débit restitué.",
			"Masse nette publiée : 46 kg.",
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
				"lacair-460700-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "58 x 60 x 78 cm",
			"evidenceIds": [
				"lacair-460700-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-460700-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=17",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 17, réf. 460700",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-460700-20260926-lubrification",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=17",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, lubrification, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacair-460700-20260926"
		],
		"tankLiters": [
			"lacair-460700-20260926"
		],
		"maxPressureBar": [
			"lacair-460700-20260926"
		],
		"fadCurve": [
			"lacair-460700-20260926"
		],
		"oilType": [
			"lacair-460700-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-460700-20260926"
		],
		"powerKw": [
			"lacair-460700-20260926"
		],
		"weightKg": [
			"lacair-460700-20260926"
		],
		"voltage": [
			"lacair-460700-20260926"
		],
		"phase": [
			"lacair-460700-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 335,
	"powerKw": 2.7,
	"weightKg": 46,
	"voltage": "230 V",
	"phase": "single-phase"
};

export default product;
