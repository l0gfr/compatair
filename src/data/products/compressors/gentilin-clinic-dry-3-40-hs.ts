const product = {
	"id": "gentilin-clinic-dry-3-40-hs",
	"slug": "gentilin-clinic-dry-3-40-hs",
	"brand": "Gentilin",
	"model": "CLINIC DRY 3/40 HS",
	"mpn": "814408008",
	"tankLiters": 40,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 120
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 80
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-clinic-dry-3-40-hs.webp",
		"alt": "Repères techniques Gentilin CLINIC DRY 3/40 HS, référence 814408008",
		"sourceUrl": "https://www.gentilinair.com/en/products/clinicdry340hs",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin CLINIC DRY 3/40 HS, référence 814408008 : cuve de 40 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 80 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 120 L/min à 5 bar ; 80 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,8 kW.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Masse nette publiée : 43 kg.",
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
				"gentilin-814408008-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "65,2x46,3x65,2 cm",
			"evidenceIds": [
				"gentilin-814408008-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-814408008-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Acciaio Inox AISI 304",
			"evidenceIds": [
				"gentilin-814408008-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-814408008-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.430,00 tr/min",
			"evidenceIds": [
				"gentilin-814408008-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-814408008-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinicdry340hs",
			"sourceLabel": "Gentilin, fiche technique CLINIC DRY 3/40 HS, réf. 814408008",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-814408008-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41010702_1778060664.pdf#page=15",
			"sourceLabel": "Gentilin, notice de la famille CLINIC DRY 3/40 HS, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : CLINIC 3.40 • Oil-free air compressor with 40 litres tank without dryer. / CLINIC DRY 3.40 H • Oil free air compressor with 40 litres tank with membrane dryer. / • Oil-free air compressor with 40 litres tank with membrane dryer"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-814408008-20260926"
		],
		"tankLiters": [
			"gentilin-814408008-20260926"
		],
		"maxPressureBar": [
			"gentilin-814408008-20260926"
		],
		"fadCurve": [
			"gentilin-814408008-20260926"
		],
		"oilType": [
			"gentilin-814408008-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-814408008-20260926"
		],
		"powerKw": [
			"gentilin-814408008-20260926"
		],
		"weightKg": [
			"gentilin-814408008-20260926"
		],
		"voltage": [
			"gentilin-814408008-20260926"
		],
		"dutyCycle": [
			"gentilin-814408008-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"powerKw": 1.8,
	"weightKg": 43,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
