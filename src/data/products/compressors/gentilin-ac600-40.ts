import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-ac600-40",
	"slug": "gentilin-ac600-40",
	"brand": "Gentilin",
	"model": "AC600/40",
	"mpn": "814005001",
	"tankLiters": 40,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 234
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 186
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-ac600-40.webp",
		"alt": "Repères techniques Gentilin AC600/40, référence 814005001",
		"sourceUrl": "https://www.gentilinair.com/en/products/ac600-40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin AC600/40, référence 814005001 : cuve de 40 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 186 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 234 L/min à 5 bar ; 186 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 350 L/min, distinct du débit restitué.",
			"Masse publiée : 22 kg.",
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
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "66x29x59 cm",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S3 70%",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Alluminio",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-814005001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac600-40",
			"sourceLabel": "Gentilin, fiche technique AC600/40, réf. 814005001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-814005001-20260926-oiltype-1",
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
			"gentilin-814005001-20260926"
		],
		"tankLiters": [
			"gentilin-814005001-20260926"
		],
		"maxPressureBar": [
			"gentilin-814005001-20260926"
		],
		"fadCurve": [
			"gentilin-814005001-20260926"
		],
		"oilType": [
			"gentilin-814005001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-814005001-20260926"
		],
		"powerKw": [
			"gentilin-814005001-20260926"
		],
		"weightKg": [
			"gentilin-814005001-20260926"
		],
		"voltage": [
			"gentilin-814005001-20260926"
		],
		"dutyCycle": [
			"gentilin-814005001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 350,
	"powerKw": 2.2,
	"weightKg": 22,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 0.7
};

export default product;
