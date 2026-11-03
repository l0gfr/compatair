import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-253bd-8-400-50-ce",
	"slug": "fiac-ax-253bd-8-400-50-ce",
	"brand": "FIAC",
	"model": "AX 253BD 8 400/50 CE",
	"mpn": "4152026235",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-253bd-8-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 253BD 8 400/50 CE, référence 4152026235",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026235/ax-253bd-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC AX 253BD 8 400/50 CE. La AX 253BD 8 de code 4152026235 annonce 3 110 L/min et 361 kg ; la DRY 10 de code 4152026245 ajoute le sécheur et publie 2 720 L/min, 434 kg. Les colonnes de pression maximale ne prouvent pas la pression de mesure. Le catalogue et la fiche HTML divergent aussi entre 18,5 et 18,6 kW.",
		"verifiedFacts": [
			"Code : 4152026235.",
			"Montage : Base, sans sécheur ni cuve intégrée.",
			"Capacité FAD publiée : 3 110 L/min, pression de mesure à confirmer.",
			"Puissance catalogue : 18,5 kW.",
			"Puissance fiche HTML : 18,6 kW, écart conservé.",
			"Masse : 361 kg.",
			"Dimensions : 1 130 × 780 × 1 220 mm."
		],
		"limitations": [
			"FAD conservé dans les spécifications, sans point de pression de mesure explicite.",
			"Puissance catalogue 18,5 kW et HTML 18,6 kW conservées comme déclarations contradictoires ; aucune précision artificielle."
		]
	},
	"specifications": [
		{
			"label": "Code",
			"value": "4152026235",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Montage",
			"value": "Base, sans sécheur ni cuve intégrée",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité FAD publiée",
			"value": "3 110 L/min, pression de mesure à confirmer",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance catalogue",
			"value": "18,5 kW",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance fiche HTML",
			"value": "18,6 kW, écart conservé",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "361 kg",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "1 130 × 780 × 1 220 mm",
			"evidenceIds": [
				"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026235-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026235/ax-253bd-8-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026235, réf. 4152026235",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026235 publie un FAD de 3110 L/min pour cette version de 8 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026235-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "fiac-ax-253bd-8-400-50-ce-reserved-20261103-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 55421a11ceb9c201bd873f1d0e4596ea6682b7fd68fc5e03e0c380ddf879ac85. La AX 253BD 8 de code 4152026235 annonce 3 110 L/min et 361 kg ; la DRY 10 de code 4152026245 ajoute le sécheur et publie 2 720 L/min, 434 kg. Les colonnes de pression maximale ne prouvent pas la pression de mesure. Le catalogue et la fiche HTML divergent aussi entre 18,5 et 18,6 kW."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026235-20260926"
		],
		"tankLiters": [
			"fiac-4152026235-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026235-20260926"
		],
		"fadCurve": [
			"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
		],
		"oilType": [
			"fiac-4152026235-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026235-20260926"
		],
		"weightKg": [
			"fiac-4152026235-20260926"
		],
		"voltage": [
			"fiac-4152026235-20260926"
		],
		"phase": [
			"fiac-4152026235-20260926"
		],
		"editorial": [
			"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
		],
		"specifications": [
			"fiac-ax-253bd-8-400-50-ce-reserved-20261103-1"
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
