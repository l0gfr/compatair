import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-esk480-100-811610006",
	"slug": "gentilin-esk480-100-811610006",
	"brand": "Gentilin",
	"model": "ESK480/100",
	"mpn": "811610006",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 255
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 210
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-esk480-100-811610006-technical-20261116-reviews.svg",
		"alt": "Repères techniques Gentilin ESK480/100, référence 811610006",
		"sourceUrl": "https://www.gentilinair.com/docs/esk660100en_1711032524.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "L’ESK480/100 811610006 possède une cuve publiée de 90 L et mesure 103,5 × 54 × 75 cm. Le modèle ESK480/10 est plus court et ne stocke que 10 L ; tous deux publient 255 L/min à 5 bar et 210 à 8 bar. La fiche exacte indique 2,8 kW et Duty cycle S1 100%. La notice commune inclut bien les ESK480/100 et ESK660/100 : son nom de fichier ne suffit pas à exclure le premier.",
		"verifiedFacts": [
			"Débit restitué publié : 255 L/min à 5 bar ; 210 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,8 kW.",
			"Débit aspiré : 430 L/min, distinct du débit restitué.",
			"Masse publiée : 84 kg.",
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
				"gentilin-811610006-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "103,5x54x75 cm",
			"evidenceIds": [
				"gentilin-811610006-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-811610006-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epossidica (interno/esterno)",
			"evidenceIds": [
				"gentilin-811610006-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-811610006-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-811610006-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-811610006-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk480-100-230-50",
			"sourceLabel": "Gentilin, fiche technique ESK480/100, réf. 811610006",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-811610006-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/esk660100en_1711032524.pdf#page=12",
			"sourceLabel": "Gentilin, notice de la famille ESK660/100, p. 12",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current legislation in force (E.g. blowing,"
		},
		{
			"id": "review:2026-11-16-reviews:gentilin-esk480-100-811610006:0",
			"sourceUrl": "https://www.gentilinair.com/docs/esk660100en_1711032524.pdf",
			"sourceLabel": "Gentilin, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’ESK480/100 811610006 possède une cuve publiée de 90 L et mesure 103,5 × 54 × 75 cm. Le modèle ESK480/10 est plus court et ne stocke que 10 L ; tous deux publient 255 L/min à 5 bar et 210 à 8 bar. La fiche exacte indique 2,8 kW et Duty cycle S1 100%. La notice commune inclut bien les ESK480/100 et ESK660/100 : son nom de fichier ne suffit pas à exclure le premier. GET complet SHA-256 0fbfccc3fd9ef013a94acc6c500a67f29213bfba0ace1eebac1065f2ede995b3. Pages PDF lues : 12."
		},
		{
			"id": "review:2026-11-16-reviews:gentilin-esk480-100-811610006:1",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk480-100-230-50",
			"sourceLabel": "Gentilin, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’ESK480/100 811610006 possède une cuve publiée de 90 L et mesure 103,5 × 54 × 75 cm. Le modèle ESK480/10 est plus court et ne stocke que 10 L ; tous deux publient 255 L/min à 5 bar et 210 à 8 bar. La fiche exacte indique 2,8 kW et Duty cycle S1 100%. La notice commune inclut bien les ESK480/100 et ESK660/100 : son nom de fichier ne suffit pas à exclure le premier. GET complet SHA-256 9b6c98dda68986f4120ad6a2893583090b3a41ce8b83182b3aafe4c6e9c7e756. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-811610006-20260926"
		],
		"tankLiters": [
			"gentilin-811610006-20260926"
		],
		"maxPressureBar": [
			"gentilin-811610006-20260926"
		],
		"fadCurve": [
			"gentilin-811610006-20260926"
		],
		"oilType": [
			"gentilin-811610006-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-811610006-20260926"
		],
		"powerKw": [
			"gentilin-811610006-20260926"
		],
		"weightKg": [
			"gentilin-811610006-20260926"
		],
		"voltage": [
			"gentilin-811610006-20260926"
		],
		"dutyCycle": [
			"gentilin-811610006-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 430,
	"powerKw": 2.8,
	"weightKg": 84,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1,
	"variant": {
		"familyId": "gentilin-esk480-100",
		"label": "Référence 811610006",
		"distinguishingAttributes": {
			"reference": "811610006"
		}
	}
};

export default product;
