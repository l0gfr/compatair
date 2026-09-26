const product = {
	"id": "gentilin-smart-3-25-s",
	"slug": "gentilin-smart-3-25-s",
	"brand": "Gentilin",
	"model": "SMART 3.25-S",
	"mpn": "815007004",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 150
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 120
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-smart-3-25-s.webp",
		"alt": "Repères techniques Gentilin SMART 3.25-S, référence 815007004",
		"sourceUrl": "https://www.gentilinair.com/en/products/smart-3-25-s",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin SMART 3.25-S, référence 815007004 : cuve de 24 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 120 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 150 L/min à 5 bar ; 120 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,8 kW.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Masse publiée : 37 kg.",
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
				"gentilin-815007004-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "42,2x42,2x73,1 cm",
			"evidenceIds": [
				"gentilin-815007004-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-815007004-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epoxy (internal/external)",
			"evidenceIds": [
				"gentilin-815007004-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-815007004-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-815007004-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-815007004-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/smart-3-25-s",
			"sourceLabel": "Gentilin, fiche technique SMART 3.25-S, réf. 815007004",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-815007004-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/smart-125-325-en_1711036629.pdf#page=15",
			"sourceLabel": "Gentilin, notice de la famille SMART DRY 3.25-S, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : CLINIC 1.25 • Oil-free air compressor with 25 litres tank without dryer. / CLINIC DRY 1.25 • Oil free air compressor with 25 litres tank with silica salt dryer. / CLINIC 3.25 • Oil-free air compressor with 25 litres tank without dryer. / CLINIC DRY 3.25 • Oil free air compressor with 25 litres tank with silica salt dryer."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-815007004-20260926"
		],
		"tankLiters": [
			"gentilin-815007004-20260926"
		],
		"maxPressureBar": [
			"gentilin-815007004-20260926"
		],
		"fadCurve": [
			"gentilin-815007004-20260926"
		],
		"oilType": [
			"gentilin-815007004-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-815007004-20260926"
		],
		"powerKw": [
			"gentilin-815007004-20260926"
		],
		"weightKg": [
			"gentilin-815007004-20260926"
		],
		"voltage": [
			"gentilin-815007004-20260926"
		],
		"dutyCycle": [
			"gentilin-815007004-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"powerKw": 1.8,
	"weightKg": 37,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
