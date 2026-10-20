import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-c330-24",
	"slug": "gentilin-c330-24",
	"brand": "Gentilin",
	"model": "C330/24",
	"mpn": "810206001",
	"tankLiters": 24,
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
		"src": "/images/products/gentilin-c330-24.webp",
		"alt": "Repères techniques Gentilin C330/24, référence 810206001",
		"sourceUrl": "https://www.gentilinair.com/en/products/c330-24",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "C330/24, article 810206001 : cuve de 24 L, 200 L/min à 5 bar et 165 L/min à 8 bar, en 230 V à 50 Hz. La fiche actuelle annonce S1 100 % et 38 kg. Le C330/03 possède 3 L, pèse 32 kg et publie la même courbe.",
		"verifiedFacts": [
			"Débit restitué publié : 200 L/min à 5 bar ; 165 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Masse publiée : 38 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Les 330 L/min sont le débit aspiré ; les points sous pression proviennent de la fiche actuelle.",
			"La fiche actuelle donne 55,4 × 48 × 78 cm et 38 kg ; la notice de mai 2017 donne 477 × 548 × 793 mm et 36 kg. Faire confirmer la génération et les dimensions de la machine livrée.",
			"Les cuves de 24 et 3 L changent le stockage et le transport, avec la même production publiée.",
			"La déclaration S1 est celle de la fiche actuelle. Les conditions d’installation et d’entretien de la notice restent applicables."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-810206001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "55,4x48x78 cm",
			"evidenceIds": [
				"gentilin-810206001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-810206001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-810206001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-810206001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-810206001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-24",
			"sourceLabel": "Gentilin, fiche technique C330/24, réf. 810206001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-810206001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=29",
			"sourceLabel": "Gentilin, notice de la famille C330/50, p. 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		},
		{
			"id": "gentilin-810201001-20260926-review-20261020-for-gentilin-c330-24",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
			"sourceLabel": "Gentilin, fiche technique C330/03, réf. 810201001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-20",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : 4e9064337e82bfd4156eea01fd8176f3e8830193e096b6f84580320aada0ef89. Configurations comparées séparément."
		},
		{
			"id": "editorial-20261020-gentilin-c33024-technical-p25",
			"sourceUrl": "https://www.gentilinair.com/docs/c330032450_1711018316.pdf#page=25",
			"sourceLabel": "Gentilin, MAN_C330_A001, révision01 de mai2017, tableau anglais pagePDF25",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-20",
			"confidence": "A",
			"notes": "C330/24 :36kg et477×548×793mm dans cette notice, contre38kg et55,4×48×78cm sur la fiche actuelle. Écart d’édition conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-810206001-20260926"
		],
		"tankLiters": [
			"gentilin-810206001-20260926"
		],
		"maxPressureBar": [
			"gentilin-810206001-20260926"
		],
		"fadCurve": [
			"gentilin-810206001-20260926"
		],
		"oilType": [
			"gentilin-810206001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-810206001-20260926"
		],
		"powerKw": [
			"gentilin-810206001-20260926"
		],
		"weightKg": [
			"gentilin-810206001-20260926"
		],
		"voltage": [
			"gentilin-810206001-20260926"
		],
		"dutyCycle": [
			"gentilin-810206001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"weightKg": 38,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
