import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-203bd-dry-13-400-50-ce",
	"slug": "fiac-ax-203bd-dry-13-400-50-ce",
	"brand": "FIAC",
	"model": "AX 203BD DRY 13 400/50 CE",
	"mpn": "4152026243",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-203bd-dry-13-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 203BD DRY 13 400/50 CE, référence 4152026243",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026243/ax-203bd-dry-13-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC AX 203BD DRY 13, code 4152026243 : groupe à vis avec sécheur, sans cuve intégrée, pression maximale publiée de 13 bar et débit documentaire de 1 690 L/min. La fiche sépare ces deux valeurs sans associer explicitement le FAD à sa pression d’essai : le maximum de service ne devient pas une mesure FAD.",
		"verifiedFacts": [
			"Débit documentaire de 1 690 L/min ; pression de mesure non établie dans le bloc primaire relu.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse nette publiée : 297 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La référence commande prime sur le nom commercial : le catalogue utilise AIRBLOK et la fiche en ligne le code AX.",
			"Les puissances arrondies peuvent différer entre le catalogue PDF et la fiche actuelle. Les valeurs de cette fiche proviennent exclusivement de la fiche individuelle consultée.",
			"La courbe de calcul est vide tant que le constructeur ne confirme pas la pression de mesure du débit. Le taux de marche reste inconnu."
		]
	},
	"specifications": [
		{
			"label": "Débit documentaire, pression de mesure à confirmer",
			"value": "1 690 L/min ; aucune association de mesure à 13 bar retenue",
			"evidenceIds": [
				"reserved-neighbor-20261025-fiac-ax-203bd-dry-13-400-50-ce"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152026243-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026243-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026243-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026243/ax-203bd-dry-13-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026243, réf. 4152026243",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026243 publie un FAD de 1690 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026243-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "reserved-neighbor-20261025-fiac-ax-203bd-dry-13-400-50-ce",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026243/ax-203bd-dry-13-40050-ce",
			"sourceLabel": "Relecture du voisin signalé pendant la correction des réserves, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4766d6cbdcd939270ad096d8979b620b2a8c15822d4d790b1ea04c060c3cf908. Aucun point de mesure ou régime n’est déduit d’une simple pression de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026243-20260926"
		],
		"tankLiters": [
			"fiac-4152026243-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026243-20260926"
		],
		"oilType": [
			"fiac-4152026243-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026243-20260926"
		],
		"weightKg": [
			"fiac-4152026243-20260926"
		],
		"voltage": [
			"fiac-4152026243-20260926"
		],
		"phase": [
			"fiac-4152026243-20260926"
		],
		"editorial": [
			"reserved-neighbor-20261025-fiac-ax-203bd-dry-13-400-50-ce"
		],
		"fadCurve": [
			"reserved-neighbor-20261025-fiac-ax-203bd-dry-13-400-50-ce"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 297,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
