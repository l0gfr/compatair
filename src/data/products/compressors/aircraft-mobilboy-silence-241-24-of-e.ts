import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-mobilboy-silence-241-24-of-e",
	"slug": "aircraft-mobilboy-silence-241-24-of-e",
	"brand": "Aircraft",
	"model": "MOBILBOY SILENCE 241/24 OF E",
	"mpn": "2002245",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-mobilboy-silence-241-24-of-e.webp",
		"alt": "Repères techniques Aircraft MOBILBOY SILENCE 241/24 OF E, référence 2002245",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/mobilboy-silence-24124-of-e-2002245/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft MOBILBOY SILENCE 241/24 OF E, référence 2002245 : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 120 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1 kW.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 120 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 240 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "600 mm × 280 mm × 600 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "120 l/min",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "WDS",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "24 kg",
			"evidenceIds": [
				"aircraft-2002245-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2002245-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/mobilboy-silence-24124-of-e-2002245/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2002245, réf. 2002245",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 240 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2002245-20260927"
		],
		"tankLiters": [
			"aircraft-2002245-20260927"
		],
		"maxPressureBar": [
			"aircraft-2002245-20260927"
		],
		"fadCurve": [
			"aircraft-2002245-20260927"
		],
		"oilType": [
			"aircraft-2002245-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2002245-20260927"
		],
		"powerKw": [
			"aircraft-2002245-20260927"
		],
		"voltage": [
			"aircraft-2002245-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"powerKw": 1,
	"voltage": "230 V"
};

export default product;
