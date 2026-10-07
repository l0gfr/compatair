import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-dc100-05",
	"slug": "gentilin-dc100-05",
	"brand": "Gentilin",
	"model": "DC100/05",
	"mpn": "813903003",
	"tankLiters": 5,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 55
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 40
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-dc100-05.webp",
		"alt": "Repères techniques Gentilin DC100/05, référence 813903003",
		"sourceUrl": "https://www.gentilinair.com/en/products/dc100-05",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin DC100/05, référence 813903003 : cuve de 5 L, pression maximale publiée de 9 bar. Le point documenté le plus élevé en pression fournit 40 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 55 L/min à 5 bar ; 40 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 105 L/min, distinct du débit restitué.",
			"Masse publiée : 11 kg.",
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
				"gentilin-813903003-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "32x26x47 cm",
			"evidenceIds": [
				"gentilin-813903003-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-813903003-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-813903003-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-813903003-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-813903003-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/dc100-05",
			"sourceLabel": "Gentilin, fiche technique DC100/05, réf. 813903003",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-813903003-20260926-oiltype-1",
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
			"gentilin-813903003-20260926"
		],
		"tankLiters": [
			"gentilin-813903003-20260926"
		],
		"maxPressureBar": [
			"gentilin-813903003-20260926"
		],
		"fadCurve": [
			"gentilin-813903003-20260926"
		],
		"oilType": [
			"gentilin-813903003-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-813903003-20260926"
		],
		"powerKw": [
			"gentilin-813903003-20260926"
		],
		"weightKg": [
			"gentilin-813903003-20260926"
		],
		"voltage": [
			"gentilin-813903003-20260926"
		],
		"dutyCycle": [
			"gentilin-813903003-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 105,
	"powerKw": 0.55,
	"weightKg": 11,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
