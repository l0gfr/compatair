const product = {
	"id": "gentilin-sca300-sp-270",
	"slug": "gentilin-sca300-sp-270",
	"brand": "Gentilin",
	"model": "SCA300/SP-270",
	"mpn": "800235002",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 240
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-sca300-sp-270.webp",
		"alt": "Repères techniques Gentilin SCA300/SP-270, référence 800235002",
		"sourceUrl": "https://www.gentilinair.com/en/products/sca300-sp-270",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin SCA300/SP-270, référence 800235002 : cuve de 270 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 240 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 240 L/min à 8 bar.",
			"Compresseur scroll sans huile. Puissance moteur publiée : 2,2 kW.",
			"Masse nette publiée : 610 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"La disponibilité commerciale et les exigences électriques de l’installation sont à confirmer avant achat."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 8.0 bar. Le débit aspiré n’est pas renseigné.",
			"evidenceIds": [
				"gentilin-800235002-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1190,00 cm",
			"evidenceIds": [
				"gentilin-800235002-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-800235002-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epoxy (external) - Teflon (internal)",
			"evidenceIds": [
				"gentilin-800235002-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3.250,00 tr/min",
			"evidenceIds": [
				"gentilin-800235002-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-800235002-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/sca300-sp-270",
			"sourceLabel": "Gentilin, fiche technique SCA300/SP-270, réf. 800235002",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 8.0 bar. Le débit aspiré n’est pas renseigné."
		},
		{
			"id": "gentilin-800235002-20260926-oiltype-1",
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
			"gentilin-800235002-20260926"
		],
		"tankLiters": [
			"gentilin-800235002-20260926"
		],
		"maxPressureBar": [
			"gentilin-800235002-20260926"
		],
		"fadCurve": [
			"gentilin-800235002-20260926"
		],
		"oilType": [
			"gentilin-800235002-20260926-oiltype-1"
		],
		"powerKw": [
			"gentilin-800235002-20260926"
		],
		"weightKg": [
			"gentilin-800235002-20260926"
		],
		"voltage": [
			"gentilin-800235002-20260926"
		],
		"dutyCycle": [
			"gentilin-800235002-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 2.2,
	"weightKg": 610,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
