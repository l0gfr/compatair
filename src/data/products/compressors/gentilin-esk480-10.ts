import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-esk480-10",
	"slug": "gentilin-esk480-10",
	"brand": "Gentilin",
	"model": "ESK480/10",
	"mpn": "811604007",
	"tankLiters": 10,
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
		"src": "/images/products/gentilin-esk480-10-technical-20261116-reviews.svg",
		"alt": "Repères techniques Gentilin ESK480/10, référence 811604007",
		"sourceUrl": "https://www.gentilinair.com/docs/esk480-660-10-en_1711031505.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "L’ESK480/10 associe une cuve de 10 L à un groupe quatre cylindres de 2,8 kW sous 230 V/50 Hz. La fiche donne 255 L/min à 5 bar et 210 à 8 bar, distincts des 430 L/min aspirés. L’ESK480/100 conserve ces points avec une cuve réelle de 90 L ; le nombre du nom ne remplace pas sa capacité publiée. Le libellé Duty cycle S1 100% est conservé avec sa portée constructeur.",
		"verifiedFacts": [
			"Débit restitué publié : 255 L/min à 5 bar ; 210 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,8 kW.",
			"Débit aspiré : 430 L/min, distinct du débit restitué.",
			"Masse publiée : 72 kg.",
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
				"gentilin-811604007-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "79x59,5x57 cm",
			"evidenceIds": [
				"gentilin-811604007-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-811604007-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Epodissica (esterno)",
			"evidenceIds": [
				"gentilin-811604007-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-811604007-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-811604007-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-811604007-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk480-100-mono",
			"sourceLabel": "Gentilin, fiche technique ESK480/10, réf. 811604007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-811604007-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/esk480-660-10-en_1711031505.pdf#page=13",
			"sourceLabel": "Gentilin, notice de la famille ESK660/10, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Compressing air (no oil) to be used with suitable pneumatic utensils according to current"
		},
		{
			"id": "review:2026-11-16-reviews:gentilin-esk480-10:0",
			"sourceUrl": "https://www.gentilinair.com/docs/esk480-660-10-en_1711031505.pdf",
			"sourceLabel": "Gentilin, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’ESK480/10 associe une cuve de 10 L à un groupe quatre cylindres de 2,8 kW sous 230 V/50 Hz. La fiche donne 255 L/min à 5 bar et 210 à 8 bar, distincts des 430 L/min aspirés. L’ESK480/100 conserve ces points avec une cuve réelle de 90 L ; le nombre du nom ne remplace pas sa capacité publiée. Le libellé Duty cycle S1 100% est conservé avec sa portée constructeur. GET complet SHA-256 7aa4be2a0bcd740f8a75785d75adac3b2062688b0b69c8810b6251e1dc8c39c0. Pages PDF lues : 13."
		},
		{
			"id": "review:2026-11-16-reviews:gentilin-esk480-10:1",
			"sourceUrl": "https://www.gentilinair.com/en/products/esk480-100-mono",
			"sourceLabel": "Gentilin, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’ESK480/10 associe une cuve de 10 L à un groupe quatre cylindres de 2,8 kW sous 230 V/50 Hz. La fiche donne 255 L/min à 5 bar et 210 à 8 bar, distincts des 430 L/min aspirés. L’ESK480/100 conserve ces points avec une cuve réelle de 90 L ; le nombre du nom ne remplace pas sa capacité publiée. Le libellé Duty cycle S1 100% est conservé avec sa portée constructeur. GET complet SHA-256 eae97573058ec54eac2e971c3ca34c893e3d1801d1193b811149dd1fa15a6164. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-811604007-20260926"
		],
		"tankLiters": [
			"gentilin-811604007-20260926"
		],
		"maxPressureBar": [
			"gentilin-811604007-20260926"
		],
		"fadCurve": [
			"gentilin-811604007-20260926"
		],
		"oilType": [
			"gentilin-811604007-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-811604007-20260926"
		],
		"powerKw": [
			"gentilin-811604007-20260926"
		],
		"weightKg": [
			"gentilin-811604007-20260926"
		],
		"voltage": [
			"gentilin-811604007-20260926"
		],
		"dutyCycle": [
			"gentilin-811604007-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 430,
	"powerKw": 2.8,
	"weightKg": 72,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
