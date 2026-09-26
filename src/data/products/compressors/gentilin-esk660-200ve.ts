const product = {
	"id": "gentilin-esk660-200ve",
	"slug": "gentilin-esk660-200ve",
	"brand": "Gentilin",
	"model": "ESK660/200VE",
	"mpn": "811718002",
	"tankLiters": 200,
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
		"src": "/images/products/gentilin-esk660-200ve.webp",
		"alt": "Repères techniques Gentilin ESK660/200VE, référence 811718002",
		"sourceUrl": "https://www.gentilinair.com/en/products/esk660-200ve",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin ESK660/200VE, référence 811718002 : cuve de 200 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 370 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 400 L/min à 5 bar ; 370 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 660 L/min, distinct du débit restitué.",
			"Masse publiée : 113 kg.",
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
				"gentilin-811718002-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "56,1x56,1x172,5 cm",
			"evidenceIds": [
				"gentilin-811718002-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-811718002-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epodissica (esterno)",
			"evidenceIds": [
				"gentilin-811718002-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-811718002-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-811718002-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-811718002-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk660-200ve",
			"sourceLabel": "Gentilin, fiche technique ESK660/200VE, réf. 811718002",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-811718002-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41073902-886c6d46_1778060489.pdf#page=13",
			"sourceLabel": "Gentilin, notice de la famille ESK660/200VE, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-811718002-20260926"
		],
		"tankLiters": [
			"gentilin-811718002-20260926"
		],
		"maxPressureBar": [
			"gentilin-811718002-20260926"
		],
		"fadCurve": [
			"gentilin-811718002-20260926"
		],
		"oilType": [
			"gentilin-811718002-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-811718002-20260926"
		],
		"powerKw": [
			"gentilin-811718002-20260926"
		],
		"weightKg": [
			"gentilin-811718002-20260926"
		],
		"voltage": [
			"gentilin-811718002-20260926"
		],
		"dutyCycle": [
			"gentilin-811718002-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 660,
	"powerKw": 4,
	"weightKg": 113,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
