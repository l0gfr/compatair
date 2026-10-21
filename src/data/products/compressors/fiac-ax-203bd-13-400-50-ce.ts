import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-203bd-13-400-50-ce",
	"slug": "fiac-ax-203bd-13-400-50-ce",
	"brand": "FIAC",
	"model": "AX 203BD 13 400/50 CE",
	"mpn": "4152026234",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1690
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-203bd-13-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 203BD 13 400/50 CE, référence 4152026234",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026234/ax-203bd-13-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC 4152026234 : groupe de base de 15 kW, sans cuve ni sécheur, avec 1 690 L/min à 13 bar, en 400 V triphasé à 50 Hz. Le 4152026233 de 10 bar conserve le même moteur et publie 2 110 L/min.",
		"verifiedFacts": [
			"Débit restitué publié : 1 690 L/min à 13 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse publiée : 270 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Le catalogue utilise AIRBLOK 203 BD et l’URL porte AX ; le code commande identifie la version de pression.",
			"La fiche actuelle et le catalogue de juin 2026 concordent sur 1 690 L/min, 15 kW et 270 kg pour le 4152026234.",
			"Les 270 kg sont une masse publiée dont la qualification nette reste à confirmer.",
			"Le taux de marche demeure inconnu. Réservoir externe, traitement d’air et équipements livrés sont à préciser sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152026234 publie un FAD de 1690 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026234-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version de base ; sécheur non intégré.",
			"evidenceIds": [
				"fiac-4152026234-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026234-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026234-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026234/ax-203bd-13-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026234, réf. 4152026234",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026234 publie un FAD de 1690 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026234-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "fiac-4152026233-20260926-review-20261021-for-fiac-ax-203bd-13-400-50-ce",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026233/ax-203bd-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026233, réf. 4152026233",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 21 octobre 2026 ; SHA-256 du corps : c972c94eb751644f7e0efdd4277dccd03e32ea3983c27678d8f4aff4e35cfa8a. Configurations comparées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026234-20260926"
		],
		"tankLiters": [
			"fiac-4152026234-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026234-20260926"
		],
		"fadCurve": [
			"fiac-4152026234-20260926"
		],
		"oilType": [
			"fiac-4152026234-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026234-20260926"
		],
		"weightKg": [
			"fiac-4152026234-20260926"
		],
		"voltage": [
			"fiac-4152026234-20260926"
		],
		"phase": [
			"fiac-4152026234-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 270,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
