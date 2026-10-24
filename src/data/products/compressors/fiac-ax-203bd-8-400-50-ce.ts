import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-203bd-8-400-50-ce",
	"slug": "fiac-ax-203bd-8-400-50-ce",
	"brand": "FIAC",
	"model": "AX 203BD 8 400/50 CE",
	"mpn": "4152026232",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-203bd-8-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 203BD 8 400/50 CE, référence 4152026232",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026232/ax-203bd-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La référence 4152026232 correspond à la version de pression maximale 8 bar et de puissance 15 kW ; FIAC publie un FAD de 2 330 L/min. La 4152026234 atteint 13 bar et annonce 1 690 L/min. Ces deux commandes conservent le montage au sol sans cuve intégrée : le stockage doit être prévu sur l’installation. La pression de mesure du FAD n’est pas précisée dans la fiche individuelle ; le maximum de 8 bar ne peut pas la remplacer. Le débit reste documentaire et la compatibilité dépendante du débit demeure indéterminée.",
		"verifiedFacts": [
			"Débit FAD fabricant : 2 330 L/min pour 4152026232 ; pression de mesure à confirmer.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse nette publiée : 270 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Aucun point FAD à pression de mesure connue n’est établi. Le débit de 2 330 L/min et le maximum de 8 bar sont deux caractéristiques publiées séparément.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La référence commande prime sur le nom commercial : le catalogue utilise AIRBLOK et la fiche en ligne le code AX.",
			"Les puissances arrondies peuvent différer entre le catalogue PDF et la fiche actuelle. Les valeurs de cette fiche proviennent exclusivement de la fiche individuelle consultée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD publié : 2 330 L/min. Pression maximale : 8 bar. La pression de mesure du FAD n’est pas explicitée ; aucun point dimensionnant n’est retenu.",
			"evidenceIds": [
				"fiac-4152026232-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version de base ; sécheur non intégré.",
			"evidenceIds": [
				"fiac-4152026232-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026232-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026232-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026232/ax-203bd-8-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026232, réf. 4152026232",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026232 publie un FAD de 2330 L/min pour cette version de 8 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026232-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "fiac-4152026234-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026234/ax-203bd-13-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026234, réf. 4152026234",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026234 publie un FAD de 1690 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026232-20260926"
		],
		"tankLiters": [
			"fiac-4152026232-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026232-20260926"
		],
		"fadCurve": [
			"fiac-4152026232-20260926"
		],
		"oilType": [
			"fiac-4152026232-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026232-20260926"
		],
		"weightKg": [
			"fiac-4152026232-20260926"
		],
		"voltage": [
			"fiac-4152026232-20260926"
		],
		"phase": [
			"fiac-4152026232-20260926"
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
