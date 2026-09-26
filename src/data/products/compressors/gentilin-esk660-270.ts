const product = {
	"id": "gentilin-esk660-270",
	"slug": "gentilin-esk660-270",
	"brand": "Gentilin",
	"model": "ESK660/270",
	"mpn": "811711003",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 400
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 370
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-esk660-270.webp",
		"alt": "Repères techniques Gentilin ESK660/270, référence 811711003",
		"sourceUrl": "https://www.gentilinair.com/en/products/esk660-270",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin ESK660/270, référence 811711003 : cuve de 270 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 370 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 400 L/min à 5 bar ; 370 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 660 L/min, distinct du débit restitué.",
			"Masse nette publiée : 131 kg.",
			"Alimentation publiée : 400 V, 50 Hz."
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
				"gentilin-811711003-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "158,2x50x92,9 cm",
			"evidenceIds": [
				"gentilin-811711003-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-811711003-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epossidica (interno/esterno)",
			"evidenceIds": [
				"gentilin-811711003-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-811711003-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-811711003-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-811711003-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk660-270",
			"sourceLabel": "Gentilin, fiche technique ESK660/270, réf. 811711003",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-811711003-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41032302_1778060121.pdf#page=1",
			"sourceLabel": "Gentilin, notice de la famille ESK960/500, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : OIL-FREE PISTON AIR COMPRESSORS"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-811711003-20260926"
		],
		"tankLiters": [
			"gentilin-811711003-20260926"
		],
		"maxPressureBar": [
			"gentilin-811711003-20260926"
		],
		"fadCurve": [
			"gentilin-811711003-20260926"
		],
		"oilType": [
			"gentilin-811711003-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-811711003-20260926"
		],
		"powerKw": [
			"gentilin-811711003-20260926"
		],
		"weightKg": [
			"gentilin-811711003-20260926"
		],
		"voltage": [
			"gentilin-811711003-20260926"
		],
		"dutyCycle": [
			"gentilin-811711003-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 660,
	"powerKw": 4,
	"weightKg": 131,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
