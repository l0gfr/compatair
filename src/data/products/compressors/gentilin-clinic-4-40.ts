const product = {
	"id": "gentilin-clinic-4-40",
	"slug": "gentilin-clinic-4-40",
	"brand": "Gentilin",
	"model": "CLINIC 4/40",
	"mpn": "816808001",
	"tankLiters": 40,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 200
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 170
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-clinic-4-40.webp",
		"alt": "Repères techniques Gentilin CLINIC 4/40, référence 816808001",
		"sourceUrl": "https://www.gentilinair.com/en/products/clinic-4-40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin CLINIC 4/40, référence 816808001 : cuve de 40 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 170 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 170 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse nette publiée : 39 kg.",
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
				"gentilin-816808001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "65,2x46,3x65,2 cm",
			"evidenceIds": [
				"gentilin-816808001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-816808001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Acciaio Inox AISI 304",
			"evidenceIds": [
				"gentilin-816808001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-816808001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-816808001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-816808001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-4-40",
			"sourceLabel": "Gentilin, fiche technique CLINIC 4/40, réf. 816808001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-816808001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/en/categories/process-air",
			"sourceLabel": "Gentilin, gamme Process Air sans huile",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le fabricant décrit explicitement ses compresseurs Process Air comme sans huile ; cette référence est listée dans la sous-gamme correspondante."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-816808001-20260926"
		],
		"tankLiters": [
			"gentilin-816808001-20260926"
		],
		"maxPressureBar": [
			"gentilin-816808001-20260926"
		],
		"fadCurve": [
			"gentilin-816808001-20260926"
		],
		"oilType": [
			"gentilin-816808001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-816808001-20260926"
		],
		"powerKw": [
			"gentilin-816808001-20260926"
		],
		"weightKg": [
			"gentilin-816808001-20260926"
		],
		"voltage": [
			"gentilin-816808001-20260926"
		],
		"dutyCycle": [
			"gentilin-816808001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 39,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
