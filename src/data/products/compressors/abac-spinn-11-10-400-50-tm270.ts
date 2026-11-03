import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-spinn-11-10-400-50-tm270",
	"slug": "abac-spinn-11-10-400-50-tm270",
	"brand": "ABAC",
	"model": "SPINN 11 10 400/50 TM270",
	"mpn": "4152022629",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "unknown",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-spinn-11-10-400-50-tm270.webp",
		"alt": "Repères techniques ABAC SPINN 11 10 400/50 TM270, référence 4152022629",
		"sourceUrl": "https://www.abacaircompressors.com/content/dam/brands/ABAC/products/leaflet/es/ABAC-Gu%C3%ADa%20Distribuidores%202026%20ES%20v4%20WEB-comp.pdf.coredownload.pdf#page=43",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC SPINN 11 10 400/50 TM270. Le catalogue 2026 identifie le code 4152022629 avec moteur 11 kW, cuve 270 L et masse 255 kg. Le code 4152022648 est la version 11E avec sécheur, à 296 kg et au même débit publié. L’ancienne source concernait une SPINN 2,2 kW : elle ne justifiait ni ce code, ni 11,2 kW, ni le point FAD à 10 bar. Le débit reste documentaire faute de pression de mesure explicite.",
		"verifiedFacts": [
			"Code exact : 4152022629.",
			"Version du catalogue : SPINN 11 10 270, sur cuve 270 L.",
			"Débit publié : 1 416 L/min ; pression effective de mesure non explicitée.",
			"Puissance du catalogue : 11 kW.",
			"Masse : 255 kg.",
			"Dimensions : 1 543 × 720 × 1 337 mm.",
			"Alimentation : 400 V / 3 phases / 50 Hz."
		],
		"limitations": [
			"La pression 10 bar du tableau n’est pas présentée comme un point de mesure FAD explicite.",
			"Une déclaration sur le service continu du moteur IE3 ne quantifie pas le taux de marche du groupe."
		]
	},
	"specifications": [
		{
			"label": "Code exact",
			"value": "4152022629",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Version du catalogue",
			"value": "SPINN 11 10 270, sur cuve 270 L",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Débit publié",
			"value": "1 416 L/min ; pression effective de mesure non explicitée",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance du catalogue",
			"value": "11 kW",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "255 kg",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "1 543 × 720 × 1 337 mm",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "400 V / 3 phases / 50 Hz",
			"evidenceIds": [
				"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152022629-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152054944/spinn22-8-40050k-e-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes SPINN, réf. 4152022629",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 1416 ; Max Working Pressure (bar) : 10, dans le tableau fabricant de la variante 4152022629. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-spinn-11-10-400-50-tm270-continuous-duty-20260927",
			"sourceUrl": "https://www.abacaircompressors.com/en-international/products/screw-compressors",
			"sourceLabel": "ABAC, gamme de compresseurs à vis SPINN, FORMULA et GENESIS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Déclaration de la gamme ABAC à vis ; uniquement les références SPINN, FORMULA et GENESIS revues individuellement dans ce lot."
		},
		{
			"id": "abac-spinn-11-10-400-50-tm270-reserved-20261103-1",
			"sourceUrl": "https://www.abacaircompressors.com/content/dam/brands/ABAC/products/leaflet/es/ABAC-Gu%C3%ADa%20Distribuidores%202026%20ES%20v4%20WEB-comp.pdf.coredownload.pdf#page=43",
			"sourceLabel": "ABAC : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a843a42e6615709ef68389accdb528ff9605f152d286b42321846b972614af5a. Le catalogue 2026 identifie le code 4152022629 avec moteur 11 kW, cuve 270 L et masse 255 kg. Le code 4152022648 est la version 11E avec sécheur, à 296 kg et au même débit publié. L’ancienne source concernait une SPINN 2,2 kW : elle ne justifiait ni ce code, ni 11,2 kW, ni le point FAD à 10 bar. Le débit reste documentaire faute de pression de mesure explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"abac-4152022629-20260926"
		],
		"tankLiters": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"maxPressureBar": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"fadCurve": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"oilType": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"powerKw": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"weightKg": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"voltage": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"phase": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"image": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"editorial": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"specifications": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		],
		"maxPressureBasis": [
			"abac-spinn-11-10-400-50-tm270-reserved-20261103-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"weightKg": 255,
	"voltage": "400 V / 50 Hz",
	"phase": "three-phase",
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
