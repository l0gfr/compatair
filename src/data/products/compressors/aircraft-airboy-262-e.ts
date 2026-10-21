import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airboy-262-e",
	"slug": "aircraft-airboy-262-e",
	"brand": "Aircraft",
	"model": "AIRBOY 262 E",
	"mpn": "2001247",
	"tankLiters": 2.4,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airboy-262-e.webp",
		"alt": "Repères techniques Aircraft AIRBOY 262 E, référence 2001247",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-262-e-2001247/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "AIRBOY 262 E, article 2001247 : cuve de 2,4 L, maximum de 10 bar, moteur de 1,5 kW et masse approximative de 23 kg. Aircraft publie environ 155 L/min de remplissage à 6 bar. L’AIRBOY 186 OF E possède 6 L, atteint 8 bar et publie environ 90 L/min de remplissage à 6 bar pour 9,2 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 250 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 155 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 1."
		],
		"limitations": [
			"La pression de remplissage est publiée : 6 bar. Sa qualification FAD et les conditions complètes d’essai restent à obtenir ; la courbe FAD reste vide.",
			"Le 262 E est lubrifié et mesure environ 555 × 318 × 430 mm ; le 186 OF E est sans huile. Le réservoir, le poids et l’entretien diffèrent entre ces deux appareils.",
			"Le taux de marche reste inconnu. Un débit utile documenté à la pression de l’outil est nécessaire pour conclure sur un usage soutenu."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 250 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "555 mm × 318 mm × 430 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "155 l/min",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "23 kg",
			"evidenceIds": [
				"aircraft-2001247-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2001247-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-262-e-2001247/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001247, réf. 2001247",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 250 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		},
		{
			"id": "aircraft-2001230-20260927-review-20261021-for-aircraft-airboy-262-e",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-186-of-e-2001230/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001230, réf. 2001230",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 21 octobre 2026 ; SHA-256 du corps : 49205fb1229863e6dd05baa6be184764800d5c78f88439891ae5f25931ccd26d. Configurations comparées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2001247-20260927"
		],
		"tankLiters": [
			"aircraft-2001247-20260927"
		],
		"maxPressureBar": [
			"aircraft-2001247-20260927"
		],
		"fadCurve": [
			"aircraft-2001247-20260927"
		],
		"oilType": [
			"aircraft-2001247-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2001247-20260927"
		],
		"powerKw": [
			"aircraft-2001247-20260927"
		],
		"voltage": [
			"aircraft-2001247-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"voltage": "230 V, 50 Hz"
};

export default product;
