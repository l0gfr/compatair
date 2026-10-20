import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airboy-186-of-e",
	"slug": "aircraft-airboy-186-of-e",
	"brand": "Aircraft",
	"model": "AIRBOY 186 OF E",
	"mpn": "2001230",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airboy-186-of-e.webp",
		"alt": "Repères techniques Aircraft AIRBOY 186 OF E, référence 2001230",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-186-of-e-2001230/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "AIRBOY 186 OF E, article 2001230 : cuve de 6 L, maximum de 8 bar, moteur de 1,1 kW et masse approximative de 9,2 kg. Aircraft publie environ 90 L/min de remplissage à 6 bar. L’AIRBOY 131 OF E conserve 6 L, avec environ 45 L/min à 6 bar et 15,9 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,1 kW.",
			"Débit aspiré : 180 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 90 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 1."
		],
		"limitations": [
			"La pression de remplissage est publiée : 6 bar. La qualification FAD et les conditions complètes d’essai restent à obtenir ; l’aspiration distincte est de 180 L/min.",
			"Les deux machines diffèrent par le groupe, la masse et les dimensions. Le 186 mesure environ 315 × 355 × 370 mm et annonce une puissance acoustiqueLw de 97 dB(A), selon DINEN ISO3744.",
			"Le taux de marche reste inconnu ; le remplissage ne suffit pas à conclure pour un outil exact en usage soutenu."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 180 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "315 mm × 355 mm × 370 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "90 l/min",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "WDS",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "9,2 kg",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		},
		{
			"label": "Puissance acoustique Lw publiée",
			"value": "97 dB(A), DIN EN ISO3744",
			"evidenceIds": [
				"aircraft-2001230-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2001230-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-186-of-e-2001230/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001230, réf. 2001230",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 180 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		},
		{
			"id": "aircraft-2001225-20260927-review-20261020-for-aircraft-airboy-186-of-e",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-131-of-e-2001225/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001225, réf. 2001225",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-20",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : cceef6dc3bb7c8eddfe35385e406f9d6ad4d74249493644f25707c557a6f41fe. Configurations comparées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2001230-20260927"
		],
		"tankLiters": [
			"aircraft-2001230-20260927"
		],
		"maxPressureBar": [
			"aircraft-2001230-20260927"
		],
		"fadCurve": [
			"aircraft-2001230-20260927"
		],
		"oilType": [
			"aircraft-2001230-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2001230-20260927"
		],
		"powerKw": [
			"aircraft-2001230-20260927"
		],
		"voltage": [
			"aircraft-2001230-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 180,
	"powerKw": 1.1,
	"voltage": "230 V"
};

export default product;
