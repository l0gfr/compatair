import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-253bd-dry-10-400-50-ce",
	"slug": "fiac-ax-253bd-dry-10-400-50-ce",
	"brand": "FIAC",
	"model": "AX 253BD DRY 10 400/50 CE",
	"mpn": "4152026245",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-253bd-dry-10-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 253BD DRY 10 400/50 CE, référence 4152026245",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026245/ax-253bd-dry-10-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC AX 253BD DRY 10 400/50 CE. La référence 4152026245 est la version 10 bar avec sécheur et sans cuve ; la 4152026246 est la version 13 bar, annoncée à 2 300 L/min. Le web et le catalogue donnent 18,6 et 18,5 kW. La pression de mesure du FAD reste à confirmer, séparément du maximum de service.",
		"verifiedFacts": [
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 18,6 kW.",
			"Masse nette publiée : 434 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée.",
			"Débit annoncé, pression de mesure à confirmer : 2 720 L/min, FAD déclaré séparément de la pression maximale.",
			"Puissance sur la fiche web : 18,6 kW.",
			"Puissance au catalogue 2026 : 18,5 kW.",
			"Équipement : Groupe sans cuve, sécheur intégré.",
			"Masse au catalogue : 434 kg."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La référence commande prime sur le nom commercial : le catalogue utilise AIRBLOK et la fiche en ligne le code AX.",
			"Les puissances arrondies peuvent différer entre le catalogue PDF et la fiche actuelle. Les valeurs de cette fiche proviennent exclusivement de la fiche individuelle consultée.",
			"Les 2 720 L/min sont conservés comme valeur documentaire, sans point FAD utilisé par le moteur.",
			"Écart de puissance 18,6/18,5 kW entre fiche web et catalogue ; configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152026245 publie un FAD de 2720 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026245-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152026245-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1585 × 780 × 1220 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026245-20260926"
			]
		},
		{
			"label": "Débit annoncé, pression de mesure à confirmer",
			"value": "2 720 L/min, FAD déclaré séparément de la pression maximale",
			"evidenceIds": [
				"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance sur la fiche web",
			"value": "18,6 kW",
			"evidenceIds": [
				"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance au catalogue 2026",
			"value": "18,5 kW",
			"evidenceIds": [
				"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe sans cuve, sécheur intégré",
			"evidenceIds": [
				"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Masse au catalogue",
			"value": "434 kg",
			"evidenceIds": [
				"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026245-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026245/ax-253bd-dry-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026245, réf. 4152026245",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026245 publie un FAD de 2720 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026245-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026245/ax-253bd-dry-10-40050-ce",
			"sourceLabel": "FIAC : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 775cc728e7d96aa541c73eb7d27042b981d210b4d9cc56b56c2a9ea94dd965cd. La référence 4152026245 est la version 10 bar avec sécheur et sans cuve ; la 4152026246 est la version 13 bar, annoncée à 2 300 L/min. Le web et le catalogue donnent 18,6 et 18,5 kW. La pression de mesure du FAD reste à confirmer, séparément du maximum de service."
		},
		{
			"id": "fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1-3",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 775cc728e7d96aa541c73eb7d27042b981d210b4d9cc56b56c2a9ea94dd965cd. La référence 4152026245 est la version 10 bar avec sécheur et sans cuve ; la 4152026246 est la version 13 bar, annoncée à 2 300 L/min. Le web et le catalogue donnent 18,6 et 18,5 kW. La pression de mesure du FAD reste à confirmer, séparément du maximum de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026245-20260926"
		],
		"tankLiters": [
			"fiac-4152026245-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026245-20260926"
		],
		"fadCurve": [
			"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
		],
		"oilType": [
			"fiac-4152026245-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026245-20260926"
		],
		"weightKg": [
			"fiac-4152026245-20260926"
		],
		"voltage": [
			"fiac-4152026245-20260926"
		],
		"phase": [
			"fiac-4152026245-20260926"
		],
		"editorial": [
			"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
		],
		"specifications": [
			"fiac-ax-253bd-dry-10-400-50-ce-reserved-20261103-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 18.6,
	"weightKg": 434,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
