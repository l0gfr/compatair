const product = {
	"id": "lacair-fixair-80",
	"slug": "lacair-fixair-80",
	"brand": "Lacair",
	"model": "FixAir 80",
	"mpn": "465800",
	"tankLiters": 0,
	"maxPressureBar": 12,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 1165
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/lacair-fixair-80.webp",
		"alt": "Repères techniques Lacair FixAir 80, référence 465800",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=33",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacair FixAir 80, référence 465800 : configuration sans cuve intégrée, pression maximale publiée de 12 bar. Le point documenté le plus élevé en pression fournit 1 165 L/min à 6 bar. Platine sans cuve.",
		"verifiedFacts": [
			"Débit restitué publié : 1 165 L/min à 6 bar.",
			"Pistons lubrifiés. Puissance moteur publiée : 10 kW.",
			"Débit aspiré : 1 335 L/min, distinct du débit restitué.",
			"Masse nette publiée : 234 kg.",
			"Alimentation publiée : 400 V, triphasée."
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
				"lacair-465800-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Platine sans cuve.",
			"evidenceIds": [
				"lacair-465800-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "114 x 55 x 68 cm",
			"evidenceIds": [
				"lacair-465800-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacair-465800-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=33",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, p. 33, réf. 465800",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit moyen restitué à 6 bar selon la note fabricant. Valeur L/min retenue sans recalcul depuis les m³/h arrondis."
		},
		{
			"id": "lacair-465800-20260926-lubrification",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Lacair%202026.pdf#page=105",
			"sourceLabel": "Lacair / Lacmé, catalogue 2026, lubrification, p. 105",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacair-465800-20260926"
		],
		"tankLiters": [
			"lacair-465800-20260926"
		],
		"maxPressureBar": [
			"lacair-465800-20260926"
		],
		"fadCurve": [
			"lacair-465800-20260926"
		],
		"oilType": [
			"lacair-465800-20260926-lubrification"
		],
		"intakeFlowLpm": [
			"lacair-465800-20260926"
		],
		"powerKw": [
			"lacair-465800-20260926"
		],
		"weightKg": [
			"lacair-465800-20260926"
		],
		"voltage": [
			"lacair-465800-20260926"
		],
		"phase": [
			"lacair-465800-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 1335,
	"powerKw": 10,
	"weightKg": 234,
	"voltage": "400 V",
	"phase": "three-phase"
};

export default product;
