import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax503dr-dry-8-5-400-50-meaa",
	"slug": "fiac-ax503dr-dry-8-5-400-50-meaa",
	"brand": "FIAC",
	"model": "AX503DR DRY 8,5 400 50 MEAA",
	"mpn": "4152035181",
	"tankLiters": 0,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 8.5,
			"litersPerMinute": 6090
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax503dr-dry-8-5-400-50-meaa.webp",
		"alt": "Repères techniques FIAC AX503DR DRY 8,5 400 50 MEAA, référence 4152035181",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152035181/ax503dr-dry-85-400-50-meaa",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC AX503DR DRY 8,5 400 50 MEAA, référence 4152035181 : configuration sans cuve intégrée, pression maximale publiée de 8,5 bar. Le point documenté le plus élevé en pression fournit 6 090 L/min à 8,5 bar. Sans cuve intégrée. Version DRY avec sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 6 090 L/min à 8,5 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 37,5 kW.",
			"Masse nette publiée : 728 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La référence commande prime sur le nom commercial : le catalogue utilise AIRBLOK et la fiche en ligne le code AX.",
			"Les puissances arrondies peuvent différer entre le catalogue PDF et la fiche actuelle. Les valeurs de cette fiche proviennent exclusivement de la fiche individuelle consultée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152035181 publie un FAD de 6090 L/min pour cette version de 8.5 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152035181-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152035181-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1810 × 830 × 1555 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152035181-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152035181-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152035181/ax503dr-dry-85-400-50-meaa",
			"sourceLabel": "FIAC, fiche officielle 4152035181, réf. 4152035181",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152035181 publie un FAD de 6090 L/min pour cette version de 8.5 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152035181-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=41",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 41",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152035181-20260926"
		],
		"tankLiters": [
			"fiac-4152035181-20260926"
		],
		"maxPressureBar": [
			"fiac-4152035181-20260926"
		],
		"fadCurve": [
			"fiac-4152035181-20260926"
		],
		"oilType": [
			"fiac-4152035181-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152035181-20260926"
		],
		"weightKg": [
			"fiac-4152035181-20260926"
		],
		"voltage": [
			"fiac-4152035181-20260926"
		],
		"phase": [
			"fiac-4152035181-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 37.5,
	"weightKg": 728,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
