import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-c330-100",
	"slug": "gentilin-c330-100",
	"brand": "Gentilin",
	"model": "C330/100",
	"mpn": "810210001",
	"tankLiters": 90,
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
		"src": "/images/products/gentilin-c330-100.webp",
		"alt": "Repères techniques Gentilin C330/100, référence 810210001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c330-100",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "C330/100, article 810210001 : la cuve documentée fait 90 L. La fiche actuelle annonce 200 L/min à 5 bar et 165 L/min à 8 bar, en 230 V à 50 Hz, avec un régime S1 100 %. Le C330/03 possède 3 L et la même courbe publiée.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 165 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse publiée : 58 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Les 330 L/min sont le débit aspiré ; les deux points sous pression proviennent de la fiche actuelle.",
			"La fiche actuelle indique 58 kg et 103,5 × 54 × 75 cm. La notice de 2016 donne 56 kg et 533 × 1 010 × 710 mm selon les axes A × B × C de son schéma. La génération et l’encombrement livrés restent à confirmer.",
			"Les cuves de 90 et 3 L changent le stockage et le transport ; leur courbe commune ne démontre pas une production supérieure pour le C330/100.",
			"Le régime S1 est déclaré sur la fiche actuelle ; les conditions d’installation et d’entretien de la notice restent applicables."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-810210001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "103,5x54x75 cm",
			"evidenceIds": [
				"gentilin-810210001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810210001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-810210001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810210001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810210001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-100",
			"sourceLabel": "Gentilin, fiche technique C330/100, réf. 810210001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810210001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/c330100_1711018362.pdf#page=40",
			"sourceLabel": "Gentilin, notice de la famille C330/100, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		},
		{
			"id": "gentilin-810201001-20260926-review-20261019-for-gentilin-c330-100",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
			"sourceLabel": "Gentilin, fiche technique C330/03, réf. 810201001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-19",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : eadbe5a20fab5a2ffe300c4ec0814f97d3995941aac5de5a709496794854ccba. Configurations comparées séparément."
		},
		{
			"id": "editorial-20261019-gentilin-c330100-technical-p34",
			"sourceUrl": "https://www.gentilinair.com/docs/c330100_1711018362.pdf#page=34",
			"sourceLabel": "Gentilin, notice C330/100, tableau anglais page PDF 34, révision 00 de juin 2016",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-19",
			"confidence": "A",
			"notes": "Tableau 50 Hz : cuve 90 L, 56 kg et dimensions A × B × C 533 × 1010 × 710 mm ; divergences avec la fiche actuelle conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810210001-20260926"
		],
		"tankLiters": [
			"gentilin-810210001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810210001-20260926"
		],
		"fadCurve": [
			"gentilin-810210001-20260926"
		],
		"oilType": [
			"gentilin-810210001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810210001-20260926"
		],
		"powerKw": [
			"gentilin-810210001-20260926"
		],
		"weightKg": [
			"gentilin-810210001-20260926"
		],
		"voltage": [
			"gentilin-810210001-20260926"
		],
		"dutyCycle": [
			"gentilin-810210001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 58,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
