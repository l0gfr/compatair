import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-c330-03",
	"slug": "gentilin-c330-03",
	"brand": "Gentilin",
	"model": "C330/03",
	"mpn": "810201001",
	"tankLiters": 3,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 200
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 165
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-c330-03.webp",
		"alt": "Repères techniques Gentilin C330/03, référence 810201001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "C330/03, article 810201001 : cuve de 3 L, 200 L/min à 5 bar et 165 L/min à 8 bar, avec 32 kg publiés. Le C330/24 possède une cuve de 24 L et affiche la même courbe. La fiche actuelle du C330/03 annonce S1 100 %, en 230 V à 50 Hz.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 165 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse publiée : 32 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Les 330 L/min sont le débit aspiré ; les deux points sous pression proviennent de la fiche fabricant.",
			"La fiche actuelle donne 41 × 46,5 × 54 cm ; la notice de mai 2017 donne 396 × 473 × 598 mm pour C330/03. Confirmer la génération et l’encombrement de la machine livrée.",
			"Le volume de cuve distingue les versions 3 et 24 L. Leur courbe commune ne démontre pas une production supérieure pour la plus grande cuve.",
			"Le régime S1 est déclaré sur la fiche actuelle ; les conditions d’installation et d’entretien de la notice restent applicables."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "41x46,5x54 cm",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810201001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810201001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
			"sourceLabel": "Gentilin, fiche technique C330/03, réf. 810201001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810201001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=29",
			"sourceLabel": "Gentilin, notice de la famille C330/50, p. 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		},
		{
			"id": "gentilin-810206001-20260926-review-20261018",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-24",
			"sourceLabel": "Gentilin, fiche technique C330/24, réf. 810206001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-18",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 18 octobre 2026 ; SHA-256 du corps : 507d269200babde62014dc7cc1ff71a269f934bfbc7633af67fd6c61958e8fbf. Comparaison de configurations distinctes."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810201001-20260926"
		],
		"tankLiters": [
			"gentilin-810201001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810201001-20260926"
		],
		"fadCurve": [
			"gentilin-810201001-20260926"
		],
		"oilType": [
			"gentilin-810201001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810201001-20260926"
		],
		"powerKw": [
			"gentilin-810201001-20260926"
		],
		"weightKg": [
			"gentilin-810201001-20260926"
		],
		"voltage": [
			"gentilin-810201001-20260926"
		],
		"dutyCycle": [
			"gentilin-810201001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 32,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
