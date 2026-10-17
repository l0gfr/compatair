import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-153bd-dry-10-400-50-ce",
	"slug": "fiac-ax-153bd-dry-10-400-50-ce",
	"brand": "FIAC",
	"model": "AX 153BD DRY 10 400/50 CE",
	"mpn": "4152026084",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1510
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-153bd-dry-10-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 153BD DRY 10 400/50 CE, référence 4152026084",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026084/ax-153bd-dry-10-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La référence FIAC 4152026084 associe un sécheur intégré à un groupe sans cuve : 1 510 L/min à 10 bar, 400 V triphasé, 50 Hz. Le catalogue la nomme AIRBLOK 153BD DRY ; l’URL conserve AX. La version 4152026085 publie 1 210 L/min à 13 bar.",
		"verifiedFacts": [
			"Débit restitué publié : 1 510 L/min à 10 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 11,2 kW.",
			"Masse publiée : 296 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Le FAD de chaque version reste rattaché à sa pression et à sa référence de commande.",
			"Le taux de marche du groupe complet reste à confirmer ; un FAD disponible ne suffit pas à établir son endurance.",
			"La fiche individuelle publie 11,2 kW et le catalogue 11 kW. L’origine de cet écart n’est pas établie ; les 11,2 kW sont ceux de la fiche individuelle consultée.",
			"Les 296 kg sont une masse publiée dont la qualification nette doit être confirmée. Installation, cuve externe et disponibilité locale sont à préciser sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152026084 publie un FAD de 1510 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026084-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152026084-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026084-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026084-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026084/ax-153bd-dry-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026084, réf. 4152026084",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026084 publie un FAD de 1510 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026084-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026084-20260926"
		],
		"tankLiters": [
			"fiac-4152026084-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026084-20260926"
		],
		"fadCurve": [
			"fiac-4152026084-20260926"
		],
		"oilType": [
			"fiac-4152026084-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026084-20260926"
		],
		"weightKg": [
			"fiac-4152026084-20260926"
		],
		"voltage": [
			"fiac-4152026084-20260926"
		],
		"phase": [
			"fiac-4152026084-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11.2,
	"weightKg": 296,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
