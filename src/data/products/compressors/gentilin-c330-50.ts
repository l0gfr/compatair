import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-c330-50",
	"slug": "gentilin-c330-50",
	"brand": "Gentilin",
	"model": "C330/50",
	"mpn": "810209001",
	"tankLiters": 50,
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
		"src": "/images/products/gentilin-c330-50.webp",
		"alt": "Repères techniques Gentilin C330/50, référence 810209001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c330-50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "C330/50, article 810209001 : cuve de 50 L, 200 L/min à 5 bar et 165 L/min à 8 bar, en 230 V à 50 Hz. La fiche actuelle annonce S1 100 % et 44 kg. Le C330/24 conserve la même production publiée, avec 24 L et 38 kg.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 165 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse publiée : 44 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Les 330 L/min sont le débit aspiré ; les deux valeurs sous pression proviennent de la fiche actuelle.",
			"La fiche actuelle donne 55,6 × 47,6 × 101,8 cm ; la notice de mai 2017 donne 477 × 548 × 1030 mm pour le C330/50. Faire confirmer les dimensions de la machine livrée.",
			"Les cuves de 50 et 24 L changent le stockage et le transport, avec les mêmes points de débit publiés.",
			"La déclaration S1 appartient à la fiche actuelle. Les conditions d’installation et d’entretien de la notice restent applicables."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-810209001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "55,6x47,6x101,8 cm",
			"evidenceIds": [
				"gentilin-810209001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810209001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-810209001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810209001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810209001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-50",
			"sourceLabel": "Gentilin, fiche technique C330/50, réf. 810209001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810209001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=29",
			"sourceLabel": "Gentilin, notice de la famille C330/50, p. 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		},
		{
			"id": "gentilin-810206001-20260926-review-20261021-for-gentilin-c330-50",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-24",
			"sourceLabel": "Gentilin, fiche technique C330/24, réf. 810206001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 21 octobre 2026 ; SHA-256 du corps : c149825c3576fd0cdae4b05519b13acd68791d1d32744f72c8b5325ea254767d. Configurations comparées séparément."
		},
		{
			"id": "editorial-20261021-gentilin-c33050-technical-p25",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=25",
			"sourceLabel": "Gentilin, MAN_C330_A001, révision 01 de mai 2017, tableau anglais page PDF 25",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "C330/50 : 44 kg et 477 × 548 × 1030 mm dans la notice, contre 55,6 × 47,6 × 101,8 cm sur la fiche actuelle. Écart conservé sans supposer une génération."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810209001-20260926"
		],
		"tankLiters": [
			"gentilin-810209001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810209001-20260926"
		],
		"fadCurve": [
			"gentilin-810209001-20260926"
		],
		"oilType": [
			"gentilin-810209001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810209001-20260926"
		],
		"powerKw": [
			"gentilin-810209001-20260926"
		],
		"weightKg": [
			"gentilin-810209001-20260926"
		],
		"voltage": [
			"gentilin-810209001-20260926"
		],
		"dutyCycle": [
			"gentilin-810209001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 44,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
