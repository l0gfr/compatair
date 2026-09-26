const product = {
	"id": "gentilin-smart-1-10-f",
	"slug": "gentilin-smart-1-10-f",
	"brand": "Gentilin",
	"model": "SMART 1.10 F",
	"mpn": "816204002",
	"tankLiters": 10,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 75
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 55
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-smart-1-10-f.webp",
		"alt": "Repères techniques Gentilin SMART 1.10 F, référence 816204002",
		"sourceUrl": "https://www.gentilinair.com/en/products/smart-1-10-f",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin SMART 1.10 F, référence 816204002 : cuve de 10 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 55 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 75 L/min à 5 bar ; 55 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 0,75 kW.",
			"Débit aspiré : 150 L/min, distinct du débit restitué.",
			"Masse publiée : 18 kg.",
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
				"gentilin-816204002-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "36,5x36,5x49,7 cm",
			"evidenceIds": [
				"gentilin-816204002-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-816204002-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epoxy (internal/external)",
			"evidenceIds": [
				"gentilin-816204002-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-816204002-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-816204002-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-816204002-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/smart-1-10-f",
			"sourceLabel": "Gentilin, fiche technique SMART 1.10 F, réf. 816204002",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-816204002-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41032902_1778059738.pdf#page=9",
			"sourceLabel": "Gentilin, notice de la famille SMART 1.10, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-816204002-20260926"
		],
		"tankLiters": [
			"gentilin-816204002-20260926"
		],
		"maxPressureBar": [
			"gentilin-816204002-20260926"
		],
		"fadCurve": [
			"gentilin-816204002-20260926"
		],
		"oilType": [
			"gentilin-816204002-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-816204002-20260926"
		],
		"powerKw": [
			"gentilin-816204002-20260926"
		],
		"weightKg": [
			"gentilin-816204002-20260926"
		],
		"voltage": [
			"gentilin-816204002-20260926"
		],
		"dutyCycle": [
			"gentilin-816204002-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 150,
	"powerKw": 0.75,
	"weightKg": 18,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
