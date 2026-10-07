import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-esk960-500",
	"slug": "gentilin-esk960-500",
	"brand": "Gentilin",
	"model": "ESK960/500",
	"mpn": "816512001",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 690
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 570
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-esk960-500.webp",
		"alt": "Repères techniques Gentilin ESK960/500, référence 816512001",
		"sourceUrl": "https://www.gentilinair.com/en/products/esk960-500",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Gentilin ESK960/500, référence 816512001 : cuve de 500 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 570 L/min à 8 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 690 L/min à 5 bar ; 570 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 6 kW.",
			"Débit aspiré : 960 L/min, distinct du débit restitué.",
			"Masse publiée : 248 kg.",
			"Alimentation publiée : 400 V, 50 Hz."
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
				"gentilin-816512001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "199,2x61,5x100,6 cm",
			"evidenceIds": [
				"gentilin-816512001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-816512001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epoxy (internal/external)",
			"evidenceIds": [
				"gentilin-816512001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "8",
			"evidenceIds": [
				"gentilin-816512001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-816512001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-816512001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk960-500",
			"sourceLabel": "Gentilin, fiche technique ESK960/500, réf. 816512001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-816512001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41032302_1778060121.pdf#page=1",
			"sourceLabel": "Gentilin, notice de la famille ESK960/500, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : OIL-FREE PISTON AIR COMPRESSORS"
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-816512001-20260926"
		],
		"tankLiters": [
			"gentilin-816512001-20260926"
		],
		"maxPressureBar": [
			"gentilin-816512001-20260926"
		],
		"fadCurve": [
			"gentilin-816512001-20260926"
		],
		"oilType": [
			"gentilin-816512001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-816512001-20260926"
		],
		"powerKw": [
			"gentilin-816512001-20260926"
		],
		"weightKg": [
			"gentilin-816512001-20260926"
		],
		"voltage": [
			"gentilin-816512001-20260926"
		],
		"dutyCycle": [
			"gentilin-816512001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 960,
	"powerKw": 6,
	"weightKg": 248,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
