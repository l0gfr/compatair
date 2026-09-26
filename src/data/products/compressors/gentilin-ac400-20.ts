const product = {
	"id": "gentilin-ac400-20",
	"slug": "gentilin-ac400-20",
	"brand": "Gentilin",
	"model": "AC400/20",
	"mpn": "816705001",
	"tankLiters": 20,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 185
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 130
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-ac400-20.webp",
		"alt": "Repères techniques Gentilin AC400/20, référence 816705001",
		"sourceUrl": "https://www.gentilinair.com/en/products/ac400-20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin AC400/20, référence 816705001 : cuve de 20 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 130 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 185 L/min à 5 bar ; 130 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 250 L/min, distinct du débit restitué.",
			"Masse publiée : 15 kg.",
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
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "44x25x52 cm",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Alluminio",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-816705001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac400-20",
			"sourceLabel": "Gentilin, fiche technique AC400/20, réf. 816705001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-816705001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice de la famille DC100/05, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Tipologia Oil-free (utilizzo intensivo)"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-816705001-20260926"
		],
		"tankLiters": [
			"gentilin-816705001-20260926"
		],
		"maxPressureBar": [
			"gentilin-816705001-20260926"
		],
		"fadCurve": [
			"gentilin-816705001-20260926"
		],
		"oilType": [
			"gentilin-816705001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-816705001-20260926"
		],
		"powerKw": [
			"gentilin-816705001-20260926"
		],
		"weightKg": [
			"gentilin-816705001-20260926"
		],
		"voltage": [
			"gentilin-816705001-20260926"
		],
		"dutyCycle": [
			"gentilin-816705001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"weightKg": 15,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
