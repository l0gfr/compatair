import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airboy-131-of-e",
	"slug": "aircraft-airboy-131-of-e",
	"brand": "Aircraft",
	"model": "AIRBOY 131 OF E",
	"mpn": "2001225",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airboy-131-of-e.webp",
		"alt": "Repères techniques Aircraft AIRBOY 131 OF E, référence 2001225",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-131-of-e-2001225/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRBOY 131 OF E, référence 2001225 : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 45 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 0,6 kW.",
			"Débit aspiré : 107 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 45 l/min.",
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
			"value": "Débit aspiré déclaré : 107 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "345 mm × 340 mm × 315 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "45 l/min",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "WDS",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "15,9 kg",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2001225-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airboy-131-of-e-2001225/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001225, réf. 2001225",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 107 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2001225-20260927"
		],
		"tankLiters": [
			"aircraft-2001225-20260927"
		],
		"maxPressureBar": [
			"aircraft-2001225-20260927"
		],
		"fadCurve": [
			"aircraft-2001225-20260927"
		],
		"oilType": [
			"aircraft-2001225-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2001225-20260927"
		],
		"powerKw": [
			"aircraft-2001225-20260927"
		],
		"voltage": [
			"aircraft-2001225-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 107,
	"powerKw": 0.6,
	"voltage": "230 V"
};

export default product;
