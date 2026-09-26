const product = {
	"id": "gentilin-esk480-270",
	"slug": "gentilin-esk480-270",
	"brand": "Gentilin",
	"model": "ESK480/270",
	"mpn": "811611002",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 345
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 285
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-esk480-270.webp",
		"alt": "Repères techniques Gentilin ESK480/270, référence 811611002",
		"sourceUrl": "https://www.gentilinair.com/en/products/esk480-270",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin ESK480/270, référence 811611002 : cuve de 270 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 285 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 345 L/min à 5 bar ; 285 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
			"Masse nette publiée : 129 kg.",
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
				"gentilin-811611002-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "158,2x50x92,9 cm",
			"evidenceIds": [
				"gentilin-811611002-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-811611002-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epossidica (interno/esterno)",
			"evidenceIds": [
				"gentilin-811611002-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-811611002-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-811611002-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-811611002-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk480-270",
			"sourceLabel": "Gentilin, fiche technique ESK480/270, réf. 811611002",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-811611002-20260926-oiltype-1",
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
			"gentilin-811611002-20260926"
		],
		"tankLiters": [
			"gentilin-811611002-20260926"
		],
		"maxPressureBar": [
			"gentilin-811611002-20260926"
		],
		"fadCurve": [
			"gentilin-811611002-20260926"
		],
		"oilType": [
			"gentilin-811611002-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-811611002-20260926"
		],
		"powerKw": [
			"gentilin-811611002-20260926"
		],
		"weightKg": [
			"gentilin-811611002-20260926"
		],
		"voltage": [
			"gentilin-811611002-20260926"
		],
		"dutyCycle": [
			"gentilin-811611002-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"weightKg": 129,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
