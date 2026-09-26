const product = {
	"id": "gentilin-c660-100",
	"slug": "gentilin-c660-100",
	"brand": "Gentilin",
	"model": "C660/100",
	"mpn": "810310001",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 400
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 330
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-c660-100.webp",
		"alt": "Repères techniques Gentilin C660/100, référence 810310001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c660-100",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin C660/100, référence 810310001 : cuve de 90 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 330 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 400 L/min à 5 bar ; 330 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 4,4 kW.",
			"Débit aspiré : 660 L/min, distinct du débit restitué.",
			"Masse nette publiée : 83 kg.",
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
				"gentilin-810310001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "106x54x75 cm",
			"evidenceIds": [
				"gentilin-810310001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810310001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-810310001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810310001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810310001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c660-100",
			"sourceLabel": "Gentilin, fiche technique C660/100, réf. 810310001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810310001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41031002_1711018493.pdf#page=13",
			"sourceLabel": "Gentilin, notice de la famille C660/100, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810310001-20260926"
		],
		"tankLiters": [
			"gentilin-810310001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810310001-20260926"
		],
		"fadCurve": [
			"gentilin-810310001-20260926"
		],
		"oilType": [
			"gentilin-810310001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810310001-20260926"
		],
		"powerKw": [
			"gentilin-810310001-20260926"
		],
		"weightKg": [
			"gentilin-810310001-20260926"
		],
		"voltage": [
			"gentilin-810310001-20260926"
		],
		"dutyCycle": [
			"gentilin-810310001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 660,
	"powerKw": 4.4,
	"weightKg": 83,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
