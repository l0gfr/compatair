import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-153bd-dry-8-400-50-ce",
	"slug": "fiac-ax-153bd-dry-8-400-50-ce",
	"brand": "FIAC",
	"model": "AX 153BD DRY 8 400/50 CE",
	"mpn": "4152026083",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 1675
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-153bd-dry-8-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 153BD DRY 8 400/50 CE, référence 4152026083",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026083/ax-153bd-dry-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC 4152026083 : groupe DRY avec sécheur, sans cuve, délivrant 1 675 L/min à 8 bar en 400 V triphasé à 50 Hz. Le catalogue le nomme AIRBLOK 153 BD DRY ; l’URL de sa fiche porte AX. La version 4152026085 de 13 bar publie 1 210 L/min.",
		"verifiedFacts": [
			"Débit restitué publié : 1 675 L/min à 8 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 11,2 kW.",
			"Masse publiée : 296 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"La fiche individuelle indique 11,2 kW et le catalogue 11 kW. L’origine de cet écart reste à établir ; la valeur typée conserve celle de la fiche individuelle.",
			"Les 296 kg sont une masse publiée dont la qualification nette reste à confirmer.",
			"Le taux de marche reste à documenter. La cuve externe, les équipements livrés et la disponibilité sont à préciser pour la référence commandée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152026083 publie un FAD de 1675 L/min pour cette version de 8 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026083-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152026083-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026083-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026083-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026083/ax-153bd-dry-8-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026083, réf. 4152026083",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026083 publie un FAD de 1675 L/min pour cette version de 8 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026083-20260926-oiltype-1",
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
			"fiac-4152026083-20260926"
		],
		"tankLiters": [
			"fiac-4152026083-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026083-20260926"
		],
		"fadCurve": [
			"fiac-4152026083-20260926"
		],
		"oilType": [
			"fiac-4152026083-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026083-20260926"
		],
		"weightKg": [
			"fiac-4152026083-20260926"
		],
		"voltage": [
			"fiac-4152026083-20260926"
		],
		"phase": [
			"fiac-4152026083-20260926"
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
