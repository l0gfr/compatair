import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-formula-e-7-5-10-400-50",
	"slug": "abac-formula-e-7-5-10-400-50",
	"brand": "ABAC",
	"model": "FORMULA E 7,5 10 400/50 ",
	"mpn": "4152025395",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1080
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-formula-e-7-5-10-400-50.webp",
		"alt": "Repères techniques ABAC FORMULA E 7,5 10 400/50 , référence 4152025395",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FORMULA E 7,5 10 400/50, article 4152025395 : 1 080 L/min à 10 bar, moteur de 7,5 kW, configuration Full Feature sans cuve, en 400 V triphasé à 50 Hz. Le 4152025394 de 8 bar publie 1 240 L/min.",
		"verifiedFacts": [
			"Débit restitué publié : 1 080 L/min à 10 bar.",
			"Compresseur rotatif à vis lubrifié, famille FORMULA. Puissance moteur publiée : 7,5 kW.",
			"Masse publiée : 276 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Les capacités de 1 080 et 1 240 L/min appartiennent à deux versions de pression distinctes ; aucun débit aux autres pressions n’est déduit.",
			"Le taux de marche du groupe complet reste à confirmer pour cet article.",
			"Les 276 kg concordent entre le bloc produit et les attributs ERP du 4152025395, sans qualification nette établie. Pour le voisin 4152025394, ces deux blocs indiquent respectivement 276 et 243 kg ; sa masse reste à clarifier.",
			"Le nom ERP français indique FORMULA E 10 10, tandis que les autres langues indiquent E 7,5 10. Faire confirmer le code 4152025395 sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD capacity (l/min) : 1080 ; Max Working Pressure (bar) : 10, dans le tableau fabricant de la variante 4152025395. Valeur restituée, pas aspirée.",
			"evidenceIds": [
				"abac-4152025395-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration Full Feature publiée par le fabricant.",
			"evidenceIds": [
				"abac-4152025395-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 665 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152025395-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152025395-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes FORMULA, réf. 4152025395",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 1080 ; Max Working Pressure (bar) : 10, dans le tableau fabricant de la variante 4152025395. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-formula-e-7-5-10-400-50-continuous-duty-20260927",
			"sourceUrl": "https://www.abacaircompressors.com/en-international/products/screw-compressors",
			"sourceLabel": "ABAC, gamme de compresseurs à vis SPINN, FORMULA et GENESIS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Déclaration de la gamme ABAC à vis ; uniquement les références SPINN, FORMULA et GENESIS revues individuellement dans ce lot."
		}
	],
	"fieldSources": {
		"mpn": [
			"abac-4152025395-20260926"
		],
		"tankLiters": [
			"abac-4152025395-20260926"
		],
		"maxPressureBar": [
			"abac-4152025395-20260926"
		],
		"fadCurve": [
			"abac-4152025395-20260926"
		],
		"oilType": [
			"abac-4152025395-20260926"
		],
		"powerKw": [
			"abac-4152025395-20260926"
		],
		"weightKg": [
			"abac-4152025395-20260926"
		],
		"voltage": [
			"abac-4152025395-20260926"
		],
		"phase": [
			"abac-4152025395-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"weightKg": 276,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
