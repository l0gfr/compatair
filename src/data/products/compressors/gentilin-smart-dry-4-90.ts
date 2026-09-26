const product = {
	"id": "gentilin-smart-dry-4-90",
	"slug": "gentilin-smart-dry-4-90",
	"brand": "Gentilin",
	"model": "SMART DRY 4.90",
	"mpn": "813413001",
	"tankLiters": 90,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 315
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 260
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-smart-dry-4-90.webp",
		"alt": "Repères techniques Gentilin SMART DRY 4.90, référence 813413001",
		"sourceUrl": "https://www.gentilinair.com/en/products/smart-dry-4-90",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin SMART DRY 4.90, référence 813413001 : cuve de 90 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 260 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 315 L/min à 5 bar ; 260 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 440 L/min, distinct du débit restitué.",
			"Masse publiée : 85 kg.",
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
				"gentilin-813413001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "98,5x38,9x83,2 cm",
			"evidenceIds": [
				"gentilin-813413001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-813413001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epoxy (internal/external)",
			"evidenceIds": [
				"gentilin-813413001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-813413001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-813413001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-813413001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/smart-dry-4-90",
			"sourceLabel": "Gentilin, fiche technique SMART DRY 4.90, réf. 813413001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-813413001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/smart490en_1711035973.pdf#page=15",
			"sourceLabel": "Gentilin, notice de la famille SMART DRY 4.90, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : SMART 4.90 • Oil-free air compressor with 25 litres tank without dryer. / SMART DRY 4.90 • Oil free air compressor with 25 litres tank with silica salt dryer."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-813413001-20260926"
		],
		"tankLiters": [
			"gentilin-813413001-20260926"
		],
		"maxPressureBar": [
			"gentilin-813413001-20260926"
		],
		"fadCurve": [
			"gentilin-813413001-20260926"
		],
		"oilType": [
			"gentilin-813413001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-813413001-20260926"
		],
		"powerKw": [
			"gentilin-813413001-20260926"
		],
		"weightKg": [
			"gentilin-813413001-20260926"
		],
		"voltage": [
			"gentilin-813413001-20260926"
		],
		"dutyCycle": [
			"gentilin-813413001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 440,
	"powerKw": 3,
	"weightKg": 85,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
