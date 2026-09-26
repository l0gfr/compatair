const product = {
	"id": "gentilin-c330-03",
	"slug": "gentilin-c330-03",
	"brand": "Gentilin",
	"model": "C330/03",
	"mpn": "810201001",
	"tankLiters": 3,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 200
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 165
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-c330-03.webp",
		"alt": "Repères techniques Gentilin C330/03, référence 810201001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin C330/03, référence 810201001 : cuve de 3 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 165 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 165 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse nette publiée : 32 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"La disponibilité commerciale et les exigences électriques de l’installation sont à confirmer avant achat."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "41x46,5x54 cm",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810201001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
			"sourceLabel": "Gentilin, fiche technique C330/03, réf. 810201001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810201001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=29",
			"sourceLabel": "Gentilin, notice de la famille C330/50, p. 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810201001-20260926"
		],
		"tankLiters": [
			"gentilin-810201001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810201001-20260926"
		],
		"fadCurve": [
			"gentilin-810201001-20260926"
		],
		"oilType": [
			"gentilin-810201001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810201001-20260926"
		],
		"powerKw": [
			"gentilin-810201001-20260926"
		],
		"weightKg": [
			"gentilin-810201001-20260926"
		],
		"voltage": [
			"gentilin-810201001-20260926"
		],
		"dutyCycle": [
			"gentilin-810201001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 32,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
