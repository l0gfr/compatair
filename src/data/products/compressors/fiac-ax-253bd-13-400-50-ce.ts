import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-253bd-13-400-50-ce",
	"slug": "fiac-ax-253bd-13-400-50-ce",
	"brand": "FIAC",
	"model": "AX 253BD 13 400/50 CE",
	"mpn": "4152026237",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 2300
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-253bd-13-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 253BD 13 400/50 CE, référence 4152026237",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026237/ax-253bd-13-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC AX 253BD 13 400/50 CE, référence 4152026237 : configuration sans cuve intégrée, pression maximale publiée de 13 bar. Le point documenté le plus élevé en pression fournit 2 300 L/min à 13 bar. Sans cuve intégrée. Version de base ; sécheur non intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 2 300 L/min à 13 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 18,6 kW.",
			"Masse nette publiée : 361 kg.",
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
			"value": "La fiche individuelle 4152026237 publie un FAD de 2300 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026237-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version de base ; sécheur non intégré.",
			"evidenceIds": [
				"fiac-4152026237-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1130 × 780 × 1220 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026237-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026237-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026237/ax-253bd-13-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026237, réf. 4152026237",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026237 publie un FAD de 2300 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026237-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026237-20260926"
		],
		"tankLiters": [
			"fiac-4152026237-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026237-20260926"
		],
		"fadCurve": [
			"fiac-4152026237-20260926"
		],
		"oilType": [
			"fiac-4152026237-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026237-20260926"
		],
		"weightKg": [
			"fiac-4152026237-20260926"
		],
		"voltage": [
			"fiac-4152026237-20260926"
		],
		"phase": [
			"fiac-4152026237-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 18.6,
	"weightKg": 361,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
